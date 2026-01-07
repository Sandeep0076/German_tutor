import { useState, useEffect, useMemo } from 'react';
import { syllabusData, type DayPlan } from '../data/syllabus';
import { ChevronDown, ChevronRight, Book, PenTool, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Syllabus = () => {
    const { role, studentInfo } = useAppContext();
    
    // Calculate which phase contains the current day
    const getCurrentPhase = useMemo(() => {
        const currentDay = studentInfo.currentDay;
        
        for (const phase of syllabusData) {
            const dayNumbers = phase.days.map(d => d.day);
            const minDay = Math.min(...dayNumbers);
            const maxDay = Math.max(...dayNumbers);
            
            if (currentDay >= minDay && currentDay <= maxDay) {
                return phase.id;
            }
        }
        
        // If current day is beyond all phases, return the last phase
        return syllabusData[syllabusData.length - 1].id;
    }, [studentInfo.currentDay]);
    
    // Check if a phase is fully completed
    const isPhaseCompleted = (phase: typeof syllabusData[0]) => {
        const phaseDayNumbers = phase.days.map(d => d.day);
        return phaseDayNumbers.every(dayNum =>
            studentInfo.progress.completedDays.includes(dayNum)
        );
    };
    
    // Find the next incomplete phase
    const getNextIncompletePhase = () => {
        for (const phase of syllabusData) {
            if (!isPhaseCompleted(phase)) {
                return phase.id;
            }
        }
        return syllabusData[syllabusData.length - 1].id;
    };
    
    // Initialize expandedPhase from localStorage or use current phase
    const [expandedPhase, setExpandedPhase] = useState<number | null>(() => {
        try {
            const stored = localStorage.getItem('expandedPhase');
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.error('Error loading expanded phase from localStorage:', error);
        }
        return getCurrentPhase;
    });
    
    const [expandedDay, setExpandedDay] = useState<number | null>(null);
    
    // Update expanded phase when current day changes or when phases are completed
    useEffect(() => {
        const currentPhase = syllabusData.find(p => p.id === getCurrentPhase);
        
        let newExpandedPhase: number;
        if (currentPhase && isPhaseCompleted(currentPhase)) {
            // If current phase is completed, expand the next incomplete phase
            newExpandedPhase = getNextIncompletePhase();
        } else {
            // Otherwise, expand the phase containing the current day
            newExpandedPhase = getCurrentPhase;
        }
        
        setExpandedPhase(newExpandedPhase);
        
        // Save to localStorage
        try {
            localStorage.setItem('expandedPhase', JSON.stringify(newExpandedPhase));
        } catch (error) {
            console.error('Error saving expanded phase to localStorage:', error);
        }
    }, [studentInfo.currentDay, studentInfo.progress.completedDays, getCurrentPhase]);

    const togglePhase = (id: number) => {
        const newExpandedPhase = expandedPhase === id ? null : id;
        setExpandedPhase(newExpandedPhase);
        
        // Save to localStorage
        try {
            localStorage.setItem('expandedPhase', JSON.stringify(newExpandedPhase));
        } catch (error) {
            console.error('Error saving expanded phase to localStorage:', error);
        }
    };

    const toggleDay = (day: number) => {
        setExpandedDay(expandedDay === day ? null : day);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Course Syllabus</h1>
                    <p className="text-slate-500 mt-1">50-Day Path to A1 Success</p>
                </div>
                <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {role === 'teacher' ? 'Teaching Mode' : 'Student Mode'}
                </div>
            </div>

            <div className="space-y-6">
                {syllabusData.map((phase) => (
                    <div key={phase.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300">
                        {/* Phase Header */}
                        <button
                            onClick={() => togglePhase(phase.id)}
                            className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left"
                        >
                            <div>
                                <h2 className="text-xl font-bold text-slate-800">{phase.title}</h2>
                                <p className="text-slate-500 text-sm mt-1">{phase.description}</p>
                            </div>
                            <div className="text-slate-400">
                                {expandedPhase === phase.id ? <ChevronDown /> : <ChevronRight />}
                            </div>
                        </button>

                        {/* Days List */}
                        {expandedPhase === phase.id && (
                            <div className="border-t border-slate-100 bg-slate-50/50 p-4 space-y-3">
                                {phase.days.map((day) => (
                                    <DayCard
                                        key={day.day}
                                        day={day}
                                        isExpanded={expandedDay === day.day}
                                        onToggle={() => toggleDay(day.day)}
                                        role={role}
                                        studentInfo={studentInfo}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const DayCard = ({ 
    day, 
    isExpanded, 
    onToggle, 
    role, 
    studentInfo 
}: { 
    day: DayPlan, 
    isExpanded: boolean, 
    onToggle: () => void, 
    role: string, 
    studentInfo: any 
}) => {
    const isCompleted = studentInfo.progress.completedDays.includes(day.day);
    
    return (
        <div
            className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden
        ${isExpanded ? 'border-indigo-200 shadow-md ring-1 ring-indigo-50' : 'border-slate-200 hover:border-slate-300'}
      `}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center p-4 gap-4 text-left"
            >
                <div className={`
          flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
          ${isExpanded ? 'bg-indigo-600 text-white' : isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'}
        `}>
                    {isCompleted ? <CheckCircle size={20} /> : day.day}
                </div>

                <div className="flex-grow">
                    <h3 className={`font-semibold ${isExpanded ? 'text-indigo-900' : 'text-slate-900'}`}>
                        {day.title}
                    </h3>
                    <p className="text-sm text-slate-500">Focus: {day.focus}</p>
                    {isCompleted && (
                        <p className="text-xs text-emerald-600 font-medium mt-1">✓ Completed</p>
                    )}
                </div>

                {/* Status Indicator */}
                <div className={`text-slate-300 ${isCompleted ? 'text-emerald-400' : ''}`}>
                    {isCompleted && <CheckCircle size={20} />}
                </div>
            </button>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="px-4 pb-4 pl-[4.5rem] space-y-4">
                    <div className="flex justify-end">
                        <a href={`/syllabus/day/${day.day}`} className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
                            <Book size={16} className="mr-2" /> Start Lesson & Homework
                        </a>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                            <Book size={16} className="text-blue-500" /> Lesson Activities
                        </h4>
                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-1">
                            {day.activities.map((act, i) => (
                                <li key={i}>{act}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                            <PenTool size={16} className="text-emerald-500" /> Homework
                        </h4>
                        <div className="bg-emerald-50 rounded-lg p-3 text-sm text-emerald-800 border border-emerald-100">
                            <ul className="list-disc list-inside space-y-1">
                                {day.homework.map((hw, i) => (
                                    <li key={i}>{hw}</li>
                                ))}
                            </ul>
                            {role === 'teacher' && (
                                <div className="mt-3 text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                                    Teacher Note: Check student submission
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Syllabus;
