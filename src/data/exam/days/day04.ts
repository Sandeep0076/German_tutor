/**
 * Day 4: Writing (Teil 1-4) + Speaking (Teil 5-7)
 * Focus: Simple communication and requests
 * 
 * Skills: Writing, Speaking
 * Topics: Informal emails, invitations, W-questions, hobbies, food, daily routine
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// WRITING PRACTICE - Teil 1-4: Short Informal Letter/Email
// ============================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: 'Teil 1: Invitation Response',
  description: 'Write a short email responding to a party invitation (~30 words)',
  instructions: 'Write a short email to your friend Max. Include all 3 points mentioned in the task. Use the structure: Greeting → 3 main points → Closing → Your name.',
  prompt: `Dein Freund Max lädt dich zu seiner Geburtstagsparty ein.
Schreibe an Max. Schreibe zu jedem Punkt ein bis zwei Sätze:
• Kannst du kommen?
• Warum (nicht)?
• Was bringst du mit?

Write about 30 words. Write about all three points.`,
  sampleAnswer: `Lieber Max,

vielen Dank für die Einladung! Ja, ich komme gerne zu deiner Party.
Ich habe am Samstag Zeit. Ich bringe einen Kuchen und ein Geschenk mit.

Bis Samstag!
Viele Grüße
Maria`,
  keyPhrases: [
    'Liebe/r... (Dear...)',
    'vielen Dank für die Einladung (thank you for the invitation)',
    'Ja, ich komme gerne (Yes, I\'d love to come)',
    'Ich habe Zeit (I have time)',
    'Ich bringe... mit (I\'ll bring...)',
    'Bis bald (See you soon)',
    'Viele Grüße (Best regards)'
  ]
};

const writingPractice2: WritingPractice = {
  part: 2,
  title: 'Teil 2: Asking for Information',
  description: 'Write a short email requesting course information (~30 words)',
  instructions: 'Write an email to a language school. Address all 3 points clearly. Use formal greeting for institutions.',
  prompt: `Du möchtest einen Deutschkurs besuchen.
Schreibe an die Sprachschule:
• Wann beginnt der Kurs?
• Wie viel kostet der Kurs?
• Wo ist die Schule?

Write about 30 words. Write about all three points.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich möchte einen Deutschkurs besuchen. Wann beginnt der nächste Kurs?
Wie viel kostet der Kurs? Wo ist die Sprachschule?

Vielen Dank!
Mit freundlichen Grüßen
Thomas Schmidt`,
  keyPhrases: [
    'Sehr geehrte Damen und Herren (Dear Sir/Madam)',
    'Ich möchte... (I would like to...)',
    'Wann beginnt...? (When does... start?)',
    'Wie viel kostet...? (How much does... cost?)',
    'Wo ist...? (Where is...?)',
    'Mit freundlichen Grüßen (Sincerely)'
  ]
};

const writingPractice3: WritingPractice = {
  part: 3,
  title: 'Teil 3: Making Suggestions',
  description: 'Write a short email suggesting a cinema visit (~30 words)',
  instructions: 'Write to your friend Lisa about going to the cinema. Cover all 3 points: which film, when to meet, where to meet.',
  prompt: `Du möchtest mit deiner Freundin Lisa ins Kino gehen.
Schreibe an Lisa:
• Welchen Film?
• Wann treffen wir uns?
• Wo treffen wir uns?

Write about 30 words. Write about all three points.`,
  sampleAnswer: `Liebe Lisa,

möchtest du am Samstag ins Kino gehen? Ich möchte den neuen Film sehen.
Wir treffen uns um 19 Uhr vor dem Kino.

Bis dann!
Viele Grüße
Anna`,
  keyPhrases: [
    'möchtest du...? (would you like to...?)',
    'ins Kino gehen (to go to the cinema)',
    'Wir treffen uns (We\'ll meet)',
    'um ... Uhr (at ... o\'clock)',
    'vor dem Kino (in front of the cinema)',
    'Bis dann! (See you then!)'
  ]
};

const writingPractice4: WritingPractice = {
  part: 4,
  title: 'Teil 4: Declining an Invitation',
  description: 'Write a short email declining an invitation with reason (~30 words)',
  instructions: 'Write to your friend declining their invitation. Be polite and give a reason.',
  prompt: `Deine Freundin lädt dich zu ihrer Party ein.
Schreibe an deine Freundin:
• Kannst du kommen?
• Warum nicht?
• Was schlägst du vor?

Write about 30 words. Write about all three points.`,
  sampleAnswer: `Liebe Sarah,

vielen Dank für die Einladung! Leider kann ich nicht kommen.
Ich muss am Samstag arbeiten. Können wir uns nächste Woche treffen?

Liebe Grüße
Julia`,
  keyPhrases: [
    'Leider kann ich nicht kommen (Unfortunately I can\'t come)',
    'Ich muss... (I have to...)',
    'Tut mir leid (I\'m sorry)',
    'Können wir...? (Can we...?)',
    'nächste Woche (next week)',
    'Liebe Grüße (Kind regards)'
  ]
};

// ============================================================================
// SPEAKING PRACTICE - Teil 5-7: W-Questions with Theme Cards
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 5,
  title: 'Teil 5: Theme Card - Hobbies',
  description: 'Ask and answer questions about hobbies and free time',
  instructions: 'Practice asking W-questions about hobbies. Give complete answers with details. Your card: Hobbies. Partner\'s card: Food.',
  prompts: [
    'Was ist dein Hobby?',
    'Wie oft machst du Sport?',
    'Was machst du am Wochenende?',
    'Wo treibst du Sport?',
    'Warum magst du dein Hobby?'
  ],
  sampleResponses: [
    'Mein Hobby ist Fußball. Ich spiele gern Fußball.',
    'Ich mache dreimal pro Woche Sport.',
    'Am Wochenende treffe ich Freunde und gehe ins Kino.',
    'Ich treibe Sport im Park oder im Fitnessstudio.',
    'Ich mag Fußball, weil es Spaß macht!'
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 6,
  title: 'Teil 6: Theme Card - Food & Drinks',
  description: 'Ask and answer questions about food preferences',
  instructions: 'Practice asking W-questions about food. Your card: Food. Partner\'s card: Daily Routine.',
  prompts: [
    'Was isst du gern?',
    'Wo kaufst du Lebensmittel ein?',
    'Kochst du oft?',
    'Was trinkst du zum Frühstück?',
    'Wann isst du zu Mittag?'
  ],
  sampleResponses: [
    'Ich esse gern Pizza und Pasta. Ich mag italienisches Essen.',
    'Ich kaufe im Supermarkt ein. Manchmal gehe ich zum Markt.',
    'Ja, ich koche oft. Ich koche gern am Wochenende.',
    'Zum Frühstück trinke ich Kaffee und Orangensaft.',
    'Ich esse um 12 Uhr zu Mittag.'
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 7,
  title: 'Teil 7: Theme Card - Daily Routine',
  description: 'Ask and answer questions about daily activities',
  instructions: 'Practice asking W-questions about daily routine. Your card: Daily Routine. Partner\'s card: Hobbies.',
  prompts: [
    'Wann stehst du auf?',
    'Was machst du am Morgen?',
    'Wie kommst du zur Arbeit?',
    'Wann gehst du ins Bett?',
    'Was machst du nach der Arbeit?'
  ],
  sampleResponses: [
    'Ich stehe um 7 Uhr auf.',
    'Am Morgen dusche ich, frühstücke und gehe zur Arbeit.',
    'Ich komme mit dem Bus zur Arbeit. Manchmal fahre ich mit dem Fahrrad.',
    'Ich gehe um 23 Uhr ins Bett.',
    'Nach der Arbeit gehe ich nach Hause, koche und sehe fern.'
  ]
};

// ============================================================================
// VOCABULARY THEME - Hobbies & Free Time Activities
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Hobbies & Free Time Activities',
  items: [
    // Sports
    {
      german: 'Sport treiben',
      english: 'to do sports',
      example: 'Ich treibe gern Sport.'
    },
    {
      german: 'Fußball spielen',
      english: 'to play soccer',
      example: 'Ich spiele Fußball im Park.'
    },
    {
      german: 'schwimmen',
      english: 'to swim',
      example: 'Ich schwimme im Sommer.'
    },
    {
      german: 'laufen / joggen',
      english: 'to run / to jog',
      example: 'Ich laufe jeden Morgen.'
    },
    {
      german: 'Rad fahren',
      english: 'to cycle',
      example: 'Ich fahre gern Rad.'
    },
    {
      german: 'Tennis spielen',
      english: 'to play tennis',
      example: 'Ich spiele Tennis am Wochenende.'
    },
    // Creative activities
    {
      german: 'lesen',
      english: 'to read',
      example: 'Ich lese gern Bücher.'
    },
    {
      german: 'Musik hören',
      english: 'to listen to music',
      example: 'Ich höre oft Musik.'
    },
    {
      german: 'singen',
      english: 'to sing',
      example: 'Ich singe im Chor.'
    },
    {
      german: 'tanzen',
      english: 'to dance',
      example: 'Ich tanze gern.'
    },
    {
      german: 'malen',
      english: 'to paint',
      example: 'Ich male am Wochenende.'
    },
    {
      german: 'fotografieren',
      english: 'to photograph',
      example: 'Ich fotografiere gern.'
    },
    {
      german: 'Gitarre spielen',
      english: 'to play guitar',
      example: 'Ich spiele Gitarre.'
    },
    // Social activities
    {
      german: 'Freunde treffen',
      english: 'to meet friends',
      example: 'Ich treffe oft Freunde.'
    },
    {
      german: 'ins Kino gehen',
      english: 'to go to cinema',
      example: 'Ich gehe gern ins Kino.'
    },
    {
      german: 'ins Restaurant gehen',
      english: 'to go to restaurant',
      example: 'Wir gehen ins Restaurant.'
    },
    {
      german: 'spazieren gehen',
      english: 'to go for a walk',
      example: 'Ich gehe im Park spazieren.'
    },
    {
      german: 'wandern',
      english: 'to hike',
      example: 'Ich wandere in den Bergen.'
    },
    // Home activities
    {
      german: 'fernsehen',
      english: 'to watch TV',
      example: 'Ich sehe abends fern.'
    },
    {
      german: 'Filme schauen',
      english: 'to watch movies',
      example: 'Ich schaue gern Filme.'
    },
    {
      german: 'kochen',
      english: 'to cook',
      example: 'Ich koche gern.'
    },
    {
      german: 'backen',
      english: 'to bake',
      example: 'Ich backe Kuchen.'
    },
    {
      german: 'im Internet surfen',
      english: 'to surf the internet',
      example: 'Ich surfe im Internet.'
    },
    // Frequency expressions
    {
      german: 'jeden Tag',
      english: 'every day',
      example: 'Ich lerne jeden Tag Deutsch.'
    },
    {
      german: 'jede Woche',
      english: 'every week',
      example: 'Ich spiele jede Woche Fußball.'
    },
    {
      german: 'oft',
      english: 'often',
      example: 'Ich gehe oft ins Kino.'
    },
    {
      german: 'manchmal',
      english: 'sometimes',
      example: 'Manchmal koche ich.'
    },
    {
      german: 'selten',
      english: 'rarely',
      example: 'Ich sehe selten fern.'
    },
    {
      german: 'nie',
      english: 'never',
      example: 'Ich rauche nie.'
    },
    {
      german: 'immer',
      english: 'always',
      example: 'Ich frühstücke immer.'
    },
    {
      german: 'am Wochenende',
      english: 'on the weekend',
      example: 'Am Wochenende treffe ich Freunde.'
    },
    {
      german: 'in der Freizeit',
      english: 'in free time',
      example: 'In der Freizeit lese ich.'
    },
    // Expressing likes/dislikes
    {
      german: 'Ich mag...',
      english: 'I like...',
      example: 'Ich mag Sport.'
    },
    {
      german: 'gern',
      english: 'gladly / like to',
      example: 'Ich lese gern.'
    },
    {
      german: 'Das macht Spaß!',
      english: 'That\'s fun!',
      example: 'Fußball macht Spaß!'
    },
    {
      german: 'interessant',
      english: 'interesting',
      example: 'Ich finde Deutsch interessant.'
    },
    {
      german: 'langweilig',
      english: 'boring',
      example: 'Das ist langweilig.'
    },
    {
      german: 'toll',
      english: 'great',
      example: 'Das ist toll!'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day04: ExamDay = {
  day: 4,
  skills: ['Writing', 'Speaking'],
  practices: [
    writingPractice1,
    writingPractice2,
    writingPractice3,
    writingPractice4,
    speakingPractice1,
    speakingPractice2,
    speakingPractice3
  ],
  vocabulary,
  focus: 'Simple communication and requests'
};

export default day04;