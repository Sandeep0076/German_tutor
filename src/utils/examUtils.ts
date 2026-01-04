/**
 * Exam Focus Utility Functions
 * 
 * Provides helper functions for the 30-day Goethe A1 exam preparation feature.
 * These utilities handle skill rotation, progress tracking, and formatting.
 */

import type { SkillType, ExamDayProgress, ExamFocusProgress } from '../data/exam/examTypes';

/**
 * Determines which skills are practiced on a given day
 * 
 * The 30-day exam preparation follows a rotating pattern:
 * - Odd days (1, 3, 5, ...): Listening + Reading
 * - Even days (2, 4, 6, ...): Writing + Speaking
 * 
 * @param dayNumber - The day number (1-30)
 * @returns Array of two SkillType values for that day
 * 
 * @example
 * getSkillsForDay(1) // Returns ['Listening', 'Reading']
 * getSkillsForDay(2) // Returns ['Writing', 'Speaking']
 */
export function getSkillsForDay(dayNumber: number): SkillType[] {
  if (dayNumber % 2 === 1) {
    // Odd days: Listening + Reading
    return ['Listening', 'Reading'];
  } else {
    // Even days: Writing + Speaking
    return ['Writing', 'Speaking'];
  }
}

/**
 * Returns an emoji icon for a given skill type
 * 
 * @param skill - The skill type
 * @returns Emoji icon representing the skill
 * 
 * @example
 * getSkillIcon('Listening') // Returns '🎧'
 * getSkillIcon('Reading')   // Returns '📖'
 */
export function getSkillIcon(skill: SkillType): string {
  const iconMap: Record<SkillType, string> = {
    'Listening': '🎧',
    'Reading': '📖',
    'Writing': '✍️',
    'Speaking': '🗣️',
  };
  
  return iconMap[skill];
}

/**
 * Calculates the overall completion percentage of the exam preparation
 * 
 * @param days - Array of ExamDayProgress objects
 * @returns Completion percentage (0-100), rounded to nearest integer
 * 
 * @example
 * const days = [
 *   { dayNumber: 1, completed: true },
 *   { dayNumber: 2, completed: false },
 *   { dayNumber: 3, completed: false },
 * ];
 * calculateOverallCompletion(days) // Returns 33
 */
export function calculateOverallCompletion(days: ExamDayProgress[]): number {
  if (days.length === 0) {
    return 0;
  }
  
  const completedDays = days.filter(day => day.completed).length;
  const percentage = (completedDays / days.length) * 100;
  
  return Math.round(percentage);
}

/**
 * Determines the status of a given day based on progress
 * 
 * Status logic:
 * - 'completed': The day has been marked as completed
 * - 'in-progress': Day 1 OR the previous day is completed (day is unlocked)
 * - 'locked': Previous day is not completed (day is locked)
 * 
 * @param dayNumber - The day number to check (1-30)
 * @param progress - Overall exam focus progress object
 * @returns The status of the day
 * 
 * @example
 * getDayStatus(1, progress) // Returns 'in-progress' (Day 1 is always unlocked)
 * getDayStatus(2, progress) // Returns 'locked' if Day 1 not completed
 */
export function getDayStatus(
  dayNumber: number,
  progress: ExamFocusProgress
): 'completed' | 'in-progress' | 'locked' {
  // Find the day in progress array
  const dayProgress = progress.days.find(d => d.dayNumber === dayNumber);
  
  // If the day is completed, return 'completed'
  if (dayProgress?.completed) {
    return 'completed';
  }
  
  // Day 1 is always in-progress (unlocked)
  if (dayNumber === 1) {
    return 'in-progress';
  }
  
  // Check if previous day is completed
  const previousDay = progress.days.find(d => d.dayNumber === dayNumber - 1);
  if (previousDay?.completed) {
    return 'in-progress';
  }
  
  // Otherwise, the day is locked
  return 'locked';
}

/**
 * Formats a day number into a readable day title
 * 
 * @param dayNumber - The day number (1-30)
 * @returns Formatted string like "Day 1" or "Day 15"
 * 
 * @example
 * formatDayTitle(1)  // Returns "Day 1"
 * formatDayTitle(15) // Returns "Day 15"
 */
export function formatDayTitle(dayNumber: number): string {
  return `Day ${dayNumber}`;
}