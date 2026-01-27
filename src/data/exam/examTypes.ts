/**
 * Exam Focus Feature - TypeScript Type Definitions
 * 
 * This file contains all the core type definitions for the 30-day Goethe A1 exam preparation feature.
 * These types ensure type safety across all exam-related components and data.
 */

// ============================================================================
// Core Skill Types
// ============================================================================

/**
 * The four skills tested in the Goethe A1 exam
 */
export type SkillType = 'Listening' | 'Reading' | 'Writing' | 'Speaking';

/**
 * Question format types used throughout the exam exercises
 */
export type ExamQuestionType = 'multiple-choice' | 'true-false' | 'matching' | 'fill-in' | 'open-ended';

// ============================================================================
// Question Structure
// ============================================================================

/**
 * Represents an individual exam question
 * 
 * @property id - Unique identifier for the question
 * @property type - The format of the question (multiple-choice, true-false, etc.)
 * @property question - The question text to display
 * @property options - Available answer choices (for multiple-choice questions)
 * @property correctAnswer - The correct answer (string for text answers, number for option index)
 * @property explanation - Optional explanation shown after answering
 * @property audioUrl - Optional audio file URL (for listening questions)
 * @property imageUrl - Optional image URL (for visual aids)
 */
export interface ExamQuestion {
  id: string;
  type: ExamQuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
  audioUrl?: string;
  imageUrl?: string;
  text?: string; // Added for reading questions with individual texts (e.g., Part 3)
}

// ============================================================================
// Skill Practice Interfaces
// ============================================================================

/**
 * Listening practice exercise structure
 * Contains audio-based comprehension questions divided into parts
 * 
 * @property part - Part number (1, 2, or 3 for Goethe A1 exam)
 * @property title - Title of this listening section
 * @property description - Brief description of the listening task
 * @property instructions - Detailed instructions for the learner
 * @property audioUrl - Optional main audio file for the entire section
 * @property questions - Array of listening comprehension questions
 */
export interface ListeningPractice {
  part: number;
  title: string;
  description: string;
  instructions: string;
  audioUrl?: string;
  questions: ExamQuestion[];
}

/**
 * Reading practice exercise structure
 * Contains text passages with comprehension questions
 * 
 * @property part - Part number (1, 2, or 3 for Goethe A1 exam)
 * @property title - Title of this reading section
 * @property description - Brief description of the reading task
 * @property instructions - Detailed instructions for the learner
 * @property text - The reading passage text
 * @property questions - Array of reading comprehension questions
 */
export interface ReadingPractice {
  part: number;
  title: string;
  description: string;
  instructions: string;
  text: string;
  questions: ExamQuestion[];
}

/**
 * Writing practice exercise structure
 * Provides prompts for written composition tasks
 * 
 * @property part - Part number (1 or 2 for Goethe A1 exam)
 * @property title - Title of this writing task
 * @property description - Brief description of the writing task
 * @property instructions - Detailed instructions for the learner
 * @property prompt - The writing prompt or scenario
 * @property sampleAnswer - Optional example answer for reference
 * @property keyPhrases - Optional useful phrases for this writing task
 */
export interface WritingPractice {
  part: number;
  title: string;
  description: string;
  instructions: string;
  prompt: string;
  sampleAnswer?: string;
  keyPhrases?: string[];
}

/**
 * Speaking practice exercise structure
 * Provides prompts for oral expression tasks
 * 
 * @property part - Part number (1, 2, or 3 for Goethe A1 exam)
 * @property title - Title of this speaking task
 * @property description - Brief description of the speaking task
 * @property instructions - Detailed instructions for the learner
 * @property prompts - Array of speaking prompts or questions
 * @property sampleResponses - Optional example responses for reference
 */
export interface SpeakingPractice {
  part: number;
  title: string;
  description: string;
  instructions: string;
  prompts: string[];
  sampleResponses?: string[];
}

/**
 * Union type representing any skill practice exercise
 * Allows handling different practice types polymorphically
 */
export type SkillPractice = ListeningPractice | ReadingPractice | WritingPractice | SpeakingPractice;

// ============================================================================
// Vocabulary Structure
// ============================================================================

/**
 * Individual vocabulary entry
 * 
 * @property german - The German word or phrase
 * @property english - English translation
 * @property example - Optional example sentence using the word
 */
export interface VocabularyItem {
  german: string;
  english: string;
  example?: string;
}

/**
 * Themed vocabulary collection for a day
 * 
 * @property theme - The theme name (e.g., "Personal Information", "Shopping")
 * @property items - Array of vocabulary items for this theme
 */
export interface VocabularyTheme {
  theme: string;
  items: VocabularyItem[];
}

// ============================================================================
// Day Structure
// ============================================================================

/**
 * Complete exam day structure containing all practice exercises
 * 
 * @property day - Day number (1-30)
 * @property skills - Array of skills practiced on this day
 * @property practices - Array of practice exercises for the day's skills
 * @property vocabulary - Themed vocabulary for the day
 * @property focus - Brief description of the day's focus area
 */
export interface ExamDay {
  day: number;
  skills: SkillType[];
  practices: SkillPractice[];
  vocabulary: VocabularyTheme;
  focus: string;
}

// ============================================================================
// Progress Tracking
// ============================================================================

/**
 * Progress tracking for an individual exam day
 * 
 * @property dayNumber - The day number (1-30)
 * @property completed - Whether the day has been completed
 * @property completedDate - Optional date when the day was completed
 * @property scores - Optional skill-specific scores for the day
 */
export interface ExamDayProgress {
  dayNumber: number;
  completed: boolean;
  completedDate?: Date;
  scores?: {
    listening?: number;
    reading?: number;
    writing?: number;
    speaking?: number;
  };
}

/**
 * Overall exam focus progress tracking
 * 
 * @property days - Array of progress for each day
 * @property overallCompletion - Overall completion percentage (0-100)
 */
export interface ExamFocusProgress {
  days: ExamDayProgress[];
  overallCompletion: number;
}