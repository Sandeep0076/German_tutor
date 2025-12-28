import React from 'react';
import { Clock, Calendar, Target, Flame } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

const CountdownTimer: React.FC = () => {
  // Exam date: February 20th, 2026
  const examDate = new Date('2026-02-20T09:00:00');
  const { days, isExpired } = useCountdown(examDate);

  if (isExpired) {
    return (
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 rounded-2xl shadow-xl border border-emerald-400/20 text-white">
        <div className="text-center">
          <Target className="mx-auto mb-3" size={32} />
          <h3 className="text-xl font-bold mb-2">🎉 Exam Day is Here!</h3>
          <p className="text-emerald-100">Best of luck with your German A1 exam today!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 p-6 rounded-2xl shadow-2xl border border-orange-400/20 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -ml-6 -mb-6 w-24 h-24 rounded-full bg-yellow-300/20 blur-xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
            <Flame className="text-yellow-200 animate-pulse" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">German A1 Exam</h3>
            <p className="text-orange-100 text-sm font-medium">February 20, 2026</p>
          </div>
        </div>
        <div className="p-2 bg-white/15 rounded-xl backdrop-blur-sm">
          <Calendar className="text-orange-100" size={18} />
        </div>
      </div>

      {/* Countdown Display */}
      <div className="relative z-10 flex justify-center mb-4">
        <CountdownUnit value={days} label="Days" gradient="from-red-400 to-red-500" />
      </div>

      {/* Motivation Text */}
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 text-orange-100">
          <Clock size={16} />
          <span className="text-sm font-semibold">
            {days > 7 
              ? `${days} days to prepare!` 
              : days > 0 
                ? `Final ${days} days - You've got this! 💪`
                : `Exam day countdown! 🚀`
            }
          </span>
        </div>
      </div>
    </div>
  );
};

interface CountdownUnitProps {
  value: number;
  label: string;
  gradient: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label, gradient }) => {
  return (
    <div className="text-center">
      <div className={`bg-gradient-to-br ${gradient} p-6 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm mb-3`}>
        <div className="text-4xl font-black text-white leading-none">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-sm font-semibold text-orange-100 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

export default CountdownTimer;
