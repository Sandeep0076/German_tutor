import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle, Star } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Home = () => {
    const { role, studentInfo } = useAppContext();

    return (
        <div className="space-y-8">
            {/* Welcome Hero */}
            <div className="glass-panel p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                {/* Decorative background blobs for this card */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-pink-400 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-400 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="relative z-10 max-w-lg flex items-center gap-6">
                    {/* Profile Picture for Student */}
                    {role === 'student' && (
                        <div className="flex-shrink-0">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/60 shadow-lg bg-white/20 backdrop-blur-sm">
                                <img
                                    src={studentInfo.profilePicture}
                                    alt={`${studentInfo.name}'s profile`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback to a default avatar if image fails to load
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `<div class="w-full h-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-bold text-4xl">${studentInfo.name.charAt(0).toUpperCase()}</div>`;
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight mb-2">
                            {role === 'student' ? `Hallo, ${studentInfo.name}!` : 'Willkommen, Lehrer!'}
                        </h1>
                        <p className="text-lg text-slate-700 leading-relaxed font-medium">
                            {role === 'student'
                                ? "Ready to master German A1 in 50 days? Your journey continues now."
                                : "Manage your curriculum and track student progress effectively."}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link to="/syllabus" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 ring-4 ring-indigo-600/20">
                                Continue Learning <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/mock-tester" className="inline-flex items-center justify-center px-6 py-3 border border-white/60 text-base font-medium rounded-2xl text-indigo-700 bg-white/40 hover:bg-white/60 transition-all backdrop-blur-sm shadow-sm ring-1 ring-white/50">
                                Take a Quiz
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Floating Mobile-like Widget */}
                <div className="relative z-10 flex-shrink-0 perspective-1000">
                    <div className="w-64 glass-card p-6 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-500 ease-out border-t border-l border-white/60 shadow-2xl">
                        <div className="flex justify-between items-start mb-6">
                            <div className="h-2 w-12 bg-slate-400/20 rounded-full"></div>
                            <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 mb-1">
                            Day {role === 'student' ? studentInfo.currentDay : 1}
                        </div>
                        <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-8">
                            Current Progress
                        </div>
                        <div className="flex gap-2">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                <Calendar size={18} />
                            </div>
                            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <CheckCircle size={18} />
                            </div>
                            <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                <Star size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats / links */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <DashboardCard
                    icon={<Calendar className="text-amber-500" />}
                    title="50 Day Plan"
                    description="Follow the structured timeline to exam success."
                    link="/syllabus"
                    color="amber"
                />
                <DashboardCard
                    icon={<CheckCircle className="text-emerald-500" />}
                    title="Daily Goals"
                    description="Complete daily tasks and track your homework."
                    link="/syllabus"
                    color="emerald"
                />
                <DashboardCard
                    icon={<Star className="text-pink-500" />}
                    title="Exam Prep"
                    description="Practice with mock questions and flashcards."
                    link="/mock-tester"
                    color="pink"
                />
            </div>
        </div>
    );
};

const DashboardCard = ({ icon, title, description, link, color }: { icon: React.ReactNode, title: string, description: string, link: string, color: string }) => {
    // Dynamic color classes for hover state
    const hoverBorder = color === 'amber' ? 'group-hover:border-amber-300' :
        color === 'emerald' ? 'group-hover:border-emerald-300' : 'group-hover:border-pink-300';
    const hoverText = color === 'amber' ? 'group-hover:text-amber-700' :
        color === 'emerald' ? 'group-hover:text-emerald-700' : 'group-hover:text-pink-700';

    return (
        <Link to={link} className={`group glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-white/40 ${hoverBorder}`}>
            <div className="flex items-center gap-4">
                <div className="p-3 bg-white/50 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                    {icon}
                </div>
                <div>
                    <h3 className={`text-lg font-bold text-slate-800 ${hoverText} transition-colors`}>{title}</h3>
                </div>
            </div>
            <p className="mt-4 text-slate-600 text-sm leading-relaxed font-medium">{description}</p>
        </Link>
    );
};

export default Home;
