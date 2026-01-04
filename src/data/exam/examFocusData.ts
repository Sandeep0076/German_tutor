/**
 * Exam Focus Data - Central Index
 * 
 * This file serves as the central access point for all exam day data.
 * It exports the examDays array and helper functions for accessing exam data.
 */

import day01 from './days/day01';
import day02 from './days/day02';
import day03 from './days/day03';
import type { ExamDay, ExamFocusProgress, ExamDayProgress } from './examTypes';

// ============================================================================
// Exam Days Collection
// ============================================================================

/**
 * Array of all exam days (1-30)
 * Currently contains Day 1, with Days 2-30 to be added as they are created
 */
export const examDays: ExamDay[] = [
  day01,
  day02,
  day03,
  // Days 4-30 will be added here as they are created
  // Each day should be imported at the top and added to this array
];

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get exam day data by day number
 * 
 * @param dayNumber - The day number to retrieve (1-30)
 * @returns The ExamDay data for the specified day, or undefined if not found
 * 
 * @example
 * const day1 = getExamDay(1);
 * if (day1) {
 *   console.log(day1.focus);
 * }
 */
export function getExamDay(dayNumber: number): ExamDay | undefined {
  return examDays.find(day => day.day === dayNumber);
}

/**
 * Initialize exam progress for a new user
 * 
 * Creates an ExamFocusProgress object with all 30 days marked as not completed.
 * This function should be called when a user first accesses the exam focus feature
 * to set up their initial progress tracking state.
 * 
 * @returns A fresh ExamFocusProgress object with all days incomplete
 * 
 * @example
 * const initialProgress = initializeExamProgress();
 * // Save to localStorage or state management
 */
export function initializeExamProgress(): ExamFocusProgress {
  const days: ExamDayProgress[] = Array.from({ length: 30 }, (_, i) => ({
    dayNumber: i + 1,
    completed: false
  }));

  return {
    days,
    overallCompletion: 0
  };
}