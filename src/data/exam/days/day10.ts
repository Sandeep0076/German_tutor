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
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice2: ListeningPractice = {
  part: 2,
  title: 'Teil 2: Announcements about Special Menus or Closing Times',
  description: 'Listen to announcements in restaurants, cafes, and food venues',
  instructions: 'You will hear 4 announcements about food-related topics. Each announcement is played ONCE ONLY. Mark each statement as True (Richtig) or False (Falsch). Time: ~6 minutes.',
  questions: [] // Empty array - questions will be added with audio
};

const listeningPractice3: ListeningPractice = {
  part: 3,
  title: 'Teil 3: Phone Orders and Reservations',
  description: 'Listen to phone messages about restaurant reservations and food orders',
  instructions: 'You will hear 5 telephone messages about restaurant bookings and orders. Each message is played TWICE. Choose the correct answer (A, B, or C) for each question. Time: ~8 minutes.',
  questions: [] // Empty array - questions will be added with audio
};

// ============================================================================
// READING PRACTICE - Menus, Ads, and Food Information
// ============================================================================

const readingPractice1: ReadingPractice = {
  part: 1,
  title: 'Teil 1: Simple Menus and Price Lists',
  description: 'Read restaurant menus and answer True/False questions',
  instructions: 'Read 2 short menus (breakfast menu, drinks menu). Answer True/False questions about items and prices. Time: ~8 minutes.',
  text: `Frühstückskarte - Café Sonnenschein

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
    {
      id: 'day10-reading1-q1',
      type: 'true-false',
      question: 'Das Müsli kostet 5 Euro.',
      correctAnswer: 'Richtig',
      explanation: 'According to the menu, "Müsli mit Joghurt und Obst - 5,00 €"'
    },
    {
      id: 'day10-reading1-q2',
      type: 'true-false',
      question: 'Bei jedem Frühstück ist ein Getränk inklusive.',
      correctAnswer: 'Richtig',
      explanation: 'The menu states "Getränke (inklusive bei allen Frühstücken)"'
    },
    {
      id: 'day10-reading1-q3',
      type: 'true-false',
      question: 'Man kann nur Kaffee trinken.',
      correctAnswer: 'Falsch',
      explanation: 'The menu offers "Kaffee, Tee oder Orangensaft" - not just coffee'
    },
    {
      id: 'day10-reading1-q4',
      type: 'true-false',
      question: 'Das Frühstück ist bis 12 Uhr verfügbar.',
      correctAnswer: 'Falsch',
      explanation: 'Breakfast hours are "täglich 7:00-11:00 Uhr" - until 11:00, not 12:00'
    },
    {
      id: 'day10-reading1-q5',
      type: 'true-false',
      question: 'Ein Cappuccino kostet extra.',
      correctAnswer: 'Richtig',
      explanation: 'Cappuccino is listed under "Zusätzliche Getränke" and costs 3,00 €'
    }
  ]
};

const readingPractice2: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Restaurant Advertisements',
  description: 'Match dining needs to appropriate restaurant ads',
  instructions: 'Read 5 situations about people looking for restaurants. Match each situation to the correct advertisement (A or B). Time: ~8 minutes.',
  text: `Situation 1: Familie mit zwei kleinen Kindern sucht Restaurant mit Spielplatz.

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
    {
      id: 'day10-reading2-q1',
      type: 'multiple-choice',
      question: 'Welches Restaurant ist besser für die Familie?',
      options: ['Restaurant A (Bella Italia)', 'Restaurant B (Gourmet)'],
      correctAnswer: 0,
      explanation: 'Restaurant A has a playground for children and children\'s menu, making it better for families'
    }
  ]
};

