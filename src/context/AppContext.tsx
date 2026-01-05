import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { ExamFocusProgress } from '../data/exam/examTypes';
import { initializeExamProgress } from '../data/exam/examFocusData';
import { calculateOverallCompletion } from '../utils/examUtils';

type UserRole = 'student' | 'teacher';

interface StudentProgress {
    completedDays: number[];
    lastCompletedDate?: string;
    currentTopicTitle?: string;
}

interface StudentInfo {
    name: string;
    profilePicture: string;
    currentDay: number;
    progress: StudentProgress;
}

interface AppContextType {
    role: UserRole;
    setRole: (role: UserRole) => void;
    studentInfo: StudentInfo;
    setStudentInfo: (info: StudentInfo) => void;
    completeDay: (dayNumber: number, topicTitle: string) => void;
    examFocusProgress: ExamFocusProgress;
    completeExamDay: (dayNumber: number, scores?: { listening?: number; reading?: number; writing?: number; speaking?: number }) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [role, setRole] = useState<UserRole>('student');
    const [studentInfo, setStudentInfo] = useState<StudentInfo>({
        name: 'Ngoc',
        profilePicture: '/ngoc-profile.jpg',
        currentDay: 1,
        progress: {
            completedDays: [],
            lastCompletedDate: undefined,
            currentTopicTitle: undefined
        }
    });

    // Initialize exam focus progress from localStorage or create new
    const [examFocusProgress, setExamFocusProgress] = useState<ExamFocusProgress>(() => {
        try {
            const stored = localStorage.getItem('examFocusProgress');
            if (stored) {
                const parsed = JSON.parse(stored);
                // Convert date strings back to Date objects if present
                parsed.days = parsed.days.map((day: any) => ({
                    ...day,
                    completedDate: day.completedDate ? new Date(day.completedDate) : undefined
                }));
                return parsed;
            }
        } catch (error) {
            console.error('Error loading exam focus progress from localStorage:', error);
        }
        return initializeExamProgress();
    });

    const completeDay = (dayNumber: number, topicTitle: string) => {
        console.log(`Completing day ${dayNumber}: ${topicTitle}`);
        
        setStudentInfo(prevInfo => {
            // Create a set of all days from 1 to the completed day number
            const allDaysUpToCurrent = Array.from({ length: dayNumber }, (_, i) => i + 1);
            
            // Merge with existing completed days and remove duplicates
            const newCompletedDays = Array.from(
                new Set([...prevInfo.progress.completedDays, ...allDaysUpToCurrent])
            ).sort((a, b) => a - b);
            
            // Update current day to next day
            const nextDay = Math.max(dayNumber + 1, prevInfo.currentDay);
            
            return {
                ...prevInfo,
                currentDay: nextDay,
                progress: {
                    completedDays: newCompletedDays,
                    lastCompletedDate: new Date().toISOString().split('T')[0],
                    currentTopicTitle: topicTitle
                }
            };
        });
    };

    // Complete an exam focus day
    const completeExamDay = useCallback((
        dayNumber: number,
        scores?: { listening?: number; reading?: number; writing?: number; speaking?: number }
    ) => {
        setExamFocusProgress(prevProgress => {
            // Create a copy of the days array
            const updatedDays = prevProgress.days.map(day => {
                // Mark the current day and all previous days as completed
                if (day.dayNumber <= dayNumber) {
                    // If this is the day being completed now, use current date and scores
                    if (day.dayNumber === dayNumber) {
                        return {
                            ...day,
                            completed: true,
                            completedDate: new Date(),
                            scores: scores || day.scores
                        };
                    }
                    // For previous days, mark as completed if not already
                    // Keep existing completedDate if it exists
                    return {
                        ...day,
                        completed: true,
                        completedDate: day.completedDate || new Date()
                    };
                }
                return day;
            });

            // Recalculate overall completion
            const newOverallCompletion = calculateOverallCompletion(updatedDays);

            const newProgress = {
                days: updatedDays,
                overallCompletion: newOverallCompletion
            };

            // Save to localStorage
            try {
                localStorage.setItem('examFocusProgress', JSON.stringify(newProgress));
            } catch (error) {
                console.error('Error saving exam focus progress to localStorage:', error);
            }

            return newProgress;
        });
    }, []);

    // Persist exam focus progress to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem('examFocusProgress', JSON.stringify(examFocusProgress));
        } catch (error) {
            console.error('Error persisting exam focus progress to localStorage:', error);
        }
    }, [examFocusProgress]);

    return (
        <AppContext.Provider value={{
            role,
            setRole,
            studentInfo,
            setStudentInfo,
            completeDay,
            examFocusProgress,
            completeExamDay
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
