import { AlertTriangle, Shield, Eye, Users, Globe, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="overview" className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-600 rounded-full animate-pulse shadow-lg">
              <AlertTriangle className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Cybersecurity 
            <span className="text-red-600"> Threats</span> Are Real
          </h1>
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium">
            Every single day, millions of people worldwide become victims of cyber attacks. Learn how to recognize and defend against the threats targeting you right now.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-red-200 shadow-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">4.8 Billion</div>
            <div className="text-gray-700 font-medium">Data records exposed in 2024</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-200 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">$12.9 Million</div>
            <div className="text-gray-700 font-medium">Average data breach cost</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-yellow-200 shadow-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">91%</div>
            <div className="text-gray-700 font-medium">Of attacks start with phishing</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 mb-8 max-w-3xl mx-auto border border-red-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't Be a Statistic</h2>
            <p className="text-lg text-gray-700 mb-6">
              Learn to identify the most common cyber threats and protect yourself with simple, effective strategies that take just minutes to implement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById('awareness')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg"
                size="lg"
              >
                <Eye className="w-5 h-5 mr-2" />
                See Real Threats
              </Button>
              <Button 
                onClick={() => document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-colors"
                size="lg"
              >
                <Shield className="w-5 h-5 mr-2" />
                Learn Protection
              </Button>
            </div>
          </div>
          
          {/* Real-time threat indicators */}
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span>Live threats detected globally</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <span>New scams reported daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>Passwords compromised hourly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
