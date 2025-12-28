import { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  totalMs: number;
  isExpired: boolean;
}

export const useCountdown = (targetDate: Date): TimeRemaining => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const difference = target - now;
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        totalMs: difference,
        isExpired: false,
      };
    }
    
    return {
      days: 0,
      totalMs: 0,
      isExpired: true,
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          totalMs: difference,
          isExpired: false,
        });
      } else {
        setTimeRemaining({
          days: 0,
          totalMs: 0,
          isExpired: true,
        });
      }
    }, 43200000); // Update twice a day (43200000ms = 12 hours)

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeRemaining;
};
