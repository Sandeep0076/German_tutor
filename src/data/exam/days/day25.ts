/**
 * Day 25: Reading & Writing Focus
 * Focus: Public Transportation & City Navigation
 *
 * Skills: Reading (Teil 1, 2, 3) & Writing (Teil 1 & 2)
 * Topics: Bus/tram tickets, city maps, asking for directions, transportation cards,
 *         lost & found at stations, navigation help, public transport rules
 */

import type {
  ExamDay,
  ReadingPractice,
  WritingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// =========================================================================
// READING PRACTICE - Teil 1: Email About City Transport Card
// ==========================================================================

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Teil 1 - Email About Public Transport Card",
  description: "Read an email about getting a city transport card and answer 5 Richtig/Falsch questions.",
  instructions: "Lesen Sie die E-Mail. Sind die Sätze 1-5 Richtig oder Falsch? Markieren Sie.",
  text: `Von: thomas.mueller@email.de
An: info@verkehrsbetriebe-hamburg.de
Betreff: Frage zur Hamburg Card

Sehr geehrte Damen und Herren,

ich bin Student und wohne seit zwei Wochen in Hamburg. Ich brauche eine 
Fahrkarte für Bus und U-Bahn. Mein Freund sagt, die Hamburg Card ist gut 
für Studenten. Ich fahre jeden Tag zur Universität. Die Fahrt dauert 
40 Minuten. Ich brauche die Karte für das ganze Jahr.

Kann ich die Hamburg Card auch am Wochenende benutzen? Meine Freundin 
besucht mich oft am Samstag. Können wir zusammen mit einer Karte fahren?

Wo kann ich die Karte kaufen? Kann ich sie online bestellen? Ich habe 
eine Kreditkarte.

Mit freundlichen Grüßen
Thomas Müller`,
  questions: [
    {
      id: 'day25-reading1-q1',
      type: 'true-false',
      question: 'Thomas wohnt schon lange in Hamburg.',
      correctAnswer: 'Falsch',
      explanation: 'He says "seit zwei Wochen" (for two weeks) - not long.'
    },
    {
      id: 'day25-reading1-q2',
      type: 'true-false',
      question: 'Thomas fährt jeden Tag mit Bus oder U-Bahn zur Uni.',
      correctAnswer: 'Richtig',
      explanation: 'He says "Ich fahre jeden Tag zur Universität."'
    },
    {
      id: 'day25-reading1-q3',
      type: 'true-false',
      question: 'Die Fahrt zur Universität dauert mehr als eine Stunde.',
      correctAnswer: 'Falsch',
      explanation: 'It takes 40 minutes, which is less than an hour.'
    },
    {
      id: 'day25-reading1-q4',
      type: 'true-false',
      question: 'Thomas möchte die Karte nur für einen Monat kaufen.',
      correctAnswer: 'Falsch',
      explanation: 'He needs it "für das ganze Jahr" (for the whole year).'
    },
    {
      id: 'day25-reading1-q5',
      type: 'true-false',
      question: 'Thomas fragt, ob er die Karte online kaufen kann.',
      correctAnswer: 'Richtig',
      explanation: 'He asks "Kann ich sie online bestellen?"'
    }
  ]
};

// =========================================================================
// READING PRACTICE - Teil 2: Finding Information About Transport
// ==========================================================================

const readingPractice2: ReadingPractice = {
  part: 2,
  title: "Teil 2: Transport Websites - Match Questions to Information",
  description: "Match each situation to the correct website (a or b).",
  instructions: "Lesen Sie die Aufgaben 6-10 und die beiden Anzeigen. Welche Anzeige passt zu welcher Situation? Schreiben Sie den Buchstaben.",
  text: `Anzeige a)
www.fundsache-stadt.de
Fundbüro Stadt Köln
Haben Sie etwas verloren?
Bus, Bahn, Taxi - wir helfen!
Öffnungszeiten: Mo-Fr 8-16 Uhr
Telefon: 0221-123456

Anzeige b)
www.bustickets-koeln.de
Bus-Tickets Online
Einzelfahrt, Tageskarte, Monatskarte
Schnell und einfach kaufen
Bezahlung: PayPal, Kreditkarte`,
  questions: [
    {
      id: 'day25_r2_q6',
      type: 'multiple-choice',
      question: "Sie haben Ihre Tasche im Bus vergessen.",
      options: ['a', 'b'],
      correctAnswer: 0,
      explanation: 'The "Fundbüro" (lost and found office) is the correct place for lost items.'
    },
    {
        id: 'day25_r2_q7',
        type: 'multiple-choice',
        question: "Sie brauchen eine Monatskarte für Bus und Bahn.",
        options: ['a', 'b'],
        correctAnswer: 1,
        explanation: 'The ticket website sells monthly passes ("Monatskarte").'
    }
  ]
};

