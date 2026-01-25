/**
 * Day 16: Writing + Speaking
 * Focus: Pets and animals
 * 
 * Skills: Writing, Speaking
 * Topics: Pets, pet care, animals, veterinarian, zoo
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
  title: "Write About Your Pet",
  description: "Write a message describing your pet or a pet you would like to have",
  instructions: "Write to a friend about your pet. Include: what kind of animal, name, age, appearance, and what it likes to do. Write about 30-40 words.",
  prompt: "Your friend asked you about your pet. Write an email describing your pet.",
  sampleAnswer: "Liebe Maria,\n\nich habe einen Hund. Er heißt Max und ist 3 Jahre alt. Er ist groß und braun. Max spielt gern im Park und schwimmt gern. Er ist sehr freundlich und mag Kinder. Ich liebe meinen Hund!\n\nLiebe Grüße\nTom",
  keyPhrases: [
    "Ich habe einen/eine... (I have a...)",
    "Er/Sie heißt... (His/Her name is...)",
    "Er/Sie ist... Jahre alt (He/She is... years old)",
    "Er/Sie ist... (groß/klein/freundlich) (He/She is... big/small/friendly)",
    "Er/Sie mag... / Er/Sie spielt gern... (He/She likes... / He/She likes to play...)"
  ]
};

const writingPractice2: WritingPractice = {
  part: 1,
  title: "Ask About Pet Care",
  description: "Write to ask for help or information about taking care of a pet",
  instructions: "Write an email asking for pet care advice. Must include all 3 points: 1) What pet do you have? 2) What problem/question do you have? 3) When can you meet/talk? Write about 30-40 words.",
  prompt: "You're going on vacation and need someone to take care of your cat. Write to your neighbor asking for help.",
  sampleAnswer: "Lieber Herr Schmidt,\n\nich habe eine Katze. Sie heißt Luna. Nächste Woche fahre ich in Urlaub. Können Sie meine Katze füttern? Sie braucht zweimal pro Tag Futter. Ich gebe Ihnen den Schlüssel. Vielen Dank!\n\nViele Grüße\nAnna",
  keyPhrases: [
    "Können Sie... (Can you...)",
    "Ich fahre in Urlaub (I'm going on vacation)",
    "füttern (to feed)",
    "Gassi gehen (to walk the dog)",
    "Brauchen Sie Hilfe? (Do you need help?)"
  ]
};

const writingPractice3: WritingPractice = {
  part: 1,
  title: "Respond to Pet Adoption",
  description: "Write about adopting or finding a pet",
  instructions: "Write a message about adopting a pet or responding to a lost pet announcement. Write about 30-35 words.",
  prompt: "You saw an advertisement for a dog that needs a new home. Write to ask about the dog.",
  sampleAnswer: "Sehr geehrte Damen und Herren,\n\nich habe Ihre Anzeige gelesen. Ich interessiere mich für den Hund. Wie alt ist er? Ist er freundlich zu Kindern? Wann kann ich ihn besuchen?\n\nMit freundlichen Grüßen\nLisa Müller",
  keyPhrases: [
    "Ich interessiere mich für... (I'm interested in...)",
    "Wie alt ist...? (How old is...?)",
    "Ist er/sie...? (Is he/she...?)",
    "Wann kann ich...? (When can I...?)"
  ]
};

// ============================================================================
// Speaking Practices
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: "Talk About Your Pet",
  description: "Describe your pet or an animal you like",
  instructions: "Prepare a short monologue (30-45 seconds) about your pet or favorite animal. Include: what animal, name (if pet), appearance, habits, and why you like it.",
  prompts: [
    "Haben Sie ein Haustier? (Do you have a pet?)",
    "Was für ein Tier ist das? (What kind of animal is it?)",
    "Wie sieht Ihr Haustier aus? (What does your pet look like?)",
    "Was macht Ihr Haustier gern? (What does your pet like to do?)"
  ],
  sampleResponses: [
    "Ja, ich habe eine Katze. Sie heißt Mimi. Sie ist klein und schwarz-weiß. Mimi ist 5 Jahre alt. Sie schläft sehr gern und spielt mit einem Ball. Sie ist sehr süß und kuschelt gern. Ich liebe meine Katze sehr. Sie ist wie Familie für mich.",
    "Ich habe einen Hund. Er heißt Bruno. Er ist ein großer Hund, schwarz und braun. Bruno ist 4 Jahre alt. Er läuft sehr gern im Park. Er spielt gern mit anderen Hunden. Bruno ist sehr freundlich und intelligent. Jeden Morgen gehen wir zusammen spazieren."
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: "Ask and Answer Questions About Pets",
  description: "Practice asking and responding to questions about animals and pets",
  instructions: "Practice common questions about pets. Be prepared to ask questions and give detailed answers.",
  prompts: [
    "Haben Sie ein Haustier? (Do you have a pet?)",
    "Was für ein Tier mögen Sie? (What kind of animal do you like?)",
    "Wo wohnt Ihr Haustier? (Where does your pet live?)",
    "Was frisst Ihr Haustier? (What does your pet eat?)",
    "Wie oft füttern Sie Ihr Haustier? (How often do you feed your pet?)",
    "Waren Sie schon mal im Zoo? (Have you ever been to the zoo?)"
  ],
  sampleResponses: [
    "A: Haben Sie ein Haustier?\nB: Ja, ich habe zwei Katzen.",
    "A: Wie heißen sie?\nB: Sie heißen Tom und Jerry.",
    "A: Was machen sie gern?\nB: Sie spielen gern und schlafen viel. Katzen schlafen sehr viel!",
    "A: Mögen Sie Hunde?\nB: Ja, sehr! Hunde sind sehr freundlich. Aber ich habe keine Zeit für einen Hund. Hunde brauchen viel Zeit.",
    "A: Welches Tier ist Ihr Lieblingstier?\nB: Ich mag Pferde sehr gern. Sie sind schön und intelligent."
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 3,
  title: "Pet Care Situations",
  description: "Practice making requests or asking for help related to pets",
  instructions: "Practice pet-related situations: asking a friend to pet-sit, talking to a veterinarian, or asking about pet rules.",
  prompts: [
    "Sie fahren in Urlaub. Bitten Sie einen Freund, auf Ihren Hund aufzupassen. (You're going on vacation. Ask a friend to watch your dog.)",
    "Ihr Hund ist krank. Sie sind beim Tierarzt. (Your dog is sick. You're at the vet.)",
    "Sie möchten mit Ihrem Hund in den Park. Fragen Sie nach den Regeln. (You want to go to the park with your dog. Ask about the rules.)"
  ],
  sampleResponses: [
    "A: Hallo Peter! Ich habe eine Bitte. Ich fahre nächste Woche nach Italien.\nB: Ja? Wie lange bist du weg?\nA: Eine Woche. Kannst du auf meinen Hund aufpassen?\nB: Ja, kein Problem! Was muss ich machen?\nA: Du musst ihn zweimal pro Tag füttern und mit ihm spazieren gehen.\nB: Das mache ich gern!",
    "A: Guten Tag. Mein Hund ist krank. Er frisst nicht.\nB: Seit wann frisst er nicht?\nA: Seit gestern. Und er schläft die ganze Zeit.\nB: Ich untersuche ihn. Bitte warten Sie einen Moment.\nA: Ist es ernst?\nB: Nein, er hat nur Magenschmerzen. Ich gebe ihm Medizin.",
    "A: Entschuldigung, darf ich hier mit meinem Hund spazieren gehen?\nB: Ja, aber der Hund muss an der Leine bleiben.\nA: Verstehe. Gibt es einen Bereich für Hunde ohne Leine?\nB: Ja, dort hinten ist eine Hundewiese. Da dürfen Hunde frei laufen."
  ]
};

// ============================================================================
// Vocabulary
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: "Pets & Animals",
  items: [
    // Common Pets
    { german: "das Haustier", english: "pet", example: "Ich habe ein Haustier." },
    { german: "der Hund", english: "dog", example: "Mein Hund heißt Max." },
    { german: "die Katze", english: "cat", example: "Die Katze schläft auf dem Sofa." },
    { german: "der Fisch", english: "fish", example: "Ich habe drei Fische." },
    { german: "der Vogel", english: "bird", example: "Der Vogel singt schön." },
    { german: "das Kaninchen", english: "rabbit", example: "Das Kaninchen ist sehr süß." },
    { german: "der Hamster", english: "hamster", example: "Der Hamster läuft im Rad." },
    { german: "die Maus", english: "mouse", example: "Ich habe eine weiße Maus." },
    
    // Farm & Wild Animals
    { german: "das Pferd", english: "horse", example: "Ich reite gern Pferd." },
    { german: "die Kuh", english: "cow", example: "Die Kuh gibt Milch." },
    { german: "das Schwein", english: "pig", example: "Das Schwein ist rosa." },
    { german: "das Schaf", english: "sheep", example: "Das Schaf hat weiße Wolle." },
    { german: "das Huhn", english: "chicken", example: "Das Huhn legt Eier." },
    { german: "der Elefant", english: "elephant", example: "Der Elefant ist sehr groß." },
    { german: "der Löwe", english: "lion", example: "Der Löwe ist gefährlich." },
    { german: "der Affe", english: "monkey", example: "Der Affe klettert auf den Baum." },
    { german: "das Zebra", english: "zebra", example: "Das Zebra hat Streifen." },
    
    // Animal Characteristics
    { german: "groß", english: "big/large", example: "Der Hund ist groß." },
    { german: "klein", english: "small", example: "Die Katze ist klein." },
    { german: "süß", english: "cute/sweet", example: "Das Kaninchen ist sehr süß." },
    { german: "freundlich", english: "friendly", example: "Mein Hund ist freundlich." },
    { german: "gefährlich", english: "dangerous", example: "Der Löwe ist gefährlich." },
    { german: "intelligent", english: "intelligent", example: "Hunde sind sehr intelligent." },
    { german: "schnell", english: "fast", example: "Das Pferd läuft schnell." },
    { german: "langsam", english: "slow", example: "Die Schildkröte ist langsam." },
    
    // Pet Care
    { german: "füttern", english: "to feed", example: "Ich füttere meinen Hund zweimal pro Tag." },
    { german: "das Futter", english: "food (for animals)", example: "Das Futter für Katzen." },
    { german: "fressen", english: "to eat (animals)", example: "Der Hund frisst sein Futter." },
    { german: "trinken", english: "to drink", example: "Die Katze trinkt Wasser." },
    { german: "spielen", english: "to play", example: "Der Hund spielt mit dem Ball." },
    { german: "schlafen", english: "to sleep", example: "Katzen schlafen viel." },
    { german: "laufen", english: "to run/walk", example: "Der Hund läuft im Park." },
    { german: "spazieren gehen", english: "to go for a walk", example: "Ich gehe mit dem Hund spazieren." },
    { german: "Gassi gehen", english: "to walk the dog", example: "Ich gehe dreimal pro Tag Gassi." },
    
    // Pet-Related Places & Things
    { german: "der Tierarzt / die Tierärztin", english: "veterinarian m/f", example: "Der Tierarzt untersucht meinen Hund." },
    { german: "der Zoo", english: "zoo", example: "Im Zoo gibt es viele Tiere." },
    { german: "der Park", english: "park", example: "Wir gehen in den Park." },
    { german: "die Leine", english: "leash", example: "Der Hund muss an der Leine bleiben." },
    { german: "der Käfig", english: "cage", example: "Der Vogel ist im Käfig." },
    { german: "das Aquarium", english: "aquarium", example: "Die Fische schwimmen im Aquarium." },
    { german: "der Korb", english: "basket/bed (for pets)", example: "Die Katze schläft in ihrem Korb." },
    { german: "das Halsband", english: "collar", example: "Der Hund hat ein rotes Halsband." },
    
    // Animal Actions
    { german: "bellen", english: "to bark", example: "Der Hund bellt laut." },
    { german: "miauen", english: "to meow", example: "Die Katze miaut." },
    { german: "singen", english: "to sing (birds)", example: "Der Vogel singt am Morgen." },
    { german: "schwimmen", english: "to swim", example: "Fische schwimmen im Wasser." },
    { german: "fliegen", english: "to fly", example: "Vögel können fliegen." },
    { german: "klettern", english: "to climb", example: "Katzen klettern auf Bäume." },
    { german: "springen", english: "to jump", example: "Der Hund springt hoch." },
    
    // Adjectives & Descriptions
    { german: "das Lieblingstier", english: "favorite animal", example: "Mein Lieblingstier ist der Hund." },
    { german: "wild", english: "wild", example: "Löwen sind wilde Tiere." },
    { german: "zahm", english: "tame", example: "Meine Katze ist sehr zahm." },
    { german: "krank", english: "sick", example: "Mein Hund ist krank." },
    { german: "gesund", english: "healthy", example: "Die Katze ist gesund." }
  ]
};

// ============================================================================
// Day 16 Export
// ============================================================================

const day16: ExamDay = {
  day: 16,
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
  focus: "Pets and animals"
};

export default day16;
