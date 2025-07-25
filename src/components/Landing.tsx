import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, BookOpen, Brain, FileText, Users, Mail } from 'lucide-react';

interface LandingProps {
  onGetStarted: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <header className="relative z-50 flex items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-white" />
          <span className="text-xl font-bold text-white">ExamWhisperer</span>
        </div>
        
        {/* Mobile Menu */}
        <button className="p-2 text-white hover:text-gray-300 transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-32">
        {/* Hero Section */}
        <section className="text-center space-y-12 animate-fade-in">
          {/* 3D Book Icon */}
          <div className="flex justify-center animate-slide-in-up">
            <div className="relative group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
              Study Guides for{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Achievers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-inter">
              The smartest way to learn, revise, and succeed in your exams.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={onGetStarted}
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm"
            >
              Get Started
            </Button>
            
            <Button 
              variant="outline"
              className="border-gray-600 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Browse Subjects
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 mt-32">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-6 h-6 text-white" />
                <span className="font-bold text-white">ExamWhisperer</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered study guides for academic success.
              </p>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Product</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Features</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">API</a>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Docs</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Guides</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Blog</a>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 ExamWhisperer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};