import { Building2, Users, MapPin, Gem } from "lucide-react";

export default function BusinessProfile() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Learning Experience</h2>
          <p className="text-xl text-slate-600">Educational content covering essential cybersecurity concepts for everyone</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Business Profile Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Real-World Examples</h3>
            <p className="text-slate-600 text-sm">Practical scenarios and case studies from various industries</p>
          </div>
          
          {/* Business Profile Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Interactive Learning</h3>
            <p className="text-slate-600 text-sm">Engaging quizzes and hands-on activities</p>
          </div>
          
          {/* Business Profile Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Expert Knowledge</h3>
            <p className="text-slate-600 text-sm">Content created by cybersecurity professionals</p>
          </div>
          
          {/* Business Profile Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Gem className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Best Practices</h3>
            <p className="text-slate-600 text-sm">Learn proven security strategies and techniques</p>
          </div>
        </div>
      </div>
    </section>
  );
}
