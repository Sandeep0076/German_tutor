/**
 * Day 10: Listening + Reading - Food, Drinks, and Restaurant Situations
 * Focus: Restaurant dialogues, menus, food vocabulary, ordering and dining contexts
 * 
 * Skills: Listening (all 3 parts), Reading (all 3 parts)
 * Topics: Food items, drinks, restaurant phrases, menus, prices
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Food & Restaurant Contexts
// ============================================================================

const listeningPractice1: ListeningPractice = {
  part: 1,
  title: 'Teil 1: Dialogues in Restaurants and Cafes',
  description: 'Listen to conversations about ordering food and drinks',
  instructions: 'You will hear 6 short dialogues about restaurant situations. Each dialogue is played TWICE. Choose the correct answer (A, B, or C) for each question. Time: ~6 minutes.',
  audioPlaceholder: 'Audio files for restaurant dialogues would be provided in the actual exam. Practice with official Goethe materials.',
  keyVocabulary: [
    'bestellen (to order)',
    'Rechnung (bill)',
    'empfehlen (to recommend)',
    'Speisekarte (menu)',
    'Getränk (drink)',
    'Hauptgericht (main course)',
    'Vorspeise (starter)',
    'Nachtisch (dessert)'
  ]
};

const listeningPractice2: ListeningPractice = {
  part: 2,
  title: 'Teil 2: Announcements about Special Menus or Closing Times',
  description: 'Listen to announcements in restaurants, cafes, and food venues',
  instructions: 'You will hear 4 announcements about food-related topics. Each announcement is played ONCE ONLY. Mark each statement as True (Richtig) or False (Falsch). Time: ~6 minutes.',
  audioPlaceholder: 'Audio files for food venue announcements would be provided in the actual exam. Topics include: daily specials, closing times, special offers, menu changes.',
  keyVocabulary: [
    'Sonderangebot (special offer)',
    'Tagesmenü (daily menu)',
    'geschlossen (closed)',
    'geöffnet (open)',
    'reduziert (reduced)',
    'frisch (fresh)',
    'Angebot (offer)'
  ]
};

const listeningPractice3: ListeningPractice = {
  part: 3,
  title: 'Teil 3: Phone Orders and Reservations',
  description: 'Listen to phone messages about restaurant reservations and food orders',
  instructions: 'You will hear 5 telephone messages about restaurant bookings and orders. Each message is played TWICE. Choose the correct answer (A, B, or C) for each question. Time: ~8 minutes.',
  audioPlaceholder: 'Audio files for restaurant phone messages would be provided in the actual exam. Listen for: reservation times, number of people, special requests, order details.',
  keyVocabulary: [
    'Reservierung (reservation)',
    'Tisch (table)',
    'Person (person)',
    'Uhrzeit (time)',
    'abholen (to pick up)',
    'liefern (to deliver)',
    'bestätigen (to confirm)'
  ]
};

// ============================================================================
// READING PRACTICE - Menus, Ads, and Food Information
// ============================================================================

const readingPractice1: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Simple Menus and Price Lists',
  description: 'Read restaurant menus and answer True/False questions',
  instructions: 'Read 2 short menus (breakfast menu, drinks menu). Answer True/False questions about items and prices. Time: ~8 minutes.',
  sampleText: `Frühstückskarte - Café Sonnenschein

Brötchen mit Butter und Marmelade - 3,50 €
Müsli mit Joghurt und Obst - 5,00 €
Rührei mit Toast und Schinken - 6,50 €
Käsebrot mit Tomate - 4,00 €

Getränke (inklusive bei allen Frühstücken):
Kaffee, Tee oder Orangensaft

Zusätzliche Getränke:
Cappuccino - 3,00 €
Latte Macchiato - 3,50 €
Frischer Orangensaft (groß) - 4,00 €

Öffnungszeiten Frühstück: täglich 7:00-11:00 Uhr`,
  questions: [
    'Das Müsli kostet 5 Euro.',
    'Bei jedem Frühstück ist ein Getränk inklusive.',
    'Man kann nur Kaffee trinken.',
    'Das Frühstück ist bis 12 Uhr verfügbar.',
    'Ein Cappuccino kostet extra.'
  ],
  answers: ['Richtig', 'Richtig', 'Falsch', 'Falsch', 'Richtig']
};

const readingPractice2: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Restaurant Advertisements',
  description: 'Match dining needs to appropriate restaurant ads',
  instructions: 'Read 5 situations about people looking for restaurants. Match each situation to the correct advertisement (A or B). Time: ~8 minutes.',
  sampleText: `Situation 1: Familie mit zwei kleinen Kindern sucht Restaurant mit Spielplatz.

Advertisement A:
Restaurant "Bella Italia"
Italienische Küche
Große Terrasse mit Kinderspielplatz
Kindermenü: 6,50 €
Täglich 11:00-22:00 Uhr
Parkplatz vorhanden

Advertisement B:
Restaurant "Gourmet"
Französische Küche
Ruhige Atmosphäre
Nur Abendessen: 18:00-23:00 Uhr
Reservierung erforderlich
Keine Kindermenüs`,
  questions: [
    'Welches Restaurant ist besser für die Familie?'
  ],
  answers: ['A']
};

const readingPractice3: ReadingPractice = {
  part: 2,
  title: 'Teil 2: More Restaurant Matching',
  description: 'Continue matching dining needs to restaurants',
  instructions: 'Match more situations to appropriate restaurants.',
  sampleText: `Situation 2: Student sucht günstiges Mittagsmenü in der Nähe der Universität.

Advertisement A:
Mensa Universität
Mittagsmenü: 4,50 € (für Studenten)
Mo-Fr: 11:30-14:00 Uhr
Vegetarische Optionen täglich
Direkt am Campus

Advertisement B:
Restaurant "Zum Löwen"
Traditionelle deutsche Küche
Mittagsmenü: 12,50 €
Biergarten
15 Minuten von der Uni`,
  questions: [
    'Welches Restaurant ist besser für den Studenten?'
  ],
  answers: ['A']
};

const readingPractice4: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Food-Related Information Boards',
  description: 'Read information about food venues and answer multiple choice questions',
  instructions: 'Read information about a restaurant or cafe. Answer 5 multiple choice questions (A, B, or C). Time: ~9 minutes.',
  sampleText: `Restaurant "Grüner Garten"
Vegetarisches und veganes Restaurant

Öffnungszeiten:
Montag: Ruhetag
Dienstag-Freitag: 12:00-22:00 Uhr
Samstag-Sonntag: 11:00-23:00 Uhr

Mittagsmenü (Di-Fr, 12:00-14:30 Uhr): 8,50 €
Inklusive: Suppe, Hauptgericht, Salat

Besondere Angebote:
- Sonntags: Brunch-Buffet 11:00-15:00 Uhr (15 € pro Person)
- Alle Gerichte auch zum Mitnehmen (10% Rabatt)
- Glutenfreie Optionen verfügbar

Reservierung empfohlen am Wochenende
Tel: 030-12345678
E-Mail: info@gruenergarten.de`,
  questions: [
    'Wann ist das Restaurant geschlossen? A) Montags B) Sonntags C) Samstags',
    'Was kostet das Mittagsmenü? A) 15 € B) 8,50 € C) 10 €',
    'Was ist im Mittagsmenü inklusive? A) Nur Hauptgericht B) Suppe und Hauptgericht C) Suppe, Hauptgericht und Salat',
    'Wann gibt es Brunch? A) Jeden Tag B) Samstags C) Sonntags',
    'Was bekommt man beim Mitnehmen? A) 10% Rabatt B) Gratis Getränk C) Größere Portionen'
  ],
  answers: ['A', 'B', 'C', 'C', 'A']
};

const readingPractice5: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Cafe Information',
  description: 'Read cafe information and answer questions',
  instructions: 'Read information about a cafe and answer multiple choice questions.',
  sampleText: `Café "Kaffeehaus"
Ihr gemütliches Café im Stadtzentrum

Öffnungszeiten:
Täglich: 8:00-20:00 Uhr

Frühstück: 8:00-11:00 Uhr
Mittagstisch: 12:00-15:00 Uhr
Kaffee und Kuchen: den ganzen Tag

Preise:
Kaffee: ab 2,50 €
Kuchen: ab 3,00 € (hausgemacht)
Frühstück: ab 5,50 €
Mittagsmenü: 7,90 €

Besonderheiten:
- Kostenloses WLAN
- Zeitungen und Zeitschriften
- Außenplätze (bei gutem Wetter)
- Alle Kuchen hausgemacht
- Laktosefreie Milch verfügbar`,
  questions: [
    'Bis wann kann man frühstücken? A) 10:00 Uhr B) 11:00 Uhr C) 12:00 Uhr',
    'Was kostet der günstigste Kaffee? A) 2,00 € B) 2,50 € C) 3,00 €',
    'Was gibt es den ganzen Tag? A) Frühstück B) Mittagstisch C) Kaffee und Kuchen',
    'Was ist kostenlos? A) Kuchen B) WLAN C) Zeitungen',
    'Wo kann man bei gutem Wetter sitzen? A) Drinnen B) Draußen C) Im Garten'
  ],
  answers: ['B', 'B', 'C', 'B', 'B']
};

// ============================================================================
// VOCABULARY THEME - Food & Drinks
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Food & Drinks (Essen & Trinken)',
  items: [
    // Breakfast Items
    {
      german: 'das Brot',
      english: 'bread',
      example: 'Ich esse Brot zum Frühstück.'
    },
    {
      german: 'das Brötchen',
      english: 'bread roll',
      example: 'Zwei Brötchen, bitte.'
    },
    {
      german: 'die Butter',
      english: 'butter',
      example: 'Brötchen mit Butter.'
    },
    {
      german: 'die Marmelade',
      english: 'jam',
      example: 'Ich mag Erdbeermarmelade.'
    },
    {
      german: 'der Honig',
      english: 'honey',
      example: 'Brot mit Honig.'
    },
    {
      german: 'das Ei / die Eier',
      english: 'egg/eggs',
      example: 'Ich hätte gern zwei Eier.'
    },
    {
      german: 'das Müsli',
      english: 'muesli/cereal',
      example: 'Müsli mit Milch.'
    },
    {
      german: 'der Joghurt',
      english: 'yogurt',
      example: 'Joghurt mit Obst.'
    },
    {
      german: 'der Käse',
      english: 'cheese',
      example: 'Brot mit Käse.'
    },
    {
      german: 'die Wurst',
      english: 'sausage',
      example: 'Brötchen mit Wurst.'
    },
    {
      german: 'der Schinken',
      english: 'ham',
      example: 'Schinken und Käse.'
    },
    // Main Meals
    {
      german: 'das Fleisch',
      english: 'meat',
      example: 'Ich esse kein Fleisch.'
    },
    {
      german: 'das Hähnchen',
      english: 'chicken',
      example: 'Hähnchen mit Reis.'
    },
    {
      german: 'der Fisch',
      english: 'fish',
      example: 'Ich esse gern Fisch.'
    },
    {
      german: 'das Gemüse',
      english: 'vegetables',
      example: 'Viel Gemüse ist gesund.'
    },
    {
      german: 'die Kartoffel',
      english: 'potato',
      example: 'Kartoffeln mit Butter.'
    },
    {
      german: 'der Reis',
      english: 'rice',
      example: 'Hähnchen mit Reis.'
    },
    {
      german: 'die Nudeln',
      english: 'pasta/noodles',
      example: 'Nudeln mit Tomatensoße.'
    },
    {
      german: 'die Pommes',
      english: 'french fries',
      example: 'Burger mit Pommes.'
    },
    {
      german: 'der Salat',
      english: 'salad',
      example: 'Einen grünen Salat, bitte.'
    },
    {
      german: 'die Suppe',
      english: 'soup',
      example: 'Tomatensuppe als Vorspeise.'
    },
    {
      german: 'die Pizza',
      english: 'pizza',
      example: 'Eine Pizza Margherita.'
    },
    // Drinks
    {
      german: 'das Wasser',
      english: 'water',
      example: 'Ein Glas Wasser, bitte.'
    },
    {
      german: 'das Mineralwasser',
      english: 'mineral water',
      example: 'Mineralwasser mit Kohlensäure.'
    },
    {
      german: 'der Kaffee',
      english: 'coffee',
      example: 'Einen Kaffee, bitte.'
    },
    {
      german: 'der Tee',
      english: 'tea',
      example: 'Schwarzer Tee mit Zitrone.'
    },
    {
      german: 'die Milch',
      english: 'milk',
      example: 'Kaffee mit Milch.'
    },
    {
      german: 'der Saft',
      english: 'juice',
      example: 'Orangensaft zum Frühstück.'
    },
    {
      german: 'der Orangensaft',
      english: 'orange juice',
      example: 'Frischer Orangensaft.'
    },
    {
      german: 'die Limonade',
      english: 'lemonade/soda',
      example: 'Eine Cola, bitte.'
    },
    {
      german: 'das Bier',
      english: 'beer',
      example: 'Ein Bier vom Fass.'
    },
    {
      german: 'der Wein',
      english: 'wine',
      example: 'Ein Glas Rotwein.'
    },
    // Desserts
    {
      german: 'der Kuchen',
      english: 'cake',
      example: 'Ein Stück Kuchen, bitte.'
    },
    {
      german: 'das Eis',
      english: 'ice cream',
      example: 'Schokoladeneis.'
    },
    {
      german: 'die Schokolade',
      english: 'chocolate',
      example: 'Heiße Schokolade.'
    },
    {
      german: 'das Obst',
      english: 'fruit',
      example: 'Frisches Obst.'
    },
    {
      german: 'der Apfel',
      english: 'apple',
      example: 'Ein Apfel am Tag.'
    },
    {
      german: 'die Banane',
      english: 'banana',
      example: 'Bananen sind gesund.'
    },
    // Adjectives
    {
      german: 'warm',
      english: 'warm',
      example: 'Die Suppe ist warm.'
    },
    {
      german: 'kalt',
      english: 'cold',
      example: 'Das Wasser ist kalt.'
    },
    {
      german: 'heiß',
      english: 'hot',
      example: 'Der Kaffee ist heiß.'
    },
    {
      german: 'süß',
      english: 'sweet',
      example: 'Der Kuchen ist süß.'
    },
    {
      german: 'salzig',
      english: 'salty',
      example: 'Die Pommes sind salzig.'
    },
    {
      german: 'lecker',
      english: 'delicious/tasty',
      example: 'Das Essen ist lecker!'
    },
    {
      german: 'frisch',
      english: 'fresh',
      example: 'Frisches Brot.'
    },
    {
      german: 'vegetarisch',
      english: 'vegetarian',
      example: 'Ich esse vegetarisch.'
    },
    // Restaurant Verbs
    {
      german: 'bestellen',
      english: 'to order',
      example: 'Ich möchte bestellen.'
    },
    {
      german: 'essen',
      english: 'to eat',
      example: 'Was essen Sie gern?'
    },
    {
      german: 'trinken',
      english: 'to drink',
      example: 'Was trinken Sie?'
    },
    {
      german: 'bezahlen',
      english: 'to pay',
      example: 'Ich möchte bezahlen.'
    },
    {
      german: 'schmecken',
      english: 'to taste',
      example: 'Das schmeckt gut!'
    },
    {
      german: 'kosten',
      english: 'to cost',
      example: 'Was kostet das Menü?'
    },
    {
      german: 'nehmen',
      english: 'to take',
      example: 'Ich nehme die Pizza.'
    },
    {
      german: 'empfehlen',
      english: 'to recommend',
      example: 'Was empfehlen Sie?'
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
  focus: 'Food, drinks, and restaurant situations - Listening to restaurant dialogues and announcements, reading menus and food-related information'
};

export default day10;