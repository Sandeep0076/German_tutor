/**
 * Day 3: Listening (Teil 2) + Reading (Teil 2)
 * Focus: Understanding announcements and simple information
 * 
 * Skills: Listening, Reading
 * Topics: Public announcements (stations, airports, supermarkets), advertisements, finding apartments/services/events
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Teil 2: Public Announcements
// ============================================================================
// NOTE: Listening content is PLACEHOLDER until audio files are available

const listeningPractice: ListeningPractice = {
  part: 2,
  title: 'Teil 2: Public Announcements',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: '[PLACEHOLDER - Listening instructions to be added when audio is ready. This section will include announcements at stations, airports, and supermarkets. Students will practice True/False statements and focus on times, platforms, gate numbers, and special offers. These announcements are played only ONCE.]',
  questions: [] // Empty array - questions will be added with audio
};

// ============================================================================
// READING PRACTICE - Teil 2: Matching Situations to Advertisements
// ============================================================================

const readingText1 = `**Anzeige A:**
Schöne 2-Zimmer-Wohnung in Berlin-Mitte
Miete: 800 Euro warm
Küche und Bad neu
U-Bahn 5 Minuten
Telefon: 030-555-1234`;

const readingText2 = `**Anzeige B:**
Großes Zimmer in WG
Nur 350 Euro pro Monat
Küche und Internet inklusive
Nähe Universität
E-Mail: wg-zimmer@email.de`;

const readingQuestions: ExamQuestion[] = [
  {
    id: 'day03-reading-q1',
    type: 'matching',
    question: 'Maria ist Studentin und sucht ein günstiges Zimmer in der Nähe der Universität. Welche Anzeige passt?',
    options: ['Anzeige A', 'Anzeige B'],
    correctAnswer: 1,
    explanation: 'Anzeige B is better for Maria because it\'s near the university ("Nähe Universität") and cheaper (350 Euro vs 800 Euro).'
  },
  {
    id: 'day03-reading-q2',
    type: 'matching',
    question: 'Thomas arbeitet in Berlin-Mitte und möchte eine eigene Wohnung. Welche Anzeige passt?',
    options: ['Anzeige A', 'Anzeige B'],
    correctAnswer: 0,
    explanation: 'Anzeige A offers a complete 2-room apartment ("2-Zimmer-Wohnung") in Berlin-Mitte, which is what Thomas needs.'
  }
];

const readingText3 = `**Anzeige A:**
Deutschkurs für Anfänger
Montag und Mittwoch, 18:00-20:00 Uhr
Volkshochschule Berlin
Preis: 120 Euro (8 Wochen)
Anmeldung: www.vhs-berlin.de`;

const readingText4 = `**Anzeige B:**
Intensiv-Deutschkurs
Montag bis Freitag, 9:00-13:00 Uhr
Sprachschule Deutsch Plus
Preis: 400 Euro (4 Wochen)
Tel: 030-777-8899`;

const readingQuestions2: ExamQuestion[] = [
  {
    id: 'day03-reading-q3',
    type: 'matching',
    question: 'Anna arbeitet von Montag bis Freitag von 9:00 bis 17:00 Uhr. Sie möchte Deutsch lernen. Welcher Kurs passt?',
    options: ['Anzeige A', 'Anzeige B'],
    correctAnswer: 0,
    explanation: 'Anzeige A is in the evening (18:00-20:00), so Anna can attend after work. Anzeige B is during her work hours (9:00-13:00).'
  },
  {
    id: 'day03-reading-q4',
    type: 'matching',
    question: 'Peter hat vier Wochen Urlaub und möchte jeden Tag Deutsch lernen. Welcher Kurs passt?',
    options: ['Anzeige A', 'Anzeige B'],
    correctAnswer: 1,
    explanation: 'Anzeige B is an intensive course Monday to Friday (4 weeks), perfect for Peter\'s vacation time.'
  }
];

const readingText5 = `**Anzeige A:**
Fahrrad zu verkaufen
Fast neu, nur 6 Monate alt
26 Zoll, 21 Gänge
Preis: 150 Euro
Telefon: 0176-123-4567`;

const readingText6 = `**Anzeige B:**
Kinderfahrrad abzugeben
12 Zoll, für Kinder 3-5 Jahre
Guter Zustand
Nur 30 Euro
E-Mail: familie.mueller@email.de`;

const readingQuestions3: ExamQuestion[] = [
  {
    id: 'day03-reading-q5',
    type: 'matching',
    question: 'Herr Schmidt sucht ein Fahrrad für seine 4-jährige Tochter. Welche Anzeige passt?',
    options: ['Anzeige A', 'Anzeige B'],
    correctAnswer: 1,
    explanation: 'Anzeige B is a children\'s bicycle for ages 3-5 ("für Kinder 3-5 Jahre"), perfect for his 4-year-old daughter.'
  }
];

import type { ExamQuestion } from '../examTypes';

const readingPractice1: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Matching - Housing Advertisements',
  description: 'Match people to suitable housing advertisements',
  instructions: 'Read the situations and the advertisements. Choose which advertisement (A or B) fits each person\'s needs.',
  text: `${readingText1}\n\n${readingText2}`,
  questions: readingQuestions
};

const readingPractice2: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Matching - Language Course Advertisements',
  description: 'Match people to suitable language courses',
  instructions: 'Read the situations and the advertisements. Choose which course (A or B) fits each person\'s needs.',
  text: `${readingText3}\n\n${readingText4}`,
  questions: readingQuestions2
};

const readingPractice3: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Matching - Bicycle Advertisements',
  description: 'Match people to suitable bicycle advertisements',
  instructions: 'Read the situation and the advertisements. Choose which advertisement (A or B) fits the person\'s needs.',
  text: `${readingText5}\n\n${readingText6}`,
  questions: readingQuestions3
};

// ============================================================================
// VOCABULARY THEME - Time (Uhrzeit), Days of Week, Months
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Time (Uhrzeit), Days of Week, Months',
  items: [
    // Time expressions
    {
      german: 'die Uhrzeit',
      english: 'time (of day)',
      example: 'Wie spät ist es? / Wie viel Uhr ist es?'
    },
    {
      german: 'die Uhr',
      english: 'clock / o\'clock',
      example: 'Es ist drei Uhr.'
    },
    {
      german: 'um ... Uhr',
      english: 'at ... o\'clock',
      example: 'Der Kurs beginnt um 9 Uhr.'
    },
    {
      german: 'halb',
      english: 'half',
      example: 'Es ist halb drei. (It\'s 2:30)'
    },
    {
      german: 'Viertel',
      english: 'quarter',
      example: 'Es ist Viertel nach drei. (It\'s 3:15)'
    },
    {
      german: 'vor',
      english: 'before / to',
      example: 'Es ist zehn vor drei. (It\'s 2:50)'
    },
    {
      german: 'nach',
      english: 'after / past',
      example: 'Es ist zehn nach drei. (It\'s 3:10)'
    },
    {
      german: 'die Minute',
      english: 'minute',
      example: 'Der Zug kommt in fünf Minuten.'
    },
    {
      german: 'die Stunde',
      english: 'hour',
      example: 'Der Kurs dauert zwei Stunden.'
    },
    // Days of the week
    {
      german: 'der Tag',
      english: 'day',
      example: 'Welcher Tag ist heute?'
    },
    {
      german: 'die Woche',
      english: 'week',
      example: 'Ich arbeite fünf Tage pro Woche.'
    },
    {
      german: 'der Montag',
      english: 'Monday',
      example: 'Am Montag habe ich Deutschkurs.'
    },
    {
      german: 'der Dienstag',
      english: 'Tuesday',
      example: 'Am Dienstag arbeite ich.'
    },
    {
      german: 'der Mittwoch',
      english: 'Wednesday',
      example: 'Am Mittwoch bin ich frei.'
    },
    {
      german: 'der Donnerstag',
      english: 'Thursday',
      example: 'Am Donnerstag gehe ich einkaufen.'
    },
    {
      german: 'der Freitag',
      english: 'Friday',
      example: 'Am Freitag treffe ich Freunde.'
    },
    {
      german: 'der Samstag / der Sonnabend',
      english: 'Saturday',
      example: 'Am Samstag schlafe ich lange.'
    },
    {
      german: 'der Sonntag',
      english: 'Sunday',
      example: 'Am Sonntag ist die Party.'
    },
    {
      german: 'das Wochenende',
      english: 'weekend',
      example: 'Am Wochenende habe ich Zeit.'
    },
    // Months
    {
      german: 'der Monat',
      english: 'month',
      example: 'Ich lerne seit zwei Monaten Deutsch.'
    },
    {
      german: 'der Januar',
      english: 'January',
      example: 'Im Januar ist es kalt.'
    },
    {
      german: 'der Februar',
      english: 'February',
      example: 'Im Februar habe ich Geburtstag.'
    },
    {
      german: 'der März',
      english: 'March',
      example: 'Im März beginnt der Frühling.'
    },
    {
      german: 'der April',
      english: 'April',
      example: 'Im April regnet es oft.'
    },
    {
      german: 'der Mai',
      english: 'May',
      example: 'Im Mai ist das Wetter schön.'
    },
    {
      german: 'der Juni',
      english: 'June',
      example: 'Im Juni ist Sommer.'
    },
    {
      german: 'der Juli',
      english: 'July',
      example: 'Im Juli fahre ich in Urlaub.'
    },
    {
      german: 'der August',
      english: 'August',
      example: 'Im August ist es sehr warm.'
    },
    {
      german: 'der September',
      english: 'September',
      example: 'Im September beginnt die Schule.'
    },
    {
      german: 'der Oktober',
      english: 'October',
      example: 'Im Oktober ist Herbst.'
    },
    {
      german: 'der November',
      english: 'November',
      example: 'Im November wird es kalt.'
    },
    {
      german: 'der Dezember',
      english: 'December',
      example: 'Im Dezember ist Weihnachten.'
    },
    // Time-related words
    {
      german: 'heute',
      english: 'today',
      example: 'Heute ist Montag.'
    },
    {
      german: 'morgen',
      english: 'tomorrow',
      example: 'Morgen habe ich frei.'
    },
    {
      german: 'gestern',
      english: 'yesterday',
      example: 'Gestern war Sonntag.'
    },
    {
      german: 'jetzt',
      english: 'now',
      example: 'Ich lerne jetzt Deutsch.'
    },
    {
      german: 'später',
      english: 'later',
      example: 'Ich rufe dich später an.'
    },
    {
      german: 'früh',
      english: 'early',
      example: 'Ich stehe früh auf.'
    },
    {
      german: 'spät',
      english: 'late',
      example: 'Es ist schon spät.'
    },
    {
      german: 'pünktlich',
      english: 'on time / punctual',
      example: 'Der Zug kommt pünktlich.'
    },
    {
      german: 'beginnen / anfangen',
      english: 'to begin / to start',
      example: 'Der Kurs beginnt um 9 Uhr.'
    },
    {
      german: 'enden / aufhören',
      english: 'to end / to finish',
      example: 'Der Kurs endet um 12 Uhr.'
    },
    {
      german: 'dauern',
      english: 'to last / to take (time)',
      example: 'Der Film dauert zwei Stunden.'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day03: ExamDay = {
  day: 3,
  skills: ['Listening', 'Reading'],
  practices: [
    listeningPractice,
    readingPractice1,
    readingPractice2,
    readingPractice3
  ],
  vocabulary,
  focus: 'Understanding announcements and simple information'
};

export default day03;