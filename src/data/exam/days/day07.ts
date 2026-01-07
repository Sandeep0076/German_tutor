/**
 * Day 7: Full Practice Test Day
 * Focus: Complete mock exam covering all 4 modules
 * 
 * Skills: Listening, Reading, Writing, Speaking
 * Topics: Comprehensive review of all exam formats and question types
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Full Mock Exam (All 3 Parts)
// ============================================================================
// NOTE: Listening content is PLACEHOLDER until audio files are available

const listeningPractice1: ListeningPractice = {
  part: 1,
  title: 'Teil 1: Short Dialogues (Mock Exam)',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: '[PLACEHOLDER - This section will include 6 short everyday dialogues with multiple choice questions. Topics: shopping, appointments, meeting people, discussing plans, asking for information, daily activities. Each dialogue is played TWICE. Students should read all questions before audio starts, underline key W-words, use first listening for general context, and second listening for specific details. Time: ~6 minutes]',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice2: ListeningPractice = {
  part: 2,
  title: 'Teil 2: Public Announcements (Mock Exam)',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: '[PLACEHOLDER - This section will include 4 public announcements (train station, airport, supermarket, etc.) with True/False questions. Announcements are played ONCE ONLY. Students should read questions very carefully before audio, underline key information needed, focus intensely as they only hear it once, write down numbers and times immediately. Time: ~6 minutes]',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice3: ListeningPractice = {
  part: 3,
  title: 'Teil 3: Telephone Messages (Mock Exam)',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: '[PLACEHOLDER - This section will include 5 telephone messages/voicemails with multiple choice questions (A, B, C). Common scenarios: doctor appointments, friend meeting plans, store pickup notifications, family dinner messages, work schedule changes. Messages are played TWICE. Students should use first listening for WHO + WHY, second listening for specific details like times, places, and actions. Watch for changes like "nicht um 3, sondern um 4". Time: ~8 minutes]',
  questions: [] // Empty array - questions will be added with audio
};

// ============================================================================
// READING PRACTICE - Full Mock Exam (All 3 Parts)
// ============================================================================

const readingText1 = `Hallo Julia,

wie geht es dir? Ich bin nächste Woche in Hamburg. Ich komme am Montag an und bleibe bis Mittwoch. Hast du Zeit? Wir können zusammen ins Museum gehen oder Kaffee trinken. Meine neue Handynummer ist 0175-9876543. Ruf mich bitte an oder schreib mir eine SMS.

Bis bald!
Liebe Grüße
Sophie`;

const readingQuestions1: ExamQuestion[] = [
  {
    id: 'day07-reading-q1',
    type: 'true-false',
    question: 'Sophie ist jetzt in Hamburg.',
    correctAnswer: 'Falsch',
    explanation: 'Sophie will be in Hamburg next week ("nächste Woche"), not now.'
  },
  {
    id: 'day07-reading-q2',
    type: 'true-false',
    question: 'Sophie bleibt drei Tage in Hamburg.',
    correctAnswer: 'Richtig',
    explanation: 'She arrives on Monday and stays until Wednesday (3 days: Monday, Tuesday, Wednesday).'
  },
  {
    id: 'day07-reading-q3',
    type: 'true-false',
    question: 'Sophie möchte mit Julia telefonieren.',
    correctAnswer: 'Richtig',
    explanation: 'Sophie gives her phone number and asks Julia to call her ("Ruf mich bitte an").'
  },
  {
    id: 'day07-reading-q4',
    type: 'true-false',
    question: 'Sophie hat eine neue E-Mail-Adresse.',
    correctAnswer: 'Falsch',
    explanation: 'Sophie mentions a new phone number ("neue Handynummer"), not email address.'
  }
];

const readingText2 = `Lieber Paul,

vielen Dank für deine Einladung zum Grillen am Samstag! Leider kann ich nicht kommen. Ich muss am Samstag arbeiten. Mein Chef braucht mich im Büro. Können wir uns nächstes Wochenende treffen? Ich habe dann frei. Wir können zusammen ins Kino gehen.

Viele Grüße
Martin`;

const readingQuestions2: ExamQuestion[] = [
  {
    id: 'day07-reading-q5',
    type: 'true-false',
    question: 'Martin kommt zum Grillen.',
    correctAnswer: 'Falsch',
    explanation: 'Martin says he unfortunately cannot come ("Leider kann ich nicht kommen").'
  },
  {
    id: 'day07-reading-q6',
    type: 'true-false',
    question: 'Martin muss am Samstag arbeiten.',
    correctAnswer: 'Richtig',
    explanation: 'Martin clearly states "Ich muss am Samstag arbeiten".'
  },
  {
    id: 'day07-reading-q7',
    type: 'true-false',
    question: 'Martin möchte nächstes Wochenende ins Kino gehen.',
    correctAnswer: 'Richtig',
    explanation: 'Martin suggests going to the cinema next weekend ("Wir können zusammen ins Kino gehen").'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Short Messages - Email 1 (Mock Exam)',
  description: 'Read a short personal message',
  instructions: 'Read the text and decide if the statements are True (Richtig) or False (Falsch). Time: ~4 minutes for this text.',
  text: readingText1,
  questions: readingQuestions1
};

const readingPractice2: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Short Messages - Email 2 (Mock Exam)',
  description: 'Read a short invitation response',
  instructions: 'Read the text and decide if the statements are True (Richtig) or False (Falsch). Time: ~4 minutes for this text.',
  text: readingText2,
  questions: readingQuestions2
};

const readingText3 = `**Situation 1:** Sie suchen eine Wohnung in München. Die Wohnung soll nicht mehr als 800 Euro kosten. Sie brauchen zwei Zimmer.

**Anzeige A:**
Schöne 3-Zimmer-Wohnung in München
Miete: 950 Euro + Nebenkosten
Küche und Bad neu
Balkon, Garage
Tel: 089-12345678

**Anzeige B:**
2-Zimmer-Wohnung in München-Zentrum
Miete: 750 Euro warm
Küche, Bad, Keller
Sehr hell und ruhig
Tel: 089-87654321`;

const readingQuestions3: ExamQuestion[] = [
  {
    id: 'day07-reading-q8',
    type: 'multiple-choice',
    question: 'Welche Anzeige passt?',
    options: [
      'Anzeige A',
      'Anzeige B',
      'Beide Anzeigen'
    ],
    correctAnswer: 1,
    explanation: 'Anzeige B matches the requirements: 2 rooms and costs 750 euros (under 800). Anzeige A has 3 rooms and costs 950 euros (over 800).'
  }
];

const readingText4 = `**Situation 2:** Sie möchten Deutsch lernen. Der Kurs soll am Abend sein. Sie können maximal 200 Euro bezahlen.

**Anzeige A:**
Deutschkurs A1
Montag und Mittwoch, 18:00-20:00 Uhr
8 Wochen, 180 Euro
Kleine Gruppen (max. 10 Personen)
Anmeldung: info@sprachschule-berlin.de

**Anzeige B:**
Intensiv-Deutschkurs
Montag bis Freitag, 9:00-12:00 Uhr
4 Wochen, 350 Euro
Alle Materialien inklusive
Tel: 030-555-1234`;

const readingQuestions4: ExamQuestion[] = [
  {
    id: 'day07-reading-q9',
    type: 'multiple-choice',
    question: 'Welche Anzeige passt?',
    options: [
      'Anzeige A',
      'Anzeige B',
      'Beide Anzeigen'
    ],
    correctAnswer: 0,
    explanation: 'Anzeige A matches: evening course (18:00-20:00) and costs 180 euros (under 200). Anzeige B is a morning course (9:00-12:00) and costs 350 euros.'
  }
];

const readingPractice3: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Matching Situations - Apartment (Mock Exam)',
  description: 'Match a situation to the correct advertisement',
  instructions: 'Read the situation and both advertisements. Choose which advertisement (A or B) matches the requirements. Time: ~1.5 minutes.',
  text: readingText3,
  questions: readingQuestions3
};

const readingPractice4: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Matching Situations - Language Course (Mock Exam)',
  description: 'Match a situation to the correct advertisement',
  instructions: 'Read the situation and both advertisements. Choose which advertisement (A or B) matches the requirements. Time: ~1.5 minutes.',
  text: readingText4,
  questions: readingQuestions4
};

const readingText5 = `**Stadtbibliothek München**

Öffnungszeiten:
Montag, Mittwoch, Freitag: 10:00-19:00 Uhr
Dienstag, Donnerstag: 10:00-20:00 Uhr
Samstag: 10:00-14:00 Uhr
Sonntags und an Feiertagen geschlossen

Ausleihe:
• Bücher: 4 Wochen (max. 10 Bücher)
• DVDs: 1 Woche (max. 5 DVDs)
• Zeitschriften: nicht ausleihbar

Gebühren:
Jahresgebühr: 20 Euro (Erwachsene)
Kinder und Studenten: kostenlos
Verspätung: 1 Euro pro Tag und Medium

Wichtige Regeln:
• Bitte leise sein!
• Essen und Trinken verboten
• Handys ausschalten oder lautlos stellen
• WLAN kostenlos verfügbar
• Kopieren: 10 Cent pro Seite`;

const readingQuestions5: ExamQuestion[] = [
  {
    id: 'day07-reading-q10',
    type: 'multiple-choice',
    question: 'Bis wann ist die Bibliothek am Donnerstag geöffnet?',
    options: [
      'Bis 19:00 Uhr',
      'Bis 20:00 Uhr',
      'Bis 14:00 Uhr'
    ],
    correctAnswer: 1,
    explanation: 'On Thursday ("Donnerstag") the library is open until 20:00 ("10:00-20:00 Uhr").'
  },
  {
    id: 'day07-reading-q11',
    type: 'multiple-choice',
    question: 'Wie lange kann man DVDs ausleihen?',
    options: [
      '1 Woche',
      '2 Wochen',
      '4 Wochen'
    ],
    correctAnswer: 0,
    explanation: 'DVDs can be borrowed for 1 week ("DVDs: 1 Woche").'
  },
  {
    id: 'day07-reading-q12',
    type: 'multiple-choice',
    question: 'Was kostet die Jahresgebühr für Studenten?',
    options: [
      '10 Euro',
      '20 Euro',
      'Nichts (kostenlos)'
    ],
    correctAnswer: 2,
    explanation: 'For students it is free ("Kinder und Studenten: kostenlos").'
  },
  {
    id: 'day07-reading-q13',
    type: 'multiple-choice',
    question: 'Was ist in der Bibliothek verboten?',
    options: [
      'WLAN benutzen',
      'Essen und Trinken',
      'Kopieren'
    ],
    correctAnswer: 1,
    explanation: 'Eating and drinking are forbidden ("Essen und Trinken verboten"). WLAN and copying are allowed.'
  }
];

const readingPractice5: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Library Information (Mock Exam)',
  description: 'Read library rules and information',
  instructions: 'Read the information poster and answer the multiple choice questions. Look for specific details about times, prices, and rules. Time: ~9 minutes.',
  text: readingText5,
  questions: readingQuestions5
};

// ============================================================================
// WRITING PRACTICE - Full Mock Exam (Both Parts)
// ============================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: 'Teil 1: Form Completion (Mock Exam)',
  description: 'Fill in a registration form with your personal information',
  instructions: 'Complete the form with your personal details. Write clearly and check spelling. Time: ~5 minutes.',
  prompt: `Anmeldeformular - Deutschkurs

Vorname: _______________
Nachname: _______________
Straße + Hausnummer: _______________
Postleitzahl + Wohnort: _______________
Land: _______________
Geburtsdatum (TT.MM.JJJJ): _______________
Telefonnummer: _______________
E-Mail-Adresse: _______________
Nationalität: _______________`,
  sampleAnswer: `Anmeldeformular - Deutschkurs

Vorname: Maria
Nachname: Schmidt
Straße + Hausnummer: Hauptstraße 45
Postleitzahl + Wohnort: 10115 Berlin
Land: Deutschland
Geburtsdatum (TT.MM.JJJJ): 15.06.1995
Telefonnummer: 030-12345678
E-Mail-Adresse: maria.schmidt@email.com
Nationalität: deutsch`,
  keyPhrases: [
    'Write clearly and legibly',
    'Use correct German date format (TT.MM.JJJJ)',
    'Check spelling of your name and address',
    'Don\'t leave required fields blank'
  ]
};

const writingPractice2: WritingPractice = {
  part: 2,
  title: 'Teil 2: Short Message (Mock Exam)',
  description: 'Write a short message responding to an invitation',
  instructions: 'Your friend Anna invites you to a concert. Write to Anna. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Deine Freundin Anna lädt dich zu einem Konzert ein.
Schreibe an Anna. Schreibe zu jedem Punkt ein bis zwei Sätze:
- Kannst du kommen?
- Warum (nicht)?
- Was möchtest du wissen?`,
  sampleAnswer: `Liebe Anna,

vielen Dank für die Einladung zum Konzert! Ja, ich komme sehr gerne.
Ich liebe Musik und habe am Samstag Zeit. Wann beginnt das Konzert und wo treffen wir uns?

Bis dann!
Viele Grüße
Maria`,
  keyPhrases: [
    'Liebe/r [Name],',
    'Vielen Dank für die Einladung!',
    'Ja, ich komme gerne. / Leider kann ich nicht kommen.',
    'Ich habe Zeit. / Ich muss arbeiten.',
    'Wann...? / Wo...?',
    'Bis bald! / Viele Grüße'
  ]
};

// ============================================================================
// SPEAKING PRACTICE - Full Mock Exam (All 3 Parts)
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: 'Teil 1: Self-Introduction (Mock Exam)',
  description: 'Introduce yourself using prompt cards',
  instructions: 'You will receive cards with topics. Introduce yourself by answering questions about: Name, Age, Country, City, Languages, Hobbies, Work/Study. Time: ~3 minutes.',
  prompts: [
    'Wie heißen Sie? / Wie ist Ihr Name?',
    'Woher kommen Sie?',
    'Wo wohnen Sie?',
    'Wie alt sind Sie?',
    'Welche Sprachen sprechen Sie?',
    'Was sind Sie von Beruf? / Was machen Sie?',
    'Was ist Ihr Hobby?'
  ],
  sampleResponses: [
    'Ich heiße Maria Schmidt. Das buchstabiert man: M-A-R-I-A S-C-H-M-I-D-T.',
    'Ich komme aus Spanien, aus Madrid.',
    'Ich wohne jetzt in Berlin, in der Hauptstraße 45.',
    'Ich bin 28 Jahre alt.',
    'Ich spreche Spanisch, Deutsch und ein bisschen Englisch.',
    'Ich bin Lehrerin. Ich arbeite in einer Schule.',
    'Mein Hobby ist Lesen. Ich lese gern Bücher und höre Musik.'
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Q&A with Partner (Mock Exam)',
  description: 'Ask and answer questions using theme cards',
  instructions: 'You receive a theme card (e.g., "Essen"). Ask your partner 3 questions about THEIR theme. Then answer 3 questions about YOUR theme. Time: ~6 minutes.',
  prompts: [
    'Theme: Essen und Trinken - Ask about: favorite food, where they shop, how often they cook',
    'Theme: Freizeit - Ask about: hobbies, weekend activities, how often they do sports',
    'Theme: Wohnen - Ask about: where they live, how many rooms, what they like about their home',
    'Theme: Arbeit - Ask about: profession, where they work, work hours'
  ],
  sampleResponses: [
    'Was isst du gern? - Ich esse gern Pizza und Pasta. / Wo kaufst du Lebensmittel ein? - Im Supermarkt. / Kochst du oft? - Ja, ich koche jeden Tag.',
    'Was ist dein Hobby? - Mein Hobby ist Fußball. / Was machst du am Wochenende? - Ich treffe Freunde. / Wie oft machst du Sport? - Dreimal pro Woche.',
    'Wo wohnst du? - Ich wohne in Berlin. / Wie viele Zimmer hast du? - Ich habe drei Zimmer. / Was gefällt dir an deiner Wohnung? - Sie ist sehr hell.',
    'Was bist du von Beruf? - Ich bin Lehrer. / Wo arbeitest du? - In einer Schule. / Wann arbeitest du? - Von 8 bis 16 Uhr.'
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Making Requests (Mock Exam)',
  description: 'Make and respond to requests using picture cards',
  instructions: 'Look at the picture card and make a polite request. Your partner responds. Then switch roles. Time: ~6 minutes.',
  prompts: [
    'Picture: You need to borrow a pen',
    'Picture: You want to buy bread at a bakery',
    'Picture: You need help finding the train station',
    'Picture: You want to reserve a table at a restaurant'
  ],
  sampleResponses: [
    'Entschuldigung, kann ich bitte deinen Stift leihen? Ich habe meinen vergessen. - Ja, natürlich! Hier, bitte. - Vielen Dank!',
    'Guten Tag! Ich hätte gern zwei Brötchen und ein Brot, bitte. - Gerne! Möchten Sie noch etwas? - Nein, danke. Was kostet das? - 3 Euro 50.',
    'Entschuldigung, wo ist der Bahnhof? - Gehen Sie geradeaus und dann links. - Wie weit ist es? - Etwa 5 Minuten. - Vielen Dank!',
    'Guten Tag! Ich möchte einen Tisch reservieren. - Für wann? - Für morgen Abend um 19 Uhr. - Für wie viele Personen? - Für vier Personen. - Gerne!'
  ]
};

// ============================================================================
// VOCABULARY THEME - Review & Self-Assessment
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Week 1 Review - Self-Assessment Checklist',
  items: [
    {
      german: 'Selbsteinschätzung',
      english: 'self-assessment',
      example: 'Nach dem Test mache ich eine Selbsteinschätzung.'
    },
    {
      german: 'die Stärke',
      english: 'strength',
      example: 'Meine Stärke ist Lesen.'
    },
    {
      german: 'die Schwäche',
      english: 'weakness',
      example: 'Meine Schwäche ist Hören.'
    },
    {
      german: 'verbessern',
      english: 'to improve',
      example: 'Ich möchte mein Deutsch verbessern.'
    },
    {
      german: 'üben',
      english: 'to practice',
      example: 'Ich muss mehr üben.'
    },
    {
      german: 'der Fortschritt',
      english: 'progress',
      example: 'Ich mache gute Fortschritte.'
    },
    {
      german: 'das Ziel',
      english: 'goal',
      example: 'Mein Ziel ist die A1-Prüfung.'
    },
    {
      german: 'schwierig',
      english: 'difficult',
      example: 'Das Hören ist schwierig.'
    },
    {
      german: 'leicht',
      english: 'easy',
      example: 'Das Lesen ist leicht.'
    },
    {
      german: 'konzentrieren',
      english: 'to concentrate',
      example: 'Ich muss mich konzentrieren.'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day07: ExamDay = {
  day: 7,
  skills: ['Listening', 'Reading', 'Writing', 'Speaking'],
  practices: [
    listeningPractice1,
    listeningPractice2,
    listeningPractice3,
    readingPractice1,
    readingPractice2,
    readingPractice3,
    readingPractice4,
    readingPractice5,
    writingPractice1,
    writingPractice2,
    speakingPractice1,
    speakingPractice2,
    speakingPractice3
  ],
  vocabulary,
  focus: 'Full Practice Test Day - Complete mock exam under timed conditions'
};

export default day07;