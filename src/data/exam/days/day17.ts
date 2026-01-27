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
// READING PRACTICE - Teil 1: E-Mail (True/False)
// ============================================================================

const readingPractice1: ReadingPractice = {
  part: 1,
  title: 'Teil 1: E-Mail von einem Freund',
  description:
    'Lesen Sie die E-Mail und die Aufgaben 1–5. Entscheiden Sie: Ist die Aussage Richtig oder Falsch?',
  instructions:
    'Lesen Sie die E-Mail. Entscheiden Sie bei jeder Aufgabe, ob die Aussage Richtig oder Falsch ist.',
  questions: [
    {
      id: 'day17-reading1-q1',
      type: 'true-false',
      question: 'Alex hat einen neuen Computer.',
      correctAnswer: 'Falsch',
      explanation:
        'Alex schreibt: "Mein alter Laptop ist jetzt kaputt". Er hat also einen alten, kaputten Laptop, keinen neuen Computer.'
    },
    {
      id: 'day17-reading1-q2',
      type: 'true-false',
      question: 'Alex kann keine E-Mails schreiben.',
      correctAnswer: 'Richtig',
      explanation:
        'Er sagt: "Ich kann keine E-Mails für meine Arbeit schreiben", weil der Laptop kaputt ist.'
    },
    {
      id: 'day17-reading1-q3',
      type: 'true-false',
      question: 'Alex möchte einen Laptop für Computerspiele kaufen.',
      correctAnswer: 'Falsch',
      explanation:
        'Er braucht den Laptop "für die Arbeit und für die Uni", nicht für Spiele.'
    },
    {
      id: 'day17-reading1-q4',
      type: 'true-false',
      question: 'Der neue Laptop im Angebot kostet mehr als 500 Euro.',
      correctAnswer: 'Falsch',
      explanation: 'Der Laptop im Angebot kostet 499 Euro.'
    },
    {
      id: 'day17-reading1-q5',
      type: 'true-false',
      question: 'Alex bittet um Hilfe beim Kauf des Laptops.',
      correctAnswer: 'Richtig',
      explanation:
        'Er fragt: "Hast du am Samstag Zeit und kannst du mitkommen?", was eine Bitte um Hilfe ist.'
    }
  ],
  text: `Hallo Sarah,

wie geht es dir? Mir geht es nicht so gut. Mein alter Laptop ist jetzt kaputt. Er startet nicht mehr. Das ist ein großes Problem, denn ich kann keine E-Mails für meine Arbeit schreiben und auch meine Hausaufgaben für die Uni nicht machen.

Ich muss schnell einen neuen Laptop kaufen. Ich brauche ihn nicht für Computerspiele, sondern nur für die Arbeit und für die Uni. Ich habe online ein Angebot gesehen: ein Laptop für 499 Euro. Das ist ein guter Preis, denke ich.

Kannst du mir helfen? Du kennst dich doch gut mit Computern aus. Ist der Preis in Ordnung? Hast du am Samstag Zeit und kannst du mitkommen zum Geschäft "Tech-Welt"?

Ich warte auf deine Antwort.

Viele Grüße,
Alex`
};

// ============================================================================
// READING PRACTICE - Teil 2: Informationen auf Webseiten (a oder b)
// ============================================================================

