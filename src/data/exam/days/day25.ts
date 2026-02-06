/**
 * Day 25: Reading & Writing Focus
 * Focus: Government and Offices (Ämter und Behörden)
 *
 * Skills: Reading (Teil 1, 2, 3) & Writing (Teil 1 & 2)
 * Topics: Appointments at public offices, filling out forms (Anmeldung), understanding official notices,
 *         residency registration, vehicle registration office (KFZ-Zulassungsstelle).
 */

import type {
  ExamDay,
  ReadingPractice,
  WritingPractice,
  VocabularyTheme
} from '../examTypes';

// =========================================================================
// READING PRACTICE - Teil 1: Email about an Appointment at the Bürgeramt
// ==========================================================================

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Teil 1 - E-Mail an das Bürgeramt",
  description: "Read an email to the citizen's office (Bürgeramt) and answer 5 Richtig/Falsch questions.",
  instructions: "Lesen Sie die E-Mail. Sind die Sätze 1-5 Richtig oder Falsch? Markieren Sie.",
  text: `Von: anna.schmidt@email.de
An: termin@buergeramt-berlin.de
Betreff: Termin für Anmeldung

Sehr geehrte Damen und Herren,

ich bin neu in Berlin und möchte mich anmelden. Mein Name ist Anna Schmidt und ich wohne in der Hauptstraße 10, 10115 Berlin. Ich komme aus der Schweiz.

Ich brauche einen Termin für die Anmeldung. Kann ich nächste Woche am Montag oder Dienstagvormittag kommen? Ich arbeite am Nachmittag und habe keine Zeit.

Welche Dokumente muss ich mitbringen? Ich habe meinen Pass und den Mietvertrag. Brauche ich noch etwas?

Ich habe gelesen, dass die Anmeldung Geld kostet. Wie viel kostet die Anmeldung? Kann ich mit Kreditkarte bezahlen?

Vielen Dank für Ihre Hilfe.

Mit freundlichen Grüßen
Anna Schmidt`,
  questions: [
    {
      id: 'day25-reading1-q1',
      type: 'true-false',
      question: 'Anna Schmidt wohnt schon lange in Berlin.',
      correctAnswer: 'Falsch',
      explanation: 'She says "ich bin neu in Berlin" (I am new in Berlin).'
    },
    {
      id: 'day25-reading1-q2',
      type: 'true-false',
      question: 'Anna hat am Vormittag keine Zeit für einen Termin.',
      correctAnswer: 'Falsch',
      explanation: 'She says she can come on Monday or Tuesday morning ("Vormittag").'
    },
    {
      id: 'day25-reading1-q3',
      type: 'true-false',
      question: 'Anna weiß genau, welche Dokumente sie braucht.',
      correctAnswer: 'Falsch',
      explanation: 'She asks what documents she needs to bring ("Welche Dokumente muss ich mitbringen?").'
    },
    {
      id: 'day25-reading1-q4',
      type: 'true-false',
      question: 'Anna denkt, die Anmeldung ist kostenlos.',
      correctAnswer: 'Falsch',
      explanation: 'She has read that the registration costs money ("dass die Anmeldung Geld kostet").'
    },
    {
      id: 'day25-reading1-q5',
      type: 'true-false',
      question: 'Anna möchte wissen, ob sie mit Kreditkarte bezahlen kann.',
      correctAnswer: 'Richtig',
      explanation: 'She asks "Kann ich mit Kreditkarte bezahlen?"'
    }
  ]
};

// =========================================================================
// READING PRACTICE - Teil 2: Finding the Right Office
// ==========================================================================

const q6TextA = `**Website a: www.strassenverkehrsamt-hamburg.de**

Straßenverkehrsamt Hamburg
- KFZ-Zulassung
- Führerscheinstelle
- Bewohnerparkausweis
Termin online buchen!`;

const q6TextB = `**Website b: www.buergeramt-hamburg.de**

Bürgeramt Hamburg
- Anmeldung und Ummeldung
- Personalausweis und Reisepass
- Meldebescheinigung
Nur mit Termin!`;

const readingPractice2a: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 6: Residency Registration",
  description: "Choose the correct office website for registering your new address.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q6TextA}\n\n${q6TextB}`,
  questions: [
    {
      id: 'day25_r2_q6',
      type: 'multiple-choice',
      question: "Sie sind neu in Hamburg und müssen sich anmelden.",
      options: ['a', 'b'],
      correctAnswer: 1,
      explanation: 'The "Bürgeramt" is responsible for residency registration ("Anmeldung").'
    }
  ]
};

const q7TextA = `**Website a: www.strassenverkehrsamt-koeln.de**

Straßenverkehrsamt Köln
- KFZ-Zulassung
- Führerscheinstelle
- Bewohnerparkausweis
Termin online buchen!`;

