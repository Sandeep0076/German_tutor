/**
 * Day 20: Writing + Speaking
 * Focus: Weather and Seasons
 *
 * Skills: Writing, Speaking
 * Topics: Weather conditions, seasons, outdoor activities, vacation planning, weather-related clothing
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// Writing Practices
// ============================================================================

const writingPractice1: WritingPractice = {
  part: 1,
  title: "Teil 1: Weather Report Form",
  description: "Complete a weather observation form for a school project",
  instructions: "You are helping your friend complete a weather observation form for their school project. Read the context and fill in the missing information in the form.",
  prompt: `Dein Freund Max macht ein Schulprojekt über das Wetter. Er beobachtet das Wetter in Hamburg vom 15. bis 21. März. Am Montag, den 15. März, war es sonnig und warm (18 Grad). Es hat nicht geregnet. Max hat die Beobachtung um 14 Uhr gemacht. Der Wind war schwach.

In dem Formular fehlen fünf Informationen.
Helfen Sie Ihrem Freund und schreiben Sie die fünf fehlenden Informationen in das Formular.

┌─────────────────────────────────────────────────┐
│     WETTER-BEOBACHTUNG HAMBURG                  │
│          Schulprojekt                           │
│                                                 │
│ Name:                   Max Schmidt        (0) │
│ Beobachtungsort:        _______________    (1) │
│ Datum:                  _______________    (2) │
│ Uhrzeit:                _______________    (3) │
│ Wetter:                 _______________    (4) │
│ Temperatur:             _______________    (5) │
│ Regen:                  ☐ Ja  ☐ Nein           │
│ Wind:                   schwach                 │
│                                                 │
│ Unterschrift:           Max Schmidt             │
└─────────────────────────────────────────────────┘`,
  sampleAnswer: `(1) Hamburg
(2) 15. März / Montag, 15. März
(3) 14 Uhr / 14:00 Uhr
(4) sonnig und warm
(5) 18 Grad`,
  keyPhrases: [
    "das Wetter (the weather)",
    "die Temperatur (temperature)",
    "sonnig (sunny)",
    "der Grad (degree)",
    "die Beobachtung (observation)"
  ]
};

const writingPractice2: WritingPractice = {
  part: 2,
  title: "Teil 2: Ask About Weather for Trip",
  description: "Write an email asking about weather conditions for your upcoming trip",
  instructions: "Write an email to the tourist information office. Address all 3 points. Write about 30 words including greeting and closing.",
  prompt: `Sie möchten im Juli nach Österreich fahren. Schreiben Sie an die Touristeninformation in Salzburg:

• Warum schreiben Sie?
• Fragen Sie: Wie ist das Wetter im Juli?
• Fragen Sie: Was soll ich mitbringen?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich möchte im Juli nach Salzburg fahren. Wie ist das Wetter im Juli? Ist es warm oder regnet es oft? Was für Kleidung soll ich mitbringen?

Mit freundlichen Grüßen
Anna Müller`,
  keyPhrases: [
    "Sehr geehrte Damen und Herren (Dear Sir/Madam)",
    "Wie ist das Wetter? (How is the weather?)",
    "Was soll ich mitbringen? (What should I bring?)",
    "die Kleidung (clothing)",
    "Mit freundlichen Grüßen (Sincerely)"
  ]
};

const writingPractice3: WritingPractice = {
  part: 2,
  title: "Teil 2: Change Plans Due to Weather",
  description: "Write to your friend about changing plans because of bad weather",
  instructions: "Write an email to your friend. Address all 3 points. Write about 30 words including greeting and closing.",
  prompt: `Das Wetter ist morgen sehr schlecht. Sie können nicht wandern gehen. Schreiben Sie an Ihre Freundin Lisa:

• Warum können Sie nicht wandern?
• Was schlagen Sie stattdessen vor?
• Wann treffen Sie sich?

Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter).
Schreiben Sie auch eine Anrede und einen Gruß.`,
  sampleAnswer: `Liebe Lisa,

morgen regnet es stark. Wir können leider nicht wandern gehen. Möchtest du stattdessen ins Kino gehen? Wir können uns um 15 Uhr vor dem Kino treffen.

Viele Grüße
Thomas`,
  keyPhrases: [
    "es regnet (it's raining)",
    "das Wetter ist schlecht (the weather is bad)",
    "stattdessen (instead)",
    "Möchtest du...? (Would you like to...?)",
    "Viele Grüße (Best regards)"
  ]
};

// ============================================================================
// Speaking Practices
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: "Teil 1: Talk About Your Favorite Season",
  description: "Describe your favorite season and weather preferences",
  instructions: "Prepare a short monologue (30-45 seconds) about your favorite season. Include: which season, why you like it, what the weather is like, and what you do in that season.",
  prompts: [
    "Welche Jahreszeit mögen Sie am liebsten? (Which season do you like best?)",
    "Warum mögen Sie diese Jahreszeit? (Why do you like this season?)",
    "Wie ist das Wetter in dieser Jahreszeit? (How is the weather in this season?)",
    "Was machen Sie in dieser Jahreszeit? (What do you do in this season?)"
  ],
  sampleResponses: [
    "Ich mag den Sommer am liebsten. Im Sommer ist es warm und sonnig. Die Sonne scheint fast jeden Tag. Ich gehe gern schwimmen und im Park spazieren. Am Wochenende fahre ich oft an den See. Dort kann ich schwimmen und in der Sonne liegen. Abends ist es lange hell. Das finde ich toll! Ich mag auch Eis essen im Sommer.",
    "Meine Lieblingsjahreszeit ist der Herbst. Im Herbst ist das Wetter mild und kühl. Die Blätter sind bunt - rot, gelb und orange. Das ist sehr schön! Ich wandere gern im Herbst. Die Luft ist frisch. Manchmal regnet es, aber das macht nichts. Ich trage dann eine Jacke und nehme einen Regenschirm mit."
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: "Teil 2: Discuss Weather and Activities",
  description: "Have a conversation about weather and outdoor activities",
  instructions: "Practice asking and answering questions about weather and what you do in different weather conditions.",
  prompts: [
    "Was machen Sie bei schönem Wetter? (What do you do in nice weather?)",
    "Was machen Sie, wenn es regnet? (What do you do when it rains?)",
    "Mögen Sie Schnee? Warum (nicht)? (Do you like snow? Why (not)?)",
    "Wie ist das Wetter heute? (How is the weather today?)"
  ],
  sampleResponses: [
    "A: Was machen Sie bei schönem Wetter?\nB: Bei schönem Wetter gehe ich gern draußen spazieren. Ich gehe in den Park oder fahre Fahrrad. Und Sie?\nA: Ich gehe auch gern raus. Ich treffe Freunde und wir grillen im Garten.\nB: Das klingt toll! Machen Sie das oft?\nA: Ja, im Sommer fast jedes Wochenende.",
    "A: Mögen Sie Schnee?\nB: Ja, ich mag Schnee sehr! Im Winter fahre ich gern Ski in den Bergen.\nA: Wirklich? Ich mag Schnee nicht so gern. Es ist zu kalt!\nB: Aber Sie können warme Kleidung tragen - einen Mantel, eine Mütze und Handschuhe.\nA: Ja, das stimmt. Aber ich bleibe lieber drinnen, wenn es schneit."
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 3,
  title: "Teil 3: Plan Activities Based on Weather",
  description: "Make plans and suggestions considering the weather forecast",
  instructions: "Practice making plans with someone and discussing what to do based on the weather conditions.",
  prompts: [
    "Planen Sie einen Ausflug. Sprechen Sie über das Wetter. (Plan a trip. Talk about the weather.)",
    "Das Wetter ist schlecht. Was schlagen Sie vor? (The weather is bad. What do you suggest?)",
    "Sie möchten am Wochenende etwas machen. Fragen Sie nach dem Wetter. (You want to do something on the weekend. Ask about the weather.)"
  ],
  sampleResponses: [
    "A: Möchtest du am Samstag wandern gehen?\nB: Gute Idee! Wie ist das Wetter am Samstag?\nA: Die Wettervorhersage sagt: sonnig und warm, 22 Grad.\nB: Perfect! Was soll ich mitbringen?\nA: Bring Wasser und eine Sonnenbrille mit. Und zieh bequeme Schuhe an!\nB: Okay! Um wie viel Uhr treffen wir uns?\nA: Um 9 Uhr am Bahnhof.",
    "A: Oh nein! Morgen regnet es stark.\nB: Schade! Wir können nicht im Park grillen.\nA: Was machen wir stattdessen?\nB: Wir können ins Museum gehen. Oder ins Kino?\nA: Gute Idee! Ins Kino! Welchen Film möchtest du sehen?\nB: Vielleicht den neuen Film mit Tom Hanks?\nA: Super! Ich kaufe die Tickets online."
  ]
};

// ============================================================================
// Vocabulary
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: "Weather & Seasons",
  items: [
    // Weather conditions
    { german: "das Wetter", english: "weather", example: "Wie ist das Wetter heute?" },
    { german: "die Sonne", english: "sun", example: "Die Sonne scheint." },
    { german: "sonnig", english: "sunny", example: "Heute ist es sonnig." },
    { german: "der Regen", english: "rain", example: "Der Regen kommt." },
    { german: "regnen", english: "to rain", example: "Es regnet stark." },
    { german: "regnerisch", english: "rainy", example: "Das Wetter ist regnerisch." },
    { german: "der Schnee", english: "snow", example: "Im Winter gibt es viel Schnee." },
    { german: "schneien", english: "to snow", example: "Es schneit heute." },
    { german: "der Wind", english: "wind", example: "Der Wind ist stark." },
    { german: "windig", english: "windy", example: "Heute ist es sehr windig." },
    { german: "die Wolke", english: "cloud", example: "Am Himmel sind viele Wolken." },
    { german: "wolkig / bewölkt", english: "cloudy", example: "Es ist bewölkt." },
    { german: "der Nebel", english: "fog", example: "Am Morgen ist oft Nebel." },
    { german: "neblig", english: "foggy", example: "Es ist neblig." },
    { german: "das Gewitter", english: "thunderstorm", example: "Heute Abend kommt ein Gewitter." },
    { german: "der Blitz", english: "lightning", example: "Ich sehe einen Blitz!" },
    { german: "der Donner", english: "thunder", example: "Der Donner ist laut." },
    { german: "das Eis", english: "ice", example: "Auf der Straße ist Eis." },
    { german: "der Hagel", english: "hail", example: "Es hagelt!" },
    
    // Temperature
    { german: "die Temperatur", english: "temperature", example: "Die Temperatur ist 20 Grad." },
    { german: "der Grad", english: "degree", example: "Es sind 15 Grad." },
    { german: "warm", english: "warm", example: "Im Sommer ist es warm." },
    { german: "heiß", english: "hot", example: "Heute ist es sehr heiß." },
    { german: "kalt", english: "cold", example: "Im Winter ist es kalt." },
    { german: "kühl", english: "cool", example: "Am Abend ist es kühl." },
    { german: "mild", english: "mild", example: "Das Wetter ist mild." },
    
    // Seasons
    { german: "die Jahreszeit", english: "season", example: "Welche Jahreszeit magst du?" },
    { german: "der Frühling", english: "spring", example: "Im Frühling blühen die Blumen." },
    { german: "der Sommer", english: "summer", example: "Der Sommer ist warm." },
    { german: "der Herbst", english: "autumn/fall", example: "Im Herbst fallen die Blätter." },
    { german: "der Winter", english: "winter", example: "Im Winter schneit es." },
    
    // Weather-related activities
    { german: "schwimmen", english: "to swim", example: "Im Sommer schwimme ich gern." },
    { german: "wandern", english: "to hike", example: "Im Herbst wandern wir." },
    { german: "Ski fahren", english: "to ski", example: "Im Winter fahre ich Ski." },
    { german: "spazieren gehen", english: "to go for a walk", example: "Bei schönem Wetter gehe ich spazieren." },
    { german: "draußen", english: "outside", example: "Wir spielen draußen." },
    { german: "drinnen", english: "inside", example: "Bei Regen bleiben wir drinnen." },
    
    // Clothing for weather
    { german: "die Jacke", english: "jacket", example: "Ich brauche eine Jacke." },
    { german: "der Mantel", english: "coat", example: "Im Winter trage ich einen Mantel." },
    { german: "der Regenschirm", english: "umbrella", example: "Nimm einen Regenschirm mit!" },
    { german: "die Sonnenbrille", english: "sunglasses", example: "Ich trage eine Sonnenbrille." },
    { german: "die Mütze", english: "cap/hat", example: "Im Winter brauche ich eine Mütze." },
    { german: "der Schal", english: "scarf", example: "Der Schal ist warm." },
    { german: "die Handschuhe", english: "gloves", example: "Meine Handschuhe sind warm." },
    { german: "die Stiefel", english: "boots", example: "Bei Schnee trage ich Stiefel." },
    { german: "die Badehose", english: "swimming trunks", example: "Im Sommer brauche ich eine Badehose." },
    { german: "der Badeanzug", english: "swimsuit", example: "Ich kaufe einen neuen Badeanzug." },
    
    // Weather descriptions
    { german: "schön", english: "nice/beautiful", example: "Das Wetter ist schön." },
    { german: "schlecht", english: "bad", example: "Das Wetter ist schlecht." },
    { german: "gut", english: "good", example: "Das Wetter ist gut." },
    { german: "trocken", english: "dry", example: "Es ist trocken." },
    { german: "nass", english: "wet", example: "Die Straße ist nass." },
    { german: "feucht", english: "humid/damp", example: "Die Luft ist feucht." },
    { german: "hell", english: "bright", example: "Es ist hell." },
    { german: "dunkel", english: "dark", example: "Es wird dunkel." },
    
    // Time expressions with weather
    { german: "heute", english: "today", example: "Heute regnet es." },
    { german: "morgen", english: "tomorrow", example: "Morgen scheint die Sonne." },
    { german: "gestern", english: "yesterday", example: "Gestern war es kalt." },
    { german: "am Morgen", english: "in the morning", example: "Am Morgen ist es kühl." },
    { german: "am Nachmittag", english: "in the afternoon", example: "Am Nachmittag wird es warm." },
    { german: "am Abend", english: "in the evening", example: "Am Abend kommt Regen." },
    
    // Useful phrases
    { german: "Wie ist das Wetter?", english: "How is the weather?", example: "Wie ist das Wetter heute?" },
    { german: "Es ist schönes Wetter.", english: "It's nice weather.", example: "Heute ist schönes Wetter." },
    { german: "Es ist schlechtes Wetter.", english: "It's bad weather.", example: "Morgen ist schlechtes Wetter." },
    { german: "Wie viel Grad sind es?", english: "How many degrees is it?", example: "Wie viel Grad sind es heute?" },
    { german: "scheinen", english: "to shine", example: "Die Sonne scheint." },
    { german: "werden", english: "to become/get", example: "Es wird kalt." },
    { german: "mitbringen", english: "to bring along", example: "Bring einen Regenschirm mit!" },
    { german: "anziehen", english: "to put on/wear", example: "Zieh eine Jacke an!" },
    
    // Additional weather vocabulary
    { german: "der Himmel", english: "sky", example: "Der Himmel ist blau." },
    { german: "die Luft", english: "air", example: "Die Luft ist frisch." },
    { german: "der Sturm", english: "storm", example: "Es kommt ein Sturm." },
    { german: "stürmisch", english: "stormy", example: "Das Wetter ist stürmisch." },
    { german: "die Wettervorhersage", english: "weather forecast", example: "Die Wettervorhersage sagt Regen." },
    { german: "das Klima", english: "climate", example: "Das Klima ist mild." }
  ]
};

// ============================================================================
// Day 20 Export
// ============================================================================

const day20: ExamDay = {
  day: 20,
  skills: ['Writing', 'Speaking'],
  practices: [
    writingPractice1,
    writingPractice2,
    writingPractice3,
    speakingPractice1,
    speakingPractice2,
    speakingPractice3
  ],
  vocabulary,
  focus: "Weather and seasons - Writing about weather conditions and vacation planning, speaking about seasonal activities and weather preferences"
};

export default day20;
