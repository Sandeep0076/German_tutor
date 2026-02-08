/**
 * Day 26: Writing Focus
 * Focus: Apartment Viewing & Moving (Wohnungsbesichtigung & Umzug)
 *
 * Skills: Writing (Teil 1 & 2)
 * Topics: Apartment viewing appointments, moving services, furniture delivery,
 *         landlord communication, moving-in checklist, utility registration
 */

import type {
  ExamDay,
  WritingPractice,
  VocabularyTheme
} from '../examTypes';

// =========================================================================
// WRITING PRACTICE - Teil 1: Moving Service Booking Form
// ==========================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: "Teil 1: Umzugsservice Buchungsformular",
  description: "Complete a moving service booking form (Umzugsservice).",
  instructions: "Sie helfen Ihrem Freund bei der Buchung eines Umzugsservices. Lesen Sie den Kontext und füllen Sie die fünf fehlenden Informationen im Formular aus.",
  prompt: `Ihr Freund, Thomas Müller, zieht am 15. März von München nach Hamburg um. Seine alte Adresse ist Rosenstraße 12, 80331 München. Seine neue Adresse ist Elbstraße 45, 20095 Hamburg. Er hat eine 3-Zimmer-Wohnung und braucht einen großen Transporter. Er möchte am Vormittag umziehen, weil er am Nachmittag arbeiten muss. Er hat keine Umzugskartons und braucht 20 Kartons.

In dem Formular fehlen fünf Informationen.
Schreiben Sie die fünf fehlenden Informationen in das Formular.

┌─────────────────────────────────────────────────┐
│         UMZUGSSERVICE "SCHNELL & GUT"           │
│              Buchungsformular                   │
│                                                 │
│ Familienname, Vorname:  Müller, Thomas     (0) │
│ Telefonnummer:          0176-5544332            │
│                                                 │
│ ALTE ADRESSE:                                   │
│ Straße, Hausnummer:     _______________    (1) │
│ PLZ, Ort:               80331 München           │
│                                                 │
│ NEUE ADRESSE:                                   │
│ Straße, Hausnummer:     Elbstraße 45            │
│ PLZ, Ort:               _______________    (2) │
│                                                 │
│ Umzugstermin:           _______________    (3) │
│ Uhrzeit:                _______________    (4) │
│   ☐ Vormittag (8-12 Uhr)                        │
│   ☐ Nachmittag (13-18 Uhr)                      │
│                                                 │
│ Zusätzliche Services:                           │
│ Umzugskartons:          _______________    (5) │
│   (Anzahl)                                      │
│                                                 │
│ Unterschrift:           Thomas Müller           │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) Rosenstraße 12
(2) 20095 Hamburg
(3) 15. März / 15.03.
(4) Vormittag
(5) 20 / 20 Kartons`,
  keyPhrases: [
    "der Umzug (move/relocation)",
    "umziehen (to move)",
    "der Transporter (moving truck)",
    "die Umzugskartons (moving boxes)",
    "die alte Adresse (old address)",
    "die neue Adresse (new address)"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 2: Email About Apartment Viewing
// ==========================================================================

const writingPractice2: WritingPractice = {
  part: 2,
  title: "Teil 2: E-Mail für Wohnungsbesichtigung",
  description: "Write an email to a landlord to arrange an apartment viewing.",
  instructions: "Schreiben Sie eine E-Mail an den Vermieter. Beantworten Sie alle 3 Punkte. Schreiben Sie etwa 30 Wörter.",
  prompt: `Sie haben eine Wohnungsanzeige im Internet gesehen. Die Wohnung gefällt Ihnen. Schreiben Sie an den Vermieter:

• Sagen Sie, warum Sie schreiben (Interesse an der Wohnung).
• Fragen Sie nach einem Besichtigungstermin.
• Fragen Sie: Sind Haustiere erlaubt?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich habe Ihre Wohnungsanzeige im Internet gesehen. Die Wohnung interessiert mich sehr. Wann kann ich die Wohnung besichtigen? Ich habe Zeit am Wochenende. Sind Haustiere in der Wohnung erlaubt?

Mit freundlichen Grüßen
[Ihr Name]`,
  keyPhrases: [
    "Sehr geehrte Damen und Herren",
    "die Wohnungsanzeige (apartment advertisement)",
    "besichtigen (to view)",
    "der Besichtigungstermin (viewing appointment)",
    "Sind Haustiere erlaubt? (Are pets allowed?)",
    "Mit freundlichen Grüßen"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 2 (Additional): Email About Moving Delay
// ==========================================================================

const writingPractice3: WritingPractice = {
  part: 2,
  title: "Teil 2: E-Mail über Umzugsverzögerung",
  description: "Write an email to your landlord about a moving delay.",
  instructions: "Schreiben Sie eine E-Mail an Ihren neuen Vermieter. Beantworten Sie alle 3 Punkte. Schreiben Sie etwa 30 Wörter.",
  prompt: `Sie können nicht am geplanten Tag in Ihre neue Wohnung einziehen. Schreiben Sie an Ihren Vermieter:

• Sagen Sie: Sie können nicht am Montag einziehen.
• Erklären Sie: Warum nicht? (Problem mit dem Umzugsservice)
• Fragen Sie: Können Sie am Mittwoch einziehen?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrter Herr Schmidt,

leider kann ich nicht am Montag in die Wohnung einziehen. Der Umzugsservice hat ein Problem und kann nicht kommen. Kann ich am Mittwoch einziehen? Ich hoffe, das ist kein Problem.

Mit freundlichen Grüßen
Anna Weber`,
  keyPhrases: [
    "Sehr geehrter Herr / Sehr geehrte Frau",
    "leider (unfortunately)",
    "einziehen (to move in)",
    "der Umzugsservice (moving service)",
    "Ich hoffe, das ist kein Problem (I hope that's not a problem)",
    "Mit freundlichen Grüßen"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 2 (Additional): Email About Furniture Delivery
// ==========================================================================

const writingPractice4: WritingPractice = {
  part: 2,
  title: "Teil 2: E-Mail über Möbellieferung",
  description: "Write an email to a furniture store about delivery.",
  instructions: "Schreiben Sie eine E-Mail an das Möbelhaus. Beantworten Sie alle 3 Punkte. Schreiben Sie etwa 30 Wörter.",
  prompt: `Sie haben Möbel gekauft und möchten die Lieferung organisieren. Schreiben Sie an das Möbelhaus:

• Sagen Sie: Sie haben ein Sofa gekauft (Bestellnummer: 12345).
• Fragen Sie: Wann können Sie liefern?
• Fragen Sie: Kostet die Lieferung extra?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich habe bei Ihnen ein Sofa gekauft. Die Bestellnummer ist 12345. Wann können Sie das Sofa liefern? Ich bin nächste Woche zu Hause. Kostet die Lieferung extra Geld?

Mit freundlichen Grüßen
Michael Klein`,
  keyPhrases: [
    "Sehr geehrte Damen und Herren",
    "die Bestellnummer (order number)",
    "liefern (to deliver)",
    "die Lieferung (delivery)",
    "Kostet ... extra? (Does ... cost extra?)",
    "Mit freundlichen Grüßen"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 1 (Additional): Apartment Viewing Registration
// ==========================================================================

const writingPractice5: WritingPractice = {
  part: 1,
  title: "Teil 1: Wohnungsbesichtigung Anmeldeformular",
  description: "Complete an apartment viewing registration form.",
  instructions: "Sie helfen Ihrer Freundin bei der Anmeldung für eine Wohnungsbesichtigung. Lesen Sie den Kontext und füllen Sie die fünf fehlenden Informationen im Formular aus.",
  prompt: `Ihre Freundin, Sarah Johnson, sucht eine Wohnung in Berlin. Sie ist 32 Jahre alt und arbeitet als Lehrerin. Sie verdient 2.800 Euro netto pro Monat. Sie möchte eine 2-Zimmer-Wohnung mieten. Die Besichtigung ist am Samstag, den 20. April um 14:00 Uhr. Sie hat einen Hund.

In dem Formular fehlen fünf Informationen.
Schreiben Sie die fünf fehlenden Informationen in das Formular.

┌─────────────────────────────────────────────────┐
│        WOHNUNGSBESICHTIGUNG                     │
│           Anmeldeformular                       │
│                                                 │
│ Familienname, Vorname:  Johnson, Sarah     (0) │
│ Alter:                  _______________    (1) │
│ Beruf:                  _______________    (2) │
│ Nettoeinkommen:         _______________    (3) │
│   (pro Monat in Euro)                           │
│                                                 │
│ Gewünschte Wohnung:     _______________    (4) │
│   ☐ 1-Zimmer  ☐ 2-Zimmer  ☐ 3-Zimmer           │
│                                                 │
│ Besichtigungstermin:                            │
│ Datum:                  20. April               │
│ Uhrzeit:                14:00 Uhr               │
│                                                 │
│ Haustiere:              _______________    (5) │
│   ☐ Ja (welche?)  ☐ Nein                        │
│                                                 │
│ Unterschrift:           Sarah Johnson           │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) 32 / 32 Jahre
(2) Lehrerin
(3) 2.800 Euro / 2800 Euro
(4) 2-Zimmer
(5) Ja, Hund / Hund`,
  keyPhrases: [
    "die Wohnungsbesichtigung (apartment viewing)",
    "der Beruf (profession)",
    "das Nettoeinkommen (net income)",
    "die Zimmer (rooms)",
    "die Haustiere (pets)",
    "der Hund (dog)"
  ]
};

// =========================================================================
// VOCABULARY THEME
// ==========================================================================

const vocabularyTheme: VocabularyTheme = {
  theme: 'Apartment Viewing & Moving (Wohnungsbesichtigung & Umzug)',
  items: [
    { german: 'die Wohnung', english: 'apartment', example: 'Ich suche eine Wohnung in Berlin.' },
    { german: 'die Wohnungsbesichtigung', english: 'apartment viewing', example: 'Die Besichtigung ist am Samstag.' },
    { german: 'besichtigen', english: 'to view', example: 'Kann ich die Wohnung besichtigen?' },
    { german: 'der Vermieter / die Vermieterin', english: 'landlord', example: 'Der Vermieter ist sehr nett.' },
    { german: 'der Mieter / die Mieterin', english: 'tenant', example: 'Ich bin Mieter in diesem Haus.' },
    { german: 'die Miete', english: 'rent', example: 'Die Miete kostet 800 Euro.' },
    { german: 'mieten', english: 'to rent', example: 'Ich möchte eine Wohnung mieten.' },
    { german: 'die Kaution', english: 'deposit', example: 'Die Kaution beträgt zwei Monatsmieten.' },
    { german: 'die Nebenkosten', english: 'additional costs/utilities', example: 'Die Nebenkosten sind 150 Euro.' },
    { german: 'der Mietvertrag', english: 'rental contract', example: 'Bitte unterschreiben Sie den Mietvertrag.' },
    { german: 'der Umzug', english: 'move/relocation', example: 'Der Umzug ist nächste Woche.' },
    { german: 'umziehen', english: 'to move (residence)', example: 'Ich ziehe nach Hamburg um.' },
    { german: 'einziehen', english: 'to move in', example: 'Wann können Sie einziehen?' },
    { german: 'ausziehen', english: 'to move out', example: 'Ich ziehe am 31. März aus.' },
    { german: 'der Umzugsservice', english: 'moving service', example: 'Ich brauche einen Umzugsservice.' },
    { german: 'der Transporter', english: 'moving truck/van', example: 'Wir brauchen einen großen Transporter.' },
    { german: 'die Umzugskartons', english: 'moving boxes', example: 'Ich habe 30 Umzugskartons.' },
    { german: 'packen', english: 'to pack', example: 'Ich muss meine Sachen packen.' },
    { german: 'die Möbel', english: 'furniture', example: 'Die Möbel sind sehr schwer.' },
    { german: 'das Sofa', english: 'sofa', example: 'Das Sofa passt nicht durch die Tür.' },
    { german: 'der Schrank', english: 'wardrobe/cabinet', example: 'Der Schrank ist sehr groß.' },
    { german: 'das Bett', english: 'bed', example: 'Ich brauche ein neues Bett.' },
    { german: 'der Tisch', english: 'table', example: 'Der Tisch steht in der Küche.' },
    { german: 'der Stuhl', english: 'chair', example: 'Wir haben vier Stühle.' },
    { german: 'die Lieferung', english: 'delivery', example: 'Die Lieferung kommt morgen.' },
    { german: 'liefern', english: 'to deliver', example: 'Wann können Sie liefern?' },
    { german: 'das Zimmer', english: 'room', example: 'Die Wohnung hat drei Zimmer.' },
    { german: 'die Küche', english: 'kitchen', example: 'Die Küche ist sehr modern.' },
    { german: 'das Bad / das Badezimmer', english: 'bathroom', example: 'Das Bad ist klein aber schön.' },
    { german: 'das Wohnzimmer', english: 'living room', example: 'Das Wohnzimmer ist sehr hell.' },
    { german: 'das Schlafzimmer', english: 'bedroom', example: 'Das Schlafzimmer ist ruhig.' },
    { german: 'der Balkon', english: 'balcony', example: 'Die Wohnung hat einen großen Balkon.' },
    { german: 'der Keller', english: 'basement/cellar', example: 'Im Keller kann man Sachen lagern.' },
    { german: 'die Quadratmeter (qm)', english: 'square meters', example: 'Die Wohnung hat 65 Quadratmeter.' },
    { german: 'möbliert', english: 'furnished', example: 'Ist die Wohnung möbliert?' },
    { german: 'unmöbliert', english: 'unfurnished', example: 'Ich suche eine unmöblierte Wohnung.' },
    { german: 'hell', english: 'bright', example: 'Die Wohnung ist sehr hell.' },
    { german: 'dunkel', english: 'dark', example: 'Das Zimmer ist zu dunkel.' },
    { german: 'ruhig', english: 'quiet', example: 'Die Straße ist sehr ruhig.' },
    { german: 'laut', english: 'loud/noisy', example: 'Die Wohnung ist zu laut.' },
    { german: 'die Haustiere', english: 'pets', example: 'Sind Haustiere erlaubt?' },
    { german: 'erlaubt', english: 'allowed/permitted', example: 'Rauchen ist nicht erlaubt.' },
    { german: 'verboten', english: 'forbidden', example: 'Hunde sind verboten.' },
    { german: 'die Adresse', english: 'address', example: 'Was ist Ihre neue Adresse?' },
    { german: 'die Straße', english: 'street', example: 'Ich wohne in der Hauptstraße.' },
    { german: 'die Hausnummer', english: 'house number', example: 'Die Hausnummer ist 45.' },
    { german: 'die Postleitzahl (PLZ)', english: 'postal code', example: 'Die PLZ ist 10115.' },
    { german: 'der Stock / die Etage', english: 'floor', example: 'Die Wohnung ist im dritten Stock.' },
    { german: 'das Erdgeschoss', english: 'ground floor', example: 'Ich wohne im Erdgeschoss.' },
    { german: 'der Aufzug', english: 'elevator', example: 'Gibt es einen Aufzug?' },
    { german: 'die Treppe', english: 'stairs', example: 'Ich muss die Treppe nehmen.' }
  ]
};

// =========================================================================
// EXPORT DAY 26
// ==========================================================================

const day26: ExamDay = {
  day: 26,
  skills: ['Writing'],
  focus: 'Apartment Viewing & Moving (Wohnungsbesichtigung & Umzug)',
  practices: [
    writingPractice1,
    writingPractice2,
    writingPractice3,
    writingPractice4,
    writingPractice5
  ],
  vocabulary: vocabularyTheme
};

export default day26;
