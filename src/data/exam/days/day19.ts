/**
 * Day 19: Reading Focus
 * Focus: Post Office & Mail Services
 * 
 * Skills: Reading (all 3 parts)
 * Topics: Post office services, sending letters and packages, mail tracking,
 *         stamps, postal forms, shipping options, delivery services
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
    id: 'day19-reading1-q1',
    type: 'true-false',
    question: 'Stefans Paket kommt aus Österreich.',
    correctAnswer: 'Falsch',
    explanation: 'The email says the package comes from Switzerland (aus der Schweiz), not Austria.'
  },
  {
    id: 'day19-reading1-q2',
    type: 'true-false',
    question: 'Das Paket ist am Donnerstag in der Postfiliale.',
    correctAnswer: 'Richtig',
    explanation: 'The email states "Am Donnerstag kannst du es in der Postfiliale abholen".'
  },
  {
    id: 'day19-reading1-q3',
    type: 'true-false',
    question: 'Die Postfiliale ist in der Bahnhofstraße 45.',
    correctAnswer: 'Richtig',
    explanation: 'The email mentions "Die Postfiliale ist in der Bahnhofstraße 45".'
  },
  {
    id: 'day19-reading1-q4',
    type: 'true-false',
    question: 'Stefan braucht nur seinen Personalausweis.',
    correctAnswer: 'Falsch',
    explanation: 'Stefan needs both his ID (Personalausweis) AND the notification card (Benachrichtigungskarte).'
  },
  {
    id: 'day19-reading1-q5',
    type: 'true-false',
    question: 'Die Post ist am Samstagvormittag geschlossen.',
    correctAnswer: 'Falsch',
    explanation: 'The opening hours show Saturday morning 9:00-12:00, so it is open.'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Teil 1 - Email about Package Delivery",
  description: "Read an email about picking up a package at the post office. Answer 5 Richtig/Falsch questions about ONE text.",
  instructions: "Lesen Sie die E-Mail. Sind die Sätze 1-5 Richtig oder Falsch? Markieren Sie.",
  text: `Hallo Stefan,

dein Paket aus der Schweiz ist angekommen! Der Postbote war gestern bei dir zu Hause, aber du warst nicht da. Er hat eine Benachrichtigungskarte in deinen Briefkasten gelegt.

Am Donnerstag kannst du es in der Postfiliale abholen. Die Postfiliale ist in der Bahnhofstraße 45, gleich neben der Bäckerei Müller. Du brauchst deinen Personalausweis und die Benachrichtigungskarte.

Wichtig: Bring beide Dokumente mit! Ohne Benachrichtigungskarte bekommst du das Paket nicht.

Die Öffnungszeiten der Post sind:
Montag-Freitag: 8:00-18:00 Uhr
Samstag: 9:00-12:00 Uhr
Sonntag: geschlossen

Das Paket ist 14 Tage in der Postfiliale. Danach geht es zurück zum Absender.

Viele Grüße
Claudia
(Deutsche Post Service)`,
  questions: readingPart1Questions
};

// ============================================================================
// READING PRACTICE - Teil 2 (Questions 6-10)
// Format: 5 separate questions, EACH with its own pair of texts/websites (a or b)
// Total: 5 questions × 2 websites each = 10 different websites
// ============================================================================

// Question 6 texts
const q6TextA = `**Website a: www.deutschepost.de/international**
INTERNATIONALE PAKETE
Versenden Sie Pakete weltweit
- Europa: ab 16,99€
- Weltweit: ab 37,99€
Laufzeit: 3-7 Werktage
Sendungsverfolgung inklusive
Online-Porto: 10% Rabatt!`;

const q6TextB = `**Website b: www.schnell-express.de**
EXPRESS-KURIER DEUTSCHLAND
Heute bestellt = morgen geliefert!
Deutschlandweit in 24 Stunden
Abholung bei Ihnen zu Hause
Preis: ab 12,99€
Öffnungszeiten: 24/7 Service`;

// Question 7 texts
const q7TextA = `**Website a: www.post-filiale-finder.de**
POSTFILIALEN IN IHRER NÄHE
Finden Sie die nächste Postfiliale
Über 13.000 Standorte in Deutschland
Öffnungszeiten und Services
Auch Packstationen verfügbar
Kostenlose App downloaden!`;

const q7TextB = `**Website b: www.porto-online.de**
BRIEFMARKEN ONLINE KAUFEN
Kaufen und sofort ausdrucken!
Keine Wartezeit an der Post
Für Briefe und Postkarten
Bezahlung: PayPal, Kreditkarte
24 Stunden verfügbar`;

// Question 8 texts
const q8TextA = `**Website a: www.sendungsverfolgung.de**
SENDUNGSVERFOLGUNG ONLINE
Wo ist Ihr Paket?
Geben Sie Ihre Sendungsnummer ein
Status in Echtzeit
Benachrichtigung per SMS oder E-Mail
Kostenloser Service`;

const q8TextB = `**Website b: www.verpackung-shop.de**
VERPACKUNGSMATERIAL KAUFEN
Kartons in allen Größen
Luftpolsterfolie und Klebeband
Versandtaschen gepolstert
Günstige Preise
Lieferung nach Hause`;

// Question 9 texts
const q9TextA = `**Website a: www.postfach-service.de**
POSTFACH MIETEN
Ihre eigene Postadresse
Sicher und privat
Abholung wann Sie wollen
Verschiedene Größen
Ab 19,90€ pro Monat
In allen Postfilialen verfügbar`;

const q9TextB = `**Website b: www.umzugsservice-post.de**
NACHSENDESERVICE
Sie sind umgezogen?
Wir leiten Ihre Post weiter!
6 Monate oder 12 Monate
Einfach online beantragen
Preis: ab 26,90€
Sofort aktiviert`;

// Question 10 texts
const q10TextA = `**Website a: www.briefmarken-sammler.de**
BRIEFMARKENSAMMLER-CLUB
Tauschen Sie Briefmarken
Über 5000 Mitglieder
Monatliche Treffen in 50 Städten
Kataloge und Infos
Online-Forum und Marktplatz
Mitgliedschaft: 2€/Monat`;

const q10TextB = `**Website b: www.post-geschichte-museum.de**
MUSEUM FÜR POSTGESCHICHTE
Besuchen Sie unser Museum!
500 Jahre Postgeschichte
Historische Postkutschen
Alte Briefkästen und Uniformen
Öffnungszeiten: Di-So 10-17 Uhr
Eintritt: 8€, ermäßigt 5€`;

const readingPart2Q6: ExamQuestion[] = [
  {
    id: 'day19-reading2-q6',
    type: 'multiple-choice',
    question: 'Sie möchten ein Paket nach Italien schicken. Wo finden Sie Informationen über internationale Pakete?',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a (www.deutschepost.de/international) has information about international packages to Europe. Website b is only for express delivery within Germany.'
  }
];

const readingPart2Q7: ExamQuestion[] = [
  {
    id: 'day19-reading2-q7',
    type: 'multiple-choice',
    question: 'Sie haben keine Zeit, zur Post zu gehen. Sie brauchen Briefmarken. Welche Website hilft Ihnen?',
    options: ['a', 'b'],
    correctAnswer: 1,
    explanation: 'Website b (www.porto-online.de) lets you buy and print stamps online at home. Website a only helps you find post office locations.'
  }
];

const readingPart2Q8: ExamQuestion[] = [
  {
    id: 'day19-reading2-q8',
    type: 'multiple-choice',
    question: 'Ihr Paket ist nicht angekommen. Sie möchten wissen: Wo ist mein Paket?',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a (www.sendungsverfolgung.de) offers package tracking to find your parcel. Website b only sells packaging materials.'
  }
];

const readingPart2Q9: ExamQuestion[] = [
  {
    id: 'day19-reading2-q9',
    type: 'multiple-choice',
    question: 'Sie wohnen neu in Berlin. Wo können Sie eine Nachsendung für Ihre Post beantragen?',
    options: ['a', 'b'],
    correctAnswer: 1,
    explanation: 'Website b (www.umzugsservice-post.de) offers mail forwarding service for people who moved. Website a is only for renting a PO box.'
  }
];

const readingPart2Q10: ExamQuestion[] = [
  {
    id: 'day19-reading2-q10',
    type: 'multiple-choice',
    question: 'Sie möchten alte Briefmarken sammeln. Wo finden Sie Informationen für Ihr Hobby?',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a (www.briefmarken-sammler.de) is a stamp collectors club with meetings and trading. Website b is a museum, not for active collectors.'
  }
];

const readingPractice2a: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 6: International Packages",
  description: "Choose the correct website for sending international packages.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q6TextA}\n\n${q6TextB}`,
  questions: readingPart2Q6
};

const readingPractice2b: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 7: Online Stamps",
  description: "Choose the correct website for buying stamps without going to the post office.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q7TextA}\n\n${q7TextB}`,
  questions: readingPart2Q7
};

const readingPractice2c: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 8: Package Tracking",
  description: "Choose the correct website for tracking a missing package.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q8TextA}\n\n${q8TextB}`,
  questions: readingPart2Q8
};

const readingPractice2d: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 9: Mail Forwarding",
  description: "Choose the correct website for forwarding mail after moving.",
  instructions: "Lesen Sie die Aufgabe und die Websites a und b. Welche Website passt? Markieren Sie a oder b.",
  text: `${q9TextA}\n\n${q9TextB}`,
  questions: readingPart2Q9
};

const readingPractice2e: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 10: Stamp Collecting",
  description: "Choose the correct website for stamp collecting hobby.",
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
const q11Notice = `POSTFILIALE GESCHLOSSEN

Wegen Umbau geschlossen vom:
15. Februar bis 28. Februar

Bitte nutzen Sie in dieser Zeit
die Postfiliale in der
Kirchstraße 12
(10 Minuten zu Fuß)

Öffnung: 1. März, 8:00 Uhr`;

const readingPart3Q11: ExamQuestion[] = [
  {
    id: 'day19-reading3-q11',
    type: 'true-false',
    question: 'Die Postfiliale macht am 1. März wieder auf.',
    correctAnswer: 'Richtig',
    explanation: 'The sign says "Öffnung: 1. März, 8:00 Uhr" - the post office reopens on March 1st.'
  }
];

// Question 12
const q12Notice = `PAKETABHOLUNG

WICHTIG!
Bringen Sie bitte mit:
✓ Personalausweis ODER Pass
✓ Benachrichtigungskarte

Ohne diese Dokumente können wir
Ihr Paket nicht herausgeben.

Abholung möglich für:
- Sie selbst
- Familienangehörige mit
  Vollmacht`;

const readingPart3Q12: ExamQuestion[] = [
  {
    id: 'day19-reading3-q12',
    type: 'true-false',
    question: 'Man braucht nur die Benachrichtigungskarte, um ein Paket abzuholen.',
    correctAnswer: 'Falsch',
    explanation: 'The notice says you need BOTH ID (Personalausweis ODER Pass) AND notification card (Benachrichtigungskarte).'
  }
];

// Question 13
const q13Notice = `E-MAIL VON DEUTSCHE POST

Guten Tag Frau Weber,

Ihr Paket mit der Sendungsnummer
RD 1234 5678 90 DE ist heute bei
uns angekommen.

Sie können es ab morgen in der
Postfiliale abholen.

Lagerzeit: 7 Werktage
Danach geht das Paket zurück.

Adresse: Hauptstraße 89, 10827
Berlin

Mit freundlichen Grüßen
Ihr Post-Team`;

const readingPart3Q13: ExamQuestion[] = [
  {
    id: 'day19-reading3-q13',
    type: 'true-false',
    question: 'Frau Weber kann das Paket heute abholen.',
    correctAnswer: 'Falsch',
    explanation: 'The email says "Sie können es ab morgen in der Postfiliale abholen" - she can pick it up starting tomorrow, not today.'
  }
];

// Question 14
const q14Notice = `BRIEFKASTEN-LEERUNG

Leerungszeiten:

Montag - Freitag:
9:00 Uhr, 15:00 Uhr, 18:00 Uhr

Samstag:
11:00 Uhr (letzte Leerung)

Sonntag und Feiertage:
Keine Leerung

Wichtig: Briefe nach 18:00 Uhr
werden erst am nächsten Werktag
abgeholt.`;

const readingPart3Q14: ExamQuestion[] = [
  {
    id: 'day19-reading3-q14',
    type: 'true-false',
    question: 'Am Sonntag wird der Briefkasten dreimal geleert.',
    correctAnswer: 'Falsch',
    explanation: 'The sign clearly states "Sonntag und Feiertage: Keine Leerung" - no collection on Sundays.'
  }
];

// Question 15
const q15Notice = `PACKSTATION INFO

24/7 Paketservice ohne Wartezeit!

So funktioniert es:
1. Paket online frankieren
2. Packstation als Abgabeort
   wählen
3. Paket zur Packstation bringen
4. QR-Code scannen
5. Fach öffnet sich automatisch
6. Paket einlegen - fertig!

Kosten: 0€ (nur Porto bezahlen)

Registrierung nötig unter:
www.packstation.de`;

const readingPart3Q15: ExamQuestion[] = [
  {
    id: 'day19-reading3-q15',
    type: 'true-false',
    question: 'Man kann die Packstation nur von Montag bis Freitag benutzen.',
    correctAnswer: 'Falsch',
    explanation: 'The sign says "24/7 Paketservice" - you can use it 24 hours a day, 7 days a week, not just weekdays.'
  }
];

const readingPractice3a: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 11: Post Office Closure Notice",
  description: "Read a post office closure notice and answer Richtig or Falsch.",
  instructions: "Lesen Sie die Aufgabe und das Schild. Ist der Satz Richtig oder Falsch? Markieren Sie.",
  text: q11Notice,
  questions: readingPart3Q11
};

const readingPractice3b: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 12: Package Pickup Requirements",
  description: "Read package pickup requirements and answer Richtig or Falsch.",
  instructions: "Lesen Sie die Aufgabe und das Schild. Ist der Satz Richtig oder Falsch? Markieren Sie.",
  text: q12Notice,
  questions: readingPart3Q12
};

const readingPractice3c: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 13: Package Arrival Email",
  description: "Read a package arrival notification email and answer Richtig or Falsch.",
  instructions: "Lesen Sie die Aufgabe und die E-Mail. Ist der Satz Richtig oder Falsch? Markieren Sie.",
  text: q13Notice,
  questions: readingPart3Q13
};

const readingPractice3d: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 14: Mailbox Collection Times",
  description: "Read mailbox collection schedule and answer Richtig or Falsch.",
  instructions: "Lesen Sie die Aufgabe und das Schild. Ist der Satz Richtig oder Falsch? Markieren Sie.",
  text: q14Notice,
  questions: readingPart3Q14
};

const readingPractice3e: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 15: Packstation Information",
  description: "Read Packstation (parcel locker) information and answer Richtig or Falsch.",
  instructions: "Lesen Sie die Aufgabe und das Schild. Ist der Satz Richtig oder Falsch? Markieren Sie.",
  text: q15Notice,
  questions: readingPart3Q15
};

// ============================================================================
// Vocabulary - Post Office & Mail Services
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: "Post Office & Mail Services",
  items: [
    // Post Office Places
    { german: "die Post", english: "post office", example: "Ich gehe zur Post." },
    { german: "die Postfiliale", english: "post office branch", example: "Die Postfiliale ist in der Bahnhofstraße." },
    { german: "die Packstation", english: "parcel locker", example: "Ich hole mein Paket an der Packstation ab." },
    { german: "der Briefkasten", english: "mailbox", example: "Der Briefkasten ist vor dem Haus." },
    { german: "der Schalter", english: "counter", example: "Bitte gehen Sie zum Schalter 3." },
    
    // Mail & Packages
    { german: "der Brief", english: "letter", example: "Ich schreibe einen Brief." },
    { german: "die Postkarte", english: "postcard", example: "Ich schicke eine Postkarte aus Berlin." },
    { german: "das Paket", english: "package/parcel", example: "Das Paket kommt morgen an." },
    { german: "das Päckchen", english: "small parcel", example: "Ein Päckchen ist günstiger als ein Paket." },
    { german: "die Sendung", english: "shipment/consignment", example: "Wo ist meine Sendung?" },
    
    // Stamps & Payment
    { german: "die Briefmarke", english: "stamp", example: "Ich brauche drei Briefmarken." },
    { german: "das Porto", english: "postage", example: "Was kostet das Porto nach Österreich?" },
    { german: "frankieren", english: "to stamp/frank", example: "Sie müssen den Brief frankieren." },
    
    // Documents & Forms
    { german: "die Benachrichtigungskarte", english: "notification card", 
      example: "Die Benachrichtigungskarte liegt im Briefkasten." },
    { german: "der Personalausweis", english: "ID card", 
      example: "Bringen Sie bitte Ihren Personalausweis mit." },
    { german: "der Pass", english: "passport", example: "Ich zeige meinen Pass." },
    { german: "die Vollmacht", english: "power of attorney", 
      example: "Sie brauchen eine Vollmacht zur Abholung." },
    { german: "die Sendungsnummer", english: "tracking number", 
      example: "Die Sendungsnummer ist RD 1234 5678 90 DE." },
    
    // Services
    { german: "die Sendungsverfolgung", english: "package tracking", 
      example: "Die Sendungsverfolgung zeigt: Paket ist unterwegs." },
    { german: "der Nachsendeservice", english: "mail forwarding service", 
      example: "Nach dem Umzug brauche ich einen Nachsendeservice." },
    { german: "das Postfach", english: "PO box", 
      example: "Ich miete ein Postfach für 20 Euro pro Monat." },
    { german: "der Express-Service", english: "express service", 
      example: "Mit Express-Service kommt das Paket morgen an." },
    
    // Actions - Sending
    { german: "schicken / senden", english: "to send", 
      example: "Ich schicke das Paket nach Italien." },
    { german: "versenden", english: "to dispatch/ship", 
      example: "Wir versenden Pakete weltweit." },
    { german: "verschicken", english: "to mail/send off", 
      example: "Ich verschicke die Briefe heute." },
    { german: "abschicken", english: "to send off/post", 
      example: "Ich schicke den Brief morgen ab." },
    { german: "einwerfen", english: "to drop in (mailbox)", 
      example: "Werfen Sie den Brief in den Briefkasten ein." },
    
    // Actions - Receiving
    { german: "abholen", english: "to pick up/collect", 
      example: "Ich hole das Paket morgen ab." },
    { german: "empfangen", english: "to receive", 
      example: "Ich empfange viele Pakete." },
    { german: "ankommen", english: "to arrive", 
      example: "Das Paket kommt heute an." },
    { german: "bekommen / erhalten", english: "to get/receive", 
      example: "Ich bekomme ein Paket aus der Schweiz." },
    
    // Actions - Other
    { german: "wiegen", english: "to weigh", 
      example: "Der Brief wiegt 50 Gramm." },
    { german: "packen / verpacken", english: "to pack/wrap", 
      example: "Ich muss das Geschenk verpacken." },
    { german: "beantragen", english: "to apply for", 
      example: "Ich beantrage einen Nachsendeservice online." },
    { german: "leeren", english: "to empty/collect", 
      example: "Der Briefkasten wird dreimal täglich geleert." },
    
    // Destinations
    { german: "der Absender", english: "sender", 
      example: "Der Absender ist Max Müller, Berlin." },
    { german: "der Empfänger", english: "recipient", 
      example: "Schreiben Sie den Empfänger auf das Paket." },
    { german: "die Adresse", english: "address", 
      example: "Bitte schreiben Sie die Adresse deutlich." },
    { german: "die Postleitzahl (PLZ)", english: "postal code/ZIP code", 
      example: "Die PLZ von Berlin-Mitte ist 10178." },
    
    // Packaging Materials
    { german: "der Karton", english: "cardboard box", 
      example: "Ich brauche einen großen Karton." },
    { german: "der Umschlag", english: "envelope", 
      example: "Legen Sie den Brief in einen Umschlag." },
    { german: "die Versandtasche", english: "shipping bag", 
      example: "Eine gepolsterte Versandtasche schützt das Buch." },
    { german: "das Klebeband", english: "tape", 
      example: "Ich brauche Klebeband zum Verschließen." },
    { german: "die Luftpolsterfolie", english: "bubble wrap", 
      example: "Wickeln Sie das Glas in Luftpolsterfolie." },
    
    // Shipping Options
    { german: "die Lieferung", english: "delivery", 
      example: "Die Lieferung dauert 3-5 Werktage." },
    { german: "die Laufzeit", english: "delivery time", 
      example: "Die Laufzeit nach Frankreich ist 5 Tage." },
    { german: "der Werktag", english: "working day/weekday", 
      example: "Montag bis Freitag sind Werktage." },
    { german: "die Abholung", english: "pickup/collection", 
      example: "Die Abholung ist kostenlos." },
    { german: "die Lagerzeit", english: "storage period", 
      example: "Die Lagerzeit ist 7 Werktage." },
    
    // Adjectives & Descriptions
    { german: "international", english: "international", 
      example: "Ich verschicke ein internationales Paket." },
    { german: "national / inland", english: "domestic", 
      example: "Inlandsbriefe sind günstiger." },
    { german: "gepolstert", english: "padded", 
      example: "Ein gepolsterter Umschlag kostet 2 Euro." },
    { german: "versichert", english: "insured", 
      example: "Das Paket ist bis 500 Euro versichert." },
    { german: "eingeschrieben", english: "registered", 
      example: "Ich schicke den Brief eingeschrieben." },
    
    // Status & Conditions
    { german: "unterwegs", english: "on the way/in transit", 
      example: "Das Paket ist unterwegs nach München." },
    { german: "angekommen", english: "arrived", 
      example: "Ihr Paket ist angekommen." },
    { german: "zugestellt", english: "delivered", 
      example: "Das Paket wurde heute zugestellt." },
    { german: "zurück", english: "back/returned", 
      example: "Das Paket geht zurück zum Absender." },
    
    // Time Expressions
    { german: "die Öffnungszeiten", english: "opening hours", 
      example: "Die Öffnungszeiten sind Mo-Fr 8-18 Uhr." },
    { german: "geschlossen", english: "closed", 
      example: "Die Post ist sonntags geschlossen." },
    { german: "der Feiertag", english: "public holiday", 
      example: "An Feiertagen ist keine Leerung." },
    { german: "die Leerung", english: "collection/emptying", 
      example: "Die letzte Leerung ist um 18 Uhr." },
    
    // Useful Phrases
    { german: "Wegen Umbau geschlossen", english: "closed for renovation", 
      example: "Die Post ist wegen Umbau geschlossen." },
    { german: "Bitte mitbringen", english: "please bring along", 
      example: "Bitte Personalausweis mitbringen." },
    { german: "inklusive", english: "included/inclusive", 
      example: "Sendungsverfolgung ist inklusive." },
    { german: "verfügbar", english: "available", 
      example: "Der Service ist 24/7 verfügbar." },
    { german: "kostenlos", english: "free (of charge)", 
      example: "Die Abholung ist kostenlos." }
  ]
};

// ============================================================================
// Day 19 Export
// ============================================================================

const day19: ExamDay = {
  day: 19,
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
  focus: "Post Office & Mail Services"
};

export default day19;
