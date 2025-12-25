import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { syllabusData, type DayPlan, type Question } from '../data/syllabus';
import { ArrowLeft, Volume2, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const LessonDetail = () => {
    const { dayId } = useParams<{ dayId: string }>();
    const { role } = useAppContext();
    const [activeTab, setActiveTab] = useState<'guide' | 'homework'>('guide');

    // Find the day data
    let currentDay: DayPlan | undefined;
    for (const phase of syllabusData) {
        const found = phase.days.find(d => d.day.toString() === dayId);
        if (found) {
            currentDay = found;
            break;
        }
    }

    if (!currentDay) {
        return <div className="p-8 text-center text-slate-500">Lesson not found.</div>;
    }

    const details = currentDay.details;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <Link to="/syllabus" className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                <ArrowLeft size={16} className="mr-1" /> Back to Syllabus
            </Link>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-4 mb-2">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Day {currentDay.day}
                    </span>
                    <span className="text-slate-400 text-sm">{currentDay.focus}</span>
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900">{currentDay.title}</h1>

                {/* Tabs */}
                <div className="flex gap-6 mt-8 border-b border-slate-100">
                    <button
                        onClick={() => setActiveTab('guide')}
                        className={`pb-4 px-2 text-sm font-medium transition-all relative ${activeTab === 'guide' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Study Guide
                        {activeTab === 'guide' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-t-full" />}
                    </button>
                    <button
                        onClick={() => setActiveTab('homework')}
                        className={`pb-4 px-2 text-sm font-medium transition-all relative ${activeTab === 'homework' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Homework & Exercises
                        {activeTab === 'homework' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-t-full" />}
                    </button>
                </div>

                <div className="mt-8">
                    {activeTab === 'guide' ? (
                        details ? (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2">
                                {details.sections.map((section, idx) => (
                                    <section key={idx} className="space-y-4">
                                        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-indigo-500 rounded-full" />
                                            {section.title}
                                        </h2>
                                        <div className="prose prose-slate text-slate-600 leading-relaxed whitespace-pre-wrap">
                                            {section.content}
                                        </div>

                                        {section.examples && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                                {section.examples.map((ex, i) => (
                                                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex items-center justify-between group hover:border-indigo-100 transition-colors">
                                                        <div>
                                                            <div className="font-semibold text-slate-800">{ex.german}</div>
                                                            <div className="text-sm text-slate-500 italic">{ex.english}</div>
                                                        </div>
                                                        <button className="text-slate-300 group-hover:text-indigo-500 transition-colors">
                                                            <Volume2 size={18} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </section>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-amber-50 text-amber-800 p-6 rounded-xl border border-amber-100">
                                <p>Content coming soon for Day {dayId}. Try Day 1 for a demo!</p>
                            </div>
                        )
                    ) : (
                        <HomeworkSection content={details} role={role} />
                    )}
                </div>
            </div>
        </div>
    );
};

const HomeworkSection = ({ content, role }: { content?: any, role: string }) => {
    if (!content || !content.homework) return <div className="text-slate-500">No homework assigned.</div>;

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-sm text-emerald-800 flex items-start gap-3">
                <Check className="mt-0.5 flex-shrink-0" size={16} />
                <div>
                    <span className="font-bold block">Assignment Status</span>
                    {role === 'teacher' ? 'Verify your student\'s answers below.' : 'Complete these tasks. You can self-check your answers.'}
                </div>
            </div>

            {content.homework.map((q: Question, idx: number) => (
                <HomeworkItem key={q.id} question={q} index={idx + 1} />
            ))}
        </div>
    );
};

const HomeworkItem = ({ question, index }: { question: Question, index: number }) => {
    const [revealed, setRevealed] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');

    return (
        <div className="border border-slate-200 rounded-xl p-5 hover:border-indigo-200 transition-colors bg-white">
            <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center">
                    {index}
                </span>
                <div className="flex-grow space-y-3">
                    <p className="font-medium text-slate-900">{question.question}</p>

                    {/* Interaction Area based on Type */}
                    {question.type === 'choice' && question.options && (
                        <div className="space-y-2">
                            {question.options.map(opt => (
                                <label key={opt} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                    <input type="radio" name={question.id} className="text-indigo-600 focus:ring-indigo-500" />
                                    {opt}
                                </label>
                            ))}
                        </div>
                    )}

                    {(question.type === 'text' || question.type === 'record') && (
                        <textarea
                            className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 outline-none"
                            placeholder={question.type === 'record' ? "[Placeholder for Voice Recording Input]" : "Type your answer here..."}
                            rows={2}
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                    )}

                    {/* Reveal Answer */}
                    <div className="pt-2">
                        <button
                            onClick={() => setRevealed(!revealed)}
                            className="text-sm font-medium text-indigo-600 flex items-center gap-1 hover:text-indigo-800"
                        >
                            {revealed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            {revealed ? 'Hide Answer' : 'Reveal Answer'}
                        </button>

                        {revealed && (
                            <div className="mt-3 bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm">
                                <p className="font-semibold text-slate-800">Correct Answer: <span className="text-emerald-600">{question.answer}</span></p>
                                {question.explanation && <p className="text-slate-500 mt-1">{question.explanation}</p>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonDetail;
