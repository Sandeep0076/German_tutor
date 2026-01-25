/**
 * Day 20: Writing + Speaking
 * Focus: Emergencies and asking for help
 * 
 * Skills: Writing, Speaking
 * Topics: Emergencies, accidents, asking for help, giving help, problems, solutions
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
  title: "Report a Problem",
  description: "Write a message reporting a problem or emergency",
  instructions: "Write to report a problem. Include: what happened, when, where, and what help you need. Write about 30-40 words.",
  prompt: "You lost your wallet. Write to your friend asking for help.",
  sampleAnswer: "Lieber Tom,\n\nich habe ein Problem! Ich habe mein Portemonnaie verloren. Ich war heute im Park. Vielleicht liegt es noch dort. Kannst du mit mir im Park suchen? Ich brauche deine Hilfe! Bitte ruf mich an.\n\nViele Grüße\nLisa",
  keyPhrases: [
    "Ich habe ein Problem (I have a problem)",
    "Ich brauche Hilfe (I need help)",
    "Kannst du mir helfen? (Can you help me?)",
    "Ich habe... verloren (I lost...)",
    "Was soll ich tun? (What should I do?)"
  ]
};

const writingPractice2: WritingPractice = {
  part: 1,
  title: "Cancel Due to Emergency",
  description: "Write to cancel an appointment or meeting due to an emergency",
  instructions: "Write to cancel plans due to an emergency. Must include all 3 points: 1) What was planned? 2) Why can't you come? 3) When can you meet instead? Write about 30-40 words.",
  prompt: "You can't meet your friend tomorrow because you're sick. Write to cancel and suggest a new date.",
  sampleAnswer: "Liebe Anna,\n\nes tut mir leid! Morgen kann ich nicht kommen. Ich bin krank. Ich habe Fieber und Kopfschmerzen. Der Arzt sagt, ich muss zu Hause bleiben. Können wir uns nächste Woche treffen?\n\nViele Grüße\nMax",
  keyPhrases: [
    "Es tut mir leid (I'm sorry)",
    "Ich kann nicht kommen (I can't come)",
    "Ich bin krank (I'm sick)",
    "Ich habe einen Notfall (I have an emergency)",
    "Können wir... (Can we...)"
  ]
};

const writingPractice3: WritingPractice = {
  part: 1,
  title: "Ask for Help with a Situation",
  description: "Write to ask for help with a difficult situation",
  instructions: "Write to ask someone for help with a problem. Explain the situation and what help you need. Write about 30-35 words.",
  prompt: "Your car broke down. Write to your friend asking if he can pick you up.",
  sampleAnswer: "Hallo Peter,\n\nmein Auto ist kaputt! Ich bin auf der Autobahn bei München. Kannst du mich abholen? Ich warte an der Tankstelle. Bitte komm schnell! Vielen Dank!\n\nTom",
  keyPhrases: [
    "Kannst du mich abholen? (Can you pick me up?)",
    "Ich warte... (I'm waiting...)",
    "Bitte komm schnell! (Please come quickly!)",
    "Ich brauche deine Hilfe (I need your help)"
  ]
};

// ============================================================================
// Speaking Practices
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: "Describe an Emergency Situation",
  description: "Talk about an emergency or problem you had",
  instructions: "Prepare a short monologue (30-45 seconds) about a problem or emergency. Include: what happened, when, where, how you felt, and how it was solved.",
  prompts: [
    "Hatten Sie schon mal einen Notfall? (Have you ever had an emergency?)",
    "Haben Sie schon mal etwas verloren? (Have you ever lost something?)",
    "Was war Ihr größtes Problem? (What was your biggest problem?)",
    "Wie haben Sie das Problem gelöst? (How did you solve the problem?)"
  ],
  sampleResponses: [
    "Letztes Jahr hatte ich einen Unfall. Ich bin mit dem Fahrrad gefahren. Plötzlich ist ein Auto gekommen. Ich bin gestürzt. Mein Bein hat wehgetan. Ein Mann hat mir geholfen. Er hat den Krankenwagen gerufen. Im Krankenhaus war ich zwei Tage. Jetzt ist alles wieder gut. Aber ich fahre vorsichtiger!",
    "Einmal habe ich mein Handy verloren. Ich war im Supermarkt. Zu Hause habe ich es nicht gefunden. Ich war sehr nervös. Alle wichtigen Nummern waren im Handy! Am nächsten Tag hat der Supermarkt angerufen. Jemand hat mein Handy gefunden! Ich war so glücklich! Jetzt schreibe ich wichtige Nummern auch auf Papier."
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: "Ask for and Offer Help",
  description: "Practice asking for help and offering to help others",
  instructions: "Practice common emergency and help situations. Be prepared to ask for help and offer help.",
  prompts: [
    "Sie brauchen Hilfe. Fragen Sie jemanden. (You need help. Ask someone.)",
    "Jemand braucht Hilfe. Was sagen Sie? (Someone needs help. What do you say?)",
    "Sie haben etwas verloren. Was tun Sie? (You lost something. What do you do?)",
    "Jemand ist krank. Wie helfen Sie? (Someone is sick. How do you help?)"
  ],
  sampleResponses: [
    "A: Entschuldigung, können Sie mir helfen?\nB: Ja, natürlich! Was ist das Problem?\nA: Ich habe meinen Schlüssel verloren. Ich kann nicht in meine Wohnung.\nB: Oh je! Haben Sie einen Schlüsseldienst?\nA: Nein, ich kenne keinen. Können Sie mir eine Nummer geben?\nB: Ja, moment. Ich google das für Sie.",
    "A: Hilfe! Mein Kind kann nicht schwimmen!\nB: Keine Panik! Ich hole den Rettungsschwimmer!\nA: Schnell bitte!\nB: Bleiben Sie ruhig. Hilfe kommt gleich.",
    "A: Mir ist schlecht. Ich brauche einen Arzt.\nB: Setzen Sie sich. Ich rufe den Krankenwagen.\nA: Danke. Mein Kopf tut so weh.\nB: Der Krankenwagen kommt bald. Bleiben Sie ruhig."
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 3,
  title: "Emergency Phone Calls",
  description: "Practice making emergency calls or asking for urgent help",
  instructions: "Practice emergency situations: calling for help, reporting an accident, or asking for urgent assistance.",
  prompts: [
    "Sie haben einen Unfall gesehen. Rufen Sie 112 an. (You saw an accident. Call 112.)",
    "Sie fühlen sich nicht gut. Rufen Sie den Arzt an. (You don't feel well. Call the doctor.)",
    "In Ihrer Wohnung ist Feuer. Was tun Sie? (There's a fire in your apartment. What do you do?)"
  ],
  sampleResponses: [
    "A: Notruf 112, was ist passiert?\nB: Es gibt einen Unfall! Auf der Hauptstraße!\nA: Wo genau sind Sie?\nB: Ecke Hauptstraße und Goethestraße. Ein Auto und ein Fahrrad.\nA: Gibt es Verletzte?\nB: Ja, der Fahrradfahrer liegt auf der Straße. Er blutet!\nA: Wir schicken sofort einen Krankenwagen. Bleiben Sie bei dem Verletzten.\nB: Ja, ich bleibe hier.",
    "A: Arztpraxis Dr. Müller, guten Tag.\nB: Guten Tag. Ich brauche dringend einen Termin. Mir geht es sehr schlecht.\nA: Was haben Sie für Beschwerden?\nB: Ich habe hohes Fieber und starke Halsschmerzen. Ich kann kaum schlucken.\nA: Das klingt nicht gut. Können Sie in einer Stunde kommen?\nB: Ja, ich komme sofort. Vielen Dank!",
    "A: Feuerwehr, Notruf!\nB: Hilfe! In meiner Wohnung ist Feuer! In der Küche!\nA: Wo wohnen Sie?\nB: Schillerstraße 23, vierte Etage!\nA: Sind Sie allein? Können Sie raus?\nB: Ja, ich bin allein. Der Rauch ist stark!\nA: Verlassen Sie sofort die Wohnung! Gehen Sie nach draußen! Wir kommen!\nB: Ich gehe jetzt!"
  ]
};

// ============================================================================
// Vocabulary
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: "Emergencies & Help",
  items: [
    // Emergency Words
    { german: "der Notfall", english: "emergency", example: "Es ist ein Notfall!" },
    { german: "die Hilfe", english: "help", example: "Ich brauche Hilfe!" },
    { german: "der Unfall", english: "accident", example: "Es gibt einen Unfall." },
    { german: "die Gefahr", english: "danger", example: "Vorsicht! Gefahr!" },
    { german: "das Problem", english: "problem", example: "Ich habe ein Problem." },
    { german: "der Notruf", english: "emergency call", example: "Ich rufe den Notruf 112." },
    
    // Emergency Services
    { german: "der Krankenwagen", english: "ambulance", example: "Rufen Sie einen Krankenwagen!" },
    { german: "die Feuerwehr", english: "fire department", example: "Die Feuerwehr kommt." },
    { german: "die Polizei", english: "police", example: "Ich rufe die Polizei." },
    { german: "der Rettungsdienst", english: "rescue service", example: "Der Rettungsdienst hilft." },
    { german: "der Arzt / die Ärztin", english: "doctor m/f", example: "Ich brauche einen Arzt." },
    { german: "das Krankenhaus", english: "hospital", example: "Er ist im Krankenhaus." },
    
    // Health Emergencies
    { german: "krank", english: "sick", example: "Ich bin krank." },
    { german: "verletzt", english: "injured", example: "Er ist verletzt." },
    { german: "der Schmerz", english: "pain", example: "Ich habe Schmerzen." },
    { german: "das Fieber", english: "fever", example: "Ich habe Fieber." },
    { german: "die Wunde", english: "wound", example: "Die Wunde blutet." },
    { german: "bluten", english: "to bleed", example: "Mein Finger blutet." },
    { german: "wehtun", english: "to hurt", example: "Mein Kopf tut weh." },
    { german: "sich verletzen", english: "to injure oneself", example: "Ich habe mich verletzt." },
    { german: "stürzen / fallen", english: "to fall", example: "Ich bin gestürzt." },
    
    // Asking for Help
    { german: "Hilfe!", english: "Help!", example: "Hilfe! Schnell!" },
    { german: "helfen", english: "to help", example: "Können Sie mir helfen?" },
    { german: "brauchen", english: "to need", example: "Ich brauche einen Arzt." },
    { german: "rufen", english: "to call", example: "Rufen Sie die Polizei!" },
    { german: "schnell", english: "quickly/fast", example: "Kommen Sie schnell!" },
    { german: "sofort", english: "immediately", example: "Ich komme sofort!" },
    { german: "dringend", english: "urgent", example: "Es ist dringend!" },
    
    // Lost & Found
    { german: "verlieren", english: "to lose", example: "Ich habe meinen Schlüssel verloren." },
    { german: "finden", english: "to find", example: "Haben Sie mein Handy gefunden?" },
    { german: "suchen", english: "to search/look for", example: "Ich suche meine Tasche." },
    { german: "das Fundbüro", english: "lost and found office", example: "Gehen Sie zum Fundbüro." },
    { german: "der Schlüssel", english: "key", example: "Ich habe meinen Schlüssel verloren." },
    { german: "das Portemonnaie / die Geldbörse", english: "wallet", example: "Mein Portemonnaie ist weg!" },
    { german: "die Tasche", english: "bag", example: "Ich finde meine Tasche nicht." },
    { german: "der Pass / der Ausweis", english: "passport/ID", example: "Ich habe meinen Pass verloren." },
    
    // Accidents & Problems
    { german: "kaputt", english: "broken", example: "Mein Auto ist kaputt." },
    { german: "das Feuer", english: "fire", example: "Hilfe! Feuer!" },
    { german: "der Rauch", english: "smoke", example: "Ich sehe Rauch!" },
    { german: "der Brand", english: "fire (event)", example: "Es gibt einen Brand!" },
    { german: "brennen", english: "to burn", example: "Das Haus brennt!" },
    { german: "der Diebstahl", english: "theft", example: "Ich melde einen Diebstahl." },
    { german: "stehlen", english: "to steal", example: "Jemand hat mein Fahrrad gestohlen." },
    
    // Emergency Actions
    { german: "anrufen", english: "to call (phone)", example: "Ich rufe den Notruf an." },
    { german: "retten", english: "to rescue/save", example: "Der Arzt rettet Leben." },
    { german: "warten", english: "to wait", example: "Bitte warten Sie hier." },
    { german: "bleiben", english: "to stay", example: "Bleiben Sie ruhig!" },
    { german: "kommen", english: "to come", example: "Der Krankenwagen kommt gleich." },
    { german: "bringen", english: "to bring/take", example: "Ich bringe Sie ins Krankenhaus." },
    { german: "abholen", english: "to pick up", example: "Können Sie mich abholen?" },
    
    // Descriptions & States
    { german: "gefährlich", english: "dangerous", example: "Das ist gefährlich!" },
    { german: "sicher", english: "safe", example: "Hier ist es sicher." },
    { german: "vorsichtig", english: "careful", example: "Seien Sie vorsichtig!" },
    { german: "ruhig", english: "calm", example: "Bleiben Sie ruhig!" },
    { german: "nervös", english: "nervous", example: "Ich bin sehr nervös." },
    { german: "schlimm", english: "bad/serious", example: "Ist es schlimm?" },
    { german: "ernst", english: "serious", example: "Die Situation ist ernst." },
    
    // Useful Phrases
    { german: "Was ist passiert?", english: "What happened?", example: "Was ist passiert? Geht es Ihnen gut?" },
    { german: "Geht es dir/Ihnen gut?", english: "Are you okay?", example: "Geht es dir gut?" },
    { german: "Keine Panik!", english: "Don't panic!", example: "Keine Panik! Hilfe kommt!" },
    { german: "Es tut mir leid.", english: "I'm sorry.", example: "Es tut mir leid, ich kann nicht helfen." },
    { german: "Wo tut es weh?", english: "Where does it hurt?", example: "Wo tut es weh?" },
    
    // Locations for Emergencies
    { german: "die Apotheke", english: "pharmacy", example: "Die Apotheke ist dort." },
    { german: "die Tankstelle", english: "gas station", example: "Ich warte an der Tankstelle." },
    { german: "die Straße", english: "street", example: "Der Unfall ist auf der Straße." },
    { german: "draußen", english: "outside", example: "Gehen Sie nach draußen!" },
    { german: "drinnen", english: "inside", example: "Bleiben Sie drinnen!" }
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
  focus: "Emergencies and asking for help"
};

export default day20;
