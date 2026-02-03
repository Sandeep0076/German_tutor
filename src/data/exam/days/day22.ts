/**
 * Day 22: Writing Focus
 * Focus: Bank & Money
 *
 * Skills: Writing (Teil 1 & 2)
 * Topics: Opening bank account, ATM services, money transfers, banking forms,
 *         currency exchange, payment methods
 */

import type {
  ExamDay,
  WritingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// WRITING PRACTICE - Teil 1: Bank Account Opening Form
// ============================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: "Teil 1: Bank Account Registration Form",
  description: "Complete a bank account opening form with personal and financial information",
  instructions: "You are helping your friend open a bank account. Read the context and fill in the missing information in the form.",
  prompt: `Ihre Freundin, Sarah Johnson, möchte ein Bankkonto bei der Deutschen Bank in Frankfurt eröffnen. Sie ist 32 Jahre alt und kommt aus England. Sie arbeitet als Ingenieurin bei Siemens und verdient 3.500 Euro pro Monat. Sie wohnt in der Goethestraße 78, 60313 Frankfurt. Sie möchte ein Girokonto mit einer EC-Karte. Sarah hat kein anderes Konto in Deutschland.

In dem Formular fehlen fünf Informationen.
Helfen Sie Ihrer Freundin und schreiben Sie die fünf fehlenden Informationen in das Formular.
Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen.

┌─────────────────────────────────────────────────┐
│        DEUTSCHE BANK FRANKFURT                  │
│      Kontoeröffnung / Account Opening           │
│                                                 │
│ Familienname, Vorname:  Johnson, Sarah     (0) │
│ Alter:                  _______________    (1) │
│ Staatsangehörigkeit:    _______________    (2) │
│ Beruf:                  _______________    (3) │
│ Monatliches Einkommen:  _______________    (4) │
│                                                 │
│ Adresse in Deutschland:                         │
│ Straße, Hausnummer:     Goethestraße 78         │
│ PLZ, Stadt:             60313 Frankfurt         │
│                                                 │
│ Kontotyp:               _______________    (5) │
│   ☐ Sparkonto (Savings Account)                │
│   ☐ Girokonto (Current Account)                │
│                                                 │
│ Haben Sie ein anderes Konto in Deutschland?    │
│   ☐ Ja    ☐ Nein                                │
│                                                 │
│ Unterschrift:           Sarah Johnson           │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) 32 / 32 Jahre
(2) England / Englisch / britisch
(3) Ingenieurin
(4) 3.500 Euro / 3500 Euro
(5) Girokonto`,
  keyPhrases: [
    "das Bankkonto (bank account)",
    "eröffnen (to open)",
    "das Girokonto (current account)",
    "die EC-Karte (debit card)",
    "das Einkommen (income)",
    "die Staatsangehörigkeit (nationality)"
  ]
};

// ============================================================================
// WRITING PRACTICE - Teil 2: Email to Bank About Services
// ============================================================================

const writingPractice2: WritingPractice = {
  part: 2,
  title: "Teil 2: Email to Bank About Account Problem",
  description: "Write an email to your bank about a problem with your account",
  instructions: "Write an email to your bank. Address all 3 points. Write about 30 words including greeting and closing.",
  prompt: `Sie haben ein Problem mit Ihrer EC-Karte. Die Karte funktioniert nicht am Geldautomaten. Schreiben Sie an Ihre Bank:

• Warum schreiben Sie?
• Beschreiben Sie das Problem: EC-Karte funktioniert nicht
• Fragen Sie: Was soll ich machen?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich habe ein Problem mit meiner EC-Karte. Die Karte funktioniert nicht am Geldautomaten. Ich kann kein Geld abheben. Was soll ich machen? Brauche ich eine neue Karte?

Mit freundlichen Grüßen
Thomas Weber`,
  keyPhrases: [
    "Sehr geehrte Damen und Herren (Dear Sir/Madam)",
    "das Problem (the problem)",
    "funktionieren (to work/function)",
    "der Geldautomat (ATM)",
    "Geld abheben (to withdraw money)",
    "Was soll ich machen? (What should I do?)",
    "Mit freundlichen Grüßen (Sincerely)"
  ]
};

// ============================================================================
// WRITING PRACTICE - Teil 2: Email About Money Transfer
// ============================================================================