const q7TextB = `**Website b: www.finanzamt-koeln.de**

Finanzamt Köln
- Steuererklärung
- Steuer-ID
- Beratung
Öffnungszeiten: Mo-Fr 8-12 Uhr`;

const readingPractice2b: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 7: Vehicle Registration",
  description: "Choose the correct office website for registering a new car.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q7TextA}\n\n${q7TextB}`,
  questions: [
    {
      id: 'day25_r2_q7',
      type: 'multiple-choice',
      question: "Sie haben ein neues Auto gekauft und brauchen ein Nummernschild.",
      options: ['a', 'b'],
      correctAnswer: 0,
      explanation: 'The "Straßenverkehrsamt" handles vehicle registration ("KFZ-Zulassung").'
    }
  ]
};

// =========================================================================
// READING PRACTICE - Teil 3: Official Notices
// ==========================================================================

const q8Notice = `Bürgeramt München-Pasing

Öffnungszeiten:
Mo, Di, Fr: 8:00 - 12:00 Uhr
Do: 8:00 - 12:00 Uhr und
    14:00 - 18:00 Uhr
Mittwoch: geschlossen

Besuch nur mit Onlinetermin!`;

const readingPractice3a: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 8: Office Opening Hours",
  description: "Read office opening hours and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q8Notice,
  questions: [
    {
      id: 'day25_r3_q8',
      type: 'true-false',
      question: 'Man kann das Bürgeramt am Mittwochnachmittag besuchen.',
      correctAnswer: 'Falsch',
      explanation: 'The notice says Wednesday is closed ("Mittwoch: geschlossen").'
    }
  ]
};

const q9Notice = `Wichtige Information zur Anmeldung

Bitte mitbringen:
- Personalausweis oder Reisepass
- Anmeldeformular (ausgefüllt)
- Wohnungsgeberbestätigung
  (vom Vermieter)`;

const readingPractice3b: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 9: Registration Documents",
  description: "Read information about required documents and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q9Notice,
  questions: [
    {
      id: 'day25_r3_q9',
      type: 'true-false',
      question: 'Man braucht für die Anmeldung nur den Personalausweis.',
      correctAnswer: 'Falsch',
      explanation: 'You need the ID card, the registration form, and a confirmation from the landlord.'
    }
  ]
};

const q10Notice = `KFZ-Zulassungsstelle Köln

Wartenummer ziehen und warten.
Ihre Nummer wird aufgerufen.

ZAHLUNG:
Nur mit EC-Karte.
Kein Bargeld!`;

