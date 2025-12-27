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
                            content: "German shares the same 26 letters as English, but many have distinct pronunciations. Mastering these early is crucial for being understood.\n\n**Key Pronunciation Differences:**\n* **A**: 'ah' (open mouth, like 'Father')\n* **E**: 'eh' (like 'Pet') or 'ay' (like 'Say')\n* **I**: 'ee' (like 'See') - *Unlike English 'I' in 'Ice'*\n* **J**: 'yot' (Always sounds like English 'Y' in 'Yes')\n* **V**: 'fau' (Sounds like 'F' in 'Father' - rarely 'V')\n* **W**: 'vay' (Always sounds like English 'V' in 'Vest')\n* **Z**: 'tset' (Sharp 'TS' sound, like 'Cats')\n* **R**: Produced in the back of the throat (uvular R), unlike the rolled or English R.",
                            examples: [
                                { german: "Ja", english: "Yes (Pronounced: 'Ya')" },
                                { german: "Vater", english: "Father (Pronounced: 'Fah-ter')" },
                                { german: "Wasser", english: "Water (Pronounced: 'Vah-sser')" },
                                { german: "Zoo", english: "Zoo (Pronounced: 'Tsoo')" }
                            ]
                        },
                        {
                            title: "2. The Special Characters (Umlauts & Eszett)",
                            content: "These four extra characters give German its distinct sound.\n\n* **Ä (A-Umlaut)**: Like 'ae' in 'Melon', or open 'e'. (e.g., *Äpfel*)\n* **Ö (O-Umlaut)**: Form your lips for 'O' but try to say 'E' or 'A'. No English equivalent. (e.g., *Schön*)\n* **Ü (U-Umlaut)**: Form your lips for 'U' (pursed) but try to say 'E'. (e.g., *München*)\n* **ß (Eszett / Sharp S)**: A double 's' sound. Used after long vowels and diphthongs. It is NEVER a 'B'. (e.g., *Straße*)",
                            examples: [
                                { german: "Mädchen", english: "Girl (Med-chen)" },
                                { german: "Öl", english: "Oil (Oel)" },
                                { german: "Über", english: "Over/About (Ueber)" },
                                { german: "Groß", english: "Big (Gross)" }
                            ]
                        },
                        {
                            title: "3. Important Letter Combinations",
                            content: "Certain letter combos create new sounds (Diphthongs & Clusters):\n\n* **EI**: Pronounced 'Eye' (like 'Ice'). *Tip: The second letter tells the sound.*\n* **IE**: Pronounced 'Ee' (like 'See').\n* **EU / ÄU**: Pronounced 'Oy' (like 'Boy').\n* **SCH**: Pronounced 'Sh' (like 'Shoe').\n* **ST / SP** (at start of word): Pronounced 'Sht' / 'Shp' (like 'Stein', 'Sport').\n* **CH**: Two sounds: 'Ach-Laut' (back of throat like Loch Ness) after a, o, u. 'Ich-Laut' (hissing cat) after i, e, ä, ö, ü.",
                            examples: [
                                { german: "Wein", english: "Wine (Vine)" },
                                { german: "Bier", english: "Beer (Beer)" },
                                { german: "Deutsch", english: "German (Doyt-sh)" },
                                { german: "Sport", english: "Sport (Sh-port)" },
                                { german: "Ich", english: "I (Soft hissing 'ch')" }
                            ]
                        },
                        {
                            title: "4. Essential Greetings (Begrüßungen)",
                            content: "German culture values formality. Distinguish between friends and strangers.\n\n**Common Greetings:**\n* **Hallo**: Hello (Universal, informal)\n* **Guten Morgen**: Good Morning (Until ~10/11am)\n* **Guten Tag**: Good Day (Standard formal greeting, 11am-6pm)\n* **Guten Abend**: Good Evening (6pm onwards)\n\n**Farewells:**\n* **Auf Wiedersehen**: Goodbye (Formal standard)\n* **Tschüss**: Bye (Informal, very common)\n* **Bis später**: See you later",
                            examples: [
                                { german: "Guten Tag, Herr Müller.", english: "Good day, Mr. Müller." },
                                { german: "Hallo, Sarah!", english: "Hello, Sarah!" },
                                { german: "Tschüss, bis morgen!", english: "Bye, until tomorrow!" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d1-q1",
                            type: "choice",
                            question: "How is 'Ei' pronounced in German (e.g., 'Wein')?",
                            options: ["Like 'Ay' in Say", "Like 'Eye' in Ice", "Like 'Ee' in See"],
                            answer: "Like 'Eye' in Ice",
                            explanation: "Remember the 'Einstein' rule: Ei = Eye."
                        },
                        {
                            id: "d1-q2",
                            type: "choice",
                            question: "Which letter pair sounds like 'Sh' in 'Shoe'?",
                            options: ["Ch", "Sch", "Sp"],
                            answer: "Sch",
                            explanation: "Schule (School) starts with the 'Sh' sound."
                        },
                        {
                            id: "d1-q3",
                            type: "text",
                            question: "Translate: 'Goodbye' (Formal)",
                            answer: "Auf Wiedersehen",
                            explanation: "Literally 'Until we see again'."
                        },
                        {
                            id: "d1-q4",
                            type: "choice",
                            question: "How do you pronounce 'Sport' in German?",
                            options: ["Sport (like English)", "Shport", "Zport"],
                            answer: "Shport",
                            explanation: "S before P at the start of a word is pronounced 'Sh'."
                        },
                        {
                            id: "d1-q5",
                            type: "record",
                            question: "Pronounce: 'Ich spreche Deutsch'",
                            answer: "I speak German",
                            explanation: "Focus on the 'ch' soft sound and 'Sch'/'Sp' sounds."
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
                            content: "Pronouns are the building blocks of sentences. In German, they carry more grammatical information (gender, formality) than in English.\n\n**Singular Pronouns:**\n* **ich**: I\n* **du**: You (Informal - for friends, family, children)\n* **er**: He (also for Masculine nouns like *der Tisch*)\n* **sie**: She (also for Feminine nouns like *die Tür*)\n* **es**: It (also for Neutral nouns like *das Kind*)\n\n**Plural Pronouns:**\n* **wir**: We\n* **ihr**: You all (Informal plural - addressing a group of friends)\n* **sie**: They (lowercase 's')\n* **Sie**: You (Formal - Singular & Plural - Capitalized 'S')",
                            examples: [
                                { german: "Ich bin Tom.", english: "I am Tom." },
                                { german: "Wie heißt du?", english: "What is your name? (asking a friend)" },
                                { german: "Woher kommen Sie?", english: "Where are you from? (asking a boss/stranger)" },
                                { german: "Wir lernen Deutsch.", english: "We are learning German." }
                            ]
                        },
                        {
                            title: "2. The Formal 'Sie' vs Informal 'du'",
                            content: "This is a cultural cornerstone used to show respect.\n\n* Use **du** with: Family, close friends, children, animals, and God.\n* Use **Sie** with: Strangers, authority figures (police, doctors), older people, and in business settings.\n* Use **ihr** when talking to a group of 'du' people (e.g., \"Hey guys!\").",
                            examples: [
                                { german: "Hallo Max, wie geht es dir?", english: "Hi Max, how are you? (Friend)" },
                                { german: "Guten Tag Frau Weber, wie geht es Ihnen?", english: "Hello Ms. Weber, how are you? (Formal)" }
                            ]
                        },
                        {
                            title: "3. Introducing Yourself (Vorstellung)",
                            content: "Master these three basic facts about yourself:\n\n**1. Name**\n* Ich heiße [Name]. (I am called...)\n* Ich bin [Name]. (I am...)\n* Mein Name ist [Name]. (My name is...)\n\n**2. Origin (Herkunft)**\n* Ich komme aus [Letters]. (I come from...)\n* *Note: Some countries need an article: aus der Schweiz, aus der Türkei, aus den USA.*\n\n**3. Residence (Wohnort)**\n* Ich wohne in [City]. (I live in...)",
                            examples: [
                                { german: "Ich heiße Anna.", english: "My name is Anna." },
                                { german: "Ich komme aus Deutschland.", english: "I come from Germany." },
                                { german: "Ich wohne jetzt in London.", english: "I live in London now." },
                                { german: "Wer bist du?", english: "Who are you?" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d2-q1",
                            type: "choice",
                            question: "Which pronoun do you use for your boss?",
                            options: ["du", "ihr", "Sie"],
                            answer: "Sie",
                            explanation: "In a professional setting, always use the formal 'Sie'."
                        },
                        {
                            id: "d2-q2",
                            type: "text",
                            question: "Translate: 'I come from Spain.'",
                            answer: "Ich komme aus Spanien.",
                            explanation: "Use 'kommen aus' for origin."
                        },
                        {
                            id: "d2-q3",
                            type: "choice",
                            question: "Translation for: 'You (plural, informal)' - talking to kids?",
                            options: ["Sie", "ihr", "wir"],
                            answer: "ihr",
                            explanation: "'Ihr' is used for a group of people you would address individually as 'du'."
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
                            title: "1. Numbers 0-20 (Die Zahlen)",
                            content: "German numbers are straightforward. Pay attention to pronuncation.\n\n* **0-12 (Memorize these):** null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf.\n* **13-19 (Rule based):** Number + zehn. (e.g., dreizehn, vierzehn).\n* **Exceptions:**\n  * **16: sechzehn** (drop the 's' from sechs)\n  * **17: siebzehn** (drop the 'en' from sieben)\n* **20: zwanzig**",
                            examples: [
                                { german: "Ich bin achtzehn Jahre alt.", english: "I am 18 years old." },
                                { german: "Nummer fünf", english: "Number five." },
                                { german: "zwanzig Euro", english: "20 Euros." }
                            ]
                        },
                        {
                            title: "2. The Verb 'Sein' (To Be)",
                            content: "This is the most irregular and most critical verb. It denotes identity, age, profession, and adjectives.\n\n**Conjugation:**\n* ich **bin**\n* du **bist**\n* er/sie/es **ist**\n* wir **sind**\n* ihr **seid**\n* sie/Sie **sind**",
                            examples: [
                                { german: "Ich bin müde.", english: "I am tired." },
                                { german: "Wir sind glücklich.", english: "We are happy." },
                                { german: "Das ist gut.", english: "That is good." },
                                { german: "Bist du zu Hause?", english: "Are you at home?" }
                            ]
                        },
                        {
                            title: "3. The Verb 'Haben' (To Have)",
                            content: "Used for possession and many fixed expressions (like feeling hunger/thirst).\n\n**Conjugation:**\n* ich **habe**\n* du **hast** (irregular - drops b)\n* er/sie/es **hat** (irregular - drops b)\n* wir **haben**\n* ihr **habt**\n* sie/Sie **haben**",
                            examples: [
                                { german: "Ich habe eine Frage.", english: "I have a question." },
                                { german: "Er hat Zeit.", english: "He has time." },
                                { german: "Wir haben Geld.", english: "We have money." }
                            ]
                        },
                        {
                            title: "4. Common 'Haben' vs 'Sein' Phrases",
                            content: "German often uses 'haben' where English uses 'to be'.\n\n* **Hunger haben**: To be hungry (lit: to have hunger)\n* **Durst haben**: To be thirsty (lit: to have thirst)\n* **Angst haben**: To be scared (lit: to have fear)\n* **Recht haben**: To be right (lit: to have right)",
                            examples: [
                                { german: "Ich habe Hunger.", english: "I am hungry." },
                                { german: "Du hast Recht.", english: "You are right." },
                                { german: "Sie hat Angst.", english: "She is afraid." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d3-q1",
                            type: "text",
                            question: "Write the number 16 in German.",
                            answer: "sechzehn",
                            explanation: "Remember to drop the 's' from 'sechs' -> 'sechzehn'."
                        },
                        {
                            id: "d3-q2",
                            type: "choice",
                            question: "Translate: 'We are tired.'",
                            options: ["Wir haben müde.", "Wir sind müde.", "Wir seid müde."],
                            answer: "Wir sind müde.",
                            explanation: "Müde is an adjective, so use 'sein' (sind)."
                        },
                        {
                            id: "d3-q3",
                            type: "text",
                            question: "Translate: 'I am hungry.'",
                            answer: "Ich habe Hunger.",
                            explanation: "In German, you 'have' hunger."
                        },
                        {
                            id: "d3-q4",
                            type: "choice",
                            question: "What is the 'du' form of 'haben'?",
                            options: ["habst", "hast", "hat"],
                            answer: "hast",
                            explanation: "Du hast (irregular, drops the b)."
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
                            title: "1. Numbers 21-100 & Beyond",
                            content: "German uses a 'backwards' logic for 21-99: 'One-and-Twenty'.\n\n* **Formula:** [Unit] + und + [Ten]\n* **21:** einundzwanzig (NOT einsundzwanzig)\n* **35:** fünfunddreißig\n* **67:** siebenundsechzig\n* **100:** (ein)hundert\n* **200:** zweihundert\n* **1000:** (ein)tausend",
                            examples: [
                                { german: "fünfundzwanzig", english: "25" },
                                { german: "achtundvierzig", english: "48" },
                                { german: "hundertfünfzig", english: "150" },
                                { german: "zweitausend", english: "2000" }
                            ]
                        },
                        {
                            title: "2. Asking the Price (Preise)",
                            content: "Numbers are most often used for prices. In Germany, the decimal is a comma (,).\n\n* **Question:** Wie viel kostet das? (How much does that cost?)\n* **Question:** Was kostet das? (What does that cost?)\n* **Answer:** Das kostet [Number] Euro.\n* **Note:** 4,50€ is said as 'Vier Euro fünfzig'.",
                            examples: [
                                { german: "Wie viel kostet der Kaffee?", english: "How much is the coffee?" },
                                { german: "Das macht 12 Euro.", english: "That comes to 12 Euros." },
                                { german: "Das ist teuer!", english: "That is expensive!" },
                                { german: "Das ist billig.", english: "That is cheap." }
                            ]
                        },
                        {
                            title: "3. Colors (Farben) & Nuances",
                            content: "To be specific, use 'hell-' (light) and 'dunkel-' (dark) as prefixes.\n\n* **Basic:** Rot, Blau, Grün, Gelb, Schwarz, Weiß, Grau, Braun, Orange, Lila, Rosa.\n* **Nuanced:** hellblau (light blue), dunkelgrün (dark green).",
                            examples: [
                                { german: "Der Himmel ist hellblau.", english: "The sky is light blue." },
                                { german: "Die Nacht ist schwarz.", english: "The night is black." },
                                { german: "Deine Augen sind schön.", english: "Your eyes are beautiful." }
                            ]
                        },
                        {
                            title: "4. Asking Age",
                            content: "Use 'sein' (to be), not 'having' years.\n\n* **Wie alt bist du?** (Informal)\n* **Wie alt sind Sie?** (Formal)\n* **Answer:** Ich bin [x] Jahre alt.",
                            examples: [
                                { german: "Wie alt ist er?", english: "How old is he?" },
                                { german: "Er ist ein Jahr alt.", english: "He is one year old." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d4-q1",
                            type: "text",
                            question: "Write '78' in German words.",
                            answer: "achtundsiebzig",
                            explanation: "Eight-and-seventy."
                        },
                        {
                            id: "d4-q2",
                            type: "choice",
                            question: "How do you say 'Light Green'?",
                            options: ["grünhell", "hellgrün", "lichtgrün"],
                            answer: "hellgrün",
                            explanation: "Prefix 'hell-' goes before the color."
                        },
                        {
                            id: "d4-q3",
                            type: "text",
                            question: "Translate: 'How much is the tea?'",
                            answer: "Wie viel kostet der Tee?",
                            explanation: "Use 'Wie viel kostet...'."
                        },
                        {
                            id: "d4-q4",
                            type: "text",
                            question: "Say: 3,50€",
                            answer: "Drei Euro fünfzig",
                            explanation: "Pronounce the Euro and cents naturally."
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
                            title: "1. Days of the Week (Die Wochentage)",
                            content: "German calendars start on Monday.\n\n* **Days:** Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.\n* **Terms:** Heute (Today), Morgen (Tomorrow), Gestern (Yesterday).\n* **Das Wochenende:** The Weekend.\n* **Preposition:** ALWAYS use **am** (an + dem) for days. (e.g., *am Montag*).",
                            examples: [
                                { german: "Was machst du am Sonntag?", english: "What are you doing on Sunday?" },
                                { german: "Am Samstag schlafe ich lange.", english: "On Saturday I sleep late." },
                                { german: "Heute ist Freitag.", english: "Today is Friday." }
                            ]
                        },
                        {
                            title: "2. Months & Seasons (Monate & Jahreszeiten)",
                            content: "* **Seasons:** der Frühling, der Sommer, der Herbst, der Winter.\n* **Months:** Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.\n* **Preposition:** ALWAYS use **im** (in + dem) for months and seasons. (e.g., *im Sommer*, *im Mai*).",
                            examples: [
                                { german: "Mein Geburtstag ist im Juli.", english: "My birthday is in July." },
                                { german: "Im Winter schneit es.", english: "In winter it knows." },
                                { german: "Der Frühling ist warm.", english: "Spring is warm." }
                            ]
                        },
                        {
                            title: "3. Expressing Likes (Gern)",
                            content: "To say you like *doing* an action, use the adverb **gern** (gladly) after the verb.\n\n* **Correct:** Ich spiele gern Fußball. (Lit: I play gladly football.)\n* **Incorrect:** Ich mag spielen Fußball. (Don't use 'mögen' for actions yet!)\n* **Negation:** Ich singe **nicht gern**.",
                            examples: [
                                { german: "Trinkst du gern Kaffee?", english: "Do you like drinking coffee?" },
                                { german: "Ich lerne gern Deutsch.", english: "I like learning German." },
                                { german: "Er kocht nicht gern.", english: "He doesn't like cooking." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d5-q1",
                            type: "choice",
                            question: "Preposition for 'August'?",
                            options: ["am", "im", "um"],
                            answer: "im",
                            explanation: "Months take 'im' (in the)."
                        },
                        {
                            id: "d5-q2",
                            type: "text",
                            question: "Translate: 'I like to swim.'",
                            answer: "Ich schwimme gern.",
                            explanation: "Verb 'schwimme' + 'gern'."
                        },
                        {
                            id: "d5-q3",
                            type: "choice",
                            question: "What comes after Dienstag?",
                            options: ["Montag", "Mittwoch", "Donnerstag"],
                            answer: "Mittwoch",
                            explanation: "The order is Mo, Di, Mi, Do, Fr, Sa, So."
                        },
                        {
                            id: "d5-q4",
                            type: "text",
                            question: "Translate: 'On Monday'",
                            answer: "Am Montag",
                            explanation: "Days take 'am'."
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
                            title: "1. Regular Verb Conjugation (The 'EN' Rule)",
                            content: "Verbs are the engine of the sentence. Regular verbs follow a strict pattern.\n\n**Pattern:** Remove '-en' from the infinitive (e.g., *kommen* -> *komm*), then add endings:\n* ich: **-e** (komme)\n* du: **-st** (kommst)\n* er/sie/es: **-t** (kommt)\n* wir: **-en** (kommen)\n* ihr: **-t** (kommt)\n* sie/Sie: **-en** (kommen)\n\n**Common Regular Verbs:** *machen* (to do), *lernen* (to learn), *hören* (to hear), *sagen* (to say), *trinken* (to drink), *spielen* (to play).",
                            examples: [
                                { german: "Was machst du?", english: "What are you doing?" },
                                { german: "Wir lernen zusammen.", english: "We are learning together." },
                                { german: "Ich trinke Wasser.", english: "I drink water." }
                            ]
                        },
                        {
                            title: "2. Sentence Structure (Position 2)",
                            content: "The Golden Rule: **The conjugated verb is ALWAYS in position 2.**\n\n* **Standard (Subject first):**\n  * [Ich] [komme] [heute] [nach Hause].\n  * (1) Subject, (2) Verb, (3) Time, (4) Place.\n\n* **Inversion (Emphasis):** If you start with Time or Place, the Verb STAYS in position 2, and the Subject moves to position 3.\n  * [Heute] [komme] [ich] [nach Hause].\n  * (1) Time, (2) Verb, (3) Subject.",
                            examples: [
                                { german: "Ich wohne in Berlin.", english: "I live in Berlin." },
                                { german: "In Berlin wohne ich.", english: "In Berlin live I. (Correct structure!)" },
                                { german: "Morgen lerne ich Deutsch.", english: "Tomorrow I learn German." }
                            ]
                        },
                        {
                            title: "3. Extending Sentences",
                            content: "Use 'und' (and) or 'aber' (but) to connect two main sentences. These words occupy position 0 (they don't count for position 2).\n\n* Ich bin müde, **aber** ich lerne.",
                            examples: [
                                { german: "Der Kaffee ist gut und er ist billig.", english: "The coffee is good and it is cheap." },
                                { german: "Ich möchte kommen, aber ich habe keine Zeit.", english: "I would like to come, but I have no time." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d6-q1",
                            type: "text",
                            question: "Conjugate 'trinken' for 'du'.",
                            answer: "trinkst",
                            explanation: "Stem 'trink' + 'st'."
                        },
                        {
                            id: "d6-q2",
                            type: "choice",
                            question: "Correct order: 'Heute / wir / machen / Sport'.",
                            options: ["Heute wir machen Sport.", "Heute machen wir Sport.", "Heute machen Sport wir."],
                            answer: "Heute machen wir Sport.",
                            explanation: "Verb 'machen' must be in Position 2. Subject 'wir' follows immediately."
                        },
                        {
                            id: "d6-q3",
                            type: "text",
                            question: "Translate: 'I play football'.",
                            answer: "Ich spiele Fußball.",
                            explanation: "Standard SVO sentence."
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
                            title: "1. The Big 3: Der, Die, Das (Gender)",
                            content: "Grammar gender is random, but there are some helpers:\n\n* **Der (Masculine):** Days (Montag), Months (Mai), Seasons, Directions (Nord), Alcohol & Cars (*mostly*).\n* **Die (Feminine):** Endings: -ung, -heit, -keit, -schaft, -tät, -ion, -ei. Numbers (die Eins), Fruits (*mostly*).\n* **Das (Neutral):** Endings: -chen, -lein (diminutives), -ment, -um. Colors, Metals.",
                            examples: [
                                { german: "die Freiheit", english: "Freedom (-heit = die)" },
                                { german: "das Mädchen", english: "Girl (-chen = das)" },
                                { german: "der Mercedes", english: "The Mercedes (Car = der)" }
                            ]
                        },
                        {
                            title: "2. The Indefinite Article (Ein/Eine)",
                            content: "Used for 'a' or 'an'.\n\n* **Masculine (der) -> ein**\n* **Neutral (das) -> ein**\n* **Feminine (die) -> eine**\n* **Plural:** No indefinite article (like English 'books', not 'a books').",
                            examples: [
                                { german: "Das ist ein Tisch (der).", english: "That is a table." },
                                { german: "Ich habe eine Lampe (die).", english: "I have a lamp." },
                                { german: "Das sind Bücher.", english: "Those are books. (No 'ein')" }
                            ]
                        },
                        {
                            title: "3. Plural Formation Rules",
                            content: "There are 5 ways to make plurals. Guessing strategy:\n\n* **-n / -en:** Most feminine nouns (die Frau -> die Frauen).\n* **-e:** Most masculine/neutral one-syllable nouns (der Tag -> die Tage).\n* **-r / -er:** Most neutral one-syllable nouns (das Kind -> die Kinder).\n* **-s:** Loan words (das Auto -> die Autos).\n* **No change:** Words ending in -el, -en, -er (der Löffel -> die Löffel).",
                            examples: [
                                { german: "die Blume -> die Blumen", english: "The flower -> flowers" },
                                { german: "der Freund -> die Freunde", english: "The friend -> friends" },
                                { german: "das Bild -> die Bilder", english: "The picture -> pictures" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d7-q1",
                            type: "choice",
                            question: "Article for 'Zeitung' (Newspaper)?",
                            options: ["der", "die", "das"],
                            answer: "die",
                            explanation: "Ends in -ung, so it is always feminine (die)."
                        },
                        {
                            id: "d7-q2",
                            type: "text",
                            question: "Plural of 'die Lampe'?",
                            answer: "die Lampen",
                            explanation: "Feminine nouns usually add -n."
                        },
                        {
                            id: "d7-q3",
                            type: "choice",
                            question: "Indefinite article: 'Das ist ___ Haus (das).'",
                            options: ["ein", "eine", "einen"],
                            answer: "ein",
                            explanation: "Das Haus -> ein Haus."
                        },
                        {
                            id: "d7-q4",
                            type: "text",
                            question: "Translate: 'That is a car.'",
                            answer: "Das ist ein Auto.",
                            explanation: "Das Auto -> ein Auto."
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
                            title: "1. The W-Questions (W-Fragen)",
                            content: "Essential for gathering information.\n\n* **Wer?** (Who? - Person)\n* **Was?** (What? - Thing)\n* **Wo?** (Where? - Location/Place)\n* **Wann?** (When? - Time/Date)\n* **Wie?** (How? - Manner/Quantity)\n* **Warum / Wieso?** (Why? - Reason)",
                            examples: [
                                { german: "Wer ist das?", english: "Who is that?" },
                                { german: "Was machst du?", english: "What are you doing?" },
                                { german: "Wann kommst du?", english: "When are you coming?" }
                            ]
                        },
                        {
                            title: "2. Woher vs Wohin (Motion)",
                            content: "German distinguishes between location and motion.\n\n* **Wo?** = Where (Stationary). Uses Dative (later).\n* **Woher?** = Where from (Origin). (Woher kommst du?)\n* **Wohin?** = Where to (Destination). (Wohin gehst du?)",
                            examples: [
                                { german: "Wo wohnst du?", english: "Where do you live? (Location)" },
                                { german: "Woher kommen Sie?", english: "Where do you come from? (Origin)" },
                                { german: "Wohin fahren wir?", english: "Where are we driving to? (Destination)" }
                            ]
                        },
                        {
                            title: "3. Building W-Questions",
                            content: "Structure: **[W-Word] + [Verb] + [Subject]?**\n\nThe verb MUST be in position 2, immediately after the W-Word.",
                            examples: [
                                { german: "Wie (1) heißt (2) deine Mutter (3)?", english: "What is your mother's name?" },
                                { german: "Warum (1) lernst (2) du (3) Deutsch?", english: "Why are you learning German?" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d8-q1",
                            type: "text",
                            question: "Ask: 'Where are you going?' (du)",
                            answer: "Wohin gehst du?",
                            explanation: "Use 'Wohin' for movement towards something."
                        },
                        {
                            id: "d8-q2",
                            type: "choice",
                            question: "Meaning of 'Wer'?",
                            options: ["Where", "Who", "When"],
                            answer: "Who",
                            explanation: "Warning: 'Wer' sounds like 'Where', but means 'Who'!"
                        },
                        {
                            id: "d8-q3",
                            type: "text",
                            question: "Translate: 'Why is it cold?'",
                            answer: "Warum ist es kalt?",
                            explanation: "Warum = Why."
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
                            title: "1. Yes/No Questions (Entscheidungsfragen)",
                            content: "To ask a question without a question word (Yes/No answer), Start with the **Verb**.\n\n* **Structure:** [Verb] + [Subject] ...?\n* **Statement:** Du kommst aus Berlin.\n* **Question:** Kommst du aus Berlin?",
                            examples: [
                                { german: "Lernst du Deutsch?", english: "Are you learning German?" },
                                { german: "Ist das dein Auto?", english: "Is that your car?" },
                                { german: "Trinken Sie Kaffee?", english: "Do you drink coffee? (Formal)" }
                            ]
                        },
                        {
                            title: "2. Negation: Nicht vs Kein",
                            content: "How to say 'No' or 'Not'.\n\n**Use 'KEIN' (None/No) for:**\n* Nouns with indefinite articles (ein/eine).\n* Nouns with NO article.\n* *Formula: Ich habe ein Auto. -> Ich habe kein Auto.*\n\n**Use 'NICHT' (Not) for:**\n* Verbs (Ich schlafe nicht).\n* Adjectives (Er ist nicht nett).\n* Proper Nouns (Das ist nicht Max).\n* Nouns with DEFINITE articles (Das ist nicht das Auto von Tom).",
                            examples: [
                                { german: "Ich habe keinen Hunger.", english: "I have no hunger. (Kein)" },
                                { german: "Das ist nicht gut.", english: "That is not good. (Nicht)" },
                                { german: "Ich wohne nicht in Berlin.", english: "I don't live in Berlin. (Nicht)" }
                            ]
                        },
                        {
                            title: "3. The 'Doch' Response",
                            content: "If someone asks a **negative question**, and you want to say **YES**, you use **Doch**.\n\n* **Q:** Hast du keinen Hunger? (Aren't you hungry?)\n* **A (Yes I am):** Doch! Ich habe Hunger!\n* **A (No I'm not):** Nein, ich habe keinen Hunger.",
                            examples: [
                                { german: "Kommst du nicht?", english: "Are you not coming?" },
                                { german: "Doch! Ich komme gleich.", english: "Yes (on the contrary)! I'm coming soon." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d9-q1",
                            type: "text",
                            question: "Make a question: 'Du bist müde.'",
                            answer: "Bist du müde?",
                            explanation: "Verb 'Bist' comes first."
                        },
                        {
                            id: "d9-q2",
                            type: "choice",
                            question: "He is ___ (not) my brother.",
                            options: ["kein", "nicht"],
                            answer: "nicht",
                            explanation: "'My brother' is a specific person (defined), so use 'nicht'. Also, possessives usually take nicht."
                        },
                        {
                            id: "d9-q3",
                            type: "text",
                            question: "Reply 'Yes!' to: 'Wohnst du nicht hier?'",
                            answer: "Doch!",
                            explanation: "Doch contradicts the negative question."
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
                            title: "Phase 1 Review (Wiederholung)",
                            content: "You have completed the first major milestone! You can now:\n\n* **Greet people** (Hallo, Guten Tag).\n* **Introduce yourself** (Ich heiße... Ich komme aus...).\n* **Count & Shop** (Numbers, Prices, Colors).\n* **talk about basic needs** (Hunger haben, müde sein).\n* **Build sentences** (SVO, Inversion).\n* **Ask questions** (Wer, Wo, Wann, Wohin).\n* **Avoid pitfalls** (du vs Sie, kein vs nicht).",
                            examples: [
                                { german: "Ich spreche ein bisschen Deutsch.", english: "I speak a little German." },
                                { german: "Das macht sehr viel Spaß.", english: "That is a lot of fun." }
                            ]
                        },
                        {
                            title: "Mock Conversation: At the Café",
                            content: "**Kellner (Waiter):** Guten Tag! Was möchten Sie?\n**Gast (Guest):** Guten Tag. Ich möchte einen Kaffee und einen Kuchen, bitte.\n**Kellner:** Gerne. Mit Milch und Zucker?\n**Gast:** Ja, bitte. Was kostet das?\n**Kellner:** Das macht 8 Euro.\n**Gast:** Hier, bitte. Tschüss!\n**Kellner:** Auf Wiedersehen!",
                            examples: []
                        }
                    ],
                    homework: [
                        {
                            id: "d10-q1",
                            type: "choice",
                            question: "Big Review: Plural of 'das Kind'?",
                            options: ["die Kinde", "die Kinder", "die Kinders"],
                            answer: "die Kinder",
                            explanation: "Neutral monosyllabic noun -> -er ending."
                        },
                        {
                            id: "d10-q2",
                            type: "text",
                            question: "Translate: 'We do not have time.'",
                            answer: "Wir haben keine Zeit.",
                            explanation: "Zeit is a noun (undefined), so use 'keine' instead of 'nicht'."
                        },
                        {
                            id: "d10-q3",
                            type: "text",
                            question: "Ask: 'Are you hungry?'",
                            answer: "Hast du Hunger?",
                            explanation: "Use 'haben' for Hunger, verb first."
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
            {
                day: 11,
                title: "Family & Possessives",
                focus: "mein, dein, sein...",
                activities: ["Family vocabulary", "Possessive articles"],
                homework: ["Describe your family tree"],
                details: {
                    sections: [
                        {
                            title: "1. Family Vocabulary (Die Familie)",
                            content: "Family members usually follow natural gender. \\n\\n* **Parents (Die Eltern):** Der Vater (Father), Die Mutter (Mother).\\n* **Siblings (Die Geschwister):** Der Bruder (Brother), Die Schwester (Sister).\\n* **Grandparents (Die Großeltern):** Der Opa (Grandpa), Die Oma (Grandma).\\n* **Children (Die Kinder):** Der Sohn (Son), Die Tochter (Daughter).\\n* **Relatives:** Der Onkel (Uncle), Die Tante (Aunt), Der Cousin (Cousin - male), Die Cousine (Cousin - female).",
                            examples: [
                                { german: "Das ist meine Mutter.", english: "This is my mother." },
                                { german: "Ich habe zwei Brüder.", english: "I have two brothers." },
                                { german: "Meine Großeltern wohnen in Berlin.", english: "My grandparents live in Berlin." }
                            ]
                        },
                        {
                            title: "2. Possessive Articles (Possessivartikel)",
                            content: "These words replace 'the' or 'a' to show ownership. In the **Nominative** case, they follow the gender of the noun they are attached to.\\n\\n| Owner | (Masculine / Neutral) | (Feminine / Plural) |\\n|---|---|---|\\n| **ich** (my) | mein | meine |\\n| **du** (your) | dein | deine |\\n| **er/es** (his/its) | sein | seine |\\n| **sie** (her) | ihr | ihre |\\n| **wir** (our) | unser | unsere |\\n| **ihr** (your pl.) | euer | eure |\\n| **Sie/sie** (Your/their) | Ihr / ihr | Ihre / ihre |\\n\\n**Rule:** If the noun is 'die', add an 'e' to the owner word.",
                            examples: [
                                { german: "Ist das dein Vater?", english: "Is that your father? (Vater = Maskulin)" },
                                { german: "Nein, das ist mein Onkel.", english: "No, that is my uncle." },
                                { german: "Unsere Kinder sind laut.", english: "Our children are loud. (Kinder = Plural)" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d11-q1",
                            type: "text",
                            question: "Translate: 'My sister is nice.'",
                            answer: "Meine Schwester ist nett.",
                            explanation: "Schwester is feminine, so use 'meine'."
                        },
                        {
                            id: "d11-q2",
                            type: "choice",
                            question: "Translate: 'His car' (Das Auto)",
                            options: ["sein Auto", "seine Auto", "ihr Auto"],
                            answer: "sein Auto",
                            explanation: "Auto is Neutral -> sein. Owner is 'er' -> sein."
                        },
                        {
                            id: "d11-q3",
                            type: "text",
                            question: "Translate: 'Her brother'",
                            answer: "Ihr Bruder",
                            explanation: "Owner is 'sie' (her) -> ihr. Bruder is Masc -> no 'e'."
                        }
                    ]
                }
            },
            {
                day: 12,
                title: "Time & Routine",
                focus: "Daily Verbs",
                activities: ["Telling time", "Routine verbs"],
                homework: ["Write daily routine with times"],
                details: {
                    sections: [
                        {
                            title: "1. Asking for the Time",
                            content: "**Wie spät ist es?** OR **Wie viel Uhr ist es?**\\nBoth mean 'What time is it?'.\\n\\n**The word 'Uhr':**\\n* Used for 'o'clock' (Es ist 3 Uhr).\\n* Used for the physical clock (Die Uhr).\\n* Used for the abstract concept of time notation.",
                            examples: [
                                { german: "Entschuldigung, wie spät ist es?", english: "Excuse me, what time is it?" }
                            ]
                        },
                        {
                            title: "2. Official Time (24-Hour)",
                            content: "Used for schedules, trains, TV, appointments.\\n**Format:** [Hour] Uhr [Minutes].\\n\\n* 14:00 -> Es ist vierzehn Uhr.\\n* 14:30 -> Es ist vierzehn Uhr dreißig.\\n* 09:15 -> Es ist neun Uhr fünfzehn.",
                            examples: [
                                { german: "Der Zug kommt um 17 Uhr 20.", english: "The train comes at 17:20." }
                            ]
                        },
                        {
                            title: "3. Unofficial Time (12-Hour)",
                            content: "Used in conversation. Complex but common.\\n\\n* **Full hour:** Ein Uhr (am/pm implied).\\n* **Half hour (Halo):** 'Halb' refers to the **NEXT** hour. (14:30 = **halb drei** - half way to three).\\n* **Quarters:**\\n  * 14:15 = Viertel nach zwei (Quarter past two).\\n  * 14:45 = Viertel vor drei (Quarter to three).\\n* **Minutes:**\\n  * 14:05 = Fünf nach zwei.\\n  * 14:55 = Fünf vor drei.",
                            examples: [
                                { german: "Es ist halb zehn.", english: "It is 9:30." },
                                { german: "Es ist Viertel vor acht.", english: "It is 7:45." }
                            ]
                        },
                        {
                            title: "4. Daily Routine Verbs",
                            content: "Common verbs for your day:\\n* **aufstehen** (to get up - separable)\\n* **frühstücken** (to eat breakfast)\\n* **arbeiten** (to work)\\n* **kochen** (to cook)\\n* **fernsehen** (to watch TV - separable)\\n* **einkaufen** (to shop - separable)\\n* **schlafen** (to sleep)",
                            examples: [
                                { german: "Ich frühstücke um 8 Uhr.", english: "I eat breakfast at 8." },
                                { german: "Er kocht am Abend.", english: "He cooks in the evening." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d12-q1",
                            type: "text",
                            question: "Translate: 'It is 8:30' (Informal)",
                            answer: "Es ist halb neun.",
                            explanation: "Halb + Next Hour (9)."
                        },
                        {
                            id: "d12-q2",
                            type: "choice",
                            question: "10:15 (Informal)?",
                            options: ["Viertel nach zehn", "Viertel vor zehn", "Halb zehn"],
                            answer: "Viertel nach zehn",
                            explanation: "Quarter PAST ten."
                        },
                        {
                            id: "d12-q3",
                            type: "text",
                            question: "Translate: 'It is 3 o'clock.'",
                            answer: "Es ist drei Uhr.",
                            explanation: "Use 'Uhr' for full hours."
                        }
                    ]
                }
            },
            {
                day: 13,
                title: "Separable Verbs",
                focus: "Structure (an-rufen)",
                activities: ["Concept of prefixes", "Sentence bracket"],
                homework: ["10 sentences with separable verbs"],
                details: {
                    sections: [
                        {
                            title: "1. The Concept of Separation",
                            content: "Some German verbs have two parts: a **Prefix** and a **Main Verb**. In the present tense (simple sentences), the prefix detaches and moves to the **VERY END** of the sentence.\\n\\n* **Verb:** anrufen (to call)\\n* **Prefix:** an-\\n* **Main:** rufen\\n* **Sentence:** Ich **rufe** meine Mutter **an**.",
                            examples: [
                                { german: "Ich stehe um 7 Uhr auf.", english: "I get up at 7." },
                                { german: "Wir kaufen im Supermarkt ein.", english: "We shop in the supermarket." }
                            ]
                        },
                        {
                            title: "2. Common Separable Prefixes",
                            content: "Memorize these prefixes. They are almost always stressed.\\n\\n* **ab-**: abfahren (depart), abholen (pick up)\\n* **an-**: anfangen (begin), ankommen (arrive), anrufen (call)\\n* **auf-**: aufstehen (get up), aufräumen (clean up)\\n* **aus-**: ausgehen (go out), aussehen (look/appear)\\n* **ein-**: einkaufen (shop), einladen (invite)\\n* **mit-**: mitkommen (come with), mitbringen (bring along)\\n* **vor-**: vorlesen (read aloud), vorbereiten (prepare)",
                            examples: [
                                { german: "Der Zug fährt um 9 Uhr ab.", english: "The train departs at 9." },
                                { german: "Kommst du heute mit?", english: "Are you coming along today?" }
                            ]
                        },
                        {
                            title: "3. Sentence Logic (The Bracket)",
                            content: "The conjugated verb and the prefix form a 'bracket' around the sentence contents.\\n\\n**[Subject] [Verb Part 1] [Time/Object/Place] [Prefix].**\\n\\n* Er (1) **liest** (2) das Buch (3) **vor** (Ende).",
                            examples: []
                        }
                    ],
                    homework: [
                        {
                            id: "d13-q1",
                            type: "text",
                            question: "Sort: 'kauft / er / ein / am Montag'.",
                            answer: "Er kauft am Montag ein.",
                            explanation: "Verb 'kauft' Pos 2, prefix 'ein' at the end."
                        },
                        {
                            id: "d13-q2",
                            type: "choice",
                            question: "Verb: 'fernsehen' (to watch TV). Ich ___ abends ___.",
                            options: ["sehe / fern", "fern / sehe"],
                            answer: "sehe / fern",
                            explanation: "Ich sehe ... fern."
                        },
                        {
                            id: "d13-q3",
                            type: "text",
                            question: "Translate: 'The movie starts.' (anfangen)",
                            answer: "Der Film fängt an.",
                            explanation: "anfangen is separable -> fängt ... an."
                        }
                    ]
                }
            },
            {
                day: 14,
                title: "Food & Accusative Case",
                focus: "Den/Einen (Direct Object)",
                activities: ["Food vocab", "Ordering basics", "Accusative intro"],
                homework: ["Write a restaurant dialogue"],
                details: {
                    sections: [
                        {
                            title: "1. The Accusative Case (Der Akkusativ)",
                            content: "The subject acts, the object receives. In German, the direct object is in the Accusative case.\\n\\n**THE GOLDEN RULE:** Only the **MASCULINE** article changes. Everything else stays the same!\\n\\n* **Der -> Den**\\n* **Ein -> Einen**\\n* **Kein -> Keinen**\\n\\n* Die -> Die / Eine -> Eine\\n* Das -> Das / Ein -> Ein\\n* Die (Pl) -> Die",
                            examples: [
                                { german: "Ich habe einen Bruder (Masc).", english: "I have a brother. (Accusative)" },
                                { german: "Ich habe ein Auto (Neut).", english: "I have a car. (No change)" },
                                { german: "Er isst den Apfel (Masc).", english: "He eats the apple." }
                            ]
                        },
                        {
                            title: "2. Food Vocabulary (Essen & Trinken)",
                            content: "* **Der:** Apfel (Apple), Kaffee (Coffee), Tee (Tea), Fisch (Fish), Kuchen (Cake), Käse (Cheese).\\n* **Die:** Banane (Banana), Orange (Orange), Milch (Milk), Wurst (Sausage).\\n* **Das:** Brot (Bread), Wasser (Water), Ei (Egg), Fleisch (Meat), Gemüse (Vegetables), Obst (Fruit).",
                            examples: [
                                { german: "Ich esse gern Obst.", english: "I like eating fruit." },
                                { german: "Trinkst du einen Kaffee?", english: "Are you drinking a coffee?" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d14-q1",
                            type: "choice",
                            question: "Ich kaufe ___ (der) Tisch.",
                            options: ["der", "den", "dem"],
                            answer: "den",
                            explanation: "Tisch is Masc Accusative (Direct Object) -> den."
                        },
                        {
                            id: "d14-q2",
                            type: "text",
                            question: "Accusative: 'ein' + 'Salat' (der).",
                            answer: "einen Salat",
                            explanation: "Der Salat -> einen Salat."
                        },
                        {
                            id: "d14-q3",
                            type: "text",
                            question: "Translate: 'I enter the room.' (Der Raum)",
                            answer: "Ich betrete den Raum.",
                            explanation: "Room is the direct object."
                        }
                    ]
                }
            },
            {
                day: 15,
                title: "Modals 1: Können & Wollen",
                focus: "Ability & Desire",
                activities: ["Can/Want usage"],
                homework: ["Write what you can/want to do"],
                details: {
                    sections: [
                        {
                            title: "1. Understanding Modal Verbs",
                            content: "Modal verbs modify another verb (the 'infinitive').\\n* **Sentence Structure:** [Subject] [Modal Verb] ... [Infinitive at END].\\n* *Example:* Ich **kann** gut **schwimmen**.",
                            examples: []
                        },
                        {
                            title: "2. Können (Ability/Possibility)",
                            content: "Means 'can' or 'to be able to'.\\n\\n* **ich kann** (irregular!)\\n* **du kannst**\\n* **er/sie/es kann** (same as 'ich')\\n* **wir können**\\n* **ihr könnt**\\n* **sie/Sie können**",
                            examples: [
                                { german: "Ich kann nicht kommen.", english: "I cannot come." },
                                { german: "Kannst du mir helfen?", english: "Can you help me?" }
                            ]
                        },
                        {
                            title: "3. Wollen (Strong Desire)",
                            content: "Means 'to want'. Often used for plans.\\n\\n* **ich will** (irregular!)\\n* **du willst**\\n* **er/sie/es will** (same as 'ich')\\n* **wir wollen**\\n* **ihr wollt**\\n* **sie/Sie wollen**",
                            examples: [
                                { german: "Ich will nach Hause gehen.", english: "I want to go home." },
                                { german: "Willst du Pizza essen?", english: "Do you want to eat pizza?" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d15-q1",
                            type: "text",
                            question: "Translate: 'He can dance.'",
                            answer: "Er kann tanzen.",
                            explanation: "Er kann. Infinitive 'tanzen' at end."
                        },
                        {
                            id: "d15-q2",
                            type: "choice",
                            question: "Wir ___ Deutsch lernen.",
                            options: ["wollen", "will", "willt"],
                            answer: "wollen",
                            explanation: "Wir conjugation fits subject."
                        },
                        {
                            id: "d15-q3",
                            type: "text",
                            question: "Fix order: 'Er will essen Pizza.'",
                            answer: "Er will Pizza essen.",
                            explanation: "Infinitive MUST be at the end."
                        }
                    ]
                }
            },
            {
                day: 16,
                title: "Modals 2: Müssen & Dürfen",
                focus: "Obligation & Permission",
                activities: ["Must/Allowed usage"],
                homework: ["Rules in Germany vs Vietnam"],
                details: {
                    sections: [
                        {
                            title: "1. Müssen (Necessity/Duty)",
                            content: "Means 'must' or 'have to'.\\n\\n* **ich muss**\\n* **du musst**\\n* **er/sie/es muss**\\n* **wir müssen**\\n* **ihr müsst**\\n* **sie/Sie müssen**\\n\\n*Hint: Use this for external obligations (work, school).*",
                            examples: [
                                { german: "Ich muss arbeiten.", english: "I have to work." },
                                { german: "Wir müssen jetzt gehen.", english: "We have to go now." }
                            ]
                        },
                        {
                            title: "2. Dürfen (Permission)",
                            content: "Means 'to be allowed to'.\\n\\n* **ich darf**\\n* **du darfst**\\n* **er/sie/es darf**\\n* **wir dürfen**\\n* **ihr dürft**\\n* **sie/Sie dürfen**",
                            examples: [
                                { german: "Darf ich hier rauchen?", english: "May I smoke here?" },
                                { german: "Darf ich reinkommen?", english: "May I come in?" }
                            ]
                        },
                        {
                            title: "3. Negation Nuances",
                            content: "* **Nicht dürfen:** Strictly forbidden. (Du darfst das nicht essen = Don't you dare eat that!)\\n* **Nicht müssen:** Not necessary (optional). (Du musst das nicht essen = You don't have to eat it if you don't want to.)",
                            examples: []
                        }
                    ],
                    homework: [
                        {
                            id: "d16-q1",
                            type: "choice",
                            question: "Children ___ not smoke. (Forbidden)",
                            options: ["müssen", "dürfen"],
                            answer: "dürfen",
                            explanation: "Nicht dürfen = forbidden."
                        },
                        {
                            id: "d16-q2",
                            type: "text",
                            question: "Conjugate: 'Ich' form of 'müssen'.",
                            answer: "muss",
                            explanation: "Vowel changes: ü -> u."
                        },
                        {
                            id: "d16-q3",
                            type: "text",
                            question: "Translate: 'We must wait.'",
                            answer: "Wir müssen warten.",
                            explanation: "Müssen + Infinitive."
                        }
                    ]
                }
            },
            {
                day: 17,
                title: "Modals 3: Möchten & Shopping",
                focus: "Polite wishes",
                activities: ["Ordering politely", "Grocery shopping"],
                homework: ["Write shopping list & dialogue"],
                details: {
                    sections: [
                        {
                            title: "1. Möchten (Polite Wish)",
                            content: "Technically a form of 'mögen', but used as 'would like'. Use this in restaurants and shops!\\n\\n* **ich möchte**\\n* **du möchtest**\\n* **er/sie/es möchte**\\n* **wir möchten**\\n* **ihr möchtet**\\n* **sie/Sie möchten**",
                            examples: [
                                { german: "Ich möchte zahlen, bitte.", english: "I would like to pay, please." },
                                { german: "Was möchten Sie trinken?", english: "What would you like to drink?" }
                            ]
                        },
                        {
                            title: "2. Shopping Dialogue Structure",
                            content: "**Verkäufer (Seller):**\\n* Bitte schön? (May I help you?)\\n* Sonst noch etwas? (Anything else?)\\n* Das macht 5 Euro.\\n\\n**Kunde (Customer):**\\n* Ich hätte gern... (I would like to have...)\\n* Ich möchte... (I would like...)\\n* Ich brauche... (I need...)\\n* Was kostet das?",
                            examples: []
                        }
                    ],
                    homework: [
                        {
                            id: "d17-q1",
                            type: "text",
                            question: "Polite order: 'I want a beer.' -> 'I ___ ___ a beer.'",
                            answer: "möchte ein",
                            explanation: "Ich möchte ein Bier."
                        },
                        {
                            id: "d17-q2",
                            type: "choice",
                            question: "Translate: 'Anything else?'",
                            options: ["Sonst noch etwas?", "Was noch?", "Alles gut?"],
                            answer: "Sonst noch etwas?",
                            explanation: "Standard phrase in shops."
                        },
                        {
                            id: "d17-q3",
                            type: "text",
                            question: "Translate: 'I would like to pay.'",
                            answer: "Ich möchte bezahlen.",
                            explanation: "Möchten + Infinitive."
                        }
                    ]
                }
            },
            {
                day: 18,
                title: "Furniture & Adjectives",
                focus: "Description",
                activities: ["House vocab", "Basic Adjectives"],
                homework: ["Describe your dream house"],
                details: {
                    sections: [
                        {
                            title: "1. Furniture Vocabulary (Möbel)",
                            content: "Things you find in a house.\\n\\n* **Der:** Tisch (Table), Stuhl (Chair), Schrank (Cupboard/Wardrobe), Spiegel (Mirror).\\n* **Die:** Lampe (Lamp), Tür (Door), Küche (Kitchen).\\n* **Das:** Bett (Bed), Sofa (Sofa), Bild (Picture), Fenster (Window).",
                            examples: [
                                { german: "Das Bett ist bequem.", english: "The bed is comfortable." },
                                { german: "Ich brauche einen Stuhl.", english: "I need a chair." }
                            ]
                        },
                        {
                            title: "2. Adjectives (Predicative Use)",
                            content: "When an adjective follows 'ist' or 'sind' (to be), it **NEVER** changes its ending in German. It stays in its basic form.\\n\\n* **groß / klein** (big / small)\\n* **alt / neu** (old / new)\\n* **schön / hässlich** (beautiful / ugly)\\n* **teuer / billig** (expensive / cheap)\\n* **hell / dunkel** (light / dark)",
                            examples: [
                                { german: "Die Lampe ist teuer.", english: "The lamp is expensive." },
                                { german: "Die Stühle sind alt.", english: "The chairs are old." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d18-q1",
                            type: "text",
                            question: "Translate: 'The window is small.'",
                            answer: "Das Fenster ist klein.",
                            explanation: "Clause with 'ist' -> No adjective ending."
                        },
                        {
                            id: "d18-q2",
                            type: "choice",
                            question: "What is 'Der Schrank'?",
                            options: ["The fridge", "The cupboard", "The shelf"],
                            answer: "The cupboard",
                            explanation: "Schrank = Cupboard/Wardrobe/Cabinet."
                        },
                        {
                            id: "d18-q3",
                            type: "text",
                            question: "Opposite of 'neu'?",
                            answer: "alt",
                            explanation: "Old."
                        }
                    ]
                }
            },
            {
                day: 19,
                title: "Prepositions with Accusative",
                focus: "für, um, durch...",
                activities: ["Accusative prepositions"],
                homework: ["Fill-in-the-blank exercises"],
                details: {
                    sections: [
                        {
                            title: "1. The Accusative Prepositions",
                            content: "These prepositions **ALWAYS** trigger the Accusative case (Masc -> Den).\\nRemember the acronym **DOGFU**:\\n\\n* **Durch** (Through): Ich gehe durch den Park.\\n* **Ohne** (Without): Ohne dich bin ich traurig.\\n* **Gegen** (Against/Around time): Das Auto fährt gegen den Baum. / Wir treffen uns gegen 8 Uhr.\\n* **Für** (For): Das ist für meinen Bruder.\\n* **Um** (Around): Wir sitzen um den Tisch.",
                            examples: [
                                { german: "Ist der Kaffee für mich?", english: "Is the coffee for me?" },
                                { german: "Wir gehen ohne den Hund spazieren.", english: "We are walking without the dog." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d19-q1",
                            type: "choice",
                            question: "Ich gehe ___ (through) den Park.",
                            options: ["durch", "für", "um"],
                            answer: "durch",
                            explanation: "Durch = through."
                        },
                        {
                            id: "d19-q2",
                            type: "text",
                            question: "Translate: 'For my father' (Vater/Masc).",
                            answer: "Für meinen Vater",
                            explanation: "Für triggers Accusative -> meinen."
                        },
                        {
                            id: "d19-q3",
                            type: "choice",
                            question: "Wir spielen ___ (against) das Team.",
                            options: ["gegen", "ohne", "für"],
                            answer: "gegen",
                            explanation: "Gegen means against (an opponent)."
                        }
                    ]
                }
            },
            {
                day: 20,
                title: "Review & Mini-Test 2",
                focus: "Roleplay",
                activities: ["Review Phase 2", "Roleplay: Shopping/Restaurant"],
                homework: ["Review weak points"],
                details: {
                    sections: [
                        {
                            title: "Phase 2 Review (Wiederholung)",
                            content: "In Phase 2, you have learned to navigate daily life!\\n\\n* **Family:** Explained relationships and used 'mein/dein'.\\n* **Time:** Told time officially (14:30) and casually (halb drei).\\n* **Verbs:** Used Separable verbs (anrufen) and Modals (können, wollen, müssen, dürfen).\\n* **Cases:** Mastered the Accusative (einen Apfel essen, für den Vater).\\n* **Topics:** Food, Furniture, Shopping.",
                            examples: []
                        },
                        {
                            title: "Mock Test: Grammar Mixed Bag",
                            content: "Try to solve these quickly:\\n1. Ich ___ Deutsch lernen (wollen).\\n2. Der Apfel ist ___ (für) den Lehrer.\\n3. Um 7 Uhr ___ ich __ (aufstehen).\\n4. Ich habe ___ (kein) Hunger.",
                            examples: [
                                { german: "1. will, 2. für, 3. stehe ... auf, 4. keinen", english: "Answers" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d20-q1",
                            type: "text",
                            question: "Conjugate 'wollen' (er).",
                            answer: "will",
                            explanation: "Strong verb: ich will, er will."
                        },
                        {
                            id: "d20-q2",
                            type: "text",
                            question: "Translate: 'I wake up at 6.' (aufstehen)",
                            answer: "Ich stehe um 6 auf.",
                            explanation: "Separable verb split."
                        },
                        {
                            id: "d20-q3",
                            type: "choice",
                            question: "Is 'für' Accusative or Nominative?",
                            options: ["Accusative", "Nominative"],
                            answer: "Accusative",
                            explanation: "Für is always Accusative."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 3,
        title: "Phase 3: Moving Around & Past Tense (Day 21-30)",
        description: "Focus: Cities, Transport, Perfect Tense",
        days: [
            {
                day: 21,
                title: "Hobbies & Inversion",
                focus: "Sentence Structure",
                activities: ["Talk about hobbies", "Verb position with inversion"],
                homework: ["Write about hobbies"],
                details: {
                    sections: [
                        {
                            title: "1. Inversion (Verb Position 2)",
                            content: "If you start the sentence with something other than the subject (like time), the verb stays at Pos 2, but Subject moves to Pos 3.\n\n* **Normal:** Ich spiele heute Fußball.\n* **Inversion:** Heute **spiele** ich Fußball.",
                            examples: [{ german: "Am Wochenende lerne ich Deutsch.", english: "On the weekend I learn German." }]
                        }
                    ],
                    homework: [{ id: "d21-q1", type: "text", question: "Rewrite with 'Heute': 'Ich gehe ins Kino.'", answer: "Heute gehe ich ins Kino.", explanation: "Heute + Verb + Subject." }]
                }
            },
            {
                day: 22,
                title: "City & Directions",
                focus: "Imperative",
                activities: ["Giving directions", "Imperative forms"],
                homework: ["Map navigation exercise"],
                details: {
                    sections: [
                        {
                            title: "1. Imperative (Commands)",
                            content: "Giving orders.\n* **Du:** Geh! (Stem)\n* **Ihr:** Geht! (Stem+t)\n* **Sie:** Gehen Sie!",
                            examples: [{ german: "Gehen Sie geradeaus!", english: "Go straight!" }]
                        }
                    ],
                    homework: [{ id: "d22-q1", type: "text", question: "Imperative (Sie): 'Machen' (Do).", answer: "Machen Sie", explanation: "Formal imperative." }]
                }
            },
            {
                day: 23,
                title: "Transport",
                focus: "Travel vocab",
                activities: ["Buying tickets", "Transport types"],
                homework: ["Dialogue at station"],
                details: {
                    sections: [
                        {
                            title: "Transport Vocabulary",
                            content: "Der Zug, Der Bus, Die U-Bahn, Das Flugzeug.\n\n* Ein Ticket kaufen -> am Automaten.",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d23-q1", type: "text", question: "Translate 'The Train'.", answer: "Der Zug", explanation: "Maskulin." }]
                }
            },
            {
                day: 24,
                title: "Dative Case Basics",
                focus: "Indirect Object",
                activities: ["Dative articles", "Verbs with Dative"],
                homework: ["Dative drills"],
                details: {
                    sections: [
                        {
                            title: "The Dative Case",
                            content: "Indirect Object (Receiver). Articles change!\n\n* der -> **dem**\n* die -> **der**\n* das -> **dem**\n* Plural -> **den (+n)**",
                            examples: [{ german: "Ich helfe dem Mann.", english: "I help the man." }]
                        }
                    ],
                    homework: [{ id: "d24-q1", type: "choice", question: "Ich danke ___ (die) Frau.", options: ["die", "der", "den"], answer: "der", explanation: "Dative feminine -> der." }]
                }
            },
            {
                day: 25,
                title: "Prepositions with Dative",
                focus: "aus, bei, mit...",
                activities: ["Dative prepositions usage"],
                homework: ["Write sentences with Dative prepositions"],
                details: {
                    sections: [
                        {
                            title: "Dative Prepositions",
                            content: "aus, bei, mit, nach, seit, von, zu.\nAlways trigger Dative.",
                            examples: [{ german: "Ich fahre mit dem Bus.", english: "I go by bus." }]
                        }
                    ],
                    homework: [{ id: "d25-q1", type: "choice", question: "Ich komme ___ (aus) Deutschland.", options: ["aus", "von"], answer: "aus", explanation: "Origin -> aus." }]
                }
            },
            {
                day: 26,
                title: "Perfect Tense 1 (Haben)",
                focus: "Past with Haben",
                activities: ["Understanding 'ge-'", "Regular participles"],
                homework: ["Write 5 sentences in Perfect"],
                details: {
                    sections: [
                        {
                            title: "Perfect Tense (Das Perfekt)",
                            content: "Spoken past. Structure: Haben/Sein + Partizip II (End).\n\n* **Regular:** ge + stem + t (machen -> gemacht).\n* ich habe ... gemacht.",
                            examples: [{ german: "Ich habe Fußball gespielt.", english: "I played football." }]
                        }
                    ],
                    homework: [{ id: "d26-q1", type: "text", question: "Participle of 'lernen'?", answer: "gelernt", explanation: "ge-lern-t." }]
                }
            },
            {
                day: 27,
                title: "Perfect Tense 2 (Irregular)",
                focus: "Strong verbs",
                activities: ["Irregular participles memorization"],
                homework: ["Flashcards for irregulars"],
                details: {
                    sections: [
                        {
                            title: "Irregular Participles",
                            content: "Often end in -en and change vowels.\n* essen -> gegessen\n* trinken -> getrunken\n* schreiben -> geschrieben",
                            examples: [{ german: "Ich habe Pizza gegessen.", english: "I ate pizza." }]
                        }
                    ],
                    homework: [{ id: "d27-q1", type: "text", question: "Participle of 'sehen'?", answer: "gesehen", explanation: "ge-seh-en." }]
                }
            },
            {
                day: 28,
                title: "Perfect Tense 3 (Sein)",
                focus: "Movement verbs",
                activities: ["Verbs taking 'sein'"],
                homework: ["Write about a trip (movement)"],
                details: {
                    sections: [
                        {
                            title: "Perfekt with Sein",
                            content: "Movements (A to B) or Change of State take 'sein' instead of 'haben'.\n* gehen, fahren, fliegen, aufstehen.\n* ich bin gegangen (I went).",
                            examples: [{ german: "Er ist nach Hause gefahren.", english: "He drove home." }]
                        }
                    ],
                    homework: [{ id: "d28-q1", type: "choice", question: "Wir ___ nach Berlin geflogen.", options: ["haben", "sind"], answer: "sind", explanation: "Fliegen implies movement -> sind." }]
                }
            },
            {
                day: 29,
                title: "Talking about the Past",
                focus: "Narrative",
                activities: ["Weekend/Holiday recap"],
                homework: ["Write a short text about last weekend"],
                details: {
                    sections: [
                        {
                            title: "Narrating Events",
                            content: "Combine 'sein' and 'haben' verbs.\n* Am Wochenende bin ich aufgestanden, dann habe ich gefrühstückt...",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d29-q1", type: "text", question: "Translate: 'I was at home.' (Präteritum of sein)", answer: "Ich war zu Hause.", explanation: "Sein generally uses Präteritum 'war'." }]
                }
            },
            {
                day: 30,
                title: "Review & Mini-Test 3",
                focus: "Writing",
                activities: ["Review Phase 3", "Email writing practice"],
                homework: ["Write an email about vacation"],
                details: {
                    sections: [
                        {
                            title: "Phase 3 Summary",
                            content: "Topics: Inversion, Imperative, Dative Case, Perfect Tense.",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d30-q1", type: "text", question: "Dative of 'die Kinder'?", answer: "den Kindern", explanation: "Plural Dative adds -n." }]
                }
            }
        ]
    },
    {
        id: 4,
        title: "Phase 4: Work, Health & Adv. Grammar (Day 31-40)",
        description: "Focus: Health, Work, Two-Way Prepositions",
        days: [
            {
                day: 31,
                title: "Health & Body",
                focus: "Doctor visits",
                activities: ["Body parts", "Describing pain"],
                homework: ["Dialogue: At the doctor"],
                details: {
                    sections: [
                        {
                            title: "1. The Body (Der Körper)",
                            content: "* **Der Kopf** (Head)\n* **Der Bauch** (Stomach)\n* **Der Hals** (Throat/Neck)\n* **Das Bein** (Leg)\n* **Der Arm** (Arm)\n* **Die Hand** (Hand)",
                            examples: [{ german: "Mein Kopf tut weh.", english: "My head hurts." }]
                        },
                        {
                            title: "2. At the Doctor (Beim Arzt)",
                            content: "* **Ich habe Schmerzen.** (I have pain.)\n* **Ich habe Fieber.** (I have a fever.)\n* **Ich bin krank.** (I am sick.)",
                            examples: [{ german: "Sie müssen Tabletten nehmen.", english: "You must take tablets." }]
                        }
                    ],
                    homework: [{ id: "d31-q1", type: "text", question: "Translate: 'My stomach hurts.'", answer: "Mein Bauch tut weh.", explanation: "Bauch tut weh." }]
                }
            },
            {
                day: 32,
                title: "Professions & Work",
                focus: "Job vocab",
                activities: ["Talking about work", "Workplace terms"],
                homework: ["Describe your job/ideal job"],
                details: {
                    sections: [
                        {
                            title: "Professions (Berufe)",
                            content: "* **Der Lehrer / Die Lehrerin** (Teacher)\n* **Der Arzt / Die Ärztin** (Doctor)\n* **Der Ingenieur** (Engineer)\n* **Der Student** (Student)\n\nNote: Female forms usually add **-in**.",
                            examples: [{ german: "Ich arbeite als Programmierer.", english: "I work as a programmer." }]
                        }
                    ],
                    homework: [{ id: "d32-q1", type: "text", question: "Feminine form of 'Lehrer'?", answer: "Lehrerin", explanation: "Add -in." }]
                }
            },
            {
                day: 33,
                title: "Appointments (Termine)",
                focus: "Scheduling",
                activities: ["Making/Changing appointments"],
                homework: ["Calendar management dialogue"],
                details: {
                    sections: [
                        {
                            title: "Managing Appointments",
                            content: "* **einen Termin vereinbaren** (make an appt)\n* **absagen** (cancel)\n* **verschieben** (postpone)\n* **Passt es Ihnen am Montag?** (Does Monday suit you?)",
                            examples: [{ german: "Können wir den Termin verschieben?", english: "Can we postpone the appointment?" }]
                        }
                    ],
                    homework: [{ id: "d33-q1", type: "choice", question: "Which verb means 'to cancel'?", options: ["absagen", "zusagen"], answer: "absagen", explanation: "Absagen = cancel." }]
                }
            },
            {
                day: 34,
                title: "Two-Way Prepositions",
                focus: "Wo vs Wohin",
                activities: ["Dative (Location) vs Accusative (Motion)"],
                homework: ["Picture description (Where is the cat?)"],
                details: {
                    sections: [
                        {
                            title: "Wechselpräpositionen",
                            content: "an, auf, hinter, in, neben, über, unter, vor, zwischen.\n\n* **Wo? (Location) -> Dative**\n* **Wohin? (Motion) -> Accusative**",
                            examples: [
                                { german: "Das Buch liegt auf dem Tisch (Dat).", english: "The book lies on the table." },
                                { german: "Ich lege das Buch auf den Tisch (Acc).", english: "I lay the book on the table." }
                            ]
                        }
                    ],
                    homework: [{ id: "d34-q1", type: "choice", question: "Die Katze ist ___ (in) der Küche.", options: ["in", "im"], answer: "in", explanation: "In der Küche (Dative Fem)." }]
                }
            },
            {
                day: 35,
                title: "Clothing & Adjective Endings",
                focus: "Basic declension",
                activities: ["Colors/Clothes", "Nominative/Accusative endings"],
                homework: ["Describe someone's outfit"],
                details: {
                    sections: [
                        {
                            title: "Clothing Vocabulary",
                            content: "Der Pullover, Die Hose (Pants), Das Hemd (Shirt), Der Schuh (Shoe).",
                            examples: []
                        },
                        {
                            title: "Adjective Endings (Intro)",
                            content: "Unlike predicative adjectives, these change.\n* **Der** rote Pullover (Nom Masc)\n* **Den** roten Pullover (Acc Masc)\n* **Die** rote Hose (Fem)\n* **Das** rote Hemd (Neut)",
                            examples: [{ german: "Ich kaufe das rote Kleid.", english: "I buy the red dress." }]
                        }
                    ],
                    homework: [{ id: "d35-q1", type: "text", question: "Translate 'The black pants' (Nom).", answer: "Die schwarze Hose", explanation: "Die Hose -> schwarze." }]
                }
            },
            {
                day: 36,
                title: "Weather",
                focus: "Weather vocab",
                activities: ["Talking about weather", "Seasons recap"],
                homework: ["Weather report writing"],
                details: {
                    sections: [
                        {
                            title: "The Weather (Das Wetter)",
                            content: "* **Die Sonne scheint.** (The sun shines.)\n* **Es regnet.** (It rains.)\n* **Es schneit.** (It snows.)\n* **Es ist windig/wolvig.** (It is windy/cloudy.)",
                            examples: [{ german: "Wie ist das Wetter heute?", english: "How is the weather today?" }]
                        }
                    ],
                    homework: [{ id: "d36-q1", type: "text", question: "Translate 'It is raining.'", answer: "Es regnet.", explanation: "Regnen." }]
                }
            },
            {
                day: 37,
                title: "Letter Writing",
                focus: "Formal vs Informal",
                activities: ["Salutations/Closings", "Email structure"],
                homework: ["Write one formal, one informal email"],
                details: {
                    sections: [
                        {
                            title: "Letter Structure",
                            content: "**Formal:**\n* Start: Sehr geehrte Damen und Herren,\n* End: Mit freundlichen Grüßen\n\n**Informal:**\n* Start: Liebe Maria / Lieber Hans,\n* End: Viele Grüße",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d37-q1", type: "text", question: "Formal closing?", answer: "Mit freundlichen Grüßen", explanation: "Standard formal closing." }]
                }
            },
            {
                day: 38,
                title: "Comparatives",
                focus: "Gut, Besser, Am besten",
                activities: ["Comparing things"],
                homework: ["Compare two cities/people"],
                details: {
                    sections: [
                        {
                            title: "Comparatives (Komparativ)",
                            content: "Add **-er**.\n* schnell -> schneller\n* klein -> kleiner\n\n**Irregular:**\n* gut -> besser\n* viel -> mehr\n* gern -> lieber",
                            examples: [{ german: "Berlin ist größer als München.", english: "Berlin is bigger than Munich." }]
                        }
                    ],
                    homework: [{ id: "d38-q1", type: "text", question: "Better than?", answer: "besser als", explanation: "Als = than." }]
                }
            },
            {
                day: 39,
                title: "Conjunctions",
                focus: "Main clauses",
                activities: ["und, aber, oder, denn, sondern"],
                homework: ["Combine sentences"],
                details: {
                    sections: [
                        {
                            title: "Coordinating Conjunctions (ADUSO)",
                            content: "Position 0. Do not change word order.\n* **A**ber (but)\n* **D**enn (because)\n* **U**nd (and)\n* **S**ondern (but rather)\n* **O**der (or)",
                            examples: [{ german: "Ich bin müde, denn ich habe viel gearbeitet.", english: "I am tired because I worked a lot." }]
                        }
                    ],
                    homework: [{ id: "d39-q1", type: "choice", question: "Ich möchte Wein, ___ (but) ich muss fahren.", options: ["aber", "denn"], answer: "aber", explanation: "Aber = but." }]
                }
            },
            {
                day: 40,
                title: "Review & Mini-Test 4",
                focus: "Exam Letters",
                activities: ["Review Phase 4", "Exam style letter tasks"],
                homework: ["Write 2 exam-style letters"],
                details: {
                    sections: [
                        {
                            title: "Phase 4 Summary",
                            content: "Topics: Body, Work, Appointments, Two-Way Preps, Weather, Letter Writing.",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d40-q1", type: "text", question: "Start a letter to 'Mr. Müller'.", answer: "Sehr geehrter Herr Müller,", explanation: "Formal male." }]
                }
            }
        ]
    },
    {
        id: 5,
        title: "Phase 5: Exam Prep (Day 41-50)",
        description: "Focus: Goethe A1 Exam Format",
        days: [
            {
                day: 41,
                title: "Exam Overview",
                focus: "Format understanding",
                activities: ["Review exam parts"],
                homework: ["Read exam guidelines"],
                details: {
                    sections: [
                        {
                            title: "The Goethe A1 Exam",
                            content: "The exam consists of 4 parts:\n1. **Hören** (Listening) - 20 mins\n2. **Lesen** (Reading) - 25 mins\n3. **Schreiben** (Writing) - 20 mins\n4. **Sprechen** (Speaking) - 15 mins",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d41-q1", type: "text", question: "How many parts?", answer: "4", explanation: "L, R, W, S." }]
                }
            },
            {
                day: 42,
                title: "Listening (Hören)",
                focus: "Mock Exam",
                activities: ["Listening strategies", "Practice Test"],
                homework: ["Corrections"],
                details: {
                    sections: [
                        {
                            title: "Listening Strategies",
                            content: "* Read the questions FIRST before the audio starts.\n* Underline keywords (Time, Place, Number).\n* Don't panic if you miss a word.",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d42-q1", type: "choice", question: "When to read questions?", options: ["Before audio", "After audio"], answer: "Before audio", explanation: "Always prepare." }]
                }
            },
            {
                day: 43,
                title: "Reading (Lesen)",
                focus: "Strategies",
                activities: ["Reading parts 1-3"],
                homework: ["Reading drills"],
                details: {
                    sections: [
                        {
                            title: "Reading Strategies",
                            content: "* **Part 1:** Email/Letter comprehension.\n* **Part 2:** Website/Ad information.\n* **Part 3:** Signs/Notices.\n* Look for negatives like 'nicht' or 'kein'.",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d43-q1", type: "text", question: "Synonym for 'billig'?", answer: "günstig", explanation: "Cheap." }]
                }
            },
            {
                day: 44,
                title: "Reading Mock Exam",
                focus: "Timed Practice",
                activities: ["Full Reading Section"],
                homework: ["Review mistakes"],
                details: {
                    sections: [
                        {
                            title: "Pactice Session",
                            content: "Complete a full Reading section in 25 minutes. No dictionary!",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d44-q1", type: "text", question: "Key takeaway?", answer: "Time management", explanation: "Don't get stuck on one word." }]
                }
            },
            {
                day: 45,
                title: "Writing (Schreiben)",
                focus: "Forms & Emails",
                activities: ["Form filling strategies", "Writing scenarios"],
                homework: ["3 Practice Emails"],
                details: {
                    sections: [
                        {
                            title: "Writing Strategies",
                            content: "* **Formular:** Fill in missing info (Name, Ort, etc.).\n* **Email:** Write about 30 words. Cover all 3 points asked.",
                            examples: [{ german: "Ich komme am Freitag um 14 Uhr.", english: "Covering 'Arrival time' point." }]
                        }
                    ],
                    homework: [{ id: "d45-q1", type: "text", question: "Min word count?", answer: "30", explanation: "Approx 30 words." }]
                }
            },
            {
                day: 46,
                title: "Speaking (Sprechen)",
                focus: "Oral Exam",
                activities: ["Part 1/2/3 drills"],
                homework: ["Record speaking tasks"],
                details: {
                    sections: [
                        {
                            title: "Speaking Parts",
                            content: "* **Part 1:** Introduce yourself (Name, Age, Country, Job, Languages, Hobbies).\n* **Part 2:** Ask for information (Topic cards).\n* **Part 3:** Request something (Picture cards).",
                            examples: [{ german: "Können Sie das bitte wiederholen?", english: "Can you please repeat that?" }]
                        }
                    ],
                    homework: [{ id: "d46-q1", type: "text", question: "How to say 'I don't understand'?", answer: "Ich verstehe nicht.", explanation: "Useful phrase." }]
                }
            },
            {
                day: 47,
                title: "Full Mock Exam 1",
                focus: "Timed Simulation",
                activities: ["Complete 60min exam"],
                homework: ["Relax"],
                details: {
                    sections: [
                        {
                            title: "Mock Exam 1",
                            content: "Simulate real conditions. No phone, no help. 60-70 mins.",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d47-q1", type: "text", question: "Result?", answer: "Pass", explanation: "Aim for 60%." }]
                }
            },
            {
                day: 48,
                title: "Review Mock Exam 1",
                focus: "Analysis",
                activities: ["Go through errors", "Refine weak areas"],
                homework: ["Retake weak sections"],
                details: {
                    sections: [
                        {
                            title: "Analysis",
                            content: "Where did you lose points? Grammar? Vocabulary? Misunderstanding instructions?",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d48-q1", type: "text", question: "Focus area?", answer: "Grammar", explanation: "Self-assessment." }]
                }
            },
            {
                day: 49,
                title: "Full Mock Exam 2",
                focus: "Final Practice",
                activities: ["Complete Exam"],
                homework: ["Final polish"],
                details: {
                    sections: [
                        {
                            title: "Mock Exam 2",
                            content: "Final run-through.",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d49-q1", type: "text", question: "Ready?", answer: "Ja", explanation: "Confidence." }]
                }
            },
            {
                day: 50,
                title: "Exam Readiness",
                focus: "Confidence",
                activities: ["Tips for exam day", "Relaxed conversation"],
                homework: ["Pack for exam / Rest"],
                details: {
                    sections: [
                        {
                            title: "Exam Day Tips",
                            content: "* Arrive early.\n* Bring ID and black/blue pen.\n* Stay calm.\n* Speak clearly.",
                            examples: []
                        }
                    ],
                    homework: [{ id: "d50-q1", type: "text", question: "Viel Glück!", answer: "Danke", explanation: "Good luck!" }]
                }
            }
        ]
    }
];
