import React from 'react';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TypingIndicatorProps {
  className?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ className }) => {
  return (
    <div className={cn("flex gap-3 mb-6 bounce-in", className)}>
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ai-glow">
        <Bot className="w-4 h-4 text-primary" />
      </div>
      
      <div className="max-w-[80%] rounded-2xl px-4 py-3 glass-morphism bg-secondary/50 mr-12">
        <div className="flex items-center gap-1">
          <span className="text-sm text-muted-foreground">AI is thinking</span>
          <div className="flex gap-1 ml-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full typing-dots" style={{ animationDelay: '0ms' }} />
            <div className="w-1.5 h-1.5 bg-primary rounded-full typing-dots" style={{ animationDelay: '200ms' }} />
            <div className="w-1.5 h-1.5 bg-primary rounded-full typing-dots" style={{ animationDelay: '400ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
};