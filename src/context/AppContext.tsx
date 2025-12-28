import { createContext, useContext, useState, type ReactNode } from 'react';

type UserRole = 'student' | 'teacher';

interface StudentInfo {
    name: string;
    profilePicture: string;
    currentDay: number;
}

interface AppContextType {
    role: UserRole;
    setRole: (role: UserRole) => void;
    studentInfo: StudentInfo;
    setStudentInfo: (info: StudentInfo) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [role, setRole] = useState<UserRole>('student');
    const [studentInfo, setStudentInfo] = useState<StudentInfo>({
        name: 'Ngoc',
        profilePicture: '/ngoc-profile.jpg',
        currentDay: 1
    });

    return (
        <AppContext.Provider value={{ role, setRole, studentInfo, setStudentInfo }}>
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
