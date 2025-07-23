import React, { useState } from 'react';
import { Send, Mic, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PromptInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const PromptInput: React.FC<PromptInputProps> = ({
  onSendMessage,
  placeholder = "Ask about this exam...",
  disabled = false,
  className
}) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <div className="relative glass-morphism rounded-2xl p-4 ai-glow">
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              disabled={disabled}
              rows={1}
              className="w-full bg-transparent border-none outline-none resize-none text-sm text-foreground placeholder-muted-foreground max-h-32"
              style={{ minHeight: '24px' }}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="hover-glow h-8 w-8"
              onClick={() => setIsRecording(!isRecording)}
            >
              <Mic className={cn(
                "w-4 h-4 transition-colors",
                isRecording ? "text-destructive animate-pulse" : "text-muted-foreground"
              )} />
            </Button>
            
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="hover-glow h-8 w-8"
            >
              <Paperclip className="w-4 h-4 text-muted-foreground" />
            </Button>
            
            <Button
              type="submit"
              size="icon"
              disabled={!message.trim() || disabled}
              className="hover-glow h-8 w-8 ai-glow"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};