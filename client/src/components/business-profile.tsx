import { AlertTriangle, Globe, Smartphone, CreditCard, Wifi, Eye, Users, TrendingUp } from "lucide-react";

export default function BusinessProfile() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <span className="text-lg font-semibold text-red-600">Critical Awareness</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                You Are a Target
                <span className="text-red-600"> Right Now</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Cybercriminals don't discriminate. Students, professionals, and everyday internet users are all valuable targets. Your personal information, money, and digital identity are constantly at risk.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium">
                  ⚠️ In the time it takes you to read this page, approximately 4,000 cyber attacks will occur worldwide.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Smartphone className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold text-slate-900">Mobile Attacks</div>
                    <div className="text-sm text-slate-600">95% of successful breaches start on mobile</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Wifi className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <div className="font-semibold text-slate-900">Public WiFi Threats</div>
                    <div className="text-sm text-slate-600">68% of public networks are compromised</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 text-yellow-600 mr-3" />
                  <div>
                    <div className="font-semibold text-slate-900">Financial Fraud</div>
                    <div className="text-sm text-slate-600">$5.8 billion lost to scams in 2023</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-600 mr-3" />
                  <div>
                    <div className="font-semibold text-slate-900">Identity Theft</div>
                    <div className="text-sm text-slate-600">14.4 million victims annually</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Attack Frequency Counter */}
            <div className="mt-8 bg-gray-100 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Live Attack Statistics</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">2,456</div>
                  <div className="text-sm text-gray-600">Attacks in last hour</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">847</div>
                  <div className="text-sm text-gray-600">New victims today</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Hacker in dark hoodie working on computer showing cyber attack in progress" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Warning overlay */}
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center">
                <Eye className="w-5 h-5 text-yellow-600 mr-2" />
                <div className="text-yellow-800 font-medium">
                  This represents real cybercriminal activity happening 24/7 globally
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