const writingPractice3: WritingPractice = {
  part: 2,
  title: "Teil 2: Email About International Money Transfer",
  description: "Write an email asking about sending money abroad",
  instructions: "Write an email to your bank. Address all 3 points. Write about 30 words including greeting and closing.",
  prompt: `Sie möchten Geld nach Spanien schicken. Schreiben Sie an Ihre Bank:

• Warum schreiben Sie?
• Fragen Sie: Wie kann ich Geld ins Ausland überweisen?
• Fragen Sie: Wie viel kostet das?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich möchte Geld nach Spanien schicken. Wie kann ich Geld ins Ausland überweisen? Kann ich das online machen? Wie viel kostet eine Überweisung nach Spanien?

Mit freundlichen Grüßen
Anna Schneider`,
  keyPhrases: [
    "Geld schicken (to send money)",
    "ins Ausland (abroad)",
    "überweisen (to transfer)",
    "die Überweisung (transfer)",
    "Wie viel kostet...? (How much does... cost?)",
    "online (online)"
  ]
};

// ============================================================================
// WRITING PRACTICE - Teil 2: Email to Friend About Borrowing Money
// ============================================================================

const writingPractice4: WritingPractice = {
  part: 2,
  title: "Teil 2: Email to Friend About Money",
  description: "Write an informal email to a friend about borrowing money",
  instructions: "Write an email to your friend. Address all 3 points. Write about 30 words including greeting and closing.",
  prompt: `Sie haben Ihr Portemonnaie zu Hause vergessen. Sie brauchen Geld. Schreiben Sie an Ihren Freund Max:

• Erklären Sie das Problem
• Bitten Sie: Können Sie mir 20 Euro leihen?
• Sagen Sie: Wann geben Sie das Geld zurück?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Lieber Max,

ich habe mein Portemonnaie zu Hause vergessen. Kannst du mir bitte 20 Euro leihen? Ich gebe dir das Geld morgen zurück. Ich treffe dich um 10 Uhr.

Viele Grüße
Lisa`,
  keyPhrases: [
    "Lieber/Liebe... (Dear...)",
    "vergessen (to forget)",
    "das Portemonnaie (wallet/purse)",
    "leihen (to lend/borrow)",
    "zurückgeben (to give back)",
    "Viele Grüße (Best regards)"
  ]
};

