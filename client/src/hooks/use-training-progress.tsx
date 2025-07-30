import { useState, useEffect } from "react";

interface TrainingProgress {
  progress: number;
  completedTopics: number[];
  updateProgress: (percentage: number) => void;
  markTopicCompleted: (topicNumber: number) => void;
}

export function useTrainingProgress(): TrainingProgress {
  const [progress, setProgress] = useState(0);
  const [completedTopics, setCompletedTopics] = useState<number[]>([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('cyberguard-progress');
    const savedTopics = localStorage.getItem('cyberguard-completed-topics');
    
    if (savedProgress) {
      setProgress(parseInt(savedProgress, 10));
    }
    
    if (savedTopics) {
      setCompletedTopics(JSON.parse(savedTopics));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cyberguard-progress', progress.toString());
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('cyberguard-completed-topics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  const updateProgress = (percentage: number) => {
    setProgress(Math.max(progress, percentage)); // Only allow progress to increase
  };

  const markTopicCompleted = (topicNumber: number) => {
    if (!completedTopics.includes(topicNumber)) {
      const newCompletedTopics = [...completedTopics, topicNumber];
      setCompletedTopics(newCompletedTopics);
      
      // Update progress based on completed topics
      const newProgress = 50 + (newCompletedTopics.length * 25);
      updateProgress(newProgress);
    }
  };

  return {
    progress,
    completedTopics,
    updateProgress,
    markTopicCompleted
  };
}
