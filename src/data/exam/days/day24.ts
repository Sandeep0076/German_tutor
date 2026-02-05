/**
 * Day 24: Writing Focus
 * Focus: Hairdresser & Beauty Services
 *
 * Skills: Writing (Teil 1 & 2)
 * Topics: Hair salon appointments, beauty treatments, describing hairstyles,
 *         booking services, salon communication
 */

import type {
  ExamDay,
  WritingPractice,
  VocabularyTheme
} from '../examTypes';

// ==========================================================================
// WRITING PRACTICE - Teil 1: Hair Salon Appointment Form
// ==========================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: "Teil 1: Hair Salon Appointment Registration Form",
  description: "Complete a hair salon appointment form with customer details",
  instructions: "You are helping your friend book a hair salon appointment. " +
                "Read the context and fill in the missing information.",
  prompt: `Ihre Freundin, Maria Gonzalez, möchte einen Termin im Friseursalon "Schöne Haare" in München buchen. Sie ist 28 Jahre alt und möchte am nächsten Samstag um 14:00 Uhr kommen. Maria hat lange, blonde Haare und möchte einen neuen Haarschnitt und eine Haarfarbe. Sie hat die Telefonnummer 0176-8945671. Maria war noch nie in diesem Salon.

In dem Formular fehlen fünf Informationen.
Helfen Sie Ihrer Freundin und schreiben Sie die fünf fehlenden Informationen in das Formular.
Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen.

┌─────────────────────────────────────────────────┐
│        FRISEURSALON "SCHÖNE HAARE"              │
│           Terminvereinbarung                    │
│                                                 │
│ Familienname, Vorname:  Gonzalez, Maria   (0) │
│ Telefonnummer:          _______________    (1) │
│ E-Mail:                 optional                │
│                                                 │
│ Wunschtag:              _______________    (2) │
│ Wunschzeit:             _______________    (3) │
│                                                 │
│ Gewünschte Leistung:    _______________    (4) │
│   ☐ Haarschnitt (Haircut)                      │
│   ☐ Waschen & Föhnen (Wash & Blow-dry)         │
│   ☐ Haarfarbe (Hair coloring)                  │
│   ☐ Dauerwelle (Perm)                           │
│   ☐ Hochsteckfrisur (Updo)                     │
│                                                 │
│ Haarlänge:              _______________    (5) │
│   ☐ Kurz (Short)                                │
│   ☐ Mittel (Medium)                             │
│   ☐ Lang (Long)                                 │
│                                                 │
│ Waren Sie schon bei uns?                        │
│   ☐ Ja    ☐ Nein                                │
│                                                 │
│ Unterschrift:           Maria Gonzalez          │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) 0176-8945671 / 0176 8945671
(2) Samstag / nächster Samstag
(3) 14:00 Uhr / 14 Uhr / 14.00
(4) Haarschnitt und Haarfarbe / Haarschnitt, Haarfarbe
(5) Lang / lange Haare`,
  keyPhrases: [
    "der Friseur / der Friseursalon (hairdresser/hair salon)",
    "der Termin (appointment)",
    "der Haarschnitt (haircut)",
    "die Haarfarbe (hair coloring)",
    "lang (long)",
    "die Telefonnummer (phone number)"
  ]
};

// ==========================================================================
// WRITING PRACTICE - Teil 2: Email to Salon About Appointment Change
// ==========================================================================

const writingPractice2: WritingPractice = {
  part: 2,
  title: "Teil 2: Email to Hair Salon About Appointment Change",
  description: "Write an email to a hair salon to change your appointment",
  instructions: "Write an email to your hair salon. Address all 3 points. " +
                "Write about 30 words including greeting and closing.",
  prompt: `Sie haben einen Termin beim Friseur am Montag um 10 Uhr, aber Sie können nicht kommen. Schreiben Sie an den Friseursalon:

• Warum schreiben Sie?
• Sagen Sie: Sie können nicht am Montag kommen
• Fragen Sie: Können Sie am Dienstag um 15 Uhr kommen?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich habe einen Termin am Montag um 10 Uhr. Leider kann ich nicht kommen. Ich habe einen wichtigen Termin. Kann ich am Dienstag um 15 Uhr kommen?

Mit freundlichen Grüßen
Lisa Schmidt`,
  keyPhrases: [
    "Sehr geehrte Damen und Herren (Dear Sir/Madam)",
    "der Termin (appointment)",
    "leider (unfortunately)",
    "nicht können (cannot)",
    "Kann ich...? (Can I...?)",
    "Mit freundlichen Grüßen (Sincerely)"
  ]
};

