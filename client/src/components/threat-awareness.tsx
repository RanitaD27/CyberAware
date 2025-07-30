import { AlertTriangle, Mail, Lock, CreditCard, Smartphone, Wifi, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThreatAwareness() {
  return (
    <section id="awareness" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Cyber Threats 
            <span className="text-red-600"> Happening Now</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            These are actual examples of cyber attacks that happen every day. Learn to recognize them before you become a victim.
          </p>
        </div>

        {/* Real Examples Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Phishing Example */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-500">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Phishing Email Attack</h3>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 mb-6 font-mono text-sm">
                <div className="text-red-600 font-bold mb-2">⚠️ MALICIOUS EMAIL EXAMPLE:</div>
                <div className="space-y-1">
                  <div><strong>From:</strong> security@bank-alert.com</div>
                  <div><strong>Subject:</strong> URGENT: Your account will be suspended</div>
                  <div className="mt-3 text-gray-700">
                    "Your account has suspicious activity. Click here to verify your identity immediately or your account will be locked within 24 hours."
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded mt-3 text-xs">
                    VERIFY ACCOUNT NOW
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-red-600">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Fake domain (bank-alert.com vs bank.com)</span>
                </div>
                <div className="flex items-center text-red-600">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Creates false urgency</span>
                </div>
                <div className="flex items-center text-red-600">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Suspicious link destination</span>
                </div>
              </div>
            </div>
          </div>

          {/* Password Attack Example */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-orange-500">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Password Breach</h3>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="text-orange-600 font-bold mb-2">⚠️ COMMON WEAK PASSWORDS:</div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between">
                    <span>password123</span>
                    <span className="text-red-500">Cracked in &lt;1 second</span>
                  </div>
                  <div className="flex justify-between">
                    <span>john1990</span>
                    <span className="text-red-500">Cracked in &lt;1 second</span>
                  </div>
                  <div className="flex justify-between">
                    <span>qwerty</span>
                    <span className="text-red-500">Cracked in &lt;1 second</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MyP@ssw0rd2024!</span>
                    <span className="text-green-500">Secure</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-orange-600">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">3.2 billion passwords leaked in 2024</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">80% use same password everywhere</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Hackers sell passwords for $1-$5 each</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Threat Level */}
        <div className="bg-red-600 text-white rounded-xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Current Global Threat Level</h3>
            <div className="text-6xl font-bold mb-4 animate-pulse">HIGH</div>
            <p className="text-xl opacity-90 mb-6">
              Major cyber attack campaigns are actively targeting students, employees, and individuals worldwide
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">847</div>
                <div className="opacity-90">New threats detected today</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15,239</div>
                <div className="opacity-90">Phishing sites blocked today</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2.3M</div>
                <div className="opacity-90">Malware samples found today</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Threat Checker */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Test Your Threat Recognition</h3>
          <p className="text-lg text-gray-700 mb-6">
            Can you spot the red flags in real cyber attacks? Try our interactive examples below.
          </p>
          <Button 
            onClick={() => document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg"
            size="lg"
          >
            <Eye className="w-5 h-5 mr-2" />
            Start Threat Recognition Training
          </Button>
        </div>
      </div>
    </section>
  );
}