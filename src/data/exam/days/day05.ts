/**
 * Day 5: Listening (Teil 3) + Reading (Teil 3)
 * Focus: Telephone messages and information boards
 * 
 * Skills: Listening, Reading
 * Topics: Voicemails, telephone messages, information posters, notices, opening hours, rules
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Teil 3: Telephone Messages/Voicemails
// ============================================================================
// NOTE: Listening content is PLACEHOLDER until audio files are available

const listeningPractice: ListeningPractice = {
  part: 3,
  title: 'Teil 3: Telephone Messages',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: '[PLACEHOLDER - Listening instructions to be added when audio is ready. This section will include 5 telephone messages/voicemails with multiple choice questions (A, B, C). Common scenarios: doctor appointments, friend meeting plans, store pickup notifications, family dinner messages, work schedule changes. Messages are played TWICE. Students should use first listening for WHO + WHY, second listening for specific details like times, dates, and locations.]',
  questions: [] // Empty array - questions will be added with audio
};

// ============================================================================
// READING PRACTICE - Teil 3: Information Posters/Notices
// ============================================================================

const readingText1 = `**Stadtmuseum Berlin**

Öffnungszeiten:
Dienstag bis Sonntag: 10:00-18:00 Uhr
Montags geschlossen

Eintrittspreise:
Erwachsene: 8 Euro
Kinder unter 12 Jahren: frei
Studenten: 5 Euro (mit Ausweis)

Besondere Hinweise:
• Fotografieren ohne Blitz erlaubt
• Keine Taschen über 30x40 cm
• Garderobe vorhanden`;

const readingQuestions1: ExamQuestion[] = [
  {
    id: 'day05-reading-q1',
    type: 'multiple-choice',
    question: 'Wann ist das Museum geöffnet?',
    options: [
      'Montag bis Sonntag',
      'Dienstag bis Sonntag',
      'Nur am Wochenende'
    ],
    correctAnswer: 1,
    explanation: 'The museum is open Tuesday to Sunday ("Dienstag bis Sonntag"). It is closed on Mondays ("Montags geschlossen").'
  },
  {
    id: 'day05-reading-q2',
    type: 'multiple-choice',
    question: 'Wie viel kostet der Eintritt für Erwachsene?',
    options: [
      '5 Euro',
      '8 Euro',
      'kostenlos'
    ],
    correctAnswer: 1,
    explanation: 'Adults ("Erwachsene") pay 8 Euro for entry.'
  },
  {
    id: 'day05-reading-q3',
    type: 'multiple-choice',
    question: 'Was ist im Museum erlaubt?',
    options: [
      'Fotografieren mit Blitz',
      'Fotografieren ohne Blitz',
      'Fotografieren ist verboten'
    ],
    correctAnswer: 1,
    explanation: 'Photography without flash is allowed ("Fotografieren ohne Blitz erlaubt").'
  }
];

const readingText2 = `**Schwimmbad "Aqua Fun"**

Öffnungszeiten:
Täglich: 9:00-20:00 Uhr
Auch an Feiertagen geöffnet

Preise:
Erwachsene: 5 Euro
Kinder (6-14 Jahre): 3 Euro
Kinder unter 6 Jahren: frei

Wichtige Informationen:
• Bitte keine Glasflaschen mitbringen!
• Schwimmkurs: samstags 14:00 Uhr
• Sauna: ab 16 Jahren
• Parkplatz kostenlos`;

const readingQuestions2: ExamQuestion[] = [
  {
    id: 'day05-reading-q4',
    type: 'multiple-choice',
    question: 'Wann ist das Schwimmbad geöffnet?',
    options: [
      'Nur am Wochenende',
      'Montag bis Freitag',
      'Jeden Tag'
    ],
    correctAnswer: 2,
    explanation: 'The pool is open daily ("Täglich"), including holidays ("Auch an Feiertagen geöffnet").'
  },
  {
    id: 'day05-reading-q5',
    type: 'multiple-choice',
    question: 'Was ist verboten?',
    options: [
      'Schwimmen',
      'Glasflaschen',
      'Fotografieren'
    ],
    correctAnswer: 1,
    explanation: 'Glass bottles are forbidden ("Bitte keine Glasflaschen mitbringen!").'
  },
  {
    id: 'day05-reading-q6',
    type: 'multiple-choice',
    question: 'Wann ist der Schwimmkurs?',
    options: [
      'Samstags um 14:00 Uhr',
      'Täglich um 14:00 Uhr',
      'Sonntags um 14:00 Uhr'
    ],
    correctAnswer: 0,
    explanation: 'The swimming course is on Saturdays at 14:00 ("Schwimmkurs: samstags 14:00 Uhr").'
  }
];

const readingText3 = `**Parkplatz Hauptstraße**

Parkgebühren:
Montag bis Freitag: 2 Euro pro Stunde
8:00-18:00 Uhr

Samstag und Sonntag: kostenlos

Maximale Parkdauer: 3 Stunden

Bezahlung:
• Parkscheinautomat (Münzen und EC-Karte)
• Keine Kreditkarten

Wichtig:
Parkschein gut sichtbar hinter die Windschutzscheibe legen!`;

const readingQuestions3: ExamQuestion[] = [
  {
    id: 'day05-reading-q7',
    type: 'multiple-choice',
    question: 'Wie viel kostet das Parken am Samstag?',
    options: [
      '2 Euro pro Stunde',
      '1 Euro pro Stunde',
      'Es ist kostenlos'
    ],
    correctAnswer: 2,
    explanation: 'Parking on Saturday and Sunday is free ("Samstag und Sonntag: kostenlos").'
  },
  {
    id: 'day05-reading-q8',
    type: 'multiple-choice',
    question: 'Wie lange darf man maximal parken?',
    options: [
      '2 Stunden',
      '3 Stunden',
      '4 Stunden'
    ],
    correctAnswer: 1,
    explanation: 'Maximum parking duration is 3 hours ("Maximale Parkdauer: 3 Stunden").'
  },
  {
    id: 'day05-reading-q9',
    type: 'multiple-choice',
    question: 'Wie kann man bezahlen?',
    options: [
      'Nur mit Kreditkarte',
      'Mit Münzen oder EC-Karte',
      'Nur mit Münzen'
    ],
    correctAnswer: 1,
    explanation: 'You can pay with coins or EC card ("Münzen und EC-Karte"). Credit cards are not accepted ("Keine Kreditkarten").'
  }
];

const readingText4 = `**Stadtbibliothek**

Öffnungszeiten:
Mo, Mi, Fr: 10:00-19:00 Uhr
Di, Do: 10:00-20:00 Uhr
Sa: 10:00-14:00 Uhr
Sonntags geschlossen

Ausleihe:
• Bücher: 4 Wochen
• DVDs: 1 Woche
• Zeitschriften: nicht ausleihbar

Gebühren:
Anmeldung: kostenlos
Ausleihe: kostenlos
Verspätung: 0,50 Euro pro Tag

In der Bibliothek:
• Bitte leise sein!
• Essen und Trinken verboten
• Handys ausschalten
• WLAN kostenlos`;

const readingQuestions4: ExamQuestion[] = [
  {
    id: 'day05-reading-q10',
    type: 'multiple-choice',
    question: 'Bis wann ist die Bibliothek am Dienstag geöffnet?',
    options: [
      'Bis 19:00 Uhr',
      'Bis 20:00 Uhr',
      'Bis 14:00 Uhr'
    ],
    correctAnswer: 1,
    explanation: 'On Tuesday ("Di") the library is open until 20:00 ("10:00-20:00 Uhr").'
  },
  {
    id: 'day05-reading-q11',
    type: 'multiple-choice',
    question: 'Wie lange kann man Bücher ausleihen?',
    options: [
      '1 Woche',
      '2 Wochen',
      '4 Wochen'
    ],
    correctAnswer: 2,
    explanation: 'Books can be borrowed for 4 weeks ("Bücher: 4 Wochen").'
  },
  {
    id: 'day05-reading-q12',
    type: 'multiple-choice',
    question: 'Was ist in der Bibliothek verboten?',
    options: [
      'WLAN benutzen',
      'Essen und Trinken',
      'Bücher lesen'
    ],
    correctAnswer: 1,
    explanation: 'Eating and drinking are forbidden in the library ("Essen und Trinken verboten").'
  }
];

const readingPractice1: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Museum Information',
  description: 'Read a museum notice and answer questions',
  instructions: 'Read the information poster and answer the multiple choice questions. Look for specific details about times, prices, and rules.',
  text: readingText1,
  questions: readingQuestions1
};

const readingPractice2: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Swimming Pool Notice',
  description: 'Read a swimming pool information board',
  instructions: 'Read the notice and answer questions about opening hours, prices, and rules.',
  text: readingText2,
  questions: readingQuestions2
};

const readingPractice3: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Parking Information',
  description: 'Read parking regulations and fees',
  instructions: 'Read the parking sign and answer questions about costs, times, and payment methods.',
  text: readingText3,
  questions: readingQuestions3
};

const readingPractice4: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Library Rules',
  description: 'Read library opening hours and rules',
  instructions: 'Read the library information and answer questions about hours, borrowing periods, and rules.',
  text: readingText4,
  questions: readingQuestions4
};

// ============================================================================
// VOCABULARY THEME - Daily Routine & Time Expressions
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Daily Routine & Time Expressions',
  items: [
    // Morning routine
    {
      german: 'aufstehen',
      english: 'to get up',
      example: 'Ich stehe um 7 Uhr auf.'
    },
    {
      german: 'aufwachen',
      english: 'to wake up',
      example: 'Ich wache früh auf.'
    },
    {
      german: 'duschen',
      english: 'to shower',
      example: 'Ich dusche jeden Morgen.'
    },
    {
      german: 'sich anziehen',
      english: 'to get dressed',
      example: 'Ich ziehe mich an.'
    },
    {
      german: 'frühstücken',
      english: 'to have breakfast',
      example: 'Ich frühstücke um 8 Uhr.'
    },
    {
      german: 'Zähne putzen',
      english: 'to brush teeth',
      example: 'Ich putze meine Zähne.'
    },
    // Daytime activities
    {
      german: 'arbeiten',
      english: 'to work',
      example: 'Ich arbeite von 9 bis 17 Uhr.'
    },
    {
      german: 'zur Arbeit gehen',
      english: 'to go to work',
      example: 'Ich gehe zur Arbeit.'
    },
    {
      german: 'lernen',
      english: 'to learn/study',
      example: 'Ich lerne Deutsch.'
    },
    {
      german: 'Pause machen',
      english: 'to take a break',
      example: 'Ich mache Pause.'
    },
    {
      german: 'zu Mittag essen',
      english: 'to have lunch',
      example: 'Ich esse zu Mittag.'
    },
    {
      german: 'einkaufen',
      english: 'to shop',
      example: 'Ich kaufe ein.'
    },
    {
      german: 'kochen',
      english: 'to cook',
      example: 'Ich koche das Abendessen.'
    },
    // Evening routine
    {
      german: 'nach Hause kommen',
      english: 'to come home',
      example: 'Ich komme um 18 Uhr nach Hause.'
    },
    {
      german: 'zu Abend essen',
      english: 'to have dinner',
      example: 'Wir essen um 19 Uhr zu Abend.'
    },
    {
      german: 'fernsehen',
      english: 'to watch TV',
      example: 'Ich sehe fern.'
    },
    {
      german: 'ins Bett gehen',
      english: 'to go to bed',
      example: 'Ich gehe um 22 Uhr ins Bett.'
    },
    {
      german: 'schlafen',
      english: 'to sleep',
      example: 'Ich schlafe 8 Stunden.'
    },
    // Time expressions
    {
      german: 'morgens',
      english: 'in the morning',
      example: 'Morgens trinke ich Kaffee.'
    },
    {
      german: 'vormittags',
      english: 'before noon',
      example: 'Vormittags arbeite ich.'
    },
    {
      german: 'mittags',
      english: 'at noon',
      example: 'Mittags esse ich.'
    },
    {
      german: 'nachmittags',
      english: 'in the afternoon',
      example: 'Nachmittags lerne ich.'
    },
    {
      german: 'abends',
      english: 'in the evening',
      example: 'Abends koche ich.'
    },
    {
      german: 'nachts',
      english: 'at night',
      example: 'Nachts schlafe ich.'
    },
    {
      german: 'um ... Uhr',
      english: 'at ... o\'clock',
      example: 'um 7 Uhr'
    },
    {
      german: 'von ... bis ...',
      english: 'from ... to ...',
      example: 'von 9 bis 17 Uhr'
    },
    // Frequency words
    {
      german: 'jeden Tag',
      english: 'every day',
      example: 'Ich lerne jeden Tag Deutsch.'
    },
    {
      german: 'jeden Morgen',
      english: 'every morning',
      example: 'Ich dusche jeden Morgen.'
    },
    {
      german: 'manchmal',
      english: 'sometimes',
      example: 'Manchmal koche ich.'
    },
    {
      german: 'oft',
      english: 'often',
      example: 'Ich gehe oft spazieren.'
    },
    {
      german: 'immer',
      english: 'always',
      example: 'Ich frühstücke immer.'
    },
    {
      german: 'nie',
      english: 'never',
      example: 'Ich rauche nie.'
    },
    {
      german: 'normalerweise',
      english: 'normally',
      example: 'Normalerweise stehe ich um 7 Uhr auf.'
    },
    // Opening hours vocabulary
    {
      german: 'geöffnet',
      english: 'open',
      example: 'Das Museum ist geöffnet.'
    },
    {
      german: 'geschlossen',
      english: 'closed',
      example: 'Montags geschlossen.'
    },
    {
      german: 'die Öffnungszeiten',
      english: 'opening hours',
      example: 'Die Öffnungszeiten sind 9-18 Uhr.'
    },
    {
      german: 'täglich',
      english: 'daily',
      example: 'Täglich geöffnet.'
    },
    {
      german: 'außer',
      english: 'except',
      example: 'Täglich außer Montag.'
    },
    {
      german: 'der Eintritt',
      english: 'admission/entry',
      example: 'Der Eintritt kostet 8 Euro.'
    },
    {
      german: 'kostenlos / gratis / frei',
      english: 'free',
      example: 'Der Eintritt ist kostenlos.'
    },
    {
      german: 'verboten',
      english: 'forbidden',
      example: 'Rauchen ist verboten.'
    },
    {
      german: 'erlaubt',
      english: 'allowed',
      example: 'Fotografieren ist erlaubt.'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day05: ExamDay = {
  day: 5,
  skills: ['Listening', 'Reading'],
  practices: [
    listeningPractice,
    readingPractice1,
    readingPractice2,
    readingPractice3,
    readingPractice4
  ],
  vocabulary,
  focus: 'Telephone messages and information boards'
};

export default day05;