const readingPractice2: ReadingPractice = {
  part: 2,
  title: 'Teil 2: Informationen finden',
  description:
    'Lesen Sie die Aufgaben 6–10 und die beiden Texte. Wo finden Sie die Information? Kreuzen Sie an: a oder b.',
  instructions:
    'Lesen Sie die fünf Situationen. Entscheiden Sie, auf welcher Webseite (a oder b) Sie die gesuchte Information finden.',
  questions: [
    {
      id: 'day17-reading2-q6',
      type: 'multiple-choice',
      question:
        'Sie möchten wissen, wie viel eine Reparatur für Ihr kaputtes Handy-Display kostet.',
      options: ['a', 'b'],
      correctAnswer: 0,
      explanation:
        'Webseite a ("Handy-Klinik") listet Preise für Reparaturen wie "Display-Reparatur ab 79 €".',
      text: `**a) www.handy-klinik-berlin.de**
Handy-Klinik Berlin
Wir reparieren Ihr Smartphone und Tablet! Schnell und günstig.
Unsere Preise:
• Display-Reparatur: ab 79 €
• Akku-Wechsel: 49 €
• Wasserschaden: ab 59 €
Adresse: Hauptstraße 15, 10827 Berlin
Öffnungszeiten: Mo-Sa: 10-19 Uhr

**b) www.smartphone-shop-berlin.de**
Smartphone-Shop Berlin
Große Auswahl an neuen und gebrauchten Handys!
• iPhone, Samsung, Huawei
• Zubehör: Hüllen, Ladekabel, Kopfhörer
• Handyverträge mit allen Anbietern
Besuchen Sie uns: Berliner Straße 88, 10715 Berlin`
    },
    {
      id: 'day17-reading2-q7',
      type: 'multiple-choice',
      question:
        'Sie haben eine Frage zu Ihrem neuen Computer und möchten andere Nutzer um Rat fragen.',
      options: ['a', 'b'],
      correctAnswer: 1,
      explanation:
        'Webseite b ist ein Forum, wo man Fragen stellen kann ("Stellen Sie Ihre Frage an unsere Community").',
      text: `**a) www.computer-shop24.de**
Computer-Shop24
Ihr Online-Shop für Computer und Zubehör
• Laptops ab 299 €
• Desktop-PCs ab 399 €
• Monitore, Tastaturen, Mäuse
Versandkostenfrei ab 50 €
Lieferung in 2-3 Tagen

**b) www.computer-hilfe-forum.de**
Computer-Hilfe Forum
Haben Sie ein Problem mit Ihrem Computer? Wir helfen Ihnen!
Forum-Kategorien:
• Hardware & Kaufberatung
• Software & Installation
• Internet & Netzwerk
• Kaufen & Verkaufen
Stellen Sie Ihre Frage an unsere Community!`
    },
    {
      id: 'day17-reading2-q8',
      type: 'multiple-choice',
      question: 'Sie möchten einen gebrauchten Laptop verkaufen.',
      options: ['a', 'b'],
      correctAnswer: 0,
      explanation:
        'Webseite a kauft gebrauchte Geräte ("Wir kaufen Ihr altes Gerät!").',
      text: `**a) www.techankauf-berlin.de**
TechAnkauf Berlin
Wir kaufen Ihr altes Gerät!
• Laptops, Tablets, Smartphones
• Sofortige Bewertung online
• Schnelle Bezahlung
• Kostenlose Abholung in Berlin möglich
Kontakt: info@techankauf-berlin.de

**b) www.laptop-reparatur-service.de**
Laptop-Reparatur-Service
Professionelle Reparatur für alle Laptop-Marken
• Bildschirm-Austausch
• Tastatur-Reparatur
• Virenentfernung
• Datenrettung
Öffnungszeiten: Mo-Fr 9-18 Uhr, Sa 10-14 Uhr`
    },
    {
      id: 'day17-reading2-q9',
      type: 'multiple-choice',
      question:
        'Sie möchten eine App auf Ihr Smartphone herunterladen und suchen Bewertungen.',
      options: ['a', 'b'],
      correctAnswer: 1,
      explanation:
        'Webseite b ist ein App-Portal mit Bewertungen ("Bewertungen von Nutzern").',
      text: `**a) www.app-entwicklung-berlin.de**
App-Entwicklung Berlin
Wir entwickeln Ihre App!
• iOS und Android Apps
• Professionelles Design
• Faire Preise
Kontaktieren Sie uns für ein kostenloses Angebot
Tel: 030-12345678

**b) www.app-portal.de**
App-Portal Deutschland
Finden Sie die besten Apps!
• Über 50.000 Apps
• Bewertungen von Nutzern
• Top-Charts und Empfehlungen
• Kostenlose und kostenpflichtige Apps
Alle Apps sicher und geprüft`
    },
    {
      id: 'day17-reading2-q10',
      type: 'multiple-choice',
      question:
        'Sie suchen einen Computerkurs für Anfänger in Ihrer Stadt.',
      options: ['a', 'b'],
      correctAnswer: 0,
      explanation:
        'Webseite a bietet Computerkurse an ("Computerkurse für Anfänger und Fortgeschrittene").',
      text: `**a) www.vhs-berlin.de**
Volkshochschule Berlin
Computerkurse für Anfänger und Fortgeschrittene
• Grundlagen: Word, Excel, Internet
• Smartphone und Tablet Kurse
• Kurse am Vormittag, Nachmittag und Abend
Anmeldung online oder telefonisch: 030-987654

**b) www.computer-notdienst-berlin.de**
Computer-Notdienst Berlin
24-Stunden-Service für Computerprobleme
• Vor-Ort-Service bei Ihnen zu Hause
• Virenentfernung
• Datenrettung
• Installation und Einrichtung
Hotline: 030-24h-HILFE`
    }
  ],
  text: '' // Each question has its own text in Teil 2
};

