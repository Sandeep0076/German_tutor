/**
 * Day 23: Reading Focus
 * Focus: Sports Center & Fitness
 * 
 * Skills: Reading (all 3 parts)
 * Topics: Gym membership, fitness courses, swimming pool, sports facilities,
 *         training schedules, membership fees, facility rules
 */

import type {
  ExamDay,
  ReadingPractice,
  VocabularyTheme,
  VocabularyItem,
  ExamQuestion
} from '../examTypes';

// ============================================================================
// READING PRACTICE - Teil 1 (Questions 1-5)
// Format: ONE large text with 5 Richtig/Falsch questions
// ============================================================================

const readingPart1Questions: ExamQuestion[] = [
  {
    id: 'day23-reading1-q1',
    type: 'true-false',
    question: 'Am Wochenende ist das FitnessCenter von 6 bis 22 Uhr geöffnet.',
    correctAnswer: 'Falsch',
    explanation: 'Weekend is 8-20, not 6-22: "Samstag und Sonntag: 8-20 Uhr".'
  },
  {
    id: 'day23-reading1-q2',
    type: 'true-false',
    question: 'Mit der PREMIUM-Mitgliedschaft kann man das Schwimmbad benutzen.',
    correctAnswer: 'Richtig',
    explanation: 'Premium membership includes "Schwimmbad und Sauna".'
  },
  {
    id: 'day23-reading1-q3',
    type: 'true-false',
    question: 'Der Yoga-Kurs ist jeden Montag und Donnerstag um 19 Uhr.',
    correctAnswer: 'Falsch',
    explanation: 'Yoga is at 18:00: "Yoga: Montag und Donnerstag um 18 Uhr".'
  },
  {
    id: 'day23-reading1-q4',
    type: 'true-false',
    question: 'Im Juli ist das FitnessCenter zwei Wochen geschlossen.',
    correctAnswer: 'Richtig',
    explanation: '"Im Juli machen wir zwei Wochen Betriebsferien (15.-31. Juli)".'
  },
  {
    id: 'day23-reading1-q5',
    type: 'true-false',
    question: 'Studenten bezahlen den vollen Preis für die Mitgliedschaft.',
    correctAnswer: 'Falsch',
    explanation: 'Students get 20% discount: "Für Studenten und Rentner gibt es 20% Rabatt".'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Teil 1 - Email about Fitness Center Membership",
  description: "Read an email from a sports center. Answer 5 Richtig/Falsch questions.",
  instructions: "Lesen Sie die E-Mail. Sind die Sätze 1-5 Richtig oder Falsch? Markieren Sie.",
  text: `Von: info@fitnesscenter-hamburg.de
An: neukunden@fitcenter.de
Betreff: Willkommen im FitnessCenter Hamburg - Ihre Mitgliedschaft

Sehr geehrte Damen und Herren,

vielen Dank für Ihr Interesse an unserem FitnessCenter Hamburg! Ab dem 
1. März bieten wir Ihnen noch mehr Möglichkeiten für Sport und Fitness.

Unsere neuen Öffnungszeiten ab März:
Montag bis Freitag: 6-22 Uhr
Samstag und Sonntag: 8-20 Uhr
An Feiertagen: 10-18 Uhr

Wir haben drei verschiedene Mitgliedschaften für Sie:

1. BASIS-Mitgliedschaft (29 Euro/Monat):
   - Fitnessraum mit modernen Geräten
   - Umkleidekabinen mit Duschen
   
2. PREMIUM-Mitgliedschaft (49 Euro/Monat):
   - Alles aus BASIS
   - Schwimmbad und Sauna
   - 2 Fitness-Kurse pro Woche kostenlos

3. FAMILY-Mitgliedschaft (79 Euro/Monat):
   - Für 2 Erwachsene und bis zu 3 Kinder (unter 16 Jahren)
   - Alle Einrichtungen inklusive
   - Unbegrenzte Kurse für die ganze Familie

Unsere Fitness-Kurse:
- Yoga: Montag und Donnerstag um 18 Uhr (60 Minuten)
- Zumba: Dienstag und Freitag um 19 Uhr (45 Minuten)  
- Schwimmen für Anfänger: Mittwoch um 17 Uhr (90 Minuten)
- Rückenfitness: Samstag um 10 Uhr (60 Minuten)

Wichtige Informationen:
- Die Anmeldung ist online oder direkt bei uns möglich
- Sie brauchen ein Handtuch und Sportschuhe
- Im Juli machen wir zwei Wochen Betriebsferien (15.-31. Juli)
- Während der Betriebsferien können Sie in unserem Partner-Studio in 
  Altona kostenlos trainieren

Für Studenten und Rentner gibt es 20% Rabatt auf alle Mitgliedschaften!
Die erste Probestunde ist immer kostenlos.

Wir freuen uns auf Sie!

Mit sportlichen Grüßen
Ihr Team vom FitnessCenter Hamburg
Mühlenkamp 45, 22303 Hamburg
Tel: 040-123456`,
  questions: readingPart1Questions
};

// ============================================================================
// READING PRACTICE - Teil 2 (Questions 6-10)
// Format: 5 separate questions, EACH with own pair of texts/websites (a or b)
// ============================================================================

// Question 6
const q6TextA = `**Website a: www.schwimmschule-muenchen.de**

SCHWIMMSCHULE MÜNCHEN

Schwimmkurse für Kinder:
• Anfänger (5-8 Jahre)
  Samstag 9-10 Uhr
• Fortgeschrittene (9-12 Jahre)
  Samstag 10-11 Uhr

Kursgebühr: 120 Euro (10 Stunden)
Anmeldung: Tel. 089-555444`;

const q6TextB = `**Website b: www.schwimmbad-therme.de**

THERME & WELLNESS

Öffnungszeiten:
Täglich 9-22 Uhr

Einrichtungen:
• Hallenbad (25m)
• Sauna und Dampfbad
• Restaurant

Tageskarte: 15 Euro (Erwachsene)
            8 Euro (Kinder)`;

const readingPart2Q6: ExamQuestion[] = [
  {
    id: 'day23-reading2-q6',
    type: 'multiple-choice',
    question: 'Sie suchen einen Schwimmkurs für Ihr 6-jähriges Kind.',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a offers swimming courses for children 5-8 years old.'
  }
];

const readingPractice2a: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 6: Swimming Course",
  description: "Choose the correct website for a swimming course for children.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q6TextA}\n\n${q6TextB}`,
  questions: readingPart2Q6
};

