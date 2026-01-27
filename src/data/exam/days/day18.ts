/**
 * Day 18: Writing + Speaking
 * Focus: Festivals and celebrations
 * 
 * Skills: Writing, Speaking
 * Topics: Birthdays, holidays, festivals, parties, celebrations, gifts
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// Writing Practices - Following Goethe A1 Exam Format
// ============================================================================

// Teil 1: Form Completion - Question 1
const writingPractice1: WritingPractice = {
  part: 1,
  title: "Teil 1 - Form Completion: Birthday Party Registration",
  description: "Complete a registration form for a birthday party event",
  instructions: "Ihre Freundin Maria macht am Samstag eine große Geburtstagsparty in einem Restaurant. Sie möchte 15 Personen einladen, davon 3 Kinder. Die Party ist im Restaurant 'Zum goldenen Stern' in der Hauptstraße 45, 10115 Berlin. Die Party beginnt um 18 Uhr. Maria möchte bar bezahlen.\n\nIn dem Formular fehlen fünf Informationen. Helfen Sie Ihrer Freundin und schreiben Sie die fünf fehlenden Informationen in das Formular.",
  prompt: `RESTAURANT "ZUM GOLDENEN STERN"
Party-Anmeldung

Familienname, Vorname:    Schmidt, Maria         (0)
Anzahl der Personen:      _______________         (1)
Davon Kinder:             _______________         (2)
Restaurant-Adresse:       Zum goldenen Stern
Straße, Hausnummer:       _______________         (3)
PLZ, Ort:                 10115 ___________       (4)

Der Preis ist bei der Anmeldung zu bezahlen.
Zahlungsweise:                                    (5)
  ☐ Bar
  ☐ Kreditkarte

Party-Beginn:             18 Uhr
Unterschrift:             Maria Schmidt`,
  sampleAnswer: `(1) 15
(2) 3
(3) Hauptstraße 45
(4) Berlin
(5) Bar (checked/marked)`,
  keyPhrases: [
    "Anzahl der Personen (Number of people)",
    "Davon Kinder (Of which children)",
    "Straße, Hausnummer (Street, house number)",
    "PLZ, Ort (Postal code, city)",
    "Zahlungsweise (Payment method)",
    "Bar (Cash)",
    "Kreditkarte (Credit card)"
  ]
};

// Teil 1: Form Completion - Question 2
const writingPractice2: WritingPractice = {
  part: 1,
  title: "Teil 1 - Form Completion: Wedding Celebration Registration",
  description: "Complete a registration form for a wedding celebration",
  instructions: "Ihr Freund Thomas heiratet am 20. Juni. Er wurde am 5. März 1990 in München geboren. Seine Muttersprache ist Deutsch. Er spricht auch Englisch und Französisch. Er möchte einen Tanzkurs für die Hochzeit machen. Der Kurs ist von 17-19 Uhr.\n\nIn dem Formular fehlen fünf Informationen. Helfen Sie Ihrem Freund und schreiben Sie die fünf fehlenden Informationen in das Formular.",
  prompt: `TANZSCHULE ELEGANZ
Hochzeitstanz-Kurs Anmeldung

Familienname:             Müller                  (0)
Vorname:                  Thomas
Geburtsdatum:             _______________         (1)
Geburtsort:               _______________         (2)
Muttersprache:            _______________         (3)
Andere Sprachen:          _______________         (4)

Hochzeitstermin:          20. Juni

Kurszeit:                                         (5)
  ☐ von 9 - 11 Uhr
  ☐ von 13 - 15 Uhr
  ☐ von 17 - 19 Uhr

Unterschrift:             Thomas Müller`,
  sampleAnswer: `(1) 5. März 1990 / 05.03.1990
(2) München
(3) Deutsch
(4) Englisch und Französisch / Englisch, Französisch
(5) von 17 - 19 Uhr (checked/marked)`,
  keyPhrases: [
    "Geburtsdatum (Date of birth)",
    "Geburtsort (Place of birth)",
    "Muttersprache (Mother tongue)",
    "Andere Sprachen (Other languages)",
    "Kurszeit (Course time)",
    "Hochzeitstermin (Wedding date)"
  ]
};

// Teil 2: Short Message/Email - Question 1
const writingPractice3: WritingPractice = {
  part: 2,
  title: "Teil 2 - Short Message: Invitation to Birthday Party",
  description: "Write a short invitation message to a friend",
  instructions: "Sie haben am Samstag Geburtstag und möchten eine Party machen. Schreiben Sie an Ihren Freund Max:\n\n- Warum schreiben Sie?\n- Wann und wo ist die Party?\n- Was soll Max mitbringen?\n\nSchreiben Sie zu jedem Punkt ein bis zwei Sätze auf den Antwortbogen (circa 30 Wörter). Schreiben Sie auch eine Anrede und einen Gruß.",
  prompt: "Sie haben am Samstag Geburtstag und möchten eine Party machen. Schreiben Sie an Ihren Freund Max.",
  sampleAnswer: `Lieber Max,

ich habe am Samstag Geburtstag und mache eine Party. Die Party ist am Samstag um 19 Uhr bei mir zu Hause. Kannst du bitte eine Flasche Wein mitbringen?

Ich freue mich auf dich!
Viele Grüße
[Dein Name]`,
  keyPhrases: [
    "Ich habe Geburtstag (It's my birthday)",
    "Ich mache eine Party (I'm having a party)",
    "Die Party ist am... um... Uhr (The party is on... at... o'clock)",
    "bei mir zu Hause (at my place)",
    "Kannst du... mitbringen? (Can you bring...?)",
    "Ich freue mich auf dich! (I look forward to seeing you!)",
    "Lieber/Liebe... (Dear...)",
    "Viele Grüße (Best regards)"
  ]
};

// Teil 2: Short Message/Email - Question 2
const writingPractice4: WritingPractice = {
  part: 2,
  title: "Teil 2 - Short Message: Request for Party Information",
  description: "Write a short message requesting information about a New Year's party",
  instructions: "Sie möchten an einer Silvesterparty im Hotel 'Festsaal' teilnehmen. Schreiben Sie an das Hotel:\n\n- Warum schreiben Sie?\n- Fragen Sie: Wie viel kostet die Party?\n- Bitten Sie: Informationen über das Programm (Musik, Essen usw.).\n\nSchreiben Sie zu jedem Punkt ein bis zwei Sätze auf den Antwortbogen (circa 30 Wörter). Schreiben Sie auch eine Anrede und einen Gruß.",
  prompt: "Sie möchten an einer Silvesterparty im Hotel 'Festsaal' teilnehmen. Schreiben Sie an das Hotel.",
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich möchte an Ihrer Silvesterparty teilnehmen. Wie viel kostet die Party pro Person? Können Sie mir bitte Informationen über das Programm schicken? Ich möchte wissen, welche Musik und welches Essen es gibt.

Mit freundlichen Grüßen
[Ihr Name]`,
  keyPhrases: [
    "Ich möchte... teilnehmen (I would like to participate...)",
    "Wie viel kostet...? (How much does... cost?)",
    "pro Person (per person)",
    "Können Sie mir... schicken? (Can you send me...?)",
    "Ich möchte wissen... (I would like to know...)",
    "Sehr geehrte Damen und Herren (Dear Sir or Madam)",
    "Mit freundlichen Grüßen (Sincerely)",
    "Informationen über... (Information about...)"
  ]
};

// ============================================================================
// Speaking Practices
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: "Talk About Your Favorite Holiday",
  description: "Describe your favorite celebration or holiday",
  instructions: "Prepare a short monologue (30-45 seconds) about your favorite holiday or celebration. Include: what holiday, when it is, how you celebrate, with whom, and why you like it.",
  prompts: [
    "Was ist Ihr Lieblingsfest? (What's your favorite holiday?)",
    "Wann feiern Sie dieses Fest? (When do you celebrate this holiday?)",
    "Wie feiern Sie? (How do you celebrate?)",
    "Mit wem feiern Sie? (Who do you celebrate with?)"
  ],
  sampleResponses: [
    "Mein Lieblingsfest ist Weihnachten. Wir feiern Weihnachten am 24., 25. und 26. Dezember. Ich feiere mit meiner Familie. Wir dekorieren einen Weihnachtsbaum. Wir schenken Geschenke. Am 24. Dezember essen wir zusammen. Es gibt Gans oder Fisch. Dann singen wir Weihnachtslieder. Ich mag Weihnachten sehr, weil die ganze Familie zusammen ist.",
    "Ich liebe meinen Geburtstag! Mein Geburtstag ist im Juli. Ich mache immer eine Party mit Freunden. Wir gehen in ein Restaurant oder ich koche zu Hause. Meine Freunde bringen Geschenke. Wir essen, trinken und tanzen. Es ist immer sehr lustig. Ich mag meinen Geburtstag, weil alle meine Freunde kommen."
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: "Ask and Answer About Celebrations",
  description: "Practice asking and responding to questions about holidays and parties",
  instructions: "Practice common questions about celebrations. Be prepared to ask questions and give detailed answers.",
  prompts: [
    "Welche Feste feiern Sie? (Which holidays do you celebrate?)",
    "Wann haben Sie Geburtstag? (When is your birthday?)",
    "Wie feiern Sie Ihren Geburtstag? (How do you celebrate your birthday?)",
    "Was schenken Sie gern? (What do you like to give as gifts?)",
    "Waren Sie schon mal auf einer deutschen Hochzeit? (Have you ever been to a German wedding?)",
    "Was ist das wichtigste Fest in Ihrem Land? (What's the most important holiday in your country?)"
  ],
  sampleResponses: [
    "A: Wann haben Sie Geburtstag?\nB: Ich habe am 15. März Geburtstag.",
    "A: Wie alt werden Sie?\nB: Ich werde 28 Jahre alt.",
    "A: Wie feiern Sie?\nB: Ich mache eine große Party. Ich lade alle meine Freunde ein. Wir tanzen und haben Spaß.",
    "A: Was schenken Sie gern?\nB: Ich schenke gern Bücher. Oder ich schenke Konzertkarten. Ich finde, Erlebnisse sind besser als Dinge.",
    "A: Welches Fest mögen Sie am liebsten?\nB: Ich mag Silvester am liebsten. An Silvester feiern wir das neue Jahr. Um Mitternacht gibt es Feuerwerk. Das ist sehr schön!"
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 3,
  title: "Plan a Celebration Together",
  description: "Practice planning a party or celebration with someone",
  instructions: "Practice planning situations: organizing a party, deciding on gifts, or making celebration arrangements.",
  prompts: [
    "Sie planen eine Geburtstagsparty für einen Freund. Sprechen Sie über die Details. (You're planning a birthday party for a friend. Discuss the details.)",
    "Sie wollen zusammen ein Geschenk kaufen. Was kaufen Sie? (You want to buy a gift together. What do you buy?)",
    "Laden Sie Ihren Freund zu einer Feier ein. (Invite your friend to a celebration.)"
  ],
  sampleResponses: [
    "A: Wir müssen Peters Geburtstag planen. Wann machen wir die Party?\nB: Am Samstag? Peter hat am Freitag Geburtstag.\nA: Gut. Wo feiern wir?\nB: Vielleicht bei mir zu Hause? Ich habe eine große Wohnung.\nA: Super! Ich bringe den Kuchen mit.\nB: Und ich kaufe die Getränke. Was schenken wir ihm?\nA: Peter mag Musik. Vielleicht eine CD oder Konzertkarten?\nB: Gute Idee! Ich kaufe zwei Konzertkarten für sein Lieblingskonzert.",
    "A: Anna hat bald Geburtstag. Was schenken wir ihr?\nB: Hmm, Anna mag Bücher sehr gern.\nA: Ja, aber sie hat schon so viele Bücher. Vielleicht etwas anderes?\nB: Was hältst du von Blumen und Schokolade?\nA: Das ist schön, aber nicht sehr persönlich.\nB: Stimmt. Weißt du was? Anna lernt Gitarre. Vielleicht ein Musikbuch?\nA: Perfekt! Das ist eine tolle Idee!",
    "A: Hallo Maria! Ich habe am Samstag Geburtstag. Ich mache eine Party. Kommst du?\nB: Oh, herzlichen Glückwunsch! Ja, gerne! Wann beginnt die Party?\nA: Um 19 Uhr bei mir zu Hause.\nB: Was soll ich mitbringen?\nA: Bring einfach gute Laune mit! Ach, und vielleicht eine Flasche Wein?\nB: Kein Problem! Ich freue mich!"
  ]
};

// ============================================================================
// Vocabulary
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: "Festivals & Celebrations",
  items: [
    // Celebrations & Holidays
    { german: "das Fest / die Feier", english: "celebration/party", example: "Wir haben ein großes Fest." },
    { german: "die Party", english: "party", example: "Kommst du zu meiner Party?" },
    { german: "der Geburtstag", english: "birthday", example: "Ich habe am 15. Mai Geburtstag." },
    { german: "die Hochzeit", english: "wedding", example: "Die Hochzeit ist im Juni." },
    { german: "Weihnachten", english: "Christmas", example: "Wir feiern Weihnachten im Dezember." },
    { german: "Ostern", english: "Easter", example: "Ostern ist im Frühling." },
    { german: "Silvester / Neujahr", english: "New Year's Eve / New Year", example: "An Silvester gibt es Feuerwerk." },
    { german: "der Feiertag", english: "holiday", example: "Weihnachten ist ein Feiertag." },
    { german: "das Jubiläum", english: "anniversary/jubilee", example: "Wir feiern unser 10-jähriges Jubiläum." },
    
    // Birthday Expressions
    { german: "Herzlichen Glückwunsch!", english: "Congratulations!", example: "Herzlichen Glückwunsch zum Geburtstag!" },
    { german: "Alles Gute!", english: "All the best!", example: "Alles Gute zum Geburtstag!" },
    { german: "Ich gratuliere!", english: "I congratulate!", example: "Ich gratuliere dir zum Geburtstag!" },
    
    // Party Elements
    { german: "das Geschenk", english: "gift/present", example: "Das Geschenk ist schön." },
    { german: "die Einladung", english: "invitation", example: "Danke für die Einladung!" },
    { german: "der Gast", english: "guest", example: "Wir haben viele Gäste." },
    { german: "der Gastgeber", english: "host", example: "Der Gastgeber kocht das Essen." },
    { german: "die Musik", english: "music", example: "Die Musik ist laut." },
    { german: "der Kuchen", english: "cake", example: "Der Geburtstagskuchen ist lecker." },
    { german: "die Kerze", english: "candle", example: "Auf dem Kuchen sind 25 Kerzen." },
    { german: "die Dekoration", english: "decoration", example: "Die Dekoration ist schön." },
    { german: "der Ballon", english: "balloon", example: "Wir haben bunte Ballons." },
    
    // Actions at Celebrations
    { german: "feiern", english: "to celebrate", example: "Wir feiern meinen Geburtstag." },
    { german: "einladen", english: "to invite", example: "Ich lade dich zu meiner Party ein." },
    { german: "schenken", english: "to give (as a gift)", example: "Was schenkst du ihr?" },
    { german: "gratulieren", english: "to congratulate", example: "Ich gratuliere dir!" },
    { german: "tanzen", english: "to dance", example: "Wir tanzen die ganze Nacht." },
    { german: "singen", english: "to sing", example: "Wir singen ein Geburtstagslied." },
    { german: "anstoßen", english: "to toast/clink glasses", example: "Wir stoßen mit Champagner an." },
    { german: "lachen", english: "to laugh", example: "Wir lachen viel auf der Party." },
    { german: "Spaß haben", english: "to have fun", example: "Wir haben viel Spaß!" },
    
    // Gift-Related
    { german: "das Geschenkpapier", english: "wrapping paper", example: "Ich brauche Geschenkpapier." },
    { german: "die Blumen", english: "flowers", example: "Ich schenke ihr Blumen." },
    { german: "die Schokolade", english: "chocolate", example: "Schokolade ist ein gutes Geschenk." },
    { german: "das Geld", english: "money", example: "Manche schenken Geld." },
    { german: "die Karte", english: "card", example: "Ich schreibe eine Geburtstagskarte." },
    
    // Christmas Vocabulary
    { german: "der Weihnachtsbaum", english: "Christmas tree", example: "Wir schmücken den Weihnachtsbaum." },
    { german: "der Weihnachtsmann", english: "Santa Claus", example: "Der Weihnachtsmann bringt Geschenke." },
    { german: "das Weihnachtslied", english: "Christmas carol", example: "Wir singen Weihnachtslieder." },
    { german: "die Gans", english: "goose", example: "An Weihnachten essen wir Gans." },
    
    // New Year's Vocabulary
    { german: "das Feuerwerk", english: "fireworks", example: "Um Mitternacht gibt es Feuerwerk." },
    { german: "das neue Jahr", english: "new year", example: "Frohes neues Jahr!" },
    { german: "der Sekt / der Champagner", english: "sparkling wine/champagne", example: "Wir trinken Sekt." },
    { german: "Prosit! / Prost!", english: "Cheers!", example: "Prost Neujahr!" },
    
    // Party Verbs
    { german: "organisieren", english: "to organize", example: "Ich organisiere die Party." },
    { german: "dekorieren / schmücken", english: "to decorate", example: "Wir dekorieren das Haus." },
    { german: "mitbringen", english: "to bring along", example: "Bring bitte etwas zu trinken mit." },
    { german: "kommen", english: "to come", example: "Kommst du zu meiner Party?" },
    { german: "sich freuen", english: "to be happy/look forward to", example: "Ich freue mich auf die Party!" },
    
    // Time Expressions
    { german: "der Geburtstagskuchen", english: "birthday cake", example: "Der Geburtstagskuchen ist groß." },
    { german: "die Geburtstagsparty", english: "birthday party", example: "Ich mache eine Geburtstagsparty." },
    { german: "Jahre alt werden", english: "to turn (years old)", example: "Ich werde 25 Jahre alt." },
    
    // Adjectives
    { german: "toll", english: "great", example: "Die Party war toll!" },
    { german: "schön", english: "beautiful/nice", example: "Das war ein schöner Tag." },
    { german: "lustig", english: "funny/fun", example: "Die Party war sehr lustig." },
    { german: "fröhlich", english: "happy/cheerful", example: "Alle sind fröhlich." },
    { german: "besonders", english: "special", example: "Das ist ein besonderer Tag." }
  ]
};

// ============================================================================
// Day 18 Export
// ============================================================================

const day18: ExamDay = {
  day: 18,
  skills: ['Writing', 'Speaking'],
  practices: [
    writingPractice1,
    writingPractice2,
    writingPractice3,
    writingPractice4,
    speakingPractice1,
    speakingPractice2,
    speakingPractice3
  ],
  vocabulary,
  focus: "Festivals and celebrations"
};

export default day18;