// =========================================================================
// READING PRACTICE - Teil 3: Signs and Notices at Stations
// ==========================================================================

const readingPractice3: ReadingPractice = {
  part: 3,
  title: "Teil 3: Public Transport Signs and Notices",
  description: "Read signs and notices, and decide if the statements are correct.",
  instructions: "Lesen Sie die Texte und die Aufgaben 11-15. Ist die Aussage Richtig oder Falsch?",
  text: "Various signs and notices found in public transport areas.", // General text for the practice part
  questions: [
    {
      id: 'day25_r3_q11',
      type: 'true-false',
      text: `┌─────────────────────────────────────┐
│     WICHTIGE INFORMATION            │
│                                     │
│  Fahrkartenkauf nur vor der Fahrt! │
│                                     │
│  Im Bus können Sie KEINE Fahrkarte │
│  kaufen.                            │
│                                     │
│  Bitte kaufen Sie Ihre Fahrkarte:  │
│  • Am Automaten                     │
│  • In der Smartphone-App            │
│  • Im Vorverkauf                    │
└─────────────────────────────────────┘`,
      question: 'Sie müssen die Fahrkarte vor der Fahrt kaufen.',
      correctAnswer: 'Richtig',
      explanation: 'The notice explicitly states "Fahrkartenkauf nur vor der Fahrt!" (Ticket purchase only before the journey).'
    },
    {
      id: 'day25_r3_q12',
      type: 'true-false',
      text: `┌─────────────────────────────────────┐
│     BAUARBEITEN - LINIE 8           │
│                                     │
│  Die Straßenbahn Linie 8 fährt     │
│  vom 15. bis 20. Februar nur bis   │
│  zur Haltestelle "Stadtmitte".     │
│                                     │
│  Danach: Ersatzbus zum Hauptbahnhof│
│                                     │
│  Wir bitten um Ihr Verständnis.    │
└─────────────────────────────────────┘`,
      question: 'Die Straßenbahn fährt heute bis zum Hauptbahnhof.',
      correctAnswer: 'Falsch',
      explanation: 'The tram only goes to "Stadtmitte", and a replacement bus runs from there to the main station.'
    },
    {
      id: 'day25_r3_q13',
      type: 'true-false',
      text: `┌─────────────────────────────────────┐
│     FAHRPREISE                      │
│     Stadtverkehr Bremen             │
│                                     │
│  Einzelfahrt:                       │
│  Erwachsene:        2,80 €          │
│  Kinder (6-14 J.):  1,50 €          │
│  Kinder unter 6 J.: FREI            │
│                                     │
│  Tageskarte:        6,50 €          │
│  Monatskarte:       65,00 €         │
└─────────────────────────────────────┘`,
      question: 'Kinder unter 6 Jahren fahren kostenlos.',
      correctAnswer: 'Richtig',
      explanation: 'The price list shows that children under 6 travel for free ("FREI").'
    },
    {
      id: 'day25_r3_q14',
      type: 'true-false',
      text: `┌─────────────────────────────────────┐
│     FAHRRAD IN DER U-BAHN           │
│                                     │
│  Fahrradmitnahme erlaubt:           │
│                                     │
│  • Mo-Fr: nach 9 Uhr                │
│  • Mo-Fr: vor 16 Uhr                │
│  • Sa, So, Feiertage: ganztägig    │
│                                     │
│  Fahrradticket: 2,00 €              │
│                                     │
│  Nicht erlaubt: Hauptverkehrszeit  │
│  (7-9 Uhr, 16-18 Uhr)               │
└─────────────────────────────────────┘`,
      question: 'Sie können Ihr Fahrrad den ganzen Tag in der U-Bahn mitnehmen.',
      correctAnswer: 'Falsch',
      explanation: 'Bicycle transport is not allowed during peak hours (7-9 AM and 4-6 PM) on weekdays.'
    },
    {
        id: 'day25_r3_q15',
        type: 'true-false',
        text: `┌─────────────────────────────────────┐
│     IHRE TAGESKARTE                 │
│     Gültig für:                     │
│                                     │
│  ✓ Alle Busse in Freiburg           │
│  ✓ Alle Straßenbahnen               │
│  ✓ Regionalzüge nach Emmendingen   │
│                                     │
│  Gültigkeit: 24 Stunden ab          │
│  Entwertung                         │
│                                     │
│  Preis: 6,50 € (Erwachsene)        │
└─────────────────────────────────────┘`,
        question: 'Das Ticket gilt auch für die Nachbarstadt.',
        correctAnswer: 'Richtig',
        explanation: 'The ticket is valid for regional trains to Emmendingen, which is a neighboring town.'
    }
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 1: Bus Pass Registration Form
// ==========================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: "Teil 1: Monthly Bus Pass Registration Form",
  description: "Complete a monthly transport pass application form.",
  instructions: "Sie helfen Ihrem Freund, eine Monatskarte zu beantragen. Lesen Sie den Kontext und füllen Sie die sechs fehlenden Informationen im Formular aus.",
  prompt: `Ihr Freund, Alex Petrov, ist 22 Jahre alt und Student an der 
Technischen Universität in Stuttgart. Er wohnt in der Gartenstraße 17, 
70173 Stuttgart. Alex braucht eine Monatskarte für den Stadtverkehr. 
Er möchte die Karte ab 1. März haben. 

In dem Formular fehlen sechs Informationen.
Schreiben Sie die sechs fehlenden Informationen in das Formular.

┌─────────────────────────────────────────────────┐
│    STUTTGARTER VERKEHRSBETRIEBE (SSB)           │
│       Antrag auf Monatskarte                    │
│                                                 │
│ Familienname, Vorname:  Petrov, Alex       (0) │
│ Geburtsdatum:           _______________    (1) │
│ Alter:                  22 Jahre                │
│                                                 │
│ Adresse:                                        │
│ Straße, Hausnummer:     _______________    (2) │
│ PLZ, Ort:               70173 __________   (3) │
│                                                 │
│ Status:                 _______________    (4) │
│   ☐ Schüler                                     │
│   ☐ Student (mit Ausweis)                       │
│   ☐ Berufstätig                                 │
│   ☐ Rentner                                     │
│                                                 │
│ Gültigkeit ab:          _______________    (5) │
│                                                 │
│ Zahlungsweise:          Banküberweisung    (6) │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) [Geburtsdatum nicht gegeben]
(2) Gartenstraße 17
(3) Stuttgart
(4) Student
(5) 1. März / 01.03.
(6) Banküberweisung`,
  keyPhrases: [
    "die Monatskarte (monthly ticket)",
    "der Student / die Studentin (student)",
    "die Adresse (address)",
    "gültig ab (valid from)",
    "die Banküberweisung (bank transfer)"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 2: Email About Lost Item on Train
// ==========================================================================

const writingPractice2: WritingPractice = {
  part: 2,
  title: "Teil 2: Email to Lost & Found",
  description: "Write an email to the lost and found office about an item you left on the train.",
  instructions: "Schreiben Sie eine E-Mail an das Fundbüro des Bahnhofs. Beantworten Sie alle 3 Punkte. Schreiben Sie etwa 30 Wörter.",
  prompt: `Sie haben gestern Ihre Tasche im Zug vergessen. In der Tasche 
sind wichtige Dokumente. Schreiben Sie an das Fundbüro des Bahnhofs:

• Sagen Sie: Was haben Sie vergessen?
• Beschreiben Sie die Tasche (Farbe, Größe)
• Fragen Sie: Haben Sie die Tasche?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich habe gestern meine Tasche im Zug vergessen. Die Tasche ist schwarz 
und klein. In der Tasche sind wichtige Dokumente. Haben Sie meine 
Tasche gefunden?

Mit freundlichen Grüßen
[Ihr Name]`,
  keyPhrases: [
    "Sehr geehrte Damen und Herren",
    "ich habe ... vergessen",
    "die Tasche",
    "wichtige Dokumente",
    "Haben Sie ... gefunden?",
    "Mit freundlichen Grüßen"
  ]
};

// =========================================================================
// VOCABULARY THEME
// ==========================================================================

const vocabularyTheme: VocabularyTheme = {
  theme: 'Public Transportation & City Navigation',
  items: [
    { german: 'der Bus', english: 'bus', example: 'Ich fahre mit dem Bus.' },
    { german: 'die U-Bahn', english: 'subway/underground', example: 'Die U-Bahn ist schnell.' },
    { german: 'die Straßenbahn / die Tram', english: 'tram', example: 'Die Straßenbahn fährt alle 10 Minuten.' },
    { german: 'der Zug', english: 'train', example: 'Der Zug kommt um 9 Uhr.' },
    { german: 'die Fahrkarte / das Ticket', english: 'ticket', example: 'Ich kaufe eine Fahrkarte.' },
    { german: 'die Einzelfahrt', english: 'single ticket', example: 'Eine Einzelfahrt, bitte.' },
    { german: 'die Tageskarte', english: 'day ticket', example: 'Die Tageskarte kostet 6 Euro.' },
    { german: 'die Monatskarte', english: 'monthly pass', example: 'Ich habe eine Monatskarte.' },
    { german: 'der Automat', english: 'ticket machine', example: 'Der Automat ist am Bahnsteig.' },
    { german: 'der Bahnhof', english: 'train station', example: 'Der Bahnhof ist groß.' },
    { german: 'der Hauptbahnhof', english: 'main station', example: 'Ich bin am Hauptbahnhof.' },
    { german: 'die Haltestelle', english: 'stop (bus/tram)', example: 'Die Haltestelle ist hier.' },
    { german: 'der Bahnsteig / das Gleis', english: 'platform/track', example: 'Der Zug fährt von Gleis 5.' },
    { german: 'der Ausgang', english: 'exit', example: 'Wo ist der Ausgang?' },
    { german: 'fahren', english: 'to go/drive/travel', example: 'Ich fahre nach Hause.' },
    { german: 'einsteigen', english: 'to get on/board', example: 'Bitte einsteigen!' },
    { german: 'aussteigen', english: 'to get off', example: 'Hier müssen Sie aussteigen.' },
    { german: 'umsteigen', english: 'to change/transfer', example: 'Sie müssen in Marienplatz umsteigen.' },
    { german: 'entwerten', english: 'to validate', example: 'Bitte entwerten Sie das Ticket!' },
    { german: 'verpassen', english: 'to miss', example: 'Ich habe den Bus verpasst.' },
    { german: 'vergessen', english: 'to forget', example: 'Ich habe meine Tasche vergessen.' },
    { german: 'der Weg', english: 'way/path', example: 'Kennen Sie den Weg?' },
    { german: 'die Richtung', english: 'direction', example: 'In welche Richtung?' },
    { german: 'links / rechts / geradeaus', english: 'left / right / straight ahead', example: 'Gehen Sie links, dann rechts.' },
    { german: 'der Fahrplan', english: 'schedule/timetable', example: 'Der Fahrplan ist online.' },
    { german: 'die Abfahrt / die Ankunft', english: 'departure / arrival', example: 'Die Abfahrt ist um 10 Uhr.' },
    { german: 'die Verspätung', english: 'delay', example: 'Der Bus hat 10 Minuten Verspätung.' },
    { german: 'das Fundbüro', english: 'lost & found', example: 'Wo ist das Fundbüro?' }
  ]
};

// =========================================================================
// EXPORT DAY 25
// ==========================================================================

const day25: ExamDay = {
  day: 25,
  skills: ['Reading', 'Writing'],
  focus: 'Public Transportation & City Navigation',
  practices: [
    readingPractice1,
    readingPractice2,
    readingPractice3,
    writingPractice1,
    writingPractice2
  ],
  vocabulary: vocabularyTheme
};

export default day25;
