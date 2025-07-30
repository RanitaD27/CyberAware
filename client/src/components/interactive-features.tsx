import { Video, ClipboardCheck, TrendingUp } from "lucide-react";

export default function InteractiveFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Interactive Learning Experience</h2>
          <p className="text-xl text-slate-600">Engage with multimedia content and test your knowledge</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-12 h-12 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Video Content</h3>
            <p className="text-slate-600">Short, engaging video explanations that bring concepts to life</p>
          </div>
          
          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Knowledge Checks</h3>
            <p className="text-slate-600">Interactive quizzes with immediate feedback to reinforce learning</p>
          </div>
          
          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Progress Tracking</h3>
            <p className="text-slate-600">Visual progress indicators to keep you motivated and on track</p>
          </div>
        </div>
      </div>
    </section>
  );
}
