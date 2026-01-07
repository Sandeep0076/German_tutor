/**
 * Day 9: Writing + Speaking - Describing People and Relationships
 * Focus: Writing about family, inviting to events, describing people's appearance and personality
 * 
 * Skills: Writing (Teil 1 & 2), Speaking (all 3 parts)
 * Topics: Family descriptions, adjectives for people, personal characteristics
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// WRITING PRACTICE - Describing Family and Inviting to Events
// ============================================================================

const writingPractice1: WritingPractice = {
  part: 2,
  title: 'Teil 2: Write about Your Family',
  description: 'Describe your family structure and members',
  instructions: 'Write about your family. Include information about family size, members, ages, and what they do. Write about 30-40 words. Time: ~15 minutes.',
  prompt: `Schreibe über deine Familie. Schreibe zu jedem Punkt ein bis zwei Sätze:
- Wie groß ist deine Familie?
- Wer gehört zu deiner Familie?
- Was machen deine Familienmitglieder?`,
  sampleAnswer: `Meine Familie besteht aus vier Personen: meine Eltern, mein Bruder und ich.
Mein Vater ist 52 Jahre alt und arbeitet als Ingenieur. Meine Mutter ist 48 und ist Lehrerin.
Mein Bruder heißt Tom. Er ist 16 Jahre alt und geht noch zur Schule.
Wir wohnen alle zusammen in Berlin.`,
  keyPhrases: [
    'Meine Familie besteht aus... Personen.',
    'Ich habe... (einen Bruder, eine Schwester, etc.)',
    'Mein Vater/Meine Mutter ist... Jahre alt.',
    'Er/Sie arbeitet als...',
    'Wir wohnen in...',
    'Meine Geschwister sind...'
  ]
};

const writingPractice2: WritingPractice = {
  part: 2,
  title: 'Teil 2: Invite Someone to a Family Event',
  description: 'Write an invitation to a family celebration',
  instructions: 'Your mother is celebrating her birthday. Write to your friend Sarah. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Deine Mutter feiert Geburtstag. Schreibe an deine Freundin Sarah:
- Was feiern wir?
- Wann ist die Party?
- Was soll Sarah mitbringen?`,
  sampleAnswer: `Liebe Sarah,

am Samstag feiern wir den Geburtstag meiner Mutter. Die Party beginnt um 15 Uhr bei uns zu Hause.
Kannst du einen Salat mitbringen? Wir freuen uns auf dich!

Viele Grüße
Anna`,
  keyPhrases: [
    'Wir feiern...',
    'Die Party beginnt um... Uhr',
    'Kannst du... mitbringen?',
    'Wir freuen uns auf dich!',
    'Bitte bring... mit.',
    'Kommst du auch?'
  ]
};

const writingPractice3: WritingPractice = {
  part: 2,
  title: 'Teil 2: Respond to Family-Related Questions',
  description: 'Answer questions about your family in a message',
  instructions: 'Your new colleague wants to know about your family. Write to him/her. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Dein neuer Kollege möchte deine Familie kennenlernen. Schreibe ihm:
- Hast du Geschwister?
- Wo wohnt deine Familie?
- Was macht ihr am Wochenende zusammen?`,
  sampleAnswer: `Hallo Mark,

ja, ich habe einen Bruder und eine Schwester. Sie sind beide älter als ich.
Meine Familie wohnt in Hamburg, aber ich wohne jetzt in Berlin.
Am Wochenende telefonieren wir oft oder ich besuche meine Eltern.

Bis bald!
Lisa`,
  keyPhrases: [
    'Ja, ich habe... / Nein, ich habe keine Geschwister.',
    'Meine Familie wohnt in...',
    'Wir... zusammen (essen, spielen, treffen uns)',
    'Am Wochenende...',
    'Ich besuche...',
    'Wir telefonieren oft.'
  ]
};

// ============================================================================
// SPEAKING PRACTICE - Introducing Family and Describing People
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: 'Teil 1: Introduce Your Family Members',
  description: 'Present your family clearly and confidently',
  instructions: 'You will be asked to introduce your family. Talk about who is in your family, their names, ages, and what they do. Time: ~3 minutes.',
  prompts: [
    'Wie groß ist Ihre Familie?',
    'Wer gehört zu Ihrer Familie?',
    'Wie alt sind Ihre Familienmitglieder?',
    'Was machen Ihre Eltern?',
    'Haben Sie Geschwister?',
    'Wo wohnt Ihre Familie?'
  ],
  sampleResponses: [
    'Meine Familie besteht aus vier Personen: meine Eltern, mein Bruder und ich.',
    'Das ist mein Vater Michael, meine Mutter Anna und mein Bruder Tom.',
    'Mein Vater ist 55 Jahre alt, meine Mutter ist 52 und mein Bruder ist 18.',
    'Mein Vater ist Ingenieur und meine Mutter arbeitet als Lehrerin.',
    'Ja, ich habe einen Bruder. Er heißt Tom und studiert Informatik.',
    'Meine Familie wohnt in Berlin. Wir wohnen alle zusammen in einem Haus.'
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Talk about Family Activities',
  description: 'Discuss what your family does together',
  instructions: 'You receive a theme card about "Familie". Ask your partner 3 questions about their family, then answer 3 questions about your family. Time: ~6 minutes.',
  prompts: [
    'Theme: Familie - Ask about: family size, family activities, how often they meet',
    'Sample questions you might ask:',
    '- Wie groß ist deine Familie?',
    '- Was macht deine Familie am Wochenende?',
    '- Wie oft siehst du deine Familie?',
    'Sample questions you might be asked:',
    '- Hast du Geschwister?',
    '- Was macht ihr zusammen?',
    '- Wo wohnen deine Eltern?'
  ],
  sampleResponses: [
    'Wie groß ist deine Familie? - Meine Familie besteht aus fünf Personen.',
    'Was macht deine Familie am Wochenende? - Wir essen zusammen und gehen manchmal spazieren.',
    'Wie oft siehst du deine Familie? - Ich sehe meine Familie jede Woche.',
    'Hast du Geschwister? - Ja, ich habe zwei Schwestern. Sie sind älter als ich.',
    'Was macht ihr zusammen? - Wir kochen zusammen, spielen Spiele und feiern Geburtstage.',
    'Wo wohnen deine Eltern? - Meine Eltern wohnen in München, in der Nähe vom Zentrum.'
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Describe Family Members',
  description: 'Practice describing people\'s appearance and personality',
  instructions: 'Answer questions about what your family members are like. Describe their appearance and personality. Time: ~3 minutes.',
  prompts: [
    'Wie sieht dein Vater/deine Mutter aus?',
    'Wie ist dein Bruder/deine Schwester?',
    'Wer in deiner Familie ist sehr nett?',
    'Wer ist sportlich in deiner Familie?'
  ],
  sampleResponses: [
    'Mein Vater ist groß und hat kurze graue Haare. Er trägt eine Brille. Er ist sehr freundlich und lustig.',
    'Meine Schwester ist klein und schlank. Sie hat lange blonde Haare und blaue Augen. Sie ist sehr intelligent.',
    'Meine Mutter ist sehr nett. Sie ist geduldig und hilft immer. Sie ist auch sehr kreativ.',
    'Mein Bruder ist sehr sportlich. Er spielt Fußball und geht oft joggen. Er ist stark und aktiv.'
  ]
};

const speakingPractice4: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Ask and Answer Questions about Family',
  description: 'Practice both asking and responding to family questions',
  instructions: 'You and your partner take turns asking and answering questions about family. Make polite requests and give complete answers. Time: ~6 minutes.',
  prompts: [
    'Ask your partner about their family',
    'Respond to questions about your family',
    'Sample dialogue topics:',
    '- Family size and members',
    '- What family members do',
    '- Family activities',
    '- Where family lives'
  ],
  sampleResponses: [
    'Hast du Geschwister? - Ja, ich habe einen Bruder und eine Schwester. Mein Bruder ist älter und meine Schwester ist jünger als ich.',
    'Wo wohnt deine Familie? - Meine Familie wohnt in Hamburg. Meine Eltern haben dort ein Haus.',
    'Was macht dein Vater? - Mein Vater ist Arzt. Er arbeitet in einem Krankenhaus in der Stadt.',
    'Wie oft siehst du deine Großeltern? - Ich sehe meine Großeltern jeden Monat. Wir besuchen sie am Wochenende.',
    'Was macht ihr zusammen? - Wir essen zusammen, spielen Spiele und gehen manchmal ins Kino oder in den Park.'
  ]
};

const speakingPractice5: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Introduce Someone',
  description: 'Practice introducing family members or friends',
  instructions: 'Imagine you are introducing a family member to someone. Describe them and give basic information. Time: ~3 minutes.',
  prompts: [
    'Stell deine Mutter/deinen Vater vor.',
    'Stell deinen Bruder/deine Schwester vor.',
    'Beschreibe ein Familienmitglied.'
  ],
  sampleResponses: [
    'Das ist meine Mutter. Sie heißt Anna und ist 50 Jahre alt. Sie ist Lehrerin und arbeitet in einer Grundschule. Sie ist sehr nett und geduldig.',
    'Das ist mein Bruder Tom. Er ist 20 Jahre alt und studiert Informatik. Er ist groß und hat braune Haare. Er ist sehr intelligent und lustig.',
    'Ich möchte meine Schwester vorstellen. Sie heißt Lisa und ist 25 Jahre alt. Sie ist Ärztin. Sie hat lange blonde Haare und blaue Augen. Sie ist sehr freundlich und hilfsbereit.'
  ]
};

// ============================================================================
// VOCABULARY THEME - Adjectives for Describing People
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Adjectives for Describing People (Adjektive für Personenbeschreibungen)',
  items: [
    // Physical Appearance - Size & Build
    {
      german: 'groß',
      english: 'tall/big',
      example: 'Mein Vater ist sehr groß.'
    },
    {
      german: 'klein',
      english: 'short/small',
      example: 'Meine Schwester ist klein.'
    },
    {
      german: 'dünn',
      english: 'thin',
      example: 'Er ist dünn.'
    },
    {
      german: 'dick',
      english: 'fat/thick',
      example: 'Der Mann ist dick.'
    },
    {
      german: 'schlank',
      english: 'slim',
      example: 'Sie ist schlank.'
    },
    {
      german: 'stark',
      english: 'strong',
      example: 'Mein Bruder ist stark.'
    },
    // Age
    {
      german: 'jung',
      english: 'young',
      example: 'Meine Kinder sind noch jung.'
    },
    {
      german: 'alt',
      english: 'old',
      example: 'Meine Großeltern sind alt.'
    },
    {
      german: 'älter',
      english: 'older',
      example: 'Mein Bruder ist älter als ich.'
    },
    {
      german: 'jünger',
      english: 'younger',
      example: 'Meine Schwester ist jünger.'
    },
    // General Appearance
    {
      german: 'hübsch',
      english: 'pretty',
      example: 'Sie ist sehr hübsch.'
    },
    {
      german: 'schön',
      english: 'beautiful',
      example: 'Das ist eine schöne Frau.'
    },
    {
      german: 'attraktiv',
      english: 'attractive',
      example: 'Er ist attraktiv.'
    },
    // Personality - Positive
    {
      german: 'nett',
      english: 'nice',
      example: 'Meine Mutter ist sehr nett.'
    },
    {
      german: 'freundlich',
      english: 'friendly',
      example: 'Er ist freundlich.'
    },
    {
      german: 'lustig',
      english: 'funny',
      example: 'Mein Onkel ist lustig.'
    },
    {
      german: 'sympathisch',
      english: 'likeable',
      example: 'Sie ist sehr sympathisch.'
    },
    {
      german: 'intelligent',
      english: 'intelligent',
      example: 'Mein Bruder ist intelligent.'
    },
    {
      german: 'klug',
      english: 'smart/clever',
      example: 'Meine Tochter ist klug.'
    },
    {
      german: 'fleißig',
      english: 'hardworking',
      example: 'Er ist fleißig.'
    },
    {
      german: 'höflich',
      english: 'polite',
      example: 'Die Kinder sind höflich.'
    },
    {
      german: 'ehrlich',
      english: 'honest',
      example: 'Mein Vater ist ehrlich.'
    },
    {
      german: 'geduldig',
      english: 'patient',
      example: 'Meine Lehrerin ist geduldig.'
    },
    {
      german: 'hilfsbereit',
      english: 'helpful',
      example: 'Meine Schwester ist hilfsbereit.'
    },
    // Personality - Neutral/Negative
    {
      german: 'ernst',
      english: 'serious',
      example: 'Mein Chef ist ernst.'
    },
    {
      german: 'ruhig',
      english: 'quiet/calm',
      example: 'Meine Schwester ist ruhig.'
    },
    {
      german: 'laut',
      english: 'loud',
      example: 'Die Kinder sind laut.'
    },
    {
      german: 'schüchtern',
      english: 'shy',
      example: 'Ich bin schüchtern.'
    },
    {
      german: 'faul',
      english: 'lazy',
      example: 'Mein Bruder ist manchmal faul.'
    },
    {
      german: 'streng',
      english: 'strict',
      example: 'Mein Vater ist streng.'
    },
    // Activity Level
    {
      german: 'aktiv',
      english: 'active',
      example: 'Meine Kinder sind sehr aktiv.'
    },
    {
      german: 'sportlich',
      english: 'sporty/athletic',
      example: 'Er ist sportlich.'
    },
    {
      german: 'energisch',
      english: 'energetic',
      example: 'Sie ist energisch.'
    },
    // Talents
    {
      german: 'musikalisch',
      english: 'musical',
      example: 'Meine Tochter ist musikalisch.'
    },
    {
      german: 'kreativ',
      english: 'creative',
      example: 'Er ist kreativ.'
    },
    {
      german: 'künstlerisch',
      english: 'artistic',
      example: 'Sie ist künstlerisch.'
    },
    // Hair Colors
    {
      german: 'blond',
      english: 'blonde',
      example: 'Sie hat blonde Haare.'
    },
    {
      german: 'braun',
      english: 'brown',
      example: 'Er hat braune Haare.'
    },
    {
      german: 'schwarz',
      english: 'black',
      example: 'Ich habe schwarze Haare.'
    },
    {
      german: 'rot',
      english: 'red',
      example: 'Sie hat rote Haare.'
    },
    {
      german: 'grau',
      english: 'gray',
      example: 'Mein Vater hat graue Haare.'
    },
    // Hair Length & Style
    {
      german: 'kurz',
      english: 'short',
      example: 'Er hat kurze Haare.'
    },
    {
      german: 'lang',
      english: 'long',
      example: 'Sie hat lange Haare.'
    },
    {
      german: 'lockig',
      english: 'curly',
      example: 'Meine Schwester hat lockige Haare.'
    },
    {
      german: 'glatt',
      english: 'straight',
      example: 'Ich habe glatte Haare.'
    },
    // Eye Colors
    {
      german: 'blaue Augen',
      english: 'blue eyes',
      example: 'Er hat blaue Augen.'
    },
    {
      german: 'grüne Augen',
      english: 'green eyes',
      example: 'Sie hat grüne Augen.'
    },
    {
      german: 'braune Augen',
      english: 'brown eyes',
      example: 'Ich habe braune Augen.'
    },
    // Useful Verbs for Describing
    {
      german: 'sein',
      english: 'to be',
      example: 'Er ist groß und nett.'
    },
    {
      german: 'haben',
      english: 'to have',
      example: 'Sie hat blonde Haare.'
    },
    {
      german: 'aussehen',
      english: 'to look like',
      example: 'Er sieht jung aus.'
    },
    {
      german: 'tragen',
      english: 'to wear',
      example: 'Er trägt eine Brille.'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day09: ExamDay = {
  day: 9,
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
  focus: 'Describing people and relationships - Writing about family, inviting to events, and speaking about family members and their characteristics'
};

export default day09;