// Question 7
const q7TextA = `**Website a: www.fitness-first-berlin.de**

FITNESS FIRST BERLIN

Unser Service für Sie:
• Über 100 Fitnessgeräte
• Personal Training
• Getränke-Bar
• Shop: Sportkleidung, Proteinshakes
  und Fitness-Zubehör

Probetraining jetzt buchen!`;

const q7TextB = `**Website b: www.online-sportshop.de**

ONLINE SPORTSHOP

Sportbekleidung online bestellen:
• Nike, Adidas, Puma
• Laufschuhe, T-Shirts, Hosen
• Günstige Preise

Lieferung in 1-2 Tagen
Kostenloser Versand ab 40 Euro`;

const readingPart2Q7: ExamQuestion[] = [
  {
    id: 'day23-reading2-q7',
    type: 'multiple-choice',
    question: 'Sie möchten wissen: Kann man im Fitnessstudio Sportkleidung kaufen?',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a has a shop selling sports clothing.'
  }
];

const readingPractice2b: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 7: Sports Clothing at Gym",
  description: "Choose the correct website about buying sports clothing at a gym.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q7TextA}\n\n${q7TextB}`,
  questions: readingPart2Q7
};

// Question 8
const q8TextA = `**Website a: www.tennis-shop-koeln.de**

TENNIS-SHOP KÖLN

Alles für Tennis:
• Tennisschläger
• Tennisbälle
• Sportbekleidung
• Schuhe

Beratung von Profis!
Öffnungszeiten: Mo-Sa 10-19 Uhr`;

const q8TextB = `**Website b: www.tennisclub-koeln.de**

TENNISCLUB KÖLN

Platzreservierung:
• 6 Außenplätze
• 2 Hallenplätze
• Online-Buchung 24/7

Preis: 15 Euro pro Stunde
Mitglieder: 10 Euro pro Stunde
Tel: 0221-789456`;

const readingPart2Q8: ExamQuestion[] = [
  {
    id: 'day23-reading2-q8',
    type: 'multiple-choice',
    question: 'Sie wollen einen Tennisplatz für Samstag reservieren.',
    options: ['a', 'b'],
    correctAnswer: 1,
    explanation: 'Website b allows court reservations with online booking.'
  }
];

const readingPractice2c: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 8: Tennis Court Reservation",
  description: "Choose the correct website for reserving a tennis court.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q8TextA}\n\n${q8TextB}`,
  questions: readingPart2Q8
};

// Question 9
const q9TextA = `**Website a: www.sport-ernaehrung-tipps.de**

ERNÄHRUNG FÜR SPORTLER

Kostenlose Tipps und Artikel:
• Ernährungspläne
• Rezepte für Sportler
• Vitamins und Mineralien
• Trinken beim Sport

Wöchentlicher Newsletter!
Jetzt kostenlos anmelden.`;

const q9TextB = `**Website b: www.restaurant-gesund-essen.de**

RESTAURANT "GESUND LEBEN"

Unser Angebot:
• Bio-Gerichte
• Vegetarisch und vegan
• Salate und Smoothies

Öffnungszeiten:
Mo-Sa: 11-22 Uhr
Tischreservierung: 030-147852`;

