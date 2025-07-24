import React, { useState, useEffect } from 'react';
import { Brain, Menu, Sun, Moon, Sparkles, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
  const [insightsOpen, setInsightsOpen] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  
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

  if (showLanding) {
    return <Landing onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="flex h-screen w-full bg-background text-foreground overflow-hidden animate-slide-in-right">
      {/* Left Sidebar */}
      <div className={cn(
        "flex flex-col bg-background border-r border-border transition-all duration-300 slide-in-left",
        sidebarOpen ? "w-80" : "w-16"
      )}>
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/20 ai-glow">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Exam Whisperer
                  </h1>
                  <p className="text-xs text-muted-foreground">AI Study Assistant</p>
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hover-glow"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {sidebarOpen && (
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            {/* File Upload */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <h2 className="font-semibold">Upload Files</h2>
              </div>
              <DropZone onFileUpload={handleFileUpload} />
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">Uploaded Files</h3>
                {uploadedFiles.map((file) => (
                  <FileCard
                    key={file.id}
                    fileName={file.name}
                    status={file.status}
                    fileSize={file.size}
                    onRemove={() => handleRemoveFile(file.id)}
                  />
                ))}
              </div>
            )}

            <Separator />

            {/* Units */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <h3 className="font-semibold">Units</h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {units.map((unit) => (
                  <UnitButton
                    key={unit.name}
                    unit={unit.name}
                    questionCount={unit.questionCount}
                    isActive={selectedUnit === unit.name}
                    onClick={() => setSelectedUnit(selectedUnit === unit.name ? null : unit.name)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h2 className="font-semibold">
                  {selectedFile || 'General Discussion'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {selectedUnit ? `Focused on ${selectedUnit}` : 'Ask me anything about your exams'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hover-glow"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="outline"
                onClick={() => setInsightsOpen(!insightsOpen)}
                className="hover-glow"
              >
                <Brain className="w-4 h-4 mr-2" />
                Insights
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
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
        </div>

        {/* Input */}
        <div className="p-6 border-t border-border bg-background/80 backdrop-blur-sm">
          <PromptInput
            onSendMessage={handleSendMessage}
            disabled={isTyping}
            placeholder={selectedUnit ? `Ask about ${selectedUnit}...` : "Ask about this exam..."}
          />
        </div>
      </div>

      {/* Right Insights Drawer */}
      {insightsOpen && <InsightsDrawer />}
    </div>
  );
};