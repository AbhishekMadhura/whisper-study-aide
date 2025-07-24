import React, { useState, useEffect, useRef } from 'react';
import { Bot, Upload, MessageSquare, Sun, Moon, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DropZone } from './DropZone';
import { FileCard } from './FileCard';
import { MessageBubble } from './MessageBubble';
import { PromptInput } from './PromptInput';
import { TypingIndicator } from './TypingIndicator';
import { UnitButton } from './UnitButton';
import { InsightsDrawer } from './InsightsDrawer';
import { Landing } from './Landing';
import { cn } from '@/lib/utils';

interface UploadedFile {
  id: string;
  name: string;
  status: 'uploading' | 'parsing' | 'completed' | 'error';
  size: string;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
  sources?: Array<{ text: string; page: number; }>;
}

export const ExamWhisperer: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    { id: '1', name: 'DBMS_PreviousPapers_2023.pdf', status: 'completed', size: '2.4 MB' },
    { id: '2', name: 'DataStructures_ImportantQns.pdf', status: 'parsing', size: '1.8 MB' },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI study assistant. I've analyzed your uploaded exam papers and I'm ready to help you prepare. What would you like to know?",
      isUser: false,
      timestamp: '10:30 AM',
      sources: []
    }
  ]);

  const units = [
    { name: 'Unit I', questionCount: 12 },
    { name: 'Unit II', questionCount: 15 },
    { name: 'Unit III', questionCount: 8 },
    { name: 'Unit IV', questionCount: 6 },
    { name: 'Unit V', questionCount: 4 },
  ];

  const handleFileUpload = (files: File[]) => {
    files.forEach((file) => {
      const newFile: UploadedFile = {
        id: Date.now().toString(),
        name: file.name,
        status: 'uploading',
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      };
      
      setUploadedFiles(prev => [...prev, newFile]);
      
      // Simulate file processing
      setTimeout(() => {
        setUploadedFiles(prev => prev.map(f => 
          f.id === newFile.id ? { ...f, status: 'parsing' } : f
        ));
        
        setTimeout(() => {
          setUploadedFiles(prev => prev.map(f => 
            f.id === newFile.id ? { ...f, status: 'completed' } : f
          ));
        }, 3000);
      }, 1000);
    });
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(text),
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: [
          { text: "Database normalization is the process of organizing data...", page: 15 },
          { text: "The first normal form (1NF) requires that...", page: 16 }
        ]
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, aiResponse]);
    }, 2000);
  };

  const generateAIResponse = (question: string): string => {
    if (question.toLowerCase().includes('normalization')) {
      return "Database normalization is a systematic approach to organizing data in a database to reduce redundancy and improve data integrity. It involves decomposing tables to eliminate data anomalies and ensure that each piece of information is stored in only one place.\n\nThe main normal forms are:\n1. **First Normal Form (1NF)**: Eliminates repeating groups\n2. **Second Normal Form (2NF)**: Eliminates partial dependencies\n3. **Third Normal Form (3NF)**: Eliminates transitive dependencies\n\nBased on previous exam papers, this topic appears in 85% of exams with varying mark distributions.";
    }
    return "I can help you understand this concept better. Based on the uploaded exam papers, I've found relevant information and patterns that can help you prepare effectively.";
  };

  const handleRemoveFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (showLanding) {
    return <Landing onGetStarted={handleGetStarted} />;
  }

  return (
    <div className={cn(
      "h-screen flex flex-col transition-colors duration-300 font-inter",
      isDarkMode ? "dark bg-background" : "bg-background"
    )}>
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              📚 Exam Whisperer
            </h1>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hover-glow"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setInsightsOpen(!insightsOpen)}
              className="hover-glow"
            >
              <BarChart3 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-4xl mx-auto flex flex-col">
          <ScrollArea className="flex-1 px-6">
            <div className="py-6 space-y-6">
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                  sources={message.sources}
                />
              ))}
              
              {isTyping && <TypingIndicator />}
              
              {/* Auto-scroll target */}
              <div ref={messagesEndRef} />
              
              {messages.length === 1 && messages[0]?.text.includes("AI study assistant") && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center ai-glow">
                    <Bot className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 fade-in">
                    Welcome to Exam Whisperer
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto text-lg fade-in">
                    Your AI-powered study companion. Upload exam papers, ask questions, and get intelligent insights to ace your exams.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-2 justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}
                      className="hover-glow"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Papers
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSendMessage("What are the most frequently asked questions?")}
                      className="hover-glow"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Ask Sample Question
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t border-border bg-background/80 backdrop-blur-sm p-6">
            <div className="max-w-3xl mx-auto">
              <PromptInput
                onSendMessage={handleSendMessage}
                disabled={isTyping}
                placeholder="Ask anything about your exam papers..."
                className="w-full"
              />
              
              {/* File Upload (Hidden) */}
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  handleFileUpload(files);
                }}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Insights Drawer */}
      {insightsOpen && <InsightsDrawer isOpen={insightsOpen} />}
    </div>
  );
};