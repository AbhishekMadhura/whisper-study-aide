import React from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface UnitButtonProps {
  unit: string;
  isActive?: boolean;
  questionCount?: number;
  onClick?: () => void;
  className?: string;
}

export const UnitButton: React.FC<UnitButtonProps> = ({
  unit,
  isActive = false,
  questionCount = 0,
  onClick,
  className
}) => {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      onClick={onClick}
      className={cn(
        "relative h-auto p-4 flex flex-col items-start gap-2 hover-glow transition-all duration-300",
        isActive && "ai-glow bg-primary text-primary-foreground",
        !isActive && "glass-morphism hover:bg-primary/10",
        className
      )}
    >
      <div className="flex items-center gap-2 w-full">
        <BookOpen className="w-4 h-4" />
        <span className="font-medium">{unit}</span>
      </div>
      
      {questionCount > 0 && (
        <div className="text-xs opacity-75">
          {questionCount} questions found
        </div>
      )}
      
      {isActive && (
        <div className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse" />
      )}
    </Button>
  );
};