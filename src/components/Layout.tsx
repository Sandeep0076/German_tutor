import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BookOpen, Home, GraduationCap, BrainCircuit } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import QuickTranslator from './QuickTranslator';

const Layout = () => {
    const { role, setRole } = useAppContext();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Navbar */}
            <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center gap-2">
                                <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-black w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                                    D
                                </div>
                                <span className="font-bold text-xl text-slate-800 tracking-tight">GermanTutor</span>
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                <NavItem to="/" icon={<Home size={18} />} label="Dashboard" />
                                <NavItem to="/syllabus" icon={<BookOpen size={18} />} label="Syllabus" />
                                <NavItem to="/mock-tester" icon={<GraduationCap size={18} />} label="Mock Exams" />
                                <NavItem to="/doc-tutor" icon={<BrainCircuit size={18} />} label="AI Tutor" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => setRole(role === 'student' ? 'teacher' : 'student')}
                                className={`
                  relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
                  ${role === 'teacher' ? 'bg-indigo-600' : 'bg-slate-200'}
                `}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`
                    pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
                    ${role === 'teacher' ? 'translate-x-5' : 'translate-x-0'}
                  `}
                                />
                            </button>
                            <span className="ml-3 text-sm font-medium text-slate-700 capitalize w-16">
                                {role}
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Quick Translator Section */}
            <QuickTranslator />

            {/* Main Content */}
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-6">
                <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} German Tutor App. Built for A1 Success.
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