const readingPractice3c: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 10: Payment Methods",
  description: "Read payment information and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q10Notice,
  questions: [
    {
      id: 'day25_r3_q10',
      type: 'true-false',
      question: 'Man kann bei der Zulassungsstelle mit Bargeld bezahlen.',
      correctAnswer: 'Falsch',
      explanation: 'The sign explicitly states "Kein Bargeld!" (No cash!).'
    }
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 1: Registration Form (Anmeldung)
// ==========================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: "Teil 1: Anmeldeformular",
  description: "Complete a residency registration form (Anmeldung).",
  instructions: "Sie helfen Ihrer Freundin bei der Anmeldung in einer neuen Stadt. Lesen Sie den Kontext und füllen Sie die fünf fehlenden Informationen im Formular aus.",
  prompt: `Ihre Freundin, Elena Popova, kommt aus Russland. Sie ist am 15.04.1995 geboren. Sie ist am 01.08.2023 in die Wohnung in der Schillerstraße 5, 10625 Berlin, eingezogen. Ihre alte Adresse war in Moskau. Sie ist ledig.

In dem Formular fehlen fünf Informationen.
Schreiben Sie die fünf fehlenden Informationen in das Formular.

┌─────────────────────────────────────────────────┐
│              ANMELDUNG bei der Meldebehörde     │
│                                                 │
│ Familienname:           Popova             (0) │
│ Vorname:                _______________    (1) │
│ Geburtsdatum:           _______________    (2) │
│                                                 │
│ Anschrift der neuen Wohnung:                    │
│ Straße, Hausnummer:     Schillerstraße 5       │
│ PLZ, Ort:               _______________    (3) │
│ Einzugsdatum:           _______________    (4) │
│                                                 │
│ Familienstand:          _______________    (5) │
│   ☐ ledig  ☐ verheiratet  ☐ geschieden         │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) Elena
(2) 15.04.1995
(3) 10625 Berlin
(4) 01.08.2023
(5) ledig`,
  keyPhrases: [
    "die Anmeldung (registration)",
    "die Meldebehörde (registration office)",
    "das Geburtsdatum (date of birth)",
    "der Einzug (moving in)",
    "der Familienstand (marital status)",
    "ledig (single)"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 2: Email to Make an Appointment
// ==========================================================================

const writingPractice2: WritingPractice = {
  part: 2,
  title: "Teil 2: E-Mail für einen Termin",
  description: "Write an email to an office to ask for an appointment.",
  instructions: "Schreiben Sie eine E-Mail an das Straßenverkehrsamt. Beantworten Sie alle 3 Punkte. Schreiben Sie etwa 30 Wörter.",
  prompt: `Sie haben ein Auto gekauft und möchten es anmelden. Schreiben Sie an das Straßenverkehrsamt:

• Sagen Sie, warum Sie schreiben (Auto anmelden).
• Fragen Sie nach einem Termin.
• Fragen Sie, welche Dokumente Sie brauchen.

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich möchte mein neues Auto anmelden. Wann haben Sie einen Termin frei? 
Ich kann nächste Woche am Vormittag. Welche Dokumente muss ich bitte mitbringen?

Mit freundlichen Grüßen
[Ihr Name]`,
  keyPhrases: [
    "Sehr geehrte Damen und Herren",
    "anmelden (to register)",
    "einen Termin machen (to make an appointment)",
    "Welche Dokumente? (Which documents?)",
    "mitbringen (to bring with)",
    "Mit freundlichen Grüßen"
  ]
};

// =========================================================================
// VOCABULARY THEME
// ==========================================================================

const vocabularyTheme: VocabularyTheme = {
  theme: 'Government and Offices (Ämter und Behörden)',
  items: [
    { german: 'das Amt / die Behörde', english: 'office / authority', example: 'Ich muss zum Amt gehen.' },
    { german: 'das Bürgeramt', english: "citizen's office", example: 'Im Bürgeramt kann man sich anmelden.' },
    { german: 'die Anmeldung', english: 'registration', example: 'Ich brauche einen Termin für die Anmeldung.' },
    { german: 'anmelden', english: 'to register', example: 'Ich möchte mich anmelden.' },
    { german: 'das Formular', english: 'form', example: 'Füllen Sie bitte dieses Formular aus.' },
    { german: 'ausfüllen', english: 'to fill out', example: 'Sie müssen das Formular ausfüllen.' },
    { german: 'der Personalausweis', english: 'ID card', example: 'Haben Sie Ihren Personalausweis dabei?' },
    { german: 'der Reisepass', english: 'passport', example: 'Mein Reisepass ist noch gültig.' },
    { german: 'der Termin', english: 'appointment', example: 'Ich habe einen Termin um 10 Uhr.' },
    { german: 'vereinbaren', english: 'to arrange/agree on', example: 'Wir müssen einen Termin vereinbaren.' },
    { german: 'die Öffnungszeiten', english: 'opening hours', example: 'Wie sind die Öffnungszeiten?' },
    { german: 'geschlossen', english: 'closed', example: 'Am Mittwoch ist das Amt geschlossen.' },
    { german: 'geöffnet', english: 'open', example: 'Das Amt ist von 8 bis 12 Uhr geöffnet.' },
    { german: 'die Wartenummer', english: 'waiting number', example: 'Bitte ziehen Sie eine Wartenummer.' },
    { german: 'warten', english: 'to wait', example: 'Ich warte schon eine Stunde.' },
    { german: 'das Dokument', english: 'document', example: 'Bringen Sie alle Dokumente mit.' },
    { german: 'die Gebühr', english: 'fee', example: 'Die Gebühr beträgt 10 Euro.' },
    { german: 'bezahlen', english: 'to pay', example: 'Sie können mit EC-Karte bezahlen.' },
    { german: 'das Bargeld', english: 'cash', example: 'Wir akzeptieren kein Bargeld.' },
    { german: 'die Unterschrift', english: 'signature', example: 'Hier fehlt Ihre Unterschrift.' },
    { german: 'unterschreiben', english: 'to sign', example: 'Bitte unterschreiben Sie hier.' },
    { german: 'gültig', english: 'valid', example: 'Der Pass ist nicht mehr gültig.' },
    { german: 'der Antrag', english: 'application', example: 'Sie müssen einen Antrag stellen.' },
    { german: 'die Genehmigung', english: 'permit / approval', example: 'Sie brauchen eine Genehmigung.' },
    { german: 'das Standesamt', english: 'registry office (for marriage, birth)', example: 'Wir heiraten im Standesamt.' },
    { german: 'die Ausländerbehörde', english: "foreigners' office", example: 'Ich brauche ein Visum von der Ausländerbehörde.' }
  ]
};

// =========================================================================
// EXPORT DAY 25
// ==========================================================================

const day25: ExamDay = {
  day: 25,
  skills: ['Reading', 'Writing'],
  focus: 'Government and Offices (Ämter und Behörden)',
  practices: [
    readingPractice1,
    readingPractice2a,
    readingPractice2b,
    readingPractice3a,
    readingPractice3b,
    readingPractice3c,
    writingPractice1,
    writingPractice2
  ],
  vocabulary: vocabularyTheme
};

export default day25;
