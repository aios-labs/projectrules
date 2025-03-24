import { NextRequest, NextResponse } from 'next/server';
import { getRules } from '@/lib/rules';
import archiver from 'archiver';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const slugsParam = url.searchParams.get('slugs');

    if (!slugsParam) {
      return NextResponse.json(
        { error: 'Missing slugs parameter' },
        { status: 400 }
      );
    }

    const slugs = slugsParam.split(',').filter(Boolean);

    if (slugs.length === 0) {
      return NextResponse.json(
        { error: 'No valid slugs provided' },
        { status: 400 }
      );
    }

    return await generateZip(slugs);
  } catch (error) {
    console.error('Error processing download request:', error);
    return NextResponse.json(
      { error: 'Failed to process download request' },
      { status: 500 }
    );
  }
}

async function generateZip(slugs: string[]) {
  // Get all rules and filter by the requested slugs
  const allRules = await getRules();
  const rulesToDownload = allRules.filter(rule => slugs.includes(rule.slug));

  if (rulesToDownload.length === 0) {
    return NextResponse.json(
      { error: 'No valid rules found to download' },
      { status: 404 }
    );
  }

  // Create a ZIP archive
  const archive = archiver('zip', {
    zlib: { level: 9 } // Maximum compression
  });

  // Create an array to collect chunks
  const chunks: Uint8Array[] = [];

  // Listen for all archive data events
  archive.on('data', (chunk) => {
    chunks.push(chunk);
  });

  // When archive is finalized, create a blob and send it
  const archivePromise = new Promise<Buffer>((resolve, reject) => {
    archive.on('end', () => {
      const buffer = Buffer.concat(chunks);
      resolve(buffer);
    });

    archive.on('error', (err) => {
      reject(err);
    });
  });

  // Add each rule to the archive
  for (const rule of rulesToDownload) {
    // Get just the filename without path
    const fileName = path.basename(rule.path);

    // Filter frontmatter to only include fields that don't start with __meta__
    const filteredFrontmatter: Record<string, string | string[] | number | undefined> = {};
    for (const [key, value] of Object.entries(rule.frontmatter)) {
      if (!key.startsWith('__meta__')) {
        filteredFrontmatter[key] = value;
      }
    }

    // Create frontmatter string
    let frontmatterContent = '---\n';
    for (const [key, value] of Object.entries(filteredFrontmatter)) {
      frontmatterContent += `${key}: ${JSON.stringify(value)}\n`;
    }
    frontmatterContent += '---\n\n';

    // Combine frontmatter with content
    const fullContent = frontmatterContent + rule.content;

    // Add file to the archive using the content already in the rule object
    archive.append(fullContent, { name: fileName });
  }

  // Finalize the archive
  archive.finalize();

  // Wait for the archive to be fully created
  const zipBuffer = await archivePromise;

  // Return the ZIP file as a response with appropriate headers
  return new NextResponse(zipBuffer, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="project-rules.zip"',
    },
  });
}