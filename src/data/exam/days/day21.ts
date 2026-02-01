/**
 * Day 21: Reading Focus
 * Focus: Public Library & Books
 * 
 * Skills: Reading (all 3 parts)
 * Topics: Library membership, borrowing books, library rules, book recommendations,
 *         reading habits, library services
 */

import type {
  ExamDay,
  ReadingPractice,
  VocabularyTheme,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// READING PRACTICE - Teil 1 (Questions 1-5)
// Format: ONE large text with 5 Richtig/Falsch questions
// ============================================================================

const readingPart1Questions: ExamQuestion[] = [
  {
    id: 'day21-reading1-q1',
    type: 'true-false',
    question: 'Die Bibliothek ist am Sonntag von 10 bis 16 Uhr geöffnet.',
    correctAnswer: 'Falsch',
    explanation: 'The email says "Sonntags bleibt die Bibliothek geschlossen" (Sunday the library stays closed).'
  },
  {
    id: 'day21-reading1-q2',
    type: 'true-false',
    question: 'Man kann E-Books und Hörbücher kostenlos ausleihen.',
    correctAnswer: 'Richtig',
    explanation: 'The email states "Sie können jetzt E-Books und Hörbücher kostenlos ausleihen".'
  },
  {
    id: 'day21-reading1-q3',
    type: 'true-false',
    question: 'Die Buchlesung für Erwachsene ist jeden Freitag um 18 Uhr.',
    correctAnswer: 'Falsch',
    explanation: 'The reading is on Tuesday at 18:00, not Friday: "Jeden Dienstag um 18 Uhr gibt es eine Buchlesung".'
  },
  {
    id: 'day21-reading1-q4',
    type: 'true-false',
    question: 'Im August ist die Bibliothek wegen Renovierung geschlossen.',
    correctAnswer: 'Richtig',
    explanation: 'The email says "Die Bibliothek ist im August für drei Wochen wegen Renovierung geschlossen".'
  },
  {
    id: 'day21-reading1-q5',
    type: 'true-false',
    question: 'Die Bibliothekskarte kostet für alle Menschen 15 Euro pro Jahr.',
    correctAnswer: 'Falsch',
    explanation: 'Different prices exist: students/pupils pay 8 Euro, children under 12 get it free: "Für Studenten und Schüler ist sie nur 8 Euro. Kinder unter 12 Jahren bekommen die Karte kostenlos".'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Teil 1 - Email about Library Services",
  description: "Read an email from the city library about new opening hours and services. Answer 5 Richtig/Falsch questions about ONE text.",
  instructions: "Lesen Sie die E-Mail. Sind die Sätze 1-5 Richtig oder Falsch? Markieren Sie.",
  text: `Von: stadtbibliothek@berlin-mitte.de
An: mitglieder@bibliothek.de
Betreff: Neue Öffnungszeiten und Services ab Februar

Liebe Bibliotheksmitglieder,

ab dem 1. Februar hat unsere Stadtbibliothek Berlin-Mitte neue Öffnungszeiten. 
Wir sind jetzt montags bis freitags von 9 bis 20 Uhr geöffnet. Am Samstag öffnen 
wir von 10 bis 16 Uhr. Sonntags bleibt die Bibliothek geschlossen.

Wir haben auch neue Services für Sie:
- Sie können jetzt E-Books und Hörbücher kostenlos ausleihen
- Wir haben einen neuen Lesesaal mit 30 Arbeitsplätzen und kostenlosem WLAN
- Jeden Dienstag um 18 Uhr gibt es eine Buchlesung für Erwachsene
- Für Kinder haben wir jeden Freitagnachmittag um 15 Uhr eine Vorlesestunde

Die Bibliothek ist im August für drei Wochen wegen Renovierung geschlossen. 
In dieser Zeit können Sie Bücher nur online verlängern.

Sie können maximal 10 Bücher gleichzeitig ausleihen. Die Leihfrist ist 4 Wochen. 
Wenn Sie ein Buch zu spät zurückgeben, kostet das 0,50 Euro pro Tag.

Die neue Bibliothekskarte kostet 15 Euro pro Jahr. Für Studenten und Schüler 
ist sie nur 8 Euro. Kinder unter 12 Jahren bekommen die Karte kostenlos.

Wir freuen uns auf Ihren Besuch!

Mit freundlichen Grüßen
Ihr Bibliotheksteam Berlin-Mitte`,
  questions: readingPart1Questions
};

// ============================================================================
// READING PRACTICE - Teil 2 (Questions 6-10)
// Format: 5 separate questions, EACH with its own pair of texts/websites (a or b)
// Total: 5 questions × 2 websites each = 10 different websites
// ============================================================================

// Question 6 texts
const q6TextA = `**Website a: www.deutsch-lernen-berlin.de**

SPRACHSCHULE BERLIN

Deutschkurse für alle Niveaus:
• A1 Anfänger - Mo-Fr 9-12 Uhr
• A2 Grundstufe - Mo-Fr 14-17 Uhr
• B1 Mittelstufe - Di+Do 18-20 Uhr

Kostenlose Probestunde!
Anmeldung: Tel. 030-12345678`;

const q6TextB = `**Website b: www.deutsch-buch-shop.de**

DEUTSCH-BÜCHER ONLINE

Lehrbücher für Deutsch als Fremdsprache:
• Grammatikbücher A1-C2
• Übungsbücher mit Lösungen
• Wörterbücher Deutsch-Englisch

Versandkostenfrei ab 20 Euro!`;

const readingPart2Q6: ExamQuestion[] = [
  {
    id: 'day21-reading2-q6',
    type: 'multiple-choice',
    question: 'Sie suchen einen Deutschkurs für Anfänger in Berlin.',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a (www.deutsch-lernen-berlin.de) is a language school offering German courses including A1 for beginners. Website b only sells German textbooks.'
  }
];

// Question 7 texts
const q7TextA = `**Website a: www.buchhandlung-schmidt.de**

BUCHHANDLUNG SCHMIDT

Öffnungszeiten:
Mo-Fr: 9-19 Uhr
Samstag: 10-16 Uhr
Sonntag: geschlossen

Große Auswahl an Büchern und Zeitschriften!`;

const q7TextB = `**Website b: www.bibliothek-info-berlin.de**

STADTBIBLIOTHEK BERLIN
Öffnungszeiten

Mo-Fr: 9-20 Uhr
Samstag: 10-16 Uhr
Sonntag: geschlossen

Alle Standorte und Kontakt:
info@bibliothek-berlin.de`;

const readingPart2Q7: ExamQuestion[] = [
  {
    id: 'day21-reading2-q7',
    type: 'multiple-choice',
    question: 'Sie möchten wissen: Wann hat die Bibliothek am Wochenende geöffnet?',
    options: ['a', 'b'],
    correctAnswer: 1,
    explanation: 'Website b (www.bibliothek-info-berlin.de) provides library opening hours. Website a is a bookstore, not a library.'
  }
];

// Question 8 texts
const q8TextA = `**Website a: www.berlin-restaurants.de**

BERLIN RESTAURANTS

Die besten Restaurants in Berlin:
• Italienisch, Griechisch, Asiatisch
• Bewertungen und Preise
• Online-Reservierung möglich

Finden Sie Ihr Lieblingsrestaurant!
Öffnungszeiten: täglich 11-23 Uhr`;

const q8TextB = `**Website b: www.bibliothek-cafe.de**

BIBLIOTHEKS-CAFÉ

Kleines Café in der Stadtbibliothek
• Kaffee, Tee, Kuchen
• Snacks und Sandwiches

Öffnungszeiten:
Mo-Fr: 9-18 Uhr, Sa: 10-14 Uhr`;

const readingPart2Q8: ExamQuestion[] = [
  {
    id: 'day21-reading2-q8',
    type: 'multiple-choice',
    question: 'Sie suchen ein gutes Restaurant für ein Abendessen am Samstag.',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a (www.berlin-restaurants.de) offers restaurant recommendations with reviews and reservations. Website b is only a small café in a library.'
  }
];

// Question 9 texts
const q9TextA = `**Website a: www.bibliothek-ausleihe.de**

BIBLIOTHEK ONLINE-KATALOG

Suchen Sie Bücher in unserer Bibliothek:
• Bücher reservieren
• Leihfrist verlängern
• E-Books downloaden

Ausleihe nur mit Bibliothekskarte!`;

const q9TextB = `**Website b: www.online-buchversand.de**

ONLINE BUCHVERSAND

Über 10 Millionen Bücher:
• Neue und gebrauchte Bücher
• Lieferung in 2-3 Tagen
• Kostenloser Versand ab 15 Euro

Jetzt bestellen und bezahlen!
Kreditkarte oder PayPal`;

const readingPart2Q9: ExamQuestion[] = [
  {
    id: 'day21-reading2-q9',
    type: 'multiple-choice',
    question: 'Sie möchten ein Buch online bestellen und nach Hause liefern lassen.',
    options: ['a', 'b'],
    correctAnswer: 1,
    explanation: 'Website b (www.online-buchversand.de) is an online bookstore that delivers books to your home. Website a is for borrowing books from the library, not buying them.'
  }
];

// Question 10 texts
const q10TextA = `**Website a: www.stadtbibliothek-services.de**

BIBLIOTHEK SERVICES

Unsere Services für Sie:
• 15 Computer mit Internetanschluss
• Drucker und Scanner
• Kostenloses WLAN
• Arbeitsplätze zum Lernen

Nutzung kostenlos mit Bibliothekskarte!`;

const q10TextB = `**Website b: www.computer-reparatur-berlin.de**

COMPUTER-REPARATUR

Wir reparieren:
• Computer und Laptops
• Drucker und Scanner
• Internet-Probleme lösen

Schnell, günstig, zuverlässig!
Tel: 030-987654321`;

const readingPart2Q10: ExamQuestion[] = [
  {
    id: 'day21-reading2-q10',
    type: 'multiple-choice',
    question: 'Sie wollen wissen: Gibt es in der Bibliothek Computer mit Internet?',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a (www.stadtbibliothek-services.de) shows library services including computers with internet. Website b is for computer repair, not library services.'
  }
];

const readingPractice2a: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 6: German Course",
  description: "Choose the correct website for finding a German course for beginners.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q6TextA}\n\n${q6TextB}`,
  questions: readingPart2Q6
};

const readingPractice2b: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 7: Library Opening Hours",
  description: "Choose the correct website for library weekend opening hours.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q7TextA}\n\n${q7TextB}`,
  questions: readingPart2Q7
};

