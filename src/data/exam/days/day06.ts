/**
 * Day 6: Writing (Teil 2) + Speaking (Teil 3)
 * Focus: Making requests and responding
 * 
 * Skills: Writing, Speaking
 * Topics: Invitations, tourist information, hotel requests, borrowing items, asking for help, making purchases
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// WRITING PRACTICE - Teil 2: Short Messages
// ============================================================================

const writingPractice1: WritingPractice = {
  part: 2,
  title: 'Teil 2: Invitation Response',
  description: 'Write a short message responding to an invitation',
  instructions: 'Your friend Max invites you to his birthday party. Write to Max. Write 1-2 sentences for each point (~30 words total).',
  prompt: `Dein Freund Max lädt dich zu seiner Geburtstagsparty ein.
Schreibe an Max. Schreibe zu jedem Punkt ein bis zwei Sätze:
- Kannst du kommen?
- Warum (nicht)?
- Was bringst du mit?`,
  sampleAnswer: `Lieber Max,

vielen Dank für die Einladung! Ja, ich komme gerne zu deiner Party.
Ich habe am Samstag Zeit. Ich bringe einen Kuchen und ein Geschenk mit.

Bis Samstag!
Viele Grüße
Anna`,
  keyPhrases: [
    'Vielen Dank für die Einladung!',
    'Ja, ich komme gerne.',
    'Leider kann ich nicht kommen.',
    'Ich habe Zeit / keine Zeit.',
    'Ich bringe... mit.',
    'Bis bald!',
    'Viele Grüße'
  ]
};

const writingPractice2: WritingPractice = {
  part: 2,
  title: 'Teil 2: Tourist Information Request',
  description: 'Write a message asking for tourist information',
  instructions: 'You are a tourist in Berlin. Write to the tourist information office. Write 1-2 sentences for each point (~30 words total).',
  prompt: `Du bist Tourist in Berlin. Schreibe an die Tourist-Information:
- Was möchtest du besichtigen?
- Wann hast du Zeit?
- Was möchtest du noch wissen?`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich bin Tourist in Berlin. Ich möchte das Brandenburger Tor und das Museum besichtigen.
Ich habe morgen Zeit. Wie viel kostet der Eintritt? Wann ist das Museum geöffnet?

Vielen Dank!
Mit freundlichen Grüßen
Thomas Schmidt`,
  keyPhrases: [
    'Sehr geehrte Damen und Herren,',
    'Ich möchte... besichtigen.',
    'Ich habe... Zeit.',
    'Wie viel kostet...?',
    'Wann ist... geöffnet?',
    'Vielen Dank!',
    'Mit freundlichen Grüßen'
  ]
};

const writingPractice3: WritingPractice = {
  part: 2,
  title: 'Teil 2: Hotel Information Request',
  description: 'Write a message requesting hotel details',
  instructions: 'You are looking for a hotel. Write to the hotel. Write 1-2 sentences for each point (~30 words total).',
  prompt: `Du suchst ein Hotel. Schreibe an das Hotel:
- Wann brauchst du ein Zimmer?
- Für wie viele Personen?
- Was möchtest du wissen?`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich brauche ein Zimmer vom 15. bis 18. Juni für zwei Personen.
Wie viel kostet das Zimmer pro Nacht? Gibt es WLAN? Wo kann ich parken?

Mit freundlichen Grüßen
Maria Weber`,
  keyPhrases: [
    'Ich brauche ein Zimmer...',
    'vom... bis...',
    'für... Personen',
    'Wie viel kostet...?',
    'Gibt es...?',
    'Wo kann ich...?',
    'Mit freundlichen Grüßen'
  ]
};

// ============================================================================
// SPEAKING PRACTICE - Teil 3: Making Requests
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Borrowing Items',
  description: 'Practice borrowing everyday items',
  instructions: 'Look at the picture card and make a polite request to borrow the item shown. Your partner will respond, and you should continue the brief dialogue.',
  prompts: [
    'You need to borrow a pen (Stift)',
    'You need to borrow a book (Buch)',
    'You need to borrow a phone charger (Ladegerät)',
    'You need to borrow an umbrella (Regenschirm)'
  ],
  sampleResponses: [
    'Entschuldigung, kann ich bitte deinen Stift leihen? Ich habe meinen vergessen. - Ja, natürlich! Hier, bitte. - Vielen Dank! Das ist sehr nett.',
    'Entschuldigung, kann ich dein Buch haben? Ich möchte es lesen. - Ja, gerne! Wann gibst du es zurück? - Nächste Woche. Danke!',
    'Kann ich bitte dein Ladegerät leihen? Mein Handy-Akku ist leer. - Ja, kein Problem! Hier. - Danke schön!',
    'Entschuldigung, hast du einen Regenschirm? Es regnet. - Ja, ich habe einen. Hier, bitte. - Vielen Dank!'
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Asking for Help',
  description: 'Practice asking for help in different situations',
  instructions: 'Look at the picture card showing someone who needs help. Make a polite request for assistance.',
  prompts: [
    'You are carrying heavy bags and need help',
    'You are lost and need directions',
    'You need help with your computer',
    'You need help finding something in a store'
  ],
  sampleResponses: [
    'Entschuldigung, können Sie mir bitte helfen? Diese Tasche ist sehr schwer. - Ja, natürlich! Wohin möchten Sie gehen? - Zum Bahnhof, bitte. Danke!',
    'Entschuldigung, können Sie mir helfen? Ich finde den Bahnhof nicht. - Ja, gerne! Gehen Sie geradeaus und dann links. - Vielen Dank!',
    'Entschuldigung, kannst du mir helfen? Mein Computer funktioniert nicht. - Was ist das Problem? - Ich kann nicht drucken. - Okay, ich helfe dir.',
    'Entschuldigung, wo finde ich Brot? - Das Brot ist dort hinten. - Danke schön!'
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Making Purchases',
  description: 'Practice buying items in shops, bakeries, and markets',
  instructions: 'Look at the picture card showing a shopping situation. Make a polite request to buy the items shown.',
  prompts: [
    'You want to buy bread and rolls at a bakery',
    'You want to buy a coffee and cake at a café',
    'You want to buy a ticket at the train station',
    'You want to buy fruit at the market'
  ],
  sampleResponses: [
    'Guten Tag! Ich hätte gern zwei Brötchen und ein Brot, bitte. - Gerne! Möchten Sie noch etwas? - Nein, danke. Was kostet das? - Das macht 3 Euro 50.',
    'Guten Tag! Ich möchte bitte einen Kaffee und ein Stück Kuchen. - Welchen Kuchen möchten Sie? - Den Apfelkuchen, bitte. - Gerne!',
    'Guten Tag! Ich brauche eine Fahrkarte nach München. - Einfach oder hin und zurück? - Hin und zurück, bitte. - Das kostet 45 Euro.',
    'Guten Tag! Ich hätte gern zwei Kilo Äpfel. - Gerne! Noch etwas? - Ja, auch Bananen, bitte. - Wie viele? - Fünf Stück.'
  ]
};

const speakingPractice4: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Requesting Services',
  description: 'Practice requesting services at hotels, stations, and information desks',
  instructions: 'Look at the picture card showing a service situation. Make a polite request for the service needed.',
  prompts: [
    'You need a room at a hotel',
    'You need information at the train station',
    'You need to make a restaurant reservation',
    'You need to send a package at the post office'
  ],
  sampleResponses: [
    'Guten Tag! Ich brauche ein Zimmer für zwei Nächte. Haben Sie noch ein Zimmer frei? - Ja, wir haben noch Zimmer. Für wie viele Personen? - Für zwei Personen. - Kein Problem!',
    'Entschuldigung, wann fährt der nächste Zug nach Berlin? - Um 14:30 Uhr von Gleis 5. - Vielen Dank! Wo kann ich eine Fahrkarte kaufen? - Am Schalter dort drüben.',
    'Guten Tag! Ich möchte einen Tisch reservieren. - Für wann? - Für morgen Abend um 19 Uhr. - Für wie viele Personen? - Für vier Personen. - Gerne!',
    'Guten Tag! Ich möchte dieses Paket nach Spanien schicken. - Wie schwer ist es? - Zwei Kilo. - Das kostet 12 Euro. - Okay, danke.'
  ]
};

const speakingPractice5: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Asking for Directions',
  description: 'Practice asking for and giving directions',
  instructions: 'Look at the picture card showing someone who is lost. Ask for directions politely.',
  prompts: [
    'You are looking for the train station',
    'You are looking for a pharmacy',
    'You are looking for the post office',
    'You are looking for a specific street'
  ],
  sampleResponses: [
    'Entschuldigung, wo ist der Bahnhof? Ich finde ihn nicht. - Gehen Sie geradeaus und dann links. - Wie weit ist es? - Etwa 5 Minuten zu Fuß. - Vielen Dank!',
    'Entschuldigung, gibt es hier eine Apotheke? - Ja, in der Hauptstraße. - Wie komme ich dorthin? - Gehen Sie hier rechts und dann geradeaus. - Danke schön!',
    'Entschuldigung, wo ist die Post? - Die Post ist in der Bahnhofstraße. - Ist das weit? - Nein, nur 2 Minuten. - Danke!',
    'Entschuldigung, ich suche die Goethestraße. - Die Goethestraße? Gehen Sie hier links. - Danke sehr! - Bitte, gerne!'
  ]
};

// ============================================================================
// VOCABULARY THEME - Common Objects
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Common Objects (Gegenstände)',
  items: [
    // Personal items
    {
      german: 'die Brille',
      english: 'glasses',
      example: 'Ich brauche meine Brille zum Lesen.'
    },
    {
      german: 'das Handy',
      english: 'mobile phone',
      example: 'Mein Handy ist kaputt.'
    },
    {
      german: 'die Tasche',
      english: 'bag',
      example: 'Meine Tasche ist sehr schwer.'
    },
    {
      german: 'der Schlüssel',
      english: 'key',
      example: 'Wo ist mein Schlüssel?'
    },
    {
      german: 'die Geldbörse / das Portemonnaie',
      english: 'wallet',
      example: 'Ich habe meine Geldbörse vergessen.'
    },
    {
      german: 'der Regenschirm',
      english: 'umbrella',
      example: 'Ich brauche einen Regenschirm.'
    },
    {
      german: 'die Uhr',
      english: 'watch/clock',
      example: 'Meine Uhr ist kaputt.'
    },
    {
      german: 'der Ausweis',
      english: 'ID card',
      example: 'Ich habe meinen Ausweis dabei.'
    },
    {
      german: 'der Pass',
      english: 'passport',
      example: 'Wo ist mein Pass?'
    },
    {
      german: 'die Kreditkarte',
      english: 'credit card',
      example: 'Kann ich mit Kreditkarte bezahlen?'
    },
    // Household items
    {
      german: 'der Stift / der Kugelschreiber',
      english: 'pen',
      example: 'Hast du einen Stift?'
    },
    {
      german: 'der Bleistift',
      english: 'pencil',
      example: 'Ich schreibe mit Bleistift.'
    },
    {
      german: 'das Papier',
      english: 'paper',
      example: 'Ich brauche Papier.'
    },
    {
      german: 'das Buch',
      english: 'book',
      example: 'Das Buch ist interessant.'
    },
    {
      german: 'das Heft',
      english: 'notebook',
      example: 'Mein Heft ist voll.'
    },
    {
      german: 'die Schere',
      english: 'scissors',
      example: 'Wo ist die Schere?'
    },
    {
      german: 'der Kleber',
      english: 'glue',
      example: 'Ich brauche Kleber.'
    },
    {
      german: 'das Lineal',
      english: 'ruler',
      example: 'Hast du ein Lineal?'
    },
    {
      german: 'der Radiergummi',
      english: 'eraser',
      example: 'Kann ich deinen Radiergummi haben?'
    },
    {
      german: 'die Lampe',
      english: 'lamp',
      example: 'Die Lampe ist sehr hell.'
    },
    // Office/Study items
    {
      german: 'der Computer / der Laptop',
      english: 'computer/laptop',
      example: 'Mein Computer funktioniert nicht.'
    },
    {
      german: 'die Maus',
      english: 'mouse',
      example: 'Die Maus ist kaputt.'
    },
    {
      german: 'die Tastatur',
      english: 'keyboard',
      example: 'Ich brauche eine neue Tastatur.'
    },
    {
      german: 'der Drucker',
      english: 'printer',
      example: 'Der Drucker druckt nicht.'
    },
    {
      german: 'das Ladegerät',
      english: 'charger',
      example: 'Wo ist mein Ladegerät?'
    },
    {
      german: 'das Kabel',
      english: 'cable',
      example: 'Ich brauche ein USB-Kabel.'
    },
    {
      german: 'der Ordner',
      english: 'folder/binder',
      example: 'Die Dokumente sind im Ordner.'
    },
    {
      german: 'der Kalender',
      english: 'calendar',
      example: 'Ich schreibe den Termin in meinen Kalender.'
    },
    // Clothing items
    {
      german: 'die Jacke',
      english: 'jacket',
      example: 'Meine Jacke ist warm.'
    },
    {
      german: 'der Mantel',
      english: 'coat',
      example: 'Im Winter trage ich einen Mantel.'
    },
    {
      german: 'der Schal',
      english: 'scarf',
      example: 'Der Schal ist sehr schön.'
    },
    {
      german: 'die Mütze',
      english: 'cap/beanie',
      example: 'Ich brauche eine Mütze.'
    },
    {
      german: 'die Handschuhe',
      english: 'gloves',
      example: 'Meine Handschuhe sind weg.'
    },
    {
      german: 'die Schuhe',
      english: 'shoes',
      example: 'Die Schuhe sind zu klein.'
    },
    {
      german: 'die Socken',
      english: 'socks',
      example: 'Ich brauche neue Socken.'
    },
    // Technology items
    {
      german: 'das Tablet',
      english: 'tablet',
      example: 'Ich lese auf meinem Tablet.'
    },
    {
      german: 'die Kopfhörer',
      english: 'headphones',
      example: 'Meine Kopfhörer sind kaputt.'
    },
    {
      german: 'die Kamera',
      english: 'camera',
      example: 'Die Kamera macht gute Fotos.'
    },
    {
      german: 'der USB-Stick',
      english: 'USB stick',
      example: 'Ich speichere die Dateien auf dem USB-Stick.'
    },
    {
      german: 'die Batterie',
      english: 'battery',
      example: 'Die Batterie ist leer.'
    },
    // Action verbs
    {
      german: 'haben',
      english: 'to have',
      example: 'Ich habe ein Handy.'
    },
    {
      german: 'brauchen',
      english: 'to need',
      example: 'Ich brauche einen Stift.'
    },
    {
      german: 'leihen',
      english: 'to borrow/lend',
      example: 'Kann ich dein Buch leihen?'
    },
    {
      german: 'kaufen',
      english: 'to buy',
      example: 'Ich kaufe ein neues Handy.'
    },
    {
      german: 'suchen',
      english: 'to search/look for',
      example: 'Ich suche meinen Schlüssel.'
    },
    {
      german: 'finden',
      english: 'to find',
      example: 'Ich finde meine Brille nicht.'
    },
    {
      german: 'vergessen',
      english: 'to forget',
      example: 'Ich habe mein Handy vergessen.'
    },
    {
      german: 'verlieren',
      english: 'to lose',
      example: 'Ich habe meinen Schlüssel verloren.'
    },
    {
      german: 'benutzen / verwenden',
      english: 'to use',
      example: 'Ich benutze meinen Computer jeden Tag.'
    },
    {
      german: 'mitbringen',
      english: 'to bring along',
      example: 'Bitte bring dein Buch mit.'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day06: ExamDay = {
  day: 6,
  skills: ['Writing', 'Speaking'],
  practices: [
    writingPractice1,
    writingPractice2,
    writingPractice3,
    speakingPractice1,
    speakingPractice2,
    speakingPractice3,
    speakingPractice4,
    speakingPractice5
  ],
  vocabulary,
  focus: 'Making requests and responding'
};

export default day06;