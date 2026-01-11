/**
 * Day 11: Writing + Speaking - Hobbies & Leisure Activities
 * Focus: Sports clubs, hobby courses, leisure activities, weekend plans
 * 
 * Skills: Writing (Teil 1 & 2), Speaking (all 3 parts)
 * Topics: Sports, hobbies, free time activities, club memberships
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// WRITING PRACTICE - Hobbies and Leisure Activities
// ============================================================================

const writingPractice0: WritingPractice = {
  part: 1,
  title: 'Teil 1: Sports Club Registration Form',
  description: 'Fill in a sports club registration form',
  instructions: 'Complete the registration form for a sports club. Fill in all the required fields. Time: ~10 minutes.',
  prompt: `**SPORTVEREIN "FIT & AKTIV" - ANMELDEFORMULAR**

Bitte füllen Sie das Formular aus:

Vorname: _______________
Nachname: _______________
Geburtsdatum: _______________
Adresse: _______________
Postleitzahl, Ort: _______________
Telefonnummer: _______________
E-Mail: _______________

Welche Sportart möchten Sie machen?
□ Fußball
□ Tennis
□ Schwimmen
□ Fitness/Gym
□ Yoga

Wann haben Sie Zeit? (Bitte ankreuzen)
□ Montag-Freitag (vormittags)
□ Montag-Freitag (abends)
□ Wochenende

Mitgliedschaft:
□ Monatskarte (45 €/Monat)
□ Jahreskarte (450 €/Jahr)

Unterschrift: _______________`,
  sampleAnswer: `Vorname: Thomas
Nachname: Müller
Geburtsdatum: 15.03.1990
Adresse: Hauptstraße 23
Postleitzahl, Ort: 10115 Berlin
Telefonnummer: 030-98765432
E-Mail: thomas.mueller@email.de

Welche Sportart: ☑ Fitness/Gym

Wann haben Sie Zeit: ☑ Montag-Freitag (abends)

Mitgliedschaft: ☑ Monatskarte (45 €/Monat)

Unterschrift: Thomas Müller`,
  keyPhrases: [
    'Sportart (type of sport)',
    'Mitgliedschaft (membership)',
    'Monatskarte (monthly pass)',
    'Jahreskarte (annual pass)',
    'ankreuzen (to check/tick)',
    'Unterschrift (signature)'
  ]
};

const writingPractice1: WritingPractice = {
  part: 2,
  title: 'Teil 2: Inquiry about Hobby Course',
  description: 'Write an email asking about a hobby course',
  instructions: 'You want to join a photography course. Write to the community center. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Sie möchten einen Fotokurs besuchen. Schreiben Sie an das Gemeindezentrum:
- Wann beginnt der Kurs?
- Wie viel kostet der Kurs?
- Was müssen Sie mitbringen?`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich interessiere mich für den Fotokurs. Wann beginnt der nächste Kurs?
Wie viel kostet der Kurs und was muss ich mitbringen?

Vielen Dank!
Mit freundlichen Grüßen
Anna Schmidt`,
  keyPhrases: [
    'Ich interessiere mich für... (I\'m interested in...)',
    'Wann beginnt...? (When does... start?)',
    'Wie viel kostet...? (How much does... cost?)',
    'Was muss ich mitbringen? (What do I need to bring?)',
    'Mit freundlichen Grüßen (Sincerely)'
  ]
};

const writingPractice2: WritingPractice = {
  part: 2,
  title: 'Teil 2: Weekend Activity Suggestion',
  description: 'Write a message suggesting a weekend activity',
  instructions: 'Write to your friend about doing something together on the weekend. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Du möchtest am Wochenende etwas mit deinem Freund machen. Schreibe ihm:
- Was möchtest du machen?
- Wann und wo treffen wir uns?
- Was soll dein Freund mitbringen?`,
  sampleAnswer: `Hallo Max,

möchtest du am Samstag wandern gehen? Wir können in den Bergen wandern.
Wir treffen uns um 9 Uhr am Bahnhof. Bring bitte Wasser und Snacks mit!

Bis Samstag!
Lisa`,
  keyPhrases: [
    'möchtest du...? (would you like to...?)',
    'Wir treffen uns... (We\'ll meet...)',
    'Bring bitte... mit (Please bring...)',
    'am Wochenende (on the weekend)',
    'Bis dann! (See you then!)'
  ]
};

const writingPractice3: WritingPractice = {
  part: 2,
  title: 'Teil 2: Write about Your Hobbies',
  description: 'Describe your hobbies and free time activities',
  instructions: 'Write about your hobbies. Include what you like to do, how often, and why. Write about 30-40 words. Time: ~15 minutes.',
  prompt: `Schreibe über deine Hobbys. Schreibe zu jedem Punkt ein bis zwei Sätze:
- Was sind deine Hobbys?
- Wie oft machst du das?
- Warum magst du diese Hobbys?`,
  sampleAnswer: `Meine Hobbys sind Lesen und Schwimmen. Ich lese jeden Abend vor dem Schlafen.
Ich gehe zweimal pro Woche schwimmen. Ich mag Schwimmen, weil es gesund ist und Spaß macht.
Am Wochenende treffe ich auch gerne Freunde.`,
  keyPhrases: [
    'Meine Hobbys sind... (My hobbies are...)',
    'Ich... jeden Tag/jede Woche (I... every day/week)',
    'Ich mag..., weil... (I like..., because...)',
    'Das macht Spaß (That\'s fun)',
    'In meiner Freizeit... (In my free time...)'
  ]
};

// ============================================================================
// SPEAKING PRACTICE - Hobbies and Leisure
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: 'Teil 1: Talk about Your Hobbies',
  description: 'Introduce your hobbies and free time activities',
  instructions: 'Answer questions about your hobbies and what you do in your free time. Time: ~3 minutes.',
  prompts: [
    'Was sind Ihre Hobbys?',
    'Was machen Sie in Ihrer Freizeit?',
    'Wie oft machen Sie Sport?',
    'Welche Sportart mögen Sie?',
    'Was machen Sie am Wochenende?',
    'Haben Sie ein Hobby?'
  ],
  sampleResponses: [
    'Meine Hobbys sind Lesen, Schwimmen und Fotografieren.',
    'In meiner Freizeit gehe ich gern spazieren oder treffe Freunde.',
    'Ich mache dreimal pro Woche Sport. Ich gehe ins Fitnessstudio.',
    'Ich mag Schwimmen und Tennis. Schwimmen ist mein Lieblingssport.',
    'Am Wochenende gehe ich wandern oder ins Kino. Manchmal besuche ich meine Familie.',
    'Ja, ich fotografiere gern. Ich mache Fotos von der Natur und von Menschen.'
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Ask and Answer about Sports',
  description: 'Discuss sports and physical activities',
  instructions: 'You receive a theme card about "Sport". Ask your partner 3 questions, then answer 3 questions. Time: ~6 minutes.',
  prompts: [
    'Theme: Sport - Ask about: favorite sports, how often, where',
    'Sample questions you might ask:',
    '- Welche Sportart magst du?',
    '- Wie oft machst du Sport?',
    '- Wo machst du Sport?',
    'Sample questions you might be asked:',
    '- Treibst du gern Sport?',
    '- Was ist dein Lieblingssport?',
    '- Gehst du ins Fitnessstudio?'
  ],
  sampleResponses: [
    'Welche Sportart magst du? - Ich mag Fußball und Schwimmen.',
    'Wie oft machst du Sport? - Ich mache viermal pro Woche Sport.',
    'Wo machst du Sport? - Ich gehe ins Fitnessstudio und manchmal jogge ich im Park.',
    'Treibst du gern Sport? - Ja, sehr gern! Sport ist gesund und macht Spaß.',
    'Was ist dein Lieblingssport? - Mein Lieblingssport ist Schwimmen. Ich schwimme seit 10 Jahren.',
    'Gehst du ins Fitnessstudio? - Ja, ich gehe dreimal pro Woche ins Fitnessstudio.'
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Talk about Weekend Activities',
  description: 'Discuss what you do on weekends',
  instructions: 'Answer questions about your weekend plans and activities. Time: ~3 minutes.',
  prompts: [
    'Was machen Sie am Wochenende?',
    'Wohin gehen Sie gern?',
    'Mit wem machen Sie das?',
    'Wie oft machen Sie das?'
  ],
  sampleResponses: [
    'Am Wochenende gehe ich wandern oder ins Kino. Manchmal bleibe ich zu Hause und lese.',
    'Ich gehe gern in den Park oder ins Café. Im Sommer gehe ich auch gern schwimmen.',
    'Ich mache das oft mit meinen Freunden. Manchmal gehe ich auch allein spazieren.',
    'Ich gehe fast jedes Wochenende wandern. Das mache ich sehr gern.'
  ]
};

const speakingPractice4: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Make Suggestions for Activities',
  description: 'Practice suggesting activities to friends',
  instructions: 'Suggest activities to your partner and respond to their suggestions. Time: ~6 minutes.',
  prompts: [
    'Suggest going to the cinema',
    'Suggest playing tennis',
    'Suggest going hiking',
    'Respond to suggestions'
  ],
  sampleResponses: [
    'Möchtest du am Samstag ins Kino gehen? Es gibt einen neuen Film. - Ja, gerne! Um wie viel Uhr?',
    'Hast du Lust, Tennis zu spielen? Das Wetter ist schön. - Ja, super Idee! Wann hast du Zeit?',
    'Wollen wir am Wochenende wandern gehen? - Ja, das klingt gut! Wo möchtest du wandern?',
    'Möchtest du schwimmen gehen? - Leider habe ich keine Zeit. Können wir nächste Woche gehen?'
  ]
};

const speakingPractice5: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Ask for Information about Activities',
  description: 'Practice asking about courses, clubs, and activities',
  instructions: 'Ask questions about joining a sports club or hobby course. Time: ~3 minutes.',
  prompts: [
    'Ask about course times',
    'Ask about costs',
    'Ask what to bring',
    'Ask about membership'
  ],
  sampleResponses: [
    'Wann findet der Yogakurs statt? - Der Kurs ist jeden Dienstag um 18 Uhr.',
    'Wie viel kostet die Mitgliedschaft? - Die Monatskarte kostet 45 Euro.',
    'Was muss ich zum Training mitbringen? - Bringen Sie bitte Sportkleidung und Sportschuhe mit.',
    'Kann ich eine Probestunde machen? - Ja, die erste Stunde ist kostenlos!'
  ]
};

// ============================================================================
// VOCABULARY THEME - Hobbies & Leisure
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Hobbies & Leisure Activities (Hobbys & Freizeitaktivitäten)',
  items: [
    // Sports
    {
      german: 'Sport treiben',
      english: 'to do sports',
      example: 'Ich treibe gern Sport.'
    },
    {
      german: 'Fußball spielen',
      english: 'to play soccer',
      example: 'Ich spiele jeden Samstag Fußball.'
    },
    {
      german: 'Tennis spielen',
      english: 'to play tennis',
      example: 'Möchtest du Tennis spielen?'
    },
    {
      german: 'schwimmen',
      english: 'to swim',
      example: 'Ich gehe zweimal pro Woche schwimmen.'
    },
    {
      german: 'joggen / laufen',
      english: 'to jog / to run',
      example: 'Ich jogge jeden Morgen im Park.'
    },
    {
      german: 'wandern',
      english: 'to hike',
      example: 'Am Wochenende gehe ich wandern.'
    },
    {
      german: 'Rad fahren',
      english: 'to cycle',
      example: 'Ich fahre gern Rad.'
    },
    {
      german: 'Yoga machen',
      english: 'to do yoga',
      example: 'Ich mache jeden Mittwoch Yoga.'
    },
    {
      german: 'ins Fitnessstudio gehen',
      english: 'to go to the gym',
      example: 'Ich gehe dreimal pro Woche ins Fitnessstudio.'
    },
    // Creative Hobbies
    {
      german: 'lesen',
      english: 'to read',
      example: 'Ich lese gern Bücher.'
    },
    {
      german: 'fotografieren',
      english: 'to photograph',
      example: 'Ich fotografiere gern die Natur.'
    },
    {
      german: 'malen',
      english: 'to paint',
      example: 'Meine Schwester malt sehr schön.'
    },
    {
      german: 'zeichnen',
      english: 'to draw',
      example: 'Ich zeichne gern.'
    },
    {
      german: 'Musik hören',
      english: 'to listen to music',
      example: 'Ich höre oft Musik.'
    },
    {
      german: 'ein Instrument spielen',
      english: 'to play an instrument',
      example: 'Ich spiele Gitarre.'
    },
    {
      german: 'singen',
      english: 'to sing',
      example: 'Ich singe im Chor.'
    },
    {
      german: 'tanzen',
      english: 'to dance',
      example: 'Ich tanze gern.'
    },
    // Social Activities
    {
      german: 'Freunde treffen',
      english: 'to meet friends',
      example: 'Am Wochenende treffe ich Freunde.'
    },
    {
      german: 'ins Kino gehen',
      english: 'to go to the cinema',
      example: 'Möchtest du ins Kino gehen?'
    },
    {
      german: 'ins Theater gehen',
      english: 'to go to the theater',
      example: 'Wir gehen ins Theater.'
    },
    {
      german: 'ins Konzert gehen',
      english: 'to go to a concert',
      example: 'Ich gehe gern ins Konzert.'
    },
    {
      german: 'ins Museum gehen',
      english: 'to go to the museum',
      example: 'Am Sonntag gehe ich ins Museum.'
    },
    {
      german: 'spazieren gehen',
      english: 'to go for a walk',
      example: 'Ich gehe im Park spazieren.'
    },
    {
      german: 'reisen',
      english: 'to travel',
      example: 'Ich reise gern.'
    },
    // Home Activities
    {
      german: 'fernsehen',
      english: 'to watch TV',
      example: 'Abends sehe ich fern.'
    },
    {
      german: 'Filme schauen',
      english: 'to watch movies',
      example: 'Ich schaue gern Filme.'
    },
    {
      german: 'kochen',
      english: 'to cook',
      example: 'Ich koche gern am Wochenende.'
    },
    {
      german: 'backen',
      english: 'to bake',
      example: 'Ich backe gern Kuchen.'
    },
    {
      german: 'im Internet surfen',
      english: 'to surf the internet',
      example: 'Ich surfe oft im Internet.'
    },
    {
      german: 'Computerspiele spielen',
      english: 'to play computer games',
      example: 'Mein Bruder spielt gern Computerspiele.'
    },
    // Places
    {
      german: 'der Sportverein',
      english: 'sports club',
      example: 'Ich bin Mitglied in einem Sportverein.'
    },
    {
      german: 'das Fitnessstudio',
      english: 'gym',
      example: 'Das Fitnessstudio ist modern.'
    },
    {
      german: 'das Schwimmbad',
      english: 'swimming pool',
      example: 'Im Sommer gehe ich ins Schwimmbad.'
    },
    {
      german: 'der Park',
      english: 'park',
      example: 'Ich jogge im Park.'
    },
    {
      german: 'das Kino',
      english: 'cinema',
      example: 'Das Kino ist in der Stadtmitte.'
    },
    {
      german: 'das Theater',
      english: 'theater',
      example: 'Das Theater ist sehr schön.'
    },
    {
      german: 'das Museum',
      english: 'museum',
      example: 'Das Museum ist interessant.'
    },
    {
      german: 'das Café',
      english: 'café',
      example: 'Wir treffen uns im Café.'
    },
    // Time Expressions
    {
      german: 'in der Freizeit',
      english: 'in free time',
      example: 'In der Freizeit lese ich gern.'
    },
    {
      german: 'am Wochenende',
      english: 'on the weekend',
      example: 'Am Wochenende gehe ich wandern.'
    },
    {
      german: 'jeden Tag',
      english: 'every day',
      example: 'Ich jogge jeden Tag.'
    },
    {
      german: 'einmal pro Woche',
      english: 'once a week',
      example: 'Ich spiele einmal pro Woche Tennis.'
    },
    {
      german: 'zweimal pro Woche',
      english: 'twice a week',
      example: 'Ich gehe zweimal pro Woche schwimmen.'
    },
    {
      german: 'oft',
      english: 'often',
      example: 'Ich gehe oft ins Kino.'
    },
    {
      german: 'manchmal',
      english: 'sometimes',
      example: 'Manchmal treffe ich Freunde.'
    },
    {
      german: 'selten',
      english: 'rarely',
      example: 'Ich sehe selten fern.'
    },
    // Useful Phrases
    {
      german: 'Hast du Lust...?',
      english: 'Do you feel like...?',
      example: 'Hast du Lust, Tennis zu spielen?'
    },
    {
      german: 'Möchtest du...?',
      english: 'Would you like to...?',
      example: 'Möchtest du ins Kino gehen?'
    },
    {
      german: 'Das macht Spaß!',
      english: 'That\'s fun!',
      example: 'Schwimmen macht Spaß!'
    },
    {
      german: 'Ich habe keine Zeit.',
      english: 'I don\'t have time.',
      example: 'Leider habe ich keine Zeit.'
    },
    {
      german: 'Gute Idee!',
      english: 'Good idea!',
      example: 'Wandern? Gute Idee!'
    },
    // Membership
    {
      german: 'die Mitgliedschaft',
      english: 'membership',
      example: 'Die Mitgliedschaft kostet 50 Euro.'
    },
    {
      german: 'die Monatskarte',
      english: 'monthly pass',
      example: 'Ich habe eine Monatskarte.'
    },
    {
      german: 'die Jahreskarte',
      english: 'annual pass',
      example: 'Die Jahreskarte ist günstiger.'
    },
    {
      german: 'der Kurs',
      english: 'course',
      example: 'Ich besuche einen Yogakurs.'
    },
    {
      german: 'die Probestunde',
      english: 'trial lesson',
      example: 'Die Probestunde ist kostenlos.'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day11: ExamDay = {
  day: 11,
  skills: ['Writing', 'Speaking'],
  practices: [
    writingPractice0,
    writingPractice1,
    writingPractice2,
    writingPractice3,
    speakingPractice1,
    speakingPractice2,
    speakingPractice3,
    speakingPractice4,
    speakingPractice5
  ],
  vocabulary,
  focus: 'Hobbies and leisure activities'
};

export default day11;