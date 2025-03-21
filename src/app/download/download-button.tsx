"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  slugs: string[];
}

export function DownloadButton({ slugs }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);

      // Call the API to generate and download the ZIP file
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slugs }),
      });

      if (!response.ok) {
        throw new Error("Failed to download rules");
      }

      // Get the blob and create a download link
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "project-rules.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading rules:", error);
      alert("Failed to download rules. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isLoading || slugs.length === 0}
      className="ml-auto"
    >
      {isLoading ? (
        <span className="animate-spin mr-2">⏳</span>
      ) : (
        <Download className="mr-2 h-4 w-4" />
      )}
      Download Rules
    </Button>
  );
}
