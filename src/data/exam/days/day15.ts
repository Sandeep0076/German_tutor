/**
 * Day 15: Listening + Reading
 * Focus: Music and arts
 * 
 * Skills: Listening, Reading
 * Topics: Musical instruments, concerts, museums, art exhibitions, cultural events
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Music & Arts Dialogues (Minimal Placeholder)
// ============================================================================

const listeningQuestions: ExamQuestion[] = [
  {
    id: 'day15-listening-q1',
    type: 'multiple-choice',
    question: 'Wann beginnt das Konzert?',
    options: [
      'Um 18 Uhr',
      'Um 19 Uhr',
      'Um 20 Uhr'
    ],
    correctAnswer: 2,
    explanation: 'The concert starts at 20:00 (8 PM).',
    audioUrl: '/audio/day15/concert1.mp3'
  },
  {
    id: 'day15-listening-q2',
    type: 'multiple-choice',
    question: 'Welches Instrument spielt die Person?',
    options: [
      'Klavier',
      'Gitarre',
      'Geige'
    ],
    correctAnswer: 1,
    explanation: 'The person plays guitar (Gitarre).',
    audioUrl: '/audio/day15/music1.mp3'
  }
];

const listeningPractice: ListeningPractice = {
  part: 1,
  title: "Dialogues about Music and Arts",
  description: "Practice listening to short conversations about concerts, museums, musical instruments, and cultural events.",
  instructions: "Listen to 6 short dialogues. Answer questions about concerts, museums, and arts activities. You will hear each dialogue twice.",
  questions: listeningQuestions
};

// ============================================================================
// READING PRACTICE - Teil 1: Messages about Cultural Events
// ============================================================================

const readingPart1Questions: ExamQuestion[] = [
  {
    id: 'day15-reading1-q1',
    type: 'true-false',
    question: 'Das Konzert ist heute Abend.',
    correctAnswer: 'Richtig',
    explanation: 'The email states "Heute Abend ist das Konzert"'
  },
  {
    id: 'day15-reading1-q2',
    type: 'true-false',
    question: 'Das Konzert beginnt um 19 Uhr.',
    correctAnswer: 'Falsch',
    explanation: 'The concert starts at 20:00 (um 20 Uhr), not 19:00.'
  },
  {
    id: 'day15-reading1-q3',
    type: 'true-false',
    question: 'Die Band spielt Rockmusik.',
    correctAnswer: 'Richtig',
    explanation: 'The email mentions "Die Band spielt tolle Rockmusik"'
  },
  {
    id: 'day15-reading1-q4',
    type: 'true-false',
    question: 'Nach dem Konzert gehen sie ins Café.',
    correctAnswer: 'Richtig',
    explanation: 'The email says "Nach dem Konzert gehen wir ins Café"'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Messages about Cultural Events",
  description: "Read short personal messages about concerts, museums, and arts events. Answer True/False questions.",
  instructions: "Read the email and decide if each statement is Richtig (true) or Falsch (false).",
  text: `Hallo Lisa,

heute Abend ist das Konzert von meiner Lieblingsband! Das Konzert beginnt um 20 Uhr
im Kulturzentrum. Die Band spielt tolle Rockmusik. Ich habe zwei Karten.
Möchtest du mitkommen? Nach dem Konzert gehen wir ins Café.

Bis später!
Anna`,
  questions: readingPart1Questions
};

// ============================================================================
// READING PRACTICE - Teil 2: Cultural Event Advertisements
// ============================================================================

const readingPart2Questions: ExamQuestion[] = [
  {
    id: 'day15-reading2-q1',
    type: 'matching',
    question: 'Max mag klassische Musik. Er möchte am Wochenende ein Konzert besuchen. Er hat nur 15 Euro.',
    options: [
      'Advertisement A: Klassisches Konzert - Sonntag 19 Uhr - Eintritt 12€',
      'Advertisement B: Rockkonzert - Samstag 21 Uhr - Eintritt 25€',
      'Advertisement C: Jazz im Park - Freitag 18 Uhr - Eintritt frei'
    ],
    correctAnswer: 0,
    explanation: 'Advertisement A is best for Max - classical music (klassisch), on weekend (Sonntag), only 12€ (within his budget).'
  },
  {
    id: 'day15-reading2-q2',
    type: 'matching',
    question: 'Sarah interessiert sich für moderne Kunst. Sie möchte am Nachmittag eine Ausstellung besuchen.',
    options: [
      'Advertisement A: Historisches Museum - täglich 9-17 Uhr - Alte Kunst',
      'Advertisement B: Kunstgalerie Modern - Mo-Sa 14-20 Uhr - Zeitgenössische Kunst',
      'Advertisement C: Musikmuseum - Di-So 10-16 Uhr - Musikinstrumente'
    ],
    correctAnswer: 1,
    explanation: 'Advertisement B matches Sarah - modern/contemporary art (Zeitgenössische Kunst), afternoon hours (14-20 Uhr).'
  }
];

const readingPractice2: ReadingPractice = {
  part: 2,
  title: "Cultural Event Advertisements",
  description: "Match people's interests to appropriate concert or exhibition advertisements.",
  instructions: "Read the situations and match each person to the best event (A, B, or C).",
  text: `**Advertisement A:**
Klassisches Konzert
Berliner Philharmonie
Sonntag, 19:00 Uhr
Werke von Mozart und Beethoven
Eintritt: 12€ (Studenten 8€)
Kartenreservierung: 030-123456

**Advertisement B:**
Rockkonzert mit "Die Wilden"
Open Air im Stadtpark
Samstag, 21:00 Uhr
Deutscher Rock & Pop
Eintritt: 25€
Tickets online: www.tickets.de

**Advertisement C:**
Jazz im Park
Kostenlos!
Jeden Freitag 18:00-20:00 Uhr
Im Volkspark
Verschiedene Jazzbands
Eintritt frei, Spenden willkommen`,
  questions: readingPart2Questions
};

// ============================================================================
// READING PRACTICE - Teil 3: Museum Information
// ============================================================================

const readingPart3Questions: ExamQuestion[] = [
  {
    id: 'day15-reading3-q1',
    type: 'multiple-choice',
    question: 'Wann ist das Museum am Montag geöffnet?',
    options: [
      '9:00-17:00 Uhr',
      '10:00-18:00 Uhr',
      'Das Museum ist geschlossen'
    ],
    correctAnswer: 2,
    explanation: 'The museum is closed on Monday (Montag: Geschlossen).'
  },
  {
    id: 'day15-reading3-q2',
    type: 'multiple-choice',
    question: 'Wie viel kostet der Eintritt für Studenten?',
    options: [
      '5 Euro',
      '8 Euro',
      '10 Euro'
    ],
    correctAnswer: 0,
    explanation: 'Student tickets (Studenten) cost 5 euros.'
  },
  {
    id: 'day15-reading3-q3',
    type: 'multiple-choice',
    question: 'Wann sind die Führungen?',
    options: [
      'Jeden Tag um 11 Uhr',
      'Samstag und Sonntag um 14 Uhr',
      'Nur am Freitag'
    ],
    correctAnswer: 1,
    explanation: 'Tours (Führungen) are on Saturday and Sunday at 14:00.'
  }
];

const readingPractice3: ReadingPractice = {
  part: 3,
  title: "Museum Information",
  description: "Read information about a museum (opening hours, tickets, rules) and answer multiple choice questions.",
  instructions: "Read the museum information and answer the questions.",
  text: `Kunstmuseum Berlin

Öffnungszeiten:
Montag: Geschlossen
Dienstag-Freitag: 10:00-18:00 Uhr
Samstag-Sonntag: 9:00-19:00 Uhr

Eintrittspreise:
Erwachsene: 10€
Studenten: 5€
Kinder unter 12 Jahren: frei

Führungen:
Samstag und Sonntag um 14:00 Uhr
Dauer: ca. 1 Stunde
Anmeldung nicht nötig

Café im Museum:
Täglich 10:00-17:00 Uhr

Regeln:
- Fotografieren ohne Blitz erlaubt
- Taschen bitte in Schließfächern lassen
- Essen und Trinken nur im Café
- Bitte leise sprechen

Information:
Tel: 030-987654
E-Mail: info@kunstmuseum-berlin.de`,
  questions: readingPart3Questions
};

// ============================================================================
// Vocabulary
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: "Music & Arts",
  items: [
    // Music & Instruments
    { german: "die Musik", english: "music", example: "Ich höre gern Musik." },
    { german: "das Konzert", english: "concert", example: "Das Konzert beginnt um 20 Uhr." },
    { german: "die Band", english: "band", example: "Meine Lieblingsband spielt heute." },
    { german: "der Sänger / die Sängerin", english: "singer m/f", example: "Die Sängerin singt sehr schön." },
    { german: "das Instrument", english: "instrument", example: "Welches Instrument spielst du?" },
    { german: "das Klavier", english: "piano", example: "Ich spiele Klavier." },
    { german: "die Gitarre", english: "guitar", example: "Er spielt Gitarre." },
    { german: "die Geige", english: "violin", example: "Sie spielt Geige im Orchester." },
    { german: "das Schlagzeug", english: "drums", example: "Das Schlagzeug ist laut." },
    { german: "die Flöte", english: "flute", example: "Ich lerne Flöte spielen." },
    
    // Music Genres
    { german: "die Klassik", english: "classical music", example: "Ich mag klassische Musik." },
    { german: "der Rock", english: "rock music", example: "Rockmusik ist laut." },
    { german: "der Pop", english: "pop music", example: "Popmusik ist sehr populär." },
    { german: "der Jazz", english: "jazz", example: "Wir hören Jazz im Café." },
    
    // Arts & Culture
    { german: "die Kunst", english: "art", example: "Moderne Kunst ist interessant." },
    { german: "das Museum", english: "museum", example: "Das Museum ist heute geöffnet." },
    { german: "die Galerie", english: "gallery", example: "In der Galerie sind viele Bilder." },
    { german: "die Ausstellung", english: "exhibition", example: "Die Ausstellung ist bis Juni." },
    { german: "das Bild", english: "picture/painting", example: "Das Bild ist sehr schön." },
    { german: "das Gemälde", english: "painting", example: "Das Gemälde ist von Picasso." },
    { german: "der Künstler / die Künstlerin", english: "artist m/f", example: "Die Künstlerin malt Porträts." },
    { german: "das Theater", english: "theater", example: "Wir gehen ins Theater." },
    { german: "die Oper", english: "opera", example: "Die Oper beginnt um 19 Uhr." },
    
    // Cultural Venues
    { german: "das Kulturzentrum", english: "cultural center", example: "Das Konzert ist im Kulturzentrum." },
    { german: "die Bühne", english: "stage", example: "Die Band steht auf der Bühne." },
    { german: "der Saal", english: "hall", example: "Der Konzertsaal ist groß." },
    
    // Tickets & Entry
    { german: "die Karte / das Ticket", english: "ticket", example: "Ich habe zwei Karten für das Konzert." },
    { german: "der Eintritt", english: "admission/entry", example: "Der Eintritt kostet 10 Euro." },
    { german: "frei", english: "free (no cost)", example: "Der Eintritt ist heute frei." },
    { german: "die Führung", english: "guided tour", example: "Die Führung beginnt um 14 Uhr." },
    
    // Music & Arts Verbs
    { german: "spielen", english: "to play (instrument)", example: "Ich spiele Gitarre." },
    { german: "singen", english: "to sing", example: "Sie singt sehr gut." },
    { german: "hören", english: "to listen/hear", example: "Wir hören Musik." },
    { german: "malen", english: "to paint", example: "Er malt gern Bilder." },
    { german: "zeichnen", english: "to draw", example: "Ich zeichne ein Porträt." },
    { german: "besuchen", english: "to visit", example: "Wir besuchen das Museum." },
    { german: "ansehen / anschauen", english: "to look at/watch", example: "Ich schaue mir die Bilder an." },
    
    // Time & Events
    { german: "die Vorstellung", english: "performance/show", example: "Die Vorstellung beginnt um 20 Uhr." },
    { german: "beginnen / anfangen", english: "to begin/start", example: "Das Konzert beginnt um 19 Uhr." },
    { german: "dauern", english: "to last/take time", example: "Das Konzert dauert 2 Stunden." },
    { german: "geöffnet", english: "open", example: "Das Museum ist geöffnet." },
    { german: "geschlossen", english: "closed", example: "Montags ist das Museum geschlossen." },
    
    // Adjectives
    { german: "laut", english: "loud", example: "Die Musik ist sehr laut." },
    { german: "leise", english: "quiet", example: "Bitte sprich leise im Museum." },
    { german: "schön", english: "beautiful", example: "Das Konzert war sehr schön." },
    { german: "modern", english: "modern", example: "Ich mag moderne Kunst." },
    { german: "klassisch", english: "classical", example: "Klassische Musik ist entspannend." }
  ]
};

// ============================================================================
// Day 15 Export
// ============================================================================

const day15: ExamDay = {
  day: 15,
  skills: ['Listening', 'Reading'],
  practices: [
    listeningPractice,
    readingPractice1,
    readingPractice2,
    readingPractice3
  ],
  vocabulary,
  focus: "Music and arts"
};

export default day15;
