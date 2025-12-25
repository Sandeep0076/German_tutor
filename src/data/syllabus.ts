export interface Question {
    id: string;
    type: 'text' | 'choice' | 'record';
    question: string;
    options?: string[];
    answer: string;
    explanation?: string;
}

export interface LessonSection {
    title: string;
    content: string; // Markdown supported
    examples?: { german: string; english: string; audio?: boolean }[];
}

export interface LessonContent {
    sections: LessonSection[];
    homework: Question[];
}

export interface DayPlan {
    day: number;
    title: string;
    focus: string;
    activities: string[];
    homework: string[]; // Keep textual summary
    details?: LessonContent; // NEW: Full detailed lesson content
}

export interface Phase {
    id: number;
    title: string;
    description: string;
    days: DayPlan[];
}

export const syllabusData: Phase[] = [
    {
        id: 1,
        title: "Phase 1: The Basics (Day 1-10)",
        description: "Focus: Pronunciation, Introductions, Numbers, Basic Sentence Structure",
        days: [
            {
                day: 1,
                title: "Alphabet & Pronunciation",
                focus: "Vowels, Umlauts, Greetings",
                activities: ["Learn Vowels/Umlauts", "Practice Greetings (Hallo, Guten Morgen)"],
                homework: ["Record yourself saying the alphabet and greetings"],
                details: {
                    sections: [
                        {
                            title: "1. The German Alphabet (Das Alphabet)",
                            content: "German has 26 standard letters plus 4 special characters. Most consonants sound similar to English, but vowels and some combinations are different.\n\n**Important Differences:**\n* **A**: 'ah' (like Father)\n* **E**: 'eh' (like Pet) or 'ay' (like Say)\n* **I**: 'ee' (like See)\n* **J**: 'yot' (Sounds like 'Y' in Yes)\n* **V**: 'fau' (Sounds like 'F' in Father)\n* **W**: 'vay' (Sounds like 'V' in Vest)\n* **Z**: 'tset' (Sounds like 'TS' in Cats)",
                            examples: [
                                { german: "Ja", english: "Yes (Sounds like 'Ya')" },
                                { german: "Vater", english: "Father (Sounds like 'Fater')" },
                                { german: "Wasser", english: "Water (Sounds like 'Vasser')" },
                                { german: "Zeit", english: "Time (Sounds like 'Tseit')" }
                            ]
                        },
                        {
                            title: "2. The Special Characters (Umlauts & Eszett)",
                            content: "These define the 'German sound'.\n* **Ä (A-Umlaut)**: Like 'ae' in Melon. (Männer)\n* **Ö (O-Umlaut)**: Make an 'O' with lips but say 'A'. (Schön)\n* **Ü (U-Umlaut)**: Make a 'U' with lips but say 'E'. (München)\n* **ß (Eszett/Sharp S)**: Sounds exactly like 'ss'. Used after long vowels. (Straße)",
                            examples: [
                                { german: "Mädchen", english: "Girl" },
                                { german: "Öl", english: "Oil" },
                                { german: "Über", english: "Over/About" },
                                { german: "Groß", english: "Big" }
                            ]
                        },
                        {
                            title: "3. Essential Greetings (Begrüßungen)",
                            content: "Start every conversation right. Formal vs Informal is key in German.",
                            examples: [
                                { german: "Hallo", english: "Hello (Informal)" },
                                { german: "Guten Morgen", english: "Good Morning (Until ~10am)" },
                                { german: "Guten Tag", english: "Good Day (10am - 6pm)" },
                                { german: "Guten Abend", english: "Good Evening (6pm+)" },
                                { german: "Auf Wiedersehen", english: "Goodbye (Formal)" },
                                { german: "Tschüss", english: "Bye (Informal)" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d1-q1",
                            type: "choice",
                            question: "How is the letter 'W' pronounced in German?",
                            options: ["Like English W in Water", "Like English V in Vest", "Like English F in Father"],
                            answer: "Like English V in Vest",
                            explanation: "Wasser sounds like 'Vasser'."
                        },
                        {
                            id: "d1-q2",
                            type: "choice",
                            question: "Which greeting uses 'Good Day'?",
                            options: ["Guten Morgen", "Guten Tag", "Guten Abend"],
                            answer: "Guten Tag",
                            explanation: "Used from late morning until evening."
                        },
                        {
                            id: "d1-q3",
                            type: "text",
                            question: "Translate: 'Goodbye' (Formal)",
                            answer: "Auf Wiedersehen",
                            explanation: "Auf Wiedersehen implies seeing someone again."
                        },
                        {
                            id: "d1-q4",
                            type: "choice",
                            question: "Which letter sounds like 'TS' inside 'Cats'?",
                            options: ["S", "C", "Z"],
                            answer: "Z",
                            explanation: "The German Z is always sharp/hard like 'ts' (Zeit, Zoo)."
                        },
                        {
                            id: "d1-q5",
                            type: "record",
                            question: "Task: Record yourself spelling your First Name using the German alphabet.",
                            answer: "Example: Sarah -> Es - Ah - Er - Ah - Ha",
                            explanation: "Check the alphabet table for pronunciation of each letter."
                        }
                    ]
                }
            },
            {
                day: 2,
                title: "Introductions & Personal Pronouns",
                focus: "ich, du, er/sie/es",
                activities: ["Self-introduction", "Learn pronouns"],
                homework: ["Write a short bio (Name, Origin, Age)"],
                details: {
                    sections: [
                        {
                            title: "1. Personal Pronouns (Personalpronomen)",
                            content: "Pronouns replace nouns. In German, we have different pronouns for different persons and numbers.\n\n| Person | Singular | Plural |\n|---|---|---|\n| 1st | **ich** (I) | **wir** (we) |\n| 2nd | **du** (you - informal) | **ihr** (you all) |\n| 3rd | **er** (he) / **sie** (she) / **es** (it) | **sie** (they) / **Sie** (you - formal) |\n\n**Note:** 'Sie' (Capitalized) is the formal 'You' used for strangers or superiors. 'sie' (lowercase) can mean 'she' or 'they' depending on the verb.",
                            examples: [
                                { german: "Ich bin...", english: "I am..." },
                                { german: "Du bist...", english: "You are... (informal)" },
                                { german: "Er ist...", english: "He is..." },
                                { german: "Sie sind...", english: "You are... (formal)" }
                            ]
                        },
                        {
                            title: "2. Introducing Yourself (Sich vorstellen)",
                            content: "To tell someone who you are, use these basic structures:\n\n* **Name:** Ich heiße... (I am called...) or Ich bin... (I am...)\n* **Origin:** Ich komme aus... (I come from...)\n* **Residence:** Ich wohne in... (I live in...)\n* **Language:** Ich spreche Englisch und ein bisschen Deutsch.",
                            examples: [
                                { german: "Ich heiße Max.", english: "My name is Max." },
                                { german: "Ich komme aus Indien.", english: "I come from India." },
                                { german: "Ich wohne in Berlin.", english: "I live in Berlin." },
                                { german: "Wie heißt du?", english: "What is your name? (informal)" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d2-q1",
                            type: "choice",
                            question: "Which pronoun is used for the formal 'You'?",
                            options: ["du", "ihr", "Sie"],
                            answer: "Sie",
                            explanation: "Always capitalized 'Sie' is the formal form."
                        },
                        {
                            id: "d2-q2",
                            type: "text",
                            question: "Translate: 'I come from Germany.'",
                            answer: "Ich komme aus Deutschland.",
                            explanation: "Remember 'aus' means 'from' in this context."
                        },
                        {
                            id: "d2-q3",
                            type: "choice",
                            question: "What does 'Ich wohne in...' mean?",
                            options: ["I am from...", "I live in...", "I work at..."],
                            answer: "I live in...",
                            explanation: "'wohnen' means to reside."
                        }
                    ]
                }
            },
            {
                day: 3,
                title: "Numbers 0-20 & Verbs 'sein'/'haben'",
                focus: "Present tense basics",
                activities: ["Count 0-20", "Conjugate sein/haben"],
                homework: ["Math problems in German"],
                details: {
                    sections: [
                        {
                            title: "1. Numbers 0-20 (Zahlen 0-20)",
                            content: "Numbers are essential for shopping, age, and telephone numbers.\n\n* **0-10:** null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn\n* **11-12:** elf, zwölf (Special forms!)\n* **13-19:** Just add '-zehn' to the root (e.g., 13 = drei + zehn = dreizehn).\n* **20:** zwanzig",
                            examples: [
                                { german: "Eins", english: "1" },
                                { german: "Fünf", english: "5" },
                                { german: "Zwölf", english: "12" },
                                { german: "Siebzehn", english: "17 (Note: drops 'en' from sieben)" }
                            ]
                        },
                        {
                            title: "2. The Verb 'Sein' (To Be)",
                            content: "The most important irregular verb in German.\n\n* **ich bin** (I am)\n* **du bist** (you are)\n* **er/sie/es ist** (he/she/it is)\n* **wir sind** (we are)\n* **ihr seid** (you all are)\n* **sie/Sie sind** (they/You are)",
                            examples: [
                                { german: "Ich bin Student.", english: "I am a student." },
                                { german: "Du bist nett.", english: "You are nice." },
                                { german: "Wir sind hier.", english: "We are here." }
                            ]
                        },
                        {
                            title: "3. The Verb 'Haben' (To Have)",
                            content: "Another essential irregular verb.\n\n* **ich habe** (I have)\n* **du hast** (you have)\n* **er/sie/es hat** (he/she/it has)\n* **wir haben** (we have)\n* **ihr habt** (you all have)\n* **sie/Sie haben** (they/You have)",
                            examples: [
                                { german: "Ich habe ein Auto.", english: "I have a car." },
                                { german: "Hast du Zeit?", english: "Do you have time?" },
                                { german: "Er hat Hunger.", english: "He is hungry (lit: He has hunger)." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d3-q1",
                            type: "text",
                            question: "How do you say '12' in German?",
                            answer: "zwölf",
                            explanation: "Elf (11) and Zwölf (12) are unique."
                        },
                        {
                            id: "d3-q2",
                            type: "choice",
                            question: "What is the 'ihr' form of 'sein'?",
                            options: ["sind", "bist", "seid"],
                            answer: "seid",
                            explanation: "Ihr seid (You all are)."
                        },
                        {
                            id: "d3-q3",
                            type: "text",
                            question: "Translate: 'We have a cat.'",
                            answer: "Wir haben eine Katze.",
                            explanation: "Wir haben is the first person plural form."
                        }
                    ]
                }
            },
            {
                day: 4,
                title: "Numbers 21-100 & Colors",
                focus: "Basic Questions",
                activities: ["Count to 100", "Learn Colors", "Ask 'Wie alt bist du?'"],
                homework: ["Write 10 simple questions and answers"],
                details: {
                    sections: [
                        {
                            title: "1. Numbers 21-100",
                            content: "For numbers above 20, German uses a 'backwards' logic: 'One and Twenty' (einundzwanzig).\n\n* **Structure:** [Units] + und + [Tens]\n* **21:** einundzwanzig\n* **32:** zweiunddreißig\n* **40, 50, 60...:** vierzig, fünfzig, sechzig...\n* **100:** (ein)hundert",
                            examples: [
                                { german: "fünfundzwanzig", english: "25" },
                                { german: "achtundvierzig", english: "48" },
                                { german: "dreiundneunzig", english: "93" },
                                { german: "hundert", english: "100" }
                            ]
                        },
                        {
                            title: "2. Colors (Farben)",
                            content: "Describe the world around you.\n\n* **Rot** (Red), **Blau** (Blue), **Grün** (Green), **Gelb** (Yellow)\n* **Schwarz** (Black), **Weiß** (White), **Grau** (Grey), **Braun** (Brown)\n* **Orange** (Orange), **Rosa** (Pink), **Lila** (Purple)",
                            examples: [
                                { german: "Der Himmel ist blau.", english: "The sky is blue." },
                                { german: "Das Auto ist rot.", english: "The car is red." },
                                { german: "Gras ist grün.", english: "Grass is green." }
                            ]
                        },
                        {
                            title: "3. Asking Age",
                            content: "To ask about age, we use 'how old are you?' which in German is 'Wie alt bist du?'\n\n* **Question:** Wie alt bist du? (informal) / Wie alt sind Sie? (formal)\n* **Answer:** Ich bin [number] Jahre alt.",
                            examples: [
                                { german: "Wie alt bist du?", english: "How old are you?" },
                                { german: "Ich bin fünfundzwanzig Jahre alt.", english: "I am 25 years alt." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d4-q1",
                            type: "text",
                            question: "Write '56' in German words.",
                            answer: "sechsundfünfzig",
                            explanation: "Remember: Units first, then 'und', then tens."
                        },
                        {
                            id: "d4-q2",
                            type: "choice",
                            question: "What color is 'Gelb'?",
                            options: ["Green", "Yellow", "Blue"],
                            answer: "Yellow",
                            explanation: "Gelb sounds a bit like 'gold'."
                        },
                        {
                            id: "d4-q3",
                            type: "text",
                            question: "How do you ask 'How old are you?' formally?",
                            answer: "Wie alt sind Sie?",
                            explanation: "Use 'sind Sie' for the formal form."
                        }
                    ]
                }
            },
            {
                day: 5,
                title: "Weekdays, Months, Seasons",
                focus: "Likes/Dislikes (Gern)",
                activities: ["Calendar vocab", "Expressing preferences"],
                homework: ["Write your weekly schedule"],
                details: {
                    sections: [
                        {
                            title: "1. Weekdays (Wochentage)",
                            content: "The German week starts on Monday (Montag).\n\n* **Montag, Dienstag, Mittwoch, Donnerstag, Freitag**\n* **Samstag, Sonntag** (Das Wochenende)\n* **Preposition:** We use **am** (on) for days (am Montag).",
                            examples: [
                                { german: "Am Montag arbeite ich.", english: "On Monday I work." },
                                { german: "Was machst du am Samstag?", english: "What are you doing on Saturday?" },
                                { german: "Heute ist Mittwoch.", english: "Today is Wednesday." }
                            ]
                        },
                        {
                            title: "2. Months & Seasons (Monate & Jahreszeiten)",
                            content: "* **Months:** Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember\n* **Seasons:** der Frühling (Spring), der Sommer (Summer), der Herbst (Autumn), der Winter (Winter)\n* **Preposition:** We use **im** (in) for months and seasons (im Sommer).",
                            examples: [
                                { german: "Mein Geburtstag ist im August.", english: "My birthday is in August." },
                                { german: "Im Winter ist es kalt.", english: "In winter it is cold." }
                            ]
                        },
                        {
                            title: "3. Expressing Preferences (Gern)",
                            content: "To say you like doing something, add 'gern' after the verb.\n\n* **Structure:** Verb + gern\n* **Examples:** Ich lerne gern. (I like to learn). Ich esse gern Pizza. (I like to eat pizza).",
                            examples: [
                                { german: "Ich schwimme gern.", english: "I like to swim." },
                                { german: "Liest du gern?", english: "Do you like to read?" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d5-q1",
                            type: "choice",
                            question: "Which preposition is used with days like 'Montag'?",
                            options: ["im", "am", "um"],
                            answer: "am",
                            explanation: "Am = an + dem, used for days and dates."
                        },
                        {
                            id: "d5-q2",
                            type: "text",
                            question: "Translate: 'I like to drink coffee.'",
                            answer: "Ich trinke gern Kaffee.",
                            explanation: "Add 'gern' after the verb 'trinken'."
                        },
                        {
                            id: "d5-q3",
                            type: "choice",
                            question: "What is 'Autumn' in German?",
                            options: ["Frühling", "Herbst", "Sommer"],
                            answer: "Herbst",
                            explanation: "Herbst is Autumn."
                        }
                    ]
                }
            },
            {
                day: 6,
                title: "Regular Verbs & Sentence Structure",
                focus: "Conjugation & Position 2",
                activities: ["Regular endings (-e, -st...)", "Verb placement"],
                homework: ["Conjugate 5 common verbs"],
                details: {
                    sections: [
                        {
                            title: "1. Verb Conjugation (Konjugation)",
                            content: "To conjugate a regular verb, take the stem (remove -en) and add endings:\n\n* **ich**: -e (ich lerne)\n* **du**: -st (du lernst)\n* **er/sie/es**: -t (er lernt)\n* **wir**: -en (wir lernen)\n* **ihr**: -t (ihr lernt)\n* **sie/Sie**: -en (sie lernen)",
                            examples: [
                                { german: "machen (to do)", english: "ich mache, du machst..." },
                                { german: "hören (to hear)", english: "er hört, wir hören..." },
                                { german: "spielen (to play)", english: "ihr spielt" }
                            ]
                        },
                        {
                            title: "2. Sentence Structure (Satzbau)",
                            content: "In a standard German statement, the **conjugated verb always sits in Position 2**.\n\n* **Standard:** Ich (1) lerne (2) heute (3) Deutsch (4).\n* **Inverted:** Heute (1) lerne (2) ich (3) Deutsch (4).",
                            examples: [
                                { german: "Ich wohne in Berlin.", english: "I live in Berlin." },
                                { german: "In Berlin wohne ich.", english: "In Berlin live I. (Correct structure!)" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d6-q1",
                            type: "text",
                            question: "Conjugate 'spielen' for 'du'.",
                            answer: "spielst",
                            explanation: "Stem is 'spiel', add '-st'."
                        },
                        {
                            id: "d6-q2",
                            type: "choice",
                            question: "In which position does the verb sit in a statement?",
                            options: ["Position 1", "Position 2", "At the end"],
                            answer: "Position 2",
                            explanation: "The verb is the anchor of the sentence in Position 2."
                        }
                    ]
                }
            },
            {
                day: 7,
                title: "Nouns & Articles",
                focus: "Der, Die, Das (Nominative)",
                activities: ["Gender rules", "Plurals"],
                homework: ["Label 20 items in your room"],
                details: {
                    sections: [
                        {
                            title: "1. Grammatical Gender",
                            content: "Every noun in German has a gender. You MUST learn the article with the noun.\n\n* **Maskulin:** der (der Mann, der Hund)\n* **Feminin:** die (die Frau, die Katze)\n* **Neutral:** das (das Kind, das Auto)\n* **Plural:** die (die Kinder, die Autos)",
                            examples: [
                                { german: "der Tisch", english: "the table" },
                                { german: "die Lampe", english: "the lamp" },
                                { german: "das Buch", english: "the book" }
                            ]
                        },
                        {
                            title: "2. Plural Basics",
                            content: "Plurals are varied, but all plural nouns use **die**.\n\n* Common endings: **-e, -en, -er, -s** or adding an **Umlaut**.\n* Example: der Apfel -> **die Äpfel**",
                            examples: [
                                { german: "die Bücher", english: "the books" },
                                { german: "die Tische", english: "the tables" },
                                { german: "die Namen", english: "the names" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d7-q1",
                            type: "choice",
                            question: "What is the article for 'Frau'?",
                            options: ["der", "die", "das"],
                            answer: "die",
                            explanation: "Frau is feminine."
                        },
                        {
                            id: "d7-q2",
                            type: "text",
                            question: "What is the plural article for ALL genders?",
                            answer: "die",
                            explanation: "All nouns in plural take 'die' in the nominative."
                        }
                    ]
                }
            },
            {
                day: 8,
                title: "W-Questions",
                focus: "Wer, Was, Wo, Wann, Wie",
                activities: ["Question words drill"],
                homework: ["Create a dialogue asking for info"],
                details: {
                    sections: [
                        {
                            title: "1. Question Words (W-Fragen)",
                            content: "In German, most question words start with 'W'.\n\n* **Wer?** (Who?)\n* **Was?** (What?)\n* **Wo?** (Where?)\n* **Wann?** (When?)\n* **Wie?** (How?)\n* **Warum?** (Why?)\n* **Woher?** (Where from?)\n* **Wohin?** (Where to?)",
                            examples: [
                                { german: "Wie heißt du?", english: "What is your name?" },
                                { german: "Wo wohnst du?", english: "Where do you live?" },
                                { german: "Was ist das?", english: "What is that?" },
                                { german: "Wann kommst du?", english: "When are you coming?" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d8-q1",
                            type: "text",
                            question: "How do you say 'Where from?'",
                            answer: "Woher",
                            explanation: "Woher refers to origin."
                        },
                        {
                            id: "d8-q2",
                            type: "choice",
                            question: "Which word means 'Who'?",
                            options: ["Wer", "Was", "Wie"],
                            answer: "Wer",
                            explanation: "Wer = Who."
                        }
                    ]
                }
            },
            {
                day: 9,
                title: "Ja/Nein Questions & Negation",
                focus: "Nicht vs Kein",
                activities: ["Forming Yes/No questions", "Negating sentences"],
                homework: ["Examples of what you have/don't have"],
                details: {
                    sections: [
                        {
                            title: "1. Yes/No Questions (Ja/Nein Fragen)",
                            content: "To ask a question that can be answered with Yes or No, simply **move the verb to Position 1**.\n\n* **Statement:** Du kommst aus Berlin.\n* **Question:** Kommst du aus Berlin?",
                            examples: [
                                { german: "Bist du müde?", english: "Are you tired?" },
                                { german: "Hast du ein Auto?", english: "Do you have a car?" },
                                { german: "Arbeitest du?", english: "Do you work?" }
                            ]
                        },
                        {
                            title: "2. Negation: Nicht vs Kein",
                            content: "* **Kein:** Used to negate nouns with an indefinite article (ein/eine) or no article. (Ich habe **kein** Auto).\n* **Nicht:** Used to negate verbs, adjectives, or nouns with a definite article. (Ich schlafe **nicht**).",
                            examples: [
                                { german: "Das ist kein Hund.", english: "That is not a dog." },
                                { german: "Ich bin nicht müde.", english: "I am not tired." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d9-q1",
                            type: "text",
                            question: "Turn into a question: 'Er spielt Fußball.'",
                            answer: "Spielt er Fußball?",
                            explanation: "Move the verb 'spielt' to the beginning."
                        },
                        {
                            id: "d9-q2",
                            type: "choice",
                            question: "Which negation for 'Ich habe ___ Hunger'?",
                            options: ["nicht", "kein"],
                            answer: "keinen",
                            explanation: "Hunger is a noun (technically accusative 'keinen' here, but 'kein' is the category)."
                        }
                    ]
                }
            },
            {
                day: 10,
                title: "Review & Mini-Test 1",
                focus: "Mock Conversation",
                activities: ["Review Days 1-9", "Roleplay: Intro"],
                homework: ["Self-reflection"],
                details: {
                    sections: [
                        {
                            title: "Phase 1 Review",
                            content: "Congratulations! You've learned:\n* Alphabets & Pronunciation\n* Introductions & Pronouns\n* Numbers 0-100\n* Verbs 'sein' & 'haben'\n* Regular Verb Conjugation\n* Sentence Structure\n* Nouns & Articles\n* Question Words",
                            examples: [
                                { german: "Ich bin bereit.", english: "I am ready." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d10-q1",
                            type: "choice",
                            question: "How do you conjugate 'haben' for 'du'?",
                            options: ["habe", "hast", "hat"],
                            answer: "hast",
                            explanation: "Du hast."
                        },
                        {
                            id: "d10-q2",
                            type: "text",
                            question: "Translate: 'The book is green.'",
                            answer: "Das Buch ist grün.",
                            explanation: "Das Buch (neutral) + ist + grün (color)."
                        }
                    ]
                }
            },
        ]
    },
    {
        id: 2,
        title: "Phase 2: Daily Life & Verbs (Day 11-20)",
        description: "Focus: Family, Food, Time, Modal Verbs",
        days: [
            { day: 11, title: "Family & Possessives", focus: "mein, dein, sein...", activities: ["Family vocabulary", "Possessive articles"], homework: ["Describe your family tree"] },
            { day: 12, title: "Time & Routine", focus: "Daily Verbs", activities: ["Telling time", "Routine verbs"], homework: ["Write daily routine with times"] },
            { day: 13, title: "Separable Verbs", focus: "Structure (an-rufen)", activities: ["Concept of prefixes", "Sentence bracket"], homework: ["10 sentences with separable verbs"] },
            { day: 14, title: "Food & Accusative Case", focus: "Den/Einen (Direct Object)", activities: ["Food vocab", "Ordering basics", "Accusative intro"], homework: ["Write a restaurant dialogue"] },
            { day: 15, title: "Modals 1: Können & Wollen", focus: "Ability & Desire", activities: ["Can/Want usage"], homework: ["Write what you can/want to do"] },
            { day: 16, title: "Modals 2: Müssen & Dürfen", focus: "Obligation & Permission", activities: ["Must/Allowed usage"], homework: ["Rules in Germany vs Vietnam"] },
            { day: 17, title: "Modals 3: Möchten & Shopping", focus: "Polite wishes", activities: ["Ordering politely", "Grocery shopping"], homework: ["Write shopping list & dialogue"] },
            { day: 18, title: "Furniture & Adjectives", focus: "Description", activities: ["House vocab", "Basic Adjectives"], homework: ["Describe your dream house"] },
            { day: 19, title: "Prepositions with Accusative", focus: "für, um, durch...", activities: ["Accusative prepositions"], homework: ["Fill-in-the-blank exercises"] },
            { day: 20, title: "Review & Mini-Test 2", focus: "Roleplay", activities: ["Review Phase 2", "Roleplay: Shopping/Restaurant"], homework: ["Review weak points"] }
        ]
    },
    {
        id: 3,
        title: "Phase 3: Moving Around & Past Tense (Day 21-30)",
        description: "Focus: Cities, Transport, Perfect Tense",
        days: [
            { day: 21, title: "Hobbies & Inversion", focus: "Sentence Structure", activities: ["Talk about hobbies", "Verb position with inversion"], homework: ["Write about hobbies"] },
            { day: 22, title: "City & Directions", focus: "Imperative", activities: ["Giving directions", "Imperative forms"], homework: ["Map navigation exercise"] },
            { day: 23, title: "Transport", focus: "Travel vocab", activities: ["Buying tickets", "Transport types"], homework: ["Dialogue at station"] },
            { day: 24, title: "Dative Case Basics", focus: "Indirect Object", activities: ["Dative articles", "Verbs with Dative"], homework: ["Dative drills"] },
            { day: 25, title: "Prepositions with Dative", focus: "aus, bei, mit...", activities: ["Dative prepositions usage"], homework: ["Write sentences with Dative prepositions"] },
            { day: 26, title: "Perfect Tense 1 (Haben)", focus: "Past with Haben", activities: ["Understanding 'ge-'", "Regular participles"], homework: ["Write 5 sentences in Perfect"] },
            { day: 27, title: "Perfect Tense 2 (Irregular)", focus: "Strong verbs", activities: ["Irregular participles memorization"], homework: ["Flashcards for irregulars"] },
            { day: 28, title: "Perfect Tense 3 (Sein)", focus: "Movement verbs", activities: ["Verbs taking 'sein'"], homework: ["Write about a trip (movement)"] },
            { day: 29, title: "Talking about the Past", focus: "Narrative", activities: ["Weekend/Holiday recap"], homework: ["Write a short text about last weekend"] },
            { day: 30, title: "Review & Mini-Test 3", focus: "Writing", activities: ["Review Phase 3", "Email writing practice"], homework: ["Write an email about vacation"] }
        ]
    },
    {
        id: 4,
        title: "Phase 4: Work, Health & Adv. Grammar (Day 31-40)",
        description: "Focus: Health, Work, Two-Way Prepositions",
        days: [
            { day: 31, title: "Health & Body", focus: "Doctor visits", activities: ["Body parts", "Describing pain"], homework: ["Dialogue: At the doctor"] },
            { day: 32, title: "Professions & Work", focus: "Job vocab", activities: ["Talking about work", "Workplace terms"], homework: ["Describe your job/ideal job"] },
            { day: 33, title: "Appointments (Termine)", focus: "Scheduling", activities: ["Making/Changing appointments"], homework: ["Calendar management dialogue"] },
            { day: 34, title: "Two-Way Prepositions", focus: "Wo vs Wohin", activities: ["Dative (Location) vs Accusative (Motion)"], homework: ["Picture description (Where is the cat?)"] },
            { day: 35, title: "Clothing & Adjective Endings", focus: "Basic declension", activities: ["Colors/Clothes", "Nominative/Accusative endings"], homework: ["Describe someone's outfit"] },
            { day: 36, title: "Weather", focus: "Weather vocab", activities: ["Talking about weather", "Seasons recap"], homework: ["Weather report writing"] },
            { day: 37, title: "Letter Writing", focus: "Formal vs Informal", activities: ["Salutations/Closings", "Email structure"], homework: ["Write one formal, one informal email"] },
            { day: 38, title: "Comparatives", focus: "Gut, Besser, Am besten", activities: ["Comparing things"], homework: ["Compare two cities/people"] },
            { day: 39, title: "Conjunctions", focus: "Main clauses", activities: ["und, aber, oder, denn, sondern"], homework: ["Combine sentences"] },
            { day: 40, title: "Review & Mini-Test 4", focus: "Exam Letters", activities: ["Review Phase 4", "Exam style letter tasks"], homework: ["Write 2 exam-style letters"] }
        ]
    },
    {
        id: 5,
        title: "Phase 5: Exam Prep (Day 41-50)",
        description: "Focus: Goethe A1 Exam Format",
        days: [
            { day: 41, title: "Exam Overview", focus: "Format understanding", activities: ["Review exam parts"], homework: ["Read exam guidelines"] },
            { day: 42, title: "Listening (Hören)", focus: "Mock Exam", activities: ["Listening strategies", "Practice Test"], homework: ["Corrections"] },
            { day: 43, title: "Reading (Lesen)", focus: "Strategies", activities: ["Reading parts 1-3"], homework: ["Reading drills"] },
            { day: 44, title: "Reading Mock Exam", focus: "Timed Practice", activities: ["Full Reading Section"], homework: ["Review mistakes"] },
            { day: 45, title: "Writing (Schreiben)", focus: "Forms & Emails", activities: ["Form filling strategies", "Writing scenarios"], homework: ["3 Practice Emails"] },
            { day: 46, title: "Speaking (Sprechen)", focus: "Oral Exam", activities: ["Part 1/2/3 drills"], homework: ["Record speaking tasks"] },
            { day: 47, title: "Full Mock Exam 1", focus: "Timed Simulation", activities: ["Complete 60min exam"], homework: ["Relax"] },
            { day: 48, title: "Review Mock Exam 1", focus: "Analysis", activities: ["Go through errors", "Refine weak areas"], homework: ["Retake weak sections"] },
            { day: 49, title: "Full Mock Exam 2", focus: "Final Practice", activities: ["Complete Exam"], homework: ["Final polish"] },
            { day: 50, title: "Exam Readiness", focus: "Confidence", activities: ["Tips for exam day", "Relaxed conversation"], homework: ["Pack for exam / Rest"] }
        ]
    }
];
