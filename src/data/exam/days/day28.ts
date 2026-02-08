/**
 * Day 28: Writing Focus
 * Focus: Kindergarten & Childcare (Kindergarten & Kinderbetreuung)
 *
 * Skills: Writing (Teil 1 & 2)
 * Topics: Kindergarten registration, childcare arrangements, parent-teacher communication,
 *         sick child notifications, pickup arrangements, special events
 */

import type {
  ExamDay,
  WritingPractice,
  VocabularyTheme
} from '../examTypes';

// =========================================================================
// WRITING PRACTICE - Teil 1: Kindergarten Registration Form
// ==========================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: "Teil 1: Kindergarten Anmeldeformular",
  description: "Complete a kindergarten registration form (Kindergarten Anmeldung).",
  instructions: "Sie helfen Ihrer Freundin bei der Anmeldung ihres Kindes im Kindergarten. Lesen Sie den Kontext und füllen Sie die fünf fehlenden Informationen im Formular aus.",
  prompt: `Ihre Freundin, Lisa Weber, möchte ihre Tochter Emma im Kindergarten "Sonnenschein" anmelden. Emma ist am 12. Mai 2021 geboren und ist 4 Jahre alt. Lisa arbeitet von Montag bis Freitag und braucht einen Ganztagsplatz (8:00 bis 16:00 Uhr). Emma hat eine Allergie gegen Nüsse. Der gewünschte Starttermin ist der 1. September. Lisa hat keine Geschwister für Emma angegeben.

In dem Formular fehlen fünf Informationen.
Schreiben Sie die fünf fehlenden Informationen in das Formular.

┌─────────────────────────────────────────────────┐
│         KINDERGARTEN "SONNENSCHEIN"             │
│              Anmeldeformular                    │
│                                                 │
│ Name des Kindes:        Weber, Emma        (0) │
│ Geburtsdatum:           _______________    (1) │
│ Alter:                  4 Jahre                 │
│                                                 │
│ Name der Mutter:        Lisa Weber              │
│ Telefonnummer:          0176-8877665            │
│                                                 │
│ Gewünschte Betreuungszeit:                      │
│   ☐ Halbtags (8-12 Uhr)                         │
│   ☐ Ganztags (8-16 Uhr)              _____ (2) │
│                                                 │
│ Gewünschter Starttermin: _______________   (3) │
│                                                 │
│ Geschwister im Kindergarten:                    │
│   ☐ Ja (Name: _________)                        │
│   ☐ Nein                             _____ (4) │
│                                                 │
│ Allergien oder besondere                        │
│ Bedürfnisse:            _______________    (5) │
│                                                 │
│ Unterschrift:           Lisa Weber              │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) 12.05.2021 / 12. Mai 2021
(2) Ganztags / Ganztags (8-16 Uhr)
(3) 1. September / 01.09.
(4) Nein
(5) Allergie gegen Nüsse / Nussallergie`,
  keyPhrases: [
    "der Kindergarten (kindergarten)",
    "die Anmeldung (registration)",
    "das Geburtsdatum (date of birth)",
    "die Betreuungszeit (care time)",
    "Ganztags (full-day)",
    "die Allergie (allergy)"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 2: Email About Sick Child
// ==========================================================================

const writingPractice2: WritingPractice = {
  part: 2,
  title: "Teil 2: E-Mail über krankes Kind",
  description: "Write an email to the kindergarten about your sick child.",
  instructions: "Schreiben Sie eine E-Mail an den Kindergarten. Beantworten Sie alle 3 Punkte. Schreiben Sie etwa 30 Wörter.",
  prompt: `Ihr Kind ist krank und kann heute nicht in den Kindergarten kommen. Schreiben Sie an den Kindergarten:

• Sagen Sie: Ihr Kind ist krank und kann nicht kommen.
• Sagen Sie: Was hat Ihr Kind? (Fieber und Husten)
• Fragen Sie: Wann kann Ihr Kind wieder kommen?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Frau Schmidt,

meine Tochter Emma ist heute krank und kann nicht in den Kindergarten kommen. Sie hat Fieber und Husten. Wann kann sie wieder kommen? Brauche ich ein Attest vom Arzt?

Mit freundlichen Grüßen
Lisa Weber`,
  keyPhrases: [
    "Sehr geehrte Frau / Sehr geehrter Herr",
    "krank sein (to be sick)",
    "das Fieber (fever)",
    "der Husten (cough)",
    "das Attest (medical certificate)",
    "Mit freundlichen Grüßen"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 2 (Additional): Email About Pickup Time Change
// ==========================================================================

const writingPractice3: WritingPractice = {
  part: 2,
  title: "Teil 2: E-Mail über Abholzeit-Änderung",
  description: "Write an email about changing pickup time.",
  instructions: "Schreiben Sie eine E-Mail an den Kindergarten. Beantworten Sie alle 3 Punkte. Schreiben Sie etwa 30 Wörter.",
  prompt: `Sie müssen Ihr Kind heute früher abholen. Schreiben Sie an den Kindergarten:

• Sagen Sie: Sie müssen Ihr Kind heute früher abholen.
• Sagen Sie: Um wie viel Uhr? (13:00 Uhr statt 16:00 Uhr)
• Erklären Sie: Warum? (Arzttermin)

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Frau Müller,

ich muss meinen Sohn Max heute früher abholen. Ich komme um 13 Uhr, nicht um 16 Uhr. Wir haben einen Arzttermin. Ist das in Ordnung?

Mit freundlichen Grüßen
Anna Klein`,
  keyPhrases: [
    "Sehr geehrte Frau / Sehr geehrter Herr",
    "abholen (to pick up)",
    "früher (earlier)",
    "der Arzttermin (doctor's appointment)",
    "Ist das in Ordnung? (Is that okay?)",
    "Mit freundlichen Grüßen"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 2 (Additional): Email About Birthday Party
// ==========================================================================

const writingPractice4: WritingPractice = {
  part: 2,
  title: "Teil 2: E-Mail über Geburtstagsfeier",
  description: "Write an email about a birthday party in kindergarten.",
  instructions: "Schreiben Sie eine E-Mail an die Erzieherin. Beantworten Sie alle 3 Punkte. Schreiben Sie etwa 30 Wörter.",
  prompt: `Ihr Kind hat bald Geburtstag und Sie möchten im Kindergarten feiern. Schreiben Sie an die Erzieherin:

• Sagen Sie: Ihr Kind hat am Freitag Geburtstag.
• Fragen Sie: Können Sie Kuchen mitbringen?
• Fragen Sie: Wie viele Kinder sind in der Gruppe?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Liebe Frau Schmidt,

meine Tochter Sophie hat am Freitag Geburtstag. Kann ich einen Kuchen für die Kinder mitbringen? Wie viele Kinder sind in der Gruppe? Ich möchte genug Kuchen kaufen.

Viele Grüße
Maria Schneider`,
  keyPhrases: [
    "Liebe Frau / Lieber Herr",
    "der Geburtstag (birthday)",
    "feiern (to celebrate)",
    "der Kuchen (cake)",
    "mitbringen (to bring along)",
    "Viele Grüße"
  ]
};

// =========================================================================
// WRITING PRACTICE - Teil 1 (Additional): Daycare Emergency Contact Form
// ==========================================================================

const writingPractice5: WritingPractice = {
  part: 1,
  title: "Teil 1: Notfallkontakt-Formular",
  description: "Complete an emergency contact form for daycare.",
  instructions: "Sie füllen ein Notfallkontakt-Formular für Ihr Kind aus. Lesen Sie den Kontext und füllen Sie die fünf fehlenden Informationen im Formular aus.",
  prompt: `Sie sind Michael Braun und Ihr Sohn heißt Leon Braun. Leon ist 3 Jahre alt. Ihre Telefonnummer ist 0172-9988776. Ihre Frau heißt Sarah Braun und ihre Telefonnummer ist 0173-5544332. Im Notfall kann auch Ihre Mutter, Petra Braun, das Kind abholen. Ihre Telefonnummer ist 030-7788990. Leons Kinderarzt ist Dr. Martin Fischer in der Hauptstraße 45.

In dem Formular fehlen fünf Informationen.
Schreiben Sie die fünf fehlenden Informationen in das Formular.

┌─────────────────────────────────────────────────┐
│         NOTFALLKONTAKTE                         │
│         Kindergarten Regenbogen                 │
│                                                 │
│ Name des Kindes:        Braun, Leon        (0) │
│ Alter:                  3 Jahre                 │
│                                                 │
│ ELTERN:                                         │
│ Vater:                  Michael Braun           │
│ Telefon (Vater):        _______________    (1) │
│                                                 │
│ Mutter:                 _______________    (2) │
│ Telefon (Mutter):       0173-5544332            │
│                                                 │
│ WEITERE ABHOLBERECHTIGTE PERSONEN:              │
│ Name:                   _______________    (3) │
│ Beziehung zum Kind:     Großmutter              │
│ Telefon:                _______________    (4) │
│                                                 │
│ KINDERARZT:                                     │
│ Name:                   Dr. Martin Fischer      │
│ Adresse:                _______________    (5) │
│                                                 │
│ Unterschrift:           Michael Braun           │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) 0172-9988776
(2) Sarah Braun
(3) Petra Braun
(4) 030-7788990
(5) Hauptstraße 45`,
  keyPhrases: [
    "der Notfall (emergency)",
    "der Notfallkontakt (emergency contact)",
    "abholen (to pick up)",
    "abholberechtigt (authorized to pick up)",
    "der Kinderarzt (pediatrician)",
    "die Großmutter (grandmother)"
  ]
};

// =========================================================================
// VOCABULARY THEME
// ==========================================================================

const vocabularyTheme: VocabularyTheme = {
  theme: 'Kindergarten & Childcare (Kindergarten & Kinderbetreuung)',
  items: [
    { german: 'der Kindergarten', english: 'kindergarten', example: 'Mein Kind geht in den Kindergarten.' },
    { german: 'die Kita / die Kindertagesstätte', english: 'daycare center', example: 'Die Kita ist von 7 bis 17 Uhr geöffnet.' },
    { german: 'die Kinderbetreuung', english: 'childcare', example: 'Ich brauche eine gute Kinderbetreuung.' },
    { german: 'die Erzieherin / der Erzieher', english: 'educator/teacher', example: 'Die Erzieherin ist sehr nett.' },
    { german: 'das Kind / die Kinder', english: 'child/children', example: 'Ich habe zwei Kinder.' },
    { german: 'die Tochter', english: 'daughter', example: 'Meine Tochter ist 4 Jahre alt.' },
    { german: 'der Sohn', english: 'son', example: 'Mein Sohn heißt Max.' },
    { german: 'die Anmeldung', english: 'registration', example: 'Die Anmeldung ist im März.' },
    { german: 'anmelden', english: 'to register', example: 'Ich möchte mein Kind anmelden.' },
    { german: 'die Betreuungszeit', english: 'care time/hours', example: 'Die Betreuungszeit ist von 8 bis 16 Uhr.' },
    { german: 'Halbtags', english: 'half-day', example: 'Wir brauchen nur Halbtags-Betreuung.' },
    { german: 'Ganztags', english: 'full-day', example: 'Ich arbeite und brauche Ganztags-Betreuung.' },
    { german: 'der Platz', english: 'place/spot', example: 'Gibt es noch einen freien Platz?' },
    { german: 'abholen', english: 'to pick up', example: 'Ich hole mein Kind um 16 Uhr ab.' },
    { german: 'bringen', english: 'to bring/drop off', example: 'Ich bringe mein Kind um 8 Uhr.' },
    { german: 'die Abholzeit', english: 'pickup time', example: 'Die Abholzeit ist um 16 Uhr.' },
    { german: 'abholberechtigt', english: 'authorized to pick up', example: 'Nur abholberechtigte Personen dürfen das Kind abholen.' },
    { german: 'krank', english: 'sick/ill', example: 'Mein Kind ist krank.' },
    { german: 'gesund', english: 'healthy', example: 'Mein Kind ist wieder gesund.' },
    { german: 'das Fieber', english: 'fever', example: 'Das Kind hat Fieber.' },
    { german: 'der Husten', english: 'cough', example: 'Mein Sohn hat Husten.' },
    { german: 'der Schnupfen', english: 'cold/runny nose', example: 'Emma hat Schnupfen.' },
    { german: 'die Allergie', english: 'allergy', example: 'Mein Kind hat eine Allergie gegen Nüsse.' },
    { german: 'der Kinderarzt / die Kinderärztin', english: 'pediatrician', example: 'Wir gehen zum Kinderarzt.' },
    { german: 'das Attest', english: 'medical certificate', example: 'Ich brauche ein Attest vom Arzt.' },
    { german: 'der Notfall', english: 'emergency', example: 'Im Notfall rufen Sie bitte an.' },
    { german: 'der Notfallkontakt', english: 'emergency contact', example: 'Bitte geben Sie einen Notfallkontakt an.' },
    { german: 'die Gruppe', english: 'group', example: 'In der Gruppe sind 15 Kinder.' },
    { german: 'spielen', english: 'to play', example: 'Die Kinder spielen im Garten.' },
    { german: 'das Spielzeug', english: 'toy', example: 'Die Kinder haben viel Spielzeug.' },
    { german: 'der Geburtstag', english: 'birthday', example: 'Mein Kind hat morgen Geburtstag.' },
    { german: 'feiern', english: 'to celebrate', example: 'Wir feiern den Geburtstag im Kindergarten.' },
    { german: 'der Kuchen', english: 'cake', example: 'Ich bringe einen Kuchen mit.' },
    { german: 'mitbringen', english: 'to bring along', example: 'Kann ich Kuchen mitbringen?' },
    { german: 'das Essen', english: 'food/meal', example: 'Das Essen im Kindergarten ist gesund.' },
    { german: 'das Frühstück', english: 'breakfast', example: 'Die Kinder essen Frühstück um 9 Uhr.' },
    { german: 'das Mittagessen', english: 'lunch', example: 'Das Mittagessen kostet 3 Euro.' },
    { german: 'der Snack', english: 'snack', example: 'Am Nachmittag gibt es einen Snack.' },
    { german: 'die Windel', english: 'diaper', example: 'Bitte bringen Sie Windeln mit.' },
    { german: 'die Wechselkleidung', english: 'change of clothes', example: 'Ihr Kind braucht Wechselkleidung.' },
    { german: 'die Hausschuhe', english: 'indoor shoes/slippers', example: 'Im Kindergarten tragen die Kinder Hausschuhe.' },
    { german: 'der Rucksack', english: 'backpack', example: 'Jedes Kind hat einen kleinen Rucksack.' },
    { german: 'die Eltern', english: 'parents', example: 'Die Eltern kommen zum Elternabend.' },
    { german: 'die Mutter', english: 'mother', example: 'Die Mutter arbeitet Vollzeit.' },
    { german: 'der Vater', english: 'father', example: 'Der Vater holt das Kind ab.' },
    { german: 'die Großeltern', english: 'grandparents', example: 'Die Großeltern helfen bei der Betreuung.' },
    { german: 'die Großmutter / die Oma', english: 'grandmother', example: 'Die Oma darf das Kind abholen.' },
    { german: 'der Großvater / der Opa', english: 'grandfather', example: 'Der Opa spielt mit den Kindern.' },
    { german: 'die Geschwister', english: 'siblings', example: 'Hat Ihr Kind Geschwister?' },
    { german: 'der Bruder', english: 'brother', example: 'Mein Sohn hat einen Bruder.' },
    { german: 'die Schwester', english: 'sister', example: 'Emma hat eine kleine Schwester.' },
    { german: 'der Elternabend', english: 'parent-teacher meeting', example: 'Der Elternabend ist am Dienstag.' },
    { german: 'das Gespräch', english: 'conversation/meeting', example: 'Ich möchte ein Gespräch mit der Erzieherin.' },
    { german: 'die Öffnungszeiten', english: 'opening hours', example: 'Die Öffnungszeiten sind von 7 bis 17 Uhr.' },
    { german: 'die Schließzeit', english: 'closing time/holiday closure', example: 'Im August gibt es drei Wochen Schließzeit.' },
    { german: 'die Ferien', english: 'holidays/vacation', example: 'In den Ferien ist der Kindergarten geschlossen.' },
    { german: 'der Ausflug', english: 'excursion/field trip', example: 'Nächste Woche machen wir einen Ausflug.' },
    { german: 'die Kosten', english: 'costs', example: 'Wie hoch sind die Kosten pro Monat?' },
    { german: 'die Gebühr', english: 'fee', example: 'Die Gebühr beträgt 200 Euro.' },
    { german: 'bezahlen', english: 'to pay', example: 'Ich bezahle die Gebühr jeden Monat.' },
    { german: 'der Vertrag', english: 'contract', example: 'Bitte unterschreiben Sie den Vertrag.' },
    { german: 'unterschreiben', english: 'to sign', example: 'Ich muss das Formular unterschreiben.' }
  ]
};

// =========================================================================
// EXPORT DAY 28
// ==========================================================================

const day28: ExamDay = {
  day: 28,
  skills: ['Writing'],
  focus: 'Kindergarten & Childcare (Kindergarten & Kinderbetreuung)',
  practices: [
    writingPractice1,
    writingPractice2,
    writingPractice3,
    writingPractice4,
    writingPractice5
  ],
  vocabulary: vocabularyTheme
};

export default day28;
