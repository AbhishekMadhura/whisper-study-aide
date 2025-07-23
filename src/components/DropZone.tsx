import React, { useState, useCallback } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropZoneProps {
  onFileUpload?: (files: File[]) => void;
  className?: string;
}

export const DropZone: React.FC<DropZoneProps> = ({ onFileUpload, className }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const pdfFiles = files.filter(file => file.type === 'application/pdf');
    
    if (pdfFiles.length > 0) {
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        onFileUpload?.(pdfFiles);
      }, 2000);
    }
  }, [onFileUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={cn(
        "relative p-8 border-2 border-dashed rounded-2xl transition-all duration-300 cursor-pointer glass-morphism",
        isDragOver ? "border-primary bg-primary/10 ai-glow" : "border-border hover:border-primary/50",
        isUploading && "animate-pulse",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        {isUploading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
        ) : (
          <Upload className={cn(
            "h-8 w-8 transition-colors",
            isDragOver ? "text-primary" : "text-muted-foreground"
          )} />
        )}
        
        <div>
          <p className="text-sm font-medium">
            {isUploading ? "Processing PDF..." : "Drop PDF files here"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {isUploading ? "Extracting questions and units..." : "Or click to browse files"}
          </p>
        </div>
      </div>
      
      {isDragOver && (
        <div className="absolute inset-0 bg-primary/5 rounded-2xl animate-pulse" />
      )}
    </div>
  );
};