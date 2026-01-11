/**
 * Day 10: Listening + Reading - Health & Body
 * Focus: Doctor appointments, pharmacy, health information, medical contexts
 * 
 * Skills: Listening (all 3 parts), Reading (all 3 parts)
 * Topics: Doctor's office, pharmacy, health insurance, medical appointments
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Mixed Practice (All 3 Parts with Health Contexts)
// ============================================================================
// NOTE: Listening content is PLACEHOLDER until audio files are available

const listeningPractice1: ListeningPractice = {
  part: 1,
  title: 'Teil 1: Dialogues at Doctor\'s Office and Pharmacy',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: 'Listen to conversations about health problems and medical appointments',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice2: ListeningPractice = {
  part: 2,
  title: 'Teil 2: Announcements at Medical Centers',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: 'Listen to announcements about opening hours and emergency information',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice3: ListeningPractice = {
  part: 3,
  title: 'Teil 3: Phone Messages about Appointments',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: 'Listen to voicemail messages about doctor appointments and cancellations',
  questions: [] // Empty array - questions will be added with audio
};

// ============================================================================
// READING PRACTICE - All 3 Parts with Health Topics
// ============================================================================

const readingText1 = `Lieber Thomas,

ich war gestern beim Arzt. Ich habe Kopfschmerzen und Fieber.
Der Arzt sagt, ich habe eine Erkältung. Ich muss drei Tage zu Hause bleiben und viel schlafen.
Ich nehme Medikamente und trinke viel Tee. Nächste Woche bin ich wieder gesund.

Bis bald!
Viele Grüße
Sarah`;

const readingQuestions1: ExamQuestion[] = [
  {
    id: 'day10-reading-q1',
    type: 'true-false',
    question: 'Sarah war beim Arzt.',
    correctAnswer: 'Richtig',
    explanation: 'Sarah writes "ich war gestern beim Arzt" (I was at the doctor yesterday).'
  },
  {
    id: 'day10-reading-q2',
    type: 'true-false',
    question: 'Sarah hat Bauchschmerzen.',
    correctAnswer: 'Falsch',
    explanation: 'Sarah has headaches and fever (Kopfschmerzen und Fieber), not stomach ache.'
  },
  {
    id: 'day10-reading-q3',
    type: 'true-false',
    question: 'Sarah muss eine Woche zu Hause bleiben.',
    correctAnswer: 'Falsch',
    explanation: 'Sarah must stay home for three days (drei Tage), not one week.'
  },
  {
    id: 'day10-reading-q4',
    type: 'true-false',
    question: 'Sarah nimmt Medikamente.',
    correctAnswer: 'Richtig',
    explanation: 'Sarah clearly states "Ich nehme Medikamente" (I\'m taking medication).'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Message about Illness',
  description: 'Read a message about being sick',
  instructions: 'Read the text and decide if the statements are True (Richtig) or False (Falsch).',
  text: readingText1,
  questions: readingQuestions1
};

// Reading Practice 2: Pharmacy Comparison
const readingText2 = `**Apotheke A: "Stadt-Apotheke"**
Öffnungszeiten:
Montag-Freitag: 08:00-18:30 Uhr
Samstag: 09:00-13:00 Uhr
Sonntag: geschlossen

Notdienst: Nein
Parkplätze: Ja (kostenlos)
Lieferservice: Ja (ab 20 € kostenlos)

**Apotheke B: "24h-Apotheke"**
Öffnungszeiten:
Täglich: 00:00-24:00 Uhr (24 Stunden)

Notdienst: Ja (immer)
Parkplätze: Nein
Lieferservice: Ja (immer 5 € Gebühr)`;

const readingQuestions2: ExamQuestion[] = [
  {
    id: 'day10-reading-q5',
    type: 'multiple-choice',
    question: 'Sie brauchen am Sonntag Medikamente. Welche Apotheke ist geöffnet?',
    options: [
      'Apotheke A',
      'Apotheke B',
      'Beide Apotheken'
    ],
    correctAnswer: 1,
    explanation: 'Apotheke B is open 24 hours every day (Täglich: 00:00-24:00 Uhr). Apotheke A is closed on Sundays.'
  },
  {
    id: 'day10-reading-q6',
    type: 'multiple-choice',
    question: 'Sie möchten mit dem Auto kommen und kostenlos parken. Welche Apotheke wählen Sie?',
    options: [
      'Apotheke A',
      'Apotheke B',
      'Bei beiden kann man parken'
    ],
    correctAnswer: 0,
    explanation: 'Apotheke A has free parking (Parkplätze: Ja, kostenlos). Apotheke B has no parking.'
  }
];

const readingPractice2: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Pharmacy Comparison',
  description: 'Compare two pharmacies and choose the right one',
  instructions: 'Read the pharmacy information and answer the questions.',
  text: readingText2,
  questions: readingQuestions2
};

// Reading Practice 3: Doctor's Office Comparison
const readingText3 = `**Praxis A: Dr. med. Schmidt (Allgemeinmedizin)**
Sprechzeiten:
Mo, Di, Do: 08:00-12:00 und 15:00-18:00 Uhr
Mi, Fr: 08:00-13:00 Uhr

Terminvereinbarung: Nur mit Termin
Wartezeit: ca. 15 Minuten
Hausbesuche: Ja (für ältere Patienten)
Sprachen: Deutsch, Englisch

**Praxis B: Dr. med. Weber (Allgemeinmedizin)**
Sprechzeiten:
Mo-Fr: 09:00-12:00 und 14:00-17:00 Uhr

Terminvereinbarung: Auch ohne Termin möglich
Wartezeit: ca. 45 Minuten ohne Termin
Hausbesuche: Nein
Sprachen: Deutsch, Türkisch, Arabisch`;

const readingQuestions3: ExamQuestion[] = [
  {
    id: 'day10-reading-q7',
    type: 'multiple-choice',
    question: 'Sie möchten ohne Termin zum Arzt gehen. Welche Praxis wählen Sie?',
    options: [
      'Praxis A',
      'Praxis B',
      'Bei beiden geht das'
    ],
    correctAnswer: 1,
    explanation: 'Praxis B accepts patients without appointments (Auch ohne Termin möglich). Praxis A requires an appointment (Nur mit Termin).'
  },
  {
    id: 'day10-reading-q8',
    type: 'multiple-choice',
    question: 'Ihre Großmutter kann nicht zur Praxis kommen. Welcher Arzt macht Hausbesuche?',
    options: [
      'Dr. Schmidt',
      'Dr. Weber',
      'Beide Ärzte'
    ],
    correctAnswer: 0,
    explanation: 'Dr. Schmidt (Praxis A) makes house calls for elderly patients (Hausbesuche: Ja, für ältere Patienten). Dr. Weber does not.'
  }
];

const readingPractice3: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Doctor\'s Office Comparison',
  description: 'Compare two medical practices',
  instructions: 'Read the information about two doctors and choose the right one.',
  text: readingText3,
  questions: readingQuestions3
};

// Reading Practice 4: Health Insurance Information
const readingText4 = `**GESUNDHEITSZENTRUM BERLIN - WICHTIGE INFORMATIONEN**

Öffnungszeiten:
Montag-Freitag: 07:00-20:00 Uhr
Samstag: 08:00-14:00 Uhr
Sonntag und Feiertage: Notdienst 10:00-16:00 Uhr

Anmeldung:
Bitte bringen Sie mit:
• Versichertenkarte (Krankenkassenkarte)
• Personalausweis oder Pass
• Überweisungsschein (falls vorhanden)

Wartezeiten:
Mit Termin: ca. 10-15 Minuten
Ohne Termin: ca. 30-60 Minuten

Fachärzte im Haus:
• Allgemeinmedizin (Erdgeschoss)
• Zahnmedizin (1. Stock)
• Kinderarzt (2. Stock)
• Apotheke (Erdgeschoss, neben Eingang)

Wichtig:
• Termine online oder telefonisch: 030-555-1234
• Notfälle: Bitte sofort melden!
• Parkplätze: Hinter dem Gebäude (2 € pro Stunde)`;

const readingQuestions4: ExamQuestion[] = [
  {
    id: 'day10-reading-q9',
    type: 'multiple-choice',
    question: 'Wann ist das Gesundheitszentrum am Samstag geöffnet?',
    options: [
      'Von 07:00 bis 20:00 Uhr',
      'Von 08:00 bis 14:00 Uhr',
      'Von 10:00 bis 16:00 Uhr'
    ],
    correctAnswer: 1,
    explanation: 'On Saturday (Samstag), the health center is open from 08:00 to 14:00 Uhr.'
  },
  {
    id: 'day10-reading-q10',
    type: 'multiple-choice',
    question: 'Was müssen Sie zur Anmeldung mitbringen?',
    options: [
      'Nur den Personalausweis',
      'Versichertenkarte und Personalausweis',
      'Nur die Versichertenkarte'
    ],
    correctAnswer: 1,
    explanation: 'You must bring both your insurance card (Versichertenkarte) and ID (Personalausweis oder Pass).'
  },
  {
    id: 'day10-reading-q11',
    type: 'multiple-choice',
    question: 'Wo ist die Apotheke?',
    options: [
      'Im Erdgeschoss',
      'Im ersten Stock',
      'Im zweiten Stock'
    ],
    correctAnswer: 0,
    explanation: 'The pharmacy is on the ground floor (Erdgeschoss), next to the entrance.'
  }
];

const readingPractice4: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Health Center Information',
  description: 'Read information about a health center',
  instructions: 'Read the information board and answer the questions.',
  text: readingText4,
  questions: readingQuestions4
};

// Reading Practice 5: Appointment Confirmation SMS/Message
const readingText5 = `**TERMIN-BESTÄTIGUNG**

Sehr geehrte Frau Müller,

Ihr Termin bei Dr. Schmidt:

Datum: Montag, 15. Juni 2026
Uhrzeit: 10:30 Uhr
Dauer: ca. 30 Minuten

Adresse:
Praxis Dr. Schmidt
Hauptstraße 45
10115 Berlin

Wichtige Hinweise:
• Bitte kommen Sie 10 Minuten früher zur Anmeldung
• Bringen Sie Ihre Versichertenkarte mit
• Falls Sie nicht kommen können, sagen Sie bitte 24 Stunden vorher ab
• Absage: Tel. 030-12345678 oder online

Bei Fragen rufen Sie uns an: 030-12345678

Mit freundlichen Grüßen
Praxis Dr. Schmidt`;

const readingQuestions5: ExamQuestion[] = [
  {
    id: 'day10-reading-q12',
    type: 'multiple-choice',
    question: 'Wann ist der Termin?',
    options: [
      'Am 15. Juni um 10:00 Uhr',
      'Am 15. Juni um 10:30 Uhr',
      'Am 15. Juni um 11:00 Uhr'
    ],
    correctAnswer: 1,
    explanation: 'The appointment is on June 15th at 10:30 Uhr.'
  },
  {
    id: 'day10-reading-q13',
    type: 'multiple-choice',
    question: 'Wann sollen Sie zur Praxis kommen?',
    options: [
      'Um 10:30 Uhr',
      'Um 10:20 Uhr',
      'Um 10:00 Uhr'
    ],
    correctAnswer: 1,
    explanation: 'You should arrive 10 minutes early (10 Minuten früher), so at 10:20 Uhr for a 10:30 appointment.'
  },
  {
    id: 'day10-reading-q14',
    type: 'multiple-choice',
    question: 'Was müssen Sie mitbringen?',
    options: [
      'Nur den Personalausweis',
      'Die Versichertenkarte',
      'Geld'
    ],
    correctAnswer: 1,
    explanation: 'You must bring your insurance card (Versichertenkarte).'
  },
  {
    id: 'day10-reading-q15',
    type: 'multiple-choice',
    question: 'Wann müssen Sie absagen, wenn Sie nicht kommen können?',
    options: [
      '12 Stunden vorher',
      '24 Stunden vorher',
      '48 Stunden vorher'
    ],
    correctAnswer: 1,
    explanation: 'You must cancel 24 hours in advance (24 Stunden vorher).'
  }
];

const readingPractice5: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Appointment Confirmation',
  description: 'Read a doctor appointment confirmation',
  instructions: 'Read the appointment confirmation and answer the questions.',
  text: readingText5,
  questions: readingQuestions5
};

// ============================================================================
// VOCABULARY THEME - Health & Body
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Health & Body (Gesundheit & Körper)',
  items: [
    // Body Parts
    {
      german: 'der Kopf',
      english: 'head',
      example: 'Mein Kopf tut weh.'
    },
    {
      german: 'der Hals',
      english: 'neck/throat',
      example: 'Ich habe Halsschmerzen.'
    },
    {
      german: 'der Bauch',
      english: 'stomach/belly',
      example: 'Mein Bauch tut weh.'
    },
    {
      german: 'der Rücken',
      english: 'back',
      example: 'Ich habe Rückenschmerzen.'
    },
    {
      german: 'das Bein',
      english: 'leg',
      example: 'Mein Bein ist gebrochen.'
    },
    {
      german: 'der Arm',
      english: 'arm',
      example: 'Mein Arm tut weh.'
    },
    {
      german: 'die Hand',
      english: 'hand',
      example: 'Meine Hand ist verletzt.'
    },
    {
      german: 'der Fuß',
      english: 'foot',
      example: 'Mein Fuß tut weh.'
    },
    {
      german: 'das Auge',
      english: 'eye',
      example: 'Meine Augen sind rot.'
    },
    {
      german: 'das Ohr',
      english: 'ear',
      example: 'Ich habe Ohrenschmerzen.'
    },
    {
      german: 'die Nase',
      english: 'nose',
      example: 'Meine Nase läuft.'
    },
    {
      german: 'der Mund',
      english: 'mouth',
      example: 'Mein Mund ist trocken.'
    },
    {
      german: 'der Zahn',
      english: 'tooth',
      example: 'Ich habe Zahnschmerzen.'
    },
    // Health Problems
    {
      german: 'die Schmerzen',
      english: 'pain',
      example: 'Ich habe Schmerzen.'
    },
    {
      german: 'die Kopfschmerzen',
      english: 'headache',
      example: 'Ich habe Kopfschmerzen.'
    },
    {
      german: 'die Bauchschmerzen',
      english: 'stomach ache',
      example: 'Ich habe Bauchschmerzen.'
    },
    {
      german: 'die Halsschmerzen',
      english: 'sore throat',
      example: 'Ich habe Halsschmerzen.'
    },
    {
      german: 'die Rückenschmerzen',
      english: 'back pain',
      example: 'Ich habe Rückenschmerzen.'
    },
    {
      german: 'die Zahnschmerzen',
      english: 'toothache',
      example: 'Ich habe Zahnschmerzen.'
    },
    {
      german: 'das Fieber',
      english: 'fever',
      example: 'Ich habe Fieber.'
    },
    {
      german: 'der Husten',
      english: 'cough',
      example: 'Ich habe Husten.'
    },
    {
      german: 'der Schnupfen',
      english: 'cold/runny nose',
      example: 'Ich habe Schnupfen.'
    },
    {
      german: 'die Erkältung',
      english: 'cold (illness)',
      example: 'Ich habe eine Erkältung.'
    },
    {
      german: 'die Grippe',
      english: 'flu',
      example: 'Ich habe die Grippe.'
    },
    {
      german: 'die Allergie',
      english: 'allergy',
      example: 'Ich habe eine Allergie.'
    },
    // Medical Terms
    {
      german: 'der Arzt / die Ärztin',
      english: 'doctor',
      example: 'Ich gehe zum Arzt.'
    },
    {
      german: 'der Zahnarzt',
      english: 'dentist',
      example: 'Ich habe einen Termin beim Zahnarzt.'
    },
    {
      german: 'die Apotheke',
      english: 'pharmacy',
      example: 'Ich gehe zur Apotheke.'
    },
    {
      german: 'das Krankenhaus',
      english: 'hospital',
      example: 'Er ist im Krankenhaus.'
    },
    {
      german: 'die Praxis',
      english: 'medical practice',
      example: 'Die Praxis ist geöffnet.'
    },
    {
      german: 'der Termin',
      english: 'appointment',
      example: 'Ich habe einen Termin.'
    },
    {
      german: 'die Sprechstunde',
      english: 'consultation hours',
      example: 'Die Sprechstunde ist von 9 bis 12 Uhr.'
    },
    {
      german: 'der Notfall',
      english: 'emergency',
      example: 'Das ist ein Notfall!'
    },
    {
      german: 'der Notdienst',
      english: 'emergency service',
      example: 'Welche Apotheke hat Notdienst?'
    },
    // Medicine & Treatment
    {
      german: 'das Medikament',
      english: 'medication',
      example: 'Ich nehme Medikamente.'
    },
    {
      german: 'die Tablette',
      english: 'tablet/pill',
      example: 'Ich nehme drei Tabletten pro Tag.'
    },
    {
      german: 'die Salbe',
      english: 'ointment/cream',
      example: 'Die Salbe hilft gegen Schmerzen.'
    },
    {
      german: 'der Hustensaft',
      english: 'cough syrup',
      example: 'Ich brauche Hustensaft.'
    },
    {
      german: 'das Pflaster',
      english: 'band-aid',
      example: 'Ich brauche ein Pflaster.'
    },
    {
      german: 'das Rezept',
      english: 'prescription',
      example: 'Der Arzt gibt mir ein Rezept.'
    },
    {
      german: 'die Versichertenkarte',
      english: 'insurance card',
      example: 'Bringen Sie Ihre Versichertenkarte mit.'
    },
    {
      german: 'die Krankenkasse',
      english: 'health insurance',
      example: 'Welche Krankenkasse haben Sie?'
    },
    // Verbs
    {
      german: 'wehtun',
      english: 'to hurt',
      example: 'Mein Kopf tut weh.'
    },
    {
      german: 'krank sein',
      english: 'to be sick',
      example: 'Ich bin krank.'
    },
    {
      german: 'gesund sein',
      english: 'to be healthy',
      example: 'Ich bin wieder gesund.'
    },
    {
      german: 'sich fühlen',
      english: 'to feel',
      example: 'Ich fühle mich nicht gut.'
    },
    {
      german: 'nehmen',
      english: 'to take',
      example: 'Ich nehme Medikamente.'
    },
    {
      german: 'untersuchen',
      english: 'to examine',
      example: 'Der Arzt untersucht mich.'
    },
    {
      german: 'helfen',
      english: 'to help',
      example: 'Die Tabletten helfen.'
    },
    {
      german: 'einen Termin machen',
      english: 'to make an appointment',
      example: 'Ich mache einen Termin beim Arzt.'
    },
    {
      german: 'absagen',
      english: 'to cancel',
      example: 'Ich muss den Termin absagen.'
    },
    // Useful Phrases
    {
      german: 'Mir geht es nicht gut.',
      english: 'I don\'t feel well.',
      example: 'Mir geht es nicht gut. Ich bin krank.'
    },
    {
      german: 'Ich bin erkältet.',
      english: 'I have a cold.',
      example: 'Ich bin erkältet und habe Husten.'
    },
    {
      german: 'Gute Besserung!',
      english: 'Get well soon!',
      example: 'Du bist krank? Gute Besserung!'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day10: ExamDay = {
  day: 10,
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
  focus: 'Health and body'
};

export default day10;