const readingPractice2c: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 8: Restaurant Search",
  description: "Choose the correct website for finding a restaurant for dinner.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q8TextA}\n\n${q8TextB}`,
  questions: readingPart2Q8
};

const readingPractice2d: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 9: Book Delivery",
  description: "Choose the correct website for ordering books online with home delivery.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q9TextA}\n\n${q9TextB}`,
  questions: readingPart2Q9
};

const readingPractice2e: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 10: Library Computers",
  description: "Choose the correct website for library computer services.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q10TextA}\n\n${q10TextB}`,
  questions: readingPart2Q10
};

// ============================================================================
// READING PRACTICE - Teil 3 (Questions 11-15)
// Format: 5 separate questions, EACH with 1 statement + 1 notice/sign
// Answer: Richtig or Falsch
// ============================================================================

// Question 11
const q11Notice = `KINDERPROGRAMM
Stadtbibliothek

VORLESESTUNDE FÜR KINDER
(4-8 Jahre)

Jeden Mittwoch: 15:00-16:00 Uhr

Wir lesen spannende Geschichten
und basteln zusammen!

Eintritt frei!
Keine Anmeldung nötig.`;

const readingPart3Q11: ExamQuestion[] = [
  {
    id: 'day21-reading3-q11',
    type: 'true-false',
    question: 'Kinder können in der Bibliothek am Mittwoch eine Geschichte hören.',
    correctAnswer: 'Richtig',
    explanation: 'The notice shows story time for children on Wednesday 15:00-16:00: "Jeden Mittwoch: 15:00-16:00 Uhr".'
  }
];

