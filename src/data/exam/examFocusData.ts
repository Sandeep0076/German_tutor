/**
 * Exam Focus Data - Central Index
 *
 * This file serves as the central access point for all exam day data.
 * It exports the examDays array and helper functions for accessing exam data.
 */

import day01 from './days/day01';
import day02 from './days/day02';
import day03 from './days/day03';
import day04 from './days/day04';
import day05 from './days/day05';
import day06 from './days/day06';
import day07 from './days/day07';
import day08 from './days/day08';
import day09 from './days/day09';
import day10 from './days/day10';
import day11 from './days/day11';
import day12 from './days/day12';
import day13 from './days/day13';
import day14 from './days/day14';
import day15 from './days/day15';
import day16 from './days/day16';
import day17 from './days/day17';
import day18 from './days/day18';
import day19 from './days/day19';
import day20 from './days/day20';
import day21 from './days/day21';
import day22 from './days/day22';
import day23 from './days/day23';
import day24 from './days/day24';
import day25 from './days/day25';
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
  day04,
  day05,
  day06,
  day07,
  day08,
  day09,
  day10,
  day11,
  day12,
  day13,
  day14,
  day15,
  day16,
  day17,
  day18,
  day19,
  day20,
  day21,
  day22,
  day23,
  day24,
  day25
  // Days 26-30 will be added here as they are created
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