const readingPart2Q9: ExamQuestion[] = [
  {
    id: 'day23-reading2-q9',
    type: 'multiple-choice',
    question: 'Sie suchen Informationen über gesunde Ernährung für Sportler.',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a provides information about nutrition for athletes.'
  }
];

const readingPractice2d: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 9: Sports Nutrition Info",
  description: "Choose the correct website for sports nutrition information.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q9TextA}\n\n${q9TextB}`,
  questions: readingPart2Q9
};

// Question 10
const q10TextA = `**Website a: www.parkhaus-zentrum.de**

PARKHAUS STADTMITTE

Günstig parken im Zentrum:
• 24 Stunden geöffnet
• 500 Parkplätze
• 2 Euro pro Stunde
• Tageskarte: 12 Euro

Adresse: Hauptstraße 89
Zufahrt über Bahnhofstraße`;

const q10TextB = `**Website b: www.sportcenter-hamburg-info.de**

SPORTCENTER HAMBURG
    Anfahrt & Parken

So finden Sie uns:
• Mit U-Bahn: Station Borgweg
• Mit Bus: Linie 6, 20, 25
• 80 kostenlose Parkplätze direkt
  am Gebäude

Adresse: Sportweg 12, 22299 Hamburg`;

const readingPart2Q10: ExamQuestion[] = [
  {
    id: 'day23-reading2-q10',
    type: 'multiple-choice',
    question: 'Sie möchten wissen: Gibt es im Sportcenter einen Parkplatz?',
    options: ['a', 'b'],
    correctAnswer: 1,
    explanation: 'Website b shows sports center parking: "80 kostenlose Parkplätze direkt am Gebäude".'
  }
];

const readingPractice2e: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 10: Sports Center Parking",
  description: "Choose the correct website for sports center parking information.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q10TextA}\n\n${q10TextB}`,
  questions: readingPart2Q10
};

// ============================================================================
// READING PRACTICE - Teil 3 (Questions 11-15)
// Format: 5 separate questions, EACH with own statement + notice/sign
// ============================================================================

// Question 11
const q11Notice = `WICHTIGE INFORMATION
    Zutrittsregeln

• Mitglieder ab 16 Jahren:
  alleine trainieren

• Kinder und Jugendliche (10-15):
  nur mit Erwachsenenbegleitung

• Kinder unter 10 Jahren:
  kein Zutritt zum Fitnessraum
  (Kinderkurse im separaten Raum)`;

const readingPart3Q11: ExamQuestion[] = [
  {
    id: 'day23-reading3-q11',
    type: 'true-false',
    question: 'Kinder unter 14 Jahren dürfen nur mit einem Erwachsenen ins Fitnessstudio.',
    correctAnswer: 'Falsch',
    explanation: 'The notice says children 10-15 need adult supervision, not "under 14".'
  }
];

const readingPractice3a: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 11: Access Rules",
  description: "Read a notice about gym access rules and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q11Notice,
  questions: readingPart3Q11
};

// Question 12
const q12Notice = `SPORTCENTER SERVICES

Für Ihr Wohlbefinden:

✓ Getränke-Bar (Wasser, Säfte,
  Proteinshakes)
✓ Handtuch-Service (2 Euro)
✓ Schließfächer (kostenlos)
✓ Kostenlose Parkplätze

Eigene Getränkeflaschen sind
erlaubt!`;

const readingPart3Q12: ExamQuestion[] = [
  {
    id: 'day23-reading3-q12',
    type: 'true-false',
    question: 'Man muss die eigenen Getränke mitbringen, weil es keine Bar gibt.',
    correctAnswer: 'Falsch',
    explanation: 'There is a drinks bar: "Getränke-Bar (Wasser, Säfte, Proteinshakes)".'
  }
];

const readingPractice3b: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 12: Sports Center Services",
  description: "Read information about sports center services.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q12Notice,
  questions: readingPart3Q12
};

// Question 13
const q13Notice = `Von: kurse@fitnesscenter.de
Betreff: Neue Kurse ab April

Liebe Mitglieder,

ab April haben wir neue Kurse für Sie:

SPINNING
Mittwoch: 19:00-20:00 Uhr
Freitag: 18:00-19:00 Uhr
Für Premium-Mitglieder kostenlos!
Basis-Mitglieder: 8 Euro pro Kurs

PILATES
Dienstag: 17:30-18:30 Uhr
Donnerstag: 18:00-19:00 Uhr
Für alle Mitglieder inklusive!

Anmeldung an der Rezeption erforderlich.

Sportliche Grüße
Ihr Kurs-Team`;