const readingPractice3a: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 11: Children's Story Time",
  description: "Read a notice about a children's program and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q11Notice,
  questions: readingPart3Q11
};

// Question 12
const q12Notice = `WICHTIGE INFORMATION
Leihfristen

Bücher:        4 Wochen
DVDs:          2 Wochen
Zeitschriften: 1 Woche

Bei verspäteter Rückgabe:
Gebühr: 0,50 € pro Tag

Verlängern Sie online oder telefonisch!`;

const readingPart3Q12: ExamQuestion[] = [
  {
    id: 'day21-reading3-q12',
    type: 'true-false',
    question: 'Wenn man die Bücher zu spät zurückgibt, muss man nichts bezahlen.',
    correctAnswer: 'Falsch',
    explanation: 'The notice clearly states late fees: "Bei verspäteter Rückgabe: Gebühr: 0,50 € pro Tag".'
  }
];

const readingPractice3b: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 12: Late Return Fees",
  description: "Read information about loan periods and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q12Notice,
  questions: readingPart3Q12
};

// Question 13
const q13Notice = `KURSANGEBOT
Februar - April

COMPUTER FÜR SENIOREN
Jeden Montag: 14-16 Uhr
Anmeldung erforderlich

ENGLISCH FÜR ANFÄNGER
Jeden Donnerstag: 18-19:30 Uhr
Anmeldung erforderlich

Kosten: 5 € pro Kurs
Tel: 089-12345678`;