// ============================================================================
// VOCABULARY THEME - Bank & Money
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Bank & Money (Bank & Geld)',
  items: [
    // Money basics
    { german: "das Geld", english: "money", 
      example: "Ich brauche Geld." },
    { german: "der Euro", english: "euro", 
      example: "Das kostet 50 Euro." },
    { german: "der Cent", english: "cent", 
      example: "Das macht 2 Euro und 50 Cent." },
    { german: "das Bargeld", english: "cash", 
      example: "Ich bezahle mit Bargeld." },
    { german: "die Münze", english: "coin", 
      example: "Ich habe viele Münzen." },
    { german: "der Schein / der Geldschein", english: "banknote/bill", 
      example: "Haben Sie einen 50-Euro-Schein?" },
    { german: "das Kleingeld", english: "small change", 
      example: "Ich habe kein Kleingeld." },
    { german: "das Portemonnaie / die Geldbörse", english: "wallet/purse", 
      example: "Mein Portemonnaie ist zu Hause." },
    
    // Bank basics
    { german: "die Bank", english: "bank", 
      example: "Ich gehe zur Bank." },
    { german: "das Bankkonto / das Konto", english: "bank account", 
      example: "Ich habe ein Konto bei der Sparkasse." },
    { german: "das Girokonto", english: "current/checking account", 
      example: "Ich möchte ein Girokonto eröffnen." },
    { german: "das Sparkonto", english: "savings account", 
      example: "Mein Sparkonto hat 5.000 Euro." },
    { german: "die Kontonummer", english: "account number", 
      example: "Wie ist Ihre Kontonummer?" },
    { german: "die IBAN", english: "IBAN", 
      example: "Bitte geben Sie Ihre IBAN an." },
    { german: "die Bankleitzahl / BLZ", english: "bank code", 
      example: "Die Bankleitzahl ist wichtig." },
    
    // Bank cards
    { german: "die Karte", english: "card", 
      example: "Ich bezahle mit Karte." },
    { german: "die EC-Karte / die Bankkarte", english: "debit card", 
      example: "Meine EC-Karte funktioniert nicht." },
    { german: "die Kreditkarte", english: "credit card", 
      example: "Ich habe eine Kreditkarte." },
    { german: "die PIN / die Geheimzahl", english: "PIN number", 
      example: "Geben Sie Ihre PIN ein." },
    { german: "die Kartennummer", english: "card number", 
      example: "Die Kartennummer steht auf der Karte." },
    
    // ATM & transactions
    { german: "der Geldautomat / der Bankautomat", english: "ATM", 
      example: "Wo ist der nächste Geldautomat?" },
    { german: "Geld abheben", english: "to withdraw money", 
      example: "Ich möchte 100 Euro abheben." },
    { german: "Geld einzahlen", english: "to deposit money", 
      example: "Ich zahle 200 Euro ein." },
    { german: "die Abhebung", english: "withdrawal", 
      example: "Die Abhebung kostet 2 Euro." },
    { german: "die Einzahlung", english: "deposit", 
      example: "Die Einzahlung ist kostenlos." },
    
    // Transfers & payments
    { german: "überweisen", english: "to transfer", 
      example: "Ich überweise das Geld morgen." },
    { german: "die Überweisung", english: "transfer/bank transfer", 
      example: "Die Überweisung dauert 2 Tage." },
    { german: "bezahlen", english: "to pay", 
      example: "Ich bezahle mit Karte." },
    { german: "die Zahlung", english: "payment", 
      example: "Die Zahlung ist angekommen." },
    { german: "senden / schicken", english: "to send", 
      example: "Ich schicke dir das Geld." },
    { german: "empfangen / bekommen", english: "to receive", 
      example: "Ich habe das Geld bekommen." },
    
    // Money actions
    { german: "sparen", english: "to save", 
      example: "Ich spare jeden Monat 200 Euro." },
    { german: "ausgeben", english: "to spend", 
      example: "Ich gebe viel Geld für Essen aus." },
    { german: "leihen", english: "to lend/borrow", 
      example: "Kannst du mir 20 Euro leihen?" },
    { german: "zurückgeben", english: "to give back/return", 
      example: "Ich gebe dir das Geld morgen zurück." },
    { german: "wechseln", english: "to exchange/change", 
      example: "Ich möchte Euro in Dollar wechseln." },
    { german: "verdienen", english: "to earn", 
      example: "Ich verdiene 2.500 Euro pro Monat." },
    
    // Bank services
    { german: "eröffnen", english: "to open (account)", 
      example: "Ich möchte ein Konto eröffnen." },
    { german: "schließen", english: "to close", 
      example: "Ich schließe mein altes Konto." },
    { german: "der Schalter", english: "counter/window", 
      example: "Gehen Sie zum Schalter 3." },
    { german: "der Berater / die Beraterin", english: "advisor", 
      example: "Ich habe einen Termin mit dem Berater." },
    { german: "die Beratung", english: "consultation/advice", 
      example: "Die Beratung ist kostenlos." },
    { german: "das Formular", english: "form", 
      example: "Bitte füllen Sie das Formular aus." },
    { german: "unterschreiben", english: "to sign", 
      example: "Bitte unterschreiben Sie hier." },
    { german: "die Unterschrift", english: "signature", 
      example: "Ihre Unterschrift fehlt." },
    
    // Financial terms
    { german: "das Einkommen", english: "income", 
      example: "Mein monatliches Einkommen ist 3.000 Euro." },
    { german: "das Gehalt", english: "salary", 
      example: "Mein Gehalt kommt am 1. des Monats." },
    { german: "die Miete", english: "rent", 
      example: "Die Miete ist 800 Euro." },
    { german: "die Rechnung", english: "bill/invoice", 
      example: "Ich muss die Rechnung bezahlen." },
    { german: "die Gebühr", english: "fee", 
      example: "Die Gebühr für die Karte ist 10 Euro pro Jahr." },
    { german: "der Preis", english: "price", 
      example: "Der Preis ist zu hoch." },
    { german: "die Kosten", english: "costs", 
      example: "Was sind die Kosten?" },
    { german: "kostenlos", english: "free (of charge)", 
      example: "Das Girokonto ist kostenlos." },
    { german: "teuer", english: "expensive", 
      example: "Die Überweisung ist teuer." },
    { german: "billig / günstig", english: "cheap/inexpensive", 
      example: "Das ist sehr günstig." },
    
    // International banking
    { german: "das Ausland", english: "abroad/foreign country", 
      example: "Ich schicke Geld ins Ausland." },
    { german: "die Währung", english: "currency", 
      example: "Welche Währung brauchen Sie?" },
    { german: "der Wechselkurs", english: "exchange rate", 
      example: "Der Wechselkurs ist gut heute." },
    { german: "umtauschen", english: "to exchange", 
      example: "Ich möchte Dollar in Euro umtauschen." },
    { german: "die Wechselstube", english: "currency exchange office", 
      example: "Die Wechselstube ist am Bahnhof." },
    
    // Problems & solutions
    { german: "das Problem", english: "problem", 
      example: "Ich habe ein Problem mit meiner Karte." },
    { german: "funktionieren", english: "to work/function", 
      example: "Die Karte funktioniert nicht." },
    { german: "kaputt", english: "broken", 
      example: "Meine Karte ist kaputt." },
    { german: "verlieren", english: "to lose", 
      example: "Ich habe meine Karte verloren." },
    { german: "vergessen", english: "to forget", 
      example: "Ich habe meine PIN vergessen." },
    { german: "sperren", english: "to block/freeze", 
      example: "Ich muss meine Karte sperren." },
    { german: "die Sperrung", english: "blocking/freezing", 
      example: "Die Sperrung ist sofort." },
    { german: "ersetzen", english: "to replace", 
      example: "Die Bank ersetzt die Karte." },
    
    // Useful verbs
    { german: "brauchen", english: "to need", 
      example: "Ich brauche eine neue Karte." },
    { german: "haben", english: "to have", 
      example: "Ich habe kein Geld." },
    { german: "möchten", english: "would like to", 
      example: "Ich möchte ein Konto eröffnen." },
    { german: "können", english: "can/to be able to", 
      example: "Kann ich hier Geld abheben?" },
    { german: "müssen", english: "must/to have to", 
      example: "Ich muss die Rechnung bezahlen." },
    { german: "sollen", english: "should", 
      example: "Was soll ich machen?" },
    
    // Time & frequency
    { german: "monatlich", english: "monthly", 
      example: "Ich bekomme monatlich mein Gehalt." },
    { german: "pro Monat", english: "per month", 
      example: "Das kostet 5 Euro pro Monat." },
    { german: "täglich", english: "daily", 
      example: "Ich kann täglich 500 Euro abheben." },
    { german: "sofort", english: "immediately", 
      example: "Das Geld kommt sofort an." },
    { german: "dauern", english: "to take (time)", 
      example: "Die Überweisung dauert 2 Tage." },
    
    // Useful phrases
    { german: "Ich möchte ein Konto eröffnen", english: "I would like to open an account", 
      example: "Ich möchte ein Girokonto eröffnen." },
    { german: "Wie viel kostet...?", english: "How much does... cost?", 
      example: "Wie viel kostet eine Überweisung?" },
    { german: "Kann ich mit Karte bezahlen?", english: "Can I pay by card?", 
      example: "Kann ich hier mit Karte bezahlen?" },
    { german: "Wo ist der nächste Geldautomat?", english: "Where is the nearest ATM?", 
      example: "Entschuldigung, wo ist der nächste Geldautomat?" },
    { german: "Meine Karte funktioniert nicht", english: "My card doesn't work", 
      example: "Meine EC-Karte funktioniert nicht am Automaten." },
    { german: "Ich habe meine Karte verloren", english: "I have lost my card", 
      example: "Ich habe meine Kreditkarte verloren." },
    { german: "Ich brauche eine neue Karte", english: "I need a new card", 
      example: "Ich brauche eine neue EC-Karte." }
  ]
};

// ============================================================================
// Day 22 Export
// ============================================================================

const day22: ExamDay = {
  day: 22,
  skills: ['Writing'],
  practices: [
    writingPractice1,
    writingPractice2,
    writingPractice3,
    writingPractice4
  ],
  vocabulary,
  focus: "Bank & Money - Opening bank accounts, ATM services, money transfers, and handling banking problems"
};

export default day22;
