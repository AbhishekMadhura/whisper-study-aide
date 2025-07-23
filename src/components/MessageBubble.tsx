import React from 'react';
import { User, Bot, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
  sources?: Array<{ text: string; page: number; }>;
  className?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isUser,
  timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  sources = [],
  className
}) => {
  return (
    <div className={cn(
      "flex gap-3 mb-6 bounce-in",
      isUser ? "justify-end" : "justify-start",
      className
    )}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ai-glow">
          <Bot className="w-4 h-4 text-primary" />
        </div>
      )}
      
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 glass-morphism",
        isUser ? "bg-primary/20 ml-12" : "bg-secondary/50 mr-12"
      )}>
        <div className="space-y-2">
          <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
            {message}
          </p>
          
          {sources.length > 0 && (
            <div className="mt-3 pt-2 border-t border-border/30">
              <div className="flex items-center gap-1 mb-2">
                <Quote className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-medium">Sources</span>
              </div>
              <div className="space-y-1">
                {sources.map((source, index) => (
                  <div 
                    key={index} 
                    className="text-xs p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <span className="text-muted-foreground">Page {source.page}:</span>
                    <span className="ml-2 text-foreground">{source.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
          <User className="w-4 h-4 text-accent" />
        </div>
      )}
    </div>
  );
};