const readingPart3Q13: ExamQuestion[] = [
  {
    id: 'day21-reading3-q13',
    type: 'true-false',
    question: 'Am Montag kann man in der Bibliothek einen Computerkurs besuchen.',
    correctAnswer: 'Richtig',
    explanation: 'The notice shows a computer course on Monday 14-16: "COMPUTER FÜR SENIOREN Jeden Montag: 14-16 Uhr".'
  }
];

const readingPractice3c: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 13: Computer Course",
  description: "Read a course schedule and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q13Notice,
  questions: readingPart3Q13
};

// Question 14
const q14Notice = `Von: bibliothek@stadt-frankfurt.de
Betreff: Sommeröffnungszeiten

Liebe Bibliotheksnutzer,

ab dem 1. Juli bis 31. August haben wir 
geänderte Öffnungszeiten:

Montag bis Freitag: 10-16 Uhr
Samstag: geschlossen

In den letzten zwei Wochen im August (16.-31.8.) 
bleibt die Bibliothek wegen Renovierungsarbeiten 
komplett geschlossen.

Ab September sind wir wieder zu den normalen 
Zeiten für Sie da.

Ihr Bibliotheksteam`;

const readingPart3Q14: ExamQuestion[] = [
  {
    id: 'day21-reading3-q14',
    type: 'true-false',
    question: 'Die Bibliothek hat im Sommer besondere Öffnungszeiten.',
    correctAnswer: 'Richtig',
    explanation: 'The email clearly states special summer hours from July 1 to August 31: "ab dem 1. Juli bis 31. August haben wir geänderte Öffnungszeiten".'
  }
];

const readingPractice3d: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 14: Summer Hours",
  description: "Read an email about summer opening hours and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q14Notice,
  questions: readingPart3Q14
};

// Question 15
const q15Notice = `BIBLIOTHEKSREGELN

Bitte beachten Sie:

✓ Leise sprechen
✓ Handys auf lautlos stellen
✓ Essen und Trinken nur im Café
✓ Taschen an der Garderobe abgeben

✗ Nicht telefonieren
✗ Keine laute Musik

Vielen Dank für Ihr Verständnis!`;

const readingPart3Q15: ExamQuestion[] = [
  {
    id: 'day21-reading3-q15',
    type: 'true-false',
    question: 'Man darf in der Bibliothek telefonieren und laut sprechen.',
    correctAnswer: 'Falsch',
    explanation: 'The rules clearly prohibit phone calls ("✗ Nicht telefonieren") and require quiet speaking ("✓ Leise sprechen"), not loud speaking.'
  }
];

const readingPractice3e: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 15: Library Rules",
  description: "Read library rules and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q15Notice,
  questions: readingPart3Q15
};

