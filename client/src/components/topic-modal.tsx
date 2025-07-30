import { useState, useEffect } from "react";
import { X, ArrowLeft, ArrowRight, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useTrainingProgress } from "@/hooks/use-training-progress";

interface TopicModalProps {
  topicNumber: number;
  onClose: () => void;
}

export default function TopicModal({ topicNumber, onClose }: TopicModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState<{ show: boolean; correct: boolean; message: string }>({
    show: false,
    correct: false,
    message: ""
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const { updateProgress, markTopicCompleted, completedTopics } = useTrainingProgress();

  const maxSteps = 5;
  
  const topicContent = {
    1: {
      title: "Phishing & Social Engineering",
      color: "red",
      steps: [
        {
          title: "What is Phishing?",
          content: "Phishing is a cyberattack where criminals impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data. These attacks typically arrive via email but can also occur through text messages, phone calls, or fake websites.",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "91% of cyberattacks start with a phishing email, making it the #1 threat to SMBs."
        },
        {
          title: "Common Phishing Tactics",
          content: "Attackers use urgency, fear, and authority to manipulate victims. They create fake websites that look identical to legitimate ones, use official logos and branding, and often claim there's an urgent problem that requires immediate action.",
          image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "Phishing attacks have increased by 65% in the last year, with SMBs being 3x more likely to be targeted."
        },
        {
          title: "Real-World Examples",
          content: "A local accounting firm received an email appearing to be from their bank, asking them to verify account details. The email looked legitimate but contained a malicious link that would have stolen their banking credentials.",
          image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "The average cost of a successful phishing attack on an SMB is $1.6 million."
        },
        {
          title: "Prevention Strategies",
          content: "Always verify sender identity through a separate communication channel. Look for spelling errors, generic greetings, and suspicious URLs. Implement email filtering and train employees to report suspicious emails.",
          image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "Companies with security awareness training have 70% fewer successful phishing attacks."
        },
        {
          title: "Incident Response",
          content: "If you suspect a phishing attack: immediately disconnect from the internet, don't enter any credentials, report the incident to IT, scan for malware, and change any potentially compromised passwords.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "Quick incident response can reduce the impact of a breach by up to 80%."
        }
      ],
      quiz: {
        question: "Which of the following is the most common sign of a phishing email?",
        options: [
          { value: "a", label: "Generic greetings like 'Dear Customer'" },
          { value: "b", label: "Professional looking email design" },
          { value: "c", label: "Proper company logo usage" }
        ],
        correct: "a",
        explanation: "Correct! Generic greetings are a major red flag. Legitimate companies typically address you by name and have your personal information on file."
      }
    },
    2: {
      title: "Password Security & MFA",
      color: "blue",
      steps: [
        {
          title: "Password Vulnerabilities",
          content: "Weak passwords are the gateway to 81% of data breaches. Most users reuse passwords across multiple accounts, create predictable patterns, or use easily guessable information like birthdays or pet names.",
          image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "It takes only 2 seconds to crack a 6-character password, but 34,000 years to crack a 12-character password with mixed characters."
        },
        {
          title: "Password Best Practices",
          content: "Create passwords with at least 12 characters, use a mix of uppercase, lowercase, numbers, and symbols. Consider using passphrases - long sentences that are easy to remember but hard to crack.",
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "A 15-character passphrase like 'Coffee#Brings$Energy!' is both secure and memorable."
        },
        {
          title: "Password Managers",
          content: "Password managers generate, store, and automatically fill complex passwords for all your accounts. They ensure each account has a unique, strong password without the burden of memorization.",
          image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "Users with password managers have 65% stronger passwords and save 12 minutes per week on login activities."
        },
        {
          title: "Multi-Factor Authentication",
          content: "MFA adds an extra layer of security by requiring two or more verification factors. Even if your password is compromised, attackers still can't access your account without the second factor.",
          image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "MFA blocks 99.9% of automated attacks, making it one of the most effective security measures."
        },
        {
          title: "Business Implementation",
          content: "Develop a company password policy, require MFA for all business accounts, provide password manager licenses to employees, and regularly audit account security across your organization.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          fact: "Businesses with comprehensive password policies reduce security incidents by 85%."
        }
      ],
      quiz: {
        question: "What makes a password strong?",
        options: [
          { value: "a", label: "At least 12 characters with mixed case, numbers, and symbols" },
          { value: "b", label: "Using personal information like birthdays" },
          { value: "c", label: "Using the same password for all accounts" }
        ],
        correct: "a",
        explanation: "Correct! Strong passwords should be at least 12 characters long and include a mix of character types. Personal information and password reuse are major security risks."
      }
    }
  };

  const currentTopic = topicContent[topicNumber as keyof typeof topicContent];
  const progressPercentage = showQuiz ? 100 : (currentStep / maxSteps) * 100;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleNext = () => {
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePrevious = () => {
    if (showQuiz) {
      setShowQuiz(false);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleQuizSubmit = () => {
    if (!selectedAnswer) {
      setQuizFeedback({
        show: true,
        correct: false,
        message: "Please select an answer."
      });
      return;
    }

    const isCorrect = selectedAnswer === currentTopic.quiz.correct;
    setQuizFeedback({
      show: true,
      correct: isCorrect,
      message: isCorrect ? currentTopic.quiz.explanation : "Not quite right. The correct answer focuses on identifying strong password characteristics."
    });

    if (isCorrect && !completedTopics.includes(topicNumber)) {
      markTopicCompleted(topicNumber);
      setIsCompleted(true);
    }
  };

  const handleComplete = () => {
    onClose();
    if (completedTopics.length === 2) {
      setTimeout(() => {
        alert('🎉 Congratulations! You\'ve completed both cybersecurity training topics. Your business is now better protected!');
        updateProgress(100);
      }, 500);
    }
  };

  const currentStepData = currentTopic.steps[currentStep - 1];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900">{currentTopic.title}</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="bg-slate-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentTopic.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
                }`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-slate-600 mt-2">
              {showQuiz ? 'Assessment' : `Step ${currentStep} of ${maxSteps} • ${currentStepData.title}`}
            </p>
          </div>

          {/* Content Section */}
          {!showQuiz ? (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{currentStepData.title}</h3>
                <img 
                  src={currentStepData.image}
                  alt={`${currentStepData.title} illustration`}
                  className="rounded-lg w-full h-64 object-cover mb-4"
                />
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  {currentStepData.content}
                </p>
                <div className={`border-l-4 p-4 rounded ${
                  currentTopic.color === 'red' 
                    ? 'bg-red-50 border-red-400' 
                    : 'bg-blue-50 border-blue-400'
                }`}>
                  <p className={currentTopic.color === 'red' ? 'text-red-800' : 'text-blue-800'}>
                    <strong>Key Fact:</strong> {currentStepData.fact}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Quiz Section */
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Knowledge Check</h3>
              <p className="text-lg text-slate-700">{currentTopic.quiz.question}</p>
              
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                {currentTopic.quiz.options.map((option, index) => (
                  <div key={option.value} className="flex items-center space-x-2 p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {!quizFeedback.show ? (
                <Button 
                  onClick={handleQuizSubmit}
                  className={`w-full py-3 ${
                    currentTopic.color === 'red' 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-blue-700 hover:bg-blue-900'
                  } text-white`}
                  size="lg"
                >
                  Submit Answer
                </Button>
              ) : (
                <div className={`p-4 rounded-lg ${
                  quizFeedback.correct 
                    ? 'bg-green-50 border border-green-200' 
                    : selectedAnswer 
                      ? 'bg-red-50 border border-red-200'
                      : 'bg-yellow-50 border border-yellow-200'
                }`}>
                  <div className="flex items-center mb-2">
                    {quizFeedback.correct ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    ) : selectedAnswer ? (
                      <XCircle className="w-5 h-5 text-red-600 mr-2" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                    )}
                    <p className={
                      quizFeedback.correct 
                        ? 'text-green-800' 
                        : selectedAnswer 
                          ? 'text-red-800'
                          : 'text-yellow-800'
                    }>
                      {quizFeedback.message}
                    </p>
                  </div>
                  {quizFeedback.correct && (
                    <Button 
                      onClick={handleComplete}
                      className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                      size="lg"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Complete Topic
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          {!showQuiz && (
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                variant="outline"
                size="lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                className={currentTopic.color === 'red' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-700 hover:bg-blue-900'}
                size="lg"
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
