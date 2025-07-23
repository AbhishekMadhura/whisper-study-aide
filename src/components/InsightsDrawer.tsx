import React from 'react';
import { TrendingUp, Brain, Clock, Target, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface InsightsDrawerProps {
  isOpen?: boolean;
  className?: string;
}

export const InsightsDrawer: React.FC<InsightsDrawerProps> = ({ 
  isOpen = true, 
  className 
}) => {
  const frequentQuestions = [
    { question: "Explain the concept of normalization in DBMS", frequency: "85%", marks: "10M" },
    { question: "What are the ACID properties?", frequency: "78%", marks: "5M" },
    { question: "Differentiate between SQL and NoSQL", frequency: "72%", marks: "10M" },
  ];

  const unitTrends = [
    { unit: "Unit I", percentage: 25, questions: 12, color: "bg-primary" },
    { unit: "Unit II", percentage: 30, questions: 15, color: "bg-accent" },
    { unit: "Unit III", percentage: 20, questions: 8, color: "bg-warning-amber" },
    { unit: "Unit IV", percentage: 15, questions: 6, color: "bg-destructive" },
    { unit: "Unit V", percentage: 10, questions: 4, color: "bg-muted" },
  ];

  const suggestions = [
    { title: "Focus on Unit II", reason: "Highest question frequency", priority: "high" },
    { title: "Review ACID Properties", reason: "Appears in 78% of papers", priority: "medium" },
    { title: "Practice SQL Queries", reason: "Common in practical exams", priority: "high" },
  ];

  if (!isOpen) return null;

  return (
    <div className={cn(
      "w-80 h-full bg-background border-l border-border p-6 overflow-y-auto slide-in-right",
      className
    )}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">AI Insights</h2>
        </div>

        {/* Frequent Questions */}
        <Card className="p-4 glass-morphism">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-accent" />
            <h3 className="font-medium">Most Frequent Questions</h3>
          </div>
          <div className="space-y-3">
            {frequentQuestions.map((q, index) => (
              <div key={index} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm flex-1">{q.question}</p>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full ml-2">
                    {q.marks}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Frequency</span>
                  <span className="text-xs font-medium text-accent">{q.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Unit Trends */}
        <Card className="p-4 glass-morphism">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-warning-amber" />
            <h3 className="font-medium">Unit Analysis</h3>
          </div>
          <div className="space-y-3">
            {unitTrends.map((unit, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{unit.unit}</span>
                  <span className="text-xs text-muted-foreground">{unit.questions} questions</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className={cn("h-2 rounded-full transition-all duration-1000", unit.color)}
                    style={{ width: `${unit.percentage}%` }}
                  />
                </div>
                <div className="text-xs text-muted-foreground">{unit.percentage}% of total questions</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Smart Suggestions */}
        <Card className="p-4 glass-morphism">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-primary" />
            <h3 className="font-medium">Study Suggestions</h3>
          </div>
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-between h-auto p-3 hover-glow"
              >
                <div className="text-left">
                  <p className="text-sm font-medium">{suggestion.title}</p>
                  <p className="text-xs text-muted-foreground">{suggestion.reason}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    suggestion.priority === "high" ? "bg-destructive" : "bg-warning-amber"
                  )} />
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Button>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-2">
          <Button className="w-full hover-glow" variant="outline">
            Generate Mock Test
          </Button>
          <Button className="w-full hover-glow ai-glow">
            Get Study Plan
          </Button>
        </div>
      </div>
    </div>
  );
};