/**
 * Day 19: Listening + Reading
 * Focus: Nature and parks
 * 
 * Skills: Listening, Reading
 * Topics: Parks, gardens, nature, outdoor activities, weather, seasons
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Nature & Parks Dialogues (Minimal Placeholder)
// ============================================================================

const listeningQuestions: ExamQuestion[] = [
  {
    id: 'day19-listening-q1',
    type: 'multiple-choice',
    question: 'Was machen die Personen im Park?',
    options: [
      'Sie joggen',
      'Sie picknicken',
      'Sie spielen Fußball'
    ],
    correctAnswer: 1,
    explanation: 'The people are having a picnic in the park.',
    audioUrl: '/audio/day19/park1.mp3'
  },
  {
    id: 'day19-listening-q2',
    type: 'multiple-choice',
    question: 'Wie ist das Wetter?',
    options: [
      'Es regnet',
      'Es ist sonnig',
      'Es schneit'
    ],
    correctAnswer: 1,
    explanation: 'The weather is sunny.',
    audioUrl: '/audio/day19/weather1.mp3'
  }
];

const listeningPractice: ListeningPractice = {
  part: 1,
  title: "Dialogues about Nature and Parks",
  description: "Practice listening to short conversations about parks, outdoor activities, nature, and weather.",
  instructions: "Listen to 6 short dialogues. Answer questions about parks, nature activities, and weather. You will hear each dialogue twice.",
  questions: listeningQuestions
};

// ============================================================================
// READING PRACTICE - Teil 1: Messages about Outdoor Activities
// ============================================================================

const readingPart1Questions: ExamQuestion[] = [
  {
    id: 'day19-reading1-q1',
    type: 'true-false',
    question: 'Morgen ist das Wetter schön.',
    correctAnswer: 'Richtig',
    explanation: 'The email states "Morgen ist das Wetter schön"'
  },
  {
    id: 'day19-reading1-q2',
    type: 'true-false',
    question: 'Sie gehen in den Stadtpark.',
    correctAnswer: 'Falsch',
    explanation: 'They go to the Englischer Garten, not the Stadtpark.'
  },
  {
    id: 'day19-reading1-q3',
    type: 'true-false',
    question: 'Sie treffen sich um 10 Uhr.',
    correctAnswer: 'Richtig',
    explanation: 'The email says "Treffen wir uns um 10 Uhr"'
  },
  {
    id: 'day19-reading1-q4',
    type: 'true-false',
    question: 'Lisa bringt Sandwiches mit.',
    correctAnswer: 'Richtig',
    explanation: 'Lisa says "Ich bringe Sandwiches mit"'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Messages about Outdoor Activities",
  description: "Read short personal messages about park visits, picnics, and outdoor activities. Answer True/False questions.",
  instructions: "Read the email and decide if each statement is Richtig (true) or Falsch (false).",
  text: `Hallo Max,

morgen ist das Wetter schön! Die Sonne scheint und es ist warm.
Gehen wir in den Englischen Garten? Wir können picknicken und spazieren gehen.
Treffen wir uns um 10 Uhr am Eingang? Ich bringe Sandwiches und Getränke mit.
Bring bitte eine Decke mit!

Bis morgen!
Lisa`,
  questions: readingPart1Questions
};

// ============================================================================
// READING PRACTICE - Teil 2: Park Event Advertisements
// ============================================================================

const readingPart2Questions: ExamQuestion[] = [
  {
    id: 'day19-reading2-q1',
    type: 'matching',
    question: 'Tom mag Musik. Er möchte am Wochenende etwas im Park machen. Er hat kein Geld.',
    options: [
      'Advertisement A: Open-Air-Konzert - Samstag 19 Uhr - Eintritt frei',
      'Advertisement B: Yoga im Park - Jeden Morgen 7 Uhr - 10€ pro Stunde',
      'Advertisement C: Botanischer Garten - Führung - Sonntag 14 Uhr - 8€'
    ],
    correctAnswer: 0,
    explanation: 'Advertisement A is best for Tom - music concert (Konzert), on weekend (Samstag), free entry (Eintritt frei).'
  },
  {
    id: 'day19-reading2-q2',
    type: 'matching',
    question: 'Anna interessiert sich für Pflanzen. Sie möchte am Sonntag Nachmittag etwas lernen.',
    options: [
      'Advertisement A: Open-Air-Konzert - Samstag 19 Uhr - Eintritt frei',
      'Advertisement B: Yoga im Park - Jeden Morgen 7 Uhr - 10€ pro Stunde',
      'Advertisement C: Botanischer Garten - Führung über Pflanzen - Sonntag 14 Uhr'
    ],
    correctAnswer: 2,
    explanation: 'Advertisement C matches Anna - botanical garden with plants (Botanischer Garten, Pflanzen), Sunday afternoon (Sonntag 14 Uhr).'
  }
];

const readingPractice2: ReadingPractice = {
  part: 2,
  title: "Park Event Advertisements",
  description: "Match people's interests to appropriate park activities and events.",
  instructions: "Read the situations and match each person to the best activity (A, B, or C).",
  text: `**Advertisement A:**
Open-Air-Konzert im Stadtpark
Samstag, 19:00 Uhr
Live-Musik: Jazz und Pop
Eintritt frei!
Bringen Sie Decken und Snacks mit
Bei Regen: abgesagt

**Advertisement B:**
Yoga im Park
Jeden Morgen 7:00-8:00 Uhr
Im Volkspark (Wiese neben dem See)
10€ pro Stunde oder 40€ für 5 Termine
Anfänger willkommen
Anmeldung: yoga-im-park@email.de

**Advertisement C:**
Botanischer Garten - Führung
Jeden Sonntag um 14:00 Uhr
"Pflanzen der Welt" - 1,5 Stunden
Eintritt: 8€ (Studenten 5€)
Treffpunkt: Haupteingang
Keine Anmeldung nötig`,
  questions: readingPart2Questions
};

// ============================================================================
// READING PRACTICE - Teil 3: Park Rules and Information
// ============================================================================

const readingPart3Questions: ExamQuestion[] = [
  {
    id: 'day19-reading3-q1',
    type: 'multiple-choice',
    question: 'Bis wann ist der Park im Sommer geöffnet?',
    options: [
      '20:00 Uhr',
      '22:00 Uhr',
      '24:00 Uhr (Mitternacht)'
    ],
    correctAnswer: 1,
    explanation: 'In summer (April-September) the park is open until 22:00.'
  },
  {
    id: 'day19-reading3-q2',
    type: 'multiple-choice',
    question: 'Wo darf man grillen?',
    options: [
      'Überall im Park',
      'Nur in der Grillzone',
      'Grillen ist verboten'
    ],
    correctAnswer: 1,
    explanation: 'Grilling is only allowed in the designated grill zone (Nur in der Grillzone erlaubt).'
  },
  {
    id: 'day19-reading3-q3',
    type: 'multiple-choice',
    question: 'Was muss man für Hunde im Park haben?',
    options: [
      'Einen Maulkorb',
      'Eine Leine',
      'Nichts'
    ],
    correctAnswer: 1,
    explanation: 'Dogs must be on a leash (Hunde an der Leine!).'
  }
];

const readingPractice3: ReadingPractice = {
  part: 3,
  title: "Park Rules and Information",
  description: "Read information about park rules, opening hours, and facilities. Answer multiple choice questions.",
  instructions: "Read the park information and answer the questions.",
  text: `Stadtpark München - Besucherinformation

Öffnungszeiten:
April-September: 6:00-22:00 Uhr
Oktober-März: 7:00-20:00 Uhr

Eintritt:
Kostenlos für alle

Einrichtungen:
- 3 Spielplätze für Kinder
- 2 Grillzonen
- Toiletten (beim Haupteingang und am See)
- Café am See (9:00-18:00 Uhr)
- Fahrradverleih (10:00-18:00 Uhr)

Parkregeln:
- Hunde an der Leine!
- Müll in die Mülleimer
- Grillen nur in der Grillzone erlaubt
- Fahrradfahren auf den Wegen erlaubt
- Blumen pflücken verboten
- Laut Musik verboten (nach 20:00 Uhr)
- Rauchen nur in markierten Bereichen

Aktivitäten:
- Joggen und Walken
- Picknick auf den Wiesen
- Bootfahren auf dem See (Mai-September)
- Volleyball spielen (2 Felder)

Information:
Tel: 089-12345678
E-Mail: info@stadtpark-muenchen.de

Notfall: 112`,
  questions: readingPart3Questions
};

// ============================================================================
// Vocabulary
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: "Nature & Parks",
  items: [
    // Nature & Places
    { german: "die Natur", english: "nature", example: "Ich liebe die Natur." },
    { german: "der Park", english: "park", example: "Wir gehen in den Park." },
    { german: "der Garten", english: "garden", example: "Der Garten ist schön." },
    { german: "der Wald", english: "forest", example: "Im Wald gibt es viele Bäume." },
    { german: "der See", english: "lake", example: "Der See ist groß." },
    { german: "der Fluss", english: "river", example: "Der Fluss ist lang." },
    { german: "der Berg", english: "mountain", example: "Die Berge sind hoch." },
    { german: "die Wiese", english: "meadow/lawn", example: "Wir sitzen auf der Wiese." },
    { german: "der Weg", english: "path/way", example: "Der Weg führt durch den Wald." },
    
    // Plants & Trees
    { german: "der Baum", english: "tree", example: "Der Baum ist groß." },
    { german: "die Blume", english: "flower", example: "Die Blumen sind schön." },
    { german: "das Gras", english: "grass", example: "Das Gras ist grün." },
    { german: "die Pflanze", english: "plant", example: "Ich mag Pflanzen." },
    { german: "das Blatt", english: "leaf", example: "Die Blätter sind bunt." },
    
    // Weather
    { german: "das Wetter", english: "weather", example: "Das Wetter ist schön." },
    { german: "die Sonne", english: "sun", example: "Die Sonne scheint." },
    { german: "der Regen", english: "rain", example: "Es gibt Regen." },
    { german: "der Schnee", english: "snow", example: "Im Winter gibt es Schnee." },
    { german: "der Wind", english: "wind", example: "Der Wind ist stark." },
    { german: "die Wolke", english: "cloud", example: "Die Wolken sind grau." },
    { german: "der Himmel", english: "sky", example: "Der Himmel ist blau." },
    
    // Weather Adjectives
    { german: "sonnig", english: "sunny", example: "Heute ist es sonnig." },
    { german: "warm", english: "warm", example: "Es ist warm draußen." },
    { german: "heiß", english: "hot", example: "Im Sommer ist es heiß." },
    { german: "kalt", english: "cold", example: "Im Winter ist es kalt." },
    { german: "kühl", english: "cool", example: "Es ist kühl am Morgen." },
    { german: "regnerisch", english: "rainy", example: "Das Wetter ist regnerisch." },
    { german: "windig", english: "windy", example: "Heute ist es windig." },
    { german: "bewölkt", english: "cloudy", example: "Der Himmel ist bewölkt." },
    
    // Seasons
    { german: "die Jahreszeit", english: "season", example: "Welche Jahreszeit magst du?" },
    { german: "der Frühling", english: "spring", example: "Im Frühling blühen die Blumen." },
    { german: "der Sommer", english: "summer", example: "Der Sommer ist warm." },
    { german: "der Herbst", english: "autumn/fall", example: "Im Herbst fallen die Blätter." },
    { german: "der Winter", english: "winter", example: "Im Winter schneit es." },
    
    // Outdoor Activities
    { german: "spazieren gehen", english: "to go for a walk", example: "Wir gehen im Park spazieren." },
    { german: "wandern", english: "to hike", example: "Am Wochenende wandern wir in den Bergen." },
    { german: "joggen / laufen", english: "to jog/run", example: "Ich jogge jeden Morgen im Park." },
    { german: "picknicken", english: "to have a picnic", example: "Wir picknicken auf der Wiese." },
    { german: "grillen", english: "to grill/barbecue", example: "Im Sommer grillen wir oft." },
    { german: "Rad fahren", english: "to ride a bike", example: "Ich fahre gern Rad." },
    { german: "schwimmen", english: "to swim", example: "Im See kann man schwimmen." },
    { german: "Boot fahren", english: "to go boating", example: "Wir fahren Boot auf dem See." },
    { german: "spielen", english: "to play", example: "Die Kinder spielen im Park." },
    
    // Nature Verbs
    { german: "scheinen", english: "to shine", example: "Die Sonne scheint." },
    { german: "regnen", english: "to rain", example: "Es regnet heute." },
    { german: "schneien", english: "to snow", example: "Im Winter schneit es." },
    { german: "blühen", english: "to bloom", example: "Die Blumen blühen im Frühling." },
    { german: "wachsen", english: "to grow", example: "Die Pflanzen wachsen schnell." },
    
    // Park Facilities
    { german: "der Spielplatz", english: "playground", example: "Der Spielplatz ist für Kinder." },
    { german: "die Bank", english: "bench", example: "Wir sitzen auf der Bank." },
    { german: "der Brunnen", english: "fountain", example: "Der Brunnen ist schön." },
    { german: "die Toilette", english: "toilet", example: "Wo ist die Toilette?" },
    { german: "der Mülleimer", english: "trash can", example: "Bitte Müll in den Mülleimer!" },
    { german: "der Eingang", english: "entrance", example: "Der Eingang ist dort." },
    
    // Picnic Items
    { german: "die Decke", english: "blanket", example: "Wir brauchen eine Decke zum Picknicken." },
    { german: "der Korb", english: "basket", example: "Der Picknickkorb ist voll." },
    { german: "das Sandwich", english: "sandwich", example: "Ich esse ein Sandwich." },
    { german: "das Getränk", english: "drink", example: "Wir haben kalte Getränke." },
    
    // Nature Adjectives
    { german: "schön", english: "beautiful", example: "Die Natur ist schön." },
    { german: "grün", english: "green", example: "Das Gras ist grün." },
    { german: "frisch", english: "fresh", example: "Die Luft ist frisch." },
    { german: "ruhig", english: "quiet/peaceful", example: "Der Park ist ruhig." },
    { german: "bunt", english: "colorful", example: "Die Blumen sind bunt." },
    
    // Time & Location
    { german: "draußen", english: "outside", example: "Wir sind draußen im Park." },
    { german: "drinnen", english: "inside", example: "Bei Regen bleiben wir drinnen." },
    { german: "am See", english: "at the lake", example: "Wir sitzen am See." },
    { german: "im Freien", english: "in the open air", example: "Wir essen im Freien." }
  ]
};

// ============================================================================
// Day 19 Export
// ============================================================================

const day19: ExamDay = {
  day: 19,
  skills: ['Listening', 'Reading'],
  practices: [
    listeningPractice,
    readingPractice1,
    readingPractice2,
    readingPractice3
  ],
  vocabulary,
  focus: "Nature and parks"
};

export default day19;
