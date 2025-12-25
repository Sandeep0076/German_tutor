import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle, Star } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Home = () => {
    const { role } = useAppContext();

    return (
        <div className="space-y-8">
            {/* Welcome Hero */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="bg-gradient-to-r from-red-500/10 to-transparent absolute inset-0 pointer-events-none" />
                <div className="relative z-10 max-w-lg">
                    <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
                        Willkommen, {role === 'student' ? 'Student' : 'Lehrer'}!
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        {role === 'student'
                            ? "Ready to master German A1 in 50 days? Let's continue your journey."
                            : "Review progress, create content, and guide your student to success."}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link to="/syllabus" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                            Continue Learning <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link to="/mock-tester" className="inline-flex items-center justify-center px-5 py-3 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all">
                            Take a Quiz
                        </Link>
                    </div>
                </div>
                <div className="relative z-10 flex-shrink-0">
                    {/* Simple decorative element or stats */}
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                        <div className="text-4xl font-bold text-indigo-600">Day 1</div>
                        <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Current Progress</div>
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
                />
                <DashboardCard
                    icon={<CheckCircle className="text-emerald-500" />}
                    title="Daily Goals"
                    description="Complete daily tasks and track your homework."
                    link="/syllabus"
                />
                <DashboardCard
                    icon={<Star className="text-indigo-500" />}
                    title="Exam Prep"
                    description="Practice with mock questions and flashcards."
                    link="/mock-tester"
                />
            </div>
        </div>
    );
};

const DashboardCard = ({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) => (
    <Link to={link} className="group bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all hover:border-indigo-200">
        <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
            </div>
        </div>
        <p className="mt-3 text-slate-500 text-sm leading-relaxed">{description}</p>
    </Link>
);

export default Home;
