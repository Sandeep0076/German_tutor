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
  VocabularyItem,
  ExamQuestion
} from '../examTypes';

// ==========================================================================
// READING PRACTICE - Teil 1: Email About City Transport Card
// ==========================================================================

const readingPart1Questions: ExamQuestion[] = [
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
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Teil 1 - Email About Public Transport Card",
  description: "Read an email about getting a city transport card. " +
               "Answer 5 Richtig/Falsch questions.",
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
  questions: readingPart1Questions
};

// ==========================================================================
// READING PRACTICE - Teil 2: Finding Information About Transport
// ==========================================================================

const readingPractice2: ReadingPractice = {
  part: 2,
  title: "Teil 2: Transport Websites - Match Questions to Information",
  description: "Match each question to the correct website (a or b)",
  instructions: "For each question, decide which website (a or b) has the " +
                "information you need.",
  questions: [
    {
      id: 'day25_r2_q0',
      text: 'Sie haben Ihre Tasche im Bus vergessen.',
      options: [
        {
          label: 'a',
          content: `www.fundsache-stadt.de
Fundbüro Stadt Köln
Haben Sie etwas verloren?
Bus, Bahn, Taxi - wir helfen!
Öffnungszeiten: Mo-Fr 8-16 Uhr
Telefon: 0221-123456`
        },
        {
          label: 'b',
          content: `www.bustickets-koeln.de
Bus-Tickets Online
Einzelfahrt, Tageskarte, Monatskarte
Schnell und einfach kaufen
Bezahlung: PayPal, Kreditkarte`
        }
      ],
      answer: 'a',
      explanation: 'Lost & Found office (Fundbüro) helps find lost items.'
    },
    {
      id: 'day25_r2_q6',
      text: 'Sie möchten wissen: Wann fährt der nächste Bus zum Flughafen?',
      options: [
        {
          label: 'a',
          content: `www.flughafen-info.de
Flughafen München
Ankünfte und Abflüge
Parken, Shopping, Hotels
Kontakt: info@flughafen.de`
        },
        {
          label: 'b',
          content: `www.mvg-fahrplan.de
MVG Fahrplan
Bus, U-Bahn, Tram - Live-Abfahrten
Reiseauskunft und Verbindungen
Zum Flughafen: Bus 635, 100`
        }
      ],
      answer: 'b',
      explanation: 'MVG schedule site shows bus departures and connections.'
    },
    {
      id: 'day25_r2_q7',
      text: 'Sie brauchen eine Monatskarte für Bus und Bahn.',
      options: [
        {
          label: 'a',
          content: `www.stadtverkehr-tickets.de
Verkehrsbetriebe Berlin
Fahrkarten-Shop
Einzeltickets, Tageskarten, Monatskarten
Online kaufen und sofort nutzen!`
        },
        {
          label: 'b',
          content: `www.berlin-tourist.de
Berlin Tourismus
Sehenswürdigkeiten und Museen
City-Touren mit dem Bus
Hotels und Restaurants`
        }
      ],
      answer: 'a',
      explanation: 'Transport company website sells monthly tickets.'
    },
    {
      id: 'day25_r2_q8',
      text: 'Sie suchen eine App für Stadtpläne und Navigation.',
      options: [
        {
          label: 'a',
          content: `www.handy-reparatur.de
Smartphone Reparatur
Schnell und günstig
Alle Marken: iPhone, Samsung
Display, Akku, Kamera`
        },
        {
          label: 'b',
          content: `www.stadtplan-app.de
CityNav - Die beste Navi-App!
Stadtpläne für ganz Deutschland
U-Bahn, Bus, Tram - alle Linien
Offline-Karten verfügbar`
        }
      ],
      answer: 'b',
      explanation: 'CityNav app provides city maps and navigation.'
    },
    {
      id: 'day25_r2_q9',
      text: 'Sie möchten ein Fahrrad am Hauptbahnhof mieten.',
      options: [
        {
          label: 'a',
          content: `www.rad-verleih-zentral.de
Fahrradverleih Hauptbahnhof
Direkt am Bahnhof - keine Reservierung nötig
Stunde: 3€, Tag: 12€, Woche: 50€
Öffnungszeiten: 6-22 Uhr`
        },
        {
          label: 'b',
          content: `www.fahrrad-werkstatt.de
Fahrrad-Werkstatt Müller
Reparatur und Service
Neue und gebrauchte Fahrräder
Hauptstraße 45, Berlin`
        }
      ],
      answer: 'a',
      explanation: 'Bicycle rental at the train station.'
    },
    {
      id: 'day25_r2_q10',
      text: 'Sie wollen wissen: Gibt es Ermäßigung für Senioren?',
      options: [
        {
          label: 'a',
          content: `www.senioren-club-berlin.de
Senioren-Club Berlin
Tanzen, Spiele, Ausflüge
Jeden Mittwoch 14-17 Uhr
Kaffee und Kuchen`
        },
        {
          label: 'b',
          content: `www.verkehr-tarife.de
Verkehrsbetriebe - Preise
Erwachsene: 2,80€
Kinder (6-14): 1,50€
Senioren (65+): 2,00€
Studenten: 2,20€`
        }
      ],
      answer: 'b',
      explanation: 'Transport tariff website lists senior discounts.'
    }
  ]
};

