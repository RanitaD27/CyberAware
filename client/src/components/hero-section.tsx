import { Play, Info, Clock, Award, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrainingProgress } from "@/hooks/use-training-progress";

export default function HeroSection() {
  const { updateProgress } = useTrainingProgress();

  const handleStartTraining = () => {
    updateProgress(10);
    document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="overview" className="gradient-cyber text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Protect Your Business with 
              <span className="text-blue-200"> Smart Cybersecurity</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Master essential cybersecurity skills in just 10 minutes. Designed specifically for small and medium-sized businesses to defend against modern cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleStartTraining}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                size="lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Training
              </Button>
              <Button 
                variant="outline"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 border-2 border-blue-400"
                size="lg"
              >
                <Info className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>10 minutes total</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>2 core topics</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                <span>Mobile friendly</span>
              </div>
            </div>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cybersecurity dashboard with monitoring screens" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
