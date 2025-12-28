import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BookOpen, Home, GraduationCap, BrainCircuit } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import QuickTranslator from './QuickTranslator';

const Layout = () => {
    const { role, setRole } = useAppContext();

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-800">
            {/* Navbar */}
            <nav className="glass sticky top-0 z-50 mb-4 border-b-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-8">
                            <div className="flex-shrink-0 flex items-center gap-3">
                                <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-white/50">
                                    D
                                </div>
                                <span className="font-bold text-2xl text-indigo-900 tracking-tight drop-shadow-sm">GermanTutor A1</span>
                            </div>
                            <div className="hidden sm:flex sm:space-x-4">
                                <NavItem to="/" icon={<Home size={20} />} label="Dashboard" />
                                <NavItem to="/syllabus" icon={<BookOpen size={20} />} label="Syllabus" />
                                <NavItem to="/mock-tester" icon={<GraduationCap size={20} />} label="Mock Exams" />
                                <NavItem to="/doc-tutor" icon={<BrainCircuit size={20} />} label="AI Tutor" />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setRole(role === 'student' ? 'teacher' : 'student')}
                                className={`
                  relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
                  ${role === 'teacher' ? 'bg-indigo-600' : 'bg-slate-300'}
                `}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`
                    pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
                    ${role === 'teacher' ? 'translate-x-5' : 'translate-x-0'}
                  `}
                                />
                            </button>
                            <span className="hidden md:block text-sm font-semibold text-indigo-900 capitalize px-3 py-1 bg-white/30 rounded-full backdrop-blur-sm border border-white/40">
                                {role} Mode
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Quick Translator Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6 relative z-40">
                <QuickTranslator />
            </div>

            {/* Main Content */}
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="glass mt-auto border-t-0">
                <div className="max-w-7xl mx-auto px-4 py-8 text-center text-slate-600 font-medium text-sm">
                    &copy; {new Date().getFullYear()} German Tutor App. <span className="text-indigo-600">Built for A1 Success.</span>
                </div>
            </footer>
        </div>
    );

};

const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-150 gap-2
        ${isActive
                    ? 'border-indigo-500 text-slate-900'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                }`
            }
        >
            {icon}
            {label}
        </NavLink>
    );
};

export default Layout;
