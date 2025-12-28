import React from 'react';
import { Calendar, Flame } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

const NavbarCountdown: React.FC = () => {
  // Exam date: February 20th, 2026
  const examDate = new Date('2026-02-20T09:00:00');
  const { days, isExpired } = useCountdown(examDate);

  if (isExpired) {
    return (
      <div className="flex items-center gap-2 bg-emerald-500 px-3 py-2 rounded-lg text-white text-sm font-semibold">
        <Calendar size={16} />
        <span>Exam Day!</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-3 py-2 rounded-lg text-white shadow-md">
      <Flame size={14} className="text-yellow-200" />
      <div className="text-sm font-bold">
        <span className="text-lg">{days}</span>
        <span className="text-xs ml-1 text-orange-100">days</span>
      </div>
    </div>
  );
};

export default NavbarCountdown;
