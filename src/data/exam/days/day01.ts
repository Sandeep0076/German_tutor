/**
 * Day 1: Listening (Teil 1) + Reading (Teil 1)
 * Focus: Understanding exam structure and basic contexts
 * 
 * Skills: Listening, Reading
 * Topics: Shopping, appointments, meeting people, invitations, personal messages
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Teil 1: Short Dialogues
// ============================================================================

const listeningQuestions: ExamQuestion[] = [
  {
    id: 'day01-listening-q1',
    type: 'multiple-choice',
    question: 'Wo sind die Personen?',
    options: [
      'Im Supermarkt',
      'In der Apotheke',
      'Im Restaurant'
    ],
    correctAnswer: 0,
    explanation: 'The dialogue mentions "Brot" and "Käse", typical supermarket items.',
    audioUrl: '/audio/day01/dialogue1.mp3'
  },
  {
    id: 'day01-listening-q2',
    type: 'multiple-choice',
    question: 'Was kauft die Frau?',
    options: [
      'Nur Brot',
      'Brot und Käse',
      'Nur Käse'
    ],
    correctAnswer: 1,
    explanation: 'The woman says "Ich brauche Brot und Käse" (I need bread and cheese).',
    audioUrl: '/audio/day01/dialogue1.mp3'
  },
  {
    id: 'day01-listening-q3',
    type: 'multiple-choice',
    question: 'Wann ist der Termin beim Arzt?',
    options: [
      'Um 9:00 Uhr',
      'Um 10:30 Uhr',
      'Um 14:00 Uhr'
    ],
    correctAnswer: 1,
    explanation: 'The appointment is confirmed for "halb elf" (10:30).',
    audioUrl: '/audio/day01/dialogue2.mp3'
  },
  {
    id: 'day01-listening-q4',
    type: 'multiple-choice',
    question: 'An welchem Tag ist der Termin?',
    options: [
      'Am Montag',
      'Am Mittwoch',
      'Am Freitag'
    ],
    correctAnswer: 1,
    explanation: 'The receptionist says "Am Mittwoch haben wir noch Zeit" (We still have time on Wednesday).',
    audioUrl: '/audio/day01/dialogue2.mp3'
  },
  {
    id: 'day01-listening-q5',
    type: 'multiple-choice',
    question: 'Woher kommt die Frau?',
    options: [
      'Aus Deutschland',
      'Aus Spanien',
      'Aus Italien'
    ],
    correctAnswer: 1,
    explanation: 'The woman introduces herself saying "Ich komme aus Spanien" (I come from Spain).',
    audioUrl: '/audio/day01/dialogue3.mp3'
  },
  {
    id: 'day01-listening-q6',
    type: 'multiple-choice',
    question: 'Wie lange wohnt sie in Berlin?',
    options: [
      'Ein Jahr',
      'Zwei Monate',
      'Drei Wochen'
    ],
    correctAnswer: 1,
    explanation: 'She mentions "Ich wohne seit zwei Monaten hier" (I have been living here for two months).',
    audioUrl: '/audio/day01/dialogue3.mp3'
  }
];

const listeningPractice: ListeningPractice = {
  part: 1,
  title: 'Teil 1: Short Dialogues',
  description: 'Listen to 6 short everyday conversations',
  instructions: 'Listen to each dialogue and answer the questions. Focus on identifying WHO, WHAT, WHERE, and WHEN. Each dialogue will be played twice.',
  questions: listeningQuestions
};

// ============================================================================
// READING PRACTICE - Teil 1: Short Messages
// ============================================================================

const readingText1 = `Liebe Anna,

wie geht es dir? Ich möchte dich zu meiner Geburtstagsparty einladen. Die Party ist am Samstag, den 15. Juni, um 19:00 Uhr. Ich wohne jetzt in der Hauptstraße 45 in Berlin. Kannst du kommen? Bitte sag mir bis Freitag Bescheid.

Viele Grüße
Lisa`;

const readingQuestions1: ExamQuestion[] = [
  {
    id: 'day01-reading-q1',
    type: 'true-false',
    question: 'Lisa hat Geburtstag.',
    correctAnswer: 'Richtig',
    explanation: 'Lisa invites Anna to her birthday party ("Geburtstagsparty").'
  },
  {
    id: 'day01-reading-q2',
    type: 'true-false',
    question: 'Die Party ist am Sonntag.',
    correctAnswer: 'Falsch',
    explanation: 'The party is on Saturday ("am Samstag"), not Sunday.'
  },
  {
    id: 'day01-reading-q3',
    type: 'true-false',
    question: 'Die Party beginnt um 19:00 Uhr.',
    correctAnswer: 'Richtig',
    explanation: 'The text clearly states "um 19:00 Uhr".'
  },
  {
    id: 'day01-reading-q4',
    type: 'true-false',
    question: 'Anna soll bis Samstag antworten.',
    correctAnswer: 'Falsch',
    explanation: 'Anna should answer by Friday ("bis Freitag"), not Saturday.'
  }
];

const readingText2 = `Hallo Thomas,

danke für deine E-Mail. Ich bin nächste Woche in München. Ich komme am Dienstag an und bleibe bis Donnerstag. Hast du Zeit? Wir können zusammen Kaffee trinken. Meine Handynummer ist 0176-12345678. Ruf mich bitte an.

Bis bald
Michael`;

const readingQuestions2: ExamQuestion[] = [
  {
    id: 'day01-reading-q5',
    type: 'true-false',
    question: 'Michael ist jetzt in München.',
    correctAnswer: 'Falsch',
    explanation: 'Michael will be in Munich next week ("nächste Woche"), not now.'
  },
  {
    id: 'day01-reading-q6',
    type: 'true-false',
    question: 'Michael bleibt drei Tage in München.',
    correctAnswer: 'Richtig',
    explanation: 'He arrives on Tuesday and stays until Thursday (3 days: Tuesday, Wednesday, Thursday).'
  },
  {
    id: 'day01-reading-q7',
    type: 'true-false',
    question: 'Michael möchte mit Thomas telefonieren.',
    correctAnswer: 'Richtig',
    explanation: 'Michael gives his phone number and asks Thomas to call him ("Ruf mich bitte an").'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Short Messages - Email 1',
  description: 'Read a short invitation email',
  instructions: 'Read the text and decide if the statements are True (Richtig) or False (Falsch).',
  text: readingText1,
  questions: readingQuestions1
};

const readingPractice2: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Short Messages - Email 2',
  description: 'Read a short personal message',
  instructions: 'Read the text and decide if the statements are True (Richtig) or False (Falsch).',
  text: readingText2,
  questions: readingQuestions2
};

// ============================================================================
// VOCABULARY THEME - Personal Information
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Personal Information',
  items: [
    {
      german: 'der Name',
      english: 'name',
      example: 'Mein Name ist Anna.'
    },
    {
      german: 'der Vorname',
      english: 'first name',
      example: 'Mein Vorname ist Thomas.'
    },
    {
      german: 'der Nachname / der Familienname',
      english: 'last name / surname',
      example: 'Mein Nachname ist Schmidt.'
    },
    {
      german: 'das Alter',
      english: 'age',
      example: 'Wie alt bist du? - Ich bin 25 Jahre alt.'
    },
    {
      german: 'die Adresse',
      english: 'address',
      example: 'Meine Adresse ist Hauptstraße 45.'
    },
    {
      german: 'die Straße',
      english: 'street',
      example: 'Ich wohne in der Goethestraße.'
    },
    {
      german: 'die Hausnummer',
      english: 'house number',
      example: 'Die Hausnummer ist 12.'
    },
    {
      german: 'die Postleitzahl',
      english: 'postal code',
      example: 'Die Postleitzahl von Berlin ist 10115.'
    },
    {
      german: 'der Wohnort',
      english: 'place of residence',
      example: 'Mein Wohnort ist München.'
    },
    {
      german: 'die Stadt',
      english: 'city',
      example: 'Ich wohne in der Stadt Berlin.'
    },
    {
      german: 'das Land',
      english: 'country',
      example: 'Deutschland ist ein Land in Europa.'
    },
    {
      german: 'die Telefonnummer',
      english: 'phone number',
      example: 'Meine Telefonnummer ist 030-12345678.'
    },
    {
      german: 'die Handynummer',
      english: 'mobile phone number',
      example: 'Meine Handynummer ist 0176-98765432.'
    },
    {
      german: 'die E-Mail-Adresse',
      english: 'email address',
      example: 'Meine E-Mail-Adresse ist anna@example.com.'
    },
    {
      german: 'der Geburtstag',
      english: 'birthday',
      example: 'Mein Geburtstag ist am 15. Juni.'
    },
    {
      german: 'das Geburtsdatum',
      english: 'date of birth',
      example: 'Mein Geburtsdatum ist der 15.06.1998.'
    },
    {
      german: 'der Geburtsort',
      english: 'place of birth',
      example: 'Mein Geburtsort ist Hamburg.'
    },
    {
      german: 'die Nationalität',
      english: 'nationality',
      example: 'Meine Nationalität ist deutsch.'
    },
    {
      german: 'die Staatsangehörigkeit',
      english: 'citizenship',
      example: 'Ich habe die deutsche Staatsangehörigkeit.'
    },
    {
      german: 'woher',
      english: 'from where',
      example: 'Woher kommst du? - Ich komme aus Spanien.'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day01: ExamDay = {
  day: 1,
  skills: ['Listening', 'Reading'],
  practices: [
    listeningPractice,
    readingPractice1,
    readingPractice2
  ],
  vocabulary,
  focus: 'Understanding exam structure and basic contexts'
};

export default day01;