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
                                                ,
                                                { id: "d4-q5", type: "choice", question: "Write '24' in German.",
                                                    options: ["vierundzwanzig", "zwanzigvier", "vierzwanzig"],
                                                    answer: "vierundzwanzig", explanation: "Unit + und + ten: vier-und-zwanzig." },
                                                { id: "d4-q6", type: "text", question: "Write '93' in German words.",
                                                    answer: "dreiundneunzig", explanation: "Three-and-ninety." },
                                                { id: "d4-q7", type: "choice", question: "Choose the correct form for 67.",
                                                    options: ["sechzigsieben", "siebenundsechzig", "sechzigund sieben"],
                                                    answer: "siebenundsechzig", explanation: "Unit comes first: sieben + und + sechzig." },
                                                { id: "d4-q8", type: "text", question: "Translate: 'How much is the bread?'",
                                                    answer: "Wie viel kostet das Brot?", explanation: "Use 'Wie viel kostet ... ?'" },
                                                { id: "d4-q9", type: "choice", question: "Say 4,50€ in German.",
                                                    options: ["Vier Euro fünfzig", "Vier Euro und fünfzig Cent", "Vier Komma fünfzig Euro"],
                                                    answer: "Vier Euro fünfzig", explanation: "Common spoken form drops 'Cent'." },
                                                { id: "d4-q10", type: "text", question: "Write '31' in German words.",
                                                    answer: "einunddreißig", explanation: "Remember ß in dreißig." },
                                                { id: "d4-q11", type: "choice", question: "Which is 'dark blue'?",
                                                    options: ["dunkelblau", "blau dunkel", "dunkel blau"],
                                                    answer: "dunkelblau", explanation: "Prefix attaches directly to the color." },
                                                { id: "d4-q12", type: "text", question: "Translate: 'How old are you?' (informal)",
                                                    answer: "Wie alt bist du?", explanation: "Use 'sein' for age, informal 'du'." },
                                                { id: "d4-q13", type: "text", question: "Answer: I am 29 years old.",
                                                    answer: "Ich bin neunundzwanzig Jahre alt.",
                                                    explanation: "Unit + und + twenty: neun-und-zwanzig." },
                                                { id: "d4-q14", type: "choice", question: "Pick the correct color: 'white'",
                                                    options: ["weiß", "weis", "weiss"], answer: "weiß",
                                                    explanation: "Use 'ß' in 'weiß'." },
                                                { id: "d4-q15", type: "text", question: "Write '56' in German words.",
                                                    answer: "sechsundfünfzig", explanation: "Six-and-fifty." },
                                                { id: "d4-q16", type: "choice", question: "How do you say 'orange' in German?",
                                                    options: ["Orange", "Orang", "Oranje"], answer: "Orange",
                                                    explanation: "The color is 'Orange' (loanword)." },
                                                { id: "d4-q17", type: "text", question: "Translate: 'What does it cost?'",
                                                    answer: "Was kostet das?",
                                                    explanation: "Alternative to 'Wie viel kostet ... ?'" },
                                                { id: "d4-q18", type: "choice", question: "100 in German is...",
                                                    options: ["ein hundert", "hundert", "eins hundert"], answer: "hundert",
                                                    explanation: "Commonly 'hundert'; 'einhundert' is also acceptable." },
                                                { id: "d4-q19", type: "text", question: "Write '72' in German words.",
                                                    answer: "zweiundsiebzig", explanation: "Two-and-seventy." },
                                                { id: "d4-q20", type: "choice",
                                                    question: "Select the correct translation: 'light blue'",
                                                    options: ["hellblau", "leichtblau", "hell blau"], answer: "hellblau",
                                                    explanation: "Prefix 'hell-' attaches to the color." }
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
                            content: "**The Seasons (Die Jahreszeiten):**\n* der Frühling (Spring) - masculine\n* der Sommer (Summer) - masculine  \n* der Herbst (Autumn/Fall) - masculine\n* der Winter (Winter) - masculine\n\n**The Months (Die Monate):**\nAll months are masculine in German:\n* der Januar, der Februar, der März, der April, der Mai, der Juni\n* der Juli, der August, der September, der Oktober, der November, der Dezember\n\n**Grammar Rules for Time Expressions:**\n\n**1. With Preposition 'im' (in the):**\n* Use **im** (in + dem) for months and seasons when expressing 'in' a time period\n* Format: **im** + Month/Season\n* Examples: *im Januar*, *im Sommer*, *im Herbst*\n\n**2. Without Preposition (as subject/object):**\n* When the month/season is the subject: *Der Winter ist kalt.*\n* When describing characteristics: *Dieser Sommer war heiß.*\n\n**3. Common Sentence Patterns:**\n* **Birthdays:** Mein Geburtstag ist im [Month]\n* **Activities:** Im [Season] [verb] ich [activity]\n* **Weather:** Im [Season] ist es [adjective]\n* **Events:** [Event] ist im [Month]\n\n**4. Weak Usage Patterns:**\nWhile months and seasons aren't weak nouns, they follow predictable patterns:\n* Always use **im** for time expressions (never *in dem*)\n* Gender never changes (always masculine)\n* Plural forms rarely used in everyday speech",
                            examples: [
                                { german: "Mein Geburtstag ist im Juli.", english: "My birthday is in July." },
                                { german: "Im Winter schneit es oft.", english: "In winter it often snows." },
                                { german: "Der Frühling ist meine Lieblingsjahreszeit.", english: "Spring is my favorite season." },
                                { german: "Im August fahren wir nach Italien.", english: "In August we're going to Italy." },
                                { german: "Dieser Herbst ist sehr warm.", english: "This autumn is very warm." },
                                { german: "Im Dezember feiern wir Weihnachten.", english: "In December we celebrate Christmas." }
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
                            question: "Which preposition is used with months? 'Mein Geburtstag ist ___ August.'",
                            options: ["am", "im", "um"],
                            answer: "im",
                            explanation: "Months take 'im' (in + dem). All months are masculine."
                        },
                        {
                            id: "d5-q2",
                            type: "text",
                            question: "Translate: 'I like to swim.'",
                            answer: "Ich schwimme gern.",
                            explanation: "Use verb + 'gern' to express liking an activity."
                        },
                        {
                            id: "d5-q3",
                            type: "choice",
                            question: "What day comes after Dienstag?",
                            options: ["Montag", "Mittwoch", "Donnerstag"],
                            answer: "Mittwoch",
                            explanation: "The order is: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag."
                        },
                        {
                            id: "d5-q4",
                            type: "text",
                            question: "Translate: 'On Monday' (use correct preposition)",
                            answer: "am Montag",
                            explanation: "Days of the week use 'am' (an + dem)."
                        },
                        {
                            id: "d5-q5",
                            type: "choice",
                            question: "Which season is 'der Herbst'?",
                            options: ["Spring", "Summer", "Autumn/Fall", "Winter"],
                            answer: "Autumn/Fall",
                            explanation: "der Herbst = Autumn/Fall. All seasons are masculine."
                        },
                        {
                            id: "d5-q6",
                            type: "text",
                            question: "Complete: 'Im ___ ist es sehr kalt.' (Winter)",
                            answer: "Im Winter ist es sehr kalt.",
                            explanation: "Use 'im' + season. 'Im Winter ist es sehr kalt' = 'In winter it is very cold.'"
                        },
                        {
                            id: "d5-q7",
                            type: "choice",
                            question: "How do you say 'I don't like cooking'?",
                            options: ["Ich koche nicht gern.", "Ich mag nicht kochen.", "Ich nicht gern koche."],
                            answer: "Ich koche nicht gern.",
                            explanation: "Use 'nicht gern' after the verb to express not liking an activity."
                        },
                        {
                            id: "d5-q8",
                            type: "text",
                            question: "Translate: 'In July it is hot.'",
                            answer: "Im Juli ist es heiß.",
                            explanation: "Months use 'im': Im Juli ist es heiß."
                        },
                        {
                            id: "d5-q9",
                            type: "choice",
                            question: "What is the German word for 'weekend'?",
                            options: ["die Wochenende", "das Wochenende", "der Wochenende"],
                            answer: "das Wochenende",
                            explanation: "das Wochenende (neuter). Die Woche (week) + das Ende (end) = das Wochenende."
                        },
                        {
                            id: "d5-q10",
                            type: "text",
                            question: "Complete: 'Heute ist Freitag. Morgen ist ___.'",
                            answer: "Samstag",
                            explanation: "Freitag (Friday) + 1 day = Samstag (Saturday)."
                        },
                        {
                            id: "d5-q11",
                            type: "choice",
                            question: "Which preposition: 'Wir fahren ___ Sonntag nach Berlin.'",
                            options: ["am", "im", "zu"],
                            answer: "am",
                            explanation: "Days use 'am': am Sonntag = on Sunday."
                        },
                        {
                            id: "d5-q12",
                            type: "text",
                            question: "Translate: 'Do you like reading?' (du form)",
                            answer: "Liest du gern?",
                            explanation: "lesen (to read) -> du liest. Question: Liest du gern?"
                        },
                        {
                            id: "d5-q13",
                            type: "choice",
                            question: "What is the third month of the year?",
                            options: ["Februar", "März", "April"],
                            answer: "März",
                            explanation: "Januar (1), Februar (2), März (3), April (4)..."
                        },
                        {
                            id: "d5-q14",
                            type: "text",
                            question: "Complete: '___ Frühling blühen die Blumen.' (In spring the flowers bloom)",
                            answer: "Im Frühling blühen die Blumen.",
                            explanation: "Seasons use 'im': Im Frühling = In spring."
                        },
                        {
                            id: "d5-q15",
                            type: "choice",
                            question: "How do you ask 'Do you like playing tennis?' (Sie form)",
                            options: ["Spielen Sie gern Tennis?", "Mögen Sie Tennis spielen?", "Tennis Sie gern spielen?"],
                            answer: "Spielen Sie gern Tennis?",
                            explanation: "Verb + Sie + gern + object: Spielen Sie gern Tennis?"
                        },
                        {
                            id: "d5-q16",
                            type: "text",
                            question: "Translate: 'Yesterday was Thursday.'",
                            answer: "Gestern war Donnerstag.",
                            explanation: "gestern = yesterday, war = was. Gestern war Donnerstag."
                        },
                        {
                            id: "d5-q17",
                            type: "choice",
                            question: "Which month comes before Oktober?",
                            options: ["August", "September", "November"],
                            answer: "September",
                            explanation: "...August, September, Oktober, November..."
                        },
                        {
                            id: "d5-q18",
                            type: "text",
                            question: "Complete: 'Ich ___ gern Musik.' (I like listening to music)",
                            answer: "Ich höre gern Musik.",
                            explanation: "hören = to listen/hear. Ich höre gern Musik = I like listening to music."
                        },
                        {
                            id: "d5-q19",
                            type: "choice",
                            question: "What season comes after der Sommer?",
                            options: ["der Frühling", "der Herbst", "der Winter"],
                            answer: "der Herbst",
                            explanation: "Frühling (Spring) → Sommer (Summer) → Herbst (Autumn) → Winter"
                        },
                        {
                            id: "d5-q20",
                            type: "text",
                            question: "Translate: 'We work on Saturday.' (arbeiten = to work)",
                            answer: "Wir arbeiten am Samstag.",
                            explanation: "wir arbeiten = we work, am Samstag = on Saturday."
                        },
                        {
                            id: "d5-q21",
                            type: "choice",
                            question: "How do you say 'My birthday is in December'?",
                            options: ["Mein Geburtstag ist am Dezember.", "Mein Geburtstag ist im Dezember.", "Mein Geburtstag ist zu Dezember."],
                            answer: "Mein Geburtstag ist im Dezember.",
                            explanation: "Months use 'im': Mein Geburtstag ist im Dezember."
                        },
                        {
                            id: "d5-q22",
                            type: "text",
                            question: "Complete: 'Er tanzt ___ gern.' (He doesn't like dancing)",
                            answer: "Er tanzt nicht gern.",
                            explanation: "To negate 'gern', use 'nicht gern': Er tanzt nicht gern."
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
                            content: "Verbs are the engine of the sentence. Regular verbs follow a strict pattern that you must master to communicate effectively.\n\n**The Pattern:** Remove '-en' from the infinitive (e.g., *kommen* -> *komm*), then add specific endings:\n* **ich**: **-e** (komme, lerne, spiele)\n* **du**: **-st** (kommst, lernst, spielst)\n* **er/sie/es**: **-t** (kommt, lernt, spielt)\n* **wir**: **-en** (kommen, lernen, spielen)\n* **ihr**: **-t** (kommt, lernt, spielt)\n* **sie/Sie**: **-en** (kommen, lernen, spielen)\n\n**Important Notes:**\n- The 'wir' and 'sie/Sie' forms are identical to the infinitive\n- The 'ihr' and 'er/sie/es' forms both end in '-t'\n- Always remember: verb stem + ending\n\n**Essential Regular Verbs for A1:**\n* **machen** (to do/make) - ich mache, du machst, er macht\n* **lernen** (to learn) - ich lerne, du lernst, sie lernt\n* **hören** (to hear) - ich höre, du hörst, wir hören\n* **sagen** (to say) - ich sage, du sagst, ihr sagt\n* **trinken** (to drink) - ich trinke, du trinkst, sie trinken\n* **spielen** (to play) - ich spiele, du spielst, er spielt\n* **wohnen** (to live) - ich wohne, du wohnst, wir wohnen\n* **arbeiten** (to work) - ich arbeite, du arbeitest, sie arbeitet\n* **kochen** (to cook) - ich koche, du kochst, er kocht\n* **kaufen** (to buy) - ich kaufe, du kaufst, sie kaufen",
                            examples: [
                                { german: "Was machst du?", english: "What are you doing?" },
                                { german: "Wir lernen zusammen.", english: "We are learning together." },
                                { german: "Ich trinke Wasser.", english: "I drink water." },
                                { german: "Sie arbeitet in Berlin.", english: "She works in Berlin." },
                                { german: "Ihr spielt Fußball.", english: "You (plural) play football." },
                                { german: "Er kocht gern.", english: "He likes to cook." }
                            ]
                        },
                        {
                            title: "2. Sentence Structure (Position 2 Rule)",
                            content: "The Golden Rule: **The conjugated verb is ALWAYS in position 2.** This is the backbone of German sentence structure.\n\n**Standard Word Order (Subject-Verb-Object):**\n* **Position 1:** Subject (Ich, Du, Er, etc.)\n* **Position 2:** Conjugated Verb (bin, machst, lernt, etc.)\n* **Position 3+:** Other elements (Time, Manner, Place)\n\n**Formula:** [Subject] [Verb] [Time] [Manner] [Place]\n\n**Examples of Standard Order:**\n* Ich komme heute nach Hause. (I come home today)\n* Du lernst jeden Tag Deutsch. (You learn German every day)\n* Wir spielen morgen Fußball. (We play football tomorrow)\n\n**Inversion (Emphasis/Style):**\nIf you start with something other than the subject, the verb STILL stays in position 2, but the subject moves to position 3.\n\n**Formula:** [Time/Place/Object] [Verb] [Subject] [Rest]\n\n**Examples of Inversion:**\n* Heute komme ich nach Hause. (Today I come home)\n* Jeden Tag lernst du Deutsch. (Every day you learn German)\n* Morgen spielen wir Fußball. (Tomorrow we play football)\n\n**When to Use Inversion:**\n- To emphasize time, place, or manner\n- To create variety in your speaking/writing\n- To answer questions that start with 'Wann?' (When?) or 'Wo?' (Where?)\n\n**Question Formation:**\nFor Yes/No questions, start with the verb:\n* Kommst du heute? (Are you coming today?)\n* Lernt ihr Deutsch? (Are you learning German?)",
                            examples: [
                                { german: "Ich wohne in Berlin.", english: "I live in Berlin. (Standard)" },
                                { german: "In Berlin wohne ich.", english: "In Berlin I live. (Inversion)" },
                                { german: "Morgen lerne ich Deutsch.", english: "Tomorrow I learn German. (Inversion)" },
                                { german: "Sie macht heute Hausaufgaben.", english: "She does homework today. (Standard)" },
                                { german: "Heute macht sie Hausaufgaben.", english: "Today she does homework. (Inversion)" },
                                { german: "Spielst du Tennis?", english: "Do you play tennis? (Question)" }
                            ]
                        },
                        {
                            title: "3. Connecting Sentences with Coordinating Conjunctions",
                            content: "To express more complex ideas, you can connect two complete sentences using coordinating conjunctions. These conjunctions occupy 'position 0' - they don't count toward the position 2 rule.\n\n**Main Coordinating Conjunctions:**\n* **und** (and) - adds information\n* **aber** (but) - shows contrast\n* **oder** (or) - shows alternatives\n* **denn** (because) - gives reasons\n* **sondern** (but rather) - corrects information\n\n**Structure:** [Sentence 1], [conjunction] [Sentence 2]\n\n**Important:** Each part maintains normal word order (verb in position 2).\n\n**Usage Rules:**\n- **aber vs sondern:** Use 'aber' after positive statements, 'sondern' after negative statements\n- **denn:** Always preceded by a comma\n- **und/oder:** Can be used with or without comma\n\n**Advanced Sentence Building:**\nCombine different elements to create natural-sounding German:\n* Time + Activity: \"Heute lerne ich, aber morgen arbeite ich.\"\n* Reason + Result: \"Ich bin müde, denn ich arbeite viel.\"\n* Contrast: \"Er spielt gern Fußball, aber sie spielt lieber Tennis.\"",
                            examples: [
                                { german: "Ich lerne Deutsch und sie lernt Englisch.", english: "I learn German and she learns English." },
                                { german: "Er ist müde, aber er arbeitet noch.", english: "He is tired, but he is still working." },
                                { german: "Wir spielen Fußball oder wir gehen ins Kino.", english: "We play football or we go to the cinema." },
                                { german: "Sie kommt nicht heute, sondern morgen.", english: "She's not coming today, but rather tomorrow." },
                                { german: "Ich trinke Kaffee, denn ich bin müde.", english: "I drink coffee because I am tired." },
                                { german: "Heute arbeite ich, aber morgen spiele ich.", english: "Today I work, but tomorrow I play." }
                            ]
                        },
                        {
                            title: "4. Common Verb Patterns and Irregularities",
                            content: "While most verbs are regular, some common verbs have slight variations you should know:\n\n**Verbs ending in -t, -d, -n, -m:**\nAdd an extra 'e' before the ending for 'du' and 'ihr' forms:\n* **arbeiten:** du arbeit**e**st, ihr arbeit**e**t\n* **finden:** du find**e**st, ihr find**e**t\n* **öffnen:** du öffn**e**st, ihr öffn**e**t\n\n**Verbs ending in -s, -ss, -ß, -z:**\nDrop one 's' in the 'du' form:\n* **heißen:** du heißt (not heißst)\n* **tanzen:** du tanzt (not tanzst)\n\n**Practice Conjugations:**\nMaster these essential verbs:\n* **leben** (to live): ich lebe, du lebst, er lebt\n* **suchen** (to search): ich suche, du suchst, wir suchen\n* **fragen** (to ask): ich frage, du fragst, sie fragen\n* **antworten** (to answer): ich antworte, du antwortest, ihr antwortet\n* **brauchen** (to need): ich brauche, du brauchst, sie braucht",
                            examples: [
                                { german: "Wie heißt du?", english: "What is your name?" },
                                { german: "Du arbeitest zu viel.", english: "You work too much." },
                                { german: "Wir tanzen gern.", english: "We like to dance." },
                                { german: "Sie antwortet schnell.", english: "She answers quickly." },
                                { german: "Ich brauche Hilfe.", english: "I need help." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d6-q1",
                            type: "text",
                            question: "Conjugate 'trinken' for 'du'.",
                            answer: "trinkst",
                            explanation: "Stem 'trink' + 'st' = trinkst."
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
                            explanation: "Standard SVO sentence: Ich spiele Fußball."
                        },
                        {
                            id: "d6-q4",
                            type: "choice",
                            question: "Conjugate 'lernen' for 'er'.",
                            options: ["lernt", "lerne", "lernst"],
                            answer: "lernt",
                            explanation: "Third person singular: er lernt (stem + t)."
                        },
                        {
                            id: "d6-q5",
                            type: "text",
                            question: "Conjugate 'machen' for 'wir'.",
                            answer: "machen",
                            explanation: "First person plural: wir machen (same as infinitive)."
                        },
                        {
                            id: "d6-q6",
                            type: "choice",
                            question: "Correct sentence: 'Morgen / ich / arbeite'.",
                            options: ["Morgen ich arbeite.", "Morgen arbeite ich.", "Ich arbeite morgen."],
                            answer: "Morgen arbeite ich.",
                            explanation: "Inversion: Time element first, verb second, subject third."
                        },
                        {
                            id: "d6-q7",
                            type: "text",
                            question: "Conjugate 'hören' for 'ihr'.",
                            answer: "hört",
                            explanation: "Second person plural: ihr hört (stem + t)."
                        },
                        {
                            id: "d6-q8",
                            type: "choice",
                            question: "Which conjunction means 'but' (contrast)?",
                            options: ["und", "aber", "oder"],
                            answer: "aber",
                            explanation: "'Aber' expresses contrast or contradiction."
                        },
                        {
                            id: "d6-q9",
                            type: "text",
                            question: "Complete: 'Du _____ Deutsch.' (lernen)",
                            answer: "lernst",
                            explanation: "Second person singular: du lernst (stem + st)."
                        },
                        {
                            id: "d6-q10",
                            type: "choice",
                            question: "Correct order: 'Sie / heute / kocht'.",
                            options: ["Sie kocht heute.", "Heute sie kocht.", "Kocht sie heute?"],
                            answer: "Sie kocht heute.",
                            explanation: "Standard word order: Subject + Verb + Time."
                        },
                        {
                            id: "d6-q11",
                            type: "text",
                            question: "Conjugate 'wohnen' for 'sie' (plural).",
                            answer: "wohnen",
                            explanation: "Third person plural: sie wohnen (same as infinitive)."
                        },
                        {
                            id: "d6-q12",
                            type: "choice",
                            question: "Transform to inversion: 'Wir spielen morgen.'",
                            options: ["Morgen spielen wir.", "Morgen wir spielen.", "Spielen wir morgen?"],
                            answer: "Morgen spielen wir.",
                            explanation: "Time first, verb second, subject third."
                        },
                        {
                            id: "d6-q13",
                            type: "text",
                            question: "Complete: 'Er _____ gern Musik.' (hören)",
                            answer: "hört",
                            explanation: "Third person singular: er hört (stem + t)."
                        },
                        {
                            id: "d6-q14",
                            type: "choice",
                            question: "Which word connects two sentences with 'because'?",
                            options: ["aber", "denn", "und"],
                            answer: "denn",
                            explanation: "'Denn' means 'because' and gives a reason."
                        },
                        {
                            id: "d6-q15",
                            type: "text",
                            question: "Conjugate 'arbeiten' for 'du'.",
                            answer: "arbeitest",
                            explanation: "Special case: du arbeitest (add extra 'e' before 'st')."
                        },
                        {
                            id: "d6-q16",
                            type: "choice",
                            question: "Make a question: 'Du kommst heute.'",
                            options: ["Kommst du heute?", "Du kommst heute?", "Heute kommst du?"],
                            answer: "Kommst du heute?",
                            explanation: "Yes/No question: Verb first, then subject."
                        },
                        {
                            id: "d6-q17",
                            type: "text",
                            question: "Complete: 'Ich _____ jeden Tag.' (kochen)",
                            answer: "koche",
                            explanation: "First person singular: ich koche (stem + e)."
                        },
                        {
                            id: "d6-q18",
                            type: "choice",
                            question: "Correct conjunction: 'Ich lerne Deutsch ___ es ist schwer.'",
                            options: ["aber", "und", "oder"],
                            answer: "aber",
                            explanation: "'But' shows contrast between learning and difficulty."
                        },
                        {
                            id: "d6-q19",
                            type: "text",
                            question: "Conjugate 'sagen' for 'Sie' (formal).",
                            answer: "sagen",
                            explanation: "Formal 'Sie': Sie sagen (same as infinitive)."
                        },
                        {
                            id: "d6-q20",
                            type: "choice",
                            question: "Emphasize time: 'Ich kaufe heute ein.'",
                            options: ["Heute kaufe ich ein.", "Kaufe ich heute ein.", "Heute ich kaufe ein."],
                            answer: "Heute kaufe ich ein.",
                            explanation: "Inversion for emphasis: Time + Verb + Subject."
                        },
                        {
                            id: "d6-q21",
                            type: "text",
                            question: "Complete: 'Ihr _____ sehr gut.' (spielen)",
                            answer: "spielt",
                            explanation: "Second person plural: ihr spielt (stem + t)."
                        },
                        {
                            id: "d6-q22",
                            type: "choice",
                            question: "Complete: 'Ich bin müde, ___ ich lerne.'",
                            options: ["aber", "und", "sondern"],
                            answer: "aber",
                            explanation: "'But' shows contrast between being tired and studying."
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
                            title: "1. The German Gender System: Der, Die, Das",
                            content: "Every German noun has one of three genders: masculine, feminine, or neuter. This is grammatical gender, not biological gender - it's a classification system that affects articles, adjectives, and pronouns.\n\n**The Three Articles:**\n* **der** (masculine) - approximately 35% of nouns\n* **die** (feminine) - approximately 40% of nouns  \n* **das** (neuter) - approximately 25% of nouns\n\n**Why Gender Matters:**\n- Determines which article to use (der/die/das)\n- Affects adjective endings (later lessons)\n- Changes in different cases (Accusative, Dative, Genitive)\n- Essential for pronoun replacement (er/sie/es)\n\n**Learning Strategy:**\nALWAYS learn nouns with their articles! Never memorize just 'Tisch' - always learn 'der Tisch'. Think of the article as part of the word itself.\n\n**Gender Memory Tips:**\n1. **Masculine (der):** Days of the week, months, seasons, directions, weather phenomena, alcoholic drinks, most car brands\n2. **Feminine (die):** Most fruits, flowers, most countries ending in -e, numbers as nouns, most rivers\n3. **Neuter (das):** Colors as nouns, metals, most countries without -e ending, diminutives",
                            examples: [
                                { german: "der Montag, der Januar, der Sommer", english: "Monday, January, summer (all masculine)" },
                                { german: "die Banane, die Rose, die Schweiz", english: "banana, rose, Switzerland (all feminine)" },
                                { german: "das Rot, das Gold, das Deutschland", english: "the color red, gold, Germany (all neuter)" },
                                { german: "der Mercedes, der Wein, der Norden", english: "Mercedes, wine, north (all masculine)" },
                                { german: "die Drei, die Donau, die Türkei", english: "the number three, Danube river, Turkey (all feminine)" }
                            ]
                        },
                        {
                            title: "2. Gender Rules Based on Word Endings",
                            content: "While gender can seem random, there are reliable patterns based on word endings. Learning these rules will help you predict gender for unknown words.\n\n**MASCULINE Endings (der):**\n* **-er**: der Lehrer (teacher), der Computer, der Finger\n* **-el**: der Apfel (apple), der Schlüssel (key), der Artikel\n* **-en**: der Ofen (oven), der Regen (rain), der Wagen (car)\n* **-ig**: der König (king), der Honig (honey)\n* **-ling**: der Schmetterling (butterfly), der Lehrling (apprentice)\n\n**FEMININE Endings (die):**\n* **-ung**: die Zeitung (newspaper), die Wohnung (apartment), die Meinung (opinion)\n* **-heit**: die Freiheit (freedom), die Gesundheit (health), die Wahrheit (truth)\n* **-keit**: die Möglichkeit (possibility), die Geschwindigkeit (speed), die Persönlichkeit (personality)\n* **-schaft**: die Freundschaft (friendship), die Gesellschaft (society), die Wirtschaft (economy)\n* **-tät**: die Universität (university), die Qualität (quality), die Aktivität (activity)\n* **-ion**: die Nation (nation), die Information (information), die Tradition (tradition)\n* **-ei**: die Bäckerei (bakery), die Polizei (police), die Bücherei (library)\n* **-ie**: die Energie (energy), die Fantasie (fantasy), die Biologie (biology)\n\n**NEUTER Endings (das):**\n* **-chen**: das Mädchen (girl), das Kätzchen (kitten), das Brötchen (bread roll)\n* **-lein**: das Fräulein (miss), das Büchlein (booklet)\n* **-ment**: das Element (element), das Dokument (document), das Instrument (instrument)\n* **-um**: das Museum (museum), das Zentrum (center), das Studium (studies)\n* **-tum**: das Eigentum (property), das Christentum (Christianity)\n\n**Exceptions Exist!**\nRemember: Rules help, but there are always exceptions. For example: das Mädchen (neuter) even though it refers to a girl, because of the -chen ending.",
                            examples: [
                                { german: "die Freundschaft", english: "friendship (-schaft = die)" },
                                { german: "das Mädchen", english: "girl (-chen = das, despite being female)" },
                                { german: "der Computer", english: "computer (-er = der)" },
                                { german: "die Information", english: "information (-ion = die)" },
                                { german: "das Dokument", english: "document (-ment = das)" },
                                { german: "die Universität", english: "university (-tät = die)" }
                            ]
                        },
                        {
                            title: "3. Indefinite Articles: Ein, Eine, Ein",
                            content: "The indefinite articles correspond to 'a' or 'an' in English. They change based on the gender of the noun they accompany.\n\n**Indefinite Article System:**\n* **Masculine (der) → ein**: ein Tisch, ein Mann, ein Apfel\n* **Feminine (die) → eine**: eine Lampe, eine Frau, eine Banane  \n* **Neuter (das) → ein**: ein Auto, ein Kind, ein Haus\n* **Plural**: NO indefinite article (just like English: 'books', not 'a books')\n\n**Usage Patterns:**\n1. **Introducing something new:** Das ist ein Auto. (That's a car.)\n2. **Talking about professions:** Ich bin ein Lehrer. (I am a teacher.)\n3. **Describing quantities:** Ich möchte ein Bier. (I would like a beer.)\n4. **General statements:** Ein Hund ist ein Tier. (A dog is an animal.)\n\n**Important Notes:**\n- Unlike English, you can't use the indefinite article with plural nouns\n- The indefinite article changes form in Accusative case (later lesson)\n- Some expressions don't use articles where English does\n\n**Negative Form - Kein:**\nThe negative form of 'ein' is 'kein' (no/not a):\n* ein Apfel → kein Apfel (no apple)\n* eine Lampe → keine Lampe (no lamp)\n* ein Auto → kein Auto (no car)",
                            examples: [
                                { german: "Das ist ein Tisch (der).", english: "That is a table." },
                                { german: "Ich habe eine Lampe (die).", english: "I have a lamp." },
                                { german: "Das ist ein Haus (das).", english: "That is a house." },
                                { german: "Das sind Bücher.", english: "Those are books. (No indefinite article for plural)" },
                                { german: "Ich habe kein Auto.", english: "I don't have a car." },
                                { german: "Sie ist eine Lehrerin.", english: "She is a teacher." }
                            ]
                        },
                        {
                            title: "4. Plural Formation - The Five Ways",
                            content: "German plurals are more complex than English. There are five main patterns, and you must memorize the plural form with each noun.\n\n**Type 1: Add -n or -en (Most Common)**\nMost feminine nouns and many masculines:\n* die Lampe → die Lampen (lamps)\n* die Frau → die Frauen (women)\n* der Herr → die Herren (gentlemen)\n* der Mensch → die Menschen (people)\n\n**Type 2: Add -e (Common)**\nMany masculine and some neuter one-syllable nouns:\n* der Tag → die Tage (days)\n* der Hund → die Hunde (dogs)\n* das Jahr → die Jahre (years)\n* Sometimes with Umlaut: der Ball → die Bälle (balls)\n\n**Type 3: Add -er (Neuter + Some Masculine)**\nMost neuter one-syllable nouns, often with Umlaut:\n* das Kind → die Kinder (children)\n* das Haus → die Häuser (houses)\n* der Mann → die Männer (men)\n* das Buch → die Bücher (books)\n\n**Type 4: Add -s (Foreign Words)**\nLoanwords, especially from English:\n* das Auto → die Autos (cars)\n* das Hotel → die Hotels (hotels)\n* der Chef → die Chefs (bosses)\n* das Foto → die Fotos (photos)\n\n**Type 5: No Change (Often with Umlaut)**\nWords ending in -el, -en, -er, some neuters:\n* der Lehrer → die Lehrer (teachers)\n* das Mädchen → die Mädchen (girls)\n* der Apfel → die Äpfel (apples)\n* die Mutter → die Mütter (mothers)\n\n**Learning Strategy:**\nAlways learn: Article + Singular + Plural\nExample: der Tisch, die Tische (not just 'Tisch')",
                            examples: [
                                { german: "die Blume → die Blumen", english: "flower → flowers (add -n)" },
                                { german: "der Freund → die Freunde", english: "friend → friends (add -e)" },
                                { german: "das Bild → die Bilder", english: "picture → pictures (add -er)" },
                                { german: "das Handy → die Handys", english: "cell phone → cell phones (add -s)" },
                                { german: "der Löffel → die Löffel", english: "spoon → spoons (no change)" },
                                { german: "die Maus → die Mäuse", english: "mouse → mice (Umlaut + -e)" }
                            ]
                        },
                        {
                            title: "5. Compound Nouns - German's Building Blocks",
                            content: "German is famous for creating long compound nouns by combining multiple words. The gender is always determined by the LAST word in the compound.\n\n**Formation Rule:**\nWord 1 + Word 2 + Word 3... = Compound Noun\n**Gender = Gender of the LAST word**\n\n**Common Compound Patterns:**\n1. **Noun + Noun:** das Haus (house) + die Tür (door) = die Haustür (front door)\n2. **Verb + Noun:** schlafen (sleep) + das Zimmer (room) = das Schlafzimmer (bedroom)\n3. **Adjective + Noun:** klein (small) + das Kind (child) = das Kleinkind (toddler)\n\n**Connecting Elements (Fugen-s/n):**\nSometimes a connecting element is added:\n* der Geburtstag (birthday) = die Geburt + -s- + der Tag\n* die Studentenpartei = der Student + -en- + die Partei\n\n**Useful Household Compounds:**\n* die Küche (kitchen) + der Tisch (table) = der Küchentisch (kitchen table)\n* das Wohn (living) + das Zimmer (room) = das Wohnzimmer (living room)\n* das Bade (bath) + das Zimmer (room) = das Badezimmer (bathroom)\n* schlafen (sleep) + das Zimmer (room) = das Schlafzimmer (bedroom)",
                            examples: [
                                { german: "die Haustür", english: "front door (das Haus + die Tür = die Tür determines gender)" },
                                { german: "das Schlafzimmer", english: "bedroom (schlafen + das Zimmer = das Zimmer determines gender)" },
                                { german: "der Küchentisch", english: "kitchen table (die Küche + der Tisch = der Tisch determines gender)" },
                                { german: "die Bushaltestelle", english: "bus stop (der Bus + halten + die Stelle = die Stelle determines gender)" },
                                { german: "das Wörterbuch", english: "dictionary (das Wort + das Buch = das Buch determines gender)" }
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
                            explanation: "Feminine nouns usually add -n: Lampe → Lampen."
                        },
                        {
                            id: "d7-q3",
                            type: "choice",
                            question: "Indefinite article: 'Das ist ___ Haus (das).'",
                            options: ["ein", "eine", "einen"],
                            answer: "ein",
                            explanation: "Das Haus (neuter) → ein Haus."
                        },
                        {
                            id: "d7-q4",
                            type: "text",
                            question: "Translate: 'That is a car.'",
                            answer: "Das ist ein Auto.",
                            explanation: "Das Auto (neuter) → ein Auto."
                        },
                        {
                            id: "d7-q5",
                            type: "choice",
                            question: "What gender is 'Universität' (university)?",
                            options: ["masculine", "feminine", "neuter"],
                            answer: "feminine",
                            explanation: "Words ending in -tät are always feminine: die Universität."
                        },
                        {
                            id: "d7-q6",
                            type: "text",
                            question: "Plural of 'das Kind' (child)?",
                            answer: "die Kinder",
                            explanation: "Neuter monosyllabic noun: Kind → Kinder (add -er)."
                        },
                        {
                            id: "d7-q7",
                            type: "choice",
                            question: "Article for 'Mädchen' (girl)?",
                            options: ["der", "die", "das"],
                            answer: "das",
                            explanation: "Words ending in -chen are always neuter: das Mädchen."
                        },
                        {
                            id: "d7-q8",
                            type: "text",
                            question: "Indefinite article for 'Frau' (woman)?",
                            answer: "eine",
                            explanation: "Die Frau (feminine) → eine Frau."
                        },
                        {
                            id: "d7-q9",
                            type: "choice",
                            question: "Plural of 'der Apfel' (apple)?",
                            options: ["die Äpfel", "die Apfel", "die Äpfels"],
                            answer: "die Äpfel",
                            explanation: "Words ending in -el: no change but add Umlaut: Apfel → Äpfel."
                        },
                        {
                            id: "d7-q10",
                            type: "text",
                            question: "What gender is 'Computer'?",
                            answer: "masculine",
                            explanation: "Words ending in -er are usually masculine: der Computer."
                        },
                        {
                            id: "d7-q11",
                            type: "choice",
                            question: "Article for 'Information'?",
                            options: ["der", "die", "das"],
                            answer: "die",
                            explanation: "Words ending in -ion are always feminine: die Information."
                        },
                        {
                            id: "d7-q12",
                            type: "text",
                            question: "Plural of 'das Auto' (car)?",
                            answer: "die Autos",
                            explanation: "Foreign loanword: Auto → Autos (add -s)."
                        },
                        {
                            id: "d7-q13",
                            type: "choice",
                            question: "Complete: 'Das ist ___ Lehrer.' (teacher/male)",
                            options: ["ein", "eine", "der"],
                            answer: "ein",
                            explanation: "Der Lehrer (masculine) → ein Lehrer."
                        },
                        {
                            id: "d7-q14",
                            type: "text",
                            question: "What gender is 'Freundschaft' (friendship)?",
                            answer: "feminine",
                            explanation: "Words ending in -schaft are always feminine: die Freundschaft."
                        },
                        {
                            id: "d7-q15",
                            type: "choice",
                            question: "Plural of 'der Tag' (day)?",
                            options: ["die Tage", "die Täge", "die Tags"],
                            answer: "die Tage",
                            explanation: "Masculine monosyllabic noun: Tag → Tage (add -e)."
                        },
                        {
                            id: "d7-q16",
                            type: "text",
                            question: "Article for 'Dokument' (document)?",
                            answer: "das",
                            explanation: "Words ending in -ment are always neuter: das Dokument."
                        },
                        {
                            id: "d7-q17",
                            type: "choice",
                            question: "Gender of compound 'Schlafzimmer' (bedroom)?",
                            options: ["masculine", "feminine", "neuter"],
                            answer: "neuter",
                            explanation: "Compound gender = last word gender: das Zimmer → das Schlafzimmer."
                        },
                        {
                            id: "d7-q18",
                            type: "text",
                            question: "Plural of 'die Blume' (flower)?",
                            answer: "die Blumen",
                            explanation: "Feminine noun: Blume → Blumen (add -n)."
                        },
                        {
                            id: "d7-q19",
                            type: "choice",
                            question: "Complete: 'Ich habe ___ Katze.' (cat/female)",
                            options: ["ein", "eine", "der"],
                            answer: "eine",
                            explanation: "Die Katze (feminine) → eine Katze."
                        },
                        {
                            id: "d7-q20",
                            type: "text",
                            question: "What gender is 'Museum'?",
                            answer: "neuter",
                            explanation: "Words ending in -um are usually neuter: das Museum."
                        },
                        {
                            id: "d7-q21",
                            type: "choice",
                            question: "Plural of 'das Buch' (book)?",
                            options: ["die Bücher", "die Bucher", "die Buchs"],
                            answer: "die Bücher",
                            explanation: "Neuter monosyllabic: Buch → Bücher (add -er + Umlaut)."
                        },
                        {
                            id: "d7-q22",
                            type: "text",
                            question: "Article for 'Gesundheit' (health)?",
                            answer: "die",
                            explanation: "Words ending in -heit are always feminine: die Gesundheit."
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
                            title: "1. The Essential W-Question Words (W-Fragen)",
                            content: "W-questions are crucial for gathering information and having natural conversations. In German, question words are called 'W-Fragen' because most start with 'W'.\n\n**The Big Six W-Words:**\n* **Wer?** (Who?) - Asks about people/persons\n* **Was?** (What?) - Asks about things/objects/actions\n* **Wo?** (Where?) - Asks about location/place (static position)\n* **Wann?** (When?) - Asks about time/date\n* **Wie?** (How?) - Asks about manner/way/condition\n* **Warum?** (Why?) - Asks about reasons/causes\n\n**Alternative Forms:**\n* **Wieso?** (Why?) - Alternative to 'warum', more casual\n* **Weshalb?** (Why?) - Alternative to 'warum', more formal\n* **Welcher/Welche/Welches?** (Which?) - Asks for specific choice\n* **Wessen?** (Whose?) - Asks about possession (Genitive case)\n\n**Memory Tip:** English also has W-questions (Who, What, Where, When, Why, How), but German has different rules for word order and usage.",
                            examples: [
                                { german: "Wer ist das?", english: "Who is that?" },
                                { german: "Was machst du?", english: "What are you doing?" },
                                { german: "Wo wohnst du?", english: "Where do you live?" },
                                { german: "Wann kommst du?", english: "When are you coming?" },
                                { german: "Wie geht's?", english: "How are you?" },
                                { german: "Warum lernst du Deutsch?", english: "Why are you learning German?" }
                            ]
                        },
                        {
                            title: "2. Movement vs. Location: Wo, Woher, Wohin",
                            content: "German makes important distinctions about spatial relationships that English doesn't always make clearly. This is crucial for giving and understanding directions.\n\n**The Three Spatial Question Words:**\n\n**1. WO? (Where - Location/Position)**\n- Asks about **static location** where someone/something IS\n- Answer uses Dative case prepositions (in, auf, an + Dative)\n- English equivalent: 'Where?' (at a place)\n\n**2. WOHER? (Where from - Origin)**\n- Asks about **origin or source** where someone/something COMES FROM\n- Answer uses 'aus' (from) + Dative\n- English equivalent: 'Where from?' or 'From where?'\n\n**3. WOHIN? (Where to - Destination)**\n- Asks about **destination** where someone/something IS GOING TO\n- Answer uses Accusative case prepositions (in, auf, an + Accusative)\n- English equivalent: 'Where to?' (toward a place)\n\n**Usage Examples:**\n* **Static:** Wo arbeitest du? → Ich arbeite im Büro. (Where do you work? → I work in the office.)\n* **Origin:** Woher kommst du? → Ich komme aus Deutschland. (Where are you from? → I come from Germany.)\n* **Destination:** Wohin gehst du? → Ich gehe zum Supermarkt. (Where are you going? → I'm going to the supermarket.)\n\n**Common Verbs by Type:**\n- **Wo:** sein (be), arbeiten (work), wohnen (live), stehen (stand), liegen (lie)\n- **Woher:** kommen (come), stammen (originate)\n- **Wohin:** gehen (go), fahren (drive), fliegen (fly), laufen (run/walk)",
                            examples: [
                                { german: "Wo wohnst du?", english: "Where do you live? (Location)" },
                                { german: "Woher kommen Sie?", english: "Where do you come from? (Origin)" },
                                { german: "Wohin fahren wir?", english: "Where are we driving to? (Destination)" },
                                { german: "Wo ist dein Auto?", english: "Where is your car? (Location)" },
                                { german: "Woher hast du das Buch?", english: "Where did you get the book from? (Origin)" },
                                { german: "Wohin bringst du die Kinder?", english: "Where are you taking the children? (Destination)" }
                            ]
                        },
                        {
                            title: "3. Question Formation and Word Order",
                            content: "German W-questions follow a strict word order pattern that differs from English. Understanding this structure is essential for clear communication.\n\n**Basic Structure:** [W-Word] + [Conjugated Verb] + [Subject] + [Other Elements]?\n\n**Key Rules:**\n1. **W-word occupies position 1** (always first)\n2. **Conjugated verb must be in position 2** (immediately after W-word)\n3. **Subject follows in position 3** (after the verb)\n4. **Other elements** (time, place, object) follow normal German word order\n\n**Detailed Examples:**\n* Wie (1) heißt (2) deine Mutter (3)? (What is your mother's name?)\n* Warum (1) lernst (2) du (3) Deutsch (4)? (Why are you learning German?)\n* Wann (1) kommst (2) ihr (3) nach Hause (4)? (When are you coming home?)\n\n**Special Cases:**\n\n**1. Compound Verbs (Separable Verbs):**\nThe prefix goes to the end:\n* Wann stehst du auf? (When do you get up?)\n* Wo kaufst du ein? (Where do you shop?)\n\n**2. Modal Verbs:**\nInfinitive goes to the end:\n* Was willst du machen? (What do you want to do?)\n* Wo können wir essen? (Where can we eat?)\n\n**3. Multiple Questions:**\nYou can ask follow-up questions:\n* Wer ist das? Und wie heißt er? (Who is that? And what's his name?)\n\n**Common Mistakes to Avoid:**\n- Don't use English word order: ❌ 'Wer du bist?' ✅ 'Wer bist du?'\n- Don't forget verb-second position: ❌ 'Wo du wohnst?' ✅ 'Wo wohnst du?'\n- Don't confuse wo/woher/wohin based on context",
                            examples: [
                                { german: "Wie (1) heißt (2) deine Mutter (3)?", english: "What is your mother's name?" },
                                { german: "Warum (1) lernst (2) du (3) Deutsch?", english: "Why are you learning German?" },
                                { german: "Wann (1) fährt (2) der Zug (3) ab?", english: "When does the train depart?" },
                                { german: "Was (1) machst (2) du (3) heute Abend?", english: "What are you doing tonight?" },
                                { german: "Wo (1) kann (2) ich (3) hier parken?", english: "Where can I park here?" },
                                { german: "Wer (1) ist (2) dein Lehrer (3)?", english: "Who is your teacher?" }
                            ]
                        },
                        {
                            title: "4. Extended W-Questions and Combinations",
                            content: "As you advance, you'll encounter more complex W-questions and combinations that add precision to your German.\n\n**Extended W-Question Words:**\n\n**1. WIE + Adjective/Adverb:**\n* **Wie alt?** (How old?) - Wie alt bist du?\n* **Wie viel?** (How much/many?) - Wie viel kostet das?\n* **Wie viele?** (How many?) - Wie viele Bücher hast du?\n* **Wie lange?** (How long?) - Wie lange lernst du schon Deutsch?\n* **Wie oft?** (How often?) - Wie oft gehst du ins Kino?\n* **Wie groß?** (How big/tall?) - Wie groß bist du?\n\n**2. WAS FÜR + Article:**\n* **Was für ein/eine?** (What kind of?) - Was für ein Auto hast du?\n* This asks for description or type, not identification\n\n**3. WELCHER/WELCHE/WELCHES:**\n* Changes based on gender and case of the noun it modifies\n* **Masculine:** Welcher Mann? (Which man?)\n* **Feminine:** Welche Frau? (Which woman?)\n* **Neuter:** Welches Kind? (Which child?)\n* **Plural:** Welche Kinder? (Which children?)\n\n**4. UM WIE VIEL UHR?**\n* **Um wie viel Uhr?** (At what time?) - Um wie viel Uhr kommst du?\n\n**Practical Question Combinations:**\nIn real conversations, you often need to ask multiple questions:\n* Wo wohnst du und wie lange schon? (Where do you live and for how long?)\n* Was machst du beruflich und wie findest du das? (What do you do professionally and how do you like it?)\n\n**Polite Question Forms:**\nAdd these for politeness:\n* **Entschuldigung** + W-question: Entschuldigung, wo ist der Bahnhof?\n* **Können Sie mir sagen** + W-question: Können Sie mir sagen, wann der Zug kommt?\n* **Wissen Sie vielleicht** + W-question: Wissen Sie vielleicht, wo ich hier parken kann?",
                            examples: [
                                { german: "Wie alt bist du?", english: "How old are you?" },
                                { german: "Wie viel kostet der Kaffee?", english: "How much does the coffee cost?" },
                                { german: "Wie oft gehst du schwimmen?", english: "How often do you go swimming?" },
                                { german: "Was für ein Auto hast du?", english: "What kind of car do you have?" },
                                { german: "Welches Buch liest du?", english: "Which book are you reading?" },
                                { german: "Um wie viel Uhr stehst du auf?", english: "At what time do you get up?" },
                                { german: "Entschuldigung, wo ist die Post?", english: "Excuse me, where is the post office?" },
                                { german: "Können Sie mir sagen, wann der Bus kommt?", english: "Can you tell me when the bus comes?" }
                            ]
                        },
                        {
                            title: "5. Answering W-Questions Appropriately",
                            content: "Knowing how to ask questions is only half the skill - you must also know how to provide appropriate answers that match the question type.\n\n**Answer Patterns by Question Word:**\n\n**WER → Person/Name:**\n* Q: Wer ist das? → A: Das ist mein Bruder/Maria/Herr Schmidt.\n\n**WAS → Thing/Action:**\n* Q: Was machst du? → A: Ich lerne/arbeite/esse...\n* Q: Was ist das? → A: Das ist ein Buch/Auto/Handy...\n\n**WO → Place/Location:**\n* Q: Wo wohnst du? → A: Ich wohne in Berlin/zu Hause/in der Stadtmitte...\n\n**WOHER → Origin:**\n* Q: Woher kommst du? → A: Ich komme aus Deutschland/Vietnam/der Schweiz...\n\n**WOHIN → Destination:**\n* Q: Wohin gehst du? → A: Ich gehe zum Supermarkt/nach Hause/ins Kino...\n\n**WANN → Time:**\n* Q: Wann kommst du? → A: Ich komme um 8 Uhr/morgen/heute Abend...\n\n**WIE → Manner/Condition:**\n* Q: Wie geht's? → A: Gut/schlecht/sehr gut, danke...\n* Q: Wie kommst du zur Arbeit? → A: Mit dem Bus/zu Fuß/mit dem Auto...\n\n**WARUM → Reason:**\n* Q: Warum lernst du Deutsch? → A: Weil ich in Deutschland arbeiten möchte...\n\n**Complete Answer Strategies:**\n1. **Short answers** for simple questions\n2. **Complete sentences** for formal situations  \n3. **Additional information** to keep conversation flowing\n4. **Counter-questions** to show interest: 'Und du?' (And you?)",
                            examples: [
                                { german: "Q: Wer ist das? A: Das ist meine Schwester.", english: "Q: Who is that? A: That's my sister." },
                                { german: "Q: Was machst du? A: Ich lese ein Buch.", english: "Q: What are you doing? A: I'm reading a book." },
                                { german: "Q: Wo arbeitest du? A: Ich arbeite in München.", english: "Q: Where do you work? A: I work in Munich." },
                                { german: "Q: Wann hast du Zeit? A: Ich habe morgen Zeit.", english: "Q: When do you have time? A: I have time tomorrow." },
                                { german: "Q: Wie kommst du hier her? A: Mit der U-Bahn.", english: "Q: How did you get here? A: By subway." },
                                { german: "Q: Warum lernst du Deutsch? A: Für meine Arbeit.", english: "Q: Why are you learning German? A: For my job." }
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
                            explanation: "Warum = Why. Question structure: W-word + verb + subject."
                        },
                        {
                            id: "d8-q4",
                            type: "choice",
                            question: "Ask about origin: 'Where do you come from?'",
                            options: ["Wo kommst du?", "Woher kommst du?", "Wohin kommst du?"],
                            answer: "Woher kommst du?",
                            explanation: "'Woher' asks about origin/source."
                        },
                        {
                            id: "d8-q5",
                            type: "text",
                            question: "Ask: 'What is that?' (pointing to an object)",
                            answer: "Was ist das?",
                            explanation: "'Was' asks about things/objects."
                        },
                        {
                            id: "d8-q6",
                            type: "choice",
                            question: "Ask about time: 'When does the train arrive?'",
                            options: ["Wo kommt der Zug an?", "Wann kommt der Zug an?", "Wie kommt der Zug an?"],
                            answer: "Wann kommt der Zug an?",
                            explanation: "'Wann' asks about time. Note: ankommen is separable."
                        },
                        {
                            id: "d8-q7",
                            type: "text",
                            question: "Ask: 'How are you?' (informal)",
                            answer: "Wie geht es dir?",
                            explanation: "Standard greeting question using 'wie' (how)."
                        },
                        {
                            id: "d8-q8",
                            type: "choice",
                            question: "Ask about location: 'Where is the bathroom?'",
                            options: ["Wo ist das Bad?", "Wohin ist das Bad?", "Woher ist das Bad?"],
                            answer: "Wo ist das Bad?",
                            explanation: "'Wo' asks about static location."
                        },
                        {
                            id: "d8-q9",
                            type: "text",
                            question: "Ask: 'How old are you?' (Sie form)",
                            answer: "Wie alt sind Sie?",
                            explanation: "'Wie alt' asks about age. Formal 'Sie' form."
                        },
                        {
                            id: "d8-q10",
                            type: "choice",
                            question: "Ask about quantity: 'How much does it cost?'",
                            options: ["Wie kostet es?", "Wie viel kostet es?", "Was kostet es?"],
                            answer: "Wie viel kostet es?",
                            explanation: "'Wie viel' asks about amount/price."
                        },
                        {
                            id: "d8-q11",
                            type: "text",
                            question: "Ask: 'Who is your teacher?' (dein)",
                            answer: "Wer ist dein Lehrer?",
                            explanation: "'Wer' asks about people. Standard word order."
                        },
                        {
                            id: "d8-q12",
                            type: "choice",
                            question: "Ask about destination: 'Where is she driving to?'",
                            options: ["Wo fährt sie?", "Woher fährt sie?", "Wohin fährt sie?"],
                            answer: "Wohin fährt sie?",
                            explanation: "'Wohin' asks about destination/direction."
                        },
                        {
                            id: "d8-q13",
                            type: "text",
                            question: "Ask: 'What kind of car do you have?'",
                            answer: "Was für ein Auto hast du?",
                            explanation: "'Was für ein' asks about type/kind."
                        },
                        {
                            id: "d8-q14",
                            type: "choice",
                            question: "Ask politely: 'Excuse me, where is the station?'",
                            options: ["Wo ist der Bahnhof?", "Entschuldigung, wo ist der Bahnhof?", "Bahnhof wo ist?"],
                            answer: "Entschuldigung, wo ist der Bahnhof?",
                            explanation: "'Entschuldigung' makes the question polite."
                        },
                        {
                            id: "d8-q15",
                            type: "text",
                            question: "Ask: 'How often do you exercise?' (Sport machen)",
                            answer: "Wie oft machst du Sport?",
                            explanation: "'Wie oft' asks about frequency."
                        },
                        {
                            id: "d8-q16",
                            type: "choice",
                            question: "Complete: '___ Buch liest du?' (Which book...)",
                            options: ["Was", "Welches", "Wie"],
                            answer: "Welches",
                            explanation: "'Welches' (which) agrees with das Buch (neuter)."
                        },
                        {
                            id: "d8-q17",
                            type: "text",
                            question: "Ask: 'At what time do you get up?'",
                            answer: "Um wie viel Uhr stehst du auf?",
                            explanation: "'Um wie viel Uhr' asks for specific time."
                        },
                        {
                            id: "d8-q18",
                            type: "choice",
                            question: "Ask about method: 'How do you come to work?'",
                            options: ["Wo kommst du zur Arbeit?", "Wie kommst du zur Arbeit?", "Wann kommst du zur Arbeit?"],
                            answer: "Wie kommst du zur Arbeit?",
                            explanation: "'Wie' asks about method/manner."
                        },
                        {
                            id: "d8-q19",
                            type: "text",
                            question: "Ask: 'How many brothers do you have?'",
                            answer: "Wie viele Brüder hast du?",
                            explanation: "'Wie viele' asks about countable quantities."
                        },
                        {
                            id: "d8-q20",
                            type: "choice",
                            question: "Ask about reason: 'Why are you sad?'",
                            options: ["Wie bist du traurig?", "Warum bist du traurig?", "Was bist du traurig?"],
                            answer: "Warum bist du traurig?",
                            explanation: "'Warum' asks for reasons/causes."
                        },
                        {
                            id: "d8-q21",
                            type: "text",
                            question: "Ask: 'How long have you been living here?'",
                            answer: "Wie lange wohnst du schon hier?",
                            explanation: "'Wie lange' asks about duration. 'Schon' = already."
                        },
                        {
                            id: "d8-q22",
                            type: "choice",
                            question: "Ask about choice: '___ Farbe magst du?' (Which color...)",
                            options: ["Welche", "Was", "Wie"],
                            answer: "Welche",
                            explanation: "'Welche' (which) agrees with die Farbe (feminine)."
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
                            content: "Yes/No questions expect a simple 'ja' (yes) or 'nein' (no) answer. Unlike English, German doesn't use helping verbs like 'do/does' - instead, the main verb moves to the front.\n\n**Formation Rule:** Start with the **conjugated verb**\n\n**Structure:** [Conjugated Verb] + [Subject] + [Other Elements]?\n\n**From Statement to Question:**\n* **Statement:** Du kommst aus Berlin. (You come from Berlin.)\n* **Question:** Kommst du aus Berlin? (Do you come from Berlin?)\n\n**Examples by Verb Type:**\n\n**1. With 'sein' (to be):**\n* Statement: Sie ist müde. → Question: Ist sie müde?\n* Statement: Ihr seid Studenten. → Question: Seid ihr Studenten?\n\n**2. With 'haben' (to have):**\n* Statement: Er hat Zeit. → Question: Hat er Zeit?\n* Statement: Wir haben Hunger. → Question: Haben wir Hunger?\n\n**3. With regular verbs:**\n* Statement: Du lernst Deutsch. → Question: Lernst du Deutsch?\n* Statement: Sie arbeitet hier. → Question: Arbeitet sie hier?\n\n**4. With modal verbs:**\n* Statement: Ich kann schwimmen. → Question: Kann ich schwimmen?\n* Statement: Sie will kommen. → Question: Will sie kommen?\n\n**5. With separable verbs:**\n* Statement: Er steht früh auf. → Question: Steht er früh auf?\n* Statement: Wir kaufen ein. → Question: Kaufen wir ein?\n\n**Intonation:** In spoken German, your voice should rise at the end of Yes/No questions, just like in English.",
                            examples: [
                                { german: "Lernst du Deutsch?", english: "Are you learning German?" },
                                { german: "Ist das dein Auto?", english: "Is that your car?" },
                                { german: "Trinken Sie Kaffee?", english: "Do you drink coffee? (Formal)" },
                                { german: "Haben Sie Zeit?", english: "Do you have time? (Formal)" },
                                { german: "Kommst du heute?", english: "Are you coming today?" },
                                { german: "Arbeitet er in München?", english: "Does he work in Munich?" },
                                { german: "Können wir hier parken?", english: "Can we park here?" },
                                { german: "Steht ihr früh auf?", english: "Do you (plural) get up early?" }
                            ]
                        },
                        {
                            title: "2. The Negation System: Nicht vs. Kein",
                            content: "German has two main ways to say 'no' or 'not': **nicht** and **kein**. Choosing the correct one depends on what you're negating.\n\n**KEIN (No/Not a/Not any):**\nUse 'kein' to negate:\n1. **Nouns with indefinite articles** (ein/eine)\n2. **Nouns with NO article** (bare nouns)\n3. **Plural nouns** (since they have no indefinite article)\n\n**KEIN Declension (changes like ein):**\n* **Masculine:** kein Mann (no man)\n* **Feminine:** keine Frau (no woman)\n* **Neuter:** kein Kind (no child)\n* **Plural:** keine Kinder (no children)\n\n**Examples with KEIN:**\n* Ich habe ein Auto. → Ich habe **kein** Auto.\n* Das ist eine Katze. → Das ist **keine** Katze.\n* Wir haben Zeit. → Wir haben **keine** Zeit.\n* Sie trinken Bier. → Sie trinken **kein** Bier.\n\n**NICHT (Not):**\nUse 'nicht' to negate:\n1. **Verbs** and actions\n2. **Adjectives** and adverbs\n3. **Nouns with definite articles** (der/die/das)\n4. **Proper nouns** (names, places)\n5. **Possessive pronouns** (mein/dein/sein...)\n6. **Entire clauses or specific parts**\n\n**Examples with NICHT:**\n* Ich schlafe. → Ich schlafe **nicht**.\n* Das ist gut. → Das ist **nicht** gut.\n* Das ist das Auto von Tom. → Das ist **nicht** das Auto von Tom.\n* Das ist Maria. → Das ist **nicht** Maria.\n* Das ist mein Buch. → Das ist **nicht** mein Buch.",
                            examples: [
                                { german: "Ich habe keinen Hunger.", english: "I have no hunger./I'm not hungry. (Kein)" },
                                { german: "Das ist nicht gut.", english: "That is not good. (Nicht)" },
                                { german: "Ich wohne nicht in Berlin.", english: "I don't live in Berlin. (Nicht)" },
                                { german: "Er hat keine Geschwister.", english: "He has no siblings. (Kein)" },
                                { german: "Wir trinken keinen Alkohol.", english: "We don't drink alcohol. (Kein)" },
                                { german: "Sie kommt nicht heute.", english: "She's not coming today. (Nicht)" },
                                { german: "Das ist kein Problem.", english: "That's no problem. (Kein)" },
                                { german: "Ich verstehe nicht.", english: "I don't understand. (Nicht)" }
                            ]
                        },
                        {
                            title: "3. Position of Nicht in Sentences",
                            content: "The position of 'nicht' in a German sentence follows specific rules and can change the meaning.\n\n**Basic Rule:** 'Nicht' comes as **late as possible** in the sentence, but before certain elements.\n\n**NICHT comes BEFORE:**\n1. **Adjectives:** Das ist nicht gut.\n2. **Prepositional phrases:** Ich gehe nicht ins Kino.\n3. **Infinitives:** Ich kann nicht kommen.\n4. **Separable prefixes:** Er steht nicht auf.\n5. **Past participles:** Ich habe nicht geschlafen.\n\n**NICHT comes AFTER:**\n1. **Direct objects:** Ich sehe den Mann nicht.\n2. **Time expressions:** Er kommt heute nicht.\n3. **Definite places:** Wir waren gestern nicht da.\n\n**Position Examples:**\n* **Wrong:** Ich nicht schlafe. ❌\n* **Correct:** Ich schlafe nicht. ✅\n\n* **Wrong:** Wir nicht gehen ins Theater. ❌\n* **Correct:** Wir gehen nicht ins Theater. ✅\n\n**Special Cases:**\n\n**1. Negating specific elements:**\n* Ich trinke nicht Kaffee, sondern Tee. (Not coffee, but tea)\n* Er kommt nicht heute, sondern morgen. (Not today, but tomorrow)\n\n**2. With modal verbs:**\n* Ich kann nicht kommen. (I cannot come)\n* Du musst nicht arbeiten. (You don't have to work)\n\n**3. Emphasis through position:**\n* Normal: Ich verstehe das nicht. (I don't understand that)\n* Emphasis: Ich verstehe nicht das Problem. (It's not the problem I don't understand)",
                            examples: [
                                { german: "Ich bin nicht müde.", english: "I am not tired." },
                                { german: "Sie arbeitet nicht hier.", english: "She doesn't work here." },
                                { german: "Wir gehen nicht ins Kino.", english: "We're not going to the cinema." },
                                { german: "Er kann nicht Deutsch sprechen.", english: "He can't speak German." },
                                { german: "Ich esse nicht gern Fisch.", english: "I don't like eating fish." },
                                { german: "Das Auto fährt nicht schnell.", english: "The car doesn't drive fast." }
                            ]
                        },
                        {
                            title: "4. The 'Doch' Response - Contradicting Negative Questions",
                            content: "German has a special word 'doch' that doesn't exist in English. It's used to contradict negative questions or statements.\n\n**When to use DOCH:**\nWhen someone asks a **negative question** and you want to give a **positive answer** (contradicting their assumption).\n\n**The Three Response Options:**\n1. **JA** - for positive questions → positive answers\n2. **NEIN** - for any question → negative answers  \n3. **DOCH** - for negative questions → positive answers (contradiction)\n\n**Examples:**\n\n**Positive Question:**\n* Q: Trinkst du Kaffee? (Do you drink coffee?)\n* A: Ja, ich trinke Kaffee. (Yes, I drink coffee.)\n* A: Nein, ich trinke keinen Kaffee. (No, I don't drink coffee.)\n\n**Negative Question:**\n* Q: Trinkst du keinen Kaffee? (Don't you drink coffee?)\n* A: **Doch**, ich trinke Kaffee! (Yes, I do drink coffee! [contradicting])\n* A: Nein, ich trinke keinen Kaffee. (No, I don't drink coffee. [agreeing])\n\n**More Examples:**\n* Q: Kommst du nicht? (Aren't you coming?)\n* A: Doch! Ich komme gleich. (Yes! I'm coming soon.)\n\n* Q: Hast du keine Zeit? (Don't you have time?)\n* A: Doch, ich habe Zeit. (Yes, I do have time.)\n\n**Usage in Corrections:**\n'Doch' can also correct false statements:\n* Person A: Du bist nicht verheiratet. (You're not married.)\n* Person B: Doch! Ich bin verheiratet. (Yes I am! I am married.)\n\n**Cultural Note:** Using 'doch' appropriately makes you sound more natural and shows you understand the nuances of German conversation.",
                            examples: [
                                { german: "Kommst du nicht? - Doch! Ich komme gleich.", english: "Aren't you coming? - Yes! I'm coming soon." },
                                { german: "Hast du keinen Hunger? - Doch! Ich habe großen Hunger.", english: "Aren't you hungry? - Yes! I'm very hungry." },
                                { german: "Ist das nicht dein Auto? - Doch, das ist mein Auto.", english: "Isn't that your car? - Yes, that is my car." },
                                { german: "Kannst du nicht schwimmen? - Doch, ich kann gut schwimmen.", english: "Can't you swim? - Yes, I can swim well." },
                                { german: "Wohnst du nicht hier? - Doch, ich wohne hier.", english: "Don't you live here? - Yes, I do live here." }
                            ]
                        },
                        {
                            title: "5. Advanced Negation Patterns and Common Expressions",
                            content: "Beyond basic nicht/kein usage, German has several advanced negation patterns and fixed expressions.\n\n**Double Negation Avoidance:**\nUnlike English, German avoids double negatives:\n* English: 'I don't have nothing.' (incorrect but common)\n* German: Ich habe nichts. (I have nothing.) NOT: Ich habe nicht nichts.\n\n**Common Negative Words:**\n* **nichts** (nothing): Ich verstehe nichts.\n* **niemand** (nobody): Niemand ist da.\n* **nie/niemals** (never): Ich gehe nie ins Theater.\n* **nirgendwo** (nowhere): Ich finde es nirgendwo.\n* **weder...noch** (neither...nor): Weder Hans noch Maria kommt.\n\n**Negating Different Sentence Elements:**\n\n**1. Negating Time:**\n* Heute nicht → nicht heute (not today)\n* Nie → niemals (never)\n\n**2. Negating Quantity:**\n* nicht viel (not much)\n* nicht alle (not all)\n* nicht genug (not enough)\n\n**3. Negating Comparison:**\n* nicht so... wie (not as... as)\n* nicht größer als (not bigger than)\n\n**Fixed Expressions with Negation:**\n* **Das macht nichts.** (That doesn't matter.)\n* **Keine Ahnung!** (No idea!)\n* **Nicht wahr?** (Isn't that right? / Right?)\n* **Kein Problem!** (No problem!)\n* **Nicht schlecht!** (Not bad!)\n* **Gar nicht** (not at all): Das ist gar nicht schwer.\n\n**Polite Negation:**\n* **Leider nicht** (unfortunately not): Kann ich helfen? - Leider nicht.\n* **Noch nicht** (not yet): Bist du fertig? - Noch nicht.",
                            examples: [
                                { german: "Ich verstehe nichts.", english: "I understand nothing." },
                                { german: "Niemand ist zu Hause.", english: "Nobody is at home." },
                                { german: "Wir gehen nie ins Theater.", english: "We never go to the theater." },
                                { german: "Das macht nichts.", english: "That doesn't matter." },
                                { german: "Keine Ahnung!", english: "No idea!" },
                                { german: "Das ist gar nicht schwer.", english: "That's not difficult at all." },
                                { german: "Leider kann ich nicht kommen.", english: "Unfortunately, I can't come." },
                                { german: "Ich bin noch nicht fertig.", english: "I'm not finished yet." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d9-q1",
                            type: "text",
                            question: "Make a question: 'Du bist müde.'",
                            answer: "Bist du müde?",
                            explanation: "Verb 'Bist' comes first in Yes/No questions."
                        },
                        {
                            id: "d9-q2",
                            type: "choice",
                            question: "He is ___ (not) my brother.",
                            options: ["kein", "nicht"],
                            answer: "nicht",
                            explanation: "'My brother' is a specific person (possessive), so use 'nicht'."
                        },
                        {
                            id: "d9-q3",
                            type: "text",
                            question: "Reply 'Yes!' to: 'Wohnst du nicht hier?'",
                            answer: "Doch!",
                            explanation: "Doch contradicts the negative question assumption."
                        },
                        {
                            id: "d9-q4",
                            type: "choice",
                            question: "Transform to question: 'Sie arbeitet hier.'",
                            options: ["Arbeitet sie hier?", "Sie arbeitet hier?", "Arbeitet hier sie?"],
                            answer: "Arbeitet sie hier?",
                            explanation: "Verb first, then subject: Arbeitet sie hier?"
                        },
                        {
                            id: "d9-q5",
                            type: "text",
                            question: "Negate with 'kein': 'Ich habe ein Auto.'",
                            answer: "Ich habe kein Auto.",
                            explanation: "'ein Auto' → 'kein Auto' (indefinite article becomes kein)"
                        },
                        {
                            id: "d9-q6",
                            type: "choice",
                            question: "Complete: 'Das ist ___ gut.' (not good)",
                            options: ["kein", "nicht", "keine"],
                            answer: "nicht",
                            explanation: "Adjectives are negated with 'nicht': nicht gut."
                        },
                        {
                            id: "d9-q7",
                            type: "text",
                            question: "Ask: 'Do you have time?' (Sie form)",
                            answer: "Haben Sie Zeit?",
                            explanation: "Formal question: Haben Sie Zeit?"
                        },
                        {
                            id: "d9-q8",
                            type: "choice",
                            question: "Negate: 'Wir trinken Bier.'",
                            options: ["Wir trinken nicht Bier.", "Wir trinken kein Bier.", "Wir nicht trinken Bier."],
                            answer: "Wir trinken kein Bier.",
                            explanation: "Bare noun 'Bier' is negated with 'kein'."
                        },
                        {
                            id: "d9-q9",
                            type: "text",
                            question: "Transform: 'Er kann schwimmen.' (question)",
                            answer: "Kann er schwimmen?",
                            explanation: "Modal verb 'kann' goes first: Kann er schwimmen?"
                        },
                        {
                            id: "d9-q10",
                            type: "choice",
                            question: "Answer positively: 'Kommst du nicht mit?' (Aren't you coming along?)",
                            options: ["Ja!", "Doch!", "Nein!"],
                            answer: "Doch!",
                            explanation: "'Doch' contradicts negative questions positively."
                        },
                        {
                            id: "d9-q11",
                            type: "text",
                            question: "Negate: 'Das ist mein Buch.'",
                            answer: "Das ist nicht mein Buch.",
                            explanation: "Possessive 'mein' is negated with 'nicht'."
                        },
                        {
                            id: "d9-q12",
                            type: "choice",
                            question: "Complete: 'Ich habe ___ Geschwister.' (no siblings)",
                            options: ["nicht", "keine", "kein"],
                            answer: "keine",
                            explanation: "Plural noun without article: keine Geschwister."
                        },
                        {
                            id: "d9-q13",
                            type: "text",
                            question: "Ask: 'Are you learning German?' (du form)",
                            answer: "Lernst du Deutsch?",
                            explanation: "Regular verb question: Lernst du Deutsch?"
                        },
                        {
                            id: "d9-q14",
                            type: "choice",
                            question: "Position of 'nicht': 'Ich ___ ins Kino ___.'",
                            options: ["nicht...gehe", "gehe...nicht", "beide richtig"],
                            answer: "gehe...nicht",
                            explanation: "'Nicht' comes before prepositional phrases: gehe nicht ins Kino."
                        },
                        {
                            id: "d9-q15",
                            type: "text",
                            question: "Negate: 'Sie ist Lehrerin.'",
                            answer: "Sie ist keine Lehrerin.",
                            explanation: "Profession without article: keine Lehrerin."
                        },
                        {
                            id: "d9-q16",
                            type: "choice",
                            question: "Transform: 'Ihr steht früh auf.' (question)",
                            options: ["Steht ihr früh auf?", "Früh steht ihr auf?", "Ihr steht auf früh?"],
                            answer: "Steht ihr früh auf?",
                            explanation: "Separable verb question: Steht ihr früh auf?"
                        },
                        {
                            id: "d9-q17",
                            type: "text",
                            question: "Complete: 'Ich verstehe ___.' (nothing)",
                            answer: "nichts",
                            explanation: "'Nichts' means 'nothing': Ich verstehe nichts."
                        },
                        {
                            id: "d9-q18",
                            type: "choice",
                            question: "'Hast du keine Zeit?' - Answer: 'Yes, I do have time.'",
                            options: ["Ja, ich habe Zeit.", "Doch, ich habe Zeit.", "Nein, ich habe Zeit."],
                            answer: "Doch, ich habe Zeit.",
                            explanation: "'Doch' contradicts the negative assumption."
                        },
                        {
                            id: "d9-q19",
                            type: "text",
                            question: "Ask: 'Is that your car?' (dein Auto)",
                            answer: "Ist das dein Auto?",
                            explanation: "'Sein' question: Ist das dein Auto?"
                        },
                        {
                            id: "d9-q20",
                            type: "choice",
                            question: "Negate correctly: 'Das ist die Lösung.'",
                            options: ["Das ist keine Lösung.", "Das ist nicht die Lösung.", "beide richtig"],
                            answer: "Das ist nicht die Lösung.",
                            explanation: "Definite article 'die' requires 'nicht': nicht die Lösung."
                        },
                        {
                            id: "d9-q21",
                            type: "text",
                            question: "Express: 'I never go to the theater.'",
                            answer: "Ich gehe nie ins Theater.",
                            explanation: "'Nie' means 'never': Ich gehe nie ins Theater."
                        },
                        {
                            id: "d9-q22",
                            type: "choice",
                            question: "Common expression for 'No idea!'",
                            options: ["Nicht Idee!", "Keine Ahnung!", "Kein Wissen!"],
                            answer: "Keine Ahnung!",
                            explanation: "Fixed expression: Keine Ahnung! (No idea!)"
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
                            title: "1. Phase 1 Complete Review (Wiederholung)",
                            content: "Congratulations! You have completed the first major milestone of your German learning journey. You can now handle basic everyday situations with confidence.\n\n**What You Have Mastered:**\n\n**🔤 Pronunciation & Alphabet (Day 1):**\n* German alphabet and special characters (ä, ö, ü, ß)\n* Key pronunciation rules (W=V, V=F, Z=TS, CH sounds)\n* Essential greetings and farewells\n* Letter combinations (ei, ie, eu, sch, st/sp)\n\n**👥 Personal Introduction (Day 2):**\n* Personal pronouns (ich, du, er/sie/es, wir, ihr, sie/Sie)\n* Formal vs informal address (du vs Sie)\n* Self-introduction patterns (Ich heiße... Ich komme aus... Ich wohne in...)\n\n**🔢 Numbers & Basic Needs (Days 3-4):**\n* Numbers 0-100 with special German patterns\n* Essential verbs 'sein' and 'haben'\n* Expressing basic needs (Hunger/Durst haben)\n* Colors and age expressions\n* Asking prices (Wie viel kostet das?)\n\n**📅 Time & Preferences (Day 5):**\n* Days of the week and months\n* Seasons and time expressions\n* Expressing likes with 'gern'\n* Using prepositions 'am' and 'im'\n\n**⚙️ Grammar Foundation (Days 6-9):**\n* Regular verb conjugation patterns\n* Sentence structure and Position 2 rule\n* Noun genders (der/die/das) and articles\n* Plural formation strategies\n* W-questions for information gathering\n* Yes/No question formation\n* Negation with 'nicht' vs 'kein'\n* The 'doch' response for contradicting negative questions\n\n**Your German Toolbox Now Contains:**\n* ~150-200 essential vocabulary words\n* Basic sentence patterns for everyday communication\n* Question formation for gathering information\n* Ability to express agreement, disagreement, and preferences\n* Foundation for more complex grammar structures",
                            examples: [
                                { german: "Ich spreche ein bisschen Deutsch.", english: "I speak a little German." },
                                { german: "Das macht sehr viel Spaß.", english: "That is a lot of fun." },
                                { german: "Können Sie mir helfen?", english: "Can you help me?" },
                                { german: "Entschuldigung, wo ist die Toilette?", english: "Excuse me, where is the bathroom?" },
                                { german: "Ich verstehe nicht. Können Sie das wiederholen?", english: "I don't understand. Can you repeat that?" }
                            ]
                        },
                        {
                            title: "2. Self-Assessment Checklist",
                            content: "Use this checklist to evaluate your progress and identify areas that need more practice:\n\n**Pronunciation (✓ = Confident, ~ = Need Practice, ✗ = Need Review):**\n□ I can pronounce German umlauts (ä, ö, ü) correctly\n□ I know the difference between 'ei' and 'ie' sounds\n□ I can pronounce 'sch', 'ch', and 'st/sp' correctly\n□ I can say German 'r' or use an acceptable substitute\n□ I can greet people appropriately (formal vs informal)\n\n**Grammar & Structure:**\n□ I can conjugate regular verbs in present tense\n□ I understand and use the Position 2 rule\n□ I can form both W-questions and Yes/No questions\n□ I know when to use 'nicht' vs 'kein'\n□ I can identify noun genders at least 70% of the time\n□ I can create simple sentences with correct word order\n\n**Vocabulary & Communication:**\n□ I can introduce myself completely\n□ I can count from 0-100 confidently\n□ I know all days of the week and months\n□ I can express basic needs and preferences\n□ I can ask for prices and understand simple responses\n□ I can handle basic greetings and small talk\n\n**Areas for Continued Focus:**\n* If you checked mostly ✓: Excellent! You're ready for Phase 2\n* If you have several ~: Review those specific topics before moving on\n* If you have any ✗: Dedicate extra time to those areas\n\n**Study Tips for Weak Areas:**\n* Create flashcards for vocabulary you still struggle with\n* Practice verb conjugations daily until they become automatic\n* Record yourself speaking and compare to native speakers\n* Find a language exchange partner for conversation practice",
                            examples: [
                                { german: "Ich bin noch Anfänger.", english: "I'm still a beginner." },
                                { german: "Ich muss mehr üben.", english: "I need to practice more." },
                                { german: "Das ist schwer für mich.", english: "That's difficult for me." },
                                { german: "Ich mache Fortschritte.", english: "I'm making progress." }
                            ]
                        },
                        {
                            title: "3. Practical Conversation Scenarios",
                            content: "These real-world scenarios combine everything you've learned. Practice these until you feel comfortable:\n\n**Scenario 1: At a Café**\n**Kellner:** Guten Tag! Was möchten Sie trinken?\n**Sie:** Guten Tag. Ich möchte einen Kaffee, bitte.\n**Kellner:** Mit Milch und Zucker?\n**Sie:** Nur mit Milch, bitte. Was kostet der Kaffee?\n**Kellner:** Drei Euro fünfzig.\n**Sie:** Hier sind vier Euro. Danke schön!\n**Kellner:** Vielen Dank. Auf Wiedersehen!\n\n**Scenario 2: Meeting Someone New**\n**Person A:** Hallo! Wie heißen Sie?\n**Sie:** Ich heiße [Your Name]. Und Sie?\n**Person A:** Ich bin Maria Schmidt. Woher kommen Sie?\n**Sie:** Ich komme aus [Your Country]. Und Sie? Sind Sie aus Deutschland?\n**Person A:** Ja, ich wohne hier in Berlin. Sprechen Sie gut Deutsch?\n**Sie:** Nein, ich lerne erst seit kurzer Zeit. Aber es macht Spaß!\n\n**Scenario 3: Getting Directions**\n**Sie:** Entschuldigung, wo ist der Bahnhof?\n**Person:** Der Bahnhof? Das ist nicht weit. Gehen Sie geradeaus und dann links.\n**Sie:** Wie lange dauert das zu Fuß?\n**Person:** Etwa zehn Minuten.\n**Sie:** Vielen Dank für Ihre Hilfe!\n**Person:** Gern geschehen!\n\n**Scenario 4: Shopping**\n**Verkäufer:** Kann ich Ihnen helfen?\n**Sie:** Ja, wie viel kostet das Brot?\n**Verkäufer:** Zwei Euro zwanzig.\n**Sie:** Gut, ich nehme zwei Brote, bitte.\n**Verkäufer:** Das macht vier Euro vierzig.\n**Sie:** Hier sind fünf Euro.\n**Verkäufer:** Danke. Sechzig Cent zurück.\n\n**Practice Tips:**\n* Act out these scenarios with a partner or alone\n* Substitute different vocabulary (drinks, food, places)\n* Add your own variations and complications\n* Focus on natural intonation and rhythm",
                            examples: [
                                { german: "Können Sie mir bitte helfen?", english: "Can you please help me?" },
                                { german: "Wo kann ich das kaufen?", english: "Where can I buy that?" },
                                { german: "Wie komme ich zum Hauptbahnhof?", english: "How do I get to the main train station?" },
                                { german: "Sprechen Sie Englisch?", english: "Do you speak English?" }
                            ]
                        },
                        {
                            title: "4. Cultural Notes and Practical Tips",
                            content: "Understanding German culture is as important as learning the language:\n\n**Important Cultural Behaviors:**\n\n**1. Greetings and Formality:**\n* Always use 'Sie' with strangers, authority figures, and in business\n* 'Du' is offered, not assumed - wait for someone to say 'Wir können uns duzen'\n* Handshakes are common in professional settings\n* Eye contact shows respect and attention\n\n**2. Punctuality:**\n* Being on time is extremely important in German culture\n* 'Pünktlichkeit' (punctuality) is a core German value\n* If you're running late, call or text ahead\n\n**3. Direct Communication:**\n* Germans appreciate directness and honesty\n* 'Wie geht's?' usually expects a real answer, not just 'gut'\n* Constructive criticism is normal and not meant personally\n\n**4. Privacy and Personal Space:**\n* Germans value privacy ('Privatsphäre')\n* Don't ask personal questions too quickly\n* Respect personal space in public transportation\n\n**Practical Survival Phrases:**\n* **Entschuldigung** (Excuse me) - for getting attention or apologizing\n* **Können Sie mir helfen?** (Can you help me?) - universal request\n* **Ich verstehe nicht** (I don't understand) - essential for learners\n* **Sprechen Sie Englisch?** (Do you speak English?) - backup option\n* **Wie bitte?** (Pardon me?) - polite way to ask for repetition\n* **Das macht nichts** (That doesn't matter) - when someone apologizes\n* **Kein Problem** (No problem) - casual response\n\n**Learning Mindset:**\n* Embrace mistakes - they're part of learning\n* Germans often appreciate your effort to speak German\n* Don't be afraid to ask 'Können Sie das wiederholen?' (Can you repeat that?)\n* Use gestures and context when words fail you",
                            examples: [
                                { german: "Entschuldigung, ich bin neu hier.", english: "Excuse me, I'm new here." },
                                { german: "Können Sie langsamer sprechen?", english: "Can you speak more slowly?" },
                                { german: "Ich lerne noch Deutsch.", english: "I'm still learning German." },
                                { german: "Vielen Dank für Ihre Geduld.", english: "Thank you for your patience." }
                            ]
                        },
                        {
                            title: "5. Transition to Phase 2: What's Next?",
                            content: "You're now ready for Phase 2, which focuses on daily life and practical communication skills.\n\n**Phase 2 Preview - What You'll Learn Next:**\n\n**Days 11-15: Personal Life & Relationships**\n* Family vocabulary and possessive pronouns\n* Telling time (formal and informal)\n* Daily routines and separable verbs\n* Food vocabulary and the Accusative case\n* Modal verbs (können, wollen, müssen, dürfen, möchten)\n\n**Days 16-20: Advanced Communication**\n* Describing objects and people\n* Making polite requests and orders\n* Understanding German shopping culture\n* Prepositions and spatial relationships\n* Connecting ideas with conjunctions\n\n**Preparation Strategies:**\n* Review any weak areas from Phase 1 before continuing\n* Start a vocabulary journal for new words\n* Find German media (YouTube, podcasts) appropriate for A1 level\n* Set up regular practice schedules (15-30 minutes daily)\n* Consider finding a language exchange partner\n\n**Recommended Practice Between Phases:**\n* Download a German learning app for daily vocabulary review\n* Watch simple German YouTube videos with subtitles\n* Practice the conversation scenarios from this lesson\n* Try to think in German for simple daily activities\n* Join online German learning communities for support\n\n**Success Metrics for Phase 2:**\nBy the end of Phase 2, you should be able to:\n* Have a 5-minute conversation about your daily routine\n* Order food in a restaurant confidently\n* Describe your family and living situation\n* Handle basic shopping transactions\n* Express needs, wants, and obligations using modal verbs\n\n**Motivation Reminder:**\nLearning German is like building a house - Phase 1 was your foundation. Phase 2 will add the walls and rooms where you can actually live and communicate effectively. Keep going - you're making excellent progress!",
                            examples: [
                                { german: "Ich freue mich auf Phase 2!", english: "I'm looking forward to Phase 2!" },
                                { german: "Ich habe viel gelernt.", english: "I have learned a lot." },
                                { german: "Jetzt kann ich einfache Gespräche führen.", english: "Now I can have simple conversations." },
                                { german: "Deutsch wird jeden Tag einfacher.", english: "German gets easier every day." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d10-q1",
                            type: "choice",
                            question: "Big Review: Plural of 'das Kind'?",
                            options: ["die Kinde", "die Kinder", "die Kinders"],
                            answer: "die Kinder",
                            explanation: "Neuter monosyllabic noun -> -er ending: Kind → Kinder."
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
                            explanation: "Use 'haben' for Hunger, verb first for yes/no questions."
                        },
                        {
                            id: "d10-q4",
                            type: "choice",
                            question: "Review: How do you say 16 in German?",
                            options: ["sechszehn", "sechzehn", "zechszehn"],
                            answer: "sechzehn",
                            explanation: "Drop the 's' from sechs: sechzehn (not sechszehn)."
                        },
                        {
                            id: "d10-q5",
                            type: "text",
                            question: "Complete greeting: 'Guten ___' (Good day)",
                            answer: "Tag",
                            explanation: "Guten Tag is the standard formal greeting."
                        },
                        {
                            id: "d10-q6",
                            type: "choice",
                            question: "Review: 'Wie alt ___?' (How old are you - informal)",
                            options: ["sind Sie", "bist du", "ist er"],
                            answer: "bist du",
                            explanation: "Informal 'you' is 'du bist': Wie alt bist du?"
                        },
                        {
                            id: "d10-q7",
                            type: "text",
                            question: "Translate: 'My name is Anna.'",
                            answer: "Ich heiße Anna.",
                            explanation: "Standard introduction: Ich heiße + name."
                        },
                        {
                            id: "d10-q8",
                            type: "choice",
                            question: "Review: Which preposition with days? '___Montag'",
                            options: ["am", "im", "um"],
                            answer: "am",
                            explanation: "Days of the week use 'am': am Montag."
                        },
                        {
                            id: "d10-q9",
                            type: "text",
                            question: "Express preference: 'I like learning German.'",
                            answer: "Ich lerne gern Deutsch.",
                            explanation: "Use verb + gern: lerne gern."
                        },
                        {
                            id: "d10-q10",
                            type: "choice",
                            question: "Review: Verb position - 'Heute / ich / arbeite'",
                            options: ["Heute ich arbeite.", "Heute arbeite ich.", "Ich arbeite heute."],
                            answer: "Heute arbeite ich.",
                            explanation: "Inversion: Time + Verb + Subject."
                        },
                        {
                            id: "d10-q11",
                            type: "text",
                            question: "Review: Article for 'Mädchen' (girl)?",
                            answer: "das",
                            explanation: "Words ending in -chen are always neuter: das Mädchen."
                        },
                        {
                            id: "d10-q12",
                            type: "choice",
                            question: "Review: 'I don't understand.' in German?",
                            options: ["Ich verstehe nicht.", "Ich nicht verstehe.", "Nicht ich verstehe."],
                            answer: "Ich verstehe nicht.",
                            explanation: "'Nicht' goes after the verb: verstehe nicht."
                        },
                        {
                            id: "d10-q13",
                            type: "text",
                            question: "Ask for location: 'Where do you live?' (informal)",
                            answer: "Wo wohnst du?",
                            explanation: "Static location question: Wo wohnst du?"
                        },
                        {
                            id: "d10-q14",
                            type: "choice",
                            question: "Review: Conjugate 'sein' for 'wir'",
                            options: ["sind", "seid", "ist"],
                            answer: "sind",
                            explanation: "First person plural: wir sind."
                        },
                        {
                            id: "d10-q15",
                            type: "text",
                            question: "Review: How do you say 'excuse me'?",
                            answer: "Entschuldigung",
                            explanation: "Entschuldigung = excuse me (to get attention or apologize)."
                        },
                        {
                            id: "d10-q16",
                            type: "choice",
                            question: "Review: 'Das ist ___ Auto.' (not a car)",
                            options: ["nicht", "kein", "keine"],
                            answer: "kein",
                            explanation: "Indefinite article 'ein Auto' → 'kein Auto'."
                        },
                        {
                            id: "d10-q17",
                            type: "text",
                            question: "Count: What comes after neunzehn?",
                            answer: "zwanzig",
                            explanation: "After nineteen (neunzehn) comes twenty (zwanzig)."
                        },
                        {
                            id: "d10-q18",
                            type: "choice",
                            question: "Review: Answer 'Kommst du nicht?' positively",
                            options: ["Ja!", "Doch!", "Nein!"],
                            answer: "Doch!",
                            explanation: "'Doch' contradicts negative questions positively."
                        },
                        {
                            id: "d10-q19",
                            type: "text",
                            question: "Review: 'Good morning' in German?",
                            answer: "Guten Morgen",
                            explanation: "Guten Morgen (used until about 10-11 AM)."
                        },
                        {
                            id: "d10-q20",
                            type: "choice",
                            question: "Review: Which season is 'der Winter'?",
                            options: ["Spring", "Summer", "Autumn", "Winter"],
                            answer: "Winter",
                            explanation: "der Winter = winter. All seasons are masculine."
                        },
                        {
                            id: "d10-q21",
                            type: "text",
                            question: "Self-assessment: Rate your confidence 1-10 for basic conversations",
                            answer: "Answers vary",
                            explanation: "Honest self-assessment helps identify areas for improvement."
                        },
                        {
                            id: "d10-q22",
                            type: "choice",
                            question: "Phase 1 complete! What's the most important grammar rule?",
                            options: ["Verb in position 2", "Always use 'Sie'", "Memorize all plurals"],
                            answer: "Verb in position 2",
                            explanation: "Position 2 rule is fundamental to German sentence structure."
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
