/**
 * Day 11: Writing + Speaking - Ordering and Expressing Preferences
 * Focus: Writing about food preferences, ordering in restaurants, expressing likes/dislikes
 * 
 * Skills: Writing (Teil 2), Speaking (all 3 parts)
 * Topics: Food preferences, restaurant ordering, invitation responses
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// WRITING PRACTICE - Food Preferences and Restaurant Communication
// ============================================================================

const writingPractice1: WritingPractice = {
  part: 2,
  title: 'Teil 2: Write about Your Favorite Foods',
  description: 'Describe your food preferences and eating habits',
  instructions: 'Write about your favorite foods. Include what you like to eat, what you don\'t like, and when/where you eat. Write about 30-40 words. Time: ~15 minutes.',
  prompt: `Schreibe über dein Lieblingsessen. Schreibe zu jedem Punkt ein bis zwei Sätze:
- Was isst du gern?
- Was magst du nicht?
- Wann und wo isst du am liebsten?`,
  sampleAnswer: `Mein Lieblingsessen ist Pizza. Ich esse sehr gern italienisches Essen.
Zum Frühstück esse ich Brötchen mit Marmelade und trinke Kaffee.
Ich mag kein Fleisch, aber ich esse gern Fisch und Gemüse.
Am Wochenende gehe ich oft ins Restaurant.`,
  keyPhrases: [
    'Mein Lieblingsessen ist...',
    'Ich esse gern...',
    'Ich mag... (nicht)',
    'Zum Frühstück/Mittagessen/Abendessen esse ich...',
    'Ich esse oft/manchmal/nie...',
    'Am liebsten esse ich...'
  ]
};

const writingPractice2: WritingPractice = {
  part: 2,
  title: 'Teil 2: Accept/Decline Dinner Invitation',
  description: 'Respond to an invitation to eat out or dine at someone\'s home',
  instructions: 'Your friend Maria invites you to dinner. Write to Maria. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Deine Freundin Maria lädt dich zum Abendessen ein. Schreibe an Maria:
- Kannst du kommen?
- Warum (nicht)?
- Was möchtest du wissen oder mitbringen?`,
  sampleAnswer: `Liebe Maria,

vielen Dank für die Einladung zum Abendessen! Ja, ich komme sehr gerne.
Italienisches Essen mag ich besonders. Soll ich einen Salat oder Wein mitbringen?

Bis Freitag!
Viele Grüße
Anna`,
  keyPhrases: [
    'Vielen Dank für die Einladung!',
    'Ja, ich komme gerne!',
    'Leider kann ich nicht kommen.',
    'Soll ich... mitbringen?',
    'Was soll ich mitbringen?',
    'Ich freue mich darauf!'
  ]
};

const writingPractice3: WritingPractice = {
  part: 2,
  title: 'Teil 2: Ask about Restaurant Recommendations',
  description: 'Request information about restaurants or places to eat',
  instructions: 'You are looking for a good Italian restaurant. Write to the tourist information office. Write 1-2 sentences for each point (~35 words total). Time: ~15 minutes.',
  prompt: `Du suchst ein gutes italienisches Restaurant. Schreibe an die Tourist-Information:
- Was für ein Restaurant suchst du?
- Wann möchtest du essen gehen?
- Was möchtest du noch wissen?`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich suche ein gutes italienisches Restaurant in der Nähe vom Bahnhof.
Ich möchte am Samstag Abend essen gehen. Können Sie ein Restaurant empfehlen?
Wie viel kostet ein Hauptgericht ungefähr?

Vielen Dank!
Mit freundlichen Grüßen
Max Schmidt`,
  keyPhrases: [
    'Ich suche ein... Restaurant.',
    'Können Sie ein Restaurant empfehlen?',
    'Gibt es... in der Nähe?',
    'Wie viel kostet...?',
    'Brauche ich eine Reservierung?',
    'Ist das Restaurant gut?'
  ]
};

// ============================================================================
// SPEAKING PRACTICE - Ordering and Expressing Preferences
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: 'Teil 1: Practice Ordering in a Restaurant/Cafe',
  description: 'Learn to order food and drinks confidently',
  instructions: 'Practice ordering food and drinks in a restaurant or cafe. Use polite phrases and specify what you want. Time: ~3 minutes.',
  prompts: [
    'Was möchten Sie bestellen?',
    'Möchten Sie eine Vorspeise?',
    'Was möchten Sie trinken?',
    'Möchten Sie einen Nachtisch?',
    'Möchten Sie die Rechnung?'
  ],
  sampleResponses: [
    'Guten Tag! Ich hätte gern einen Kaffee und ein Stück Kuchen, bitte.',
    'Ich nehme die Tomatensuppe als Vorspeise und dann die Pizza Margherita.',
    'Ein Mineralwasser, bitte. Mit Kohlensäure.',
    'Ja, ich nehme ein Eis. Schokolade, bitte.',
    'Ja, die Rechnung, bitte. Kann ich mit Karte bezahlen?'
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Express Likes and Dislikes about Food',
  description: 'Talk about your food preferences',
  instructions: 'Answer questions about what you like and don\'t like to eat and drink. Give complete answers with reasons if possible. Time: ~3 minutes.',
  prompts: [
    'Was essen Sie gern?',
    'Mögen Sie Fisch?',
    'Trinken Sie Kaffee?',
    'Essen Sie Fleisch?',
    'Was mögen Sie nicht?',
    'Was ist Ihr Lieblingsessen?'
  ],
  sampleResponses: [
    'Ich esse gern Pizza und Pasta. Italienisches Essen schmeckt mir sehr gut.',
    'Ja, ich mag Fisch sehr. Ich esse ihn zweimal pro Woche.',
    'Ja, ich trinke jeden Morgen Kaffee. Ohne Kaffee kann ich nicht arbeiten!',
    'Nein, ich esse kein Fleisch. Ich bin Vegetarier.',
    'Ich mag keine Zwiebeln. Sie schmecken mir nicht.',
    'Mein Lieblingsessen ist Pizza Margherita. Die esse ich sehr gern!'
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Make Requests for Food Items',
  description: 'Practice asking for food politely in different situations',
  instructions: 'Make polite requests for food and drinks in various situations (restaurant, cafe, bakery, etc.). Time: ~4 minutes.',
  prompts: [
    'Sie sind im Café. Was möchten Sie?',
    'Sie sind in der Bäckerei. Was kaufen Sie?',
    'Sie sind im Restaurant. Was bestellen Sie?',
    'Sie möchten die Speisekarte sehen.',
    'Sie möchten bezahlen.'
  ],
  sampleResponses: [
    'Guten Tag! Ich hätte gern einen Cappuccino und ein Stück Apfelkuchen, bitte.',
    'Guten Morgen! Ich möchte zwei Brötchen und ein Brot, bitte.',
    'Ich nehme die Suppe als Vorspeise und dann das Hähnchen mit Reis, bitte.',
    'Entschuldigung, kann ich bitte die Speisekarte haben?',
    'Die Rechnung, bitte! Kann ich mit Karte bezahlen?'
  ]
};

const speakingPractice4: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Restaurant Dialogue Practice',
  description: 'Complete dialogues in restaurant situations',
  instructions: 'Practice complete dialogues with a waiter or in a cafe. Make requests, ask questions, and respond appropriately. Time: ~4 minutes.',
  prompts: [
    'Dialogue 1: Ordering in a restaurant',
    'Dialogue 2: Asking for recommendations',
    'Dialogue 3: Making special requests',
    'Dialogue 4: Asking for the bill'
  ],
  sampleResponses: [
    'Kellner: Guten Tag! Was möchten Sie? - Sie: Guten Tag! Ich hätte gern die Pizza Margherita und ein Wasser, bitte.',
    'Sie: Was empfehlen Sie? - Kellner: Der Fisch ist sehr frisch heute. - Sie: Gut, dann nehme ich den Fisch.',
    'Sie: Ich hätte gern die Pizza, aber ohne Zwiebeln, bitte. - Kellner: Kein Problem. Möchten Sie extra Käse?',
    'Sie: Die Rechnung, bitte! - Kellner: Zusammen oder getrennt? - Sie: Zusammen, bitte.'
  ]
};

const speakingPractice5: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Talk about Eating Habits',
  description: 'Discuss your daily eating routine and preferences',
  instructions: 'Answer questions about when, where, and what you eat. Give detailed answers about your eating habits. Time: ~3 minutes.',
  prompts: [
    'Was essen Sie zum Frühstück?',
    'Wo essen Sie zu Mittag?',
    'Kochen Sie gern?',
    'Gehen Sie oft ins Restaurant?',
    'Was trinken Sie gern?'
  ],
  sampleResponses: [
    'Zum Frühstück esse ich Brötchen mit Marmelade und trinke Kaffee. Manchmal esse ich auch Müsli.',
    'Ich esse zu Mittag in der Mensa. Das Essen ist gut und nicht teuer.',
    'Ja, ich koche sehr gern! Am Wochenende koche ich oft für meine Familie.',
    'Ja, ich gehe oft ins Restaurant. Besonders gern gehe ich zu italienischen Restaurants.',
    'Ich trinke gern Kaffee und Wasser. Abends trinke ich manchmal auch ein Glas Wein.'
  ]
};

// ============================================================================
// VOCABULARY THEME - Restaurant Phrases & Food Verbs
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Restaurant Phrases & Food Verbs (Restaurantphrasen & Essensverben)',
  items: [
    // Ordering Phrases
    {
      german: 'Ich möchte bestellen.',
      english: 'I would like to order.',
      example: 'Entschuldigung, ich möchte bestellen.'
    },
    {
      german: 'Ich hätte gern...',
      english: 'I would like...',
      example: 'Ich hätte gern eine Pizza.'
    },
    {
      german: 'Ich nehme...',
      english: 'I\'ll take...',
      example: 'Ich nehme das Schnitzel.'
    },
    {
      german: 'Für mich...',
      english: 'For me...',
      example: 'Für mich einen Kaffee, bitte.'
    },
    {
      german: 'Als Vorspeise...',
      english: 'As a starter...',
      example: 'Als Vorspeise nehme ich die Suppe.'
    },
    {
      german: 'Als Hauptgericht...',
      english: 'As a main course...',
      example: 'Als Hauptgericht möchte ich den Fisch.'
    },
    {
      german: 'Zum Nachtisch...',
      english: 'For dessert...',
      example: 'Zum Nachtisch nehme ich Eis.'
    },
    // Asking Phrases
    {
      german: 'Was empfehlen Sie?',
      english: 'What do you recommend?',
      example: 'Was empfehlen Sie heute?'
    },
    {
      german: 'Haben Sie...?',
      english: 'Do you have...?',
      example: 'Haben Sie vegetarische Gerichte?'
    },
    {
      german: 'Wie viel kostet...?',
      english: 'How much does... cost?',
      example: 'Wie viel kostet das Menü?'
    },
    {
      german: 'Ist das vegetarisch?',
      english: 'Is that vegetarian?',
      example: 'Ist das Gericht vegetarisch?'
    },
    {
      german: 'Ist das scharf?',
      english: 'Is that spicy?',
      example: 'Ist die Suppe scharf?'
    },
    {
      german: 'Die Rechnung, bitte.',
      english: 'The bill, please.',
      example: 'Entschuldigung, die Rechnung, bitte.'
    },
    // Food Verbs - essen (to eat)
    {
      german: 'ich esse',
      english: 'I eat',
      example: 'Ich esse gern Pizza.'
    },
    {
      german: 'du isst',
      english: 'you eat',
      example: 'Was isst du gern?'
    },
    {
      german: 'er/sie/es isst',
      english: 'he/she/it eats',
      example: 'Sie isst kein Fleisch.'
    },
    // Food Verbs - trinken (to drink)
    {
      german: 'ich trinke',
      english: 'I drink',
      example: 'Ich trinke Kaffee.'
    },
    {
      german: 'du trinkst',
      english: 'you drink',
      example: 'Was trinkst du?'
    },
    {
      german: 'er/sie/es trinkt',
      english: 'he/she/it drinks',
      example: 'Er trinkt Wasser.'
    },
    // Other Food Verbs
    {
      german: 'bestellen',
      english: 'to order',
      example: 'Ich möchte bestellen.'
    },
    {
      german: 'schmecken',
      english: 'to taste',
      example: 'Das schmeckt sehr gut!'
    },
    {
      german: 'es schmeckt mir',
      english: 'I like it (taste)',
      example: 'Pizza schmeckt mir sehr gut.'
    },
    {
      german: 'mögen',
      english: 'to like',
      example: 'Ich mag Pizza.'
    },
    {
      german: 'kosten',
      english: 'to cost',
      example: 'Was kostet das?'
    },
    // Table Conversation
    {
      german: 'Guten Appetit!',
      english: 'Enjoy your meal!',
      example: 'Guten Appetit! - Danke, gleichfalls!'
    },
    {
      german: 'Prost! / Zum Wohl!',
      english: 'Cheers!',
      example: 'Prost! Auf deine Gesundheit!'
    },
    {
      german: 'Das war sehr lecker!',
      english: 'That was very delicious!',
      example: 'Das Essen war sehr lecker!'
    },
    {
      german: 'Zusammen oder getrennt?',
      english: 'Together or separate?',
      example: 'Möchten Sie zusammen oder getrennt bezahlen?'
    },
    {
      german: 'Stimmt so.',
      english: 'Keep the change.',
      example: 'Das macht 18 Euro. - Hier sind 20. Stimmt so.'
    },
    // Payment
    {
      german: 'Kann ich mit Karte bezahlen?',
      english: 'Can I pay by card?',
      example: 'Kann ich mit Kreditkarte bezahlen?'
    },
    {
      german: 'Bar oder mit Karte?',
      english: 'Cash or card?',
      example: 'Wie möchten Sie bezahlen? Bar oder mit Karte?'
    },
    {
      german: 'Das macht... Euro.',
      english: 'That\'s... euros.',
      example: 'Das macht 25 Euro, bitte.'
    },
    // Preferences
    {
      german: 'Ich esse gern...',
      english: 'I like to eat...',
      example: 'Ich esse gern italienisches Essen.'
    },
    {
      german: 'Ich trinke gern...',
      english: 'I like to drink...',
      example: 'Ich trinke gern Kaffee.'
    },
    {
      german: 'Ich mag... nicht.',
      english: 'I don\'t like...',
      example: 'Ich mag Zwiebeln nicht.'
    },
    {
      german: 'Mein Lieblingsessen ist...',
      english: 'My favorite food is...',
      example: 'Mein Lieblingsessen ist Pizza.'
    },
    // Special Requests
    {
      german: 'Ohne... bitte.',
      english: 'Without... please.',
      example: 'Ohne Zwiebeln, bitte.'
    },
    {
      german: 'Mit... bitte.',
      english: 'With... please.',
      example: 'Mit extra Käse, bitte.'
    },
    {
      german: 'Ich bin allergisch gegen...',
      english: 'I\'m allergic to...',
      example: 'Ich bin allergisch gegen Nüsse.'
    },
    {
      german: 'Ich bin Vegetarier/Veganer.',
      english: 'I\'m vegetarian/vegan.',
      example: 'Ich bin Vegetarier. Haben Sie vegetarische Gerichte?'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day11: ExamDay = {
  day: 11,
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
  focus: 'Ordering and expressing preferences - Writing about food preferences, ordering in restaurants, and speaking about likes/dislikes'
};

export default day11;