const readingPart3Q13: ExamQuestion[] = [
  {
    id: 'day23-reading3-q13',
    type: 'true-false',
    question: 'Der Spinning-Kurs am Mittwoch kostet 8 Euro extra.',
    correctAnswer: 'Richtig',
    explanation: 'The email states "Basis-Mitglieder: 8 Euro pro Kurs" for spinning.'
  }
];

const readingPractice3c: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 13: Course Fees",
  description: "Read an email about new courses and fees.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q13Notice,
  questions: readingPart3Q13
};

// Question 14
const q14Notice = `SCHWIMMBAD-ORDNUNG
  Bitte beachten Sie:

✓ Duschen vor dem Schwimmen
  (Pflicht!)
✓ Badeschuhe im Umkleidebereich
✓ Schwimmkappe empfohlen

✗ Kein Essen im Schwimmbad
✗ Keine Glasflaschen
✗ Keine Unterwasserkameras
✗ Keine laute Musik oder
  Kopfhörer im Wasser

Vielen Dank für Ihr Verständnis!`;

const readingPart3Q14: ExamQuestion[] = [
  {
    id: 'day23-reading3-q14',
    type: 'true-false',
    question: 'Im Schwimmbad darf man keine Musik hören.',
    correctAnswer: 'Richtig',
    explanation: 'The rules state "Keine laute Musik oder Kopfhörer im Wasser".'
  }
];

const readingPractice3d: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 14: Swimming Pool Rules",
  description: "Read swimming pool regulations.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q14Notice,
  questions: readingPart3Q14
};

// Question 15
const q15Notice = `KURS-ANMELDUNG
Allgemeine Geschäftsbedingungen

Stornierung (Absage):

• Bis 7 Tage vor Kursbeginn:
  100% Rückerstattung

• 3-6 Tage vor Kursbeginn:
  50% Rückerstattung

• Weniger als 3 Tage vor Kurs-
  beginn oder Nichterscheinen:
  Keine Rückerstattung

Bitte schriftlich absagen per
E-Mail an: kurse@sportcenter.de`;

const readingPart3Q15: ExamQuestion[] = [
  {
    id: 'day23-reading3-q15',
    type: 'true-false',
    question: 'Wenn man den Kurs absagt, bekommt man das Geld zurück.',
    correctAnswer: 'Falsch',
    explanation: 'It depends on when you cancel. Only 100% refund if 7+ days before.'
  }
];

const readingPractice3e: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 15: Cancellation Policy",
  description: "Read course cancellation policies.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q15Notice,
  questions: readingPart3Q15
};

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabularyItems: VocabularyItem[] = [
  { german: "das Fitnesscenter", english: "fitness center" },
  { german: "die Mitgliedschaft", english: "membership" },
  { german: "der Fitnessraum", english: "gym room" },
  { german: "das Schwimmbad", english: "swimming pool" },
  { german: "die Sauna", english: "sauna" },
  { german: "der Kurs", english: "course" },
  { german: "trainieren", english: "to train" },
  { german: "die Umkleidekabine", english: "changing room" },
  { german: "die Dusche", english: "shower" },
  { german: "das Handtuch", english: "towel" },
  { german: "die Sportschuhe", english: "sports shoes" },
  { german: "die Sportkleidung", english: "sports clothing" },
  { german: "das Gerät", english: "equipment/machine" },
  { german: "der Tennisplatz", english: "tennis court" },
  { german: "der Schwimmkurs", english: "swimming course" },
  { german: "die Öffnungszeiten", english: "opening hours" },
  { german: "geöffnet", english: "open" },
  { german: "geschlossen", english: "closed" },
  { german: "die Gebühr", english: "fee" },
  { german: "kostenlos", english: "free" },
  { german: "der Rabatt", english: "discount" },
  { german: "die Rückerstattung", english: "refund" },
  { german: "erlaubt", english: "allowed" },
  { german: "verboten", english: "forbidden" },
  { german: "die Pflicht", english: "mandatory" },
  { german: "beachten", english: "to observe/notice" },
  { german: "absagen", english: "to cancel" },
  { german: "der Parkplatz", english: "parking space" },
  { german: "die Rezeption", english: "reception" },
  { german: "das Schließfach", english: "locker" }
];

const vocabulary: VocabularyTheme = {
  theme: "Sports Center & Fitness",
  items: vocabularyItems
};

// ============================================================================
// DAY 23 EXPORT
// ============================================================================

const day23: ExamDay = {
  day: 23,
  skills: ['Reading'],
  practices: [
    readingPractice1,
    readingPractice2a,
    readingPractice2b,
    readingPractice2c,
    readingPractice2d,
    readingPractice2e,
    readingPractice3a,
    readingPractice3b,
    readingPractice3c,
    readingPractice3d,
    readingPractice3e
  ],
  vocabulary,
  focus: "Sports Center & Fitness"
};

export default day23;
