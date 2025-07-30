import { Shield, Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-blue-700 mr-3" />
            <span className="text-xl font-bold text-slate-900">Cyber Awareness Hub</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-slate-600 hover:text-red-700 transition-colors">Threat Overview</a>
            <a href="#awareness" className="text-slate-600 hover:text-red-700 transition-colors">Real Examples</a>
            <a href="#topics" className="text-slate-600 hover:text-red-700 transition-colors">Protection Guide</a>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <a href="#overview" className="text-slate-600 hover:text-red-700 transition-colors">Threat Overview</a>
              <a href="#awareness" className="text-slate-600 hover:text-red-700 transition-colors">Real Examples</a>
              <a href="#topics" className="text-slate-600 hover:text-red-700 transition-colors">Protection Guide</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
