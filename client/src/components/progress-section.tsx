import { Play, Book, Trophy } from "lucide-react";
import { useTrainingProgress } from "@/hooks/use-training-progress";

export default function ProgressSection() {
  const { progress } = useTrainingProgress();

  return (
    <section id="progress" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Your Learning Progress</h2>
        <div className="bg-slate-100 rounded-full h-4 mb-8 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-400 h-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Progress Item 1 */}
          <div className={`bg-slate-50 rounded-lg p-6 border border-slate-200 ${progress >= 10 ? 'opacity-100' : 'opacity-60'}`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${progress >= 10 ? 'bg-blue-100' : 'bg-slate-200'}`}>
              <Play className={`w-8 h-8 ${progress >= 10 ? 'text-blue-700' : 'text-slate-400'}`} />
            </div>
            <h3 className={`font-semibold mb-2 ${progress >= 10 ? 'text-slate-900' : 'text-slate-500'}`}>Getting Started</h3>
            <p className={`text-sm ${progress >= 10 ? 'text-slate-600' : 'text-slate-400'}`}>Begin your cybersecurity journey</p>
          </div>
          
          {/* Progress Item 2 */}
          <div className={`bg-slate-50 rounded-lg p-6 border border-slate-200 ${progress >= 50 ? 'opacity-100' : 'opacity-60'}`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${progress >= 50 ? 'bg-green-100' : 'bg-slate-200'}`}>
              <Book className={`w-8 h-8 ${progress >= 50 ? 'text-green-600' : 'text-slate-400'}`} />
            </div>
            <h3 className={`font-semibold mb-2 ${progress >= 50 ? 'text-slate-900' : 'text-slate-500'}`}>Topic Learning</h3>
            <p className={`text-sm ${progress >= 50 ? 'text-slate-600' : 'text-slate-400'}`}>Complete both training modules</p>
          </div>
          
          {/* Progress Item 3 */}
          <div className={`bg-slate-50 rounded-lg p-6 border border-slate-200 ${progress >= 100 ? 'opacity-100' : 'opacity-60'}`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${progress >= 100 ? 'bg-yellow-100' : 'bg-slate-200'}`}>
              <Trophy className={`w-8 h-8 ${progress >= 100 ? 'text-yellow-600' : 'text-slate-400'}`} />
            </div>
            <h3 className={`font-semibold mb-2 ${progress >= 100 ? 'text-slate-900' : 'text-slate-500'}`}>Completion</h3>
            <p className={`text-sm ${progress >= 100 ? 'text-slate-600' : 'text-slate-400'}`}>Earn your cybersecurity knowledge</p>
          </div>
        </div>
      </div>
    </section>
  );
}
