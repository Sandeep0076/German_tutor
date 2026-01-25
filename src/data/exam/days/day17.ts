/**
 * Day 17: Listening + Reading
 * Focus: Technology and internet
 * 
 * Skills: Listening, Reading
 * Topics: Computers, smartphones, internet, apps, technical problems
 */

import type {
  ExamDay,
  ListeningPractice,
  ReadingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// LISTENING PRACTICE - Technology Dialogues (Minimal Placeholder)
// ============================================================================

const listeningQuestions: ExamQuestion[] = [
  {
    id: 'day17-listening-q1',
    type: 'multiple-choice',
    question: 'Was ist das Problem?',
    options: [
      'Der Computer funktioniert nicht',
      'Das Internet ist langsam',
      'Das Handy ist kaputt'
    ],
    correctAnswer: 1,
    explanation: 'The problem is that the internet is slow.',
    audioUrl: '/audio/day17/tech1.mp3'
  },
  {
    id: 'day17-listening-q2',
    type: 'multiple-choice',
    question: 'Was braucht die Person?',
    options: [
      'Ein neues Handy',
      'Ein Passwort',
      'Eine E-Mail-Adresse'
    ],
    correctAnswer: 1,
    explanation: 'The person needs a password.',
    audioUrl: '/audio/day17/tech2.mp3'
  }
];

const listeningPractice: ListeningPractice = {
  part: 1,
  title: "Dialogues about Technology",
  description: "Practice listening to short conversations about computers, smartphones, internet problems, and technical help.",
  instructions: "Listen to 6 short dialogues. Answer questions about technology, internet, and technical issues. You will hear each dialogue twice.",
  questions: listeningQuestions
};

// ============================================================================
// READING PRACTICE - Teil 1: Messages about Technical Issues
// ============================================================================

const readingPart1Questions: ExamQuestion[] = [
  {
    id: 'day17-reading1-q1',
    type: 'true-false',
    question: 'Der Computer ist neu.',
    correctAnswer: 'Falsch',
    explanation: 'The email says the computer is old (alt), not new.'
  },
  {
    id: 'day17-reading1-q2',
    type: 'true-false',
    question: 'Das Internet funktioniert nicht.',
    correctAnswer: 'Richtig',
    explanation: 'The email states "das Internet funktioniert nicht"'
  },
  {
    id: 'day17-reading1-q3',
    type: 'true-false',
    question: 'Lisa braucht das Internet für die Arbeit.',
    correctAnswer: 'Richtig',
    explanation: 'Lisa mentions she needs internet for work (für die Arbeit).'
  },
  {
    id: 'day17-reading1-q4',
    type: 'true-false',
    question: 'Der Techniker kommt morgen.',
    correctAnswer: 'Falsch',
    explanation: 'The technician comes today (heute Nachmittag), not tomorrow.'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Messages about Technical Issues",
  description: "Read short personal messages about computer problems, internet issues, and technical help. Answer True/False questions.",
  instructions: "Read the email and decide if each statement is Richtig (true) or Falsch (false).",
  text: `Hallo Tom,

ich habe ein Problem! Mein Computer ist alt und langsam. Das Internet funktioniert nicht.
Ich brauche das Internet für die Arbeit. Kannst du mir helfen? Oder kennst du einen guten
Techniker? Der Techniker von der Computerfirma kommt heute Nachmittag. Aber er ist sehr teuer!

Viele Grüße
Lisa`,
  questions: readingPart1Questions
};

// ============================================================================
// READING PRACTICE - Teil 2: Technology Service Advertisements
// ============================================================================

const readingPart2Questions: ExamQuestion[] = [
  {
    id: 'day17-reading2-q1',
    type: 'matching',
    question: 'Peter hat ein Problem mit seinem Laptop. Er braucht schnelle Hilfe. Das Problem ist nicht kompliziert.',
    options: [
      'Advertisement A: Computer-Reparatur - Schnellservice - kleine Probleme 30€',
      'Advertisement B: IT-Firma - Große Projekte - Nur für Firmen',
      'Advertisement C: Computerkurs für Anfänger - 5 Wochen - 150€'
    ],
    correctAnswer: 0,
    explanation: 'Advertisement A is best for Peter - laptop repair (Computer-Reparatur), quick service (Schnellservice), for small problems (kleine Probleme).'
  },
  {
    id: 'day17-reading2-q2',
    type: 'matching',
    question: 'Maria möchte Computer lernen. Sie hat noch keine Kenntnisse. Sie hat Zeit am Abend.',
    options: [
      'Advertisement A: Computer-Reparatur - Schnellservice - kleine Probleme 30€',
      'Advertisement B: Computerkurs für Anfänger - Abends 18-20 Uhr - 8 Wochen',
      'Advertisement C: Smartphone-Reparatur - Displaytausch - 50€'
    ],
    correctAnswer: 1,
    explanation: 'Advertisement B matches Maria - computer course for beginners (für Anfänger), evening hours (Abends 18-20 Uhr).'
  }
];

const readingPractice2: ReadingPractice = {
  part: 2,
  title: "Technology Service Advertisements",
  description: "Match people's technology needs to appropriate service advertisements.",
  instructions: "Read the situations and match each person to the best service (A, B, or C).",
  text: `**Advertisement A:**
Computer-Reparatur Blitzschnell
Schnellservice für alle Probleme
Kleine Reparaturen: 30€
Große Reparaturen: ab 50€
Hausbesuch möglich
Tel: 030-555-TECH

**Advertisement B:**
Computerkurs für Anfänger
Lernen Sie die Grundlagen!
8 Wochen, 2x pro Woche
Montag & Mittwoch 18:00-20:00 Uhr
Kursgebühr: 120€
Anmeldung: www.pc-schule.de

**Advertisement C:**
Smartphone-Reparatur Express
Displaytausch: 50€
Akku-Wechsel: 30€
Wasserschaden-Reparatur: ab 80€
Reparatur in 2 Stunden
Öffnungszeiten: Mo-Sa 10-18 Uhr`,
  questions: readingPart2Questions
};

// ============================================================================
// READING PRACTICE - Teil 3: Internet Café Information
// ============================================================================

const readingPart3Questions: ExamQuestion[] = [
  {
    id: 'day17-reading3-q1',
    type: 'multiple-choice',
    question: 'Wie viel kostet eine Stunde Internet?',
    options: [
      '2 Euro',
      '3 Euro',
      '5 Euro'
    ],
    correctAnswer: 1,
    explanation: 'One hour of internet costs 3 euros (1 Stunde: 3€).'
  },
  {
    id: 'day17-reading3-q2',
    type: 'multiple-choice',
    question: 'Bis wann ist das Internet-Café am Sonntag geöffnet?',
    options: [
      '18:00 Uhr',
      '20:00 Uhr',
      '22:00 Uhr'
    ],
    correctAnswer: 0,
    explanation: 'On Sunday (Sonntag) the café is open until 18:00.'
  },
  {
    id: 'day17-reading3-q3',
    type: 'multiple-choice',
    question: 'Was kann man im Café kaufen?',
    options: [
      'Nur Kaffee',
      'Kaffee und Kuchen',
      'Nur Computer'
    ],
    correctAnswer: 1,
    explanation: 'You can buy coffee and cake (Kaffee, Tee, Kuchen available).'
  }
];

const readingPractice3: ReadingPractice = {
  part: 3,
  title: "Internet Café Information",
  description: "Read information about an internet café (prices, hours, services) and answer multiple choice questions.",
  instructions: "Read the internet café information and answer the questions.",
  text: `Internet-Café CyberConnect

Öffnungszeiten:
Montag-Freitag: 9:00-22:00 Uhr
Samstag: 10:00-22:00 Uhr
Sonntag: 12:00-18:00 Uhr

Preise:
30 Minuten: 2€
1 Stunde: 3€
3 Stunden: 8€
Ganzer Tag: 15€

Services:
- Schnelles WLAN
- Drucken: 0,20€ pro Seite
- Scannen: 0,50€ pro Seite
- Computer mit Office-Programmen
- Headsets für Videoanrufe

Regeln:
- Bitte leise sprechen
- Essen verboten
- Getränke erlaubt
- Rauchen verboten
- Maximal 4 Stunden ohne Pause

Café:
- Kaffee, Tee, Limonade
- Kuchen und Snacks
- Bezahlung nur bar

Kontakt:
Tel: 030-123456
E-Mail: info@cyberconnect.de
Adresse: Hauptstraße 15, 10115 Berlin`,
  questions: readingPart3Questions
};

// ============================================================================
// Vocabulary
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: "Technology & Internet",
  items: [
    // Devices
    { german: "der Computer / der PC", english: "computer", example: "Mein Computer ist neu." },
    { german: "der Laptop", english: "laptop", example: "Ich arbeite am Laptop." },
    { german: "das Handy / das Smartphone", english: "mobile phone/smartphone", example: "Mein Handy ist kaputt." },
    { german: "das Tablet", english: "tablet", example: "Ich lese auf dem Tablet." },
    { german: "der Bildschirm", english: "screen", example: "Der Bildschirm ist groß." },
    { german: "die Tastatur", english: "keyboard", example: "Die Tastatur funktioniert nicht." },
    { german: "die Maus", english: "mouse (computer)", example: "Ich brauche eine neue Maus." },
    { german: "der Drucker", english: "printer", example: "Der Drucker druckt nicht." },
    
    // Internet & Communication
    { german: "das Internet", english: "internet", example: "Das Internet ist langsam." },
    { german: "das WLAN / WiFi", english: "WiFi", example: "Gibt es hier WLAN?" },
    { german: "die E-Mail", english: "email", example: "Ich schreibe eine E-Mail." },
    { german: "die Nachricht / die SMS", english: "message/text", example: "Ich schicke dir eine Nachricht." },
    { german: "die Website / die Webseite", english: "website", example: "Die Website ist interessant." },
    { german: "der Blog", english: "blog", example: "Ich lese einen Blog." },
    { german: "das soziale Netzwerk", english: "social network", example: "Facebook ist ein soziales Netzwerk." },
    
    // Internet Actions
    { german: "surfen / im Internet surfen", english: "to surf the internet", example: "Ich surfe im Internet." },
    { german: "googeln / suchen", english: "to google/search", example: "Ich google die Information." },
    { german: "herunterladen / downloaden", english: "to download", example: "Ich lade die App herunter." },
    { german: "hochladen", english: "to upload", example: "Ich lade Fotos hoch." },
    { german: "schicken / senden", english: "to send", example: "Ich schicke dir die E-Mail." },
    { german: "empfangen", english: "to receive", example: "Ich empfange eine Nachricht." },
    { german: "klicken", english: "to click", example: "Klicken Sie hier." },
    { german: "tippen", english: "to type", example: "Ich tippe eine Nachricht." },
    
    // Apps & Programs
    { german: "die App / die Anwendung", english: "app/application", example: "Ich habe eine neue App." },
    { german: "das Programm", english: "program", example: "Das Programm ist kostenlos." },
    { german: "die Software", english: "software", example: "Die Software ist gut." },
    { german: "das Passwort", english: "password", example: "Ich habe mein Passwort vergessen." },
    { german: "der Benutzername", english: "username", example: "Mein Benutzername ist Max123." },
    
    // Problems & Technical Terms
    { german: "das Problem", english: "problem", example: "Ich habe ein Problem mit dem Computer." },
    { german: "der Fehler", english: "error", example: "Es gibt einen Fehler." },
    { german: "kaputt", english: "broken", example: "Mein Handy ist kaputt." },
    { german: "langsam", english: "slow", example: "Das Internet ist sehr langsam." },
    { german: "schnell", english: "fast", example: "Das WLAN ist schnell." },
    { german: "funktionieren", english: "to work/function", example: "Der Computer funktioniert nicht." },
    { german: "reparieren", english: "to repair", example: "Ich muss mein Handy reparieren." },
    { german: "installieren", english: "to install", example: "Ich installiere ein Programm." },
    { german: "aktualisieren / updaten", english: "to update", example: "Ich aktualisiere die App." },
    { german: "löschen", english: "to delete", example: "Ich lösche alte E-Mails." },
    { german: "speichern", english: "to save", example: "Bitte speichern Sie die Datei." },
    
    // Technology Verbs
    { german: "anmachen / einschalten", english: "to turn on", example: "Ich schalte den Computer ein." },
    { german: "ausmachen / ausschalten", english: "to turn off", example: "Ich schalte das Handy aus." },
    { german: "laden / aufladen", english: "to charge", example: "Ich lade mein Handy auf." },
    { german: "verbinden", english: "to connect", example: "Ich verbinde mich mit dem WLAN." },
    { german: "drucken", english: "to print", example: "Ich drucke das Dokument." },
    { german: "scannen", english: "to scan", example: "Können Sie das Dokument scannen?" },
    
    // Adjectives & Descriptions
    { german: "online", english: "online", example: "Ich bin online." },
    { german: "offline", english: "offline", example: "Mein Computer ist offline." },
    { german: "kostenlos", english: "free (of charge)", example: "Die App ist kostenlos." },
    { german: "teuer", english: "expensive", example: "Das neue Handy ist teuer." },
    { german: "einfach", english: "simple/easy", example: "Das Programm ist einfach." },
    { german: "kompliziert", english: "complicated", example: "Die Website ist kompliziert." },
    { german: "neu", english: "new", example: "Ich habe einen neuen Computer." },
    { german: "alt", english: "old", example: "Mein Laptop ist alt." },
    
    // Help & Support
    { german: "die Hilfe", english: "help", example: "Ich brauche Hilfe." },
    { german: "der Techniker / die Technikerin", english: "technician m/f", example: "Der Techniker repariert den Computer." },
    { german: "der Support", english: "support", example: "Ich rufe den Support an." },
    { german: "helfen", english: "to help", example: "Können Sie mir helfen?" }
  ]
};

// ============================================================================
// Day 17 Export
// ============================================================================

const day17: ExamDay = {
  day: 17,
  skills: ['Listening', 'Reading'],
  practices: [
    listeningPractice,
    readingPractice1,
    readingPractice2,
    readingPractice3
  ],
  vocabulary,
  focus: "Technology and internet"
};

export default day17;
