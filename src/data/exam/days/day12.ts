/**
 * Day 12: Listening + Reading - Shopping and Prices
 * Focus: Shop dialogues, sales announcements, store advertisements, shopping vocabulary
 * 
 * Skills: Listening (all 3 parts), Reading (all 3 parts)
 * Topics: Clothing, shopping, prices, sizes, colors, store information
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Shopping Contexts
// ============================================================================

const listeningPractice1: ListeningPractice = {
  part: 1,
  title: 'Teil 1: Dialogues in Shops',
  description: 'Listen to conversations in clothing stores, supermarkets, and other shops',
  instructions: 'You will hear 6 short dialogues about shopping situations. Each dialogue is played TWICE. Choose the correct answer (A, B, or C) for each question. Time: ~6 minutes.',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice2: ListeningPractice = {
  part: 2,
  title: 'Teil 2: Announcements about Sales and Offers',
  description: 'Listen to announcements in stores about special offers and sales',
  instructions: 'You will hear 4 announcements about shopping offers and sales. Each announcement is played ONCE ONLY. Mark each statement as True (Richtig) or False (Falsch). Time: ~6 minutes.',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice3: ListeningPractice = {
  part: 3,
  title: 'Teil 3: Phone Conversations about Products and Prices',
  description: 'Listen to phone messages about product availability and orders',
  instructions: 'You will hear 5 telephone messages about shopping and products. Each message is played TWICE. Choose the correct answer (A, B, or C) for each question. Time: ~8 minutes.',
  questions: [] // Empty array - questions will be added with audio
};

// ============================================================================
// READING PRACTICE - Store Ads and Shopping Information
// ============================================================================

const readingPractice1: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Online Shopping - Website Comparison',
  description: 'Find the right online shop for your needs',
  instructions: 'Read the situation and look at the two websites. Decide which website (A or B) has the information or product described. Time: ~5 minutes.',
  text: `**Situation:** Sie suchen eine Winterjacke für Ihren Sohn. Die Jacke soll wasserdicht sein und nicht mehr als 50 Euro kosten.

**Webseite A: www.kinder-mode-welt.de**
*   **Großer Winterschlussverkauf!**
*   Warme Winterjacken für Jungen und Mädchen
*   Alle Größen verfügbar (98-176)
*   **Neu:** Wasserdichte Regenjacken ab 59,99 €
*   Schnelle Lieferung (2-3 Tage)

**Webseite B: www.sport-fuer-kids.de**
*   Sportbekleidung für Kinder
*   **Aktion:** Outdoor-Jacken (wasserdicht & winddicht)
*   Top-Marken zu kleinen Preisen
*   Jungen-Winterjacken ab 45,00 €
*   Kostenlose Rücksendung`,
  questions: [
    {
      id: 'day12-reading1-q1',
      type: 'multiple-choice',
      question: 'Welche Webseite passt besser?',
      options: ['Webseite A (www.kinder-mode-welt.de)', 'Webseite B (www.sport-fuer-kids.de)'],
      correctAnswer: 1,
      explanation: 'Website B offers waterproof jackets ("wasserdicht") starting from 45.00 €, which fits the budget (under 50 €). Website A starts at 59.99 €, which is too expensive.'
    }
  ]
};

const readingPractice2: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Finding Information - Opening Hours',
  description: 'Compare information sources to find opening times',
  instructions: 'You want to buy shoes on a Sunday. Look at the two websites. Which one helps you? Time: ~5 minutes.',
  text: `**Situation:** Sie möchten am Sonntag neue Schuhe kaufen. Sie suchen ein Geschäft, das am Sonntag geöffnet ist.

**Webseite A: www.schuh-paradies-zentrum.de**
*   Ihr Schuhgeschäft im Einkaufszentrum "City-Passage"
*   Damen-, Herren- und Kinderschuhe
*   **Öffnungszeiten:**
    *   Mo-Sa: 10:00 - 20:00 Uhr
    *   **Verkaufsoffener Sonntag (nur am 1. Sonntag im Monat):** 13:00 - 18:00 Uhr

**Webseite B: www.bahnhofs-schuhe.de**
*   Direkt im Hauptbahnhof
*   Schuhe für die ganze Familie
*   Reiseproviant & Accessoires
*   **Täglich geöffnet!**
*   Mo-So: 8:00 - 22:00 Uhr (auch an Feiertagen)`,
  questions: [
    {
      id: 'day12-reading2-q1',
      type: 'multiple-choice',
      question: 'Auf welcher Webseite finden Sie ein Geschäft, das jeden Sonntag offen ist?',
      options: ['Webseite A', 'Webseite B'],
      correctAnswer: 1,
      explanation: 'Website B says "Täglich geöffnet!" and "Mo-So" (Mon-Sun), confirming it is open every Sunday. Website A is only open on the first Sunday of the month.'
    }
  ]
};

const readingPractice3: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Product Search - Electronics',
  description: 'Search for specific electronic features',
  instructions: 'You are looking for a specific type of camera. Check the online offers. Time: ~5 minutes.',
  text: `**Situation:** Sie suchen eine einfache Digitalkamera für Ihren Urlaub. Sie soll klein sein, Batterien benutzen (kein Akku) und unter 100 Euro kosten.

**Angebot A: Elektro-Markt "Technik-Profi"**
*   Super-Zoom Kamera "Click 500"
*   Inklusive Tasche und Speicherkarte
*   Betrieb mit AA-Batterien
*   Sehr handlich und leicht
*   **Preis:** 89,00 €

**Angebot B: Foto-Spezialist "Camera-World"**
*   Profi-Kamera "Vision X"
*   Hochleistungs-Li-Ion Akku (wiederaufladbar)
*   Wasserdicht bis 10m
*   Perfekt für Tauchurlaub
*   **Preis:** 99,00 €`,
  questions: [
    {
      id: 'day12-reading3-q1',
      type: 'multiple-choice',
      question: 'Welches Angebot passt zu Ihren Wünschen?',
      options: ['Angebot A', 'Angebot B'],
      correctAnswer: 0,
      explanation: 'Offer A matches all criteria: it uses batteries ("Betrieb mit AA-Batterien"), is small/handy ("handlich"), and costs 89 € (under 100 €). Offer B uses a rechargeable battery ("Akku"), which you didn\'t want.'
    }
  ]
};

const readingPractice4: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Information Board - Department Store',
  description: 'Read the directory of a department store',
  instructions: 'Look at the information board in a department store. Find where you can buy specific items. Time: ~5 minutes.',
  text: `**KAUFHAUS 'CITY-MITTE' - WEGWEISER**

**4. Stock:**
*   Restaurant & Café "Panorama"
*   Kundentoiletten / Wickelraum

**3. Stock:**
*   Unterhaltungselektronik (TV, Computer)
*   Haushaltswaren (Töpfe, Pfannen, Geschirr)
*   Spielwaren

**2. Stock:**
*   Herrenmode
*   Sportbekleidung & Sportgeräte
*   Schuhabteilung (Herren & Sport)

**1. Stock:**
*   Damenmode
*   Dessous & Nachtwäsche
*   Schuhabteilung (Damen)

**Erdgeschoss (EG):**
*   Parfümerie & Kosmetik
*   Schmuck & Uhren
*   Taschen & Koffer
*   Information / Service-Point

**Untergeschoss (UG):**
*   Supermarkt "Frisch & Fein"
*   Bäckerei
*   Schlüsseldienst`,
  questions: [
    {
      id: 'day12-reading4-q1',
      type: 'multiple-choice',
      question: 'Wo finden Sie einen neuen Koffer?',
      options: ['Im 3. Stock', 'Im Erdgeschoss', 'Im Untergeschoss'],
      correctAnswer: 1,
      explanation: 'Suitcases ("Koffer") are listed on the Ground Floor ("Erdgeschoss").'
    },
    {
      id: 'day12-reading4-q2',
      type: 'multiple-choice',
      question: 'Sie möchten einen Kaffee trinken. Wohin gehen Sie?',
      options: ['In den 1. Stock', 'In den 4. Stock', 'In das Untergeschoss'],
      correctAnswer: 1,
      explanation: 'The Café is located on the 4th Floor ("4. Stock").'
    },
    {
      id: 'day12-reading4-q3',
      type: 'multiple-choice',
      question: 'Wo gibt es Sportschuhe?',
      options: ['Im 2. Stock', 'Im 1. Stock', 'Im Erdgeschoss'],
      correctAnswer: 0,
      explanation: 'Sport shoes are part of the Shoe Department (Men & Sport) on the 2nd Floor ("2. Stock").'
    }
  ]
};

const readingPractice5: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Notice Board - Supermarket Entrance',
  description: 'Read notes on a community notice board',
  instructions: 'Read the handwritten notes on the "Suche & Biete" (Search & Offer) board in a supermarket. Answer the questions. Time: ~5 minutes.',
  text: `**DAS SCHWARZE BRETT**

**Zettel 1:**
Verkaufe Kinderfahrrad (blau)
Für Kinder von 4-6 Jahren.
Guter Zustand!
Preis: 40 €
Tel: 0171-1234567 (Ab 18 Uhr)

**Zettel 2:**
Suche Putzhilfe!
Für 3 Stunden pro Woche (am Freitagvormittag).
Wir bezahlen 15 € pro Stunde.
Bitte melden bei Familie Weber.
Tel: 030-9876543

**Zettel 3:**
Verschenke altes Sofa!
Farbe: Grau. Muss abgeholt werden (3. Stock, kein Aufzug!).
Abholung nur diesen Samstag!
Kontakt: Lisa, Tel: 0160-5555555`,
  questions: [
    {
      id: 'day12-reading5-q1',
      type: 'multiple-choice',
      question: 'Wann können Sie wegen dem Fahrrad anrufen?',
      options: ['Jeden Vormittag', 'Ab 18 Uhr', 'Nur am Wochenende'],
      correctAnswer: 1,
      explanation: 'The note says "Tel: ... (Ab 18 Uhr)" - call after 6 PM.'
    },
    {
      id: 'day12-reading5-q2',
      type: 'multiple-choice',
      question: 'Was kostet das Sofa?',
      options: ['15 Euro', '40 Euro', 'Nichts (kostenlos)'],
      correctAnswer: 2,
      explanation: 'The note says "Verschenke altes Sofa" (Giving away old sofa), implies it is free/0 Euro.'
    }
  ]
};

// ============================================================================
// VOCABULARY THEME - Clothing & Shopping
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Clothing & Shopping (Kleidung & Einkaufen)',
  items: [
    // Clothing Items
    {
      german: 'das Hemd',
      english: 'shirt',
      example: 'Ein weißes Hemd.'
    },
    {
      german: 'die Bluse',
      english: 'blouse',
      example: 'Eine blaue Bluse.'
    },
    {
      german: 'die Hose',
      english: 'pants/trousers',
      example: 'Eine schwarze Hose.'
    },
    {
      german: 'die Jeans',
      english: 'jeans',
      example: 'Ich trage gern Jeans.'
    },
    {
      german: 'der Rock',
      english: 'skirt',
      example: 'Ein kurzer Rock.'
    },
    {
      german: 'das Kleid',
      english: 'dress',
      example: 'Ein schönes Kleid.'
    },
    {
      german: 'die Jacke',
      english: 'jacket',
      example: 'Eine warme Jacke.'
    },
    {
      german: 'der Mantel',
      english: 'coat',
      example: 'Ein langer Mantel.'
    },
    {
      german: 'der Pullover',
      english: 'sweater/pullover',
      example: 'Ein roter Pullover.'
    },
    {
      german: 'das T-Shirt',
      english: 't-shirt',
      example: 'Ein T-Shirt in Größe M.'
    },
    {
      german: 'die Schuhe',
      english: 'shoes',
      example: 'Braune Schuhe.'
    },
    {
      german: 'die Stiefel',
      english: 'boots',
      example: 'Schwarze Stiefel.'
    },
    // Sizes
    {
      german: 'klein',
      english: 'small',
      example: 'Haben Sie das in klein?'
    },
    {
      german: 'mittel',
      english: 'medium',
      example: 'Größe mittel, bitte.'
    },
    {
      german: 'groß',
      english: 'large',
      example: 'Ich brauche groß.'
    },
    {
      german: 'die Größe',
      english: 'size',
      example: 'Welche Größe haben Sie?'
    },
    {
      german: 'zu klein',
      english: 'too small',
      example: 'Das ist zu klein.'
    },
    {
      german: 'zu groß',
      english: 'too big',
      example: 'Das ist zu groß.'
    },
    {
      german: 'passt',
      english: 'fits',
      example: 'Das passt gut!'
    },
    // Colors
    {
      german: 'rot',
      english: 'red',
      example: 'Ein rotes Kleid.'
    },
    {
      german: 'blau',
      english: 'blue',
      example: 'Eine blaue Hose.'
    },
    {
      german: 'grün',
      english: 'green',
      example: 'Ein grüner Pullover.'
    },
    {
      german: 'gelb',
      english: 'yellow',
      example: 'Ein gelbes T-Shirt.'
    },
    {
      german: 'schwarz',
      english: 'black',
      example: 'Schwarze Schuhe.'
    },
    {
      german: 'weiß',
      english: 'white',
      example: 'Ein weißes Hemd.'
    },
    {
      german: 'braun',
      english: 'brown',
      example: 'Braune Stiefel.'
    },
    {
      german: 'grau',
      english: 'gray',
      example: 'Ein grauer Mantel.'
    },
    // Shopping Verbs
    {
      german: 'kaufen',
      english: 'to buy',
      example: 'Ich kaufe eine Jacke.'
    },
    {
      german: 'kosten',
      english: 'to cost',
      example: 'Was kostet das?'
    },
    {
      german: 'bezahlen',
      english: 'to pay',
      example: 'Ich möchte bezahlen.'
    },
    {
      german: 'suchen',
      english: 'to look for',
      example: 'Ich suche einen Pullover.'
    },
    {
      german: 'finden',
      english: 'to find',
      example: 'Wo finde ich Schuhe?'
    },
    {
      german: 'anprobieren',
      english: 'to try on',
      example: 'Kann ich das anprobieren?'
    },
    {
      german: 'passen',
      english: 'to fit',
      example: 'Passt das?'
    },
    {
      german: 'nehmen',
      english: 'to take',
      example: 'Ich nehme das.'
    },
    {
      german: 'umtauschen',
      english: 'to exchange',
      example: 'Kann ich das umtauschen?'
    },
    // Store Types
    {
      german: 'der Supermarkt',
      english: 'supermarket',
      example: 'Ich gehe zum Supermarkt.'
    },
    {
      german: 'die Bäckerei',
      english: 'bakery',
      example: 'Brot von der Bäckerei.'
    },
    {
      german: 'das Kleidungsgeschäft',
      english: 'clothing store',
      example: 'Ein Kleidungsgeschäft in der Stadt.'
    },
    {
      german: 'der Schuhladen',
      english: 'shoe store',
      example: 'Schuhe im Schuhladen kaufen.'
    },
    {
      german: 'das Kaufhaus',
      english: 'department store',
      example: 'Alles im Kaufhaus.'
    },
    // Shopping Phrases
    {
      german: 'Kann ich Ihnen helfen?',
      english: 'Can I help you?',
      example: 'Verkäufer: Kann ich Ihnen helfen?'
    },
    {
      german: 'Ich schaue nur.',
      english: 'I\'m just looking.',
      example: 'Danke, ich schaue nur.'
    },
    {
      german: 'Haben Sie das in...?',
      english: 'Do you have that in...?',
      example: 'Haben Sie das in Größe 40?'
    },
    {
      german: 'Wie viel kostet das?',
      english: 'How much does that cost?',
      example: 'Entschuldigung, wie viel kostet das?'
    },
    {
      german: 'Das ist zu teuer.',
      english: 'That\'s too expensive.',
      example: 'Das ist mir zu teuer.'
    },
    {
      german: 'Gibt es Rabatt?',
      english: 'Is there a discount?',
      example: 'Gibt es heute Rabatt?'
    },
    {
      german: 'die Kasse',
      english: 'cash register/checkout',
      example: 'Wo ist die Kasse?'
    },
    {
      german: 'der Kassenbon',
      english: 'receipt',
      example: 'Kann ich den Kassenbon haben?'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day12: ExamDay = {
  day: 12,
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
  focus: 'Shopping and prices - Listening to shop dialogues and sales announcements, reading store advertisements and shopping information'
};

export default day12;