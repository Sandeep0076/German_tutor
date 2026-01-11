/**
 * Day 8: Listening + Reading - Travel & Transportation
 * Focus: Train/bus schedules, travel booking, transportation information
 * 
 * Skills: Listening (all 3 parts), Reading (all 3 parts)
 * Topics: Train stations, bus schedules, travel websites, transportation info boards
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Mixed Practice (All 3 Parts with Travel Contexts)
// ============================================================================
// NOTE: Listening content is PLACEHOLDER until audio files are available

const listeningPractice1: ListeningPractice = {
  part: 1,
  title: 'Teil 1: Dialogues about Travel and Transportation',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: 'Listen to short dialogues at train stations, bus stops, and travel agencies',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice2: ListeningPractice = {
  part: 2,
  title: 'Teil 2: Announcements at Stations and Airports',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: 'Listen to public announcements about delays, platform changes, and departures',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice3: ListeningPractice = {
  part: 3,
  title: 'Teil 3: Phone Messages about Travel Plans',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: 'Listen to voicemail messages about trip changes and meeting arrangements',
  questions: [] // Empty array - questions will be added with audio
};

// ============================================================================
// READING PRACTICE - All 3 Parts with Travel Topics
// ============================================================================

const readingText1 = `Hallo Thomas,

ich fahre nächste Woche nach Hamburg. Ich komme am Dienstag um 14:30 Uhr am Hauptbahnhof an.
Mein Zug hat die Nummer ICE 123. Kannst du mich abholen? Ich bleibe drei Tage in Hamburg.
Am Mittwoch möchte ich das Miniatur Wunderland besuchen. Kommst du mit?

Bis bald!
Viele Grüße
Sarah`;

const readingQuestions1: ExamQuestion[] = [
  {
    id: 'day08-reading-q1',
    type: 'true-false',
    question: 'Sarah fährt nach Hamburg.',
    correctAnswer: 'Richtig',
    explanation: 'Sarah writes "ich fahre nächste Woche nach Hamburg" (I\'m traveling to Hamburg next week).'
  },
  {
    id: 'day08-reading-q2',
    type: 'true-false',
    question: 'Sarah kommt am Mittwoch an.',
    correctAnswer: 'Falsch',
    explanation: 'Sarah arrives on Tuesday (Dienstag), not Wednesday. She wants to visit the museum on Wednesday.'
  },
  {
    id: 'day08-reading-q3',
    type: 'true-false',
    question: 'Sarah möchte das Miniatur Wunderland besuchen.',
    correctAnswer: 'Richtig',
    explanation: 'Sarah clearly states "Am Mittwoch möchte ich das Miniatur Wunderland besuchen."'
  },
  {
    id: 'day08-reading-q4',
    type: 'true-false',
    question: 'Sarah bleibt eine Woche in Hamburg.',
    correctAnswer: 'Falsch',
    explanation: 'Sarah stays three days (drei Tage), not one week.'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Travel Message',
  description: 'Read a message about travel plans',
  instructions: 'Read the text and decide if the statements are True (Richtig) or False (Falsch).',
  text: readingText1,
  questions: readingQuestions1
};

// Reading Practice 2: Train Schedule Comparison
const readingText2 = `**Verbindung A:**
München Hbf → Berlin Hbf
Abfahrt: 08:15 Uhr
Ankunft: 12:45 Uhr
Dauer: 4 Std. 30 Min.
Umsteigen: Nein (Direktverbindung)
Preis: 89,00 €

**Verbindung B:**
München Hbf → Berlin Hbf
Abfahrt: 09:00 Uhr
Ankunft: 14:30 Uhr
Dauer: 5 Std. 30 Min.
Umsteigen: 1x in Frankfurt
Preis: 59,00 €`;

const readingQuestions2: ExamQuestion[] = [
  {
    id: 'day08-reading-q5',
    type: 'multiple-choice',
    question: 'Sie möchten ohne Umsteigen fahren. Welche Verbindung wählen Sie?',
    options: [
      'Verbindung A',
      'Verbindung B',
      'Beide Verbindungen'
    ],
    correctAnswer: 0,
    explanation: 'Verbindung A is a direct connection (Direktverbindung) with no changes. Verbindung B requires one change in Frankfurt.'
  },
  {
    id: 'day08-reading-q6',
    type: 'multiple-choice',
    question: 'Welche Verbindung ist günstiger?',
    options: [
      'Verbindung A',
      'Verbindung B',
      'Beide kosten gleich viel'
    ],
    correctAnswer: 1,
    explanation: 'Verbindung B costs 59 euros, which is cheaper than Verbindung A at 89 euros.'
  }
];

const readingPractice2: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Train Schedule Comparison',
  description: 'Compare train connections and choose the right one',
  instructions: 'Read the train schedules and answer the questions.',
  text: readingText2,
  questions: readingQuestions2
};

// Reading Practice 3: Travel Booking Website Comparison
const readingText3 = `**Website A: "SchnellReisen.de"**
Flug Berlin → London
Abflug: 10:00 Uhr
Ankunft: 11:30 Uhr
Preis: 79,00 € (nur Handgepäck)
Aufgabegepäck: +25,00 €
Sitzplatzreservierung: +10,00 €
Stornierung: nicht möglich

**Website B: "KomfortFliegen.de"**
Flug Berlin → London
Abflug: 11:15 Uhr
Ankunft: 12:45 Uhr
Preis: 120,00 € (inkl. 1 Koffer)
Sitzplatzreservierung: kostenlos
Stornierung: bis 24h vorher kostenlos`;

const readingQuestions3: ExamQuestion[] = [
  {
    id: 'day08-reading-q7',
    type: 'multiple-choice',
    question: 'Sie haben einen großen Koffer. Welche Website ist günstiger?',
    options: [
      'Website A',
      'Website B',
      'Beide kosten gleich viel'
    ],
    correctAnswer: 2,
    explanation: 'Website A: 79€ + 25€ (luggage) = 104€. Website B: 120€ (includes luggage). Actually, Website A is cheaper at 104€, but if you add seat reservation (10€), it becomes 114€ vs 120€.'
  },
  {
    id: 'day08-reading-q8',
    type: 'multiple-choice',
    question: 'Sie möchten den Flug vielleicht stornieren. Welche Website wählen Sie?',
    options: [
      'Website A',
      'Website B',
      'Bei beiden kann man stornieren'
    ],
    correctAnswer: 1,
    explanation: 'Website B allows free cancellation up to 24 hours before. Website A does not allow cancellation (nicht möglich).'
  }
];

const readingPractice3: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Flight Booking Comparison',
  description: 'Compare flight booking websites',
  instructions: 'Read the flight offers and choose the best option.',
  text: readingText3,
  questions: readingQuestions3
};

// Reading Practice 4: Bus Timetable
const readingText4 = `**Buslinie 45 - Fahrplan Samstag**

Haltestelle Hauptbahnhof:
06:00, 07:00, 08:00, 09:00, 10:00, 11:00, 12:00
13:00, 14:00, 15:00, 16:00, 17:00, 18:00

Haltestelle Marktplatz:
06:15, 07:15, 08:15, 09:15, 10:15, 11:15, 12:15
13:15, 14:15, 15:15, 16:15, 17:15, 18:15

Haltestelle Stadtpark:
06:30, 07:30, 08:30, 09:30, 10:30, 11:30, 12:30
13:30, 14:30, 15:30, 16:30, 17:30, 18:30

Fahrtdauer: ca. 30 Minuten
Preis: Einzelfahrt 2,50 € / Tageskarte 6,00 €
Sonntags: Nur jede 2 Stunden (08:00, 10:00, 12:00, etc.)`;

const readingQuestions4: ExamQuestion[] = [
  {
    id: 'day08-reading-q9',
    type: 'multiple-choice',
    question: 'Wann fährt der Bus am Samstag vom Hauptbahnhof ab?',
    options: [
      'Jede halbe Stunde',
      'Jede Stunde',
      'Alle zwei Stunden'
    ],
    correctAnswer: 1,
    explanation: 'The bus departs every hour (jede Stunde) on Saturday: 06:00, 07:00, 08:00, etc.'
  },
  {
    id: 'day08-reading-q10',
    type: 'multiple-choice',
    question: 'Wie lange dauert die Fahrt vom Hauptbahnhof zum Stadtpark?',
    options: [
      '15 Minuten',
      '30 Minuten',
      '45 Minuten'
    ],
    correctAnswer: 1,
    explanation: 'The journey takes about 30 minutes (ca. 30 Minuten) as stated in the timetable.'
  },
  {
    id: 'day08-reading-q11',
    type: 'multiple-choice',
    question: 'Sie fahren dreimal am Tag. Was ist günstiger?',
    options: [
      'Einzelfahrten',
      'Tageskarte',
      'Beide kosten gleich viel'
    ],
    correctAnswer: 1,
    explanation: 'Three single tickets cost 3 × 2,50€ = 7,50€. A day ticket costs 6,00€, which is cheaper.'
  }
];

const readingPractice4: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Bus Timetable',
  description: 'Read a bus schedule and answer questions',
  instructions: 'Read the bus timetable and answer the multiple choice questions.',
  text: readingText4,
  questions: readingQuestions4
};

// Reading Practice 5: Train Station Information Board
const readingText5 = `**HAUPTBAHNHOF MÜNCHEN - WICHTIGE INFORMATIONEN**

Öffnungszeiten Reisezentrum:
Montag-Freitag: 06:00-22:00 Uhr
Samstag-Sonntag: 08:00-20:00 Uhr

Schließfächer:
Kleine Schließfächer (24h): 4,00 €
Große Schließfächer (24h): 6,00 €
Standort: Untergeschoss, neben Gleis 11

Gepäckaufbewahrung:
Preis: 8,00 € pro Tag
Öffnungszeiten: täglich 06:00-23:00 Uhr
Standort: Haupthalle, Ausgang West

WLAN:
Kostenlos für 30 Minuten
Netzwerk: "BahnhofWiFi"

Toiletten:
Preis: 1,00 €
Standort: Haupthalle und bei allen Gleisen

Wichtig:
• Bitte 10 Minuten vor Abfahrt am Gleis sein
• Fahrkartenkontrollen in allen Zügen
• Rauchen nur in gekennzeichneten Bereichen`;

const readingQuestions5: ExamQuestion[] = [
  {
    id: 'day08-reading-q12',
    type: 'multiple-choice',
    question: 'Wann ist das Reisezentrum am Sonntag geöffnet?',
    options: [
      'Von 06:00 bis 22:00 Uhr',
      'Von 08:00 bis 20:00 Uhr',
      'Von 08:00 bis 22:00 Uhr'
    ],
    correctAnswer: 1,
    explanation: 'On Sundays (Sonntag), the travel center is open from 08:00 to 20:00 Uhr.'
  },
  {
    id: 'day08-reading-q13',
    type: 'multiple-choice',
    question: 'Wo sind die Schließfächer?',
    options: [
      'In der Haupthalle',
      'Im Untergeschoss',
      'Am Ausgang West'
    ],
    correctAnswer: 1,
    explanation: 'The lockers are in the basement (Untergeschoss), next to platform 11.'
  },
  {
    id: 'day08-reading-q14',
    type: 'multiple-choice',
    question: 'Wie lange ist das WLAN kostenlos?',
    options: [
      '15 Minuten',
      '30 Minuten',
      '60 Minuten'
    ],
    correctAnswer: 1,
    explanation: 'WiFi is free for 30 minutes (Kostenlos für 30 Minuten).'
  },
  {
    id: 'day08-reading-q15',
    type: 'multiple-choice',
    question: 'Was kostet ein großes Schließfach für einen Tag?',
    options: [
      '4,00 €',
      '6,00 €',
      '8,00 €'
    ],
    correctAnswer: 1,
    explanation: 'A large locker costs 6,00 € for 24 hours (Große Schließfächer: 6,00 €).'
  }
];

const readingPractice5: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Train Station Information',
  description: 'Read information about train station services',
  instructions: 'Read the information board and answer the questions.',
  text: readingText5,
  questions: readingQuestions5
};

// ============================================================================
// VOCABULARY THEME - Travel & Transportation
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Travel & Transportation (Reisen & Verkehr)',
  items: [
    // Transportation modes
    {
      german: 'der Zug',
      english: 'train',
      example: 'Ich fahre mit dem Zug nach Berlin.'
    },
    {
      german: 'der Bus',
      english: 'bus',
      example: 'Der Bus kommt um 10 Uhr.'
    },
    {
      german: 'das Flugzeug',
      english: 'airplane',
      example: 'Das Flugzeug fliegt nach London.'
    },
    {
      german: 'die S-Bahn',
      english: 'suburban train',
      example: 'Die S-Bahn fährt alle 10 Minuten.'
    },
    {
      german: 'die U-Bahn',
      english: 'subway/metro',
      example: 'Ich nehme die U-Bahn zur Arbeit.'
    },
    {
      german: 'die Straßenbahn / die Tram',
      english: 'tram',
      example: 'Die Straßenbahn hält hier.'
    },
    {
      german: 'das Taxi',
      english: 'taxi',
      example: 'Ich rufe ein Taxi.'
    },
    {
      german: 'das Auto',
      english: 'car',
      example: 'Ich fahre mit dem Auto.'
    },
    {
      german: 'das Fahrrad',
      english: 'bicycle',
      example: 'Ich fahre mit dem Fahrrad.'
    },
    // Places
    {
      german: 'der Bahnhof',
      english: 'train station',
      example: 'Der Bahnhof ist groß.'
    },
    {
      german: 'der Hauptbahnhof',
      english: 'main train station',
      example: 'Ich bin am Hauptbahnhof.'
    },
    {
      german: 'der Flughafen',
      english: 'airport',
      example: 'Der Flughafen ist weit weg.'
    },
    {
      german: 'die Haltestelle',
      english: 'stop (bus/tram)',
      example: 'Die Haltestelle ist dort.'
    },
    {
      german: 'das Gleis',
      english: 'platform/track',
      example: 'Der Zug fährt von Gleis 5.'
    },
    {
      german: 'der Ausgang',
      english: 'exit',
      example: 'Wo ist der Ausgang?'
    },
    {
      german: 'der Eingang',
      english: 'entrance',
      example: 'Der Eingang ist rechts.'
    },
    // Tickets & Travel
    {
      german: 'die Fahrkarte',
      english: 'ticket',
      example: 'Ich kaufe eine Fahrkarte.'
    },
    {
      german: 'das Ticket',
      english: 'ticket',
      example: 'Wo kann ich ein Ticket kaufen?'
    },
    {
      german: 'die Einzelfahrt',
      english: 'single ticket',
      example: 'Eine Einzelfahrt kostet 2,50 €.'
    },
    {
      german: 'die Tageskarte',
      english: 'day ticket',
      example: 'Ich kaufe eine Tageskarte.'
    },
    {
      german: 'die Monatskarte',
      english: 'monthly ticket',
      example: 'Die Monatskarte kostet 80 €.'
    },
    {
      german: 'hin und zurück',
      english: 'return/round trip',
      example: 'Einmal Berlin hin und zurück, bitte.'
    },
    {
      german: 'einfach',
      english: 'one way',
      example: 'Nur einfach, bitte.'
    },
    // Time & Schedule
    {
      german: 'die Abfahrt',
      english: 'departure',
      example: 'Die Abfahrt ist um 10 Uhr.'
    },
    {
      german: 'die Ankunft',
      english: 'arrival',
      example: 'Die Ankunft ist um 14 Uhr.'
    },
    {
      german: 'abfahren',
      english: 'to depart',
      example: 'Der Zug fährt um 9 Uhr ab.'
    },
    {
      german: 'ankommen',
      english: 'to arrive',
      example: 'Wann kommt der Zug an?'
    },
    {
      german: 'die Verspätung',
      english: 'delay',
      example: 'Der Zug hat 10 Minuten Verspätung.'
    },
    {
      german: 'pünktlich',
      english: 'on time',
      example: 'Der Zug ist pünktlich.'
    },
    {
      german: 'der Fahrplan',
      english: 'timetable/schedule',
      example: 'Wo ist der Fahrplan?'
    },
    {
      german: 'umsteigen',
      english: 'to change/transfer',
      example: 'Sie müssen in Frankfurt umsteigen.'
    },
    {
      german: 'die Verbindung',
      english: 'connection',
      example: 'Es gibt eine gute Verbindung.'
    },
    // Luggage & Services
    {
      german: 'das Gepäck',
      english: 'luggage',
      example: 'Wo ist mein Gepäck?'
    },
    {
      german: 'der Koffer',
      english: 'suitcase',
      example: 'Ich habe zwei Koffer.'
    },
    {
      german: 'das Handgepäck',
      english: 'hand luggage',
      example: 'Nur Handgepäck ist erlaubt.'
    },
    {
      german: 'das Schließfach',
      english: 'locker',
      example: 'Ich brauche ein Schließfach.'
    },
    {
      german: 'die Gepäckaufbewahrung',
      english: 'luggage storage',
      example: 'Wo ist die Gepäckaufbewahrung?'
    },
    {
      german: 'das Reisezentrum',
      english: 'travel center',
      example: 'Das Reisezentrum ist geöffnet.'
    },
    {
      german: 'die Information',
      english: 'information desk',
      example: 'Fragen Sie bei der Information.'
    },
    // Verbs
    {
      german: 'fahren',
      english: 'to drive/go/travel',
      example: 'Ich fahre nach Berlin.'
    },
    {
      german: 'fliegen',
      english: 'to fly',
      example: 'Ich fliege nach London.'
    },
    {
      german: 'reisen',
      english: 'to travel',
      example: 'Ich reise gern.'
    },
    {
      german: 'buchen',
      english: 'to book',
      example: 'Ich buche einen Flug.'
    },
    {
      german: 'reservieren',
      english: 'to reserve',
      example: 'Ich möchte einen Platz reservieren.'
    },
    {
      german: 'abholen',
      english: 'to pick up',
      example: 'Kannst du mich abholen?'
    },
    {
      german: 'einsteigen',
      english: 'to board/get on',
      example: 'Bitte einsteigen!'
    },
    {
      german: 'aussteigen',
      english: 'to get off',
      example: 'Ich steige hier aus.'
    },
    // Directions
    {
      german: 'geradeaus',
      english: 'straight ahead',
      example: 'Gehen Sie geradeaus.'
    },
    {
      german: 'links',
      english: 'left',
      example: 'Gehen Sie nach links.'
    },
    {
      german: 'rechts',
      english: 'right',
      example: 'Gehen Sie nach rechts.'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day08: ExamDay = {
  day: 8,
  skills: ['Listening', 'Reading'],
  practices: [
    listeningPractice1,
    listeningPractice2,
    listeningPractice3,
    readingPractice1,
    readingPractice2,
    readingPractice3,
    readingPractice4,
    readingPractice5
  ],
  vocabulary,
  focus: 'Travel and transportation'
};

export default day08;