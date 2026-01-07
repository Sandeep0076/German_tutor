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
  part: 1,
  title: 'Teil 1: Store Advertisements and Special Offers',
  description: 'Read store ads and answer True/False questions',
  instructions: 'Read 2 short advertisements about store sales and offers. Answer True/False questions about products and prices. Time: ~8 minutes.',
  text: `SUPER SONDERANGEBOT!
Modehaus Schmidt - Nur diese Woche!

Jeans - statt 50€ jetzt nur 35€
T-Shirts - 3 für 20€ (einzeln 9€)
Pullover - 30% Rabatt auf alle Modelle
Schuhe - Alle Größen, viele Farben, ab 25€

Öffnungszeiten:
Montag-Freitag: 9:00-20:00 Uhr
Samstag: 9:00-18:00 Uhr
Sonntag: geschlossen

Zahlung: Bar, EC-Karte, Kreditkarte
Parkplatz vorhanden
Umtausch innerhalb 14 Tagen mit Kassenbon`,
  questions: [] // To be converted to proper ExamQuestion objects
  // Original questions: ['Die Jeans kosten jetzt 35 Euro.', 'Ein T-Shirt kostet 9 Euro.', 'Es gibt 30% Rabatt auf Pullover.', 'Das Geschäft ist sonntags geöffnet.', 'Man kann mit Karte bezahlen.']
};

const readingPractice2: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Match Shopping Needs to Stores',
  description: 'Match people\'s shopping needs to appropriate stores',
  instructions: 'Read 5 situations about people looking for specific items. Match each situation to the correct store advertisement (A or B). Time: ~8 minutes.',
  text: `Situation 1: Anna sucht eine Jacke in Größe 38, nicht zu teuer.

Advertisement A:
Kleidungsgeschäft "Fashion"
Große Auswahl an Jacken
Alle Größen: 34-48
Preise: 40€-150€
Markenkleidung
Mo-Sa: 10:00-19:00 Uhr

Advertisement B:
Second-Hand-Laden "Günstig"
Gebrauchte Kleidung
Jacken ab 15€
Verschiedene Größen
Täglich 11:00-18:00 Uhr
Nur Barzahlung`,
  questions: [] // To be converted to proper ExamQuestion objects
  // Original questions: ['Welches Geschäft ist besser für Anna?']
};

const readingPractice3: ReadingPractice = {
  part: 2,
  title: 'Teil 2: More Shopping Matching',
  description: 'Continue matching shopping needs',
  instructions: 'Match more shopping situations to appropriate stores.',
  text: `Situation 2: Tom braucht Sportschuhe in Größe 42, gute Qualität.

Advertisement A:
Sportgeschäft "Aktiv"
Sportschuhe: alle Größen
Marken: Nike, Adidas, Puma
Preise: 60€-120€
Beratung durch Experten
Parkplatz vorhanden

Advertisement B:
Supermarkt "Billig"
Sportschuhe: 25€
Nur Größen 39-43
Keine Marken
Selbstbedienung
Keine Rückgabe`,
  questions: [] // To be converted to proper ExamQuestion objects
  // Original questions: ['Welches Geschäft ist besser für Tom?']
};

const readingPractice4: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Store Opening Hours and Locations',
  description: 'Read store information and answer multiple choice questions',
  instructions: 'Read information about a department store. Answer 5 multiple choice questions (A, B, or C). Time: ~9 minutes.',
  text: `Kaufhaus "Zentrum"
Ihr Einkaufszentrum im Herzen der Stadt

Öffnungszeiten:
Montag-Freitag: 9:00-20:00 Uhr
Samstag: 9:00-18:00 Uhr
Sonntag: geschlossen

Abteilungen:
- Damenmode (1. Stock)
- Herrenmode (1. Stock)
- Kinderkleidung (2. Stock)
- Schuhe (Erdgeschoss)
- Haushaltswaren (3. Stock)
- Lebensmittel (Untergeschoss)

Services:
- Kostenloser Parkplatz (2 Stunden)
- Umkleidekabinen in allen Abteilungen
- Umtausch innerhalb 30 Tagen mit Kassenbon
- Geschenkverpackung kostenlos
- Kundenkarte: 5% Rabatt auf alle Einkäufe

Zahlung: Bar, EC-Karte, Kreditkarte, Kundenkarte

Adresse: Hauptstraße 45, 10115 Berlin
Tel: 030-98765432
E-Mail: info@kaufhaus-zentrum.de`,
  questions: [] // To be converted to proper ExamQuestion objects
  // Original questions: ['Wann ist das Kaufhaus sonntags geöffnet?', 'Wo findet man Schuhe?', ...]
};

const readingPractice5: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Supermarket Information',
  description: 'Read supermarket information and answer questions',
  instructions: 'Read information about a supermarket and answer multiple choice questions.',
  text: `Supermarkt "Frisch & Gut"
Ihre Adresse für frische Lebensmittel

Öffnungszeiten:
Montag-Samstag: 7:00-21:00 Uhr
Sonntag: 9:00-20:00 Uhr

Angebote diese Woche:
- Obst und Gemüse: 20% Rabatt
- Milchprodukte: 2 für 1
- Brot und Brötchen: täglich frisch
- Bio-Produkte: große Auswahl

Services:
- Bäckerei (öffnet um 6:00 Uhr)
- Metzgerei (Mo-Sa bis 19:00 Uhr)
- Kostenloser Parkplatz
- Lieferservice (ab 30€ Einkaufswert)
- Pfandautomat

Zahlung: Bar, EC-Karte, Kreditkarte
Keine Schecks

Adresse: Berliner Straße 123
Tel: 030-11223344`,
  questions: [] // To be converted to proper ExamQuestion objects
  // Original questions: ['Wann öffnet der Supermarkt sonntags?', 'Was kostet diese Woche weniger?', ...]
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