// ============================================================================
// VOCABULARY THEME - Public Library & Books
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Public Library & Books (Bibliothek & Bücher)',
  items: [
    // Library Basics
    { german: "die Bibliothek", english: "library", 
      example: "Die Bibliothek hat neue Öffnungszeiten." },
    { german: "die Stadtbibliothek", english: "city library", 
      example: "Die Stadtbibliothek ist in der Hauptstraße." },
    { german: "das Buch / die Bücher", english: "book / books", 
      example: "Ich lese gern Bücher auf Deutsch." },
    { german: "das E-Book", english: "e-book", 
      example: "Sie können E-Books kostenlos ausleihen." },
    { german: "das Hörbuch", english: "audiobook", 
      example: "Ich höre Hörbücher beim Autofahren." },
    { german: "die Zeitschrift", english: "magazine", 
      example: "Die Bibliothek hat viele Zeitschriften." },
    { german: "der Roman", english: "novel", 
      example: "Ich lese gern Romane." },
    { german: "der Krimi", english: "crime/detective novel", 
      example: "Dieser Krimi ist sehr spannend." },
    { german: "das Sachbuch", english: "non-fiction book", 
      example: "Sachbücher über Geschichte sind interessant." },
    { german: "das Kinderbuch", english: "children's book", 
      example: "Wir haben viele neue Kinderbücher." },
    
    // Library Services
    { german: "ausleihen", english: "to borrow/lend out", 
      example: "Man kann maximal 10 Bücher ausleihen." },
    { german: "zurückgeben", english: "to return", 
      example: "Bitte geben Sie die Bücher rechtzeitig zurück." },
    { german: "verlängern", english: "to extend/renew", 
      example: "Sie können die Leihfrist online verlängern." },
    { german: "reservieren", english: "to reserve", 
      example: "Ich möchte dieses Buch reservieren." },
    { german: "die Leihfrist", english: "loan period", 
      example: "Die Leihfrist ist 4 Wochen." },
    { german: "die Bibliothekskarte", english: "library card", 
      example: "Die Bibliothekskarte kostet 15 Euro pro Jahr." },
    { german: "das Mitglied", english: "member", 
      example: "Alle Mitglieder bekommen eine E-Mail." },
    { german: "die Anmeldung", english: "registration", 
      example: "Für den Kurs ist eine Anmeldung erforderlich." },
    { german: "kostenlos", english: "free (of charge)", 
      example: "Kinder bekommen die Karte kostenlos." },
    { german: "die Gebühr", english: "fee", 
      example: "Bei verspäteter Rückgabe: Gebühr 0,50 € pro Tag." },
    
    // Library Facilities
    { german: "der Lesesaal", english: "reading room", 
      example: "Der neue Lesesaal hat 30 Arbeitsplätze." },
    { german: "der Arbeitsplatz", english: "workstation/desk", 
      example: "Alle Arbeitsplätze haben WLAN." },
    { german: "das WLAN", english: "WiFi", 
      example: "Das WLAN ist kostenlos." },
    { german: "der Computer", english: "computer", 
      example: "Es gibt 15 Computer mit Internetanschluss." },
    { german: "der Drucker", english: "printer", 
      example: "Der Drucker ist neben den Computern." },
    { german: "der Scanner", english: "scanner", 
      example: "Sie können Dokumente scannen." },
    { german: "die Garderobe", english: "cloakroom", 
      example: "Bitte Taschen an der Garderobe abgeben." },
    { german: "das Café", english: "café", 
      example: "Essen und Trinken nur im Café." },
    
    // Events & Programs
    { german: "die Buchlesung", english: "book reading", 
      example: "Jeden Dienstag gibt es eine Buchlesung." },
    { german: "die Vorlesestunde", english: "story time", 
      example: "Die Vorlesestunde ist für Kinder von 4-8 Jahren." },
    { german: "der Kurs", english: "course", 
      example: "Der Computerkurs ist jeden Montag." },
    { german: "die Veranstaltung", english: "event", 
      example: "Die Bibliothek hat viele Veranstaltungen." },
    { german: "spannend", english: "exciting/thrilling", 
      example: "Wir lesen spannende Geschichten." },
    { german: "basteln", english: "to craft/make", 
      example: "Die Kinder basteln zusammen." },
    
    // Time & Availability
    { german: "die Öffnungszeiten", english: "opening hours", 
      example: "Die neuen Öffnungszeiten sind Mo-Fr 9-20 Uhr." },
    { german: "geöffnet", english: "open", 
      example: "Am Samstag ist die Bibliothek geöffnet." },
    { german: "geschlossen", english: "closed", 
      example: "Sonntags bleibt die Bibliothek geschlossen." },
    { german: "die Renovierung", english: "renovation", 
      example: "Im August ist Renovierung." },
    { german: "verspätet", english: "late/delayed", 
      example: "Bei verspäteter Rückgabe gibt es eine Gebühr." },
    { german: "rechtzeitig", english: "on time", 
      example: "Bitte geben Sie die Bücher rechtzeitig zurück." },
    { german: "gleichzeitig", english: "at the same time/simultaneously", 
      example: "Man kann maximal 10 Bücher gleichzeitig ausleihen." },
    
    // Actions & Verbs
    { german: "lesen", english: "to read", 
      example: "Ich lese jeden Tag ein Buch." },
    { german: "suchen", english: "to search/look for", 
      example: "Sie suchen ein Buch über Geschichte." },
    { german: "finden", english: "to find", 
      example: "Wo kann ich deutsche Bücher finden?" },
    { german: "bestellen", english: "to order", 
      example: "Sie können Bücher online bestellen." },
    { german: "bezahlen", english: "to pay", 
      example: "Man muss die Gebühr bezahlen." },
    { german: "mitbringen", english: "to bring along", 
      example: "Bitte Bibliothekskarte mitbringen." },
    { german: "abgeben", english: "to hand in/leave", 
      example: "Taschen an der Garderobe abgeben." },
    { german: "benutzen / nutzen", english: "to use", 
      example: "Sie können die Computer nutzen." },
    
    // Rules & Behavior
    { german: "die Regel", english: "rule", 
      example: "Bitte beachten Sie die Bibliotheksregeln." },
    { german: "leise", english: "quiet/quietly", 
      example: "Bitte leise sprechen in der Bibliothek." },
    { german: "laut", english: "loud/loudly", 
      example: "Keine laute Musik in der Bibliothek." },
    { german: "telefonieren", english: "to make phone calls", 
      example: "Man darf nicht telefonieren." },
    { german: "das Handy / die Handys", english: "mobile phone(s)", 
      example: "Handys auf lautlos stellen." },
    { german: "lautlos", english: "silent/mute", 
      example: "Bitte Handy auf lautlos stellen." },
    { german: "erlaubt", english: "allowed/permitted", 
      example: "Essen ist nur im Café erlaubt." },
    { german: "verboten", english: "forbidden/prohibited", 
      example: "Telefonieren ist verboten." },
    
    // Useful Phrases
    { german: "Eintritt frei", english: "free admission", 
      example: "Die Vorlesestunde hat freien Eintritt." },
    { german: "Anmeldung erforderlich", english: "registration required", 
      example: "Für den Kurs ist Anmeldung erforderlich." },
    { german: "Keine Anmeldung nötig", english: "no registration needed", 
      example: "Für die Vorlesestunde ist keine Anmeldung nötig." },
    { german: "Bitte beachten Sie", english: "please note", 
      example: "Bitte beachten Sie die neuen Öffnungszeiten." },
    { german: "Vielen Dank für Ihr Verständnis", english: "thank you for your understanding", 
      example: "Vielen Dank für Ihr Verständnis!" },
    { german: "Wir freuen uns auf Ihren Besuch", english: "we look forward to your visit", 
      example: "Wir freuen uns auf Ihren Besuch!" }
  ]
};

// ============================================================================
// Day 21 Export
// ============================================================================

const day21: ExamDay = {
  day: 21,
  skills: ['Reading'],
  practices: [
    // Teil 1: ONE text with 5 questions
    readingPractice1,
    
    // Teil 2: 5 separate reading practices, each with own pair of websites
    readingPractice2a,
    readingPractice2b,
    readingPractice2c,
    readingPractice2d,
    readingPractice2e,
    
    // Teil 3: 5 separate reading practices, each with own notice
    readingPractice3a,
    readingPractice3b,
    readingPractice3c,
    readingPractice3d,
    readingPractice3e
  ],
  vocabulary,
  focus: "Public Library & Books"
};

export default day21;