// ==========================================================================
// WRITING PRACTICE - Teil 2: Email About Special Hair Treatment
// ==========================================================================

const writingPractice3: WritingPractice = {
  part: 2,
  title: "Teil 2: Email Asking About Hair Treatment Services",
  description: "Write an email asking about special hair treatments",
  instructions: "Write an email to a hair salon. Address all 3 points. " +
                "Write about 30 words including greeting and closing.",
  prompt: `Sie haben trockene Haare. Sie möchten eine spezielle Behandlung. Schreiben Sie an den Friseursalon "Haarpflege Plus":

• Beschreiben Sie Ihr Problem: trockene Haare
• Fragen Sie: Welche Behandlung ist gut für trockene Haare?
• Fragen Sie: Wie viel kostet die Behandlung?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich habe sehr trockene Haare. Welche Behandlung ist gut für trockene Haare? Haben Sie eine spezielle Haarkur? Wie viel kostet die Behandlung?

Mit freundlichen Grüßen
Anna Weber`,
  keyPhrases: [
    "trocken (dry)",
    "die Haare (hair)",
    "die Behandlung (treatment)",
    "die Haarkur (hair mask/treatment)",
    "Welche...? (Which...?)",
    "Wie viel kostet...? (How much does... cost?)"
  ]
};

// ==========================================================================
// WRITING PRACTICE - Teil 2: Email to Friend About Hairdresser
// ==========================================================================

const writingPractice4: WritingPractice = {
  part: 2,
  title: "Teil 2: Email to Friend About Hairdresser Recommendation",
  description: "Write an informal email to a friend about a hairdresser",
  instructions: "Write an email to your friend. Address all 3 points. " +
                "Write about 30 words including greeting and closing.",
  prompt: `Ihre Freundin sucht einen guten Friseur in der Stadt. Sie kennen einen guten Salon. Schreiben Sie an Ihre Freundin Julia:

• Empfehlen Sie einen Friseursalon
• Sagen Sie: Warum ist der Salon gut?
• Geben Sie die Adresse oder Telefonnummer

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Liebe Julia,

ich kenne einen sehr guten Friseursalon. Der Salon heißt "Schnipp-Schnapp" und ist in der Hauptstraße 45. Die Friseure sind sehr nett und die Preise sind günstig. Die Telefonnummer ist 089-5567890.

Viele Grüße
Sophie`,
  keyPhrases: [
    "Liebe/Lieber... (Dear...)",
    "empfehlen (to recommend)",
    "gut (good)",
    "nett (nice)",
    "günstig (inexpensive/affordable)",
    "Viele Grüße (Best regards)"
  ]
};

