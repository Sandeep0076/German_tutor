/**
 * Day 13: Writing + Speaking - Transactions and Comparisons
 * Focus: Writing about shopping experiences, asking for products, speaking about purchases
 * 
 * Skills: Writing (Teil 2), Speaking (all 3 parts)
 * Topics: Shopping experiences, product inquiries, transactions, colors, sizes, prices
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// WRITING PRACTICE - Shopping Experiences and Inquiries
// ============================================================================

const writingPractice1: WritingPractice = {
  part: 2,
  title: 'Teil 2: Write about Shopping Experiences',
  description: 'Describe a recent shopping trip or purchase',
  instructions: 'Write about your last shopping experience. Include what you bought, where, and how much it cost. Write about 30-40 words. Time: ~15 minutes.',
  prompt: `Schreibe über deinen letzten Einkauf. Schreibe zu jedem Punkt ein bis zwei Sätze:
- Was hast du gekauft?
- Wo hast du eingekauft?
- Wie viel hat es gekostet?`,
  sampleAnswer: `Gestern war ich im Kaufhaus und habe eine neue Jacke gekauft.
Die Jacke ist blau und hat Größe 40. Sie war im Angebot und hat nur 45 Euro gekostet.
Ich habe auch noch ein T-Shirt gekauft. Das war sehr günstig.`,
  keyPhrases: [
    'Ich habe... gekauft.',
    'Ich war im/in der...',
    'Das hat... Euro gekostet.',
    'Es war im Angebot.',
    'Das war günstig/teuer.',
    'Ich habe... bezahlt.'
  ]
};

const writingPractice2: WritingPractice = {
  part: 2,
  title: 'Teil 2: Ask for Product Information',
  description: 'Write to a store asking about product availability',
  instructions: 'You want to buy a specific item. Write to the store asking about it. Write 1-2 sentences for each point (~35 words total). Time: ~15 minutes.',
  prompt: `Du möchtest eine Jacke kaufen. Schreibe an das Geschäft:
- Welche Jacke suchst du? (Farbe, Größe)
- Wie viel darf sie kosten?
- Wann kannst du ins Geschäft kommen?`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich suche eine schwarze Jacke in Größe 38 für den Winter.
Die Jacke sollte nicht mehr als 80 Euro kosten. Haben Sie so eine Jacke?
Ich kann morgen Nachmittag ins Geschäft kommen.

Mit freundlichen Grüßen
Lisa Müller`,
  keyPhrases: [
    'Ich suche...',
    'Haben Sie...?',
    'in Größe...',
    'in der Farbe...',
    'nicht mehr als... Euro',
    'Ist das verfügbar?',
    'Wann kann ich kommen?'
  ]
};

const writingPractice3: WritingPractice = {
  part: 2,
  title: 'Teil 2: Respond to Store Advertisement',
  description: 'Write a response to a store sale advertisement',
  instructions: 'You saw an advertisement for a sale. Write to the store with questions. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Du hast eine Werbung für einen Schlussverkauf gesehen. Schreibe an das Geschäft:
- Was interessiert dich?
- Wie viel Rabatt gibt es?
- Bis wann ist der Verkauf?`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich habe Ihre Werbung gesehen. Ich interessiere mich für die Schuhe.
Wie viel Rabatt gibt es auf Schuhe? Bis wann läuft der Schlussverkauf?

Vielen Dank!
Mit freundlichen Grüßen
Tom Schmidt`,
  keyPhrases: [
    'Ich habe Ihre Werbung gesehen.',
    'Ich interessiere mich für...',
    'Wie viel Rabatt gibt es?',
    'Bis wann...?',
    'Gibt es noch...?',
    'Sind die Preise reduziert?'
  ]
};

// ============================================================================
// SPEAKING PRACTICE - Shopping and Transactions
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: 'Teil 1: Practice Buying Items in a Shop',
  description: 'Learn to make purchases confidently',
  instructions: 'Practice buying items in different types of shops. Ask about products, sizes, colors, and prices. Time: ~3 minutes.',
  prompts: [
    'Sie sind im Kleidungsgeschäft. Was suchen Sie?',
    'Welche Größe brauchen Sie?',
    'Welche Farbe möchten Sie?',
    'Möchten Sie das anprobieren?',
    'Wie möchten Sie bezahlen?'
  ],
  sampleResponses: [
    'Guten Tag! Ich suche eine Jacke für den Winter.',
    'Ich habe Größe 40. Haben Sie die Jacke in Größe 40?',
    'Ich möchte die Jacke in Schwarz oder Blau.',
    'Ja, gerne. Wo sind die Umkleidekabinen?',
    'Ich bezahle mit Karte, bitte.'
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Ask about Prices, Sizes, and Colors',
  description: 'Practice asking detailed questions about products',
  instructions: 'Ask and answer questions about products in a shop. Include questions about availability, sizes, colors, and prices. Time: ~3 minutes.',
  prompts: [
    'Was kostet diese Hose?',
    'Haben Sie das in Größe 42?',
    'Welche Farben gibt es?',
    'Gibt es Rabatt?',
    'Kann ich das umtauschen?',
    'Wo ist die Kasse?'
  ],
  sampleResponses: [
    'Die Hose kostet 45 Euro. Sie ist heute im Angebot.',
    'Ja, wir haben Größe 42. Möchten Sie die Hose anprobieren?',
    'Wir haben die Hose in Schwarz, Blau und Grau.',
    'Ja, heute gibt es 20% Rabatt auf alle Hosen.',
    'Ja, Sie können das innerhalb von 14 Tagen mit Kassenbon umtauschen.',
    'Die Kasse ist dort hinten, neben dem Ausgang.'
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Make Shopping Requests',
  description: 'Practice making polite requests when shopping',
  instructions: 'Make polite requests in shopping situations. Ask to try on items, request different sizes or colors, and ask for help. Time: ~4 minutes.',
  prompts: [
    'Sie möchten eine Jacke anprobieren.',
    'Sie brauchen eine andere Größe.',
    'Sie suchen eine andere Farbe.',
    'Sie möchten den Preis wissen.',
    'Sie möchten bezahlen.'
  ],
  sampleResponses: [
    'Entschuldigung, kann ich diese Jacke anprobieren? Wo sind die Umkleidekabinen?',
    'Diese Größe ist zu klein. Haben Sie das auch in Größe 42?',
    'Haben Sie diesen Pullover auch in Rot oder Grün?',
    'Entschuldigung, wie viel kostet dieser Rock?',
    'Ich möchte bezahlen, bitte. Wo ist die Kasse?'
  ]
};

const speakingPractice4: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Complete Shopping Dialogues',
  description: 'Practice full conversations in shops',
  instructions: 'Practice complete dialogues with shop assistants. Include greetings, requests, questions, and payment. Time: ~4 minutes.',
  prompts: [
    'Dialogue 1: In a clothing store',
    'Dialogue 2: Asking about sizes',
    'Dialogue 3: Trying on clothes',
    'Dialogue 4: At the checkout'
  ],
  sampleResponses: [
    'Verkäufer: Kann ich Ihnen helfen? - Sie: Ja, ich suche eine Jacke in Größe 40.',
    'Sie: Haben Sie das auch in Größe 38? - Verkäufer: Ja, einen Moment bitte. Hier ist Größe 38.',
    'Sie: Kann ich das anprobieren? - Verkäufer: Ja, natürlich. Die Umkleidekabinen sind dort.',
    'Sie: Ich nehme die Jacke. Was kostet sie? - Verkäufer: 65 Euro. Bar oder mit Karte?'
  ]
};

const speakingPractice5: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Talk about Shopping Preferences',
  description: 'Discuss where and what you like to shop for',
  instructions: 'Answer questions about your shopping habits and preferences. Give detailed answers about where you shop and what you buy. Time: ~3 minutes.',
  prompts: [
    'Wo kaufen Sie gern ein?',
    'Was kaufen Sie oft?',
    'Kaufen Sie gern Kleidung?',
    'Wie oft gehen Sie einkaufen?',
    'Bezahlen Sie lieber bar oder mit Karte?'
  ],
  sampleResponses: [
    'Ich kaufe gern im Kaufhaus ein. Dort gibt es alles und die Preise sind gut.',
    'Ich kaufe oft Kleidung und Schuhe. Manchmal kaufe ich auch Bücher.',
    'Ja, ich kaufe sehr gern Kleidung. Besonders Jacken und Pullover.',
    'Ich gehe einmal pro Woche einkaufen, meistens am Samstag.',
    'Ich bezahle lieber mit Karte. Das ist einfacher und schneller.'
  ]
};

// ============================================================================
// VOCABULARY THEME - Colors, Sizes, Numbers for Prices
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Colors, Sizes, Numbers for Prices (Farben, Größen, Zahlen für Preise)',
  items: [
    // All Basic Colors
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
    {
      german: 'rosa',
      english: 'pink',
      example: 'Eine rosa Bluse.'
    },
    {
      german: 'orange',
      english: 'orange',
      example: 'Ein oranges T-Shirt.'
    },
    {
      german: 'lila',
      english: 'purple',
      example: 'Ein lila Rock.'
    },
    // Size Vocabulary
    {
      german: 'klein',
      english: 'small',
      example: 'Das ist zu klein.'
    },
    {
      german: 'mittel',
      english: 'medium',
      example: 'Ich brauche mittel.'
    },
    {
      german: 'groß',
      english: 'large',
      example: 'Haben Sie das in groß?'
    },
    {
      german: 'die Größe',
      english: 'size',
      example: 'Welche Größe haben Sie?'
    },
    {
      german: 'Größe 38, 40, 42',
      english: 'size 38, 40, 42',
      example: 'Ich habe Größe 40.'
    },
    {
      german: 'zu klein',
      english: 'too small',
      example: 'Diese Hose ist zu klein.'
    },
    {
      german: 'zu groß',
      english: 'too big',
      example: 'Der Pullover ist zu groß.'
    },
    {
      german: 'passt',
      english: 'fits',
      example: 'Das passt perfekt!'
    },
    {
      german: 'passt nicht',
      english: 'doesn\'t fit',
      example: 'Das passt leider nicht.'
    },
    // Numbers for Prices (1-1000)
    {
      german: 'der Euro',
      english: 'euro',
      example: 'Das kostet 50 Euro.'
    },
    {
      german: 'der Cent',
      english: 'cent',
      example: '2 Euro und 50 Cent.'
    },
    {
      german: 'zehn Euro',
      english: 'ten euros',
      example: 'Das T-Shirt kostet zehn Euro.'
    },
    {
      german: 'zwanzig Euro',
      english: 'twenty euros',
      example: 'Die Hose kostet zwanzig Euro.'
    },
    {
      german: 'fünfzig Euro',
      english: 'fifty euros',
      example: 'Die Jacke kostet fünfzig Euro.'
    },
    {
      german: 'hundert Euro',
      english: 'one hundred euros',
      example: 'Der Mantel kostet hundert Euro.'
    },
    // Price Expressions
    {
      german: 'kostet',
      english: 'costs',
      example: 'Was kostet das?'
    },
    {
      german: 'teuer',
      english: 'expensive',
      example: 'Das ist zu teuer.'
    },
    {
      german: 'billig',
      english: 'cheap',
      example: 'Das ist sehr billig.'
    },
    {
      german: 'günstig',
      english: 'affordable/good value',
      example: 'Das ist günstig.'
    },
    {
      german: 'im Angebot',
      english: 'on sale',
      example: 'Die Schuhe sind im Angebot.'
    },
    {
      german: 'reduziert',
      english: 'reduced',
      example: 'Alle Jacken sind reduziert.'
    },
    {
      german: 'der Rabatt',
      english: 'discount',
      example: '20% Rabatt auf alles.'
    },
    {
      german: 'Prozent',
      english: 'percent',
      example: '30 Prozent Rabatt.'
    },
    // Payment Terms
    {
      german: 'bezahlen',
      english: 'to pay',
      example: 'Ich möchte bezahlen.'
    },
    {
      german: 'bar bezahlen',
      english: 'to pay cash',
      example: 'Ich bezahle bar.'
    },
    {
      german: 'mit Karte bezahlen',
      english: 'to pay by card',
      example: 'Kann ich mit Karte bezahlen?'
    },
    {
      german: 'das Bargeld',
      english: 'cash',
      example: 'Ich habe kein Bargeld.'
    },
    {
      german: 'die Karte',
      english: 'card',
      example: 'Ich bezahle mit Karte.'
    },
    {
      german: 'die Rechnung',
      english: 'bill/invoice',
      example: 'Kann ich eine Rechnung haben?'
    },
    {
      german: 'die Quittung',
      english: 'receipt',
      example: 'Ich brauche eine Quittung.'
    },
    {
      german: 'der Kassenbon',
      english: 'receipt',
      example: 'Hier ist Ihr Kassenbon.'
    },
    // Shopping Actions
    {
      german: 'kaufen',
      english: 'to buy',
      example: 'Ich möchte das kaufen.'
    },
    {
      german: 'verkaufen',
      english: 'to sell',
      example: 'Verkaufen Sie Schuhe?'
    },
    {
      german: 'suchen',
      english: 'to look for',
      example: 'Ich suche eine Jacke.'
    },
    {
      german: 'finden',
      english: 'to find',
      example: 'Wo finde ich Pullover?'
    },
    {
      german: 'anprobieren',
      english: 'to try on',
      example: 'Kann ich das anprobieren?'
    },
    {
      german: 'umtauschen',
      english: 'to exchange',
      example: 'Kann ich das umtauschen?'
    },
    {
      german: 'zurückgeben',
      english: 'to return',
      example: 'Ich möchte das zurückgeben.'
    },
    // Useful Shopping Phrases
    {
      german: 'Ich hätte gern...',
      english: 'I would like...',
      example: 'Ich hätte gern eine Jacke.'
    },
    {
      german: 'Ich suche...',
      english: 'I\'m looking for...',
      example: 'Ich suche schwarze Schuhe.'
    },
    {
      german: 'Haben Sie...?',
      english: 'Do you have...?',
      example: 'Haben Sie das in Größe 40?'
    },
    {
      german: 'Wie viel kostet...?',
      english: 'How much does... cost?',
      example: 'Wie viel kostet diese Hose?'
    },
    {
      german: 'Das nehme ich.',
      english: 'I\'ll take that.',
      example: 'Ja, das passt. Das nehme ich.'
    },
    {
      german: 'Das ist zu teuer.',
      english: 'That\'s too expensive.',
      example: 'Nein danke, das ist mir zu teuer.'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day13: ExamDay = {
  day: 13,
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
  focus: 'Transactions and comparisons - Writing about shopping experiences, asking for product information, and speaking about purchases and preferences'
};

export default day13;