const readingPractice3: ReadingPractice = {
  part: 2,
  title: 'Teil 2: More Restaurant Matching',
  description: 'Continue matching dining needs to restaurants',
  instructions: 'Match more situations to appropriate restaurants.',
  text: `Situation 2: Student sucht günstiges Mittagsmenü in der Nähe der Universität.

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
    {
      id: 'day10-reading3-q1',
      type: 'multiple-choice',
      question: 'Welches Restaurant ist besser für den Studenten?',
      options: ['Mensa Universität', 'Restaurant Zum Löwen'],
      correctAnswer: 0,
      explanation: 'The Mensa is cheaper (4,50€ for students), closer (directly on campus), and offers daily vegetarian options'
    }
  ]
};

const readingPractice4: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Food-Related Information Boards',
  description: 'Read information about food venues and answer multiple choice questions',
  instructions: 'Read information about a restaurant or cafe. Answer 5 multiple choice questions (A, B, or C). Time: ~9 minutes.',
  text: `Restaurant "Grüner Garten"
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
    {
      id: 'day10-reading4-q1',
      type: 'multiple-choice',
      question: 'Wann ist das Restaurant geschlossen?',
      options: ['Montags', 'Sonntags', 'Samstags'],
      correctAnswer: 0,
      explanation: 'The restaurant is closed on Mondays (Montag: Ruhetag)'
    },
    {
      id: 'day10-reading4-q2',
      type: 'multiple-choice',
      question: 'Was kostet das Mittagsmenü?',
      options: ['15 €', '8,50 €', '10 €'],
      correctAnswer: 1,
      explanation: 'The lunch menu costs 8,50 € (Mittagsmenü: 8,50 €)'
    },
    {
      id: 'day10-reading4-q3',
      type: 'multiple-choice',
      question: 'Was ist im Mittagsmenü inklusive?',
      options: ['Nur Hauptgericht', 'Suppe und Hauptgericht', 'Suppe, Hauptgericht und Salat'],
      correctAnswer: 2,
      explanation: 'The lunch menu includes soup, main course and salad (Inklusive: Suppe, Hauptgericht, Salat)'
    },
    {
      id: 'day10-reading4-q4',
      type: 'multiple-choice',
      question: 'Wann gibt es Brunch?',
      options: ['Jeden Tag', 'Samstags', 'Sonntags'],
      correctAnswer: 2,
      explanation: 'Brunch is available on Sundays (Sonntags: Brunch-Buffet)'
    },
    {
      id: 'day10-reading4-q5',
      type: 'multiple-choice',
      question: 'Was bekommt man beim Mitnehmen?',
      options: ['10% Rabatt', 'Gratis Getränk', 'Größere Portionen'],
      correctAnswer: 0,
      explanation: 'Takeaway orders get 10% discount (zum Mitnehmen: 10% Rabatt)'
    }
  ]
};

const readingPractice5: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Cafe Information',
  description: 'Read cafe information and answer questions',
  instructions: 'Read information about a cafe and answer multiple choice questions.',
  text: `Café "Kaffeehaus"
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
    {
      id: 'day10-reading5-q1',
      type: 'multiple-choice',
      question: 'Bis wann kann man frühstücken?',
      options: ['10:00 Uhr', '11:00 Uhr', '12:00 Uhr'],
      correctAnswer: 1,
      explanation: 'Breakfast is served until 11:00 (Frühstück: 8:00-11:00 Uhr)'
    },
    {
      id: 'day10-reading5-q2',
      type: 'multiple-choice',
      question: 'Was kostet der günstigste Kaffee?',
      options: ['2,00 €', '2,50 €', '3,00 €'],
      correctAnswer: 1,
      explanation: 'Coffee starts from 2,50 € (Kaffee: ab 2,50 €)'
    },
    {
      id: 'day10-reading5-q3',
      type: 'multiple-choice',
      question: 'Was gibt es den ganzen Tag?',
      options: ['Frühstück', 'Mittagstisch', 'Kaffee und Kuchen'],
      correctAnswer: 2,
      explanation: 'Coffee and cake are available all day (Kaffee und Kuchen: den ganzen Tag)'
    },
    {
      id: 'day10-reading5-q4',
      type: 'multiple-choice',
      question: 'Was ist kostenlos?',
      options: ['Kuchen', 'WLAN', 'Zeitungen'],
      correctAnswer: 1,
      explanation: 'Free WiFi is available (Kostenloses WLAN)'
    },
    {
      id: 'day10-reading5-q5',
      type: 'multiple-choice',
      question: 'Wo kann man bei gutem Wetter sitzen?',
      options: ['Drinnen', 'Draußen', 'Im Garten'],
      correctAnswer: 1,
      explanation: 'Outside seating is available in good weather (Außenplätze bei gutem Wetter)'
    }
  ]
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