// ==========================================================================
// VOCABULARY THEME - Hairdresser & Beauty Services
// ==========================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Hairdresser & Beauty Services (Friseur & Schönheitspflege)',
  items: [
    // Basic salon vocabulary
    { german: "der Friseur / die Friseuse", english: "hairdresser", 
      example: "Ich gehe zum Friseur." },
    { german: "der Friseursalon / der Salon", english: "hair salon", 
      example: "Der Friseursalon ist in der Bahnhofstraße." },
    { german: "der Herrenfriseur", english: "barber (for men)", 
      example: "Mein Vater geht zum Herrenfriseur." },
    { german: "der Damenfriseur", english: "ladies' hairdresser", 
      example: "Das ist ein Damenfriseur." },
    { german: "der Termin", english: "appointment", 
      example: "Ich habe einen Termin um 14 Uhr." },
    { german: "die Terminvereinbarung", english: "appointment scheduling", 
      example: "Die Terminvereinbarung ist online möglich." },
    
    // Hair vocabulary
    { german: "die Haare / das Haar", english: "hair", 
      example: "Ich habe lange Haare." },
    { german: "der Haarschnitt", english: "haircut", 
      example: "Ich brauche einen neuen Haarschnitt." },
    { german: "die Frisur", english: "hairstyle", 
      example: "Deine Frisur ist schön!" },
    { german: "die Haarlänge", english: "hair length", 
      example: "Welche Haarlänge möchten Sie?" },
    { german: "die Haarfarbe", english: "hair color", 
      example: "Ich möchte eine neue Haarfarbe." },
    { german: "die Haarstruktur", english: "hair texture", 
      example: "Ich habe lockige Haare." },
    
    // Hair length
    { german: "kurz", english: "short", 
      example: "Ich möchte kurze Haare." },
    { german: "lang", english: "long", 
      example: "Sie hat lange, blonde Haare." },
    { german: "mittellang / mittel", english: "medium length", 
      example: "Ich schneide die Haare mittellang." },
    { german: "schulterlang", english: "shoulder-length", 
      example: "Meine Haare sind schulterlang." },
    
    // Hair types & colors
    { german: "glatt", english: "straight", 
      example: "Ich habe glattes Haar." },
    { german: "lockig", english: "curly", 
      example: "Meine Tochter hat lockige Haare." },
    { german: "wellig", english: "wavy", 
      example: "Wellige Haare sind schön." },
    { german: "blond", english: "blonde", 
      example: "Sie hat blonde Haare." },
    { german: "braun", english: "brown", 
      example: "Er hat braune Haare." },
    { german: "schwarz", english: "black", 
      example: "Ich habe schwarze Haare." },
    { german: "rot", english: "red", 
      example: "Rote Haare sind selten." },
    { german: "grau", english: "gray", 
      example: "Mein Vater hat graue Haare." },
    
    // Hair condition
    { german: "trocken", english: "dry", 
      example: "Ich habe trockene Haare." },
    { german: "fettig / ölig", english: "oily/greasy", 
      example: "Meine Haare sind schnell fettig." },
    { german: "normal", english: "normal", 
      example: "Ich habe normales Haar." },
    { german: "dünn", english: "thin", 
      example: "Sie hat dünnes Haar." },
    { german: "dick", english: "thick", 
      example: "Er hat dickes Haar." },
    { german: "gesund", english: "healthy", 
      example: "Ich möchte gesunde Haare." },
    { german: "kaputt / beschädigt", english: "damaged", 
      example: "Meine Haare sind kaputt." },
    
    // Hair services
    { german: "schneiden", english: "to cut", 
      example: "Bitte schneiden Sie 5 cm ab." },
    { german: "waschen", english: "to wash", 
      example: "Ich wasche meine Haare jeden Tag." },
    { german: "föhnen", english: "to blow-dry", 
      example: "Können Sie die Haare föhnen?" },
    { german: "kämmen", english: "to comb", 
      example: "Ich kämme meine Haare." },
    { german: "bürsten", english: "to brush", 
      example: "Bitte bürsten Sie meine Haare." },
    { german: "färben", english: "to dye/color", 
      example: "Ich möchte die Haare blond färben." },
    { german: "tönen", english: "to tint", 
      example: "Ich töne meine Haare." },
    { german: "aufhellen", english: "to lighten", 
      example: "Können Sie die Haare aufhellen?" },
    { german: "stylen", english: "to style", 
      example: "Wie möchten Sie die Haare stylen?" },
    
    // Specific treatments
    { german: "die Dauerwelle", english: "perm", 
      example: "Ich möchte eine Dauerwelle." },
    { german: "die Hochsteckfrisur", english: "updo", 
      example: "Für die Hochzeit brauche ich eine Hochsteckfrisur." },
    { german: "die Haarkur", english: "hair treatment/mask", 
      example: "Diese Haarkur ist sehr gut." },
    { german: "die Behandlung", english: "treatment", 
      example: "Welche Behandlung empfehlen Sie?" },
    { german: "die Spülung", english: "conditioner", 
      example: "Ich brauche eine gute Spülung." },
    { german: "der Pony", english: "bangs/fringe", 
      example: "Ich möchte einen Pony." },
    { german: "die Strähnchen", english: "highlights", 
      example: "Blonde Strähnchen, bitte." },
    { german: "der Bart", english: "beard", 
      example: "Können Sie meinen Bart schneiden?" },
    
    // Equipment & products
    { german: "die Schere", english: "scissors", 
      example: "Die Schere ist sehr scharf." },
    { german: "der Kamm", english: "comb", 
      example: "Ich brauche einen Kamm." },
    { german: "die Bürste", english: "brush", 
      example: "Wo ist die Haarbürste?" },
    { german: "der Föhn / der Haartrockner", english: "hair dryer", 
      example: "Der Föhn ist kaputt." },
    { german: "das Shampoo", english: "shampoo", 
      example: "Welches Shampoo benutzen Sie?" },
    { german: "der Spiegel", english: "mirror", 
      example: "Schauen Sie in den Spiegel." },
    { german: "das Handtuch", english: "towel", 
      example: "Hier ist ein Handtuch." },
    { german: "der Umhang", english: "cape/gown", 
      example: "Ich bekomme einen Umhang." },
    
    // Salon actions & interactions
    { german: "einen Termin machen", english: "to make an appointment", 
      example: "Ich möchte einen Termin machen." },
    { german: "einen Termin vereinbaren", english: "to schedule appointment", 
      example: "Können wir einen Termin vereinbaren?" },
    { german: "einen Termin verschieben", english: "to reschedule", 
      example: "Kann ich den Termin verschieben?" },
    { german: "einen Termin absagen", english: "to cancel appointment", 
      example: "Ich muss den Termin absagen." },
    { german: "warten", english: "to wait", 
      example: "Bitte warten Sie einen Moment." },
    { german: "Platz nehmen", english: "to take a seat", 
      example: "Bitte nehmen Sie Platz." },
    { german: "empfehlen", english: "to recommend", 
      example: "Was empfehlen Sie für trockene Haare?" },
    { german: "beraten", english: "to advise/consult", 
      example: "Können Sie mich beraten?" },
    
    // Describing what you want
    { german: "möchte", english: "would like", 
      example: "Ich möchte einen neuen Haarschnitt." },
    { german: "Ich hätte gern...", english: "I would like to have...", 
      example: "Ich hätte gern blonde Strähnchen." },
    { german: "Bitte...", english: "Please...", 
      example: "Bitte nur die Spitzen schneiden." },
    { german: "nur ein bisschen", english: "just a little", 
      example: "Bitte schneiden Sie nur ein bisschen ab." },
    { german: "viel", english: "a lot", 
      example: "Nicht zu viel abschneiden!" },
    { german: "kürzer", english: "shorter", 
      example: "Ich möchte die Haare kürzer." },
    { german: "länger", english: "longer", 
      example: "Ich möchte längere Haare haben." },
    
    // Measurements
    { german: "der Zentimeter / cm", english: "centimeter", 
      example: "Bitte schneiden Sie 5 cm ab." },
    { german: "die Spitzen", english: "the ends/tips", 
      example: "Bitte nur die Spitzen schneiden." },
    { german: "abschneiden", english: "to cut off", 
      example: "Wie viel soll ich abschneiden?" },
    { german: "nachschneiden", english: "to trim", 
      example: "Können Sie den Pony nachschneiden?" },
    
    // Time & scheduling
    { german: "heute", english: "today", 
      example: "Haben Sie heute noch einen Termin frei?" },
    { german: "morgen", english: "tomorrow", 
      example: "Kann ich morgen kommen?" },
    { german: "nächste Woche", english: "next week", 
      example: "Ich komme nächste Woche." },
    { german: "am Montag", english: "on Monday", 
      example: "Am Montag habe ich Zeit." },
    { german: "um ... Uhr", english: "at ... o'clock", 
      example: "Der Termin ist um 15 Uhr." },
    { german: "die Öffnungszeiten", english: "opening hours", 
      example: "Was sind Ihre Öffnungszeiten?" },
    
    // Cost & payment
    { german: "der Preis", english: "price", 
      example: "Wie ist der Preis für einen Haarschnitt?" },
    { german: "kosten", english: "to cost", 
      example: "Wie viel kostet eine Haarfarbe?" },
    { german: "bezahlen", english: "to pay", 
      example: "Ich möchte bezahlen." },
    { german: "teuer", english: "expensive", 
      example: "Der Salon ist nicht teuer." },
    { german: "günstig", english: "inexpensive/affordable", 
      example: "Die Preise sind sehr günstig." },
    { german: "das Trinkgeld", english: "tip", 
      example: "Möchten Sie Trinkgeld?" },
    
    // Adjectives & opinions
    { german: "schön", english: "beautiful/nice", 
      example: "Die Frisur ist sehr schön!" },
    { german: "gut", english: "good", 
      example: "Das sieht gut aus!" },
    { german: "perfekt", english: "perfect", 
      example: "Die Haare sind perfekt!" },
    { german: "zufrieden", english: "satisfied", 
      example: "Ich bin sehr zufrieden." },
    { german: "nett", english: "nice/kind", 
      example: "Die Friseurin ist sehr nett." },
    { german: "freundlich", english: "friendly", 
      example: "Das Personal ist freundlich." },
    { german: "professionell", english: "professional", 
      example: "Der Service ist professionell." },
    
    // Problems & concerns
    { german: "das Problem", english: "problem", 
      example: "Ich habe ein Problem mit meinen Haaren." },
    { german: "nicht richtig", english: "not right/correct", 
      example: "Die Farbe ist nicht richtig." },
    { german: "zu kurz", english: "too short", 
      example: "Die Haare sind zu kurz!" },
    { german: "zu lang", english: "too long", 
      example: "Der Pony ist zu lang." },
    { german: "gefallen", english: "to like/please", 
      example: "Die Frisur gefällt mir nicht." },
    { german: "anders", english: "different", 
      example: "Ich möchte etwas anderes." },
    
    // Common questions
    { german: "Haben Sie Zeit?", english: "Do you have time?", 
      example: "Haben Sie heute noch Zeit?" },
    { german: "Haben Sie einen Termin frei?", english: "Do you have an appointment available?", 
      example: "Haben Sie morgen einen Termin frei?" },
    { german: "Wie lange dauert...?", english: "How long does... take?", 
      example: "Wie lange dauert eine Haarfarbe?" },
    { german: "Wie viel kostet...?", english: "How much does... cost?", 
      example: "Wie viel kostet ein Haarschnitt?" },
    { german: "Was empfehlen Sie?", english: "What do you recommend?", 
      example: "Was empfehlen Sie für meine Haare?" },
    { german: "Können Sie...?", english: "Can you...?", 
      example: "Können Sie mir die Haare schneiden?" },
    
    // Useful phrases
    { german: "Ich möchte einen Termin machen", english: "I'd like to make appointment", 
      example: "Ich möchte einen Termin für morgen machen." },
    { german: "Ich habe einen Termin um...", english: "I have appointment at...", 
      example: "Ich habe einen Termin um 14 Uhr." },
    { german: "Nur die Spitzen, bitte", english: "Just the tips, please", 
      example: "Nur die Spitzen schneiden, bitte." },
    { german: "Nicht zu viel abschneiden", english: "Don't cut too much", 
      example: "Bitte nicht zu viel abschneiden!" },
    { german: "Wie möchten Sie die Haare?", english: "How would you like hair?", 
      example: "Wie möchten Sie Ihre Haare heute?" },
    { german: "Das sieht super aus!", english: "That looks great!", 
      example: "Danke! Das sieht super aus!" },
    { german: "Ich bin zufrieden", english: "I'm satisfied", 
      example: "Danke, ich bin sehr zufrieden!" }
  ]
};

// ==========================================================================
// Day 24 Export
// ==========================================================================

const day24: ExamDay = {
  day: 24,
  skills: ['Writing'],
  practices: [
    writingPractice1,
    writingPractice2,
    writingPractice3,
    writingPractice4
  ],
  vocabulary,
  focus: "Hairdresser & Beauty Services - Making salon appointments, " +
         "describing hair preferences, booking treatments, and salon communication"
};

export default day24;
