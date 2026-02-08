/**
 * Day 27: Reading Focus
 * Focus: Supermarket & Grocery Shopping (Supermarkt & Lebensmitteleinkauf)
 * 
 * Skills: Reading (all 3 parts)
 * Topics: Grocery shopping, product labels, supermarket services, special offers,
 *         opening hours, food categories, shopping lists, payment methods
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
    id: 'day27-reading1-q1',
    type: 'true-false',
    question: 'Der Supermarkt ist am Sonntag von 8 bis 20 Uhr geöffnet.',
    correctAnswer: 'Falsch',
    explanation: 'Sunday hours are 10-18, not 8-20: "Sonntag: 10-18 Uhr".'
  },
  {
    id: 'day27-reading1-q2',
    type: 'true-false',
    question: 'Kunden können frisches Brot und Brötchen im Supermarkt kaufen.',
    correctAnswer: 'Richtig',
    explanation: 'The email mentions "Frische Backwaren jeden Morgen".'
  },
  {
    id: 'day27-reading1-q3',
    type: 'true-false',
    question: 'Die Kundenkarte kostet 5 Euro pro Jahr.',
    correctAnswer: 'Falsch',
    explanation: 'The card is free: "Die Kundenkarte ist kostenlos".'
  },
  {
    id: 'day27-reading1-q4',
    type: 'true-false',
    question: 'Im August gibt es 20% Rabatt auf alle Getränke.',
    correctAnswer: 'Richtig',
    explanation: 'The email states "Im August: 20% Rabatt auf alle Getränke".'
  },
  {
    id: 'day27-reading1-q5',
    type: 'true-false',
    question: 'Man kann im Supermarkt mit Kreditkarte bezahlen.',
    correctAnswer: 'Richtig',
    explanation: 'Payment methods include "Kreditkarte" as mentioned in the email.'
  }
];

const readingPractice1: ReadingPractice = {
  part: 1,
  title: "Teil 1 - Email about Supermarket Services",
  description: "Read an email from a supermarket. Answer 5 Richtig/Falsch questions.",
  instructions: "Lesen Sie die E-Mail. Sind die Sätze 1-5 Richtig oder Falsch? Markieren Sie.",
  text: `Von: info@supermarkt-frisch.de
An: kunden@newsletter.de
Betreff: Neue Services und Angebote im Supermarkt Frisch & Gut

Liebe Kundinnen und Kunden,

ab dem 1. August haben wir neue Services und tolle Angebote für Sie!

Unsere neuen Öffnungszeiten ab August:
Montag bis Samstag: 7-22 Uhr
Sonntag: 10-18 Uhr
An Feiertagen: 9-20 Uhr

Neue Services in unserem Supermarkt:
- Frische Backwaren jeden Morgen ab 7 Uhr (Brot, Brötchen, Kuchen)
- Bio-Ecke mit über 200 Bio-Produkten
- Obst- und Gemüse-Bar: frisch geschnittenes Obst zum Mitnehmen
- Lieferservice: Wir liefern Ihre Einkäufe nach Hause (ab 30 Euro kostenlos)
- Selbstbedienungskassen für schnelles Einkaufen

Unsere Kundenkarte:
Die Kundenkarte ist kostenlos und Sie bekommen viele Vorteile:
- 5% Rabatt auf alle Eigenmarken-Produkte
- Jeden Monat spezielle Angebote nur für Karteninhaber
- Punkte sammeln: 1 Punkt pro 1 Euro Einkauf
- 100 Punkte = 5 Euro Gutschein

Aktionen im August:
- Im August: 20% Rabatt auf alle Getränke (Wasser, Saft, Limonade)
- Jeden Mittwoch: Frisches Obst und Gemüse 30% günstiger
- Jeden Freitag: 2 für 1 Angebot bei Fleisch und Wurst

Wichtige Informationen:
- Wir akzeptieren alle Zahlungsmethoden: Bar, EC-Karte, Kreditkarte, Apple Pay
- Kostenlose Parkplätze direkt vor dem Supermarkt (150 Plätze)
- Im September ist der Supermarkt wegen Renovierung vom 15.-20. September geschlossen
- Während dieser Zeit können Sie in unserer Filiale in der Bahnhofstraße einkaufen

Wir freuen uns auf Ihren Besuch!

Mit freundlichen Grüßen
Ihr Team von Supermarkt Frisch & Gut
Hauptstraße 67, 10115 Berlin
Tel: 030-555-7890`,
  questions: readingPart1Questions
};

// ============================================================================
// READING PRACTICE - Teil 2 (Questions 6-10)
// Format: 5 separate questions, EACH with own pair of texts/websites (a or b)
// ============================================================================

// Question 6
const q6TextA = `**Website a: www.bio-laden-berlin.de**

BIO-LADEN NATURKOST

Unser Angebot:
• 100% Bio-Lebensmittel
• Obst und Gemüse aus der Region
• Vegetarische und vegane Produkte
• Naturkosmetik

Öffnungszeiten:
Mo-Fr: 9-19 Uhr, Sa: 9-16 Uhr
Adresse: Grünstraße 23, Berlin`;

const q6TextB = `**Website b: www.rezepte-kochen.de**

KOCHREZEPTE ONLINE

Kostenlose Rezepte:
• Vegetarische Gerichte
• Schnelle Rezepte für jeden Tag
• Desserts und Kuchen
• Internationale Küche

Wöchentlich neue Rezepte!
Jetzt Newsletter abonnieren.`;

const readingPart2Q6: ExamQuestion[] = [
  {
    id: 'day27-reading2-q6',
    type: 'multiple-choice',
    question: 'Sie möchten Bio-Gemüse kaufen.',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a is a bio shop selling organic vegetables.'
  }
];

const readingPractice2a: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 6: Bio Vegetables",
  description: "Choose the correct website for buying organic vegetables.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q6TextA}\n\n${q6TextB}`,
  questions: readingPart2Q6
};

// Question 7
const q7TextA = `**Website a: www.supermarkt-angebote.de**

SUPERMARKT ANGEBOTE DIESE WOCHE

Aktuelle Sonderangebote:
• Milch 1L: 0,89 Euro (statt 1,29)
• Äpfel 1kg: 1,99 Euro
• Butter 250g: 1,49 Euro
• Kaffee 500g: 4,99 Euro

Gültig bis Samstag!
Alle Filialen in Berlin.`;

const q7TextB = `**Website b: www.kochkurs-berlin.de**

KOCHKURSE IN BERLIN

Lernen Sie kochen:
• Italienische Küche
• Asiatische Gerichte
• Backkurse
• Vegetarisch kochen

Kurse jeden Samstag 14-18 Uhr
Anmeldung: Tel. 030-123456`;

const readingPart2Q7: ExamQuestion[] = [
  {
    id: 'day27-reading2-q7',
    type: 'multiple-choice',
    question: 'Sie wollen wissen: Was kostet Milch diese Woche im Angebot?',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a shows current supermarket offers including milk prices.'
  }
];

const readingPractice2b: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 7: Milk Prices",
  description: "Choose the correct website for current milk prices.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q7TextA}\n\n${q7TextB}`,
  questions: readingPart2Q7
};

// Question 8
const q8TextA = `**Website a: www.lebensmittel-lieferung.de**

LEBENSMITTEL NACH HAUSE

Online bestellen - Wir liefern:
• Frische Lebensmittel
• Getränke
• Haushaltswaren
• Tierfutter

Lieferung am gleichen Tag!
Kostenlos ab 40 Euro Bestellwert.
Jetzt App downloaden!`;

const q8TextB = `**Website b: www.restaurant-lieferservice.de**

ESSEN BESTELLEN

Restaurants in Ihrer Nähe:
• Pizza, Pasta, Burger
• Asiatisch, Indisch
• Vegetarisch, vegan
• Desserts

Lieferung in 30-45 Minuten
Bezahlung online oder bar`;

const readingPart2Q8: ExamQuestion[] = [
  {
    id: 'day27-reading2-q8',
    type: 'multiple-choice',
    question: 'Sie möchten Lebensmittel online bestellen und nach Hause liefern lassen.',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a delivers groceries to your home.'
  }
];

const readingPractice2c: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 8: Grocery Delivery",
  description: "Choose the correct website for grocery delivery service.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q8TextA}\n\n${q8TextB}`,
  questions: readingPart2Q8
};

// Question 9
const q9TextA = `**Website a: www.markt-oeffnungszeiten.de**

ÖFFNUNGSZEITEN SUPERMÄRKTE

Finden Sie Öffnungszeiten:
• Alle Supermärkte in Ihrer Stadt
• Öffnungszeiten an Feiertagen
• Notdienst-Apotheken
• Tankstellen 24/7

Einfach PLZ eingeben!`;

const q9TextB = `**Website b: www.supermarkt-jobs.de**

JOBS IM EINZELHANDEL

Wir suchen:
• Kassierer/in
• Verkäufer/in
• Lagerarbeiter/in
• Filialleiter/in

Vollzeit und Teilzeit
Jetzt online bewerben!`;

const readingPart2Q9: ExamQuestion[] = [
  {
    id: 'day27-reading2-q9',
    type: 'multiple-choice',
    question: 'Sie wollen wissen: Wann hat der Supermarkt am Feiertag geöffnet?',
    options: ['a', 'b'],
    correctAnswer: 0,
    explanation: 'Website a provides opening hours information including holidays.'
  }
];

const readingPractice2d: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 9: Holiday Opening Hours",
  description: "Choose the correct website for holiday opening hours.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q9TextA}\n\n${q9TextB}`,
  questions: readingPart2Q9
};

// Question 10
const q10TextA = `**Website a: www.kuehlschrank-reparatur.de**

KÜHLSCHRANK REPARATUR

Wir reparieren:
• Kühlschränke
• Gefrierschränke
• Waschmaschinen
• Geschirrspüler

24-Stunden-Service
Tel: 030-999888
Schnell und günstig!`;

const q10TextB = `**Website b: www.lebensmittel-haltbarkeit.de**

LEBENSMITTEL RICHTIG LAGERN

Tipps und Informationen:
• Wie lange sind Lebensmittel haltbar?
• Richtige Lagerung im Kühlschrank
• Einfrieren und Auftauen
• Mindesthaltbarkeitsdatum verstehen

Kostenlose Checklisten zum Download!`;

const readingPart2Q10: ExamQuestion[] = [
  {
    id: 'day27-reading2-q10',
    type: 'multiple-choice',
    question: 'Sie möchten wissen: Wie lange kann man Milch im Kühlschrank aufbewahren?',
    options: ['a', 'b'],
    correctAnswer: 1,
    explanation: 'Website b provides information about food storage and shelf life.'
  }
];

const readingPractice2e: ReadingPractice = {
  part: 2,
  title: "Teil 2 - Question 10: Food Storage",
  description: "Choose the correct website for food storage information.",
  instructions: "Lesen Sie die Aufgabe und die Websites. Welche Website passt? Markieren Sie a oder b.",
  text: `${q10TextA}\n\n${q10TextB}`,
  questions: readingPart2Q10
};

// ============================================================================
// READING PRACTICE - Teil 3 (Questions 11-15)
// Format: 5 separate questions, EACH with own statement + notice/sign
// ============================================================================

// Question 11
const q11Notice = `SONDERANGEBOT DIESE WOCHE

Frisches Obst und Gemüse:
• Tomaten: 1,99 € pro kg
• Gurken: 0,79 € pro Stück
• Bananen: 1,49 € pro kg
• Äpfel: 2,49 € pro kg

Nur vom 5. bis 11. August!

Solange der Vorrat reicht.
Maximal 3 kg pro Kunde.`;

const readingPart3Q11: ExamQuestion[] = [
  {
    id: 'day27-reading3-q11',
    type: 'true-false',
    question: 'Das Angebot für Obst und Gemüse gilt den ganzen August.',
    correctAnswer: 'Falsch',
    explanation: 'The offer is only valid from August 5-11: "Nur vom 5. bis 11. August!"'
  }
];

const readingPractice3a: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 11: Special Offer Duration",
  description: "Read a special offer notice and decide if the statement is correct.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q11Notice,
  questions: readingPart3Q11
};

// Question 12
const q12Notice = `WICHTIGE INFORMATION

Liebe Kunden,

ab dem 1. September ändern sich unsere
Öffnungszeiten:

Montag - Freitag: 8-21 Uhr
Samstag: 8-20 Uhr
Sonntag: geschlossen

Die Bäckerei öffnet täglich um 7 Uhr.

Ihr Supermarkt-Team`;

const readingPart3Q12: ExamQuestion[] = [
  {
    id: 'day27-reading3-q12',
    type: 'true-false',
    question: 'Ab September ist der Supermarkt am Sonntag geöffnet.',
    correctAnswer: 'Falsch',
    explanation: 'Sunday is closed: "Sonntag: geschlossen".'
  }
];

const readingPractice3b: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 12: Sunday Opening",
  description: "Read information about new opening hours.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q12Notice,
  questions: readingPart3Q12
};

// Question 13
const q13Notice = `Von: kundenservice@supermarkt.de
Betreff: Ihre Kundenkarte

Sehr geehrte Frau Müller,

vielen Dank für Ihre Anmeldung!

Ihre Kundenkarte ist jetzt aktiv.
Kartennummer: 12345678

Ihre Vorteile:
• 5% Rabatt auf Eigenmarken
• Punkte sammeln bei jedem Einkauf
• Exklusive Angebote per E-Mail

Sie haben bereits 50 Punkte!
(100 Punkte = 5 Euro Gutschein)

Viel Spaß beim Einkaufen!

Ihr Kundenservice-Team`;

const readingPart3Q13: ExamQuestion[] = [
  {
    id: 'day27-reading3-q13',
    type: 'true-false',
    question: 'Frau Müller kann jetzt einen 5-Euro-Gutschein bekommen.',
    correctAnswer: 'Falsch',
    explanation: 'She only has 50 points, needs 100 for a voucher: "Sie haben bereits 50 Punkte! (100 Punkte = 5 Euro Gutschein)"'
  }
];

const readingPractice3c: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 13: Loyalty Points",
  description: "Read an email about a customer loyalty card.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q13Notice,
  questions: readingPart3Q13
};

// Question 14
const q14Notice = `HAUSORDNUNG SUPERMARKT

Bitte beachten Sie:

✓ Einkaufswagen nach Gebrauch
  zurückbringen
✓ Taschen an der Kasse zeigen
✓ Kinder unter 12 Jahren nur mit
  Erwachsenen

✗ Keine Hunde (außer Blindenhunde)
✗ Kein Essen und Trinken im Laden
✗ Nicht rauchen

Bei Fragen: Fragen Sie unser Personal!

Vielen Dank!`;

const readingPart3Q14: ExamQuestion[] = [
  {
    id: 'day27-reading3-q14',
    type: 'true-false',
    question: 'Man darf im Supermarkt etwas trinken.',
    correctAnswer: 'Falsch',
    explanation: 'Eating and drinking in the store is not allowed: "✗ Kein Essen und Trinken im Laden".'
  }
];

const readingPractice3d: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 14: Store Rules",
  description: "Read supermarket house rules.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q14Notice,
  questions: readingPart3Q14
};

// Question 15
const q15Notice = `RÜCKGABE UND UMTAUSCH

Bedingungen:

• Rückgabe innerhalb von 14 Tagen
  mit Kassenbon

• Produkt muss ungeöffnet und
  original verpackt sein

• Frische Lebensmittel (Obst, Gemüse,
  Fleisch, Milchprodukte) können
  NICHT zurückgegeben werden

• Geld zurück oder Umtausch möglich

Bei Fragen: Kundenservice
Tel: 030-555-7890`;

const readingPart3Q15: ExamQuestion[] = [
  {
    id: 'day27-reading3-q15',
    type: 'true-false',
    question: 'Man kann frisches Obst zurückgeben, wenn man den Kassenbon hat.',
    correctAnswer: 'Falsch',
    explanation: 'Fresh food cannot be returned: "Frische Lebensmittel (Obst, Gemüse, Fleisch, Milchprodukte) können NICHT zurückgegeben werden".'
  }
];

const readingPractice3e: ReadingPractice = {
  part: 3,
  title: "Teil 3 - Question 15: Return Policy",
  description: "Read return and exchange policies.",
  instructions: "Lesen Sie den Text und die Aussage. Ist die Aussage Richtig oder Falsch?",
  text: q15Notice,
  questions: readingPart3Q15
};

// ============================================================================
// VOCABULARY
// ============================================================================

const vocabularyItems: VocabularyItem[] = [
  { german: "der Supermarkt", english: "supermarket" },
  { german: "der Einkauf", english: "shopping/purchase" },
  { german: "einkaufen", english: "to shop" },
  { german: "die Lebensmittel", english: "groceries/food" },
  { german: "das Obst", english: "fruit" },
  { german: "das Gemüse", english: "vegetables" },
  { german: "das Fleisch", english: "meat" },
  { german: "die Wurst", english: "sausage" },
  { german: "die Milch", english: "milk" },
  { german: "der Käse", english: "cheese" },
  { german: "das Brot", english: "bread" },
  { german: "die Brötchen", english: "rolls" },
  { german: "die Butter", english: "butter" },
  { german: "das Ei / die Eier", english: "egg/eggs" },
  { german: "der Zucker", english: "sugar" },
  { german: "das Salz", english: "salt" },
  { german: "der Kaffee", english: "coffee" },
  { german: "der Tee", english: "tea" },
  { german: "das Wasser", english: "water" },
  { german: "der Saft", english: "juice" },
  { german: "die Limonade", english: "lemonade/soda" },
  { german: "das Getränk", english: "beverage/drink" },
  { german: "die Backwaren", english: "baked goods" },
  { german: "frisch", english: "fresh" },
  { german: "bio / biologisch", english: "organic" },
  { german: "das Angebot", english: "offer/special" },
  { german: "der Rabatt", english: "discount" },
  { german: "der Preis", english: "price" },
  { german: "kosten", english: "to cost" },
  { german: "günstig", english: "cheap/affordable" },
  { german: "teuer", english: "expensive" },
  { german: "die Kasse", english: "checkout/cash register" },
  { german: "der Kassenbon", english: "receipt" },
  { german: "bezahlen", english: "to pay" },
  { german: "die Kreditkarte", english: "credit card" },
  { german: "die EC-Karte", english: "debit card" },
  { german: "bar", english: "cash" },
  { german: "der Einkaufswagen", english: "shopping cart" },
  { german: "die Einkaufstasche", english: "shopping bag" },
  { german: "die Tüte", english: "bag" },
  { german: "die Kundenkarte", english: "loyalty card" },
  { german: "der Gutschein", english: "voucher/coupon" },
  { german: "die Punkte", english: "points" },
  { german: "sammeln", english: "to collect" },
  { german: "die Lieferung", english: "delivery" },
  { german: "liefern", english: "to deliver" },
  { german: "bestellen", english: "to order" },
  { german: "die Öffnungszeiten", english: "opening hours" },
  { german: "geöffnet", english: "open" },
  { german: "geschlossen", english: "closed" },
  { german: "der Vorrat", english: "stock/supply" },
  { german: "haltbar", english: "durable/shelf-stable" },
  { german: "das Mindesthaltbarkeitsdatum", english: "best-before date" },
  { german: "die Rückgabe", english: "return" },
  { german: "der Umtausch", english: "exchange" },
  { german: "zurückgeben", english: "to return (item)" }
];

const vocabulary: VocabularyTheme = {
  theme: "Supermarket & Grocery Shopping",
  items: vocabularyItems
};

// ============================================================================
// DAY 27 EXPORT
// ============================================================================

const day27: ExamDay = {
  day: 27,
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
  focus: "Supermarket & Grocery Shopping"
};

export default day27;
