import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ThreatAwareness from "@/components/threat-awareness";
import BusinessProfile from "@/components/business-profile";
import TrainingTopics from "@/components/training-topics";
import InteractiveFeatures from "@/components/interactive-features";
import { Shield, AlertTriangle, Users, MapPin, Gem, Clock, Award, Smartphone, Play, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <ThreatAwareness />
      <BusinessProfile />
      <TrainingTopics />
      <InteractiveFeatures />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                <span className="text-xl font-bold">Cyber Awareness Hub</span>
              </div>
              <p className="text-slate-400">Protecting everyone through cybersecurity threat awareness and education.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#overview" className="hover:text-white transition-colors">Threat Overview</a></li>
                <li><a href="#awareness" className="hover:text-white transition-colors">Real Examples</a></li>
                <li><a href="#topics" className="hover:text-white transition-colors">Protection Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Threat Types</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Phishing Attacks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Password Breaches</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Engineering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Cyber Awareness Hub. All rights reserved. | Created for cybersecurity education and awareness.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
