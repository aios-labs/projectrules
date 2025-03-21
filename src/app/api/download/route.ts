import { NextRequest, NextResponse } from 'next/server';
import { getRules } from '@/lib/rules';
import archiver from 'archiver';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { slugs } = await request.json();

    if (!slugs || !Array.isArray(slugs) || slugs.length === 0) {
      return NextResponse.json(
        { error: 'Invalid or missing slugs parameter' },
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
    // Read the file content
    const fileContent = await fs.readFile(rule.path, 'utf8');

    // Get just the filename without path
    const fileName = path.basename(rule.path);

    // Add file to the archive
    archive.append(fileContent, { name: fileName });
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