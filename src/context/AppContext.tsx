import { createContext, useContext, useState, type ReactNode } from 'react';

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

    const completeDay = (dayNumber: number, topicTitle: string) => {
        console.log(`Completing day ${dayNumber}: ${topicTitle}`);
        
        setStudentInfo(prevInfo => {
            const newCompletedDays = [...prevInfo.progress.completedDays];
            
            // Add the day to completed days if not already there
            if (!newCompletedDays.includes(dayNumber)) {
                newCompletedDays.push(dayNumber);
            }
            
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

    return (
        <AppContext.Provider value={{ 
            role, 
            setRole, 
            studentInfo, 
            setStudentInfo, 
            completeDay 
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
