import { useState } from 'react';
import { mockQuestions } from '../data/mockQuestions';
import { Eye, EyeOff, Lightbulb } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const MockTester = () => {
    const { role } = useAppContext();
    const [filter, setFilter] = useState<string>('All');
    const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());

    const toggleReveal = (id: string) => {
        const newRevealed = new Set(revealedIds);
        if (newRevealed.has(id)) {
            newRevealed.delete(id);
        } else {
            newRevealed.add(id);
        }
        setRevealedIds(newRevealed);
    };

    const categories = ['All', ...Array.from(new Set(mockQuestions.map(q => q.category)))];
    const filteredQuestions = filter === 'All'
        ? mockQuestions
        : mockQuestions.filter(q => q.category === filter);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Mock Exam & Drills</h1>
                <p className="text-slate-500 mt-1">Practice for Speaking, Writing, and Grammar</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
              ${filter === cat
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}
            `}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredQuestions.map(q => (
                    <div key={q.id} className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{q.category}</span>
                            <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">{q.type}</span>
                        </div>

                        {/* Question Body */}
                        <div className="p-6 flex-grow">
                            <h3 className="text-lg font-medium text-slate-900 mb-4">{q.question}</h3>

                            {/* Answer Section */}
                            <div className={`
                relative rounded-lg p-4 transition-all duration-300
                ${revealedIds.has(q.id) ? 'bg-emerald-50 border border-emerald-100' : 'bg-slate-100 border border-dashed border-slate-300 min-h-[5rem] flex items-center justify-center'}
              `}>
                                {revealedIds.has(q.id) ? (
                                    <div className="animate-in fade-in zoom-in-95 duration-200">
                                        <p className="text-emerald-900 whitespace-pre-line font-medium">{q.answer}</p>
                                        {q.tips && (
                                            <div className="mt-3 text-xs text-emerald-600 flex items-start gap-1">
                                                <Lightbulb size={14} className="mt-0.5 flex-shrink-0" /> {q.tips}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-slate-400 text-sm flex items-center gap-2">
                                        <EyeOff size={16} /> Answer Hidden
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                            <button
                                onClick={() => toggleReveal(q.id)}
                                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${revealedIds.has(q.id)
                                        ? 'text-slate-500 hover:text-slate-700'
                                        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'}
                `}
                            >
                                {revealedIds.has(q.id) ? (
                                    <> <EyeOff size={16} /> Hide Answer </>
                                ) : (
                                    <> <Eye size={16} /> Reveal Answer </>
                                )}
                            </button>

                            {role === 'teacher' && (
                                <span className="text-xs text-indigo-600 font-medium">Teacher View</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MockTester;