// ==========================================================================
// READING PRACTICE - Teil 3: Signs and Notices at Stations
// ==========================================================================

const readingPractice3: ReadingPractice = {
  part: 3,
  title: "Teil 3: Public Transport Signs and Notices",
  description: "Read signs and notices, decide if statements are correct",
  instructions: "Read each notice and decide if the statement is Richtig " +
                "(R) or Falsch (F).",
  questions: [
    {
      id: 'day25_r3_q0',
      text: 'An der U-Bahn-Station können Sie Ihr Handy aufladen.',
      notice: `┌─────────────────────────────────────┐
│     U-Bahnhof Marienplatz           │
│                                     │
│  NEU: Kostenlose Ladestationen!    │
│  Laden Sie Ihr Smartphone           │
│  während der Wartezeit.             │
│                                     │
│  Standort: Bahnsteig A und B        │
│  USB und normale Steckdosen         │
└─────────────────────────────────────┘`,
      answer: 'Richtig',
      explanation: 'The sign says free charging stations are available.'
    },
    {
      id: 'day25_r3_q11',
      text: 'Sie müssen die Fahrkarte vor der Fahrt kaufen.',
      notice: `┌─────────────────────────────────────┐
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
      answer: 'Richtig',
      explanation: 'You cannot buy tickets on the bus, only before travel.'
    },
    {
      id: 'day25_r3_q12',
      text: 'Die Straßenbahn fährt heute bis zum Hauptbahnhof.',
      notice: `┌─────────────────────────────────────┐
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
      answer: 'Falsch',
      explanation: 'Tram only goes to Stadtmitte, then replacement bus.'
    },
    {
      id: 'day25_r3_q13',
      text: 'Kinder unter 6 Jahren fahren kostenlos.',
      notice: `┌─────────────────────────────────────┐
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
      answer: 'Richtig',
      explanation: 'Children under 6 travel free (FREI).'
    },
    {
      id: 'day25_r3_q14',
      text: 'Sie können Ihr Fahrrad den ganzen Tag in der U-Bahn mitnehmen.',
      notice: `┌─────────────────────────────────────┐
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
      answer: 'Falsch',
      explanation: 'Not allowed during rush hours on weekdays (7-9, 16-18).'
    },
    {
      id: 'day25_r3_q15',
      text: 'Das Ticket gilt auch für die Nachbarstadt.',
      notice: `┌─────────────────────────────────────┐
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
      answer: 'Richtig',
      explanation: 'Valid for regional trains to Emmendingen (neighboring city).'
    }
  ]
};

// ==========================================================================
// WRITING PRACTICE - Teil 1: Bus Pass Registration Form
// ==========================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: "Teil 1: Monthly Bus Pass Registration Form",
  description: "Complete a monthly transport pass application form",
  instructions: "You are helping your friend apply for a monthly bus pass. " +
                "Read the context and fill in the missing information.",
  prompt: `Ihr Freund, Alex Petrov, ist 22 Jahre alt und Student an der 
Technischen Universität in Stuttgart. Er wohnt in der Gartenstraße 17, 
70173 Stuttgart. Alex braucht eine Monatskarte für den Stadtverkehr. 
Er möchte die Karte ab 1. März haben. Die Monatskarte kostet 65 Euro. 
Alex ist Vollzeit-Student und hat einen Studentenausweis. Er möchte 
mit Banküberweisung bezahlen. Seine IBAN ist DE89370400440532013000.

In dem Formular fehlen sechs Informationen.
Helfen Sie Ihrem Freund und schreiben Sie die sechs fehlenden 
Informationen in das Formular.
Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen.

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
│ Zahlungsweise:          _______________    (6) │
│   ☐ Banküberweisung (IBAN erforderlich)        │
│   ☐ Lastschrift                                 │
│   ☐ Bar (nur am Schalter)                       │
│                                                 │
│ IBAN: DE89370400440532013000                    │
│                                                 │
│ Datum:                  06.02.2026              │
│ Unterschrift:           Alex Petrov             │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) 22 Jahre / zweiundzwanzig Jahre [Note: Since exact birthdate not given]
(2) Gartenstraße 17
(3) Stuttgart
(4) Student / Student (mit Ausweis)
(5) 1. März / 01.03. / 1.3. / ab März
(6) Banküberweisung`,
  keyPhrases: [
    "die Monatskarte (monthly ticket)",
    "der Student / die Studentin (student)",
    "die Adresse (address)",
    "gültig ab (valid from)",
    "die Banküberweisung (bank transfer)",
    "der Stadtverkehr (city transport)"
  ]
};

// ==========================================================================
// WRITING PRACTICE - Teil 2: Email About Lost Item on Train
// ==========================================================================

const writingPractice2: WritingPractice = {
  part: 2,
  title: "Teil 2: Email to Lost & Found About Item Left on Train",
  description: "Write an email to the lost and found office",
  instructions: "Write an email to the train station's lost and found. " +
                "Address all 3 points. Write about 30 words.",
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
Michael Weber`,
  keyPhrases: [
    "Sehr geehrte Damen und Herren (Dear Sir/Madam)",
    "vergessen (to forget)",
    "die Tasche (bag)",
    "wichtige Dokumente (important documents)",
    "schwarz (black)",
    "gefunden (found)",
    "Mit freundlichen Grüßen (Kind regards)"
  ]
};

// ==========================================================================
// WRITING PRACTICE - Teil 2: Email Asking for Directions
// ==========================================================================

const writingPractice3: WritingPractice = {
  part: 2,
  title: "Teil 2: Email Asking for Transportation Directions",
  description: "Write an email asking how to get to a location",
  instructions: "Write an email to a friend asking for travel directions. " +
                "Address all 3 points. Write about 30 words.",
  prompt: `Sie besuchen morgen Ihre Freundin Sarah. Sie kennen den Weg nicht. 
Schreiben Sie an Sarah:

• Warum schreiben Sie?
• Fragen Sie: Welcher Bus oder welche U-Bahn?
• Fragen Sie: Wo müssen Sie aussteigen?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Liebe Sarah,

ich komme morgen zu dir, aber ich kenne den Weg nicht. Welchen Bus 
oder welche U-Bahn muss ich nehmen? Wo muss ich aussteigen? Wie heißt 
die Haltestelle?

Viele Grüße
Julia`,
  keyPhrases: [
    "Liebe/Lieber (Dear - informal)",
    "der Weg (the way)",
    "welcher Bus (which bus)",
    "die U-Bahn (subway)",
    "aussteigen (to get off)",
    "die Haltestelle (stop)",
    "Viele Grüße (Best regards)"
  ]
};

// ==========================================================================
// WRITING PRACTICE - Teil 2: Email About Transport Card Problem
// ==========================================================================

const writingPractice4: WritingPractice = {
  part: 2,
  title: "Teil 2: Email About Transport Card Issue",
  description: "Write an email about a problem with your transport card",
  instructions: "Write an email to the transport company about a card issue. " +
                "Address all 3 points. Write about 30 words.",
  prompt: `Ihre Monatskarte für Bus und Bahn funktioniert nicht mehr. 
Schreiben Sie an die Verkehrsbetriebe:

• Sagen Sie: Sie haben ein Problem mit der Monatskarte
• Beschreiben Sie das Problem
• Bitten Sie um Hilfe

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich habe ein Problem mit meiner Monatskarte. Die Karte funktioniert 
nicht mehr. Ich kann nicht in den Bus einsteigen. Können Sie mir 
bitte helfen? Brauche ich eine neue Karte?

Mit freundlichen Grüßen
Anna Schmidt`,
  keyPhrases: [
    "das Problem (the problem)",
    "die Monatskarte (monthly card)",
    "funktioniert nicht (doesn't work)",
    "einsteigen (to board/get on)",
    "helfen (to help)",
    "brauchen (to need)",
    "neue Karte (new card)"
  ]
};

// ==========================================================================
// VOCABULARY THEME
// ==========================================================================

const vocabularyTheme: VocabularyTheme = {
  theme: 'Public Transportation & City Navigation (Öffentliche Verkehrsmittel)',
  categories: [
    {
      name: 'Transport Types (Verkehrsmittel)',
      words: [
        { german: 'der Bus', english: 'bus', example: 'Ich fahre mit dem Bus.' },
        {
          german: 'die U-Bahn',
          english: 'subway/underground',
          example: 'Die U-Bahn ist schnell.'
        },
        {
          german: 'die Straßenbahn / die Tram',
          english: 'tram',
          example: 'Die Straßenbahn fährt alle 10 Minuten.'
        },
        { german: 'der Zug', english: 'train', example: 'Der Zug kommt um 9 Uhr.' },
        { german: 'die S-Bahn', english: 'city train', example: 'Die S-Bahn S1.' },
        { german: 'das Taxi', english: 'taxi', example: 'Ich nehme ein Taxi.' },
        {
          german: 'das Fahrrad',
          english: 'bicycle',
          example: 'Ich fahre mit dem Fahrrad.'
        }
      ]
    },
    {
      name: 'Tickets & Cards (Fahrkarten)',
      words: [
        {
          german: 'die Fahrkarte / das Ticket',
          english: 'ticket',
          example: 'Ich kaufe eine Fahrkarte.'
        },
        {
          german: 'die Einzelfahrt',
          english: 'single ticket',
          example: 'Eine Einzelfahrt, bitte.'
        },
        {
          german: 'die Tageskarte',
          english: 'day ticket',
          example: 'Die Tageskarte kostet 6 Euro.'
        },
        {
          german: 'die Monatskarte',
          english: 'monthly pass',
          example: 'Ich habe eine Monatskarte.'
        },
        {
          german: 'die Jahreskarte',
          english: 'yearly pass',
          example: 'Die Jahreskarte ist günstiger.'
        },
        {
          german: 'der Fahrschein',
          english: 'ticket/fare',
          example: 'Bitte den Fahrschein entwerten!'
        },
        {
          german: 'der Automat',
          english: 'ticket machine',
          example: 'Der Automat ist am Bahnsteig.'
        }
      ]
    },
    {
      name: 'Stations & Stops (Stationen & Haltestellen)',
      words: [
        {
          german: 'der Bahnhof',
          english: 'train station',
          example: 'Der Bahnhof ist groß.'
        },
        {
          german: 'der Hauptbahnhof',
          english: 'main station',
          example: 'Ich bin am Hauptbahnhof.'
        },
        {
          german: 'die Haltestelle',
          english: 'stop (bus/tram)',
          example: 'Die Haltestelle ist hier.'
        },
        {
          german: 'die Station',
          english: 'station (metro)',
          example: 'Die nächste Station ist Marienplatz.'
        },
        {
          german: 'der Bahnsteig / das Gleis',
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
          example: 'Der Eingang ist links.'
        }
      ]
    },
    {
      name: 'Actions & Verbs (Aktionen)',
      words: [
        { german: 'fahren', english: 'to go/drive/travel', example: 'Ich fahre nach Hause.' },
        {
          german: 'einsteigen',
          english: 'to get on/board',
          example: 'Bitte einsteigen!'
        },
        {
          german: 'aussteigen',
          english: 'to get off',
          example: 'Hier müssen Sie aussteigen.'
        },
        {
          german: 'umsteigen',
          english: 'to change/transfer',
          example: 'Sie müssen in Marienplatz umsteigen.'
        },
        {
          german: 'kaufen',
          english: 'to buy',
          example: 'Ich kaufe eine Fahrkarte.'
        },
        {
          german: 'entwerten',
          english: 'to validate',
          example: 'Bitte entwerten Sie das Ticket!'
        },
        {
          german: 'warten',
          english: 'to wait',
          example: 'Ich warte auf den Bus.'
        },
        {
          german: 'verpassen',
          english: 'to miss',
          example: 'Ich habe den Bus verpasst.'
        },
        {
          german: 'vergessen',
          english: 'to forget',
          example: 'Ich habe meine Tasche vergessen.'
        }
      ]
    },
    {
      name: 'Directions & Navigation (Wegbeschreibung)',
      words: [
        { german: 'der Weg', english: 'way/path', example: 'Kennen Sie den Weg?' },
        {
          german: 'die Richtung',
          english: 'direction',
          example: 'In welche Richtung?'
        },
        { german: 'links', english: 'left', example: 'Nach links gehen.' },
        { german: 'rechts', english: 'right', example: 'Nach rechts fahren.' },
        { german: 'geradeaus', english: 'straight ahead', example: 'Geradeaus fahren.' },
        {
          german: 'die Linie',
          english: 'line (bus/tram)',
          example: 'Nehmen Sie die Linie 5.'
        },
        {
          german: 'die Verbindung',
          english: 'connection',
          example: 'Gute Verbindung nach München.'
        },
        {
          german: 'der Stadtplan',
          english: 'city map',
          example: 'Ich habe einen Stadtplan.'
        }
      ]
    },
    {
      name: 'Time & Schedule (Zeit & Fahrplan)',
      words: [
        {
          german: 'der Fahrplan',
          english: 'schedule/timetable',
          example: 'Der Fahrplan ist online.'
        },
        {
          german: 'die Abfahrt',
          english: 'departure',
          example: 'Die Abfahrt ist um 10 Uhr.'
        },
        {
          german: 'die Ankunft',
          english: 'arrival',
          example: 'Ankunft in Berlin: 14 Uhr.'
        },
        {
          german: 'pünktlich',
          english: 'on time',
          example: 'Der Zug ist pünktlich.'
        },
        {
          german: 'die Verspätung',
          english: 'delay',
          example: 'Der Bus hat 10 Minuten Verspätung.'
        },
        {
          german: 'jeden Tag',
          english: 'every day',
          example: 'Der Bus fährt jeden Tag.'
        },
        {
          german: 'alle 10 Minuten',
          english: 'every 10 minutes',
          example: 'Die Tram kommt alle 10 Minuten.'
        }
      ]
    },
    {
      name: 'Prices & Payment (Preise & Bezahlung)',
      words: [
        { german: 'der Preis', english: 'price', example: 'Was ist der Preis?' },
        {
          german: 'kosten',
          english: 'to cost',
          example: 'Wie viel kostet das Ticket?'
        },
        {
          german: 'bezahlen',
          english: 'to pay',
          example: 'Ich möchte bezahlen.'
        },
        { german: 'die Kreditkarte', english: 'credit card', example: 'Mit Kreditkarte.' },
        { german: 'bar', english: 'cash', example: 'Ich zahle bar.' },
        {
          german: 'die Ermäßigung',
          english: 'discount/reduction',
          example: 'Gibt es Ermäßigung für Studenten?'
        },
        {
          german: 'kostenlos',
          english: 'free',
          example: 'Für Kinder unter 6 ist es kostenlos.'
        }
      ]
    },
    {
      name: 'Problems & Help (Probleme & Hilfe)',
      words: [
        {
          german: 'das Problem',
          english: 'problem',
          example: 'Ich habe ein Problem.'
        },
        {
          german: 'das Fundbüro',
          english: 'lost & found',
          example: 'Wo ist das Fundbüro?'
        },
        {
          german: 'verloren',
          english: 'lost',
          example: 'Ich habe meine Tasche verloren.'
        },
        {
          german: 'gefunden',
          english: 'found',
          example: 'Haben Sie meine Tasche gefunden?'
        },
        { german: 'helfen', english: 'to help', example: 'Können Sie mir helfen?' },
        {
          german: 'funktioniert nicht',
          english: 'doesn\'t work',
          example: 'Die Karte funktioniert nicht.'
        },
        { german: 'kaputt', english: 'broken', example: 'Der Automat ist kaputt.' }
      ]
    },
    {
      name: 'Useful Phrases (Nützliche Ausdrücke)',
      words: [
        {
          german: 'Welcher Bus fährt nach...?',
          english: 'Which bus goes to...?',
          example: 'Welcher Bus fährt nach Zentrum?'
        },
        {
          german: 'Wo muss ich aussteigen?',
          english: 'Where do I need to get off?',
          example: 'Wo muss ich aussteigen für das Museum?'
        },
        {
          german: 'Wie komme ich nach...?',
          english: 'How do I get to...?',
          example: 'Wie komme ich nach Hauptbahnhof?'
        },
        {
          german: 'Wann fährt der nächste Bus?',
          english: 'When does the next bus leave?',
          example: 'Wann fährt der nächste Bus nach Flughafen?'
        },
        {
          german: 'Ich habe mich verirrt',
          english: 'I am lost',
          example: 'Entschuldigung, ich habe mich verirrt.'
        }
      ]
    }
  ]
};

// ==========================================================================
// EXPORT DAY 25
// ==========================================================================

export const day25: ExamDay = {
  day: 25,
  title: 'Public Transportation & City Navigation',
  description: 'Practice reading signs, buying tickets, asking for ' +
               'directions, and handling transport situations',
  practices: {
    reading: [readingPractice1, readingPractice2, readingPractice3],
    writing: [writingPractice1, writingPractice2, writingPractice3, writingPractice4]
  },
  vocabulary: vocabularyTheme
};
