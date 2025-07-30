import { useState } from "react";
import { Fish, Key, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopicModal from "./topic-modal";
import { useTrainingProgress } from "@/hooks/use-training-progress";

export default function TrainingTopics() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const { updateProgress } = useTrainingProgress();

  const handleStartTopic = (topicNum: number) => {
    setActiveModal(topicNum);
    updateProgress(25);
  };

  const topics = [
    {
      id: 1,
      title: "Phishing & Social Engineering",
      duration: "5 minutes",
      icon: Fish,
      iconColor: "text-red-600",
      bgColor: "from-red-50 to-orange-50",
      borderColor: "border-red-100",
      buttonColor: "bg-red-600 hover:bg-red-700",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      description: "Learn to identify and defend against the most common cyber attack method. Understand email security, social engineering tactics, and how to respond to threats.",
      features: [
        "Email phishing identification",
        "Social engineering tactics",
        "Real-world case studies",
        "Prevention strategies"
      ]
    },
    {
      id: 2,
      title: "Password Security & MFA",
      duration: "5 minutes",
      icon: Key,
      iconColor: "text-blue-700",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      buttonColor: "bg-blue-700 hover:bg-blue-900",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      description: "Implement fundamental security practices to protect your accounts. Learn password best practices, manager tools, and multi-factor authentication setup.",
      features: [
        "Password best practices",
        "Password manager setup",
        "MFA implementation",
        "Security implementation guides"
      ]
    }
  ];

  return (
    <>
      <section id="topics" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Learning Modules</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Master the two most critical cybersecurity areas that everyone should understand</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {topics.map((topic) => {
              const IconComponent = topic.icon;
              return (
                <div 
                  key={topic.id}
                  className={`bg-gradient-to-br ${topic.bgColor} rounded-2xl p-8 border ${topic.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mr-4 ${topic.id === 2 ? 'bg-blue-100' : ''}`}>
                      <IconComponent className={`w-8 h-8 ${topic.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{topic.title}</h3>
                      <p className="text-slate-600">{topic.duration} • Interactive content</p>
                    </div>
                  </div>
                  
                  <img 
                    src={topic.image}
                    alt={`${topic.title} concept`}
                    className="rounded-lg w-full h-48 object-cover mb-6"
                  />
                  
                  <p className="text-slate-700 mb-6 leading-relaxed">{topic.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {topic.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-slate-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleStartTopic(topic.id)}
                    className={`w-full ${topic.buttonColor} text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105`}
                    size="lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Topic {topic.id}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topic Modals */}
      {activeModal && (
        <TopicModal 
          topicNumber={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  );
}