// ============================================================================
// READING PRACTICE - Teil 3: Aushänge und Schilder (True/False)
// ============================================================================

const readingPractice3: ReadingPractice = {
  part: 3,
  title: 'Teil 3: Aushänge im Alltag',
  description:
    'Lesen Sie die Texte 11–15. Entscheiden Sie: Ist die Aussage Richtig oder Falsch?',
  instructions:
    'Lesen Sie die fünf Situationen mit den Aushängen. Entscheiden Sie bei jeder Aufgabe, ob die Aussage Richtig oder Falsch ist.',
  questions: [
    {
      id: 'day17-reading3-q11',
      type: 'true-false',
      question: 'Sie bezahlen nur für die gedruckten Seiten.',
      correctAnswer: 'Falsch',
      explanation:
        'Man bezahlt die Druckkosten UND eine zusätzliche Service-Gebühr von 1,00 €.',
      text: `┌─────────────────────────────────────────────┐
│         COPYSHOP SCHNELLDRUCK               │
│                                             │
│  Liebe Kunden,                              │
│                                             │
│  Für das Drucken von eigenen Dateien        │
│  (USB-Stick, E-Mail, Cloud) berechnen       │
│  wir eine Service-Gebühr von 1,00 €         │
│  zusätzlich zu den Druckkosten.             │
│                                             │
│  Druckpreise:                               │
│  • Schwarz-Weiß: 0,10 € pro Seite          │
│  • Farbe: 0,50 € pro Seite                 │
│                                             │
│  Öffnungszeiten: Mo-Fr 8-18 Uhr            │
│                                             │
└─────────────────────────────────────────────┘`
    },
    {
      id: 'day17-reading3-q12',
      type: 'true-false',
      question: 'Man kann das WLAN nur für eine halbe Stunde benutzen.',
      correctAnswer: 'Falsch',
      explanation:
        'Nach 30 Minuten wird die Verbindung getrennt, aber "Eine neue Verbindung ist möglich". Man kann sich also erneut verbinden.',
      text: `┌─────────────────────────────────────────────┐
│          KOSTENLOSES WLAN                   │
│          Deutsche Bahn                      │
│                                             │
│  WLAN-Name: "Free_WIFI_DB"                  │
│                                             │
│  Jetzt für 30 Minuten kostenlos nutzen!     │
│                                             │
│  Nach 30 Minuten erfolgt eine automatische  │
│  Trennung. Eine neue Verbindung ist         │
│  jederzeit möglich.                         │
│                                             │
│  Kein Passwort erforderlich.                │
│                                             │
│  Viel Spaß beim Surfen!                     │
│                                             │
└─────────────────────────────────────────────┘`
    },
    {
      id: 'day17-reading3-q13',
      type: 'true-false',
      question: 'Am Freitagnachmittag kann man nicht am Computer arbeiten.',
      correctAnswer: 'Richtig',
      explanation:
        'Ab 16:00 Uhr sind die Computer "nicht verfügbar", also kann man nicht arbeiten.',
      text: `┌─────────────────────────────────────────────┐
│     WICHTIGE INFORMATION                    │
│     IT-Abteilung                            │
│                                             │
│  Sehr geehrte Mitarbeiterinnen und          │
│  Mitarbeiter,                               │
│                                             │
│  wegen einer wichtigen Systemaktualisierung │
│  sind am Freitag, den 15.03., ab 16:00 Uhr  │
│  alle Computer und Server nicht verfügbar.  │
│                                             │
│  Bitte speichern Sie Ihre Arbeit            │
│  rechtzeitig und melden Sie sich vor        │
│  16:00 Uhr ab.                              │
│                                             │
│  Die Systeme sind ab Montag, 8:00 Uhr       │
│  wieder verfügbar.                          │
│                                             │
│  Vielen Dank für Ihr Verständnis!           │
│                                             │
│  Ihre IT-Abteilung                          │
└─────────────────────────────────────────────┘`
    },
    {
      id: 'day17-reading3-q14',
      type: 'true-false',
      question: 'Man muss 10 € für einen Adapter bezahlen.',
      correctAnswer: 'Falsch',
      explanation:
        'Man bezahlt 10 € als "Pfand". Das bedeutet, man bekommt das Geld zurück, wenn man den Adapter zurückgibt.',
      text: `┌─────────────────────────────────────────────┐
│     HOTEL EUROPA                            │
│     Rezeption - Information                 │
│                                             │
│  Liebe Gäste,                               │
│                                             │
│  Sie können an der Rezeption folgende       │
│  Artikel ausleihen:                         │
│                                             │
│  • Adapter für internationale Stecker       │
│    (10 € Pfand)                             │
│                                             │
│  • Föhn (5 € Pfand)                         │
│                                             │
│  • Bügeleisen (10 € Pfand)                  │
│                                             │
│  Das Pfand bekommen Sie bei der Rückgabe    │
│  der Artikel zurück.                        │
│                                             │
│  Rezeption geöffnet: 24 Stunden             │
│                                             │
└─────────────────────────────────────────────┘`
    },
    {
      id: 'day17-reading3-q15',
      type: 'true-false',
      question: 'Im Supermarkt kann man mit dem Handy bezahlen.',
      correctAnswer: 'Richtig',
      explanation: 'Das Schild informiert, dass man mit dem Smartphone bezahlen kann ("Bezahlen Sie jetzt auch mit Ihrem Smartphone").',
      text: `┌─────────────────────────────────────────────┐
│     EDEKA SUPERMARKT                        │
│                                             │
│  ★ NEU BEI UNS! ★                           │
│                                             │
│  Bezahlen Sie jetzt auch mit Ihrem          │
│  Smartphone!                                │
│                                             │
│  So einfach geht's:                         │
│                                             │
│  1. Öffnen Sie Ihre Banking-App oder        │
│     Wallet-App auf dem Handy                │
│                                             │
│  2. Halten Sie Ihr Handy einfach an das     │
│     Kartenlesegerät                         │
│                                             │
│  3. Fertig! Schnell und sicher.             │
│                                             │
│  Funktioniert mit Apple Pay, Google Pay     │
│  und allen gängigen Banking-Apps.           │
│                                             │
└─────────────────────────────────────────────┘`
    }
  ],
  text: '' // Each question has its own text in Teil 3
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
