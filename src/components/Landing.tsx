import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

interface LandingProps {
  onGetStarted: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ai-blue/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
          
          {/* Left Side - Intro Description */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-ai-blue bg-clip-text text-transparent animate-bounce-in">
                👋 Welcome to Exam Whisperer
              </h1>
              
              {/* Subheading */}
              <p className="text-xl text-muted-foreground leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                Your AI-powered assistant that analyzes exam papers, finds repeated questions, and helps you prepare smartly – unit by unit.
              </p>
            </div>

            {/* Mock Comment */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <Card className="bg-glass-white/10 backdrop-blur-md border-primary/20 p-4 relative">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-success-green text-white">S</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground/90">Sarah K.</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      "Great! This AI helped me crack my sem exam – thanks Exam Whisperer! 🎯"
                    </p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-4 h-4 bg-success-green rounded-full animate-pulse"></div>
                </div>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    onClick={onGetStarted}
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-ai-blue hover:from-primary-glow hover:to-ai-blue/80 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
                  >
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Try It Now
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Launch your AI study assistant</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Right Side - About Developer */}
          <div className="flex items-center justify-center animate-slide-in-right">
            <Card className="w-full max-w-md bg-glass-white/10 backdrop-blur-md border-primary/20 shadow-2xl">
              <CardContent className="p-8 space-y-6">
                {/* Avatar and Intro */}
                <div className="text-center space-y-4">
                  <Avatar className="w-20 h-20 mx-auto ring-4 ring-primary/30">
                    <AvatarImage src="/placeholder.svg" alt="Abhishek Madhura" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-ai-blue text-white text-2xl font-bold">
                      AM
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Abhishek Madhura</h3>
                    <p className="text-muted-foreground text-sm">Full-Stack Developer</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-center text-muted-foreground leading-relaxed">
                  Hi, I'm Abhishek – a full-stack developer building helpful AI apps to make learning easier.
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="p-2 rounded-lg bg-foreground/10 hover:bg-primary/20 transition-colors duration-200 hover:scale-110 transform"
                  >
                    <Github className="w-5 h-5 text-foreground/70 hover:text-primary" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-lg bg-foreground/10 hover:bg-primary/20 transition-colors duration-200 hover:scale-110 transform"
                  >
                    <Linkedin className="w-5 h-5 text-foreground/70 hover:text-primary" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-lg bg-foreground/10 hover:bg-primary/20 transition-colors duration-200 hover:scale-110 transform"
                  >
                    <Twitter className="w-5 h-5 text-foreground/70 hover:text-primary" />
                  </a>
                </div>

                {/* Badge */}
                <div className="text-center">
                  <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-ai-blue/20 text-foreground border-primary/30">
                    Built with ❤️ using RAG + 21st.dev
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-ai-blue rounded-full animate-bounce opacity-40" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 left-32 w-2 h-2 bg-success-green rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-warning-amber rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};