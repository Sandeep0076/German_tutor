/**
 * Day 8: Listening + Reading - Family and Relationships
 * Focus: Family members, family activities, and family-friendly venues
 * 
 * Skills: Listening (all 3 parts), Reading (all 3 parts)
 * Topics: Family vocabulary, describing relationships, family events
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Mixed Practice (All 3 Parts with Family Contexts)
// ============================================================================
// NOTE: Listening content is PLACEHOLDER until audio files are available

const listeningPractice1: ListeningPractice = {
  part: 1,
  title: 'Teil 1: Dialogues about Family Plans and Celebrations',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: '[PLACEHOLDER - This section will include 6 short dialogues about family-related topics. Common scenarios: planning birthday parties for family members, discussing family visits and reunions, arranging family dinners or gatherings, talking about children\'s activities, coordinating family celebrations (anniversaries, holidays), making plans with relatives. Each dialogue is played TWICE. Students should listen for family relationships mentioned, when family events are happening, where family members are meeting, what activities are planned, and who is invited or attending. Key phrases include: "Wir feiern...", "Meine Familie kommt...", "Am Wochenende treffen wir...", "Mein Bruder/Meine Schwester...", "Die Kinder möchten...", "Unsere Eltern...". Time: ~6 minutes]',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice2: ListeningPractice = {
  part: 2,
  title: 'Teil 2: Announcements about Family Events',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: '[PLACEHOLDER - This section will include 4 public announcements about family-friendly events and activities. Common scenarios: community center family days and programs, museum family programs and workshops, park family festivals and activities, library children\'s story hours, swimming pool family hours, zoo or aquarium family events. Announcements are played ONCE ONLY. Students should focus on dates and times of family-friendly events, age-appropriate activities (for children, families with babies, etc.), special prices or discounts for families, what to bring or prepare, and registration requirements. Key vocabulary: "Familien mit Kindern", "Kinder ab... Jahren", "Eltern und Kinder", "kostenlos für Kinder unter...", "Anmeldung erforderlich". Time: ~6 minutes]',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice3: ListeningPractice = {
  part: 3,
  title: 'Teil 3: Phone Messages Arranging Family Meetings',
  description: '[PLACEHOLDER - Audio content to be added]',
  instructions: '[PLACEHOLDER - This section will include 5 telephone messages about family gatherings and arrangements. Common scenarios: messages about family gatherings or get-togethers, appointment changes for family events, invitation confirmations from relatives, messages about bringing family members to events, coordinating family travel plans, cancellations or postponements of family meetings. Messages are played TWICE. Students should practice understanding times and locations for family meetings, requests (what to bring, who to bring), changes to original plans, reasons for changes or cancellations, and contact information for follow-up. Listen for possessive pronouns (mein/meine, dein/deine, sein/seine, ihr/ihre) and family activities: feiern (celebrate), besuchen (visit), treffen (meet), einladen (invite). Time: ~8 minutes]',
  questions: [] // Empty array - questions will be added with audio
};

// ============================================================================
// READING PRACTICE - All 3 Parts with Family Topics
// ============================================================================

const readingText1 = `Liebe Anna,

wie geht es dir? Wir feiern am Samstag den Geburtstag von meiner Tochter Emma. Sie wird 5 Jahre alt! Die Party beginnt um 14 Uhr bei uns zu Hause. Wir haben viele Spiele für die Kinder und einen großen Kuchen. Kannst du mit deinen Kindern kommen? Emma freut sich sehr! Bitte bring nichts mit, nur gute Laune!

Bis Samstag!
Liebe Grüße
Maria`;

const readingQuestions1: ExamQuestion[] = [
  {
    id: 'day08-reading-q1',
    type: 'true-false',
    question: 'Emma ist Marias Tochter.',
    correctAnswer: 'Richtig',
    explanation: 'The text says "den Geburtstag von meiner Tochter Emma" (my daughter Emma\'s birthday).'
  },
  {
    id: 'day08-reading-q2',
    type: 'true-false',
    question: 'Emma wird 6 Jahre alt.',
    correctAnswer: 'Falsch',
    explanation: 'Emma is turning 5 years old ("Sie wird 5 Jahre alt"), not 6.'
  },
  {
    id: 'day08-reading-q3',
    type: 'true-false',
    question: 'Die Party ist am Samstag um 14 Uhr.',
    correctAnswer: 'Richtig',
    explanation: 'The party starts on Saturday at 14:00 ("am Samstag... beginnt um 14 Uhr").'
  },
  {
    id: 'day08-reading-q4',
    type: 'true-false',
    question: 'Anna soll etwas mitbringen.',
    correctAnswer: 'Falsch',
    explanation: 'Maria says "Bitte bring nichts mit" (Please don\'t bring anything), only good mood.'
  }
];

const readingText2 = `Hallo Familie!

Unsere Familienfeier ist am Sonntag, den 15. Mai. Wir treffen uns um 12 Uhr bei Oma und Opa im Garten. Alle sind eingeladen: Tanten, Onkel, Cousins und Cousinen! Bitte bringt eure Kinder mit. Wir grillen zusammen und die Kinder können im Garten spielen. Jeder bringt bitte einen Salat oder ein Dessert mit.

Bis Sonntag!
Eure Lisa`;

const readingQuestions2: ExamQuestion[] = [
  {
    id: 'day08-reading-q5',
    type: 'true-false',
    question: 'Die Familienfeier ist bei Lisa zu Hause.',
    correctAnswer: 'Falsch',
    explanation: 'The family celebration is at grandma and grandpa\'s house ("bei Oma und Opa"), not at Lisa\'s.'
  },
  {
    id: 'day08-reading-q6',
    type: 'true-false',
    question: 'Alle Familienmitglieder sind eingeladen.',
    correctAnswer: 'Richtig',
    explanation: 'The text says "Alle sind eingeladen: Tanten, Onkel, Cousins und Cousinen!"'
  },
  {
    id: 'day08-reading-q7',
    type: 'true-false',
    question: 'Jeder soll einen Salat oder ein Dessert mitbringen.',
    correctAnswer: 'Richtig',
    explanation: 'The text clearly states "Jeder bringt bitte einen Salat oder ein Dessert mit."'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Birthday Party Invitation',
  description: 'Read an email about a child\'s birthday party',
  instructions: 'Read the text and decide if the statements are True (Richtig) or False (Falsch). Time: ~4 minutes.',
  text: readingText1,
  questions: readingQuestions1
};

const readingPractice2: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Family Reunion Announcement',
  description: 'Read a message about a family gathering',
  instructions: 'Read the text and decide if the statements are True (Richtig) or False (Falsch). Time: ~4 minutes.',
  text: readingText2,
  questions: readingQuestions2
};

const readingText3 = `**Situation 1:** Sie haben zwei Kinder (3 und 6 Jahre alt). Sie suchen ein Restaurant für Sonntag. Das Restaurant soll einen Spielplatz haben. Es soll nicht zu teuer sein.

**Anzeige A:**
Restaurant "Bella Italia"
Italienische Küche
Große Terrasse mit Kinderspielplatz
Kindermenü: 6,50 Euro
Sonntags geöffnet: 11:00-22:00 Uhr
Reservierung: 030-555-1234

**Anzeige B:**
Restaurant "Gourmet Palace"
Französische Küche
Elegantes Ambiente
Hauptgerichte ab 25 Euro
Kinder unter 12 Jahren nicht erlaubt
Reservierung erforderlich`;

const readingQuestions3: ExamQuestion[] = [
  {
    id: 'day08-reading-q8',
    type: 'multiple-choice',
    question: 'Welche Anzeige passt?',
    options: [
      'Anzeige A',
      'Anzeige B',
      'Beide Anzeigen'
    ],
    correctAnswer: 0,
    explanation: 'Anzeige A matches: it has a playground ("Kinderspielplatz"), is open on Sundays, and has affordable children\'s menu (6,50 Euro). Anzeige B doesn\'t allow children under 12 and is expensive.'
  }
];

const readingText4 = `**Situation 2:** Sie möchten mit Ihrer Familie (2 Erwachsene, 1 Kind 4 Jahre) schwimmen gehen. Sie können maximal 15 Euro bezahlen. Das Schwimmbad soll am Wochenende geöffnet sein.

**Anzeige A:**
Hallenbad "Aqua Fun"
Öffnungszeiten: Mo-Fr 6:00-22:00 Uhr
Samstag und Sonntag geschlossen
Eintritt: Erwachsene 5 Euro, Kinder 3 Euro
Sauna inklusive

**Anzeige B:**
Freibad "Sonnenbad"
Öffnungszeiten: täglich 9:00-20:00 Uhr
Familienpreis: 2 Erwachsene + 2 Kinder = 12 Euro
Große Liegewiese, Kinderbecken
Kiosk vorhanden`;

const readingQuestions4: ExamQuestion[] = [
  {
    id: 'day08-reading-q9',
    type: 'multiple-choice',
    question: 'Welche Anzeige passt?',
    options: [
      'Anzeige A',
      'Anzeige B',
      'Beide Anzeigen'
    ],
    correctAnswer: 1,
    explanation: 'Anzeige B matches: open on weekends ("täglich"), family price is 12 euros (under 15), and has children\'s pool. Anzeige A is closed on weekends.'
  }
];

const readingPractice3: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Finding a Family Restaurant',
  description: 'Match family needs to restaurant advertisements',
  instructions: 'Read the situation and both advertisements. Choose which advertisement (A or B) matches the requirements. Time: ~1.5 minutes.',
  text: readingText3,
  questions: readingQuestions3
};

const readingPractice4: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Finding a Swimming Pool',
  description: 'Match family needs to swimming pool advertisements',
  instructions: 'Read the situation and both advertisements. Choose which advertisement (A or B) matches the requirements. Time: ~1.5 minutes.',
  text: readingText4,
  questions: readingQuestions4
};

const readingText5 = `**Familienzentrum "Kinderland"**

Öffnungszeiten:
Montag bis Freitag: 9:00-18:00 Uhr
Samstag: 10:00-16:00 Uhr
Sonntags geschlossen

Angebote für Familien:
• Spielgruppe für Kinder 1-3 Jahre: Dienstag und Donnerstag 10:00-11:30 Uhr
• Basteln für Kinder ab 4 Jahren: Mittwoch 15:00-16:30 Uhr
• Eltern-Kind-Turnen: Montag 16:00-17:00 Uhr
• Familienfrühstück: Jeden ersten Samstag im Monat, 10:00-12:00 Uhr

Preise:
• Einzelne Kurse: 5 Euro pro Kind
• Monatskarte: 15 Euro (alle Kurse inklusive)
• Familienfrühstück: 3 Euro pro Person
• Kinder unter 1 Jahr: kostenlos

Wichtige Informationen:
• Anmeldung erforderlich (Tel: 030-123-4567)
• Bitte Hausschuhe mitbringen
• Getränke und Snacks vorhanden
• Parkplätze vor dem Haus
• Wickelraum und Stillzimmer verfügbar`;

const readingQuestions5: ExamQuestion[] = [
  {
    id: 'day08-reading-q10',
    type: 'multiple-choice',
    question: 'Wann ist das Familienzentrum am Samstag geöffnet?',
    options: [
      'Von 9:00 bis 18:00 Uhr',
      'Von 10:00 bis 16:00 Uhr',
      'Samstags geschlossen'
    ],
    correctAnswer: 1,
    explanation: 'On Saturday the family center is open from 10:00 to 16:00 ("Samstag: 10:00-16:00 Uhr").'
  },
  {
    id: 'day08-reading-q11',
    type: 'multiple-choice',
    question: 'Für welches Alter ist die Spielgruppe?',
    options: [
      'Für Kinder 1-3 Jahre',
      'Für Kinder ab 4 Jahren',
      'Für alle Kinder'
    ],
    correctAnswer: 0,
    explanation: 'The play group is for children 1-3 years old ("Spielgruppe für Kinder 1-3 Jahre").'
  },
  {
    id: 'day08-reading-q12',
    type: 'multiple-choice',
    question: 'Wie viel kostet die Monatskarte?',
    options: [
      '5 Euro',
      '15 Euro',
      '3 Euro'
    ],
    correctAnswer: 1,
    explanation: 'The monthly card costs 15 euros and includes all courses ("Monatskarte: 15 Euro (alle Kurse inklusive)").'
  },
  {
    id: 'day08-reading-q13',
    type: 'multiple-choice',
    question: 'Was muss man mitbringen?',
    options: [
      'Getränke',
      'Snacks',
      'Hausschuhe'
    ],
    correctAnswer: 2,
    explanation: 'You must bring house shoes ("Bitte Hausschuhe mitbringen"). Drinks and snacks are available there.'
  },
  {
    id: 'day08-reading-q14',
    type: 'multiple-choice',
    question: 'Wann ist das Familienfrühstück?',
    options: [
      'Jeden Montag',
      'Jeden Samstag',
      'Jeden ersten Samstag im Monat'
    ],
    correctAnswer: 2,
    explanation: 'The family breakfast is every first Saturday of the month ("Jeden ersten Samstag im Monat").'
  }
];

const readingPractice5: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Family Center Information',
  description: 'Read information about a family center',
  instructions: 'Read the information poster and answer the multiple choice questions. Look for specific details about times, prices, age groups, and rules. Time: ~9 minutes.',
  text: readingText5,
  questions: readingQuestions5
};

// ============================================================================
// VOCABULARY THEME - Family Members
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Family Members (Familienmitglieder)',
  items: [
    // Immediate Family
    {
      german: 'die Mutter',
      english: 'mother',
      example: 'Meine Mutter heißt Anna.'
    },
    {
      german: 'der Vater',
      english: 'father',
      example: 'Mein Vater ist 50 Jahre alt.'
    },
    {
      german: 'die Eltern',
      english: 'parents',
      example: 'Meine Eltern wohnen in Berlin.'
    },
    {
      german: 'die Schwester',
      english: 'sister',
      example: 'Ich habe eine Schwester.'
    },
    {
      german: 'der Bruder',
      english: 'brother',
      example: 'Mein Bruder studiert Medizin.'
    },
    {
      german: 'die Geschwister',
      english: 'siblings',
      example: 'Ich habe zwei Geschwister.'
    },
    {
      german: 'der Sohn',
      english: 'son',
      example: 'Das ist mein Sohn Tom.'
    },
    {
      german: 'die Tochter',
      english: 'daughter',
      example: 'Meine Tochter ist 5 Jahre alt.'
    },
    {
      german: 'die Kinder',
      english: 'children',
      example: 'Wir haben drei Kinder.'
    },
    {
      german: 'das Kind',
      english: 'child',
      example: 'Das Kind spielt im Garten.'
    },
    // Extended Family
    {
      german: 'die Großmutter / die Oma',
      english: 'grandmother/grandma',
      example: 'Meine Oma ist sehr nett.'
    },
    {
      german: 'der Großvater / der Opa',
      english: 'grandfather/grandpa',
      example: 'Mein Opa ist 75 Jahre alt.'
    },
    {
      german: 'die Großeltern',
      english: 'grandparents',
      example: 'Meine Großeltern leben in München.'
    },
    {
      german: 'die Tante',
      english: 'aunt',
      example: 'Tante Maria kommt zu Besuch.'
    },
    {
      german: 'der Onkel',
      english: 'uncle',
      example: 'Mein Onkel arbeitet in Hamburg.'
    },
    {
      german: 'der Cousin',
      english: 'male cousin',
      example: 'Mein Cousin heißt Max.'
    },
    {
      german: 'die Cousine',
      english: 'female cousin',
      example: 'Meine Cousine studiert in Wien.'
    },
    {
      german: 'der Neffe',
      english: 'nephew',
      example: 'Mein Neffe ist 8 Jahre alt.'
    },
    {
      german: 'die Nichte',
      english: 'niece',
      example: 'Meine Nichte geht in die Schule.'
    },
    {
      german: 'der Enkel',
      english: 'grandson',
      example: 'Das ist mein Enkel.'
    },
    {
      german: 'die Enkelin',
      english: 'granddaughter',
      example: 'Meine Enkelin ist sehr klug.'
    },
    // In-Laws
    {
      german: 'die Schwiegermutter',
      english: 'mother-in-law',
      example: 'Meine Schwiegermutter ist sehr freundlich.'
    },
    {
      german: 'der Schwiegervater',
      english: 'father-in-law',
      example: 'Mein Schwiegervater kocht gern.'
    },
    {
      german: 'die Schwiegereltern',
      english: 'parents-in-law',
      example: 'Meine Schwiegereltern wohnen in der Nähe.'
    },
    {
      german: 'der Schwager',
      english: 'brother-in-law',
      example: 'Mein Schwager ist Arzt.'
    },
    {
      german: 'die Schwägerin',
      english: 'sister-in-law',
      example: 'Meine Schwägerin arbeitet in Berlin.'
    },
    // Marital Status
    {
      german: 'der Mann / der Ehemann',
      english: 'husband',
      example: 'Mein Mann heißt Peter.'
    },
    {
      german: 'die Frau / die Ehefrau',
      english: 'wife',
      example: 'Meine Frau ist Lehrerin.'
    },
    {
      german: 'der Partner / die Partnerin',
      english: 'partner',
      example: 'Mein Partner kommt aus Italien.'
    },
    {
      german: 'verheiratet',
      english: 'married',
      example: 'Ich bin verheiratet.'
    },
    {
      german: 'ledig',
      english: 'single',
      example: 'Meine Schwester ist ledig.'
    },
    {
      german: 'geschieden',
      english: 'divorced',
      example: 'Er ist geschieden.'
    },
    // Family Verbs
    {
      german: 'besuchen',
      english: 'to visit',
      example: 'Ich besuche meine Großeltern.'
    },
    {
      german: 'einladen',
      english: 'to invite',
      example: 'Wir laden die Familie ein.'
    },
    {
      german: 'feiern',
      english: 'to celebrate',
      example: 'Wir feiern Geburtstag.'
    },
    {
      german: 'treffen',
      english: 'to meet',
      example: 'Wir treffen uns am Sonntag.'
    },
    {
      german: 'kennenlernen',
      english: 'to get to know',
      example: 'Ich möchte deine Familie kennenlernen.'
    },
    // Possessive Pronouns
    {
      german: 'mein/meine',
      english: 'my',
      example: 'mein Vater, meine Mutter, meine Eltern'
    },
    {
      german: 'dein/deine',
      english: 'your (informal)',
      example: 'dein Bruder, deine Schwester'
    },
    {
      german: 'sein/seine',
      english: 'his',
      example: 'sein Sohn, seine Tochter'
    },
    {
      german: 'ihr/ihre',
      english: 'her',
      example: 'ihr Mann, ihre Kinder'
    },
    {
      german: 'unser/unsere',
      english: 'our',
      example: 'unser Haus, unsere Familie'
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
  focus: 'Family and relationships - Mixed listening practice (all 3 parts) and reading about family topics, activities, and venues'
};

export default day08;