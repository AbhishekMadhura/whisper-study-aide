import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Github, Linkedin, Twitter, Play } from 'lucide-react';

interface LandingProps {
  onGetStarted: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden font-['Inter',system-ui,sans-serif]">
      {/* Animated Background with ChatGPT-style flowing gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-pulse-glow opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/25 to-primary/15 rounded-full blur-3xl animate-pulse-glow opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl animate-pulse-glow opacity-40" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-screen-lg mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 mb-20 animate-fade-in">
          {/* Main Heading with typing effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-slide-in-up leading-tight">
            👋 Welcome to Exam Whisperer
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Your AI-powered study buddy. Upload question papers, find repeated questions, get unit-wise suggestions — powered by RAG.
          </p>

          {/* Mock Comment */}
          <div className="flex justify-center animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="max-w-md bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                      SK
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-foreground">Sarah K.</p>
                    <p className="text-muted-foreground mt-1 italic">
                      "This literally changed how I study. Thanks Exam Whisperer! 🔥"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={onGetStarted}
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
                >
                  <Play className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                  Try It Now
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-background/95 backdrop-blur-sm">
                <p>Launch your AI assistant</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </section>

        {/* About Developer Section */}
        <section className="animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex justify-center">
            <Card className="max-w-md w-full bg-background/60 backdrop-blur-xl border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-8 space-y-6">
                {/* Avatar and Intro */}
                <div className="text-center space-y-4">
                  <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary/20 shadow-lg">
                    <AvatarImage src="/placeholder.svg" alt="Abhishek Madhura" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
                      AM
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Abhishek Madhura</h3>
                    <p className="text-muted-foreground">Full-Stack Developer</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-center text-muted-foreground leading-relaxed">
                  Hi, I'm Abhishek – full stack dev passionate about making learning smarter with AI. This is my personal RAG-powered tool.
                </p>

                {/* Badge */}
                <div className="text-center">
                  <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border-primary/30 px-4 py-1 text-sm">
                    Built with ❤️ using RAG, LangChain & 21st.dev
                  </Badge>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://github.com/yourprofile" 
                    className="p-3 rounded-xl bg-background/50 border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 hover:scale-110 transform group"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    className="p-3 rounded-xl bg-background/50 border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 hover:scale-110 transform group"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href="https://twitter.com/yourprofile" 
                    className="p-3 rounded-xl bg-background/50 border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 hover:scale-110 transform group"
                  >
                    <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute top-20 left-[10%] w-2 h-2 bg-primary/40 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-[25%] left-[20%] w-2.5 h-2.5 bg-primary/30 rounded-full animate-bounce opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-[25%] w-2 h-2 bg-accent/40 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};