import React from 'react';
import { FileText, CheckCircle, Clock, AlertCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FileCardProps {
  fileName: string;
  status: 'uploading' | 'parsing' | 'completed' | 'error';
  fileSize?: string;
  onRemove?: () => void;
  className?: string;
}

export const FileCard: React.FC<FileCardProps> = ({ 
  fileName, 
  status, 
  fileSize = "2.4 MB", 
  onRemove, 
  className 
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'uploading':
        return <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />;
      case 'parsing':
        return <Clock className="w-4 h-4 text-warning-amber animate-pulse" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-accent" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-destructive" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'uploading':
        return 'Uploading...';
      case 'parsing':
        return 'Parsing content...';
      case 'completed':
        return 'Ready';
      case 'error':
        return 'Failed';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'uploading':
        return 'text-primary';
      case 'parsing':
        return 'text-warning-amber';
      case 'completed':
        return 'text-accent';
      case 'error':
        return 'text-destructive';
    }
  };

  return (
    <div className={cn(
      "group relative p-4 rounded-xl glass-morphism hover-glow transition-all duration-300",
      status === 'completed' && "ai-glow",
      className
    )}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 p-2 rounded-lg bg-primary/20">
          <FileText className="w-4 h-4 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            {fileName}
          </p>
          <div className="flex items-center gap-2 mt-1">
            {getStatusIcon()}
            <span className={cn("text-xs", getStatusColor())}>
              {getStatusText()}
            </span>
            <span className="text-xs text-muted-foreground">• {fileSize}</span>
          </div>
        </div>
        
        {onRemove && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onRemove}
            className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>
      
      {status === 'parsing' && (
        <div className="mt-3">
          <div className="w-full bg-secondary rounded-full h-1.5">
            <div className="bg-primary h-1.5 rounded-full animate-pulse" style={{ width: '60%' }} />
          </div>
        </div>
      )}
    </div>
  );
};