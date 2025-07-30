import { Building2, Users, MapPin, Gem } from "lucide-react";

export default function BusinessProfile() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Tailored for Your Business</h2>
          <p className="text-xl text-slate-600">Contextual cybersecurity training designed specifically for SMBs</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Business Profile Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Industry Focus</h3>
            <p className="text-slate-600 text-sm">Sector-specific threat analysis and recommendations</p>
          </div>
          
          {/* Business Profile Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Team Size</h3>
            <p className="text-slate-600 text-sm">Solutions scaled to your organization's needs</p>
          </div>
          
          {/* Business Profile Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600 text-sm">Geographic threat landscape considerations</p>
          </div>
          
          {/* Business Profile Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Gem className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Critical Assets</h3>
            <p className="text-slate-600 text-sm">Protection strategies for your crown jewels</p>
          </div>
        </div>
      </div>
    </section>
  );
}
