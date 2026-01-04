/**
 * Day 2: Writing (Teil 1 & 2) + Speaking (Teil 1)
 * Focus: Basic self-expression and personal information
 * 
 * Skills: Writing, Speaking
 * Topics: Registration forms, self-introduction, numbers, alphabet, countries & cities
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// WRITING PRACTICE - Teil 1: Complete Registration Forms
// ============================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: 'Teil 1: Registration Form',
  description: 'Complete a registration form with personal information',
  instructions: 'Fill in the registration form with your personal details. Write clearly and check your spelling.',
  prompt: `Please complete the following registration form:

**Anmeldeformular / Registration Form**

Vorname: _______________
Nachname: _______________
Geburtsdatum: _______________
Geburtsort: _______________
Nationalität: _______________
Wohnort: _______________
Straße und Hausnummer: _______________
Postleitzahl: _______________
Telefonnummer: _______________
E-Mail-Adresse: _______________
Beruf: _______________`,
  sampleAnswer: `Vorname: Maria
Nachname: Schmidt
Geburtsdatum: 15.06.1995
Geburtsort: Hamburg
Nationalität: deutsch
Wohnort: Berlin
Straße und Hausnummer: Hauptstraße 45
Postleitzahl: 10115
Telefonnummer: 030-12345678
E-Mail-Adresse: maria.schmidt@email.de
Beruf: Lehrerin`,
  keyPhrases: [
    'Vorname (first name)',
    'Nachname (last name)',
    'Geburtsdatum (date of birth)',
    'Geburtsort (place of birth)',
    'Nationalität (nationality)',
    'Wohnort (place of residence)',
    'Straße (street)',
    'Hausnummer (house number)',
    'Postleitzahl (postal code)',
    'Telefonnummer (phone number)',
    'E-Mail-Adresse (email address)',
    'Beruf (occupation)'
  ]
};

// ============================================================================
// WRITING PRACTICE - Teil 2: Short Informal Letter/Email
// ============================================================================

const writingPractice2: WritingPractice = {
  part: 2,
  title: 'Teil 2: Short Email',
  description: 'Write a short informal email (~30 words)',
  instructions: 'Write a short email to your friend. Include all 3 points mentioned in the task. Use the structure: Greeting → 3 main points → Closing → Your name.',
  prompt: `Your friend Anna has invited you to her birthday party. Write an email to Anna.

Write about:
• Thank her for the invitation
• Say you can come
• Ask what time the party starts

Write about 30 words. Write about all three points.`,
  sampleAnswer: `Liebe Anna,

vielen Dank für die Einladung! Ich komme gerne zu deiner Party. Um wie viel Uhr beginnt die Party?

Viele Grüße
Maria`,
  keyPhrases: [
    'Liebe/r... (Dear...)',
    'vielen Dank für... (thank you very much for...)',
    'Ich komme gerne (I\'d love to come)',
    'Ich kann leider nicht kommen (Unfortunately I can\'t come)',
    'Um wie viel Uhr...? (At what time...?)',
    'Wann...? (When...?)',
    'Viele Grüße (Best regards)',
    'Bis bald (See you soon)',
    'Dein/e... (Yours...)'
  ]
};

// ============================================================================
// SPEAKING PRACTICE - Teil 1: Self-Introduction
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: 'Teil 1: Self-Introduction',
  description: 'Introduce yourself and provide personal information',
  instructions: 'Answer the questions about yourself. Speak clearly and spell your name when asked. Practice giving your phone number and postal code digit by digit.',
  prompts: [
    'Wie heißen Sie? / Wie ist Ihr Name?',
    'Wie buchstabiert man das?',
    'Woher kommen Sie?',
    'Wo wohnen Sie jetzt?',
    'Wie alt sind Sie?',
    'Was ist Ihre Telefonnummer?',
    'Wie ist Ihre Postleitzahl?',
    'Was sind Sie von Beruf? / Was machen Sie beruflich?'
  ],
  sampleResponses: [
    'Mein Name ist Maria Schmidt. / Ich heiße Maria Schmidt.',
    'Das buchstabiert man: M-A-R-I-A  S-C-H-M-I-D-T',
    'Ich komme aus Deutschland. / Ich komme aus Hamburg.',
    'Ich wohne jetzt in Berlin. / Ich wohne in der Hauptstraße.',
    'Ich bin 28 Jahre alt.',
    'Meine Telefonnummer ist: null-drei-null, eins-zwei-drei, vier-fünf-sechs-sieben-acht.',
    'Meine Postleitzahl ist: eins-null-eins-eins-fünf.',
    'Ich bin Lehrerin. / Ich arbeite als Lehrerin. / Ich bin Studentin.'
  ]
};

// ============================================================================
// VOCABULARY THEME - Numbers, Alphabet, Countries & Cities
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Numbers (0-100), Alphabet, Countries & Cities',
  items: [
    // Numbers 0-20
    {
      german: 'null',
      english: '0',
      example: 'Die Telefonnummer beginnt mit null.'
    },
    {
      german: 'eins',
      english: '1',
      example: 'Ich habe eins Kind.'
    },
    {
      german: 'zwei',
      english: '2',
      example: 'Ich habe zwei Brüder.'
    },
    {
      german: 'drei',
      english: '3',
      example: 'Die Hausnummer ist drei.'
    },
    {
      german: 'vier',
      english: '4',
      example: 'Ich wohne im vierten Stock.'
    },
    {
      german: 'fünf',
      english: '5',
      example: 'Die Postleitzahl hat fünf Zahlen.'
    },
    {
      german: 'sechs',
      english: '6',
      example: 'Ich bin um sechs Uhr zu Hause.'
    },
    {
      german: 'sieben',
      english: '7',
      example: 'Ich arbeite sieben Tage pro Woche.'
    },
    {
      german: 'acht',
      english: '8',
      example: 'Die Telefonnummer endet mit acht.'
    },
    {
      german: 'neun',
      english: '9',
      example: 'Ich bin um neun Uhr im Büro.'
    },
    {
      german: 'zehn',
      english: '10',
      example: 'Ich wohne seit zehn Jahren hier.'
    },
    {
      german: 'elf',
      english: '11',
      example: 'Es ist elf Uhr.'
    },
    {
      german: 'zwölf',
      english: '12',
      example: 'Ich esse um zwölf Uhr Mittag.'
    },
    {
      german: 'zwanzig',
      english: '20',
      example: 'Ich bin zwanzig Jahre alt.'
    },
    {
      german: 'dreißig',
      english: '30',
      example: 'Der Bus kommt in dreißig Minuten.'
    },
    {
      german: 'vierzig',
      english: '40',
      example: 'Mein Vater ist vierzig Jahre alt.'
    },
    {
      german: 'fünfzig',
      english: '50',
      example: 'Das kostet fünfzig Euro.'
    },
    {
      german: 'hundert',
      english: '100',
      example: 'Ich habe hundert Euro.'
    },
    // Alphabet-related
    {
      german: 'buchstabieren',
      english: 'to spell',
      example: 'Können Sie das bitte buchstabieren?'
    },
    {
      german: 'der Buchstabe',
      english: 'letter (of alphabet)',
      example: 'Wie viele Buchstaben hat dein Name?'
    },
    // Countries
    {
      german: 'Deutschland',
      english: 'Germany',
      example: 'Ich komme aus Deutschland.'
    },
    {
      german: 'Österreich',
      english: 'Austria',
      example: 'Wien ist die Hauptstadt von Österreich.'
    },
    {
      german: 'die Schweiz',
      english: 'Switzerland',
      example: 'Ich wohne in der Schweiz.'
    },
    {
      german: 'Frankreich',
      english: 'France',
      example: 'Paris ist in Frankreich.'
    },
    {
      german: 'Italien',
      english: 'Italy',
      example: 'Ich komme aus Italien.'
    },
    {
      german: 'Spanien',
      english: 'Spain',
      example: 'Madrid ist die Hauptstadt von Spanien.'
    },
    {
      german: 'Polen',
      english: 'Poland',
      example: 'Meine Freundin kommt aus Polen.'
    },
    {
      german: 'die Türkei',
      english: 'Turkey',
      example: 'Istanbul ist in der Türkei.'
    },
    {
      german: 'Russland',
      english: 'Russia',
      example: 'Ich lerne Russisch, weil ich aus Russland komme.'
    },
    {
      german: 'China',
      english: 'China',
      example: 'Peking ist die Hauptstadt von China.'
    },
    {
      german: 'die USA',
      english: 'USA',
      example: 'New York ist in den USA.'
    },
    // Cities
    {
      german: 'Berlin',
      english: 'Berlin',
      example: 'Ich wohne in Berlin.'
    },
    {
      german: 'München',
      english: 'Munich',
      example: 'München ist in Bayern.'
    },
    {
      german: 'Hamburg',
      english: 'Hamburg',
      example: 'Hamburg ist eine große Stadt.'
    },
    {
      german: 'Wien',
      english: 'Vienna',
      example: 'Wien ist sehr schön.'
    },
    {
      german: 'Zürich',
      english: 'Zurich',
      example: 'Zürich ist in der Schweiz.'
    },
    // Related vocabulary
    {
      german: 'die Hauptstadt',
      english: 'capital city',
      example: 'Berlin ist die Hauptstadt von Deutschland.'
    },
    {
      german: 'kommen aus',
      english: 'to come from',
      example: 'Ich komme aus Spanien.'
    },
    {
      german: 'wohnen in',
      english: 'to live in',
      example: 'Ich wohne in Berlin.'
    },
    {
      german: 'die Zahl',
      english: 'number',
      example: 'Welche Zahl ist das?'
    },
    {
      german: 'die Nummer',
      english: 'number (identifier)',
      example: 'Meine Telefonnummer ist...'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day02: ExamDay = {
  day: 2,
  skills: ['Writing', 'Speaking'],
  practices: [
    writingPractice1,
    writingPractice2,
    speakingPractice1
  ],
  vocabulary,
  focus: 'Basic self-expression and personal information'
};

export default day02;