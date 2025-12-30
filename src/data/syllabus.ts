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
    image?: string; // Optional image path
    imagePosition?: 'left' | 'right'; // Image position (default: right)
}

export interface LessonContent {
    sections: LessonSection[];
    homework: Question[];
}

import verbConjugationChart from '../images/verb-conjugation-chart.jpeg';
import articlesImage from '../images/articles.jpg';
import einOderEinenImage from '../images/ein-oder-einen.jpg';
import chart3Image from '../images/chart3.jpg';

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
                        },
                                                { id: "d1-q6", type: "choice", question: "Which letter sounds like English 'V'?",
                                                    options: ["W", "V", "B"], answer: "W",
                                                    explanation: "German W is pronounced like English V." },
                                                { id: "d1-q7", type: "text", question: "Write the German word for 'street'",
                                                    answer: "Straße", explanation: "Use ß (Eszett) after long vowels: Straße." },
                                                { id: "d1-q8", type: "choice", question: "Pick the umlaut for 'schon' → 'beautiful'",
                                                    options: ["ä", "ö", "ü"], answer: "ö",
                                                    explanation: "schön uses Ö (O-umlaut)." },
                                                { id: "d1-q9", type: "text", question: "Translate: 'Hello' (formal daytime)",
                                                    answer: "Guten Tag", explanation: "Standard formal daytime greeting." },
                                                { id: "d1-q10", type: "choice", question: "Which combo sounds like 'ee'?",
                                                    options: ["ei", "ie", "eu"], answer: "ie",
                                                    explanation: "ie is pronounced 'ee'." },
                                                { id: "d1-q11", type: "text", question: "Write the sound of 'Z' in German",
                                                    answer: "TS", explanation: "Z is pronounced 'tset' → TS sound." },
                                                { id: "d1-q12", type: "choice", question: "Choose correct CH sound after 'a'",
                                                    options: ["Ich-Laut", "Ach-Laut", "ch = k"], answer: "Ach-Laut",
                                                    explanation: "After a/o/u use the back 'Ach-Laut'." },
                                                { id: "d1-q13", type: "text", question: "Translate: 'See you later'",
                                                    answer: "Bis später", explanation: "Common informal farewell." },
                                                { id: "d1-q14", type: "choice", question: "ST at word start sounds like...",
                                                    options: ["st", "sht", "zt"], answer: "sht",
                                                    explanation: "st/sp at word start → sht/shp." },
                                                { id: "d1-q15", type: "text", question: "Write the German for 'girl'",
                                                    answer: "Mädchen", explanation: "Note ä and the -chen diminutive." },
                                                { id: "d1-q16", type: "choice", question: "Pick the correct farewell (informal)",
                                                    options: ["Auf Wiedersehen", "Tschüss", "Guten Abend"], answer: "Tschüss",
                                                    explanation: "Tschüss is informal bye." },
                                                { id: "d1-q17", type: "text", question: "Pronounce rule: Write 'Deutsch' sound",
                                                    answer: "Doytsh", explanation: "eu/äu → 'oy' sound." },
                                                { id: "d1-q18", type: "choice", question: "Which is an umlaut letter?",
                                                    options: ["Ä", "Å", "Ç"], answer: "Ä",
                                                    explanation: "German umlauts are Ä/Ö/Ü." },
                                                { id: "d1-q19", type: "text", question: "Translate: 'Good evening'",
                                                    answer: "Guten Abend", explanation: "Used after about 6pm." },
                                                { id: "d1-q20", type: "choice", question: "Eszett (ß) represents...",
                                                    options: ["ss", "sz", "b"], answer: "ss",
                                                    explanation: "ß is the sharp s (double s) sound." },
                                                { id: "d1-q21", type: "text", question: "Write: 'Goodbye' (informal)",
                                                    answer: "Tschüss", explanation: "Informal farewell." }
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
                                                },
                                                { id: "d2-q4", type: "text", question: "Translate: 'My name is Max.'",
                                                    answer: "Ich heiße Max.", explanation: "Use 'Ich heiße ...' to introduce yourself." },
                                                { id: "d2-q5", type: "choice", question: "Formal vs informal: Talking to a doctor",
                                                    options: ["du", "Sie", "ihr"], answer: "Sie",
                                                    explanation: "Use Sie with professionals and strangers." },
                                                { id: "d2-q6", type: "text", question: "Ask: 'Where are you from?' (formal)",
                                                    answer: "Woher kommen Sie?",
                                                    explanation: "Formal Woher kommen Sie?" },
                                                { id: "d2-q7", type: "choice", question: "Pick correct pronoun: speaking to two friends",
                                                    options: ["du", "Sie", "ihr"], answer: "ihr",
                                                    explanation: "Informal plural is 'ihr'." },
                                                { id: "d2-q8", type: "text", question: "Translate: 'We live in Berlin.'",
                                                    answer: "Wir wohnen in Berlin.", explanation: "wohnen = live/reside." },
                                                { id: "d2-q9", type: "choice", question: "Register: Meeting your boss's parents",
                                                    options: ["du", "Sie", "ihr"], answer: "Sie",
                                                    explanation: "Default to formal Sie until offered du." },
                                                { id: "d2-q10", type: "text", question: "Ask: 'What is your name?' (informal)",
                                                    answer: "Wie heißt du?", explanation: "Informal singular 'du'." },
                                                { id: "d2-q11", type: "choice", question: "Country with article: Switzerland",
                                                    options: ["aus Schweiz", "aus der Schweiz", "aus die Schweiz"],
                                                    answer: "aus der Schweiz",
                                                    explanation: "Some countries take an article: aus der Schweiz." },
                                                { id: "d2-q12", type: "text", question: "Translate: 'I am a student.' (male)",
                                                    answer: "Ich bin Student.", explanation: "Use 'Ich bin ...' for profession/status." },
                                                { id: "d2-q13", type: "choice", question: "Duzen request phrase",
                                                    options: ["Wollen wir uns duzen?", "Du jetzt!", "Sei du!"],
                                                    answer: "Wollen wir uns duzen?",
                                                    explanation: "Polite way to offer switching to du." },
                                                { id: "d2-q14", type: "text", question: "Translate: 'She is from Turkey.'",
                                                    answer: "Sie kommt aus der Türkei.", explanation: "Use article with Türkei." },
                                                { id: "d2-q15", type: "choice", question: "Pronoun for older neighbor (unknown)",
                                                    options: ["du", "Sie", "ihr"], answer: "Sie",
                                                    explanation: "Default formal with strangers/older people." },
                                                { id: "d2-q16", type: "text", question: "Ask: 'Who are you?' (formal)",
                                                    answer: "Wer sind Sie?", explanation: "Formal form uses 'sind Sie'." },
                                                { id: "d2-q17", type: "choice", question: "Pronoun for group of colleagues (same age)",
                                                    options: ["ihr", "Sie", "du"], answer: "Sie",
                                                    explanation: "In workplace, default to Sie unless invited to du." },
                                                { id: "d2-q18", type: "text", question: "Translate: 'We are learning German.'",
                                                    answer: "Wir lernen Deutsch.", explanation: "Present tense statement." },
                                                { id: "d2-q19", type: "choice", question: "Choose correct: 'You (formal) are from Italy.'",
                                                    options: ["Du kommst aus Italien.", "Sie kommen aus Italien.", "Ihr kommt aus Italien."],
                                                    answer: "Sie kommen aus Italien.", explanation: "Formal Sie uses plural verb form." },
                                                { id: "d2-q20", type: "text", question: "Translate: 'I live in Munich now.'",
                                                    answer: "Ich wohne jetzt in München.", explanation: "Include 'jetzt' for now." }
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
                                                },
                                                { id: "d3-q5", type: "text", question: "Write the number 17 in German.",
                                                    answer: "siebzehn", explanation: "Drop 'en' from sieben: siebzehn." },
                                                { id: "d3-q6", type: "choice", question: "Conjugate 'sein' for 'ihr'",
                                                    options: ["seid", "sind", "bist"], answer: "seid",
                                                    explanation: "ihr seid." },
                                                { id: "d3-q7", type: "text", question: "Translate: 'He has time.'",
                                                    answer: "Er hat Zeit.", explanation: "haben + noun." },
                                                { id: "d3-q8", type: "choice", question: "Pick correct: 'They are happy.'",
                                                    options: ["Sie sind glücklich.", "Sie habt glücklich.", "Sie ist glücklich."],
                                                    answer: "Sie sind glücklich.", explanation: "Plural 'sie' uses sind." },
                                                { id: "d3-q9", type: "text", question: "Write 20 in German.",
                                                    answer: "zwanzig", explanation: "20 = zwanzig." },
                                                { id: "d3-q10", type: "choice", question: "Choose correct expression: 'to be thirsty'",
                                                    options: ["Durst sein", "Durst haben", "Durst machen"], answer: "Durst haben",
                                                    explanation: "Use haben for Durst/Hunger/Angst." },
                                                { id: "d3-q11", type: "text", question: "Translate: 'We have money.'",
                                                    answer: "Wir haben Geld.", explanation: "haben + noun." },
                                                { id: "d3-q12", type: "choice", question: "Conjugate 'haben' for 'wir'",
                                                    options: ["habt", "haben", "hat"], answer: "haben",
                                                    explanation: "wir haben." },
                                                { id: "d3-q13", type: "text", question: "Translate: 'Are you (informal) at home?'",
                                                    answer: "Bist du zu Hause?", explanation: "sein question with 'bist du'." },
                                                { id: "d3-q14", type: "choice", question: "Pick correct: 'I have a question.'",
                                                    options: ["Ich bin Frage.", "Ich habe eine Frage.", "Ich fragt."],
                                                    answer: "Ich habe eine Frage.", explanation: "haben + eine Frage." },
                                                { id: "d3-q15", type: "text", question: "Write 13 and 19 in German.",
                                                    answer: "dreizehn, neunzehn", explanation: "teen numbers: +zehn." },
                                                { id: "d3-q16", type: "choice", question: "Select correct 'sein' for 'er'",
                                                    options: ["ist", "sind", "seid"], answer: "ist",
                                                    explanation: "er/sie/es ist." },
                                                { id: "d3-q17", type: "text", question: "Translate: 'You (formal) are right.'",
                                                    answer: "Sie haben Recht.", explanation: "Fixed phrase: Recht haben." },
                                                { id: "d3-q18", type: "choice", question: "Pick correct number spelling: 12",
                                                    options: ["zwölf", "zwolf", "zwölf"], answer: "zwölf",
                                                    explanation: "Use umlaut: zwölf." },
                                                { id: "d3-q19", type: "text", question: "Translate: 'She is afraid.'",
                                                    answer: "Sie hat Angst.", explanation: "Angst haben." },
                                                { id: "d3-q20", type: "choice", question: "Choose correct: 'We are at home.'",
                                                    options: ["Wir sind zu Hause.", "Wir haben zu Hause.", "Wir seid zu Hause."],
                                                    answer: "Wir sind zu Hause.", explanation: "sein + location." }
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
                            image: verbConjugationChart,
                            imagePosition: "right",
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
                            image: articlesImage,
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
                            title: "3. Understanding Subjects and Objects: The Foundation (MANDATORY)",
                            content: "**This is the bread and butter of A1 German!** Before we learn how German marks subjects and objects, we need to understand WHAT they are. Don't skip this section!\n\n**STEP 1: What is a SUBJECT?**\n\nThe subject is the **DOER** of the action in a sentence. It's the person or thing that performs the verb.\n\n**How to find the subject:**\nAsk: **\"Who or what is doing the action?\"**\n\n**English Examples:**\n* **The dog** barks. → Who barks? → The dog (subject)\n* **Maria** reads a book. → Who reads? → Maria (subject)\n* **The car** is red. → What is red? → The car (subject)\n\n**German Examples:**\n* **Der Hund** bellt. → Wer bellt? → Der Hund (subject)\n* **Maria** liest ein Buch. → Wer liest? → Maria (subject)\n* **Das Auto** ist rot. → Was ist rot? → Das Auto (subject)\n\n**STEP 2: What is an OBJECT?**\n\nThe object is the **RECEIVER** of the action. It's the person or thing that the action is done TO.\n\n**How to find the object:**\nAsk: **\"Who or what is receiving the action?\"**\n\n**English Examples:**\n* The dog sees **the cat**. → What does the dog see? → the cat (object)\n* Maria reads **a book**. → What does Maria read? → a book (object)\n* I love **you**. → Whom do I love? → you (object)\n\n**German Examples:**\n* Der Hund sieht **die Katze**. → Was sieht der Hund? → die Katze (object)\n* Maria liest **ein Buch**. → Was liest Maria? → ein Buch (object)\n* Ich liebe **dich**. → Wen liebe ich? → dich (object)\n\n**STEP 3: Practice Identifying Subjects and Objects**\n\nLet's analyze this sentence together:\n**\"The man buys an apple.\"**\n\n1. Find the verb: **buys**\n2. Ask \"Who buys?\" → **The man** (SUBJECT - the doer)\n3. Ask \"What does he buy?\" → **an apple** (OBJECT - the receiver)\n\n**Another example:**\n**\"The teacher asks the student.\"**\n\n1. Find the verb: **asks**\n2. Ask \"Who asks?\" → **The teacher** (SUBJECT - the doer)\n3. Ask \"Whom does the teacher ask?\" → **the student** (OBJECT - the receiver)\n\n**STEP 4: Now Let's Learn How German Shows This!**\n\n**What Are Cases?**\nIn English, we show subject and object mainly through word order. In German, we use **CASES** - special forms of articles that show whether a noun is the subject or object.\n\nGerman has four cases, but at A1 level, you MUST master these two:\n\n**1. NOMINATIVE CASE (Der Nominativ) = SUBJECT**\n* **Function:** Marks the **SUBJECT** - the \"doer\" of the action\n* **Question:** Wer? (Who?) or Was? (What?) is doing the action?\n* **Position:** Usually before the verb in statements\n\n**2. ACCUSATIVE CASE (Der Akkusativ) = DIRECT OBJECT**\n* **Function:** Marks the **DIRECT OBJECT** - the \"receiver\" of the action\n* **Question:** Wen? (Whom?) or Was? (What?) is receiving the action?\n* **Position:** Usually after the verb\n\n**STEP 5: THE GOLDEN RULE (Memorize This!):**\n\n🌟 **ONLY THE MASCULINE ARTICLES CHANGE!** 🌟\n\nWhen a masculine noun changes from subject to object, its article changes:\n\n**Nominative (Subject) → Accusative (Object):**\n* **Masculine:** der → den, ein → einen ✓ **CHANGES!**\n* **Feminine:** die → die, eine → eine (NO CHANGE)\n* **Neuter:** das → das, ein → ein (NO CHANGE)\n* **Plural:** die → die (NO CHANGE)\n\n**Quick Reference:**\n* **Masculine changes:** der → den, ein → einen\n* **Everything else stays the same!**\n* **Memory trick:** Think of 'N' for 'eN' (den, einen, keinen)\n\n**STEP 6: Putting It All Together**\n\n**Example Analysis:**\n**Sentence:** Der Mann kauft einen Apfel.\n\n1. **Find the verb:** kauft (buys)\n2. **Find the subject:** Wer kauft? → **Der Mann** (Nominative - subject)\n3. **Find the object:** Was kauft der Mann? → **einen Apfel** (Accusative - object)\n4. **Why 'einen'?** Because Apfel is masculine AND it's the object!\n5. **Translation:** The man buys an apple.\n\n**Another Example:**\n**Sentence:** Ich sehe den Lehrer.\n\n1. **Find the verb:** sehe (see)\n2. **Find the subject:** Wer sieht? → **Ich** (Nominative - subject)\n3. **Find the object:** Wen sehe ich? → **den Lehrer** (Accusative - object)\n4. **Why 'den'?** Because Lehrer is masculine AND it's the object!\n5. **Translation:** I see the teacher.\n\n**Common Verbs That Take Accusative Objects:**\n* **haben** (to have): Ich habe einen Hund.\n* **sehen** (to see): Ich sehe den Film.\n* **trinken** (to drink): Er trinkt einen Kaffee.\n* **essen** (to eat): Sie isst einen Apfel.\n* **kaufen** (to buy): Wir kaufen ein Auto.\n* **lesen** (to read): Du liest das Buch.\n* **lieben** (to love): Ich liebe dich.\n* **brauchen** (to need): Er braucht einen Stift.\n\n**Negative Form - Kein:**\nThe negative 'kein' follows the same pattern:\n* **Nominative:** kein Mann, keine Frau, kein Kind\n* **Accusative:** keinen Mann, keine Frau, kein Kind\n\n**Critical Mistakes to Avoid:**\n* ❌ Ich sehe der Mann. → ✅ Ich sehe den Mann.\n* ❌ Er hat ein Bruder. → ✅ Er hat einen Bruder.\n* ❌ Wir kaufen einen Auto. → ✅ Wir kaufen ein Auto. (neuter doesn't change!)",
                            image: chart3Image,
                            imagePosition: "right",
                            examples: [
                                { german: "Der Mann kauft einen Apfel.", english: "The man (subject-NOM) buys an apple (object-ACC, masculine)." },
                                { german: "Ich sehe den Lehrer.", english: "I see the teacher (object-ACC, masculine: der→den)." },
                                { german: "Sie hat einen Bruder.", english: "She has a brother (object-ACC, masculine: ein→einen)." },
                                { german: "Wir trinken die Milch.", english: "We drink the milk (object-ACC, feminine: die→die, NO CHANGE)." },
                                { german: "Er liest das Buch.", english: "He reads the book (object-ACC, neuter: das→das, NO CHANGE)." },
                                { german: "Die Frau kauft eine Lampe.", english: "The woman (subject-NOM) buys a lamp (object-ACC, feminine: eine→eine, NO CHANGE)." },
                                { german: "Ich brauche keinen Stift.", english: "I don't need a pen (object-ACC, masculine: kein→keinen)." },
                                { german: "Der Hund sieht den Vogel.", english: "The dog (subject-NOM) sees the bird (object-ACC, masculine: der→den)." },
                                { german: "Hast du einen Computer?", english: "Do you have a computer? (object-ACC, masculine: ein→einen)" },
                                { german: "Sie liebt den Film.", english: "She loves the film (object-ACC, masculine: der→den)." }
                            ]
                        },
                        {
                            title: "4. Indefinite Articles: Ein, Eine, Ein",
                            content: "The indefinite articles correspond to 'a' or 'an' in English. They change based on the gender of the noun they accompany.\n\n**Indefinite Article System (Nominative):**\n* **Masculine (der) → ein**: ein Tisch, ein Mann, ein Apfel\n* **Feminine (die) → eine**: eine Lampe, eine Frau, eine Banane  \n* **Neuter (das) → ein**: ein Auto, ein Kind, ein Haus\n* **Plural**: NO indefinite article (just like English: 'books', not 'a books')\n\n**Indefinite Article System (Accusative):**\n* **Masculine (der) → einen**: einen Tisch, einen Mann, einen Apfel\n* **Feminine (die) → eine**: eine Lampe, eine Frau, eine Banane (NO CHANGE)\n* **Neuter (das) → ein**: ein Auto, ein Kind, ein Haus (NO CHANGE)\n\n**Usage Patterns:**\n1. **Introducing something new:** Das ist ein Auto. (That's a car.)\n2. **Talking about professions:** Ich bin ein Lehrer. (I am a teacher.)\n3. **Describing quantities:** Ich möchte ein Bier. (I would like a beer.)\n4. **With accusative objects:** Ich habe einen Hund. (I have a dog.)\n\n**Important Notes:**\n- Unlike English, you can't use the indefinite article with plural nouns\n- Remember: ein→einen for masculine accusative objects!\n- Some expressions don't use articles where English does\n\n**Negative Form - Kein:**\nThe negative form of 'ein' is 'kein' (no/not a):\n* **Nominative:** kein Apfel, keine Lampe, kein Auto\n* **Accusative:** keinen Apfel, keine Lampe, kein Auto",
                            examples: [
                                { german: "Das ist ein Tisch (der).", english: "That is a table. (Nominative)" },
                                { german: "Ich habe eine Lampe (die).", english: "I have a lamp. (Accusative, feminine - no change)" },
                                { german: "Das ist ein Haus (das).", english: "That is a house. (Nominative)" },
                                { german: "Ich kaufe einen Tisch (der).", english: "I buy a table. (Accusative, masculine: ein→einen)" },
                                { german: "Das sind Bücher.", english: "Those are books. (No indefinite article for plural)" },
                                { german: "Ich habe kein Auto.", english: "I don't have a car. (Accusative, neuter)" },
                                { german: "Sie ist eine Lehrerin.", english: "She is a teacher. (Nominative)" }
                            ]
                        },
                        {
                            title: "5. Plural Formation - The Five Ways",
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
                            title: "6. Compound Nouns - German's Building Blocks",
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
                            question: "Complete: 'Sie kauft ___ Apfel.' (She buys an apple - der Apfel)",
                            answer: "einen Apfel",
                            explanation: "Apfel is masculine and the OBJECT. Accusative: ein → einen Apfel."
                        },
                        {
                            id: "d7-q5",
                            type: "choice",
                            question: "Complete: 'Ich trinke ___ Milch.' (I drink the milk - die Milch)",
                            options: ["der", "die", "den"],
                            answer: "die",
                            explanation: "Milch is feminine. Feminine doesn't change in accusative: die → die!"
                        },
                        {
                            id: "d7-q6",
                            type: "text",
                            question: "Complete: 'Er liest ___ Buch.' (He reads the book - das Buch)",
                            answer: "das Buch",
                            explanation: "Buch is neuter. Neuter doesn't change in accusative: das → das!"
                        },
                        {
                            id: "d7-q7",
                            type: "choice",
                            question: "Identify the case: 'Der Lehrer fragt den Schüler.' What case is 'den Schüler'?",
                            options: ["Nominative (subject)", "Accusative (object)", "Dative"],
                            answer: "Accusative (object)",
                            explanation: "Den Schüler receives the action (is being asked). It's the direct object = Accusative."
                        },
                        {
                            id: "d7-q8",
                            type: "text",
                            question: "Complete: 'Wir brauchen ___ Stift.' (We need a pen - der Stift)",
                            answer: "einen Stift",
                            explanation: "Stift is masculine and the OBJECT. Accusative: ein → einen Stift."
                        },
                        {
                            id: "d7-q9",
                            type: "choice",
                            question: "Complete: 'Hast du ___ Computer?' (Do you have a computer - der Computer)",
                            options: ["ein", "einen", "eine"],
                            answer: "einen",
                            explanation: "Computer is masculine and the OBJECT. Accusative: ein → einen Computer."
                        },
                        {
                            id: "d7-q10",
                            type: "text",
                            question: "Negate: 'Ich habe einen Hund.' (I have a dog)",
                            answer: "Ich habe keinen Hund.",
                            explanation: "Hund is masculine accusative. Negative: einen → keinen Hund."
                        },
                        {
                            id: "d7-q11",
                            type: "choice",
                            question: "Which is correct? 'Der Hund sieht ___ Vogel.' (The dog sees the bird - der Vogel)",
                            options: ["der Vogel", "den Vogel", "dem Vogel"],
                            answer: "den Vogel",
                            explanation: "Vogel is masculine and the OBJECT (being seen). Accusative: der → den!"
                        },
                        {
                            id: "d7-q12",
                            type: "text",
                            question: "Complete: 'Sie liebt ___ Film.' (She loves the film - der Film)",
                            answer: "den Film",
                            explanation: "Film is masculine and the OBJECT. Accusative: der → den Film."
                        },
                        {
                            id: "d7-q13",
                            type: "choice",
                            question: "Complete: 'Ich kaufe ___ Auto.' (I buy a car - das Auto)",
                            options: ["ein", "einen", "eine"],
                            answer: "ein",
                            explanation: "Auto is neuter. Neuter doesn't change in accusative: ein → ein Auto!"
                        },
                        {
                            id: "d7-q14",
                            type: "text",
                            question: "Complete: 'Wir sehen ___ Frau.' (We see the woman - die Frau)",
                            answer: "die Frau",
                            explanation: "Frau is feminine. Feminine doesn't change in accusative: die → die!"
                        },
                        {
                            id: "d7-q15",
                            type: "choice",
                            question: "What is the subject (nominative) in: 'Der Mann kauft einen Apfel.'?",
                            options: ["Der Mann", "einen Apfel", "kauft"],
                            answer: "Der Mann",
                            explanation: "Der Mann is doing the action (buying) = subject = nominative."
                        },
                        {
                            id: "d7-q16",
                            type: "text",
                            question: "Complete: 'Er hat ___ Schwester.' (He has a sister - die Schwester)",
                            answer: "eine Schwester",
                            explanation: "Schwester is feminine. Feminine doesn't change: eine → eine Schwester!"
                        },
                        {
                            id: "d7-q17",
                            type: "choice",
                            question: "Complete: 'Der Mann kauft ___ Apfel.' (The man buys an apple - der Apfel)",
                            options: ["ein", "einen", "eine"],
                            answer: "einen",
                            explanation: "Apfel is masculine and the OBJECT. Accusative: ein → einen Apfel."
                        },
                        {
                            id: "d7-q18",
                            type: "text",
                            question: "Translate: 'I see the teacher.' (der Lehrer)",
                            answer: "Ich sehe den Lehrer.",
                            explanation: "Lehrer is masculine object. Accusative: der → den Lehrer."
                        },
                        {
                            id: "d7-q19",
                            type: "choice",
                            question: "Complete: 'Sie hat ___ Bruder.' (She has a brother - der Bruder)",
                            options: ["ein", "einen", "eine"],
                            answer: "einen",
                            explanation: "Bruder is masculine object. Accusative: ein → einen Bruder."
                        },
                        {
                            id: "d7-q20",
                            type: "text",
                            question: "Complete: 'Wir trinken ___ Milch.' (We drink the milk - die Milch)",
                            answer: "die Milch",
                            explanation: "Milch is feminine. Feminine doesn't change in accusative: die → die!"
                        },
                        {
                            id: "d7-q21",
                            type: "choice",
                            question: "Complete: 'Er liest ___ Buch.' (He reads the book - das Buch)",
                            options: ["der", "das", "den"],
                            answer: "das",
                            explanation: "Buch is neuter. Neuter doesn't change in accusative: das → das!"
                        },
                        {
                            id: "d7-q22",
                            type: "text",
                            question: "Complete: 'Die Frau kauft ___ Lampe.' (The woman buys a lamp - die Lampe)",
                            answer: "eine Lampe",
                            explanation: "Lampe is feminine object. Feminine doesn't change: eine → eine Lampe!"
                        },
                        {
                            id: "d7-q23",
                            type: "choice",
                            question: "Negate: 'Ich brauche einen Stift.' (I need a pen)",
                            options: ["Ich brauche nicht Stift.", "Ich brauche keinen Stift.", "Ich brauche kein Stift."],
                            answer: "Ich brauche keinen Stift.",
                            explanation: "Stift is masculine accusative. Negative: einen → keinen Stift."
                        },
                        {
                            id: "d7-q24",
                            type: "text",
                            question: "Complete: 'Der Hund sieht ___ Vogel.' (The dog sees the bird - der Vogel)",
                            answer: "den Vogel",
                            explanation: "Vogel is masculine object. Accusative: der → den Vogel."
                        },
                        {
                            id: "d7-q25",
                            type: "choice",
                            question: "Complete: 'Hast du ___ Computer?' (Do you have a computer - der Computer)",
                            options: ["ein", "einen", "eine"],
                            answer: "einen",
                            explanation: "Computer is masculine object. Accusative: ein → einen Computer."
                        },
                        {
                            id: "d7-q26",
                            type: "text",
                            question: "Complete: 'Sie liebt ___ Film.' (She loves the film - der Film)",
                            answer: "den Film",
                            explanation: "Film is masculine object. Accusative: der → den Film."
                        },
                        {
                            id: "d7-q27",
                            type: "choice",
                            question: "Golden Rule: Which gender changes in accusative?",
                            options: ["Only masculine", "Only feminine", "All genders"],
                            answer: "Only masculine",
                            explanation: "THE GOLDEN RULE: Only masculine changes! der→den, ein→einen"
                        },
                        {
                            id: "d7-q28",
                            type: "text",
                            question: "What is the subject in: 'Der Mann kauft einen Apfel.'?",
                            answer: "Der Mann",
                            explanation: "Der Mann is doing the action (buying) = subject = nominative."
                        },
                        {
                            id: "d7-q29",
                            type: "choice",
                            question: "What is the object in: 'Der Mann kauft einen Apfel.'?",
                            options: ["Der Mann", "einen Apfel", "kauft"],
                            answer: "einen Apfel",
                            explanation: "Einen Apfel receives the action (is being bought) = object = accusative."
                        },
                        {
                            id: "d7-q30",
                            type: "text",
                            question: "Plural of 'das Kind' (child)?",
                            answer: "die Kinder",
                            explanation: "Neuter monosyllabic noun: Kind → Kinder (add -er)."
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
                            content: "Congratulations! You have completed the first major milestone of your German learning journey. You can now handle basic everyday situations with confidence.\n\n**What You Have Mastered:**\n\n**🔤 Pronunciation & Alphabet (Day 1):**\n* German alphabet and special characters (ä, ö, ü, ß)\n* Key pronunciation rules (W=V, V=F, Z=TS, CH sounds)\n* Essential greetings and farewells\n* Letter combinations (ei, ie, eu, sch, st/sp)\n\n**👥 Personal Introduction (Day 2):**\n* Personal pronouns (ich, du, er/sie/es, wir, ihr, sie/Sie)\n* Formal vs informal address (du vs Sie)\n* Self-introduction patterns (Ich heiße... Ich komme aus... Ich wohne in...)\n\n**🔢 Numbers & Basic Needs (Days 3-4):**\n* Numbers 0-100 with special German patterns\n* Essential verbs 'sein' and 'haben'\n* Expressing basic needs (Hunger/Durst haben)\n* Colors and age expressions\n* Asking prices (Wie viel kostet das?)\n\n**📅 Time & Preferences (Day 5):**\n* Days of the week and months\n* Seasons and time expressions\n* Expressing likes with 'gern'\n* Using prepositions 'am' and 'im'\n\n**⚙️ Grammar Foundation (Days 6-9):**\n* Regular verb conjugation patterns\n* Sentence structure and Position 2 rule\n* **Noun genders (der/die/das) and the case system**\n* **Understanding subjects (doers) vs objects (receivers)**\n* **THE GOLDEN RULE: Only masculine articles change in accusative (der→den, ein→einen)**\n* **Nominative case for subjects, Accusative case for direct objects**\n* Plural formation strategies\n* W-questions for information gathering\n* Yes/No question formation\n* Negation with 'nicht' vs 'kein'\n* The 'doch' response for contradicting negative questions\n\n**Your German Toolbox Now Contains:**\n* ~150-200 essential vocabulary words\n* Basic sentence patterns for everyday communication\n* Question formation for gathering information\n* Ability to express agreement, disagreement, and preferences\n* **Understanding of German case system (Nominative & Accusative)**\n* **Ability to identify subjects and objects in sentences**\n* Foundation for more complex grammar structures",
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
                        },
                        {
                            id: "d10-q23",
                            type: "choice",
                            question: "Review: What is the subject in a sentence?",
                            options: ["The doer of the action", "The receiver of the action", "The verb"],
                            answer: "The doer of the action",
                            explanation: "The subject is the person/thing performing the action."
                        },
                        {
                            id: "d10-q24",
                            type: "choice",
                            question: "Review: What is the object in a sentence?",
                            options: ["The doer", "The receiver of the action", "The verb"],
                            answer: "The receiver of the action",
                            explanation: "The object receives the action being performed."
                        },
                        {
                            id: "d10-q25",
                            type: "choice",
                            question: "Review: THE GOLDEN RULE - Which gender changes in accusative?",
                            options: ["Only masculine", "Only feminine", "All three genders"],
                            answer: "Only masculine",
                            explanation: "Only masculine changes: der→den, ein→einen. Everything else stays the same!"
                        },
                        {
                            id: "d10-q26",
                            type: "text",
                            question: "Review: Complete 'Ich sehe ___ Mann.' (der Mann - I see the man)",
                            answer: "den Mann",
                            explanation: "Mann is masculine object (accusative): der → den Mann."
                        },
                        {
                            id: "d10-q27",
                            type: "choice",
                            question: "Review: Complete 'Er hat ___ Schwester.' (die Schwester)",
                            options: ["eine", "einen", "ein"],
                            answer: "eine",
                            explanation: "Schwester is feminine. Feminine doesn't change in accusative: eine."
                        },
                        {
                            id: "d10-q28",
                            type: "text",
                            question: "Review: Complete 'Wir kaufen ___ Auto.' (das Auto)",
                            answer: "ein Auto",
                            explanation: "Auto is neuter. Neuter doesn't change in accusative: ein Auto."
                        },
                        {
                            id: "d10-q29",
                            type: "choice",
                            question: "Review: Which case is used for the subject?",
                            options: ["Nominative", "Accusative", "Dative"],
                            answer: "Nominative",
                            explanation: "Nominative case marks the subject (the doer)."
                        },
                        {
                            id: "d10-q30",
                            type: "choice",
                            question: "Review: Which case is used for the direct object?",
                            options: ["Nominative", "Accusative", "Dative"],
                            answer: "Accusative",
                            explanation: "Accusative case marks the direct object (the receiver)."
                        },
                        {
                            id: "d10-q31",
                            type: "text",
                            question: "Review: Negate 'Ich habe einen Hund.'",
                            answer: "Ich habe keinen Hund.",
                            explanation: "Masculine accusative: einen → keinen Hund."
                        },
                        {
                            id: "d10-q32",
                            type: "choice",
                            question: "Review: In 'Der Lehrer fragt den Schüler', what is 'den Schüler'?",
                            options: ["Subject (nominative)", "Direct object (accusative)", "Verb"],
                            answer: "Direct object (accusative)",
                            explanation: "Den Schüler receives the action (is being asked) = accusative object."
                        },
                        {
                            id: "d10-q33",
                            type: "text",
                            question: "Review: Complete 'Sie liebt ___ Film.' (der Film)",
                            answer: "den Film",
                            explanation: "Film is masculine object: der → den Film (accusative)."
                        },
                        {
                            id: "d10-q34",
                            type: "choice",
                            question: "Review: Memory trick for accusative masculine?",
                            options: ["Think of 'N' for eN (den, einen, keinen)", "Think of 'M' for masculine", "No trick needed"],
                            answer: "Think of 'N' for eN (den, einen, keinen)",
                            explanation: "The 'N' trick helps remember: den, einen, keinen all end in -en."
                        },
                        {
                            id: "d10-q35",
                            type: "text",
                            question: "Review: Complete 'Hast du ___ Computer?' (der Computer)",
                            answer: "einen Computer",
                            explanation: "Computer is masculine object: ein → einen Computer (accusative)."
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
                        },
                        {
                            id: "d11-q4",
                            type: "choice",
                            question: "What is 'die Mutter'?",
                            options: ["Father", "Mother", "Sister"],
                            answer: "Mother",
                            explanation: "die Mutter = mother (feminine)"
                        },
                        {
                            id: "d11-q5",
                            type: "text",
                            question: "Translate: 'Our children'",
                            answer: "Unsere Kinder",
                            explanation: "Kinder is plural -> unsere (add -e)"
                        },
                        {
                            id: "d11-q6",
                            type: "choice",
                            question: "Complete: 'Ist das ___ Vater?' (your - informal)",
                            options: ["dein", "deine", "deinen"],
                            answer: "dein",
                            explanation: "Vater is masculine nominative -> dein"
                        },
                        {
                            id: "d11-q7",
                            type: "text",
                            question: "Translate: 'My parents'",
                            answer: "Meine Eltern",
                            explanation: "Eltern is always plural -> meine"
                        },
                        {
                            id: "d11-q8",
                            type: "choice",
                            question: "What is 'der Bruder'?",
                            options: ["Brother", "Cousin", "Uncle"],
                            answer: "Brother",
                            explanation: "der Bruder = brother (masculine)"
                        },
                        {
                            id: "d11-q9",
                            type: "text",
                            question: "Translate: 'Your grandmother' (formal Sie)",
                            answer: "Ihre Großmutter",
                            explanation: "Formal Sie -> Ihr/Ihre (capitalized). Großmutter feminine -> Ihre"
                        },
                        {
                            id: "d11-q10",
                            type: "choice",
                            question: "Complete: 'Das ist ___ Schwester.' (his)",
                            options: ["sein", "seine", "ihr"],
                            answer: "seine",
                            explanation: "Schwester is feminine -> seine (add -e for feminine)"
                        },
                        {
                            id: "d11-q11",
                            type: "text",
                            question: "Translate: 'Their son'",
                            answer: "Ihr Sohn",
                            explanation: "sie (they) -> ihr. Sohn is masculine -> ihr"
                        },
                        {
                            id: "d11-q12",
                            type: "choice",
                            question: "What is 'die Tochter'?",
                            options: ["Daughter", "Son", "Niece"],
                            answer: "Daughter",
                            explanation: "die Tochter = daughter (feminine)"
                        },
                        {
                            id: "d11-q13",
                            type: "text",
                            question: "Translate: 'I have two brothers.'",
                            answer: "Ich habe zwei Brüder.",
                            explanation: "Bruder plural = Brüder (with Umlaut)"
                        },
                        {
                            id: "d11-q14",
                            type: "choice",
                            question: "Complete: '___ Oma ist sehr alt.' (our)",
                            options: ["Unser", "Unsere", "Unseren"],
                            answer: "Unsere",
                            explanation: "Oma is feminine -> unsere"
                        },
                        {
                            id: "d11-q15",
                            type: "text",
                            question: "What is 'der Onkel'?",
                            answer: "Uncle",
                            explanation: "der Onkel = uncle (masculine)"
                        },
                        {
                            id: "d11-q16",
                            type: "choice",
                            question: "Complete: 'Wo wohnen ___ Großeltern?' (your - du)",
                            options: ["dein", "deine", "deinen"],
                            answer: "deine",
                            explanation: "Großeltern is plural -> deine"
                        },
                        {
                            id: "d11-q17",
                            type: "text",
                            question: "Translate: 'Her daughter is 5 years old.'",
                            answer: "Ihre Tochter ist 5 Jahre alt.",
                            explanation: "sie (her) -> ihr. Tochter feminine -> ihre"
                        },
                        {
                            id: "d11-q18",
                            type: "choice",
                            question: "What is 'die Tante'?",
                            options: ["Aunt", "Uncle", "Cousin"],
                            answer: "Aunt",
                            explanation: "die Tante = aunt (feminine)"
                        },
                        {
                            id: "d11-q19",
                            type: "text",
                            question: "Translate: 'My family is big.'",
                            answer: "Meine Familie ist groß.",
                            explanation: "Familie is feminine -> meine"
                        },
                        {
                            id: "d11-q20",
                            type: "choice",
                            question: "Complete: 'Das sind ___ Eltern.' (my)",
                            options: ["mein", "meine", "meinen"],
                            answer: "meine",
                            explanation: "Eltern is plural -> meine"
                        },
                        {
                            id: "d11-q21",
                            type: "text",
                            question: "Translate: 'Your siblings' (ihr - plural you)",
                            answer: "Eure Geschwister",
                            explanation: "ihr -> euer/eure. Geschwister plural -> eure. Note: euer drops -e- before endings"
                        },
                        {
                            id: "d11-q22",
                            type: "choice",
                            question: "Error check: 'Mein Schwester ist nett.'",
                            options: ["Correct", "Should be: Meine Schwester", "Should be: Meinen Schwester"],
                            answer: "Should be: Meine Schwester",
                            explanation: "Schwester is feminine -> meine (add -e)"
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
                        },
                        {
                            id: "d12-q4",
                            type: "choice",
                            question: "Ask: 'What time is it?'",
                            options: ["Wie spät ist es?", "Was ist Zeit?", "Wann ist es?"],
                            answer: "Wie spät ist es?",
                            explanation: "Standard question for asking the time. Also: 'Wie viel Uhr ist es?'"
                        },
                        {
                            id: "d12-q5",
                            type: "text",
                            question: "Say 14:30 in official time",
                            answer: "Es ist vierzehn Uhr dreißig.",
                            explanation: "24-hour format: hour + Uhr + minutes"
                        },
                        {
                            id: "d12-q6",
                            type: "choice",
                            question: "What does 'halb sieben' mean?",
                            options: ["7:30", "6:30", "7:15"],
                            answer: "6:30",
                            explanation: "Halb refers to NEXT hour. Halb sieben = half to seven = 6:30"
                        },
                        {
                            id: "d12-q7",
                            type: "text",
                            question: "Say 9:45 informally",
                            answer: "Es ist Viertel vor zehn.",
                            explanation: "Quarter TO/BEFORE ten (15 minutes before 10)"
                        },
                        {
                            id: "d12-q8",
                            type: "choice",
                            question: "Translate: 'to get up'",
                            options: ["aufstehen", "stehen", "aufgehen"],
                            answer: "aufstehen",
                            explanation: "aufstehen = to get up (separable verb)"
                        },
                        {
                            id: "d12-q9",
                            type: "text",
                            question: "Say 2:05 informally",
                            answer: "Es ist fünf nach zwei.",
                            explanation: "5 minutes AFTER two"
                        },
                        {
                            id: "d12-q10",
                            type: "choice",
                            question: "What is 'frühstücken'?",
                            options: ["to have breakfast", "to have lunch", "to have dinner"],
                            answer: "to have breakfast",
                            explanation: "frühstücken = to eat breakfast"
                        },
                        {
                            id: "d12-q11",
                            type: "text",
                            question: "Translate: 'I eat breakfast at 8.' (frühstücken)",
                            answer: "Ich frühstücke um 8 Uhr.",
                            explanation: "Use 'um' + time for 'at' a specific time"
                        },
                        {
                            id: "d12-q12",
                            type: "choice",
                            question: "Say 11:50 informally",
                            options: ["Zehn vor zwölf", "Zehn nach elf", "Halb zwölf"],
                            answer: "Zehn vor zwölf",
                            explanation: "10 minutes BEFORE twelve"
                        },
                        {
                            id: "d12-q13",
                            type: "text",
                            question: "Say 17:20 in official time",
                            answer: "Es ist siebzehn Uhr zwanzig.",
                            explanation: "24-hour format used for schedules"
                        },
                        {
                            id: "d12-q14",
                            type: "choice",
                            question: "What does 'fernsehen' mean?",
                            options: ["to watch TV", "to see far", "to telephone"],
                            answer: "to watch TV",
                            explanation: "fernsehen = to watch TV (separable: fern + sehen)"
                        },
                        {
                            id: "d12-q15",
                            type: "text",
                            question: "Translate: 'It is 12:30' (informal)",
                            answer: "Es ist halb eins.",
                            explanation: "Half to ONE (not half twelve!)"
                        },
                        {
                            id: "d12-q16",
                            type: "choice",
                            question: "Complete: 'Ich stehe um 7 Uhr ___.' (get up)",
                            options: ["auf", "an", "ein"],
                            answer: "auf",
                            explanation: "aufstehen is separable: stehe...auf"
                        },
                        {
                            id: "d12-q17",
                            type: "text",
                            question: "Say 3:15 informally",
                            answer: "Es ist Viertel nach drei.",
                            explanation: "Quarter AFTER three"
                        },
                        {
                            id: "d12-q18",
                            type: "choice",
                            question: "Translate: 'to work'",
                            options: ["arbeiten", "arbeit", "werkten"],
                            answer: "arbeiten",
                            explanation: "arbeiten = to work"
                        },
                        {
                            id: "d12-q19",
                            type: "text",
                            question: "Translate: 'He cooks in the evening.'",
                            answer: "Er kocht am Abend.",
                            explanation: "am Abend = in the evening"
                        },
                        {
                            id: "d12-q20",
                            type: "choice",
                            question: "What is 'einkaufen'?",
                            options: ["to shop", "to buy in", "to cook"],
                            answer: "to shop",
                            explanation: "einkaufen = to shop/go shopping (separable verb)"
                        },
                        {
                            id: "d12-q21",
                            type: "text",
                            question: "Say 20:00 in official time",
                            answer: "Es ist zwanzig Uhr.",
                            explanation: "8 PM = 20:00 in 24-hour format"
                        },
                        {
                            id: "d12-q22",
                            type: "choice",
                            question: "Error check: 'Es ist halb acht.' What time?",
                            options: ["8:30", "7:30", "8:00"],
                            answer: "7:30",
                            explanation: "Halb acht = half to eight = 7:30"
                        },
                        {
                            id: "d12-q23",
                            type: "text",
                            question: "Translate: 'I watch TV at 8 PM.' (fernsehen)",
                            answer: "Ich sehe um 20 Uhr fern.",
                            explanation: "fernsehen separable: sehe...fern. Use 20 Uhr for 8 PM"
                        },
                        {
                            id: "d12-q24",
                            type: "text",
                            question: "Say 5:55 informally",
                            answer: "Es ist fünf vor sechs.",
                            explanation: "5 minutes BEFORE six"
                        },
                        {
                            id: "d12-q25",
                            type: "choice",
                            question: "What does 'schlafen' mean?",
                            options: ["to sleep", "to hit", "to close"],
                            answer: "to sleep",
                            explanation: "schlafen = to sleep (irregular verb: ich schlafe)"
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
                        },
                        {
                            id: "d13-q4",
                            type: "choice",
                            question: "What is a separable verb?",
                            options: ["A verb with two parts that split", "A verb that changes vowel", "A verb with sein"],
                            answer: "A verb with two parts that split",
                            explanation: "Separable verbs have prefix + main verb that separate in sentences"
                        },
                        {
                            id: "d13-q5",
                            type: "text",
                            question: "Translate: 'I get up at 7.' (aufstehen)",
                            answer: "Ich stehe um 7 Uhr auf.",
                            explanation: "aufstehen separable: stehe...auf"
                        },
                        {
                            id: "d13-q6",
                            type: "choice",
                            question: "Where does the prefix go in a simple sentence?",
                            options: ["At the end", "After the subject", "Position 2"],
                            answer: "At the end",
                            explanation: "Prefix goes to the very end of the sentence"
                        },
                        {
                            id: "d13-q7",
                            type: "text",
                            question: "Complete: 'Der Zug ___ um 9 Uhr ___.' (abfahren - depart)",
                            answer: "Der Zug fährt um 9 Uhr ab.",
                            explanation: "abfahren: fährt...ab (vowel change + separable)"
                        },
                        {
                            id: "d13-q8",
                            type: "choice",
                            question: "Which is a separable prefix?",
                            options: ["an-", "be-", "ver-"],
                            answer: "an-",
                            explanation: "an-, auf-, ein-, mit-, aus- are separable. be-, ver-, er- are not"
                        },
                        {
                            id: "d13-q9",
                            type: "text",
                            question: "Translate: 'We're going out.' (ausgehen)",
                            answer: "Wir gehen aus.",
                            explanation: "ausgehen: gehen...aus"
                        },
                        {
                            id: "d13-q10",
                            type: "choice",
                            question: "Complete: 'Kommst du ___?' (mitkommen - come along)",
                            options: ["mit", "an", "auf"],
                            answer: "mit",
                            explanation: "mitkommen: Kommst du mit?"
                        },
                        {
                            id: "d13-q11",
                            type: "text",
                            question: "Sort: 'Sie / um 6 Uhr / auf / steht'",
                            answer: "Sie steht um 6 Uhr auf.",
                            explanation: "Subject + verb (Pos 2) + time + prefix (end)"
                        },
                        {
                            id: "d13-q12",
                            type: "choice",
                            question: "What does 'ankommen' mean?",
                            options: ["to arrive", "to call", "to start"],
                            answer: "to arrive",
                            explanation: "ankommen = to arrive (separable)"
                        },
                        {
                            id: "d13-q13",
                            type: "text",
                            question: "Translate: 'He's cleaning up his room.' (aufräumen)",
                            answer: "Er räumt sein Zimmer auf.",
                            explanation: "aufräumen: räumt...auf"
                        },
                        {
                            id: "d13-q14",
                            type: "choice",
                            question: "Complete: 'Ich lade dich ___.' (einladen - invite)",
                            options: ["ein", "an", "auf"],
                            answer: "ein",
                            explanation: "einladen: Ich lade...ein"
                        },
                        {
                            id: "d13-q15",
                            type: "text",
                            question: "Ask: 'When does the train arrive?' (ankommen)",
                            answer: "Wann kommt der Zug an?",
                            explanation: "Question: Wann + kommt + subject + an"
                        },
                        {
                            id: "d13-q16",
                            type: "choice",
                            question: "What is 'einkaufen'?",
                            options: ["to shop", "to sell", "to buy in"],
                            answer: "to shop",
                            explanation: "einkaufen = to go shopping (separable)"
                        },
                        {
                            id: "d13-q17",
                            type: "text",
                            question: "Complete: 'Wir ___ heute im Supermarkt ___.' (shop)",
                            answer: "Wir kaufen heute im Supermarkt ein.",
                            explanation: "einkaufen: kaufen...ein"
                        },
                        {
                            id: "d13-q18",
                            type: "choice",
                            question: "Error check: 'Ich anrufe meine Mutter.'",
                            options: ["Correct", "Should be: Ich rufe meine Mutter an", "Should be: Ich anrufe an meine Mutter"],
                            answer: "Should be: Ich rufe meine Mutter an",
                            explanation: "anrufen separates: rufe...an (prefix to end)"
                        },
                        {
                            id: "d13-q19",
                            type: "text",
                            question: "Translate: 'The class begins.' (anfangen)",
                            answer: "Der Unterricht fängt an.",
                            explanation: "anfangen: fängt...an"
                        },
                        {
                            id: "d13-q20",
                            type: "choice",
                            question: "Which verb means 'to read aloud'?",
                            options: ["vorlesen", "lesen", "auslesen"],
                            answer: "vorlesen",
                            explanation: "vorlesen = to read aloud (separable)"
                        },
                        {
                            id: "d13-q21",
                            type: "text",
                            question: "Complete: 'Er ___ das Buch ___.' (vorlesen)",
                            answer: "Er liest das Buch vor.",
                            explanation: "vorlesen: liest...vor (vowel change + separable)"
                        },
                        {
                            id: "d13-q22",
                            type: "choice",
                            question: "Complete: 'Wann ___ du ___?' (zurückkommen - come back)",
                            options: ["kommst...zurück", "zurückkommst", "kommst...zurück"],
                            answer: "kommst...zurück",
                            explanation: "zurückkommen: kommst...zurück"
                        },
                        {
                            id: "d13-q23",
                            type: "text",
                            question: "Translate: 'I'm picking you up at 8.' (abholen)",
                            answer: "Ich hole dich um 8 Uhr ab.",
                            explanation: "abholen = to pick up (separable): hole...ab"
                        },
                        {
                            id: "d13-q24",
                            type: "text",
                            question: "What does 'mitbringen' mean?",
                            answer: "to bring along",
                            explanation: "mitbringen = to bring along/with (separable)"
                        },
                        {
                            id: "d13-q25",
                            type: "choice",
                            question: "Complete: 'Bringst du Wein ___?' (mitbringen)",
                            options: ["mit", "an", "ein"],
                            answer: "mit",
                            explanation: "mitbringen: Bringst du...mit?"
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
                        },
                        {
                            id: "d14-q4",
                            type: "choice",
                            question: "Which articles change in accusative?",
                            options: ["Only masculine", "All genders", "Only feminine"],
                            answer: "Only masculine",
                            explanation: "Only masculine changes: der→den, ein→einen"
                        },
                        {
                            id: "d14-q5",
                            type: "text",
                            question: "What is 'der Apfel'?",
                            answer: "apple",
                            explanation: "der Apfel = the apple (masculine)"
                        },
                        {
                            id: "d14-q6",
                            type: "choice",
                            question: "Complete: 'Ich esse ___ Apfel.' (den/einen)",
                            options: ["den", "der", "dem"],
                            answer: "den",
                            explanation: "Masculine accusative: der Apfel → den Apfel"
                        },
                        {
                            id: "d14-q7",
                            type: "text",
                            question: "Translate: 'I have a brother.'",
                            answer: "Ich habe einen Bruder.",
                            explanation: "Bruder masculine → einen Bruder (accusative)"
                        },
                        {
                            id: "d14-q8",
                            type: "choice",
                            question: "What is 'das Brot'?",
                            options: ["Bread", "Meat", "Egg"],
                            answer: "Bread",
                            explanation: "das Brot = bread (neuter, no change in accusative)"
                        },
                        {
                            id: "d14-q9",
                            type: "text",
                            question: "Complete: 'Ich kaufe ___ Brot.' (das)",
                            answer: "das",
                            explanation: "Neuter doesn't change in accusative: das Brot"
                        },
                        {
                            id: "d14-q10",
                            type: "choice",
                            question: "What is 'die Banane'?",
                            options: ["Banana", "Apple", "Orange"],
                            answer: "Banana",
                            explanation: "die Banane = banana (feminine)"
                        },
                        {
                            id: "d14-q11",
                            type: "text",
                            question: "Complete: 'Ich esse ___ Banane.' (die)",
                            answer: "die",
                            explanation: "Feminine doesn't change: die Banane"
                        },
                        {
                            id: "d14-q12",
                            type: "choice",
                            question: "What is 'der Käse'?",
                            options: ["Cheese", "Cake", "Coffee"],
                            answer: "Cheese",
                            explanation: "der Käse = cheese (masculine)"
                        },
                        {
                            id: "d14-q13",
                            type: "text",
                            question: "Translate: 'I like cheese.' (mögen)",
                            answer: "Ich mag Käse.",
                            explanation: "mögen + accusative (no article for general food)"
                        },
                        {
                            id: "d14-q14",
                            type: "choice",
                            question: "Complete: 'Ich trinke ___ Kaffee.'",
                            options: ["den", "der", "das"],
                            answer: "den",
                            explanation: "der Kaffee → den Kaffee (masculine accusative)"
                        },
                        {
                            id: "d14-q15",
                            type: "text",
                            question: "What is 'das Ei'?",
                            answer: "egg",
                            explanation: "das Ei = the egg (neuter)"
                        },
                        {
                            id: "d14-q16",
                            type: "choice",
                            question: "What is 'das Fleisch'?",
                            options: ["Meat", "Fish", "Bread"],
                            answer: "Meat",
                            explanation: "das Fleisch = meat (neuter)"
                        },
                        {
                            id: "d14-q17",
                            type: "text",
                            question: "Translate: 'I eat meat.'",
                            answer: "Ich esse Fleisch.",
                            explanation: "No article for food in general"
                        },
                        {
                            id: "d14-q18",
                            type: "choice",
                            question: "What is 'der Fisch'?",
                            options: ["Fish", "Meat", "Vegetable"],
                            answer: "Fish",
                            explanation: "der Fisch = fish (masculine)"
                        },
                        {
                            id: "d14-q19",
                            type: "text",
                            question: "Complete: 'Ich esse ___ Fisch.' (der - the fish)",
                            answer: "den",
                            explanation: "der Fisch → den Fisch (masculine accusative)"
                        },
                        {
                            id: "d14-q20",
                            type: "choice",
                            question: "What is 'das Gemüse'?",
                            options: ["Vegetables", "Fruit", "Meat"],
                            answer: "Vegetables",
                            explanation: "das Gemüse = vegetables (neuter, singular in German)"
                        },
                        {
                            id: "d14-q21",
                            type: "text",
                            question: "Translate: 'I like vegetables.'",
                            answer: "Ich mag Gemüse.",
                            explanation: "das Gemüse (no change in accusative)"
                        },
                        {
                            id: "d14-q22",
                            type: "choice",
                            question: "Complete: 'Ich sehe ___ Mann.' (der Mann)",
                            options: ["den", "der", "dem"],
                            answer: "den",
                            explanation: "Direct object: der Mann → den Mann"
                        },
                        {
                            id: "d14-q23",
                            type: "text",
                            question: "Translate: 'I don't eat fish.' (negation with kein)",
                            answer: "Ich esse keinen Fisch.",
                            explanation: "kein + masculine accusative → keinen Fisch"
                        },
                        {
                            id: "d14-q24",
                            type: "choice",
                            question: "Error check: 'Ich habe ein Bruder.'",
                            options: ["Correct", "Should be: einen Bruder", "Should be: der Bruder"],
                            answer: "Should be: einen Bruder",
                            explanation: "Masculine accusative: ein → einen"
                        },
                        {
                            id: "d14-q25",
                            type: "text",
                            question: "Complete: 'Trinkst du ___ Tee?' (der Tee - the tea)",
                            answer: "den",
                            explanation: "der Tee → den Tee (accusative)"
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
                        },
                        {
                            id: "d15-q4",
                            type: "choice",
                            question: "What are modal verbs?",
                            options: ["Verbs that modify another verb", "Regular verbs", "Past tense verbs"],
                            answer: "Verbs that modify another verb",
                            explanation: "Modal verbs express ability, desire, necessity"
                        },
                        {
                            id: "d15-q5",
                            type: "text",
                            question: "Conjugate 'können' for 'ich'",
                            answer: "kann",
                            explanation: "ich kann (irregular - no -e ending)"
                        },
                        {
                            id: "d15-q6",
                            type: "choice",
                            question: "Conjugate 'können' for 'du'",
                            options: ["kannst", "kann", "können"],
                            answer: "kannst",
                            explanation: "du kannst"
                        },
                        {
                            id: "d15-q7",
                            type: "text",
                            question: "Conjugate 'können' for 'wir'",
                            answer: "können",
                            explanation: "wir können (same as infinitive)"
                        },
                        {
                            id: "d15-q8",
                            type: "choice",
                            question: "Translate: 'Can you help me?' (du)",
                            options: ["Kannst du mir helfen?", "Kann du mir helfen?", "Können du mir helfen?"],
                            answer: "Kannst du mir helfen?",
                            explanation: "du kannst: Kannst du...?"
                        },
                        {
                            id: "d15-q9",
                            type: "text",
                            question: "Translate: 'I can't come.'",
                            answer: "Ich kann nicht kommen.",
                            explanation: "Modal + nicht + infinitive at end"
                        },
                        {
                            id: "d15-q10",
                            type: "choice",
                            question: "Conjugate 'wollen' for 'ich'",
                            options: ["will", "wolle", "wollen"],
                            answer: "will",
                            explanation: "ich will (irregular)"
                        },
                        {
                            id: "d15-q11",
                            type: "text",
                            question: "Conjugate 'wollen' for 'du'",
                            answer: "willst",
                            explanation: "du willst"
                        },
                        {
                            id: "d15-q12",
                            type: "choice",
                            question: "Complete: 'Er ___ nach Hause gehen.'",
                            options: ["will", "wollen", "willst"],
                            answer: "will",
                            explanation: "er will (same as ich)"
                        },
                        {
                            id: "d15-q13",
                            type: "text",
                            question: "Translate: 'Do you want to eat?' (du)",
                            answer: "Willst du essen?",
                            explanation: "Question: Willst du + infinitive?"
                        },
                        {
                            id: "d15-q14",
                            type: "choice",
                            question: "What does 'können' mean?",
                            options: ["can/to be able to", "want to", "must"],
                            answer: "can/to be able to",
                            explanation: "können = can, to be able to"
                        },
                        {
                            id: "d15-q15",
                            type: "text",
                            question: "Translate: 'We want to learn German.'",
                            answer: "Wir wollen Deutsch lernen.",
                            explanation: "wir wollen + infinitive at end"
                        },
                        {
                            id: "d15-q16",
                            type: "choice",
                            question: "Where does the infinitive go with modal verbs?",
                            options: ["At the end", "After the modal", "Position 2"],
                            answer: "At the end",
                            explanation: "Infinitive ALWAYS goes to the end with modals"
                        },
                        {
                            id: "d15-q17",
                            type: "text",
                            question: "Translate: 'She can swim well.'",
                            answer: "Sie kann gut schwimmen.",
                            explanation: "sie kann + gut + infinitive (end)"
                        },
                        {
                            id: "d15-q18",
                            type: "choice",
                            question: "Complete: 'Ihr ___ Fußball spielen.'",
                            options: ["könnt", "kann", "können"],
                            answer: "könnt",
                            explanation: "ihr könnt"
                        },
                        {
                            id: "d15-q19",
                            type: "text",
                            question: "Translate: 'They want to go home.'",
                            answer: "Sie wollen nach Hause gehen.",
                            explanation: "sie wollen + infinitive at end"
                        },
                        {
                            id: "d15-q20",
                            type: "choice",
                            question: "Error check: 'Ich kann schwimmen gut.'",
                            options: ["Correct", "Should be: Ich kann gut schwimmen", "Should be: Ich gut kann schwimmen"],
                            answer: "Should be: Ich kann gut schwimmen",
                            explanation: "Infinitive must be at the very end"
                        },
                        {
                            id: "d15-q21",
                            type: "text",
                            question: "Ask: 'Can we go?' (wir)",
                            answer: "Können wir gehen?",
                            explanation: "Question: Können wir + infinitive?"
                        },
                        {
                            id: "d15-q22",
                            type: "choice",
                            question: "Complete: 'Was ___ du machen?' (want)",
                            options: ["willst", "will", "wollen"],
                            answer: "willst",
                            explanation: "du willst: Was willst du...?"
                        },
                        {
                            id: "d15-q23",
                            type: "text",
                            question: "Translate: 'I want to sleep.'",
                            answer: "Ich will schlafen.",
                            explanation: "ich will + infinitive"
                        },
                        {
                            id: "d15-q24",
                            type: "choice",
                            question: "Conjugate 'können' for 'sie' (they)",
                            options: ["können", "kann", "könnt"],
                            answer: "können",
                            explanation: "sie können (plural)"
                        },
                        {
                            id: "d15-q25",
                            type: "text",
                            question: "Complete: 'Kannst du Deutsch ___?' (sprechen)",
                            answer: "sprechen",
                            explanation: "Infinitive goes at end: Kannst du Deutsch sprechen?"
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
                        },
                        {
                            id: "d16-q4",
                            type: "choice",
                            question: "What does 'müssen' mean?",
                            options: ["must/have to", "may/allowed to", "want to"],
                            answer: "must/have to",
                            explanation: "müssen = must, have to (necessity/obligation)"
                        },
                        {
                            id: "d16-q5",
                            type: "text",
                            question: "Conjugate 'müssen' for 'du'",
                            answer: "musst",
                            explanation: "du musst (vowel change: ü→u)"
                        },
                        {
                            id: "d16-q6",
                            type: "choice",
                            question: "Complete: 'Er ___ arbeiten.'",
                            options: ["muss", "müssen", "musst"],
                            answer: "muss",
                            explanation: "er muss (same as ich)"
                        },
                        {
                            id: "d16-q7",
                            type: "text",
                            question: "Translate: 'I have to go.'",
                            answer: "Ich muss gehen.",
                            explanation: "ich muss + infinitive"
                        },
                        {
                            id: "d16-q8",
                            type: "choice",
                            question: "What does 'dürfen' mean?",
                            options: ["to be allowed to/may", "must", "can"],
                            answer: "to be allowed to/may",
                            explanation: "dürfen = to be allowed to, may (permission)"
                        },
                        {
                            id: "d16-q9",
                            type: "text",
                            question: "Conjugate 'dürfen' for 'ich'",
                            answer: "darf",
                            explanation: "ich darf (vowel change: ü→a)"
                        },
                        {
                            id: "d16-q10",
                            type: "choice",
                            question: "Conjugate 'dürfen' for 'du'",
                            options: ["darfst", "darf", "dürfen"],
                            answer: "darfst",
                            explanation: "du darfst"
                        },
                        {
                            id: "d16-q11",
                            type: "text",
                            question: "Ask: 'May I smoke here?' (dürfen)",
                            answer: "Darf ich hier rauchen?",
                            explanation: "Darf ich + infinitive?"
                        },
                        {
                            id: "d16-q12",
                            type: "choice",
                            question: "Complete: 'Ihr ___ nicht laut sein.' (must not be loud)",
                            options: ["dürft", "müsst", "könnt"],
                            answer: "dürft",
                            explanation: "nicht dürfen = forbidden: ihr dürft nicht"
                        },
                        {
                            id: "d16-q13",
                            type: "text",
                            question: "Translate: 'You don't have to work.' (du)",
                            answer: "Du musst nicht arbeiten.",
                            explanation: "nicht müssen = not necessary (optional)"
                        },
                        {
                            id: "d16-q14",
                            type: "choice",
                            question: "Difference: 'nicht dürfen' vs 'nicht müssen'?",
                            options: ["forbidden vs not necessary", "not allowed vs forbidden", "same meaning"],
                            answer: "forbidden vs not necessary",
                            explanation: "nicht dürfen = forbidden; nicht müssen = not necessary"
                        },
                        {
                            id: "d16-q15",
                            type: "text",
                            question: "Translate: 'We must learn.'",
                            answer: "Wir müssen lernen.",
                            explanation: "wir müssen + infinitive"
                        },
                        {
                            id: "d16-q16",
                            type: "choice",
                            question: "Complete: 'Sie ___ jetzt schlafen.' (sie - they, must)",
                            options: ["müssen", "muss", "müsst"],
                            answer: "müssen",
                            explanation: "sie müssen (plural)"
                        },
                        {
                            id: "d16-q17",
                            type: "text",
                            question: "Ask: 'May I come in?' (reinkommen)",
                            answer: "Darf ich reinkommen?",
                            explanation: "Darf ich + infinitive?"
                        },
                        {
                            id: "d16-q18",
                            type: "choice",
                            question: "Translate: 'You're not allowed to park here.' (du)",
                            options: ["Du darfst hier nicht parken.", "Du musst hier nicht parken.", "Du kannst hier nicht parken."],
                            answer: "Du darfst hier nicht parken.",
                            explanation: "nicht dürfen = not allowed/forbidden"
                        },
                        {
                            id: "d16-q19",
                            type: "text",
                            question: "Complete: 'Wir ___ pünktlich sein.' (müssen - be punctual)",
                            answer: "müssen",
                            explanation: "wir müssen + infinitive"
                        },
                        {
                            id: "d16-q20",
                            type: "choice",
                            question: "Conjugate 'müssen' for 'ihr'",
                            options: ["müsst", "muss", "müssen"],
                            answer: "müsst",
                            explanation: "ihr müsst"
                        },
                        {
                            id: "d16-q21",
                            type: "text",
                            question: "Translate: 'She must go home.'",
                            answer: "Sie muss nach Hause gehen.",
                            explanation: "sie muss + infinitive"
                        },
                        {
                            id: "d16-q22",
                            type: "choice",
                            question: "Error check: 'Du dürfen nicht laufen.'",
                            options: ["Correct", "Should be: Du darfst nicht laufen", "Should be: Du dürfst nicht laufen"],
                            answer: "Should be: Du darfst nicht laufen",
                            explanation: "du darfst (conjugate correctly)"
                        },
                        {
                            id: "d16-q23",
                            type: "text",
                            question: "Translate: 'May we ask?' (fragen)",
                            answer: "Dürfen wir fragen?",
                            explanation: "Dürfen wir + infinitive?"
                        },
                        {
                            id: "d16-q24",
                            type: "choice",
                            question: "Complete: 'Ich ___ jetzt gehen.' (must)",
                            options: ["muss", "müssen", "musst"],
                            answer: "muss",
                            explanation: "ich muss"
                        },
                        {
                            id: "d16-q25",
                            type: "text",
                            question: "Translate: 'You're allowed to sit here.' (Sie - formal)",
                            answer: "Sie dürfen hier sitzen.",
                            explanation: "Sie dürfen + infinitive"
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
                        },
                        {
                            id: "d17-q4",
                            type: "choice",
                            question: "What does 'möchten' mean?",
                            options: ["would like to", "must", "can"],
                            answer: "would like to",
                            explanation: "möchten = would like to (polite form of mögen)"
                        },
                        {
                            id: "d17-q5",
                            type: "text",
                            question: "Conjugate 'möchten' for 'ich'",
                            answer: "möchte",
                            explanation: "ich möchte"
                        },
                        {
                            id: "d17-q6",
                            type: "choice",
                            question: "Conjugate 'möchten' for 'du'",
                            options: ["möchtest", "möchte", "möchten"],
                            answer: "möchtest",
                            explanation: "du möchtest"
                        },
                        {
                            id: "d17-q7",
                            type: "text",
                            question: "Ask politely: 'What would you like to drink?' (Sie)",
                            answer: "Was möchten Sie trinken?",
                            explanation: "Was möchten Sie + infinitive?"
                        },
                        {
                            id: "d17-q8",
                            type: "choice",
                            question: "In a restaurant: 'Bitte schön?' means:",
                            options: ["May I help you?", "Please sit", "Thank you"],
                            answer: "May I help you?",
                            explanation: "Bitte schön? = May I help you? (in shops/restaurants)"
                        },
                        {
                            id: "d17-q9",
                            type: "text",
                            question: "Translate: 'I would like a coffee, please.'",
                            answer: "Ich möchte einen Kaffee, bitte.",
                            explanation: "Ich möchte + accusative (einen Kaffee)"
                        },
                        {
                            id: "d17-q10",
                            type: "choice",
                            question: "Customer says: 'Ich hätte gern...' This means:",
                            options: ["I would like to have...", "I have...", "I had..."],
                            answer: "I would like to have...",
                            explanation: "Ich hätte gern = I would like to have (polite, common in shops)"
                        },
                        {
                            id: "d17-q11",
                            type: "text",
                            question: "Complete: 'Er ___ ein Bier.' (would like)",
                            answer: "möchte",
                            explanation: "er möchte"
                        },
                        {
                            id: "d17-q12",
                            type: "choice",
                            question: "What does 'Das macht 5 Euro' mean?",
                            options: ["That comes to 5 euros", "Make 5 euros", "It makes 5 euros"],
                            answer: "That comes to 5 euros",
                            explanation: "Das macht... = That comes to... (total price)"
                        },
                        {
                            id: "d17-q13",
                            type: "text",
                            question: "Ask: 'Would you like something to eat?' (du)",
                            answer: "Möchtest du etwas essen?",
                            explanation: "Möchtest du + etwas + infinitive?"
                        },
                        {
                            id: "d17-q14",
                            type: "choice",
                            question: "Conjugate 'möchten' for 'wir'",
                            options: ["möchten", "möchte", "möchtet"],
                            answer: "möchten",
                            explanation: "wir möchten"
                        },
                        {
                            id: "d17-q15",
                            type: "text",
                            question: "Translate: 'We would like to order.'",
                            answer: "Wir möchten bestellen.",
                            explanation: "wir möchten + infinitive"
                        },
                        {
                            id: "d17-q16",
                            type: "choice",
                            question: "In a shop: 'Sonst noch etwas?' - You don't need anything else:",
                            options: ["Nein, danke. Das ist alles.", "Ja, bitte.", "Vielleicht."],
                            answer: "Nein, danke. Das ist alles.",
                            explanation: "Das ist alles = That's all/everything"
                        },
                        {
                            id: "d17-q17",
                            type: "text",
                            question: "Complete: 'Ihr ___ Pizza essen.' (would like)",
                            answer: "möchtet",
                            explanation: "ihr möchtet"
                        },
                        {
                            id: "d17-q18",
                            type: "choice",
                            question: "What does 'bezahlen' mean?",
                            options: ["to pay", "to order", "to drink"],
                            answer: "to pay",
                            explanation: "bezahlen = to pay"
                        },
                        {
                            id: "d17-q19",
                            type: "text",
                            question: "Say politely: 'I would like the bill.' (die Rechnung)",
                            answer: "Ich möchte die Rechnung, bitte.",
                            explanation: "Ich möchte die Rechnung (the bill/check)"
                        },
                        {
                            id: "d17-q20",
                            type: "choice",
                            question: "Complete: 'Was ___ Sie?' (What would you like? - formal)",
                            options: ["möchten", "möchte", "möchtest"],
                            answer: "möchten",
                            explanation: "Sie möchten (formal you - plural form)"
                        },
                        {
                            id: "d17-q21",
                            type: "text",
                            question: "Translate: 'They would like to go shopping.'",
                            answer: "Sie möchten einkaufen gehen.",
                            explanation: "sie möchten + infinitive"
                        },
                        {
                            id: "d17-q22",
                            type: "choice",
                            question: "Customer phrase: 'Ich brauche...' means:",
                            options: ["I need...", "I want...", "I have..."],
                            answer: "I need...",
                            explanation: "brauchen = to need"
                        },
                        {
                            id: "d17-q23",
                            type: "text",
                            question: "Ask politely: 'Would you like to come?' (du)",
                            answer: "Möchtest du mitkommen?",
                            explanation: "Möchtest du + infinitive (separable)"
                        },
                        {
                            id: "d17-q24",
                            type: "choice",
                            question: "Error check: 'Ich möchte ein Kaffee.'",
                            options: ["Correct", "Should be: einen Kaffee", "Should be: der Kaffee"],
                            answer: "Should be: einen Kaffee",
                            explanation: "Kaffee is masculine → einen Kaffee (accusative)"
                        },
                        {
                            id: "d17-q25",
                            type: "text",
                            question: "Complete shopping dialogue: 'Das macht 12 Euro.' - 'Hier ___ 15 Euro.'",
                            answer: "sind",
                            explanation: "Hier sind... = Here is/are..."
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
                        },
                        {
                            id: "d18-q4",
                            type: "choice",
                            question: "What is 'das Bett'?",
                            options: ["Bed", "Chair", "Table"],
                            answer: "Bed",
                            explanation: "das Bett = the bed"
                        },
                        {
                            id: "d18-q5",
                            type: "text",
                            question: "What is 'der Tisch'?",
                            answer: "table",
                            explanation: "der Tisch = the table"
                        },
                        {
                            id: "d18-q6",
                            type: "choice",
                            question: "What is 'der Stuhl'?",
                            options: ["Chair", "Table", "Lamp"],
                            answer: "Chair",
                            explanation: "der Stuhl = the chair"
                        },
                        {
                            id: "d18-q7",
                            type: "text",
                            question: "Translate: 'The lamp is expensive.'",
                            answer: "Die Lampe ist teuer.",
                            explanation: "Predicative adjective - no ending change"
                        },
                        {
                            id: "d18-q8",
                            type: "choice",
                            question: "What is 'die Tür'?",
                            options: ["Door", "Window", "Wall"],
                            answer: "Door",
                            explanation: "die Tür = the door"
                        },
                        {
                            id: "d18-q9",
                            type: "text",
                            question: "What is 'das Fenster'?",
                            answer: "window",
                            explanation: "das Fenster = the window"
                        },
                        {
                            id: "d18-q10",
                            type: "choice",
                            question: "Opposite pair: groß - ___",
                            options: ["klein", "alt", "neu"],
                            answer: "klein",
                            explanation: "groß (big) ↔ klein (small)"
                        },
                        {
                            id: "d18-q11",
                            type: "text",
                            question: "Translate: 'The chairs are old.'",
                            answer: "Die Stühle sind alt.",
                            explanation: "Plural + predicative adjective (no ending)"
                        },
                        {
                            id: "d18-q12",
                            type: "choice",
                            question: "What is 'das Sofa'?",
                            options: ["Sofa/Couch", "Bed", "Chair"],
                            answer: "Sofa/Couch",
                            explanation: "das Sofa = the sofa/couch"
                        },
                        {
                            id: "d18-q13",
                            type: "text",
                            question: "Opposite of 'teuer'?",
                            answer: "billig",
                            explanation: "teuer (expensive) ↔ billig (cheap)"
                        },
                        {
                            id: "d18-q14",
                            type: "choice",
                            question: "What is 'der Spiegel'?",
                            options: ["Mirror", "Picture", "Window"],
                            answer: "Mirror",
                            explanation: "der Spiegel = the mirror"
                        },
                        {
                            id: "d18-q15",
                            type: "text",
                            question: "Translate: 'The room is dark.'",
                            answer: "Das Zimmer ist dunkel.",
                            explanation: "das Zimmer (room), dunkel (dark)"
                        },
                        {
                            id: "d18-q16",
                            type: "choice",
                            question: "Opposite pair: hell - ___",
                            options: ["dunkel", "klein", "alt"],
                            answer: "dunkel",
                            explanation: "hell (light/bright) ↔ dunkel (dark)"
                        },
                        {
                            id: "d18-q17",
                            type: "text",
                            question: "What is 'das Bild'?",
                            answer: "picture",
                            explanation: "das Bild = the picture/image"
                        },
                        {
                            id: "d18-q18",
                            type: "choice",
                            question: "What is 'die Küche'?",
                            options: ["Kitchen", "Bedroom", "Bathroom"],
                            answer: "Kitchen",
                            explanation: "die Küche = the kitchen"
                        },
                        {
                            id: "d18-q19",
                            type: "text",
                            question: "Translate: 'The bed is comfortable.' (bequem)",
                            answer: "Das Bett ist bequem.",
                            explanation: "bequem = comfortable"
                        },
                        {
                            id: "d18-q20",
                            type: "choice",
                            question: "Opposite pair: schön - ___",
                            options: ["hässlich", "klein", "dunkel"],
                            answer: "hässlich",
                            explanation: "schön (beautiful) ↔ hässlich (ugly)"
                        },
                        {
                            id: "d18-q21",
                            type: "text",
                            question: "Complete: 'Die Lampe ist sehr ___.' (beautiful)",
                            answer: "schön",
                            explanation: "schön = beautiful (predicative, no ending)"
                        },
                        {
                            id: "d18-q22",
                            type: "choice",
                            question: "When do adjectives NOT change endings?",
                            options: ["After sein/werden (predicative)", "Before nouns", "Never"],
                            answer: "After sein/werden (predicative)",
                            explanation: "Predicative adjectives (after sein) don't change: Das ist schön."
                        },
                        {
                            id: "d18-q23",
                            type: "text",
                            question: "Translate: 'I need a chair.'",
                            answer: "Ich brauche einen Stuhl.",
                            explanation: "brauchen + accusative (einen Stuhl)"
                        },
                        {
                            id: "d18-q24",
                            type: "choice",
                            question: "Error check: 'Das Bett ist neue.'",
                            options: ["Correct", "Should be: neu", "Should be: neuen"],
                            answer: "Should be: neu",
                            explanation: "Predicative adjective has no ending: neu (not neue)"
                        },
                        {
                            id: "d18-q25",
                            type: "text",
                            question: "Describe: 'The table is big and new.'",
                            answer: "Der Tisch ist groß und neu.",
                            explanation: "Multiple predicative adjectives, no endings"
                        }
                    ]
                }
            },
            {
                day: 18.5,
                title: "Education & Studies",
                focus: "School, University, Subjects",
                activities: ["Learn education vocabulary", "Describe school system", "Talk about studies"],
                homework: ["Describe your education background"],
                details: {
                    sections: [
                        {
                            title: "1. The German School System (Das deutsche Schulsystem)",
                            content: "Understanding the German education system helps you describe your background and discuss children's education.\n\n**Educational Institutions:**\n* **die Schule** (School - general)\n* **die Grundschule** (Primary/Elementary school - grades 1-4)\n* **das Gymnasium** (Academic secondary school - grades 5-12/13)\n* **die Realschule** (Practical secondary school - grades 5-10)\n* **die Hauptschule** (Basic secondary school - grades 5-9)\n* **die Gesamtschule** (Comprehensive school)\n* **die Universität / die Uni** (University)\n* **die Fachhochschule** (University of Applied Sciences)\n* **der Kindergarten** (Kindergarten - ages 3-6)\n\n**Educational Levels:**\n* **die Klasse** (Grade/Class)\n* **der Kurs** (Course)\n* **das Semester** (Semester)\n* **das Schuljahr** (School year)",
                            examples: [
                                { german: "Mein Sohn geht in die dritte Klasse.", english: "My son is in third grade." },
                                { german: "Ich studiere an der Universität München.", english: "I study at Munich University." },
                                { german: "Die Grundschule dauert vier Jahre.", english: "Primary school lasts four years." }
                            ]
                        },
                        {
                            title: "2. People in Education",
                            content: "**Teachers and Students:**\n* **der Lehrer / die Lehrerin** (Teacher)\n* **der Schüler / die Schülerin** (School student)\n* **der Student / die Studentin** (University student)\n* **der Professor / die Professorin** (Professor)\n* **der Kommilitone / die Kommilitonin** (Fellow student)\n\n**Important:** Use Schüler for school, Student ONLY for university!",
                            examples: [
                                { german: "Meine Lehrerin heißt Frau Schmidt.", english: "My teacher is Ms. Schmidt." },
                                { german: "Ich bin Student an der TU Berlin.", english: "I'm a student at TU Berlin." }
                            ]
                        },
                        {
                            title: "3. School Subjects (Schulfächer)",
                            content: "All subjects are neuter (das):\n* **Deutsch, Mathematik/Mathe, Englisch**\n* **Geschichte, Geographie, Biologie**\n* **Physik, Chemie, Informatik**\n* **Kunst, Musik, Sport**",
                            examples: [
                                { german: "Mein Lieblingsfach ist Biologie.", english: "My favorite subject is biology." },
                                { german: "Mathematik ist sehr schwer.", english: "Mathematics is very difficult." }
                            ]
                        },
                        {
                            title: "4. School Materials",
                            content: "* **das Buch / die Bücher** (Book/Books)\n* **das Heft** (Notebook)\n* **der Stift, der Kugelschreiber** (Pen)\n* **der Bleistift** (Pencil)\n* **der Rucksack** (Backpack)\n* **der Computer, das Tablet** (Computer, Tablet)\n* **der Stundenplan** (Timetable)",
                            examples: [
                                { german: "Ich brauche einen neuen Kugelschreiber.", english: "I need a new pen." },
                                { german: "Hast du dein Heft dabei?", english: "Do you have your notebook?" }
                            ]
                        },
                        {
                            title: "5. Educational Activities",
                            content: "**Activities:**\n* **lernen** (to learn/study - general)\n* **studieren** (to study - university only!)\n* **unterrichten** (to teach)\n* **Hausaufgaben machen** (do homework)\n\n**Assessment:**\n* **die Prüfung** (Exam)\n* **der Test** (Test)\n* **die Note** (Grade)\n* **bestehen / durchfallen** (pass / fail)\n* **das Zeugnis** (Report card)\n\n**German Grades: 1=best, 6=worst**",
                            examples: [
                                { german: "Ich lerne für die Prüfung.", english: "I'm studying for the exam." },
                                { german: "Ich habe eine Zwei in Deutsch bekommen.", english: "I got a 2 (good) in German." },
                                { german: "Die Sommerferien dauern sechs Wochen.", english: "Summer holidays last six weeks." }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d18.5-q1", type: "choice", question: "What is 'university student' in German?",
                          options: ["Schüler", "Student", "Lehrer"], answer: "Student",
                          explanation: "Student is for university. School students are Schüler." },
                        { id: "d18.5-q2", type: "choice", question: "Article for 'Schule'?",
                          options: ["der", "die", "das"], answer: "die", explanation: "die Schule" },
                        { id: "d18.5-q3", type: "choice", question: "Best grade in German system?",
                          options: ["1", "4", "6"], answer: "1", explanation: "1 = sehr gut (excellent)" },
                        { id: "d18.5-q4", type: "text", question: "Translate: 'My favorite subject is history.'",
                          answer: "Mein Lieblingsfach ist Geschichte.", explanation: "das Lieblingsfach" },
                        { id: "d18.5-q5", type: "text", question: "Feminine form of 'Lehrer'?",
                          answer: "Lehrerin", explanation: "Add -in: die Lehrerin" },
                        { id: "d18.5-q6", type: "text", question: "Translate: 'I study at the university.'",
                          answer: "Ich studiere an der Universität.", explanation: "studieren (university level)" },
                        { id: "d18.5-q7", type: "text", question: "What does 'bestehen' mean?",
                          answer: "to pass (exam)", explanation: "bestehen = pass, durchfallen = fail" },
                        { id: "d18.5-q8", type: "text", question: "Translate: 'Did you do homework?' (du)",
                          answer: "Hast du die Hausaufgaben gemacht?", explanation: "die Hausaufgaben (plural)" },
                        { id: "d18.5-q9", type: "text", question: "Say: 'I like Biology and English.'",
                          answer: "Ich mag Biologie und Englisch.", explanation: "Use mögen for subjects" },
                        { id: "d18.5-q10", type: "text", question: "Complete: 'Ich brauche einen ___' (pen)",
                          answer: "Kugelschreiber", explanation: "der Kugelschreiber / der Kuli" },
                        { id: "d18.5-q11", type: "text", question: "Translate: 'The exam was difficult.'",
                          answer: "Die Prüfung war schwer.", explanation: "die Prüfung, war (past)" },
                        { id: "d18.5-q12", type: "choice", question: "Error: 'Mein Sohn ist Student in der Grundschule.'",
                          options: ["Should be Schüler", "Should be Lehrerin", "Correct"],
                          answer: "Should be Schüler", explanation: "Student only for university!" },
                        { id: "d18.5-q13", type: "text", question: "Create sentence: Study computer science at TU Munich",
                          answer: "Ich studiere Informatik an der TU München.", explanation: "Informatik = CS" },
                        { id: "d18.5-q14", type: "text", question: "Ask: 'Do you have your notebook?' (du)",
                          answer: "Hast du dein Heft dabei?", explanation: "dabei = with you" },
                        { id: "d18.5-q15", type: "text", question: "Say: 'I got a 1 in German.'",
                          answer: "Ich habe eine Eins in Deutsch bekommen.", explanation: "eine Eins, bekommen" },
                        { id: "d18.5-q16", type: "text", question: "Translate: 'Summer holidays last six weeks.'",
                          answer: "Die Sommerferien dauern sechs Wochen.", explanation: "die Ferien (plural)" },
                        { id: "d18.5-q17", type: "choice", question: "What is 'das Heft'?",
                          options: ["Book", "Notebook", "Pencil"], answer: "Notebook", explanation: "das Heft" },
                        { id: "d18.5-q18", type: "text", question: "Complete: 'Mein ___ ist Biologie.' (favorite subject)",
                          answer: "Lieblingsfach", explanation: "das Lieblingsfach" },
                        { id: "d18.5-q19", type: "text", question: "What are 'Ferien'?",
                          answer: "holidays/vacation", explanation: "die Ferien (always plural)" },
                        { id: "d18.5-q20", type: "text", question: "Translate: 'She teaches mathematics.'",
                          answer: "Sie unterrichtet Mathematik.", explanation: "unterrichten = to teach" }
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
                        },
                        {
                            id: "d19-q4",
                            type: "choice",
                            question: "Which prepositions ALWAYS take accusative? (DOGFU)",
                            options: ["durch, ohne, gegen, für, um", "mit, nach, zu", "in, an, auf"],
                            answer: "durch, ohne, gegen, für, um",
                            explanation: "DOGFU mnemonic: Durch, Ohne, Gegen, Für, Um"
                        },
                        {
                            id: "d19-q5",
                            type: "text",
                            question: "What does 'durch' mean?",
                            answer: "through",
                            explanation: "durch = through (+ accusative)"
                        },
                        {
                            id: "d19-q6",
                            type: "choice",
                            question: "Complete: 'Ich komme ___ dich.' (without you)",
                            options: ["ohne", "für", "gegen"],
                            answer: "ohne",
                            explanation: "ohne = without (+ accusative)"
                        },
                        {
                            id: "d19-q7",
                            type: "text",
                            question: "Translate: 'Without money'",
                            answer: "Ohne Geld",
                            explanation: "ohne + accusative (das Geld - no change in neuter)"
                        },
                        {
                            id: "d19-q8",
                            type: "choice",
                            question: "What does 'gegen' mean?",
                            options: ["against/around (time)", "for", "through"],
                            answer: "against/around (time)",
                            explanation: "gegen = against (opponent) or around (time)"
                        },
                        {
                            id: "d19-q9",
                            type: "text",
                            question: "Complete: 'Das Geschenk ist ___ meine Mutter.' (for)",
                            answer: "für",
                            explanation: "für = for (+ accusative)"
                        },
                        {
                            id: "d19-q10",
                            type: "choice",
                            question: "Complete: 'Wir treffen uns ___ 8 Uhr.' (around 8)",
                            options: ["gegen", "für", "um"],
                            answer: "gegen",
                            explanation: "gegen + time = around (approximately)"
                        },
                        {
                            id: "d19-q11",
                            type: "text",
                            question: "What does 'um' mean with locations?",
                            answer: "around",
                            explanation: "um = around (spatial) (+ accusative)"
                        },
                        {
                            id: "d19-q12",
                            type: "choice",
                            question: "Complete: 'Wir sitzen ___ den Tisch.' (around table)",
                            options: ["um", "für", "gegen"],
                            answer: "um",
                            explanation: "um + accusative = around (spatial)"
                        },
                        {
                            id: "d19-q13",
                            type: "text",
                            question: "Translate: 'Through the city' (die Stadt)",
                            answer: "Durch die Stadt",
                            explanation: "durch + accusative (die Stadt - no change in feminine)"
                        },
                        {
                            id: "d19-q14",
                            type: "choice",
                            question: "Complete: 'Der Film ist ___ Kinder.' (for children)",
                            options: ["für", "gegen", "ohne"],
                            answer: "für",
                            explanation: "für = for (+ accusative)"
                        },
                        {
                            id: "d19-q15",
                            type: "text",
                            question: "Translate: 'Against the wall' (die Wand)",
                            answer: "Gegen die Wand",
                            explanation: "gegen + accusative"
                        },
                        {
                            id: "d19-q16",
                            type: "choice",
                            question: "Complete: 'Ich gehe ___ meinen Hund spazieren.' (without)",
                            options: ["ohne", "für", "durch"],
                            answer: "ohne",
                            explanation: "ohne + accusative (meinen Hund)"
                        },
                        {
                            id: "d19-q17",
                            type: "text",
                            question: "Translate: 'For my sister' (die Schwester)",
                            answer: "Für meine Schwester",
                            explanation: "für + accusative (feminine no change: meine)"
                        },
                        {
                            id: "d19-q18",
                            type: "choice",
                            question: "Error check: 'Ich gehe durch der Park.'",
                            options: ["Correct", "Should be: durch den Park", "Should be: durch dem Park"],
                            answer: "Should be: durch den Park",
                            explanation: "durch + ACCUSATIVE: den Park (not dative dem)"
                        },
                        {
                            id: "d19-q19",
                            type: "text",
                            question: "Complete: 'Ohne ___ kann ich nicht leben.' (you - du)",
                            answer: "dich",
                            explanation: "ohne + accusative pronoun: dich"
                        },
                        {
                            id: "d19-q20",
                            type: "choice",
                            question: "Complete: 'Wir fahren ___ den Tunnel.' (through)",
                            options: ["durch", "für", "gegen"],
                            answer: "durch",
                            explanation: "durch = through (+ accusative)"
                        },
                        {
                            id: "d19-q21",
                            type: "text",
                            question: "Translate: 'I'm playing against him.'",
                            answer: "Ich spiele gegen ihn.",
                            explanation: "gegen + accusative pronoun: ihn"
                        },
                        {
                            id: "d19-q22",
                            type: "choice",
                            question: "Complete: 'Das ist ___ dich.' (for you - du)",
                            options: ["für", "ohne", "gegen"],
                            answer: "für",
                            explanation: "für + accusative: für dich"
                        },
                        {
                            id: "d19-q23",
                            type: "text",
                            question: "Translate: 'Around the house' (das Haus)",
                            answer: "Um das Haus",
                            explanation: "um + accusative"
                        },
                        {
                            id: "d19-q24",
                            type: "choice",
                            question: "All DOGFU prepositions take which case?",
                            options: ["Accusative", "Dative", "Nominative"],
                            answer: "Accusative",
                            explanation: "DOGFU prepositions ALWAYS take accusative"
                        },
                        {
                            id: "d19-q25",
                            type: "text",
                            question: "Complete: 'Ich laufe ___ den See.' (around the lake - der See)",
                            answer: "um",
                            explanation: "um + accusative: um den See"
                        }
                    ]
                }
            },
            {
                day: 19.5,
                title: "Communication & Technology",
                focus: "Phone, Email, Digital Communication",
                activities: ["Phone vocabulary", "Making calls", "Email basics"],
                homework: ["Write a phone dialogue"],
                details: {
                    sections: [
                        {
                            title: "1. Phone Communication (Telefonieren)",
                            content: "Essential vocabulary for making phone calls in German:\n\n**Phone Equipment:**\n* **das Telefon** (Telephone)\n* **das Handy** (Mobile phone)\n* **das Smartphone** (Smartphone)\n* **die Telefonnummer** (Phone number)\n* **die Handynummer** (Mobile number)\n* **die Nummer** (Number)\n* **die Vorwahl** (Area code)\n\n**Phone Actions:**\n* **anrufen** (to call - separable!)\n* **telefonieren** (to telephone/make a call)\n* **sprechen** (to speak)\n* **zurückrufen** (to call back - separable)\n* **erreichen** (to reach someone)\n* **abheben** (to pick up - separable)\n* **auflegen** (to hang up - separable)\n\n**Messages:**\n* **die Nachricht** (Message)\n* **die SMS** (Text message)\n* **die Voicemail / die Mailbox** (Voicemail)\n* **der Anruf** (Call/Phone call)",
                            examples: [
                                { german: "Ich rufe dich später an.", english: "I'll call you later." },
                                { german: "Kannst du mich zurückrufen?", english: "Can you call me back?" },
                                { german: "Meine Handynummer ist 0176 123 4567.", english: "My mobile number is 0176 123 4567." },
                                { german: "Ich habe eine SMS bekommen.", english: "I received a text message." }
                            ]
                        },
                        {
                            title: "2. Phone Conversation Phrases",
                            content: "**Starting a Call:**\n* **Wer spricht da?** / **Wer ist am Apparat?** (Who's speaking?)\n* **Hier ist [Name].** / **[Name] am Apparat.** (This is [Name] speaking)\n* **Kann ich bitte [Name] sprechen?** (May I speak to [Name]?)\n* **Ist [Name] da?** (Is [Name] there?)\n\n**During the Call:**\n* **Einen Moment, bitte.** (One moment, please)\n* **Bleiben Sie bitte am Apparat.** (Please hold the line - formal)\n* **Er/Sie ist gerade nicht da.** (He/She isn't here right now)\n* **Er/Sie ist nicht zu Hause.** (He/She isn't at home)\n* **Kann er/sie mich zurückrufen?** (Can he/she call me back?)\n* **Ich verbinde Sie.** (I'll connect you)\n\n**Ending the Call:**\n* **Ich rufe später wieder an.** (I'll call again later)\n* **Auf Wiederhören!** (Goodbye - phone only!)\n* **Tschüss!** (Bye - informal)\n\n**Problems:**\n* **Die Verbindung ist schlecht.** (The connection is bad)\n* **Ich kann Sie nicht verstehen.** (I can't understand you)\n* **Können Sie das wiederholen?** (Can you repeat that?)\n* **Falsche Nummer!** (Wrong number!)",
                            examples: [
                                { german: "Guten Tag, hier ist Maria Müller.", english: "Hello, this is Maria Müller speaking." },
                                { german: "Kann ich bitte Herrn Schmidt sprechen?", english: "May I speak to Mr. Schmidt?" },
                                { german: "Tut mir leid, er ist nicht da. Kann er Sie zurückrufen?", english: "Sorry, he's not here. Can he call you back?" },
                                { german: "Auf Wiederhören!", english: "Goodbye! (on phone)" }
                            ]
                        },
                        {
                            title: "3. Technology & Internet (Technologie & Internet)",
                            content: "**Devices:**\n* **der Computer** (Computer)\n* **der Laptop** (Laptop)\n* **das Tablet** (Tablet)\n* **der Drucker** (Printer)\n* **die Tastatur** (Keyboard)\n* **die Maus** (Mouse)\n* **der Bildschirm** (Screen)\n\n**Internet & Connectivity:**\n* **das Internet** (Internet)\n* **das WLAN / das WiFi** (WiFi)\n* **das Passwort** (Password)\n* **der Browser** (Browser)\n* **die Website** (Website)\n* **die App** (App)\n* **online / offline** (online / offline)\n\n**Actions:**\n* **surfen** (to surf the internet)\n* **googeln** (to google)\n* **herunterladen** (to download - separable)\n* **hochladen** (to upload - separable)\n* **installieren** (to install)\n* **löschen** (to delete)",
                            examples: [
                                { german: "Hast du WLAN zu Hause?", english: "Do you have WiFi at home?" },
                                { german: "Ich surfe jeden Tag im Internet.", english: "I surf the internet every day." },
                                { german: "Wie lautet das Passwort?", english: "What's the password?" },
                                { german: "Ich habe eine neue App heruntergeladen.", english: "I downloaded a new app." }
                            ]
                        },
                        {
                            title: "4. Email Communication (E-Mail-Kommunikation)",
                            content: "**Email Basics:**\n* **die E-Mail** (Email)\n* **die E-Mail-Adresse** (Email address)\n* **der Anhang** (Attachment)\n* **der Betreff** (Subject line)\n* **das @ (At-Zeichen)** (@ symbol)\n* **der Punkt** (Dot/Period)\n\n**Email Actions:**\n* **eine E-Mail schreiben** (to write an email)\n* **eine E-Mail schicken/senden** (to send an email)\n* **eine E-Mail bekommen/erhalten** (to receive an email)\n* **eine E-Mail lesen** (to read an email)\n* **eine E-Mail weiterleiten** (to forward an email)\n* **antworten** (to reply)\n* **löschen** (to delete)\n\n**Email Parts:**\n* **Betreff:** Subject\n* **Sehr geehrte/r...** (Formal greeting)\n* **Liebe/r...** (Informal greeting)\n* **Mit freundlichen Grüßen** (Formal closing)\n* **Viele Grüße / Liebe Grüße** (Informal closing)",
                            examples: [
                                { german: "Kannst du mir eine E-Mail schicken?", english: "Can you send me an email?" },
                                { german: "Ich habe deine E-Mail bekommen.", english: "I received your email." },
                                { german: "Meine E-Mail-Adresse ist max@beispiel.de", english: "My email address is max@example.de" },
                                { german: "Die E-Mail hat einen Anhang.", english: "The email has an attachment." }
                            ]
                        },
                        {
                            title: "5. Social Media & Messaging",
                            content: "**Communication Verbs:**\n* **chatten** (to chat)\n* **simsen** (to text/SMS)\n* **posten** (to post)\n* **liken** (to like)\n* **teilen** (to share)\n* **kommentieren** (to comment)\n\n**Social Media Terms:**\n* **das soziale Netzwerk** (Social network)\n* **der Post / der Beitrag** (Post)\n* **der Kommentar** (Comment)\n* **der Follower** (Follower)\n* **das Profil** (Profile)\n* **der Messenger** (Messenger app)\n\n**Phrases:**\n* **Bist du auf Facebook?** (Are you on Facebook?)\n* **Schick mir eine Nachricht!** (Send me a message!)\n* **Ich chatte mit meinen Freunden.** (I chat with my friends)",
                            examples: [
                                { german: "Ich schreibe dir später eine Nachricht.", english: "I'll write you a message later." },
                                { german: "Sie hat meinen Post geliked.", english: "She liked my post." },
                                { german: "Wir chatten jeden Tag.", english: "We chat every day." }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d19.5-q1", type: "choice", question: "What is 'das Handy'?",
                          options: ["Laptop", "Mobile phone", "Tablet"], answer: "Mobile phone",
                          explanation: "das Handy = mobile phone (das Smartphone = smartphone)" },
                        { id: "d19.5-q2", type: "choice", question: "How do you say 'Who's speaking?' on phone?",
                          options: ["Wer bist du?", "Wer spricht da?", "Wie heißt du?"],
                          answer: "Wer spricht da?", explanation: "Wer spricht da? or Wer ist am Apparat?" },
                        { id: "d19.5-q3", type: "choice", question: "Phone goodbye in German:",
                          options: ["Auf Wiedersehen", "Auf Wiederhören", "Bis später"],
                          answer: "Auf Wiederhören", explanation: "Auf Wiederhören (hearing again) for phone" },
                        { id: "d19.5-q4", type: "text", question: "Translate: 'I'll call you later.'",
                          answer: "Ich rufe dich später an.", explanation: "anrufen is separable: rufe...an" },
                        { id: "d19.5-q5", type: "text", question: "Translate: 'Can you call me back?'",
                          answer: "Kannst du mich zurückrufen?", explanation: "zurückrufen = to call back" },
                        { id: "d19.5-q6", type: "text", question: "Say: 'This is Maria speaking.' (phone)",
                          answer: "Hier ist Maria.", explanation: "Or: Maria am Apparat" },
                        { id: "d19.5-q7", type: "text", question: "Translate: 'He's not here right now.'",
                          answer: "Er ist gerade nicht da.", explanation: "gerade = right now" },
                        { id: "d19.5-q8", type: "choice", question: "What is 'WLAN'?",
                          options: ["Website", "WiFi", "Password"], answer: "WiFi",
                          explanation: "das WLAN or das WiFi" },
                        { id: "d19.5-q9", type: "text", question: "Translate: 'Do you have WiFi at home?'",
                          answer: "Hast du WLAN zu Hause?", explanation: "das WLAN, zu Hause = at home" },
                        { id: "d19.5-q10", type: "text", question: "What is 'der Anhang'?",
                          answer: "attachment", explanation: "Email attachment" },
                        { id: "d19.5-q11", type: "text", question: "Translate: 'Can you send me an email?'",
                          answer: "Kannst du mir eine E-Mail schicken?", explanation: "schicken or senden" },
                        { id: "d19.5-q12", type: "text", question: "Say: 'I received your email.'",
                          answer: "Ich habe deine E-Mail bekommen.", explanation: "bekommen or erhalten" },
                        { id: "d19.5-q13", type: "choice", question: "Verb for 'to text/SMS':",
                          options: ["chatten", "simsen", "posten"], answer: "simsen",
                          explanation: "simsen = to text (from SMS)" },
                        { id: "d19.5-q14", type: "text", question: "Translate: 'I received a text message.'",
                          answer: "Ich habe eine SMS bekommen.", explanation: "die SMS" },
                        { id: "d19.5-q15", type: "text", question: "What does 'herunterladen' mean?",
                          answer: "to download", explanation: "separable verb: lade...herunter" },
                        { id: "d19.5-q16", type: "text", question: "Say: 'My phone number is...' (mobile)",
                          answer: "Meine Handynummer ist...", explanation: "die Handynummer" },
                        { id: "d19.5-q17", type: "text", question: "Formal phone: 'May I speak to Mr. Schmidt?'",
                          answer: "Kann ich bitte Herrn Schmidt sprechen?", explanation: "Kann ich bitte + name + sprechen?" },
                        { id: "d19.5-q18", type: "text", question: "Say: 'The connection is bad.'",
                          answer: "Die Verbindung ist schlecht.", explanation: "die Verbindung = connection" },
                        { id: "d19.5-q19", type: "text", question: "Translate: 'I'll write you a message.'",
                          answer: "Ich schreibe dir eine Nachricht.", explanation: "die Nachricht = message" },
                        { id: "d19.5-q20", type: "text", question: "Create: Phone dialogue - ask if someone can call you back",
                          answer: "Können Sie mich zurückrufen?", explanation: "zurückrufen = call back" }
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
                        },
                        {
                            id: "d20-q4",
                            type: "choice",
                            question: "Review: Modal verbs are:",
                            options: ["können, wollen, müssen, dürfen, möchten", "sein, haben, werden", "machen, gehen, kommen"],
                            answer: "können, wollen, müssen, dürfen, möchten",
                            explanation: "The five modals covered: können, wollen, müssen, dürfen, möchten"
                        },
                        {
                            id: "d20-q5",
                            type: "text",
                            question: "Review: Name all possessive pronouns for 'ich'",
                            answer: "mein, meine",
                            explanation: "mein (masc/neuter), meine (fem/plural)"
                        },
                        {
                            id: "d20-q6",
                            type: "choice",
                            question: "Review: Which article changes in accusative?",
                            options: ["Only masculine", "All three", "Only feminine"],
                            answer: "Only masculine",
                            explanation: "Only masculine: der→den, ein→einen"
                        },
                        {
                            id: "d20-q7",
                            type: "text",
                            question: "Review: Say 2:30 informally",
                            answer: "Halb drei",
                            explanation: "halb refers to NEXT hour: halb drei = 2:30"
                        },
                        {
                            id: "d20-q8",
                            type: "choice",
                            question: "Review: Separable verbs have prefix at:",
                            options: ["End of sentence", "Position 2", "After subject"],
                            answer: "End of sentence",
                            explanation: "Prefix goes to the end: Ich stehe...auf"
                        },
                        {
                            id: "d20-q9",
                            type: "text",
                            question: "Review: Translate 'I have a brother.'",
                            answer: "Ich habe einen Bruder.",
                            explanation: "Accusative: einen Bruder"
                        },
                        {
                            id: "d20-q10",
                            type: "choice",
                            question: "Review: nicht dürfen means:",
                            options: ["forbidden/not allowed", "not necessary", "cannot"],
                            answer: "forbidden/not allowed",
                            explanation: "nicht dürfen = forbidden"
                        },
                        {
                            id: "d20-q11",
                            type: "text",
                            question: "Review: 'I would like coffee' (möchten)",
                            answer: "Ich möchte Kaffee.",
                            explanation: "möchten for polite requests"
                        },
                        {
                            id: "d20-q12",
                            type: "choice",
                            question: "Review: DOGFU prepositions take which case?",
                            options: ["Accusative", "Dative", "Nominative"],
                            answer: "Accusative",
                            explanation: "durch, ohne, gegen, für, um = accusative"
                        },
                        {
                            id: "d20-q13",
                            type: "text",
                            question: "Review: Opposite of 'groß'?",
                            answer: "klein",
                            explanation: "groß (big) ↔ klein (small)"
                        },
                        {
                            id: "d20-q14",
                            type: "choice",
                            question: "Review: What is 'das Bett'?",
                            options: ["bed", "table", "chair"],
                            answer: "bed",
                            explanation: "das Bett = the bed"
                        },
                        {
                            id: "d20-q15",
                            type: "text",
                            question: "Review: Translate 'My parents'",
                            answer: "Meine Eltern",
                            explanation: "Eltern always plural: meine Eltern"
                        },
                        {
                            id: "d20-q16",
                            type: "choice",
                            question: "Review: 'Ich kann schwimmen' - infinitive position?",
                            options: ["At the end", "After kann", "Position 2"],
                            answer: "At the end",
                            explanation: "Modal verbs send infinitive to end"
                        },
                        {
                            id: "d20-q17",
                            type: "text",
                            question: "Review: Ask 'What time is it?'",
                            answer: "Wie spät ist es?",
                            explanation: "Or: Wie viel Uhr ist es?"
                        },
                        {
                            id: "d20-q18",
                            type: "choice",
                            question: "Review: Predicative adjectives (after sein) have:",
                            options: ["No endings", "Endings based on gender", "Always -e"],
                            answer: "No endings",
                            explanation: "Das Bett ist neu (no ending)"
                        },
                        {
                            id: "d20-q19",
                            type: "text",
                            question: "Review: Translate 'We must go.'",
                            answer: "Wir müssen gehen.",
                            explanation: "wir müssen + infinitive"
                        },
                        {
                            id: "d20-q20",
                            type: "choice",
                            question: "Review: 'Sonst noch etwas?' means:",
                            options: ["Anything else?", "How much?", "Thank you"],
                            answer: "Anything else?",
                            explanation: "Standard shop phrase"
                        },
                        {
                            id: "d20-q21",
                            type: "text",
                            question: "Phase 2 Complete! Name one modal verb you learned:",
                            answer: "können/wollen/müssen/dürfen/möchten",
                            explanation: "Any of the five modals is correct"
                        },
                        {
                            id: "d20-q22",
                            type: "choice",
                            question: "Self-assessment: Rate your Phase 2 confidence (1-10)",
                            options: ["Answers vary", "Answers vary", "Answers vary"],
                            answer: "Answers vary",
                            explanation: "Honest self-assessment helps identify areas for review"
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
                focus: "Sentence Structure & Leisure Activities",
                activities: ["Talk about hobbies", "Verb position with inversion", "Express preferences"],
                homework: ["Write about your hobbies and weekend activities"],
                details: {
                    sections: [
                        {
                            title: "1. Hobbies & Leisure Activities Vocabulary",
                            content: "Essential vocabulary for describing what you like to do in your free time. These topics are very common in A1 conversations and exams.\n\n**Sports & Physical Activities:**\n* **Fußball spielen** (to play football/soccer)\n* **Tennis spielen** (to play tennis)\n* **schwimmen** (to swim)\n* **laufen / joggen** (to run / to jog)\n* **Rad fahren** (to ride a bike)\n* **wandern** (to hike)\n* **tanzen** (to dance)\n* **Yoga machen** (to do yoga)\n\n**Creative & Indoor Hobbies:**\n* **lesen** (to read)\n* **schreiben** (to write)\n* **malen** (to paint)\n* **zeichnen** (to draw)\n* **kochen** (to cook)\n* **backen** (to bake)\n* **Musik hören** (to listen to music)\n* **ein Instrument spielen** (to play an instrument)\n* **fotografieren** (to take photos)\n\n**Social & Entertainment:**\n* **Freunde treffen** (to meet friends)\n* **ins Kino gehen** (to go to the cinema)\n* **ins Theater gehen** (to go to the theater)\n* **ins Restaurant gehen** (to go to a restaurant)\n* **spazieren gehen** (to go for a walk)\n* **shoppen gehen** (to go shopping)\n\n**At Home:**\n* **fernsehen** (to watch TV)\n* **Filme schauen** (to watch films)\n* **Videospiele spielen** (to play video games)\n* **im Internet surfen** (to surf the internet)\n\n**Remember:** Use 'gern' after the verb to say you like doing something!\n* Ich spiele gern Fußball. (I like playing football.)",
                            examples: [
                                { german: "Ich spiele gern Fußball.", english: "I like playing football." },
                                { german: "Sie liest gern Bücher.", english: "She likes reading books." },
                                { german: "Wir gehen gern ins Kino.", english: "We like going to the cinema." },
                                { german: "Er hört gern Musik.", english: "He likes listening to music." },
                                { german: "Ich koche nicht gern.", english: "I don't like cooking." }
                            ]
                        },
                        {
                            title: "2. Talking About Frequency",
                            content: "When discussing hobbies, you often need to say HOW OFTEN you do activities.\n\n**Frequency Adverbs:**\n* **immer** (always) - 100%\n* **meistens** (mostly/usually) - 80%\n* **oft** (often) - 60%\n* **manchmal** (sometimes) - 40%\n* **selten** (rarely) - 20%\n* **nie** (never) - 0%\n\n**Time Expressions:**\n* **jeden Tag** (every day)\n* **jede Woche** (every week)\n* **am Wochenende** (on the weekend)\n* **einmal/zweimal/dreimal pro Woche** (once/twice/three times per week)\n* **am Montag** (on Monday)\n* **montags** (on Mondays - regularly)\n\n**Position in Sentence:**\nFrequency words usually come AFTER the verb:\n* Ich spiele **oft** Fußball.\n* Er geht **manchmal** ins Kino.\n\nBut time expressions can start the sentence (causing inversion):\n* **Am Wochenende** gehe ich schwimmen.",
                            examples: [
                                { german: "Ich gehe oft ins Fitnessstudio.", english: "I often go to the gym." },
                                { german: "Sie liest jeden Tag.", english: "She reads every day." },
                                { german: "Am Wochenende treffe ich meine Freunde.", english: "On the weekend I meet my friends." },
                                { german: "Er spielt zweimal pro Woche Tennis.", english: "He plays tennis twice per week." },
                                { german: "Wir gehen selten ins Theater.", english: "We rarely go to the theater." }
                            ]
                        },
                        {
                            title: "3. Inversion - Verb Position Rule",
                            content: "German word order follows a strict rule: **The verb is ALWAYS in position 2**. When you start a sentence with something other than the subject, the verb stays in position 2, but the subject moves to position 3.\n\n**The Rule: Position 1 → Verb (Position 2) → Subject (Position 3) → Rest**\n\n**Normal Word Order (Subject First):**\n* Position 1: **Ich** (subject)\n* Position 2: **spiele** (verb)\n* Position 3+: heute Fußball\n\n**Inverted Word Order (Time/Place First):**\n* Position 1: **Heute** (time)\n* Position 2: **spiele** (verb) - STILL POSITION 2!\n* Position 3: **ich** (subject moves here)\n* Position 4+: Fußball\n\n**What Can Start a Sentence? (Position 1)**\n* **Time:** Heute, Morgen, Am Wochenende, Jeden Tag\n* **Place:** In Berlin, Zu Hause, Im Park\n* **Object:** Das Buch (emphatic)\n* **Other:** Leider, Vielleicht, Natürlich\n\n**Key Point:** Germans use inversion very frequently! It makes speech more dynamic and natural. English speakers often forget to invert - this is a common mistake.",
                            examples: [
                                { german: "Normal: Ich gehe heute ins Kino.", english: "I'm going to the cinema today." },
                                { german: "Inverted: Heute gehe ich ins Kino.", english: "Today I'm going to the cinema." },
                                { german: "Normal: Wir lernen am Montag Deutsch.", english: "We learn German on Monday." },
                                { german: "Inverted: Am Montag lernen wir Deutsch.", english: "On Monday we learn German." },
                                { german: "Normal: Sie spielt oft Tennis.", english: "She often plays tennis." },
                                { german: "Inverted: Oft spielt sie Tennis.", english: "Often she plays tennis." }
                            ]
                        },
                        {
                            title: "4. Inversion Practice Patterns",
                            content: "Master these common inversion patterns for natural German speech.\n\n**Pattern 1: Time + Verb + Subject**\n* Morgen **fahre** ich nach Berlin.\n* Am Wochenende **besuche** ich meine Eltern.\n* Jeden Tag **lerne** ich Deutsch.\n\n**Pattern 2: Place + Verb + Subject**\n* In München **wohne** ich.\n* Im Park **spiele** ich Fußball.\n* Zu Hause **koche** ich gern.\n\n**Pattern 3: Adverb + Verb + Subject**\n* Leider **kann** ich nicht kommen.\n* Vielleicht **gehe** ich ins Kino.\n* Natürlich **spreche** ich Deutsch.\n\n**Pattern 4: Object + Verb + Subject (for emphasis)**\n* Das Buch **lese** ich gern. (emphasizing 'the book')\n* Pizza **esse** ich oft.\n\n**Important Notes:**\n* The verb NEVER moves from position 2\n* The subject is what changes position\n* In questions, the verb comes FIRST: **Gehst** du ins Kino?\n* With modal verbs, the modal verb stays in position 2: Heute **muss** ich arbeiten.",
                            examples: [
                                { german: "Heute spiele ich Tennis.", english: "Today I'm playing tennis." },
                                { german: "Am Samstag gehe ich shoppen.", english: "On Saturday I'm going shopping." },
                                { german: "Morgen fahre ich nach Hamburg.", english: "Tomorrow I'm driving to Hamburg." },
                                { german: "Manchmal lese ich ein Buch.", english: "Sometimes I read a book." },
                                { german: "In Berlin wohne ich seit einem Jahr.", english: "I've been living in Berlin for a year." },
                                { german: "Leider habe ich keine Zeit.", english: "Unfortunately I don't have time." }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d21-q1", type: "text", question: "Rewrite with 'Heute': 'Ich gehe ins Kino.'",
                          answer: "Heute gehe ich ins Kino.", explanation: "Heute + Verb + Subject." },
                        { id: "d21-q2", type: "text", question: "Translate: 'I like playing football.'",
                          answer: "Ich spiele gern Fußball.", explanation: "verb + gern for activities you like" },
                        { id: "d21-q3", type: "choice", question: "How do you say 'I like reading'?",
                          options: ["Ich lese gern.", "Ich gern lese.", "Ich mag lesen."], answer: "Ich lese gern.",
                          explanation: "verb + gern structure at A1 level" },
                        { id: "d21-q4", type: "text", question: "Rewrite with 'Am Wochenende': 'Ich treffe meine Freunde.'",
                          answer: "Am Wochenende treffe ich meine Freunde.", explanation: "Time + verb + subject inversion" },
                        { id: "d21-q5", type: "text", question: "Translate: 'On Monday I learn German.'",
                          answer: "Am Montag lerne ich Deutsch.", explanation: "Am + day triggers inversion" },
                        { id: "d21-q6", type: "choice", question: "Which is correct inverted order?",
                          options: ["Morgen ich gehe schwimmen.", "Morgen gehe ich schwimmen.", "Ich gehe morgen schwimmen."],
                          answer: "Morgen gehe ich schwimmen.", explanation: "Time + VERB + subject" },
                        { id: "d21-q7", type: "text", question: "What does 'oft' mean?",
                          answer: "often", explanation: "Frequency adverb: oft = often" },
                        { id: "d21-q8", type: "text", question: "Translate: 'She reads every day.'",
                          answer: "Sie liest jeden Tag.", explanation: "jeden Tag = every day" },
                        { id: "d21-q9", type: "text", question: "Rewrite: 'Sie geht oft ins Kino.' Start with 'Oft'.",
                          answer: "Oft geht sie ins Kino.", explanation: "Adverb triggers inversion" },
                        { id: "d21-q10", type: "choice", question: "Complete: 'Ich spiele ___ Tennis.' (twice per week)",
                          options: ["zwei pro Woche", "zweimal pro Woche", "zwei Mal Woche"], answer: "zweimal pro Woche",
                          explanation: "zweimal pro Woche = twice per week" },
                        { id: "d21-q11", type: "text", question: "Translate: 'I don't like cooking.'",
                          answer: "Ich koche nicht gern.", explanation: "nicht gern = don't like" },
                        { id: "d21-q12", type: "text", question: "What's the hobby: 'Rad fahren'?",
                          answer: "to ride a bike", explanation: "Rad fahren = to cycle/ride a bike" },
                        { id: "d21-q13", type: "choice", question: "Which word means 'always'?",
                          options: ["immer", "manchmal", "nie"], answer: "immer",
                          explanation: "immer = always (100%)" },
                        { id: "d21-q14", type: "text", question: "Rewrite starting with 'In München': 'Ich wohne in München.'",
                          answer: "In München wohne ich.", explanation: "Place + verb + subject" },
                        { id: "d21-q15", type: "text", question: "Translate: 'He likes listening to music.'",
                          answer: "Er hört gern Musik.", explanation: "Musik hören + gern" },
                        { id: "d21-q16", type: "choice", question: "What is the verb position in: 'Morgen fahre ich nach Berlin.'?",
                          options: ["Position 1", "Position 2", "Position 3"], answer: "Position 2",
                          explanation: "The verb is ALWAYS in position 2!" },
                        { id: "d21-q17", type: "text", question: "Complete: 'Am Wochenende ___ ich meine Freunde.' (meet)",
                          answer: "treffe", explanation: "treffen conjugated: ich treffe" },
                        { id: "d21-q18", type: "text", question: "Translate: 'Sometimes I go shopping.'",
                          answer: "Manchmal gehe ich shoppen.", explanation: "Manchmal triggers inversion" },
                        { id: "d21-q19", type: "choice", question: "Which means 'never'?",
                          options: ["nie", "oft", "selten"], answer: "nie",
                          explanation: "nie = never (0%)" },
                        { id: "d21-q20", type: "text", question: "What does 'wandern' mean?",
                          answer: "to hike", explanation: "wandern = to hike/go hiking" },
                        { id: "d21-q21", type: "text", question: "Rewrite: 'Ich kann leider nicht kommen.' Start with 'Leider'.",
                          answer: "Leider kann ich nicht kommen.", explanation: "Adverb + modal verb + subject" },
                        { id: "d21-q22", type: "text", question: "Translate: 'We rarely go to the theater.'",
                          answer: "Wir gehen selten ins Theater.", explanation: "selten = rarely" },
                        { id: "d21-q23", type: "choice", question: "Correct inversion: 'Heute ___ ich Fußball.'",
                          options: ["spiele", "ich spiele", "spielen"], answer: "spiele",
                          explanation: "After 'Heute', verb comes next, then subject 'ich'" },
                        { id: "d21-q24", type: "text", question: "What's the German for 'to take photos'?",
                          answer: "fotografieren", explanation: "fotografieren = to photograph/take photos" },
                        { id: "d21-q25", type: "text", question: "Rewrite: 'Wir lernen am Montag Deutsch.' Start with 'Am Montag'.",
                          answer: "Am Montag lernen wir Deutsch.", explanation: "Time expression triggers inversion" },
                        { id: "d21-q26", type: "text", question: "Translate: 'I like going to the cinema.'",
                          answer: "Ich gehe gern ins Kino.", explanation: "ins Kino gehen + gern" },
                        { id: "d21-q27", type: "choice", question: "Which is a creative hobby?",
                          options: ["malen", "laufen", "schwimmen"], answer: "malen",
                          explanation: "malen = to paint (creative)" },
                        { id: "d21-q28", type: "text", question: "Complete: 'Er spielt ___ pro Woche Fußball.' (three times)",
                          answer: "dreimal", explanation: "dreimal pro Woche = three times per week" },
                        { id: "d21-q29", type: "text", question: "Translate: 'On the weekend I go swimming.'",
                          answer: "Am Wochenende gehe ich schwimmen.", explanation: "Am Wochenende + inversion" },
                        { id: "d21-q30", type: "text", question: "Write a sentence about your hobby using 'gern' and inversion with a time expression.",
                          answer: "Am Wochenende spiele ich gern Tennis.",
                          explanation: "Example: Time expression + verb + subject + gern + hobby" }
                    ]
                }
            },
            {
                day: 21.5,
                title: "Reflexive Verbs - Part 1",
                focus: "Daily Routine & Self-Care",
                activities: ["Learn reflexive pronouns", "Practice daily routine verbs", "Master word order"],
                homework: ["Describe your morning/evening routine with reflexive verbs"],
                details: {
                    sections: [
                        {
                            title: "1. Introduction to Reflexive Verbs in German",
                            content: "Reflexive verbs are essential in German for describing daily routines, emotions, and many common activities. A reflexive verb is one where the subject and object are the same person or thing - the action 'reflects' back to the subject.\n\n**What Makes a Verb Reflexive?**\nA reflexive verb requires a reflexive pronoun (sich, mich, dich, etc.) that refers back to the subject:\n* **Ich wasche mich.** (I wash myself.)\n* **Du kämmst dich.** (You comb yourself.)\n\n**Why Reflexive Verbs Matter:**\n* Required for describing daily routines (CEFR A1 requirement)\n* Essential for Goethe A1 exam (Sprechen and Schreiben sections)\n* Used in approximately 20% of everyday German conversations\n* Cannot be avoided - you MUST use them to describe getting ready, feelings, meetings\n\n**Recognition:**\nIn dictionaries, reflexive verbs are listed with 'sich':\n* **sich waschen** (to wash oneself)\n* **sich freuen** (to be happy/look forward to)\n\n**Key Difference from English:**\nMany German reflexive verbs are NOT reflexive in English:\n* sich freuen = to be happy (NOT 'to happy oneself')\n* sich treffen = to meet (NOT 'to meet oneself')",
                            examples: [
                                { german: "Ich wasche mich jeden Morgen.", english: "I wash (myself) every morning." },
                                { german: "Wir treffen uns um 8 Uhr.", english: "We meet (each other) at 8 o'clock." },
                                { german: "Sie freut sich auf das Wochenende.", english: "She's looking forward to the weekend." }
                            ]
                        },
                        {
                            title: "2. Accusative Reflexive Pronouns",
                            content: "Reflexive pronouns change based on the subject, just like personal pronouns. In the accusative case (most common), here are the reflexive pronouns:\n\n**Accusative Reflexive Pronouns:**\n* **ich** → **mich** (myself)\n* **du** → **dich** (yourself - informal)\n* **er/sie/es** → **sich** (himself/herself/itself)\n* **wir** → **uns** (ourselves)\n* **ihr** → **euch** (yourselves - informal plural)\n* **sie** → **sich** (themselves)\n* **Sie** → **sich** (yourself/yourselves - formal)\n\n**Important Notes:**\n* The 3rd person forms (er/sie/es/sie/Sie) ALL use **sich**\n* **Sich** is the same for singular, plural, and formal 'you'\n* The reflexive pronoun comes AFTER the conjugated verb\n* In questions, the pronoun comes right after the subject\n\n**Word Order:**\n* **Statement:** Ich wasche mich.\n* **Question:** Wäschst du dich?\n* **With time:** Ich wasche mich jeden Morgen.",
                            examples: [
                                { german: "Ich ziehe mich an.", english: "I get dressed." },
                                { german: "Du kämmst dich.", english: "You comb your hair." },
                                { german: "Er wäscht sich.", english: "He washes himself." },
                                { german: "Wir duschen uns.", english: "We shower." },
                                { german: "Ihr zieht euch um.", english: "You (plural) change clothes." },
                                { german: "Sie waschen sich die Hände.", english: "They wash their hands." }
                            ]
                        },
                        {
                            title: "3. Daily Routine Reflexive Verbs",
                            content: "These are essential verbs for describing your morning and evening routines. You MUST learn these for the Goethe A1 exam.\n\n**Morning/Evening Routine Verbs:**\n* **sich waschen** (to wash oneself) - ich wasche mich\n* **sich duschen** (to shower) - ich dusche mich\n* **sich baden** (to take a bath) - ich bade mich\n* **sich anziehen** (to get dressed) - ich ziehe mich an (SEPARABLE!)\n* **sich ausziehen** (to get undressed) - ich ziehe mich aus (SEPARABLE!)\n* **sich umziehen** (to change clothes) - ich ziehe mich um (SEPARABLE!)\n* **sich kämmen** (to comb one's hair) - ich kämme mich\n* **sich rasieren** (to shave) - ich rasiere mich\n* **sich schminken** (to put on makeup) - ich schminke mich\n\n**Important:** When reflexive verbs are SEPARABLE, the prefix still goes to the end:\n* Ich ziehe **mich** an. (I get dressed.)\n* Du ziehst **dich** um. (You change clothes.)\n\n**Typical Morning Routine Sentence:**\n* Ich stehe auf, dusche mich, ziehe mich an und frühstücke.",
                            examples: [
                                { german: "Ich wasche mich jeden Morgen.", english: "I wash myself every morning." },
                                { german: "Wäschst du dich jeden Abend?", english: "Do you wash yourself every evening?" },
                                { german: "Er duscht sich vor dem Frühstück.", english: "He showers before breakfast." },
                                { german: "Wir ziehen uns schnell an.", english: "We get dressed quickly." },
                                { german: "Sie kämmt sich die Haare.", english: "She combs her hair." },
                                { german: "Ich rasiere mich jeden Tag.", english: "I shave every day." },
                                { german: "Sie schminkt sich am Morgen.", english: "She puts on makeup in the morning." }
                            ]
                        },
                        {
                            title: "4. Emotional and Social Reflexive Verbs",
                            content: "These reflexive verbs express emotions, interests, and social interactions. Very common in everyday German.\n\n**Emotional States:**\n* **sich freuen** (to be happy/glad, to look forward to)\n  - sich freuen **auf** + Acc (look forward to something in future)\n  - sich freuen **über** + Acc (be happy about something that happened)\n* **sich ärgern** (to be annoyed/angry)\n  - sich ärgern **über** + Acc (be annoyed about)\n* **sich fühlen** (to feel)\n  - Ich fühle mich gut/schlecht/müde (I feel good/bad/tired)\n* **sich interessieren** (to be interested in)\n  - sich interessieren **für** + Acc (be interested in)\n\n**Social Interactions:**\n* **sich treffen** (to meet)\n  - sich treffen **mit** + Dat (meet with someone)\n* **sich verabreden** (to make an appointment/date)\n  - sich verabreden **mit** + Dat (arrange to meet with)\n* **sich erholen** (to recover, relax, rest)\n  - sich erholen **von** + Dat (recover from)\n\n**Usage Notes:**\n* These verbs often require specific prepositions\n* The preposition determines which case follows\n* Learn verb + preposition combinations together",
                            examples: [
                                { german: "Ich freue mich auf das Wochenende.", english: "I'm looking forward to the weekend." },
                                { german: "Sie freut sich über das Geschenk.", english: "She's happy about the gift." },
                                { german: "Er ärgert sich über den Regen.", english: "He's annoyed about the rain." },
                                { german: "Wie fühlst du dich heute?", english: "How do you feel today?" },
                                { german: "Ich interessiere mich für Musik.", english: "I'm interested in music." },
                                { german: "Wir treffen uns um 18 Uhr vor dem Kino.", english: "We're meeting at 6 PM in front of the cinema." },
                                { german: "Sie verabredet sich mit ihrem Freund.", english: "She's making a date with her boyfriend." },
                                { german: "Ich erhole mich am Wochenende.", english: "I relax on the weekend." }
                            ]
                        },
                        {
                            title: "5. Word Order with Reflexive Verbs",
                            content: "Understanding where to place the reflexive pronoun is crucial for correct German sentences.\n\n**Standard Word Order (Main Clause):**\n1. **Subject + Verb + Reflexive Pronoun + Other Elements**\n   - Ich wasche mich jeden Morgen.\n   - Subject (Ich) + Verb (wasche) + Pronoun (mich) + Time (jeden Morgen)\n\n**Questions (Yes/No):**\n2. **Verb + Subject + Reflexive Pronoun + Other Elements**\n   - Wäschst du dich jeden Morgen?\n   - Verb (Wäschst) + Subject (du) + Pronoun (dich) + Time\n\n**Questions (W-Questions):**\n3. **W-Word + Verb + Subject + Reflexive Pronoun + Other**\n   - Wann ziehst du dich an?\n   - W-word (Wann) + Verb (ziehst) + Subject (du) + Pronoun (dich) + Prefix (an)\n\n**With Separable Verbs:**\n4. **Subject + Verb + Reflexive + Other + Prefix**\n   - Ich ziehe mich schnell an.\n   - The prefix (an) goes to the END\n\n**Position Rule:**\nThe reflexive pronoun typically comes:\n* RIGHT AFTER the conjugated verb in statements\n* RIGHT AFTER the subject in questions\n* BEFORE other objects or time expressions\n* BEFORE the separable prefix",
                            examples: [
                                { german: "Ich freue mich auf das Wochenende.", english: "I'm looking forward to the weekend. (Statement)" },
                                { german: "Freust du dich auf das Wochenende?", english: "Are you looking forward to the weekend? (Question)" },
                                { german: "Warum ärgerst du dich?", english: "Why are you annoyed? (W-Question)" },
                                { german: "Wir treffen uns jeden Freitag.", english: "We meet every Friday. (With time)" },
                                { german: "Ziehst du dich jetzt um?", english: "Are you changing clothes now? (Separable verb)" },
                                { german: "Er wäscht sich die Hände vor dem Essen.", english: "He washes his hands before eating." }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d21.5-q1", type: "choice", question: "What is the reflexive pronoun for 'ich'?",
                          options: ["mich", "dich", "sich"], answer: "mich",
                          explanation: "ich → mich (myself)" },
                        { id: "d21.5-q2", type: "choice", question: "What is the reflexive pronoun for 'er'?",
                          options: ["ihn", "sich", "ihm"], answer: "sich",
                          explanation: "All 3rd person forms use 'sich'" },
                        { id: "d21.5-q3", type: "text", question: "Translate: 'I wash myself.'",
                          answer: "Ich wasche mich.", explanation: "sich waschen → wasche mich" },
                        { id: "d21.5-q4", type: "text", question: "Translate: 'Do you shower?' (du form)",
                          answer: "Duschst du dich?", explanation: "sich duschen → duschst du dich?" },
                        { id: "d21.5-q5", type: "choice", question: "Complete: 'Wir ___ uns jeden Tag.' (wash)",
                          options: ["waschen", "wäscht", "wasche"], answer: "waschen",
                          explanation: "wir waschen uns" },
                        { id: "d21.5-q6", type: "text", question: "What does 'sich anziehen' mean?",
                          answer: "to get dressed", explanation: "an = on, ziehen = pull → get dressed" },
                        { id: "d21.5-q7", type: "text", question: "Translate: 'I get dressed.' (sich anziehen)",
                          answer: "Ich ziehe mich an.", explanation: "Separable: ziehe mich...an" },
                        { id: "d21.5-q8", type: "choice", question: "Complete: 'Er ___ sich jeden Morgen.' (shave)",
                          options: ["rasiert", "rasiere", "rasierst"], answer: "rasiert",
                          explanation: "er rasiert sich (he shaves)" },
                        { id: "d21.5-q9", type: "text", question: "Translate: 'She combs her hair.'",
                          answer: "Sie kämmt sich.", explanation: "sich kämmen → kämmt sich" },
                        { id: "d21.5-q10", type: "text", question: "What is the reflexive pronoun for 'ihr'?",
                          answer: "euch", explanation: "ihr → euch (yourselves)" },
                        { id: "d21.5-q11", type: "choice", question: "Translate: 'We meet at 8 o'clock.'",
                          options: ["Wir treffen uns um 8 Uhr.", "Wir treffen um 8 Uhr.", "Wir uns treffen um 8 Uhr."],
                          answer: "Wir treffen uns um 8 Uhr.", explanation: "sich treffen → treffen uns" },
                        { id: "d21.5-q12", type: "text", question: "Complete: 'Ich freue ___ auf das Wochenende.' (myself)",
                          answer: "mich", explanation: "sich freuen → freue mich" },
                        { id: "d21.5-q13", type: "text", question: "Translate: 'Are you getting dressed?' (du)",
                          answer: "Ziehst du dich an?", explanation: "Question: Verb + du + dich + an" },
                        { id: "d21.5-q14", type: "choice", question: "What does 'sich freuen auf' mean?",
                          options: ["to be angry about", "to look forward to", "to be afraid of"],
                          answer: "to look forward to", explanation: "sich freuen auf + Acc = look forward to" },
                        { id: "d21.5-q15", type: "text", question: "Translate: 'He is interested in music.'",
                          answer: "Er interessiert sich für Musik.", explanation: "sich interessieren für + Acc" },
                        { id: "d21.5-q16", type: "text", question: "Complete: 'Sie ___ sich über das Geschenk.' (is happy)",
                          answer: "freut", explanation: "sie freut sich über (is happy about)" },
                        { id: "d21.5-q17", type: "choice", question: "Word order: Where does 'mich' go? 'Ich / wasche / jeden Morgen'",
                          options: ["Ich wasche mich jeden Morgen", "Ich mich wasche jeden Morgen", "Ich wasche jeden Morgen mich"],
                          answer: "Ich wasche mich jeden Morgen", explanation: "Pronoun after verb, before time" },
                        { id: "d21.5-q18", type: "text", question: "Translate: 'How do you feel?' (du form)",
                          answer: "Wie fühlst du dich?", explanation: "sich fühlen → fühlst du dich?" },
                        { id: "d21.5-q19", type: "text", question: "What is 'sich ärgern über'?",
                          answer: "to be annoyed about", explanation: "sich ärgern über + Acc" },
                        { id: "d21.5-q20", type: "text", question: "Translate: 'I change clothes.' (sich umziehen)",
                          answer: "Ich ziehe mich um.", explanation: "Separable: ziehe mich...um" },
                        { id: "d21.5-q21", type: "choice", question: "Reflexive pronoun for 'Sie' (formal)?",
                          options: ["sich", "Sich", "Ihnen"], answer: "sich",
                          explanation: "Formal Sie → sich (lowercase)" },
                        { id: "d21.5-q22", type: "text", question: "Complete morning routine: 'Ich stehe auf, ___ mich und ziehe mich an.'",
                          answer: "dusche", explanation: "I get up, shower, and get dressed" },
                        { id: "d21.5-q23", type: "text", question: "Translate: 'We're meeting in front of the cinema.'",
                          answer: "Wir treffen uns vor dem Kino.", explanation: "sich treffen, vor + Dative" },
                        { id: "d21.5-q24", type: "choice", question: "Which verb means 'to put on makeup'?",
                          options: ["sich rasieren", "sich schminken", "sich kämmen"], answer: "sich schminken",
                          explanation: "sich schminken = to put on makeup" },
                        { id: "d21.5-q25", type: "text", question: "Ask: 'When are you getting dressed?' (du)",
                          answer: "Wann ziehst du dich an?", explanation: "Wann + verb + du + dich + an" },
                        { id: "d21.5-q26", type: "text", question: "Translate: 'I'm looking forward to the vacation.'",
                          answer: "Ich freue mich auf den Urlaub.", explanation: "sich freuen auf + Acc" },
                        { id: "d21.5-q27", type: "text", question: "What does 'sich erholen' mean?",
                          answer: "to relax/recover/rest", explanation: "sich erholen = to recover/relax" },
                        { id: "d21.5-q28", type: "choice", question: "Complete: 'Ihr ___ euch schnell an.' (get dressed)",
                          options: ["zieht", "ziehst", "ziehen"], answer: "zieht",
                          explanation: "ihr zieht euch...an" },
                        { id: "d21.5-q29", type: "text", question: "Translate: 'They wash their hands before eating.'",
                          answer: "Sie waschen sich die Hände vor dem Essen.", explanation: "sich waschen, vor + Dat" },
                        { id: "d21.5-q30", type: "text", question: "Create sentence: I shave every day",
                          answer: "Ich rasiere mich jeden Tag.", explanation: "sich rasieren, jeden Tag" },
                        { id: "d21.5-q31", type: "choice", question: "Error check: 'Ich mich wasche jeden Morgen.'",
                          options: ["Correct", "Should be: Ich wasche mich jeden Morgen", "Should be: Ich wasche jeden Morgen mich"],
                          answer: "Should be: Ich wasche mich jeden Morgen", explanation: "Pronoun goes AFTER verb" },
                        { id: "d21.5-q32", type: "text", question: "Ask: 'Are you annoyed?' (du form)",
                          answer: "Ärgerst du dich?", explanation: "sich ärgern → ärgerst du dich?" },
                        { id: "d21.5-q33", type: "text", question: "Translate: 'She takes a bath every evening.'",
                          answer: "Sie badet sich jeden Abend.", explanation: "sich baden = to bathe" },
                        { id: "d21.5-q34", type: "text", question: "Complete: 'Wir ___ uns von der Arbeit.' (relax/recover)",
                          answer: "erholen", explanation: "sich erholen von + Dat" },
                        { id: "d21.5-q35", type: "text", question: "Create your morning routine (2 reflexive verbs minimum)",
                          answer: "Ich stehe auf, dusche mich und ziehe mich an.",
                          explanation: "Example answer using reflexive verbs in routine" }
                    ]
                }
            },
            {
                day: 22,
                title: "City & Directions",
                focus: "Imperative & Navigation",
                activities: ["Giving directions", "Imperative forms", "City vocabulary"],
                homework: ["Map navigation exercises and imperative practice"],
                details: {
                    sections: [
                        {
                            title: "1. City Vocabulary (In der Stadt)",
                            content: "Essential vocabulary for navigating a city and describing locations.\n\n**Key Places (Die Orte):**\n* **der Bahnhof** (train station)\n* **das Rathaus** (city hall)\n* **die Kirche** (church)\n* **das Krankenhaus** (hospital)\n* **die Apotheke** (pharmacy)\n* **die Bank** (bank)\n* **die Post** (post office)\n* **das Restaurant** (restaurant)\n* **das Café** (café)\n* **der Supermarkt** (supermarket)\n* **das Hotel** (hotel)\n* **das Museum** (museum)\n* **der Park** (park)\n* **die Schule** (school)\n* **die Universität** (university)\n\n**Streets & Directions:**\n* **die Straße** (street)\n* **die Ecke** (corner)\n* **die Kreuzung** (intersection/crossroads)\n* **die Ampel** (traffic light)\n* **der Platz** (square/plaza)\n* **die Brücke** (bridge)\n\n**Prepositions for Directions:**\n* **an** (at, by)\n* **auf** (on)\n* **neben** (next to)\n* **gegenüber** (across from)\n* **zwischen** (between)\n* **in** (in)",
                            examples: [
                                { german: "Der Bahnhof ist neben dem Hotel.", english: "The train station is next to the hotel." },
                                { german: "Die Bank ist gegenüber der Post.", english: "The bank is across from the post office." },
                                { german: "Das Museum ist an der Ecke.", english: "The museum is at the corner." }
                            ]
                        },
                        {
                            title: "2. Direction Commands (Richtungen)",
                            content: "Key phrases for giving and understanding directions.\n\n**Basic Directions:**\n* **geradeaus** (straight ahead)\n* **links** (left)\n* **rechts** (right)\n* **zurück** (back)\n\n**Complete Direction Phrases:**\n* **Gehen Sie geradeaus.** (Go straight.)\n* **Gehen Sie nach links.** (Go to the left.)\n* **Gehen Sie nach rechts.** (Go to the right.)\n* **Biegen Sie links ab.** (Turn left.)\n* **Biegen Sie rechts ab.** (Turn right.)\n* **Gehen Sie zurück.** (Go back.)\n* **Überqueren Sie die Straße.** (Cross the street.)\n* **Nehmen Sie die erste/zweite Straße links.** (Take the first/second street on the left.)\n\n**Distance Indicators:**\n* **hier** (here)\n* **dort/da** (there)\n* **weit** (far)\n* **nah/in der Nähe** (near/nearby)\n* **100 Meter** (100 meters)\n* **5 Minuten** (5 minutes)\n\n**Asking for Directions:**\n* **Wo ist...?** (Where is...?)\n* **Wie komme ich zu/zum/zur...?** (How do I get to...?)\n* **Entschuldigung, wo ist der Bahnhof?** (Excuse me, where is the train station?)\n* **Ist das weit von hier?** (Is that far from here?)",
                            examples: [
                                { german: "Gehen Sie geradeaus und dann links.", english: "Go straight and then left." },
                                { german: "Der Bahnhof ist 200 Meter von hier.", english: "The train station is 200 meters from here." },
                                { german: "Nehmen Sie die zweite Straße rechts.", english: "Take the second street on the right." },
                                { german: "Überqueren Sie die Brücke.", english: "Cross the bridge." }
                            ]
                        },
                        {
                            title: "3. The Imperative (Der Imperativ)",
                            content: "The imperative is used for commands, instructions, and requests. German has THREE imperative forms based on who you're addressing.\n\n**Du-Form (Informal Singular):**\n* **Rule:** Use the verb stem (drop -en from infinitive)\n* **Regular:** gehen → **Geh!** (Go!)\n* **Regular:** machen → **Mach!** (Do!)\n* **Irregular (vowel change e→i):** nehmen → **Nimm!** (Take!)\n* **Irregular (vowel change e→ie):** lesen → **Lies!** (Read!)\n* **Note:** Usually NO 'e' ending, but can add for euphony\n\n**Ihr-Form (Informal Plural):**\n* **Rule:** Same as normal conjugation (stem + t)\n* gehen → **Geht!** (Go!)\n* machen → **Macht!** (Do!)\n* nehmen → **Nehmt!** (Take!)\n\n**Sie-Form (Formal Singular/Plural):**\n* **Rule:** Infinitive + Sie (verb comes BEFORE Sie!)\n* gehen → **Gehen Sie!** (Go!)\n* machen → **Machen Sie!** (Do!)\n* nehmen → **Nehmen Sie!** (Take!)\n* **Most common in giving directions to strangers**\n\n**Special Cases:**\n* **sein:** sei (du), seid (ihr), seien Sie (Sie)\n* **haben:** hab (du), habt (ihr), haben Sie (Sie)\n* **werden:** werd/werde (du), werdet (ihr), werden Sie (Sie)\n\n**Polite Imperative:**\nAdd 'bitte' (please) to make it more polite:\n* **Gehen Sie bitte geradeaus.** (Please go straight.)",
                            examples: [
                                { german: "Geh nach Hause! (du)", english: "Go home! (informal singular)" },
                                { german: "Geht nach Hause! (ihr)", english: "Go home! (informal plural)" },
                                { german: "Gehen Sie nach Hause! (Sie)", english: "Go home! (formal)" },
                                { german: "Nimm das Buch! (du)", english: "Take the book! (informal)" },
                                { german: "Lesen Sie bitte den Text! (Sie)", english: "Please read the text! (formal)" },
                                { german: "Macht die Tür zu! (ihr)", english: "Close the door! (informal plural)" }
                            ]
                        },
                        {
                            title: "4. Practical Direction Dialogues",
                            content: "Putting it all together - asking for and giving directions in real situations.\n\n**Dialogue Structure:**\n1. **Excuse me / Getting attention:** Entschuldigung...\n2. **Ask for direction:** Wo ist...? / Wie komme ich zu...?\n3. **Give direction:** Gehen Sie... / Nehmen Sie...\n4. **Thank:** Vielen Dank! / Danke schön!\n\n**Useful Complete Phrases:**\n* **Entschuldigung, können Sie mir helfen?** (Excuse me, can you help me?)\n* **Ich suche den Bahnhof.** (I'm looking for the train station.)\n* **Ist das weit?** (Is that far?)\n* **Kann ich zu Fuß gehen?** (Can I walk?)\n* **Wie lange dauert das?** (How long does that take?)\n* **Vielen Dank für Ihre Hilfe!** (Thank you very much for your help!)\n\n**Sample Navigation:**\n* Gehen Sie geradeaus bis zur Ampel. (Go straight until the traffic light.)\n* Dann biegen Sie links ab. (Then turn left.)\n* Gehen Sie über die Brücke. (Go over the bridge.)\n* Der Bahnhof ist auf der rechten Seite. (The train station is on the right side.)",
                            examples: [
                                { german: "Dialog:\nA: Entschuldigung, wo ist das Rathaus?\nB: Gehen Sie geradeaus und dann rechts.\nA: Ist das weit?\nB: Nein, nur 5 Minuten.\nA: Vielen Dank!",
                                  english: "Dialogue:\nA: Excuse me, where is city hall?\nB: Go straight and then right.\nA: Is that far?\nB: No, only 5 minutes.\nA: Thank you very much!" }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d22-q1", type: "text", question: "Imperative (Sie): 'machen' (do/make)",
                          answer: "Machen Sie", explanation: "Formal imperative: infinitive + Sie" },
                        { id: "d22-q2", type: "text", question: "Translate: 'Go straight!' (formal)",
                          answer: "Gehen Sie geradeaus!", explanation: "Gehen Sie + geradeaus" },
                        { id: "d22-q3", type: "choice", question: "What is 'der Bahnhof'?",
                          options: ["train station", "bus station", "airport"], answer: "train station",
                          explanation: "der Bahnhof = train station" },
                        { id: "d22-q4", type: "text", question: "Imperative (du): 'gehen' (go)",
                          answer: "Geh", explanation: "Informal singular: verb stem" },
                        { id: "d22-q5", type: "text", question: "How do you say 'left'?",
                          answer: "links", explanation: "links = left, rechts = right" },
                        { id: "d22-q6", type: "text", question: "Translate: 'Turn right!' (formal)",
                          answer: "Biegen Sie rechts ab!", explanation: "abbiegen = to turn (separable)" },
                        { id: "d22-q7", type: "choice", question: "Which means 'pharmacy'?",
                          options: ["die Apotheke", "das Krankenhaus", "die Bank"], answer: "die Apotheke",
                          explanation: "die Apotheke = pharmacy" },
                        { id: "d22-q8", type: "text", question: "Imperative (ihr): 'lesen' (read)",
                          answer: "Lest", explanation: "Informal plural: stem + t" },
                        { id: "d22-q9", type: "text", question: "Translate: 'Where is the museum?'",
                          answer: "Wo ist das Museum?", explanation: "Wo ist + noun" },
                        { id: "d22-q10", type: "choice", question: "Complete: 'Gehen Sie ___' (straight ahead)",
                          options: ["geradeaus", "links", "zurück"], answer: "geradeaus",
                          explanation: "geradeaus = straight ahead" },
                        { id: "d22-q11", type: "text", question: "What does 'die Kreuzung' mean?",
                          answer: "intersection/crossroads", explanation: "die Kreuzung = intersection" },
                        { id: "d22-q12", type: "text", question: "Imperative (Sie): 'nehmen' (take)",
                          answer: "Nehmen Sie", explanation: "Formal: Nehmen Sie" },
                        { id: "d22-q13", type: "text", question: "Translate: 'Cross the street!' (formal)",
                          answer: "Überqueren Sie die Straße!", explanation: "überqueren = to cross" },
                        { id: "d22-q14", type: "choice", question: "How do you ask 'How do I get to...?'",
                          options: ["Wie komme ich zu...?", "Wo ist...?", "Was ist...?"], answer: "Wie komme ich zu...?",
                          explanation: "Wie komme ich zu/zum/zur...?" },
                        { id: "d22-q15", type: "text", question: "What is 'gegenüber'?",
                          answer: "across from/opposite", explanation: "gegenüber = across from" },
                        { id: "d22-q16", type: "text", question: "Imperative (du): 'nehmen' - irregular!",
                          answer: "Nimm", explanation: "e→i vowel change: nimm" },
                        { id: "d22-q17", type: "text", question: "Translate: 'The bank is next to the post office.'",
                          answer: "Die Bank ist neben der Post.", explanation: "neben + dative" },
                        { id: "d22-q18", type: "choice", question: "What is 'das Rathaus'?",
                          options: ["city hall", "restaurant", "rat house"], answer: "city hall",
                          explanation: "das Rathaus = city hall" },
                        { id: "d22-q19", type: "text", question: "Complete: '___ Sie die zweite Straße rechts.' (Take)",
                          answer: "Nehmen", explanation: "Nehmen Sie = Take (formal)" },
                        { id: "d22-q20", type: "text", question: "How do you say 'Is that far?'",
                          answer: "Ist das weit?", explanation: "weit = far" },
                        { id: "d22-q21", type: "text", question: "Imperative (ihr): 'machen' (do)",
                          answer: "Macht", explanation: "ihr-form: stem + t" },
                        { id: "d22-q22", type: "choice", question: "What does 'die Ampel' mean?",
                          options: ["traffic light", "lamp", "apple"], answer: "traffic light",
                          explanation: "die Ampel = traffic light" },
                        { id: "d22-q23", type: "text", question: "Translate: 'Go to the left!' (formal)",
                          answer: "Gehen Sie nach links!", explanation: "nach links = to the left" },
                        { id: "d22-q24", type: "text", question: "What is 'in der Nähe'?",
                          answer: "nearby/in the vicinity", explanation: "in der Nähe = nearby" },
                        { id: "d22-q25", type: "text", question: "Imperative (Sie): 'sein' (be) - irregular!",
                          answer: "Seien Sie", explanation: "Irregular: seien Sie" },
                        { id: "d22-q26", type: "choice", question: "To say 'between', you use:",
                          options: ["zwischen", "neben", "an"], answer: "zwischen",
                          explanation: "zwischen = between" },
                        { id: "d22-q27", type: "text", question: "Translate: 'Take the first street on the left!' (formal)",
                          answer: "Nehmen Sie die erste Straße links!", explanation: "erste Straße links" },
                        { id: "d22-q28", type: "text", question: "Ask politely: 'Excuse me, can you help me?'",
                          answer: "Entschuldigung, können Sie mir helfen?", explanation: "Polite request formula" },
                        { id: "d22-q29", type: "text", question: "Complete direction: 'Gehen Sie geradeaus ___ zur Ampel.' (until)",
                          answer: "bis", explanation: "bis zur = until the" },
                        { id: "d22-q30", type: "text", question: "Give directions: From the station, go straight, then turn right at the traffic light (formal).",
                          answer: "Gehen Sie geradeaus und biegen Sie dann an der Ampel rechts ab.",
                          explanation: "Complete direction sequence with imperative" }
                    ]
                }
            },
            {
                day: 22.5,
                title: "Suggestions & Invitations",
                focus: "Making and Responding to Invitations",
                activities: ["Learn suggestion phrases", "Practice accepting/declining", "Role-play social situations"],
                homework: ["Write invitation dialogues"],
                details: {
                    sections: [
                        {
                            title: "1. Making Suggestions (Vorschläge machen)",
                            content: "Making suggestions is essential for social interaction and planning activities with others. These phrases allow you to propose ideas politely and naturally.\n\n**Key Suggestion Phrases:**\n\n**1. Wollen wir...? / Sollen wir...?** (Shall we...?)\n* Simple and direct way to suggest activities\n* Uses modal verbs wollen (want) or sollen (should)\n* Very common in everyday conversation\n\n**2. Wie wäre es mit...?** (How about...?)\n* More polite and formal\n* Literally: 'How would it be with...?'\n* Followed by Dative case\n\n**3. Hast du Lust auf...?** / **Hast du Lust, ... zu...?**\n* Informal and friendly\n* 'auf' + Accusative for nouns\n* 'zu' + infinitive for verbs\n\n**4. Möchtest du...?** (Would you like to...?)\n* Polite suggestion using möchten\n* Can be used in formal and informal contexts\n\n**5. Was hältst du von...?** (What do you think of...?)\n* Asks for opinion about a suggestion\n* 'von' + Dative\n\n**6. Lass uns...** (Let's... - informal)\n* Very casual, only with 'du'\n* Imperative form of lassen\n\n**7. Ich schlage vor, dass...** (I suggest that...)\n* More formal\n* Introduces a subordinate clause",
                            examples: [
                                { german: "Wollen wir am Samstag ins Kino gehen?", english: "Shall we go to the cinema on Saturday?" },
                                { german: "Sollen wir morgen zusammen lernen?", english: "Shall we study together tomorrow?" },
                                { german: "Wie wäre es mit Pizza?", english: "How about pizza?" },
                                { german: "Wie wäre es mit einem Spaziergang?", english: "How about a walk?" },
                                { german: "Hast du Lust auf Kino?", english: "Do you feel like going to the cinema?" },
                                { german: "Hast du Lust, schwimmen zu gehen?", english: "Do you feel like going swimming?" },
                                { german: "Möchtest du mit mir essen gehen?", english: "Would you like to go eat with me?" },
                                { german: "Was hältst du von der Idee?", english: "What do you think of the idea?" },
                                { german: "Lass uns zusammen kochen!", english: "Let's cook together!" },
                                { german: "Ich schlage vor, dass wir uns um 18 Uhr treffen.", english: "I suggest that we meet at 6 PM." }
                            ]
                        },
                        {
                            title: "2. Accepting Invitations (Einladungen annehmen)",
                            content: "When someone invites you or makes a suggestion, you need to know how to accept enthusiastically and politely.\n\n**Enthusiastic Acceptance:**\n\n**1. Ja, gerne!** (Yes, gladly!)\n* Most common positive response\n* Shows enthusiasm\n* Works in all contexts\n\n**2. Sehr gerne!** (Very gladly!)\n* Even more enthusiastic\n* Shows strong interest\n\n**3. Das ist eine gute Idee!** (That's a good idea!)\n* Shows approval of the suggestion\n* Encourages the planner\n\n**4. Das klingt super/toll/gut!** (That sounds super/great/good!)\n* Expresses excitement\n* Very natural and common\n\n**5. Ja, warum nicht?** (Yes, why not?)\n* Casual and agreeable\n* Shows openness\n\n**6. Einverstanden!** (Agreed! / Deal!)\n* Formal acceptance\n* Confirms agreement\n\n**7. Mit Vergnügen!** (With pleasure!)\n* Very polite and formal\n* Business or formal social settings\n\n**8. Klar! / Natürlich!** (Of course!)\n* Casual and immediate\n* Shows no hesitation",
                            examples: [
                                { german: "Wollen wir ins Kino gehen? – Ja, gerne!", english: "Shall we go to the cinema? – Yes, gladly!" },
                                { german: "Kommst du zur Party? – Sehr gerne!", english: "Are you coming to the party? – Very gladly!" },
                                { german: "Lass uns Pizza bestellen. – Das ist eine gute Idee!", english: "Let's order pizza. – That's a good idea!" },
                                { german: "Wollen wir am Wochenende wandern? – Das klingt super!", english: "Shall we go hiking on the weekend? – That sounds great!" },
                                { german: "Hast du Lust auf Kaffee? – Ja, warum nicht?", english: "Do you feel like coffee? – Yes, why not?" },
                                { german: "Treffen wir uns um 8 Uhr? – Einverstanden!", english: "Shall we meet at 8? – Agreed!" },
                                { german: "Möchten Sie mitkommen? – Mit Vergnügen!", english: "Would you like to come along? – With pleasure!" },
                                { german: "Können wir morgen telefonieren? – Klar!", english: "Can we call tomorrow? – Of course!" }
                            ]
                        },
                        {
                            title: "3. Declining Invitations Politely (Absagen)",
                            content: "Sometimes you need to decline invitations. It's important to do this politely and give a reason when appropriate.\n\n**Polite Declinations:**\n\n**1. Leider kann ich nicht.** (Unfortunately, I can't.)\n* Most common polite refusal\n* 'Leider' softens the rejection\n\n**2. Tut mir leid, ich habe keine Zeit.** (Sorry, I don't have time.)\n* Gives a clear reason\n* Very polite with 'tut mir leid'\n\n**3. Das geht leider nicht.** (That unfortunately doesn't work.)\n* Refers to the timing/situation\n* Less personal than 'I can't'\n\n**4. Vielleicht ein anderes Mal?** (Maybe another time?)\n* Softens the refusal\n* Leaves door open for future\n\n**5. Leider habe ich schon etwas vor.** (Unfortunately, I already have plans.)\n* Specific reason\n* 'etwas vorhaben' = to have plans\n\n**6. Das passt mir nicht so gut.** (That doesn't suit me so well.)\n* Polite way to say it's inconvenient\n* Suggests negotiation\n\n**7. Schade, aber ich muss...** (Too bad, but I have to...)\n* Expresses regret\n* Shows you wish you could accept\n\n**Important Cultural Note:**\nGermans appreciate direct communication but also value politeness. Always:\n* Start with 'Leider' or 'Tut mir leid'\n* Give a brief reason if appropriate\n* Suggest an alternative if possible",
                            examples: [
                                { german: "Kommst du heute Abend? – Leider kann ich nicht.", english: "Are you coming tonight? – Unfortunately, I can't." },
                                { german: "Wollen wir essen gehen? – Tut mir leid, ich habe keine Zeit.", english: "Shall we go eat? – Sorry, I don't have time." },
                                { german: "Hast du Lust auf Kino? – Das geht leider nicht.", english: "Do you feel like cinema? – That unfortunately doesn't work." },
                                { german: "Können wir uns morgen treffen? – Vielleicht ein anderes Mal?", english: "Can we meet tomorrow? – Maybe another time?" },
                                { german: "Kommst du zur Party? – Leider habe ich schon etwas vor.", english: "Are you coming to the party? – Unfortunately, I already have plans." },
                                { german: "Passt dir Sonntag? – Das passt mir nicht so gut.", english: "Does Sunday suit you? – That doesn't suit me so well." },
                                { german: "Möchtest du mitkommen? – Schade, aber ich muss arbeiten.", english: "Would you like to come along? – Too bad, but I have to work." }
                            ]
                        },
                        {
                            title: "4. Negotiating Alternatives (Alternativen vorschlagen)",
                            content: "When you can't accept the original suggestion, it's polite to offer an alternative or ask about other options.\n\n**Suggesting Alternative Times:**\n\n**1. Wie wäre es am Samstag?** (How about Saturday?)\n* Proposes different day\n* Uses 'am' + day\n\n**2. Passt dir Sonntag besser?** (Does Sunday suit you better?)\n* Asks if alternative is better\n* 'passen' + Dative\n\n**3. Wann hast du Zeit?** (When do you have time?)\n* Open question\n* Lets other person choose\n\n**4. Um wie viel Uhr?** (At what time?)\n* Asks for specific time\n* Follow-up to accepted invitation\n\n**5. Geht es auch später?** (Does later also work?)\n* Suggests same day, different time\n* 'gehen' used for 'work/be possible'\n\n**6. Können wir einen anderen Tag nehmen?** (Can we take another day?)\n* Direct request for change\n* 'nehmen' = take/choose\n\n**Conversation Flow:**\n1. Make suggestion\n2. If declined, ask for alternative\n3. Agree on final plan\n4. Confirm time and place",
                            examples: [
                                { german: "Samstag geht nicht. Wie wäre es am Sonntag?", english: "Saturday doesn't work. How about Sunday?" },
                                { german: "Morgen kann ich nicht. Passt dir Mittwoch besser?", english: "I can't tomorrow. Does Wednesday suit you better?" },
                                { german: "Ich habe diese Woche viel zu tun. Wann hast du Zeit?", english: "I have a lot to do this week. When do you have time?" },
                                { german: "Ja, gerne! Um wie viel Uhr?", english: "Yes, gladly! At what time?" },
                                { german: "Um 18 Uhr kann ich nicht. Geht es auch später?", english: "I can't at 6 PM. Does later also work?" },
                                { german: "Freitag ist schwierig. Können wir einen anderen Tag nehmen?", english: "Friday is difficult. Can we take another day?" }
                            ]
                        },
                        {
                            title: "5. Complete Invitation Dialogues",
                            content: "Putting it all together - complete conversational exchanges for different social situations.\n\n**Dialogue Structure:**\n1. **Suggestion/Invitation**\n2. **Response** (Accept/Decline/Negotiate)\n3. **Details** (Time, place, specifics)\n4. **Confirmation**\n\n**Common Social Situations:**\n* Going to the cinema\n* Meeting for coffee\n* Dinner plans\n* Party invitation\n* Weekend activities\n* Sports/exercise\n\n**Useful Follow-up Phrases:**\n* **Wo treffen wir uns?** (Where shall we meet?)\n* **Wie kommen wir dahin?** (How do we get there?)\n* **Was sollen wir mitbringen?** (What should we bring?)\n* **Bis dann!** (See you then!)\n* **Ich freue mich darauf!** (I'm looking forward to it!)",
                            examples: [
                                { german: "Dialog 1:\nA: Wollen wir am Samstag ins Kino gehen?\nB: Ja, gerne! Um wie viel Uhr?\nA: Wie wäre es um 20 Uhr?\nB: Einverstanden! Bis Samstag!", english: "Dialogue 1:\nA: Shall we go to the cinema on Saturday?\nB: Yes, gladly! At what time?\nA: How about at 8 PM?\nB: Agreed! See you Saturday!" },
                                { german: "Dialog 2:\nA: Hast du Lust, morgen schwimmen zu gehen?\nB: Leider kann ich nicht. Ich muss arbeiten.\nA: Schade! Vielleicht am Wochenende?\nB: Ja, Sonntag passt mir gut!", english: "Dialogue 2:\nA: Do you feel like going swimming tomorrow?\nB: Unfortunately, I can't. I have to work.\nA: Too bad! Maybe on the weekend?\nB: Yes, Sunday suits me well!" },
                                { german: "Dialog 3:\nA: Ich schlage vor, dass wir zusammen kochen.\nB: Das ist eine gute Idee! Was möchtest du kochen?\nA: Vielleicht Pasta?\nB: Super! Wann?", english: "Dialogue 3:\nA: I suggest that we cook together.\nB: That's a good idea! What would you like to cook?\nA: Maybe pasta?\nB: Great! When?" }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d22.5-q1", type: "choice", question: "How do you say 'Shall we...' in German?",
                          options: ["Wollen wir", "Haben wir", "Sind wir"], answer: "Wollen wir",
                          explanation: "Wollen wir... = Shall we..." },
                        { id: "d22.5-q2", type: "choice", question: "Most common way to accept an invitation:",
                          options: ["Ja, gerne!", "Ja, gut!", "Ja, okay!"], answer: "Ja, gerne!",
                          explanation: "Ja, gerne! is the most natural and common acceptance" },
                        { id: "d22.5-q3", type: "text", question: "Translate: 'That's a good idea!'",
                          answer: "Das ist eine gute Idee!", explanation: "Standard phrase for accepting suggestions" },
                        { id: "d22.5-q4", type: "text", question: "How do you politely decline? 'Unfortunately, I can't.'",
                          answer: "Leider kann ich nicht.", explanation: "Leider softens the refusal" },
                        { id: "d22.5-q5", type: "choice", question: "Complete: 'Hast du Lust ___ Kino?' (Do you feel like cinema?)",
                          options: ["auf", "für", "zu"], answer: "auf",
                          explanation: "Lust auf + Accusative for nouns" },
                        { id: "d22.5-q6", type: "text", question: "Translate: 'How about Saturday?'",
                          answer: "Wie wäre es am Samstag?", explanation: "Wie wäre es + am + day" },
                        { id: "d22.5-q7", type: "text", question: "Say: 'That sounds great!'",
                          answer: "Das klingt toll!", explanation: "Or: Das klingt super/gut!" },
                        { id: "d22.5-q8", type: "choice", question: "To say 'Maybe another time?':",
                          options: ["Vielleicht ein anderes Mal?", "Vielleicht eine andere Zeit?", "Vielleicht später?"],
                          answer: "Vielleicht ein anderes Mal?", explanation: "Standard polite phrase when declining" },
                        { id: "d22.5-q9", type: "text", question: "Complete: 'Tut mir leid, ich habe ___ Zeit.' (no time)",
                          answer: "keine", explanation: "keine Zeit = no time" },
                        { id: "d22.5-q10", type: "text", question: "Ask: 'Does Sunday suit you better?' (du)",
                          answer: "Passt dir Sonntag besser?", explanation: "passen + Dative: dir" },
                        { id: "d22.5-q11", type: "choice", question: "Very formal way to accept:",
                          options: ["Mit Vergnügen!", "Klar!", "Okay!"], answer: "Mit Vergnügen!",
                          explanation: "Mit Vergnügen = With pleasure (very formal)" },
                        { id: "d22.5-q12", type: "text", question: "Translate: 'Let's go to the cinema!' (informal du)",
                          answer: "Lass uns ins Kino gehen!", explanation: "Lass uns + infinitive" },
                        { id: "d22.5-q13", type: "text", question: "Say: 'Unfortunately, I already have plans.'",
                          answer: "Leider habe ich schon etwas vor.", explanation: "etwas vorhaben = have plans" },
                        { id: "d22.5-q14", type: "choice", question: "Complete dialogue: 'Wollen wir Pizza essen?' – '___'",
                          options: ["Das klingt gut!", "Das ist gut!", "Das schmeckt gut!"],
                          answer: "Das klingt gut!", explanation: "klingen = to sound (for ideas/suggestions)" },
                        { id: "d22.5-q15", type: "text", question: "Ask: 'At what time?' (for meeting)",
                          answer: "Um wie viel Uhr?", explanation: "Standard time question" },
                        { id: "d22.5-q16", type: "text", question: "Translate: 'I'm looking forward to it!'",
                          answer: "Ich freue mich darauf!", explanation: "sich freuen auf + Acc" },
                        { id: "d22.5-q17", type: "choice", question: "To say it doesn't suit you:",
                          options: ["Das passt mir nicht.", "Das mag ich nicht.", "Das will ich nicht."],
                          answer: "Das passt mir nicht.", explanation: "passen = to suit/fit" },
                        { id: "d22.5-q18", type: "text", question: "Complete: 'Wie wäre es ___ einem Spaziergang?' (with a walk)",
                          answer: "mit", explanation: "Wie wäre es mit + Dative" },
                        { id: "d22.5-q19", type: "text", question: "Say: 'Too bad, but I have to work.'",
                          answer: "Schade, aber ich muss arbeiten.", explanation: "Schade expresses regret" },
                        { id: "d22.5-q20", type: "text", question: "Ask: 'When do you have time?' (du)",
                          answer: "Wann hast du Zeit?", explanation: "Open question for scheduling" },
                        { id: "d22.5-q21", type: "choice", question: "Casual way to say 'of course':",
                          options: ["Natürlich!", "Sicherlich!", "Bestimmt!"], answer: "Natürlich!",
                          explanation: "Natürlich or Klar! for casual contexts" },
                        { id: "d22.5-q22", type: "text", question: "Create dialogue: Suggest going to movies, friend accepts enthusiastically",
                          answer: "A: Wollen wir ins Kino gehen? B: Ja, gerne! Das klingt super!",
                          explanation: "Example answer with suggestion and enthusiastic acceptance" },
                        { id: "d22.5-q23", type: "text", question: "Politely decline dinner invitation and suggest alternative",
                          answer: "Leider kann ich nicht. Wie wäre es am Wochenende?",
                          explanation: "Decline + alternative suggestion" },
                        { id: "d22.5-q24", type: "text", question: "What does 'etwas vorhaben' mean?",
                          answer: "to have plans", explanation: "Ich habe etwas vor = I have plans" },
                        { id: "d22.5-q25", type: "text", question: "Complete party invitation: 'Ich ___ eine Party am Samstag. Kommst du?'",
                          answer: "mache", explanation: "eine Party machen = to have/throw a party" }
                    ]
                }
            },
            {
                day: 23,
                title: "Transport & Travel",
                focus: "Transportation & Ticket Buying",
                activities: ["Transportation types", "Buying tickets", "Travel phrases", "Platform announcements"],
                homework: ["Ticket purchase dialogues and transport scenarios"],
                details: {
                    sections: [
                        {
                            title: "1. Types of Transportation (Verkehrsmittel)",
                            content: "Essential vocabulary for different modes of transport in German-speaking countries.\n\n**Public Transport (Öffentliche Verkehrsmittel):**\n* **der Zug** (train) - plural: die Züge\n* **die S-Bahn** (suburban train) - Stadt-Bahn\n* **die U-Bahn** (subway/metro) - Untergrund-Bahn\n* **der Bus** (bus) - plural: die Busse\n* **die Straßenbahn / die Tram** (tram/streetcar)\n* **die Fähre** (ferry)\n\n**Long-Distance Transport:**\n* **das Flugzeug** (airplane) - plural: die Flugzeuge\n* **der ICE** (high-speed train) - InterCity Express\n* **der Fernbus** (long-distance bus)\n\n**Private Transport:**\n* **das Auto** (car) - plural: die Autos\n* **das Fahrrad** (bicycle) - plural: die Fahrräder\n* **das Motorrad** (motorcycle)\n* **das Taxi** (taxi)\n\n**On Foot:**\n* **zu Fuß gehen** (to walk/go on foot)\n\n**Verbs of Transportation:**\n* **fahren** (to drive, to go by vehicle) - irregular: ich fahre, du fährst\n* **fliegen** (to fly)\n* **nehmen** (to take) - ich nehme den Bus\n* **steigen** (to get on/board) - einsteigen, aussteigen",
                            examples: [
                                { german: "Ich fahre mit dem Zug.", english: "I'm traveling by train." },
                                { german: "Sie nimmt die U-Bahn zur Arbeit.", english: "She takes the subway to work." },
                                { german: "Wir fliegen nach Berlin.", english: "We're flying to Berlin." },
                                { german: "Er geht zu Fuß.", english: "He walks./He goes on foot." }
                            ]
                        },
                        {
                            title: "2. At the Train Station (Am Bahnhof)",
                            content: "Key vocabulary and phrases for navigating train stations.\n\n**Station Vocabulary:**\n* **der Bahnhof** (train station)\n* **der Hauptbahnhof (Hbf)** (main station)\n* **der Fahrplan** (timetable/schedule)\n* **das Gleis** (platform/track) - plural: die Gleise\n* **der Bahnsteig** (platform)\n* **die Abfahrt** (departure)\n* **die Ankunft** (arrival)\n* **der Schalter** (counter/ticket window)\n* **der Fahrkartenautomat** (ticket machine)\n* **die Auskunft** (information desk)\n* **der Wartesaal** (waiting room)\n* **das Gepäck** (luggage)\n* **der Koffer** (suitcase)\n\n**Ticket Types:**\n* **die Fahrkarte** (ticket)\n* **die Einzelfahrkarte** (single ticket/one-way)\n* **die Rückfahrkarte** (return ticket)\n* **die Tageskarte** (day pass)\n* **die Monatskarte** (monthly pass)\n* **erste Klasse** (first class)\n* **zweite Klasse** (second class)\n\n**Important Questions:**\n* **Von welchem Gleis fährt der Zug ab?** (Which platform does the train leave from?)\n* **Wann fährt der Zug ab?** (When does the train leave?)\n* **Wann kommt der Zug an?** (When does the train arrive?)\n* **Muss ich umsteigen?** (Do I have to change trains?)\n* **Wo ist Gleis 3?** (Where is platform 3?)",
                            examples: [
                                { german: "Der Zug fährt von Gleis 7 ab.", english: "The train departs from platform 7." },
                                { german: "Ich brauche eine Fahrkarte nach München.", english: "I need a ticket to Munich." },
                                { german: "Wann kommt der Zug in Berlin an?", english: "When does the train arrive in Berlin?" },
                                { german: "Sie müssen in Frankfurt umsteigen.", english: "You have to change trains in Frankfurt." }
                            ]
                        },
                        {
                            title: "3. Buying a Ticket (Eine Fahrkarte kaufen)",
                            content: "Essential phrases for purchasing tickets at the counter or machine.\n\n**At the Ticket Counter (Am Schalter):**\n\n**Basic Request:**\n* **Ich möchte eine Fahrkarte nach [Stadt].**\n  (I would like a ticket to [city].)\n* **Einmal/Zweimal nach [Stadt], bitte.**\n  (One/Two tickets to [city], please.)\n\n**Specifying Details:**\n* **Hin und zurück, bitte.** (Return ticket, please.)\n* **Nur Hinfahrt.** (One-way only.)\n* **Zweite Klasse, bitte.** (Second class, please.)\n* **Für morgen/heute/den 15. Mai.** (For tomorrow/today/May 15th.)\n* **Um wie viel Uhr fährt der Zug?** (What time does the train leave?)\n\n**Payment:**\n* **Was kostet das?** (How much does that cost?)\n* **Kann ich mit Karte bezahlen?** (Can I pay by card?)\n\n**At the Ticket Machine (Am Automaten):**\n* **Zielort wählen** (Select destination)\n* **Anzahl der Personen** (Number of people)\n* **Hinfahrt / Hin und zurück** (One-way / Return)\n* **Zahlungsart: Bar / Karte** (Payment method: Cash / Card)\n\n**Complete Dialogue Example:**\nKunde: Guten Tag. Ich möchte eine Fahrkarte nach Hamburg.\nMitarbeiter: Hin und zurück?\nKunde: Ja, bitte. Für morgen.\nMitarbeiter: Wann möchten Sie fahren?\nKunde: Am Vormittag, bitte.\nMitarbeiter: Der Zug fährt um 9:30 Uhr. Das kostet 78 Euro.\nKunde: Gut. Kann ich mit Karte bezahlen?\nMitarbeiter: Ja, natürlich.",
                            examples: [
                                { german: "Einmal nach Berlin, bitte.", english: "One ticket to Berlin, please." },
                                { german: "Hin und zurück oder nur Hinfahrt?", english: "Return or one-way only?" },
                                { german: "Was kostet eine Fahrkarte nach München?", english: "How much is a ticket to Munich?" },
                                { german: "Der Zug fährt um 14:30 Uhr ab.", english: "The train departs at 2:30 PM." }
                            ]
                        },
                        {
                            title: "4. Travel Phrases & Situations",
                            content: "Common situations and useful phrases while traveling.\n\n**On the Platform:**\n* **Ist das der Zug nach [Stadt]?** (Is this the train to [city]?)\n* **Ist dieser Platz frei?** (Is this seat free?)\n* **Entschuldigung, das ist mein Platz.** (Excuse me, that's my seat.)\n* **Wo ist der Speisewagen?** (Where is the dining car?)\n* **Nächster Halt: [Stadt]** (Next stop: [city])\n\n**Asking for Help:**\n* **Kann ich Ihnen helfen?** (Can I help you?)\n* **Entschuldigung, ich habe mich verirrt.** (Excuse me, I'm lost.)\n* **Wo muss ich umsteigen?** (Where do I have to change?)\n* **Wie komme ich zum Gleis 5?** (How do I get to platform 5?)\n\n**Announcements (Durchsagen):**\n* **Vorsicht an Gleis 3!** (Attention on platform 3!)\n* **Der Zug hat Verspätung.** (The train is delayed.)\n* **Bitte einsteigen!** (Please board!)\n* **Türen schließen!** (Doors closing!)\n* **Bitte zurückbleiben!** (Please stand back!)\n\n**Problems:**\n* **Ich habe meinen Zug verpasst.** (I missed my train.)\n* **Der Zug ist verspätet.** (The train is delayed.)\n* **Wo ist das Fundbüro?** (Where is the lost and found?)\n* **Ich habe mein Ticket verloren.** (I lost my ticket.)",
                            examples: [
                                { german: "Entschuldigung, fährt dieser Zug nach Hamburg?", english: "Excuse me, does this train go to Hamburg?" },
                                { german: "Der Zug hat 10 Minuten Verspätung.", english: "The train is 10 minutes late." },
                                { german: "Wo muss ich für München umsteigen?", english: "Where do I have to change for Munich?" },
                                { german: "Ist dieser Platz noch frei?", english: "Is this seat still free?" }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d23-q1", type: "text", question: "Translate: 'the train'",
                          answer: "der Zug", explanation: "der Zug = the train (masculine)" },
                        { id: "d23-q2", type: "choice", question: "What is 'die U-Bahn'?",
                          options: ["subway/metro", "bus", "tram"], answer: "subway/metro",
                          explanation: "U-Bahn = Untergrund-Bahn (underground train)" },
                        { id: "d23-q3", type: "text", question: "How do you say 'I'm traveling by train'?",
                          answer: "Ich fahre mit dem Zug.", explanation: "mit + dative: mit dem Zug" },
                        { id: "d23-q4", type: "text", question: "What does 'der Bahnhof' mean?",
                          answer: "train station", explanation: "der Bahnhof = train station" },
                        { id: "d23-q5", type: "text", question: "Translate: 'the platform'",
                          answer: "das Gleis", explanation: "das Gleis = platform/track" },
                        { id: "d23-q6", type: "choice", question: "How do you say 'I need a ticket to Munich'?",
                          options: ["Ich brauche eine Fahrkarte nach München.", "Ich will München.", "Ich gehe München."],
                          answer: "Ich brauche eine Fahrkarte nach München.",
                          explanation: "brauchen + eine Fahrkarte nach + city" },
                        { id: "d23-q7", type: "text", question: "What is 'hin und zurück'?",
                          answer: "return/round-trip", explanation: "hin und zurück = there and back (return ticket)" },
                        { id: "d23-q8", type: "text", question: "Translate: 'When does the train depart?'",
                          answer: "Wann fährt der Zug ab?", explanation: "abfahren = to depart (separable)" },
                        { id: "d23-q9", type: "choice", question: "What does 'umsteigen' mean?",
                          options: ["to change trains", "to get on", "to get off"], answer: "to change trains",
                          explanation: "umsteigen = to change/transfer (trains/buses)" },
                        { id: "d23-q10", type: "text", question: "How do you ask 'Which platform does the train leave from?'",
                          answer: "Von welchem Gleis fährt der Zug ab?", explanation: "von welchem Gleis = from which platform" },
                        { id: "d23-q11", type: "text", question: "What is 'die Fahrkarte'?",
                          answer: "ticket", explanation: "die Fahrkarte = ticket (for transport)" },
                        { id: "d23-q12", type: "text", question: "Translate: 'She takes the bus to work.'",
                          answer: "Sie nimmt den Bus zur Arbeit.", explanation: "nehmen + accusative: den Bus" },
                        { id: "d23-q13", type: "choice", question: "What is 'das Flugzeug'?",
                          options: ["airplane", "train", "car"], answer: "airplane",
                          explanation: "das Flugzeug = airplane" },
                        { id: "d23-q14", type: "text", question: "What does 'der Fahrplan' mean?",
                          answer: "timetable/schedule", explanation: "der Fahrplan = timetable" },
                        { id: "d23-q15", type: "text", question: "Complete: 'Einmal nach Berlin, ___.' (please)",
                          answer: "bitte", explanation: "bitte = please" },
                        { id: "d23-q16", type: "choice", question: "How do you say 'to walk/go on foot'?",
                          options: ["zu Fuß gehen", "mit dem Fuß", "Fuß fahren"], answer: "zu Fuß gehen",
                          explanation: "zu Fuß gehen = to go on foot" },
                        { id: "d23-q17", type: "text", question: "Translate: 'Is this seat free?'",
                          answer: "Ist dieser Platz frei?", explanation: "dieser Platz = this seat" },
                        { id: "d23-q18", type: "text", question: "What is 'die Verspätung'?",
                          answer: "delay", explanation: "die Verspätung = delay" },
                        { id: "d23-q19", type: "text", question: "Complete: '___ ich mit Karte bezahlen?' (Can I pay by card?)",
                          answer: "Kann", explanation: "Kann ich = Can I" },
                        { id: "d23-q20", type: "choice", question: "What does 'aussteigen' mean?",
                          options: ["to get off", "to get on", "to change"], answer: "to get off",
                          explanation: "aussteigen = to get off (separable verb)" },
                        { id: "d23-q21", type: "text", question: "Translate: 'The train is delayed.'",
                          answer: "Der Zug hat Verspätung.", explanation: "Verspätung haben = to be delayed" },
                        { id: "d23-q22", type: "text", question: "What is 'zweite Klasse'?",
                          answer: "second class", explanation: "zweite Klasse = second class" },
                        { id: "d23-q23", type: "choice", question: "Which is the high-speed train?",
                          options: ["der ICE", "die S-Bahn", "die U-Bahn"], answer: "der ICE",
                          explanation: "ICE = InterCity Express (high-speed)" },
                        { id: "d23-q24", type: "text", question: "How do you ask 'When does the train arrive?'",
                          answer: "Wann kommt der Zug an?", explanation: "ankommen = to arrive (separable)" },
                        { id: "d23-q25", type: "text", question: "What does 'der Schalter' mean?",
                          answer: "counter/ticket window", explanation: "der Schalter = counter/window" },
                        { id: "d23-q26", type: "text", question: "Translate: 'I missed my train.'",
                          answer: "Ich habe meinen Zug verpasst.", explanation: "verpassen = to miss (perfect tense)" },
                        { id: "d23-q27", type: "choice", question: "What is 'das Gepäck'?",
                          options: ["luggage", "ticket", "platform"], answer: "luggage",
                          explanation: "das Gepäck = luggage" },
                        { id: "d23-q28", type: "text", question: "Complete dialogue: A: 'Hin und zurück?' B: 'Nein, nur ___.'",
                          answer: "Hinfahrt", explanation: "nur Hinfahrt = one-way only" },
                        { id: "d23-q29", type: "text", question: "Translate: 'Where do I have to change?'",
                          answer: "Wo muss ich umsteigen?", explanation: "umsteigen = to change/transfer" },
                        { id: "d23-q30", type: "text", question: "Create a ticket purchase: Ask for a return ticket to Hamburg for tomorrow, second class.",
                          answer: "Ich möchte eine Fahrkarte nach Hamburg, hin und zurück, für morgen, zweite Klasse, bitte.",
                          explanation: "Complete ticket request with all details" }
                    ]
                }
            },
            {
                day: 23.5,
                title: "Reflexive Verbs - Part 2",
                focus: "Perfect Tense & Dative Reflexives",
                activities: ["Learn perfect tense with reflexive verbs", "Practice dative reflexive pronouns", "Body parts expressions"],
                homework: ["Write about your past routine"],
                details: {
                    sections: [
                        {
                            title: "1. Perfect Tense with Reflexive Verbs",
                            content: "When using reflexive verbs in the perfect tense (past), the structure combines haben + reflexive pronoun + past participle. This is essential for describing past routines and experiences.\n\n**Perfect Tense Structure:**\n[Subject] + [haben] + [reflexive pronoun] + [past participle]\n\n**Formation Rules:**\n* ALL reflexive verbs use **haben** (never sein) in perfect tense\n* The reflexive pronoun stays in its normal position (after haben)\n* Past participle goes to the END of the sentence\n\n**Regular Reflexive Verbs (ge-...-t):**\n* **sich waschen** → Ich habe mich gewaschen (I washed myself)\n* **sich kämmen** → Du hast dich gekämmt (You combed your hair)\n* **sich rasieren** → Er hat sich rasiert (He shaved)\n* **sich freuen** → Wir haben uns gefreut (We were happy)\n\n**Separable Reflexive Verbs:**\nWhen the reflexive verb is also separable, the ge- goes BETWEEN the prefix and the stem:\n* **sich anziehen** → ge + prefix + stem + t → **angezogen**\n  - Ich habe mich angezogen (I got dressed)\n* **sich ausziehen** → ausge + zieh + en → **ausgezogen**\n  - Sie hat sich ausgezogen (She got undressed)\n* **sich umziehen** → umge + zieh + en → **umgezogen**\n  - Wir haben uns umgezogen (We changed clothes)\n\n**Irregular Reflexive Verbs (vowel changes):**\nSome reflexive verbs have irregular past participles:\n* **sich treffen** → getroffen (Wir haben uns getroffen - We met)\n* **sich waschen** → gewaschen (Er hat sich gewaschen - He washed)\n\n**Word Order Examples:**\n* **Simple:** Ich habe mich geduscht. (I showered)\n* **With time:** Gestern habe ich mich geduscht. (Yesterday I showered)\n* **Question:** Hast du dich schon geduscht? (Have you already showered?)",
                            examples: [
                                { german: "Ich habe mich heute Morgen gewaschen.", english: "I washed myself this morning." },
                                { german: "Hast du dich schon angezogen?", english: "Have you already gotten dressed?" },
                                { german: "Er hat sich vor dem Frühstück rasiert.", english: "He shaved before breakfast." },
                                { german: "Wir haben uns gestern getroffen.", english: "We met yesterday." },
                                { german: "Sie haben sich schnell umgezogen.", english: "They changed clothes quickly." },
                                { german: "Habt ihr euch schon gekämmt?", english: "Have you already combed your hair?" },
                                { german: "Ich habe mich über das Geschenk gefreut.", english: "I was happy about the gift." }
                            ]
                        },
                        {
                            title: "2. Dative vs Accusative Reflexive Pronouns",
                            content: "Most reflexive verbs use accusative pronouns (mich, dich, sich), but when you specify a BODY PART, the reflexive pronoun becomes DATIVE and the body part becomes the direct object (accusative).\n\n**Accusative Reflexive Pronouns (Review):**\n* ich → **mich**\n* du → **dich**\n* er/sie/es → **sich**\n* wir → **uns**\n* ihr → **euch**\n* sie/Sie → **sich**\n\n**Dative Reflexive Pronouns:**\n* ich → **mir**\n* du → **dir**\n* er/sie/es → **sich** (NO CHANGE!)\n* wir → **uns** (NO CHANGE!)\n* ihr → **euch** (NO CHANGE!)\n* sie/Sie → **sich** (NO CHANGE!)\n\n**Key Difference:**\nOnly **ich** (mir) and **du** (dir) change between accusative and dative!\n\n**When to Use Dative:**\nUse dative reflexive pronouns when you mention a specific body part:\n* **Pattern:** Subject + Verb + DATIVE pronoun + ACCUSATIVE body part\n\n**Without Body Part (Accusative):**\n* Ich wasche **mich**. (I wash myself - general)\n* Du kämmst **dich**. (You comb yourself - general)\n\n**With Body Part (Dative):**\n* Ich wasche **mir** die Hände. (I wash my hands - specific)\n* Du kämmst **dir** die Haare. (You comb your hair - specific)\n* Er putzt **sich** die Zähne. (He brushes his teeth - sich stays same)\n\n**Why This Structure?**\nIn German logic: \"I wash TO MYSELF the hands\" (not \"I wash my hands\")\n* **mir/dir/sich** = to myself/yourself/himself (dative - indirect object)\n* **die Hände** = the hands (accusative - direct object)\n\n**Important Note:**\nThird person (er/sie/es/sie/Sie) and plural (wir/ihr) pronouns don't change form between accusative and dative - they're always **sich**, **uns**, or **euch**.",
                            examples: [
                                { german: "Ich wasche mir die Hände.", english: "I wash my hands. (Dative: mir)" },
                                { german: "Du putzt dir die Zähne.", english: "You brush your teeth. (Dative: dir)" },
                                { german: "Er kämmt sich die Haare.", english: "He combs his hair. (sich - no change)" },
                                { german: "Wir waschen uns die Hände.", english: "We wash our hands. (uns - no change)" },
                                { german: "Ihr putzt euch die Zähne.", english: "You (plural) brush your teeth. (euch - no change)" },
                                { german: "Sie trocknen sich die Haare.", english: "They dry their hair. (sich - no change)" }
                            ]
                        },
                        {
                            title: "3. Body Parts with Reflexive Verbs",
                            content: "When describing personal hygiene and grooming, you commonly use reflexive verbs with body parts. This is essential for daily routine descriptions.\n\n**Common Body Parts (Always with Article!):**\n* **die Hände** (hands - plural)\n* **die Zähne** (teeth - plural)\n* **die Haare** (hair - plural in German!)\n* **das Gesicht** (face)\n* **die Füße** (feet - plural)\n* **die Nase** (nose)\n* **die Ohren** (ears - plural)\n\n**Common Reflexive Verb + Body Part Expressions:**\n\n**1. sich waschen (to wash):**\n* sich die Hände waschen (wash one's hands)\n* sich das Gesicht waschen (wash one's face)\n* sich die Füße waschen (wash one's feet)\n\n**2. sich putzen (to clean/brush):**\n* sich die Zähne putzen (brush one's teeth)\n* sich die Nase putzen (blow one's nose)\n\n**3. sich kämmen (to comb):**\n* sich die Haare kämmen (comb one's hair)\n\n**4. sich trocknen (to dry):**\n* sich die Haare trocknen (dry one's hair)\n* sich die Hände trocknen (dry one's hands)\n\n**5. sich föhnen (to blow-dry):**\n* sich die Haare föhnen (blow-dry one's hair)\n\n**Perfect Tense with Body Parts:**\n* Ich habe **mir** die Hände gewaschen.\n* Du hast **dir** die Zähne geputzt.\n* Er hat **sich** die Haare gekämmt.\n\n**Important Grammar Note:**\nThe article (die/das) is REQUIRED with body parts in German. Never say \"Ich wasche Hände\" - always \"Ich wasche mir die Hände.\"",
                            examples: [
                                { german: "Ich putze mir die Zähne nach dem Frühstück.", english: "I brush my teeth after breakfast." },
                                { german: "Sie wäscht sich die Hände vor dem Essen.", english: "She washes her hands before eating." },
                                { german: "Er kämmt sich die Haare jeden Morgen.", english: "He combs his hair every morning." },
                                { german: "Wir trocknen uns die Haare mit einem Handtuch.", english: "We dry our hair with a towel." },
                                { german: "Putzt ihr euch die Zähne vor dem Schlafengehen?", english: "Do you brush your teeth before bed?" },
                                { german: "Ich habe mir die Hände gewaschen.", english: "I washed my hands. (Perfect tense)" },
                                { german: "Sie hat sich die Haare geföhnt.", english: "She blow-dried her hair. (Perfect tense)" }
                            ]
                        },
                        {
                            title: "4. Expanded Reflexive Verb Vocabulary",
                            content: "Beyond basic daily routine, there are many important reflexive verbs for expressing emotions, relationships, and activities.\n\n**Emotional States (from Lesson 1 - Review):**\n* **sich freuen auf** + Acc (look forward to)\n* **sich freuen über** + Acc (be happy about)\n* **sich ärgern über** + Acc (be annoyed about)\n* **sich fühlen** (to feel)\n* **sich interessieren für** + Acc (be interested in)\n* **sich Sorgen machen um** + Acc (to worry about)\n* **sich fürchten vor** + Dat (to be afraid of)\n\n**Social Interactions:**\n* **sich treffen mit** + Dat (to meet with)\n* **sich verabreden mit** + Dat (to make a date/appointment with)\n* **sich unterhalten mit** + Dat (to converse with)\n* **sich kennenlernen** (to get to know each other)\n* **sich verlieben in** + Acc (to fall in love with)\n* **sich streiten mit** + Dat (to argue with)\n* **sich versöhnen mit** + Dat (to reconcile with)\n\n**Preparation & Movement:**\n* **sich vorbereiten auf** + Acc (to prepare for)\n* **sich setzen** (to sit down)\n* **sich hinlegen** (to lie down)\n* **sich ausruhen** (to rest)\n* **sich erholen von** + Dat (to recover from)\n* **sich beeilen** (to hurry)\n\n**Personal Care (Additional):**\n* **sich schminken** (to put on makeup)\n* **sich rasieren** (to shave)\n* **sich duschen** (to shower)\n* **sich baden** (to bathe)\n\n**These verbs in perfect tense:**\n* Ich habe mich auf die Prüfung vorbereitet. (I prepared for the exam)\n* Wir haben uns gestern getroffen. (We met yesterday)\n* Sie hat sich beeilt. (She hurried)",
                            examples: [
                                { german: "Ich habe mich auf die Party gefreut.", english: "I looked forward to the party." },
                                { german: "Er hat sich in sie verliebt.", english: "He fell in love with her." },
                                { german: "Wir haben uns mit Freunden getroffen.", english: "We met with friends." },
                                { german: "Sie hat sich für die Prüfung vorbereitet.", english: "She prepared for the exam." },
                                { german: "Habt ihr euch schon kennengelernt?", english: "Have you already gotten to know each other?" },
                                { german: "Ich habe mich sehr beeilt.", english: "I hurried a lot." },
                                { german: "Er hat sich von der Krankheit erholt.", english: "He recovered from the illness." },
                                { german: "Sie haben sich gestritten.", english: "They argued." }
                            ]
                        },
                        {
                            title: "5. Complex Reflexive Constructions and Practice",
                            content: "Putting it all together - reflexive verbs in various tenses, with different pronouns, and in complex sentences.\n\n**Present vs Perfect Tense Comparison:**\n* **Present:** Ich wasche mich. → **Perfect:** Ich habe mich gewaschen.\n* **Present:** Du freust dich. → **Perfect:** Du hast dich gefreut.\n* **Present:** Wir treffen uns. → **Perfect:** Wir haben uns getroffen.\n\n**With Separable Verbs:**\n* **Present:** Ich ziehe mich an. → **Perfect:** Ich habe mich angezogen.\n* **Present:** Er zieht sich um. → **Perfect:** Er hat sich umgezogen.\n\n**With Body Parts (Dative):**\n* **Present:** Ich putze mir die Zähne. → **Perfect:** Ich habe mir die Zähne geputzt.\n* **Present:** Sie wäscht sich die Hände. → **Perfect:** Sie hat sich die Hände gewaschen.\n\n**With Prepositions:**\n* Ich freue mich auf das Wochenende. (Present)\n* Ich habe mich auf das Wochenende gefreut. (Perfect)\n* Er interessiert sich für Musik. (Present)\n* Er hat sich für Musik interessiert. (Perfect)\n\n**Questions:**\n* Hast du dich heute Morgen geduscht?\n* Habt ihr euch schon die Zähne geputzt?\n* Hat sie sich auf die Prüfung vorbereitet?\n\n**Negative Sentences:**\n* Ich habe mich nicht geduscht.\n* Er hat sich die Haare nicht gekämmt.\n* Wir haben uns nicht getroffen.\n\n**Common Mistakes to Avoid:**\n* ❌ Ich habe gewaschen mich. → ✅ Ich habe mich gewaschen.\n* ❌ Ich habe mir gewaschen die Hände. → ✅ Ich habe mir die Hände gewaschen.\n* ❌ Ich bin mich geduscht. → ✅ Ich habe mich geduscht. (NEVER sein!)",
                            examples: [
                                { german: "Gestern habe ich mich um 7 Uhr geduscht und angezogen.", english: "Yesterday I showered and got dressed at 7 o'clock." },
                                { german: "Haben Sie sich schon die Hände gewaschen?", english: "Have you already washed your hands?" },
                                { german: "Wir haben uns letzte Woche im Café getroffen.", english: "We met at the café last week." },
                                { german: "Sie hat sich sehr über das Geschenk gefreut.", english: "She was very happy about the gift." },
                                { german: "Ich habe mir heute Morgen nicht die Haare gekämmt.", english: "I didn't comb my hair this morning." },
                                { german: "Habt ihr euch für die Reise vorbereitet?", english: "Did you prepare for the trip?" }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d23.5-q1", type: "choice", question: "Which auxiliary verb do reflexive verbs use in perfect tense?",
                          options: ["haben", "sein", "werden"], answer: "haben",
                          explanation: "ALL reflexive verbs use haben in perfect tense, never sein" },
                        { id: "d23.5-q2", type: "text", question: "Translate: 'I washed myself.' (perfect tense)",
                          answer: "Ich habe mich gewaschen.", explanation: "haben + mich + gewaschen" },
                        { id: "d23.5-q3", type: "text", question: "Translate: 'Did you shower?' (du, perfect)",
                          answer: "Hast du dich geduscht?", explanation: "Question: Hast + du + dich + geduscht?" },
                        { id: "d23.5-q4", type: "choice", question: "Complete: 'Er hat ___ rasiert.' (he shaved)",
                          options: ["sich", "ihn", "ihm"], answer: "sich",
                          explanation: "sich rasieren → hat sich rasiert" },
                        { id: "d23.5-q5", type: "text", question: "What is the dative reflexive pronoun for 'ich'?",
                          answer: "mir", explanation: "ich → mir (dative), mich (accusative)" },
                        { id: "d23.5-q6", type: "text", question: "What is the dative reflexive pronoun for 'du'?",
                          answer: "dir", explanation: "du → dir (dative), dich (accusative)" },
                        { id: "d23.5-q7", type: "choice", question: "Complete: 'Ich putze ___ die Zähne.' (I brush my teeth)",
                          options: ["mich", "mir", "mein"], answer: "mir",
                          explanation: "With body part → dative: mir die Zähne" },
                        { id: "d23.5-q8", type: "text", question: "Translate: 'I wash my hands.'",
                          answer: "Ich wasche mir die Hände.", explanation: "mir (dative) + die Hände (accusative)" },
                        { id: "d23.5-q9", type: "text", question: "Translate: 'You comb your hair.' (du)",
                          answer: "Du kämmst dir die Haare.", explanation: "dir (dative) + die Haare" },
                        { id: "d23.5-q10", type: "choice", question: "Complete: 'Er putzt ___ die Zähne.' (he brushes his teeth)",
                          options: ["sich", "ihm", "sein"], answer: "sich",
                          explanation: "Third person stays 'sich' in both accusative and dative" },
                        { id: "d23.5-q11", type: "text", question: "Translate: 'I brushed my teeth.' (perfect)",
                          answer: "Ich habe mir die Zähne geputzt.", explanation: "Perfect: habe + mir + die Zähne + geputzt" },
                        { id: "d23.5-q12", type: "text", question: "What does 'sich die Hände waschen' mean?",
                          answer: "to wash one's hands", explanation: "die Hände = hands (plural)" },
                        { id: "d23.5-q13", type: "choice", question: "German word for 'teeth':",
                          options: ["die Zähne", "der Zahn", "das Zahn"], answer: "die Zähne",
                          explanation: "die Zähne (plural) - always plural in this context" },
                        { id: "d23.5-q14", type: "text", question: "Translate: 'She dried her hair.' (perfect)",
                          answer: "Sie hat sich die Haare getrocknet.", explanation: "Perfect: hat + sich + die Haare + getrocknet" },
                        { id: "d23.5-q15", type: "text", question: "Translate: 'We got dressed.' (perfect)",
                          answer: "Wir haben uns angezogen.", explanation: "sich anziehen → haben uns angezogen" },
                        { id: "d23.5-q16", type: "choice", question: "Past participle of 'sich anziehen':",
                          options: ["angezogen", "gezogenan", "angeziehen"], answer: "angezogen",
                          explanation: "Separable: an + ge + zogen = angezogen" },
                        { id: "d23.5-q17", type: "text", question: "Translate: 'Did you change clothes?' (ihr, perfect)",
                          answer: "Habt ihr euch umgezogen?", explanation: "sich umziehen → habt...umgezogen" },
                        { id: "d23.5-q18", type: "text", question: "Translate: 'They met yesterday.' (perfect)",
                          answer: "Sie haben sich gestern getroffen.", explanation: "sich treffen → haben sich getroffen" },
                        { id: "d23.5-q19", type: "choice", question: "Complete: 'Ich habe ___ auf die Party gefreut.'",
                          options: ["mich", "mir", "sich"], answer: "mich",
                          explanation: "sich freuen uses accusative: mich" },
                        { id: "d23.5-q20", type: "text", question: "Translate: 'He was happy about the gift.' (perfect)",
                          answer: "Er hat sich über das Geschenk gefreut.", explanation: "sich freuen über + Acc" },
                        { id: "d23.5-q21", type: "text", question: "What does 'sich die Haare föhnen' mean?",
                          answer: "to blow-dry one's hair", explanation: "föhnen = to blow-dry" },
                        { id: "d23.5-q22", type: "choice", question: "Error check: 'Ich bin mich geduscht.'",
                          options: ["Correct", "Should be: Ich habe mich geduscht", "Should be: Ich habe geduscht mich"],
                          answer: "Should be: Ich habe mich geduscht", explanation: "Reflexive verbs always use haben!" },
                        { id: "d23.5-q23", type: "text", question: "Complete: 'Wir haben ___ die Hände gewaschen.' (we)",
                          answer: "uns", explanation: "wir → uns (same in accusative and dative)" },
                        { id: "d23.5-q24", type: "text", question: "Translate: 'I prepared for the exam.' (perfect)",
                          answer: "Ich habe mich auf die Prüfung vorbereitet.", explanation: "sich vorbereiten auf + Acc" },
                        { id: "d23.5-q25", type: "choice", question: "When do you use dative reflexive pronouns?",
                          options: ["Always", "Never", "When mentioning a body part"], answer: "When mentioning a body part",
                          explanation: "Dative when specifying body part as direct object" },
                        { id: "d23.5-q26", type: "text", question: "Translate: 'Did you wash your face?' (du, perfect)",
                          answer: "Hast du dir das Gesicht gewaschen?", explanation: "dir + das Gesicht in perfect tense" },
                        { id: "d23.5-q27", type: "text", question: "What does 'sich beeilen' mean?",
                          answer: "to hurry", explanation: "Ich habe mich beeilt = I hurried" },
                        { id: "d23.5-q28", type: "choice", question: "Complete: 'Sie hat ___ geschminkt.' (she put on makeup)",
                          options: ["sich", "ihr", "sie"], answer: "sich",
                          explanation: "sich schminken → hat sich geschminkt" },
                        { id: "d23.5-q29", type: "text", question: "Translate: 'We hurried.' (perfect)",
                          answer: "Wir haben uns beeilt.", explanation: "sich beeilen → haben uns beeilt" },
                        { id: "d23.5-q30", type: "text", question: "Word order: Put in correct order: 'gewaschen / die Hände / habe / mir / ich'",
                          answer: "Ich habe mir die Hände gewaschen.", explanation: "Subject + haben + dative pronoun + object + participle" },
                        { id: "d23.5-q31", type: "choice", question: "Compare: 'Ich wasche mich' vs 'Ich wasche mir die Hände' - what's the difference?",
                          options: ["No difference", "First is general, second specifies body part", "First is wrong"],
                          answer: "First is general, second specifies body part", explanation: "Without body part: accusative (mich), with body part: dative (mir)" },
                        { id: "d23.5-q32", type: "text", question: "Translate: 'They argued.' (perfect)",
                          answer: "Sie haben sich gestritten.", explanation: "sich streiten → haben sich gestritten" },
                        { id: "d23.5-q33", type: "text", question: "Create sentence: Yesterday I showered, got dressed, and brushed my teeth (perfect)",
                          answer: "Gestern habe ich mich geduscht, mich angezogen und mir die Zähne geputzt.",
                          explanation: "Multiple reflexive verbs in perfect tense" },
                        { id: "d23.5-q34", type: "text", question: "Translate: 'Have you already washed your hands?' (ihr)",
                          answer: "Habt ihr euch schon die Hände gewaschen?", explanation: "Question with 'schon' (already)" },
                        { id: "d23.5-q35", type: "text", question: "Describe your morning routine yesterday using at least 3 reflexive verbs (perfect tense)",
                          answer: "Gestern bin ich aufgestanden, habe mich geduscht, mir die Zähne geputzt und mich angezogen.",
                          explanation: "Example answer using reflexive verbs in perfect tense with routine" }
                    ]
                }
            },
            {
                day: 24,
                title: "Dative Case Introduction",
                focus: "Articles, Pronouns & Indirect Objects",
                activities: ["Learn dative articles", "Practice dative pronouns", "Understand indirect objects"],
                homework: ["Comprehensive dative article and pronoun practice"],
                details: {
                    sections: [
                        {
                            title: "1. Introduction to the Dative Case (Der Dativ)",
                            content: "The dative case is used for **indirect objects** - the person or thing that receives the action indirectly. It answers the question **Wem?** (To/for whom?).\n\n**When to Use Dative:**\n* With certain verbs (helfen, danken, gehören, gefallen, etc.)\n* After certain prepositions (aus, bei, mit, nach, seit, von, zu)\n* For indirect objects (the receiver)\n* With certain adjectives\n\n**Question Words:**\n* **Wem?** (To/for whom?) - Dative\n* **Wen?** (Whom?) - Accusative (direct object)\n* **Wer?** (Who?) - Nominative (subject)\n\n**Example Structure:**\nIch gebe **dem Mann** (dative - receiver) **das Buch** (accusative - thing given).\nI give the man the book.",
                            examples: [
                                { german: "Ich helfe dem Kind.", english: "I help the child. (Wem helfe ich? Dem Kind.)" },
                                { german: "Sie dankt der Frau.", english: "She thanks the woman." },
                                { german: "Wir geben den Kindern Geschenke.", english: "We give the children gifts." }
                            ]
                        },
                        {
                            title: "2. Dative Definite Articles (Bestimmte Artikel)",
                            content: "In the dative case, the definite articles change from their nominative forms. These changes must be memorized.\n\n**Nominative → Dative:**\n* **der** (masculine) → **dem**\n* **die** (feminine) → **der**\n* **das** (neuter) → **dem**\n* **die** (plural) → **den** + noun ends in **-n** (if not already there)\n\n**Important Plural Rule:**\nIn dative plural, most nouns add **-n** at the end:\n* die Kinder → den Kinder**n**\n* die Männer → den Männer**n**\n* Exception: Nouns already ending in -n or -s don't change\n  - die Frauen → den Frauen (already has -n)\n  - die Autos → den Autos (ends in -s)\n\n**Pattern Recognition:**\nMasculine and neuter are the same in dative: **dem**\nFeminine looks like nominative masculine: **der**\nPlural: **den** + add **-n** to noun",
                            examples: [
                                { german: "Ich helfe dem Mann. (masculine)", english: "I help the man." },
                                { german: "Er dankt der Lehrerin. (feminine)", english: "He thanks the teacher." },
                                { german: "Sie gibt dem Kind ein Buch. (neuter)", english: "She gives the child a book." },
                                { german: "Wir sprechen mit den Kindern. (plural)", english: "We speak with the children." },
                                { german: "Das gehört den Frauen. (plural, already -n)", english: "That belongs to the women." }
                            ]
                        },
                        {
                            title: "3. Dative Personal Pronouns (Personalpronomen)",
                            content: "Personal pronouns also change in the dative case. These are essential for everyday communication.\n\n**Dative Personal Pronouns:**\n* ich → **mir** (to/for me)\n* du → **dir** (to/for you - informal)\n* er → **ihm** (to/for him)\n* sie → **ihr** (to/for her)\n* es → **ihm** (to/for it)\n* wir → **uns** (to/for us)\n* ihr → **euch** (to/for you - plural informal)\n* sie → **ihnen** (to/for them)\n* Sie → **Ihnen** (to/for you - formal, capitalized)\n\n**Usage in Sentences:**\nThe dative pronoun comes AFTER the conjugated verb:\n* Ich helfe **dir**. (I help you.)\n* Er gibt **mir** das Buch. (He gives me the book.)\n\n**Common Verbs with Dative Pronouns:**\n* helfen: Ich helfe dir. (I help you.)\n* danken: Sie dankt mir. (She thanks me.)\n* geben: Er gibt ihm das Geld. (He gives him the money.)\n* gehören: Das gehört mir. (That belongs to me.)",
                            examples: [
                                { german: "Kannst du mir helfen?", english: "Can you help me?" },
                                { german: "Ich gebe dir mein Buch.", english: "I give you my book." },
                                { german: "Das gehört ihm.", english: "That belongs to him." },
                                { german: "Wir danken Ihnen.", english: "We thank you. (formal)" },
                                { german: "Er zeigt uns den Weg.", english: "He shows us the way." },
                                { german: "Sie schickt euch eine E-Mail.", english: "She sends you (plural) an email." }
                            ]
                        },
                        {
                            title: "4. Common Dative Verbs (Verben mit Dativ)",
                            content: "Certain German verbs ALWAYS take a dative object, even when English might use a direct object. These must be memorized.\n\n**Essential Dative Verbs:**\n* **danken** (to thank) - Ich danke dir.\n* **helfen** (to help) - Hilfst du mir?\n* **gehören** (to belong to) - Das Buch gehört dem Lehrer.\n* **gefallen** (to please/like) - Der Film gefällt mir.\n* **schmecken** (to taste good to) - Die Pizza schmeckt ihm.\n* **passen** (to fit) - Die Schuhe passen mir nicht.\n* **glauben** (to believe) - Ich glaube dir.\n* **folgen** (to follow) - Folgen Sie mir!\n* **antworten** (to answer) - Er antwortet der Frau.\n* **gratulieren** (to congratulate) - Wir gratulieren dir!\n\n**Important Note:**\nWith these verbs, you CANNOT use accusative. It's always dative.\n* ✅ Ich helfe **dir**. (dative)\n* ❌ Ich helfe **dich**. (accusative - WRONG!)\n\n**Gefallen vs Mögen:**\n* gefallen + dative: Der Film gefällt mir. (The film pleases me.)\n* mögen + accusative: Ich mag den Film. (I like the film.)",
                            examples: [
                                { german: "Ich danke dir für deine Hilfe.", english: "I thank you for your help." },
                                { german: "Kannst du mir bitte helfen?", english: "Can you please help me?" },
                                { german: "Das Auto gehört meinem Vater.", english: "The car belongs to my father." },
                                { german: "Wie gefällt dir Berlin?", english: "How do you like Berlin?" },
                                { german: "Das Essen schmeckt den Kindern nicht.", english: "The children don't like the food." },
                                { german: "Diese Jacke passt mir perfekt.", english: "This jacket fits me perfectly." },
                                { german: "Ich glaube ihm nicht.", english: "I don't believe him." },
                                { german: "Folgen Sie dem Auto!", english: "Follow the car!" }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d24-q1", type: "choice", question: "Ich danke ___ (die) Frau.",
                          options: ["die", "der", "den"], answer: "der",
                          explanation: "Dative feminine article: die → der" },
                        { id: "d24-q2", type: "text", question: "What is the dative form of 'der Mann'?",
                          answer: "dem Mann", explanation: "Masculine: der → dem" },
                        { id: "d24-q3", type: "text", question: "What is the dative form of 'das Kind'?",
                          answer: "dem Kind", explanation: "Neuter: das → dem" },
                        { id: "d24-q4", type: "choice", question: "Complete: 'Ich helfe ___ (die Kinder)' - plural!",
                          options: ["die Kinder", "den Kindern", "der Kinder"], answer: "den Kindern",
                          explanation: "Dative plural: den + add -n to noun" },
                        { id: "d24-q5", type: "text", question: "What is the dative pronoun for 'ich'?",
                          answer: "mir", explanation: "ich → mir in dative" },
                        { id: "d24-q6", type: "text", question: "What is the dative pronoun for 'du'?",
                          answer: "dir", explanation: "du → dir in dative" },
                        { id: "d24-q7", type: "choice", question: "Complete: 'Er gibt ___ das Buch.' (to me)",
                          options: ["mich", "mir", "mein"], answer: "mir",
                          explanation: "Dative pronoun: to me = mir" },
                        { id: "d24-q8", type: "text", question: "Translate: 'I help you.' (du form)",
                          answer: "Ich helfe dir.", explanation: "helfen takes dative: dir" },
                        { id: "d24-q9", type: "text", question: "Complete: 'Das gehört ___ (der Mann)'",
                          answer: "dem Mann", explanation: "gehören + dative: dem Mann" },
                        { id: "d24-q10", type: "choice", question: "Which verb takes dative?",
                          options: ["sehen", "helfen", "haben"], answer: "helfen",
                          explanation: "helfen always takes dative object" },
                        { id: "d24-q11", type: "text", question: "What is the dative pronoun for 'er'?",
                          answer: "ihm", explanation: "er → ihm in dative" },
                        { id: "d24-q12", type: "text", question: "What is the dative pronoun for 'sie' (she)?",
                          answer: "ihr", explanation: "sie (she) → ihr in dative" },
                        { id: "d24-q13", type: "text", question: "Translate: 'The car belongs to him.'",
                          answer: "Das Auto gehört ihm.", explanation: "gehören + dative pronoun ihm" },
                        { id: "d24-q14", type: "choice", question: "Complete: 'Sie dankt ___ (die Lehrerin)'",
                          options: ["die Lehrerin", "der Lehrerin", "den Lehrerin"], answer: "der Lehrerin",
                          explanation: "Feminine dative: die → der" },
                        { id: "d24-q15", type: "text", question: "What question does dative answer?",
                          answer: "Wem?", explanation: "Wem? = To/for whom? (dative)" },
                        { id: "d24-q16", type: "text", question: "Complete: 'Wir helfen ___ (die Frauen - plural)'",
                          answer: "den Frauen", explanation: "Plural dative: den Frauen (already ends in -n)" },
                        { id: "d24-q17", type: "choice", question: "What is the dative pronoun for 'wir'?",
                          options: ["uns", "euch", "ihnen"], answer: "uns",
                          explanation: "wir → uns in dative" },
                        { id: "d24-q18", type: "text", question: "Translate: 'How do you like the film?' (du, use gefallen)",
                          answer: "Wie gefällt dir der Film?", explanation: "gefallen + dative: dir" },
                        { id: "d24-q19", type: "text", question: "Complete: 'Die Pizza schmeckt ___ (ich) nicht.'",
                          answer: "mir", explanation: "schmecken + dative: mir" },
                        { id: "d24-q20", type: "choice", question: "Dative plural ending rule for nouns:",
                          options: ["add -e", "add -n", "add -s"], answer: "add -n",
                          explanation: "Dative plural adds -n to most nouns" },
                        { id: "d24-q21", type: "text", question: "What is the formal dative pronoun 'Sie'?",
                          answer: "Ihnen", explanation: "Sie (formal) → Ihnen (capitalized)" },
                        { id: "d24-q22", type: "text", question: "Translate: 'Can you help me?' (Sie form)",
                          answer: "Können Sie mir helfen?", explanation: "helfen + dative mir" },
                        { id: "d24-q23", type: "text", question: "Complete: 'Ich glaube ___ (du) nicht.'",
                          answer: "dir", explanation: "glauben + dative: dir" },
                        { id: "d24-q24", type: "choice", question: "Which is correct: 'Das Buch gehört ___'",
                          options: ["meinem Vater", "mein Vater", "meinen Vater"], answer: "meinem Vater",
                          explanation: "gehören + dative: meinem Vater" },
                        { id: "d24-q25", type: "text", question: "Translate: 'We thank you.' (ihr form)",
                          answer: "Wir danken euch.", explanation: "danken + dative: euch" }
                    ]
                }
            },
            {
                day: 25,
                title: "Dative Prepositions",
                focus: "aus, bei, mit, nach, seit, von, zu + Two-Way Prepositions",
                activities: ["Learn dative-only prepositions", "Practice two-way prepositions", "Master Wo? vs Wohin?"],
                homework: ["Comprehensive dative preposition practice"],
                details: {
                    sections: [
                        {
                            title: "1. Dative-Only Prepositions (Präpositionen mit Dativ)",
                            content: "Seven prepositions ALWAYS take the dative case, regardless of context. These must be memorized.\n\n**The Seven Dative Prepositions:**\n* **aus** (out of, from - origin)\n* **bei** (at, near, with - location/company)\n* **mit** (with - instrument/company)\n* **nach** (to, after - direction to cities/countries, after time)\n* **seit** (since, for - time duration)\n* **von** (from, of, by - origin/possession)\n* **zu** (to - direction to people/places)\n\n**Memory Aid - ABMNSVZ:**\nThink: **A**lways **B**ring **M**y **N**ew **S**ilver **V**ase **Z**uerst (first)\n\n**Important Contractions:**\n* bei + dem = **beim** (at the)\n* von + dem = **vom** (from the)\n* zu + dem = **zum** (to the - masculine/neuter)\n* zu + der = **zur** (to the - feminine)\n\n**Key Point:**\nAfter these prepositions, ALWAYS use dative case:\n* aus **dem** Haus (not: aus **das** Haus)\n* mit **der** Frau (not: mit **die** Frau)",
                            examples: [
                                { german: "Ich komme aus Deutschland.", english: "I come from Germany." },
                                { german: "Er wohnt bei seinen Eltern.", english: "He lives with his parents." },
                                { german: "Wir fahren mit dem Bus.", english: "We go by bus." },
                                { german: "Sie fliegt nach Berlin.", english: "She's flying to Berlin." },
                                { german: "Ich lerne seit zwei Jahren Deutsch.", english: "I've been learning German for two years." },
                                { german: "Das Geschenk ist von meiner Mutter.", english: "The gift is from my mother." },
                                { german: "Ich gehe zum Arzt.", english: "I'm going to the doctor." }
                            ]
                        },
                        {
                            title: "2. Detailed Usage of Each Dative Preposition",
                            content: "**aus** (out of, from):\n* Origin: aus Deutschland, aus der Schweiz\n* Material: aus Holz (made of wood), aus Metall\n* Reason: aus Liebe (out of love), aus Angst (out of fear)\n\n**bei** (at, near, with):\n* Location: bei der Arbeit (at work), bei McDonald's\n* Living with: bei meinen Eltern wohnen\n* With businesses: beim Arzt (at the doctor's)\n\n**mit** (with):\n* Company: mit meinem Freund (with my friend)\n* Instrument: mit dem Auto fahren (travel by car)\n* Age: mit 18 Jahren (at age 18)\n\n**nach** (to, after):\n* Direction to cities/countries WITHOUT article: nach Berlin, nach Deutschland\n* After (time): nach dem Essen (after eating)\n* According to: nach meiner Meinung (in my opinion)\n* Note: Use 'zu' for places WITH article\n\n**seit** (since, for - time):\n* Duration: seit drei Jahren (for three years)\n* Starting point: seit Januar (since January)\n* Always with present tense in German!\n\n**von** (from, of, by):\n* Origin: von zu Hause (from home)\n* Possession: der Freund von meiner Schwester\n* Author: ein Buch von Goethe\n* Time span: von 9 bis 5 Uhr (from 9 to 5)\n\n**zu** (to):\n* Direction to people: zu meinem Freund, zum Arzt\n* Direction to places: zur Schule, zur Post\n* Purpose: zum Frühstück (for breakfast)\n* Note: Use 'nach' for cities/countries without article",
                            examples: [
                                { german: "Diese Tasche ist aus Leder.", english: "This bag is made of leather." },
                                { german: "Ich arbeite bei Siemens.", english: "I work at Siemens." },
                                { german: "Sie schreibt mit einem Bleistift.", english: "She writes with a pencil." },
                                { german: "Nach dem Film gehen wir essen.", english: "After the film we're going to eat." },
                                { german: "Er wohnt seit einem Jahr in München.", english: "He's been living in Munich for a year." },
                                { german: "Ich komme gerade vom Supermarkt.", english: "I'm just coming from the supermarket." },
                                { german: "Wir gehen zur Universität.", english: "We're going to the university." }
                            ]
                        },
                        {
                            title: "3. Two-Way Prepositions (Wechselpräpositionen)",
                            content: "Nine prepositions can take EITHER dative OR accusative, depending on the context. This is one of the most important concepts in German!\n\n**The Nine Two-Way Prepositions:**\n**in, an, auf, über, unter, vor, hinter, neben, zwischen**\n\n**The Rule:**\n* **DATIVE (Wo?)** = LOCATION (where something IS) - no movement or movement within\n* **ACCUSATIVE (Wohin?)** = DIRECTION (where something is GOING) - movement toward\n\n**Memory Trick:**\n* **Wo?** (Where?) = **W**aitng, staying, being → **D**ative\n* **Wohin?** (Where to?) = **A**ction, going toward → **A**ccusative\n\n**DATIVE (Wo? - Location):**\n* **in dem** (im) Haus - in the house\n* **an der** Wand - on the wall\n* **auf dem** Tisch - on the table\n* **über dem** Bett - above the bed\n* **unter dem** Stuhl - under the chair\n* **vor der** Tür - in front of the door\n* **hinter dem** Haus - behind the house\n* **neben der** Bank - next to the bank\n* **zwischen den** Stühlen - between the chairs\n\n**ACCUSATIVE (Wohin? - Direction):**\n* **in das** (ins) Haus - into the house\n* **an die** Wand - onto the wall\n* **auf den** Tisch - onto the table\n* **über das** Bett - over the bed\n* **unter den** Stuhl - under the chair\n* **vor die** Tür - in front of the door\n* **hinter das** Haus - behind the house\n* **neben die** Bank - next to the bank\n* **zwischen die** Stühle - between the chairs",
                            examples: [
                                { german: "Ich bin im Kino. (Wo?)", english: "I am in the cinema. (DATIVE - location)" },
                                { german: "Ich gehe ins Kino. (Wohin?)", english: "I'm going to the cinema. (ACCUSATIVE - direction)" },
                                { german: "Das Bild hängt an der Wand. (Wo?)", english: "The picture hangs on the wall. (DATIVE)" },
                                { german: "Ich hänge das Bild an die Wand. (Wohin?)", english: "I hang the picture on the wall. (ACCUSATIVE)" },
                                { german: "Das Buch liegt auf dem Tisch. (Wo?)", english: "The book lies on the table. (DATIVE)" },
                                { german: "Ich lege das Buch auf den Tisch. (Wohin?)", english: "I put the book on the table. (ACCUSATIVE)" }
                            ]
                        },
                        {
                            title: "4. Common Verb Pairs with Two-Way Prepositions",
                            content: "Certain verb pairs help you remember when to use dative vs accusative with two-way prepositions.\n\n**DATIVE Verbs (Position/Location):**\n* **sein** (to be) - Ich bin **im** Zimmer.\n* **bleiben** (to stay) - Er bleibt **im** Bett.\n* **wohnen** (to live) - Sie wohnt **in der** Stadt.\n* **stehen** (to stand) - Das Auto steht **vor dem** Haus.\n* **liegen** (to lie flat) - Das Buch liegt **auf dem** Tisch.\n* **sitzen** (to sit) - Ich sitze **auf dem** Stuhl.\n* **hängen** (to hang) - Das Bild hängt **an der** Wand.\n\n**ACCUSATIVE Verbs (Action/Movement):**\n* **gehen** (to go) - Ich gehe **ins** Zimmer.\n* **fahren** (to drive) - Wir fahren **in die** Stadt.\n* **kommen** (to come) - Komm **ins** Haus!\n* **stellen** (to place upright) - Ich stelle die Flasche **auf den** Tisch.\n* **legen** (to lay flat) - Leg das Buch **auf den** Tisch!\n* **setzen** (to set/sit down) - Setz dich **auf den** Stuhl!\n* **hängen** (to hang up) - Ich hänge das Bild **an die** Wand.\n\n**Key Pattern:**\n* Position verbs (sein, stehen, liegen, sitzen, hängen) → DATIVE (Wo?)\n* Action verbs (stellen, legen, setzen, hängen) → ACCUSATIVE (Wohin?)",
                            examples: [
                                { german: "Wo ist der Schlüssel? - Er liegt auf dem Tisch.", english: "Where is the key? - It's lying on the table. (DATIVE)" },
                                { german: "Wohin legst du den Schlüssel? - Ich lege ihn auf den Tisch.", english: "Where are you putting the key? - I'm putting it on the table. (ACCUSATIVE)" },
                                { german: "Die Lampe steht neben dem Sofa.", english: "The lamp stands next to the sofa. (DATIVE)" },
                                { german: "Ich stelle die Lampe neben das Sofa.", english: "I'm placing the lamp next to the sofa. (ACCUSATIVE)" }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d25-q1", type: "choice", question: "Ich komme ___ Deutschland.",
                          options: ["aus", "von", "nach"], answer: "aus",
                          explanation: "Country origin: aus + country name" },
                        { id: "d25-q2", type: "text", question: "Translate: 'I'm going by bus.' (use mit)",
                          answer: "Ich fahre mit dem Bus.", explanation: "mit + dative: dem Bus" },
                        { id: "d25-q3", type: "text", question: "Complete: 'Sie wohnt ___ ihren Eltern.' (with)",
                          answer: "bei", explanation: "Living with someone: bei + dative" },
                        { id: "d25-q4", type: "choice", question: "Direction to a city without article uses which preposition?",
                          options: ["zu", "nach", "bei"], answer: "nach",
                          explanation: "nach + cities/countries without article" },
                        { id: "d25-q5", type: "text", question: "Translate: 'I've been learning German for two years.' (use seit)",
                          answer: "Ich lerne seit zwei Jahren Deutsch.", explanation: "seit + dative for duration" },
                        { id: "d25-q6", type: "text", question: "Complete: 'Ich gehe ___ Arzt.' (to the doctor)",
                          answer: "zum", explanation: "zu + dem = zum (to the doctor)" },
                        { id: "d25-q7", type: "choice", question: "Complete: 'Das Geschenk ist ___ meiner Mutter.' (from)",
                          options: ["von", "aus", "nach"], answer: "von",
                          explanation: "from (a person): von + dative" },
                        { id: "d25-q8", type: "text", question: "What is the contraction of 'zu + der'?",
                          answer: "zur", explanation: "zu + der = zur (feminine)" },
                        { id: "d25-q9", type: "text", question: "Translate: 'after eating' (use nach)",
                          answer: "nach dem Essen", explanation: "nach + dative: dem Essen" },
                        { id: "d25-q10", type: "choice", question: "Which preposition: 'This bag is made of leather.'",
                          options: ["mit", "aus", "von"], answer: "aus",
                          explanation: "Material: aus + dative (aus Leder)" },
                        { id: "d25-q11", type: "text", question: "Complete: 'Ich bin ___ Kino.' (at the cinema - location)",
                          answer: "im", explanation: "in + dem = im (Wo? → dative)" },
                        { id: "d25-q12", type: "text", question: "Complete: 'Ich gehe ___ Kino.' (to the cinema - direction)",
                          answer: "ins", explanation: "in + das = ins (Wohin? → accusative)" },
                        { id: "d25-q13", type: "choice", question: "Das Buch liegt ___ Tisch. (on the table - location)",
                          options: ["auf dem", "auf den", "auf das"], answer: "auf dem",
                          explanation: "liegen + auf → Wo? → dative: auf dem" },
                        { id: "d25-q14", type: "choice", question: "Ich lege das Buch ___ Tisch. (onto the table - direction)",
                          options: ["auf dem", "auf den", "auf der"], answer: "auf den",
                          explanation: "legen + auf → Wohin? → accusative: auf den" },
                        { id: "d25-q15", type: "text", question: "What question word asks 'Where?' (location)?",
                          answer: "Wo?", explanation: "Wo? = Where? (dative with two-way prepositions)" },
                        { id: "d25-q16", type: "text", question: "What question word asks 'Where to?' (direction)?",
                          answer: "Wohin?", explanation: "Wohin? = Where to? (accusative with two-way prepositions)" },
                        { id: "d25-q17", type: "text", question: "Complete: 'Das Bild hängt ___ Wand.' (on the wall - location)",
                          answer: "an der", explanation: "hängen (position) → Wo? → dative: an der" },
                        { id: "d25-q18", type: "text", question: "Complete: 'Ich hänge das Bild ___ Wand.' (onto the wall)",
                          answer: "an die", explanation: "hängen (action) → Wohin? → accusative: an die" },
                        { id: "d25-q19", type: "choice", question: "Which verb indicates LOCATION (dative)?",
                          options: ["legen (to lay)", "stellen (to place)", "liegen (to lie)"], answer: "liegen (to lie)",
                          explanation: "Position verbs (liegen, stehen, sitzen) → dative" },
                        { id: "d25-q20", type: "choice", question: "Which verb indicates DIRECTION (accusative)?",
                          options: ["stehen (to stand)", "sitzen (to sit)", "setzen (to set down)"], answer: "setzen (to set down)",
                          explanation: "Action verbs (setzen, legen, stellen) → accusative" },
                        { id: "d25-q21", type: "text", question: "Translate: 'She lives in the city.' (use wohnen + in)",
                          answer: "Sie wohnt in der Stadt.", explanation: "wohnen → location → Wo? → dative: in der" },
                        { id: "d25-q22", type: "text", question: "Translate: 'We're driving to the city.' (use fahren + in)",
                          answer: "Wir fahren in die Stadt.", explanation: "fahren → direction → Wohin? → accusative: in die" },
                        { id: "d25-q23", type: "text", question: "Complete: 'Er steht ___ Tür.' (in front of the door - location)",
                          answer: "vor der", explanation: "stehen → Wo? → dative: vor der" },
                        { id: "d25-q24", type: "choice", question: "Complete: 'Ich stelle das Auto ___ Haus.' (in front of the house)",
                          options: ["vor dem", "vor das", "vor der"], answer: "vor das",
                          explanation: "stellen → Wohin? → accusative: vor das" },
                        { id: "d25-q25", type: "text", question: "Name all 7 dative-only prepositions.",
                          answer: "aus, bei, mit, nach, seit, von, zu", explanation: "These ALWAYS take dative" },
                        { id: "d25-q26", type: "text", question: "Complete: 'Der Stuhl steht ___ Tisch und Fenster.' (between)",
                          answer: "zwischen dem Tisch und dem Fenster", explanation: "zwischen → Wo? → dative" },
                        { id: "d25-q27", type: "text", question: "Translate: 'The cat sits under the table.' (use sitzen)",
                          answer: "Die Katze sitzt unter dem Tisch.", explanation: "sitzen → Wo? → dative: unter dem" },
                        { id: "d25-q28", type: "text", question: "Translate: 'I'm coming from work.' (use von)",
                          answer: "Ich komme von der Arbeit.", explanation: "von + dative: von der Arbeit" },
                        { id: "d25-q29", type: "choice", question: "Memory aid Wo? vs Wohin? - Wo takes which case?",
                          options: ["Nominative", "Accusative", "Dative"], answer: "Dative",
                          explanation: "Wo? (where, location) → Dative" },
                        { id: "d25-q30", type: "text", question: "Create a sentence: Use 'in' with dative (location) and then with accusative (direction).",
                          answer: "Ich bin im Park. Ich gehe in den Park.",
                          explanation: "Example showing Wo? (im Park - dative) vs Wohin? (in den Park - accusative)" }
                    ]
                }
            },
            {
                day: 26,
                title: "Perfect Tense 1: Introduction with 'haben'",
                focus: "Forming the past tense with 'haben' and regular verbs",
                activities: ["Learn ge-...-t pattern", "Practice with 15 common regular verbs"],
                homework: ["Write 20 sentences about what you did yesterday"],
                details: {
                    sections: [
                        {
                            title: "1. Introduction to the Perfect Tense (Das Perfekt)",
                            content: "The Perfect Tense is the most common way to talk about the past in spoken German. It's formed with an auxiliary (helping) verb, usually 'haben', and a past participle.\n\n**Structure:** [Subject] + [haben/sein in present tense] + ... + [Past Participle at the end].",
                            examples: [
                                { german: "Ich habe gearbeitet.", english: "I have worked / I worked." },
                                { german: "Er hat Fußball gespielt.", english: "He has played / He played football." }
                            ]
                        },
                        {
                            title: "2. Regular Verbs (ge-...-t pattern)",
                            content: "Regular (or weak) verbs form their past participle with the prefix **ge-** and the suffix **-t**.\n\n**Formula:** ge + verb stem + t\n\n* machen -> ge-mach-t -> **gemacht**\n* lernen -> ge-lern-t -> **gelernt**\n* kaufen -> ge-kauf-t -> **gekauft**",
                            examples: [
                                { german: "Gestern habe ich meine Hausaufgaben gemacht.", english: "Yesterday I did my homework." },
                                { german: "Wir haben Deutsch gelernt.", english: "We learned German." },
                                { german: "Sie hat ein neues Auto gekauft.", english: "She bought a new car." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d26-q1",
                            type: "text",
                            question: "What is the past participle of 'spielen'?",
                            answer: "gespielt",
                            explanation: "Regular verb: ge + spiel + t."
                        },
                        {
                            id: "d26-q2",
                            type: "text",
                            question: "Translate: 'I cooked.'",
                            answer: "Ich habe gekocht.",
                            explanation: "kochen -> gekocht. Use with haben."
                        },
                        {
                            id: "d26-q3",
                            type: "text",
                            question: "Put in perfect tense: 'Du hörst Musik.'",
                            answer: "Du hast Musik gehört.",
                            explanation: "hören -> gehört. du hast."
                        },
                        {
                            id: "d26-q4",
                            type: "text",
                            question: "What is the past participle of 'sagen'?",
                            answer: "gesagt",
                            explanation: "Regular verb: ge + sag + t."
                        },
                        {
                            id: "d26-q5",
                            type: "text",
                            question: "Translate: 'We worked.'",
                            answer: "Wir haben gearbeitet.",
                            explanation: "arbeiten -> gearbeitet. Special rule for -t stem."
                        },
                        {
                            id: "d26-q6",
                            type: "choice",
                            question: "Auxiliary for 'machen' in Perfekt?",
                            options: ["sein", "haben"],
                            answer: "haben",
                            explanation: "Most verbs use haben."
                        },
                        {
                            id: "d26-q7",
                            type: "text",
                            question: "Form Perfekt: 'Ich spiele Fußball.'",
                            answer: "Ich habe Fußball gespielt.",
                            explanation: "ge-spiel-t pattern."
                        },
                        {
                            id: "d26-q8",
                            type: "choice",
                            question: "Where does the participle go?",
                            options: ["Position 2", "At the end"],
                            answer: "At the end",
                            explanation: "Participle goes to the end."
                        },
                        {
                            id: "d26-q9",
                            type: "text",
                            question: "Form Perfekt: 'Wir lernen Deutsch.'",
                            answer: "Wir haben Deutsch gelernt.",
                            explanation: "ge-lern-t pattern."
                        },
                        {
                            id: "d26-q10",
                            type: "text",
                            question: "Perfekt: 'Er arbeitet heute nicht.'",
                            answer: "Er hat heute nicht gearbeitet.",
                            explanation: "Negation before participle."
                        },
                        {
                            id: "d26-q11",
                            type: "choice",
                            question: "Choose correct Perfekt: 'Sie (pl.) sagen etwas.'",
                            options: ["Sie haben etwas gesagt.", "Sie sind etwas gesagt."],
                            answer: "Sie haben etwas gesagt.",
                            explanation: "haben + gesagt."
                        },
                        {
                            id: "d26-q12",
                            type: "text",
                            question: "Perfekt: 'Ich kaufe Brot.'",
                            answer: "Ich habe Brot gekauft.",
                            explanation: "ge-kauf-t."
                        },
                        {
                            id: "d26-q13",
                            type: "choice",
                            question: "Perfekt of 'fragen' (ich)?",
                            options: ["Ich habe gefragt.", "Ich bin gefragt."],
                            answer: "Ich habe gefragt.",
                            explanation: "fragen → gefragt."
                        },
                        {
                            id: "d26-q14",
                            type: "text",
                            question: "Perfekt: 'Ihr hört die Musik.'",
                            answer: "Ihr habt die Musik gehört.",
                            explanation: "haben + ge-hört."
                        },
                        {
                            id: "d26-q15",
                            type: "text",
                            question: "Perfekt: 'Sie (sg.) spielt Tennis.'",
                            answer: "Sie hat Tennis gespielt.",
                            explanation: "Regular verb + haben."
                        },
                        {
                            id: "d26-q16",
                            type: "choice",
                            question: "Pick correct: Perfekt word order",
                            options: ["Ich habe gespielt gestern.", "Ich habe gestern gespielt."],
                            answer: "Ich habe gestern gespielt.",
                            explanation: "Time before participle."
                        },
                        {
                            id: "d26-q17",
                            type: "text",
                            question: "Translate to Perfekt: 'We cooked yesterday.'",
                            answer: "Wir haben gestern gekocht.",
                            explanation: "Regular verb pattern."
                        },
                        {
                            id: "d26-q18",
                            type: "text",
                            question: "Perfekt: 'Du lernst viel.'",
                            answer: "Du hast viel gelernt.",
                            explanation: "haben + gelernt."
                        },
                        {
                            id: "d26-q19",
                            type: "choice",
                            question: "Perfekt of 'machen' (wir)?",
                            options: ["Wir sind gemacht.", "Wir haben gemacht."],
                            answer: "Wir haben gemacht.",
                            explanation: "haben for regular verbs."
                        },
                        {
                            id: "d26-q20",
                            type: "text",
                            question: "Perfekt: 'Ich höre Radio.'",
                            answer: "Ich habe Radio gehört.",
                            explanation: "ge-hört pattern."
                        }
                    ]
                }
            },
            {
                day: 27,
                title: "Perfect Tense 2: Irregular Verbs with 'haben'",
                focus: "Forming the past tense with strong verbs",
                activities: ["Learn ge-...-en pattern", "Memorize top 25 irregular verbs"],
                homework: ["Practice sentences with irregular verbs"],
                details: {
                    sections: [
                        {
                            title: "1. Irregular (Strong) Verb Participles",
                            content: "Irregular verbs (strong verbs) often change their stem vowel in the past participle and usually end in **-en**.\n\n**Formula:** ge + changed stem + en\n\n* sehen -> ge-seh-en -> **gesehen**\n* trinken -> ge-trunk-en -> **getrunken**\n* schreiben -> ge-schrieb-en -> **geschrieben**\n\nThere is no simple rule for the vowel change; these must be memorized.",
                            examples: [
                                { german: "Ich habe einen Film gesehen.", english: "I saw a film." },
                                { german: "Er hat einen Brief geschrieben.", english: "He wrote a letter." },
                                { german: "Wir haben Wasser getrunken.", english: "We drank water." }
                            ]
                        },
                        {
                            title: "2. Top Irregular Verbs with 'haben'",
                            content: "Memorize these common irregular verbs that use 'haben':\n\n* **bleiben -> geblieben** (to stay) *Note: This is an exception, uses 'sein'*\n* **essen -> gegessen** (to eat)\n* **finden -> gefunden** (to find)\n* **geben -> gegeben** (to give)\n* **helfen -> geholfen** (to help)\n* **lesen -> gelesen** (to read)\n* **nehmen -> genommen** (to take)\n* **schlafen -> geschlafen** (to sleep)\n* **schreiben -> geschrieben** (to write)\n* **sehen -> gesehen** (to see)\n* **sprechen -> gesprochen** (to speak)\n* **tragen -> getragen** (to wear/carry)\n* **trinken -> getrunken** (to drink)\n* **vergessen -> vergessen** (to forget - inseparable)\n* **verstehen -> verstanden** (to understand - inseparable)",
                            examples: [
                                { german: "Hast du das Buch gelesen?", english: "Have you read the book?" },
                                { german: "Sie hat mir geholfen.", english: "She helped me." },
                                { german: "Ich habe seinen Namen vergessen.", english: "I forgot his name." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d27-q1",
                            type: "text",
                            question: "What is the past participle of 'sprechen'?",
                            answer: "gesprochen",
                            explanation: "sprechen -> gesprochen."
                        },
                        {
                            id: "d27-q2",
                            type: "text",
                            question: "Translate: 'I ate an apple.'",
                            answer: "Ich habe einen Apfel gegessen.",
                            explanation: "essen -> gegessen. Use with haben."
                        },
                        {
                            id: "d27-q3",
                            type: "text",
                            question: "Put in perfect tense: 'Er liest die Zeitung.'",
                            answer: "Er hat die Zeitung gelesen.",
                            explanation: "lesen -> gelesen. er hat."
                        },
                        {
                            id: "d27-q4",
                            type: "text",
                            question: "What is the past participle of 'geben'?",
                            answer: "gegeben",
                            explanation: "geben -> gegeben."
                        },
                        {
                            id: "d27-q5",
                            type: "text",
                            question: "Translate: 'She slept well.'",
                            answer: "Sie hat gut geschlafen.",
                            explanation: "schlafen -> geschlafen."
                        },
                        {
                            id: "d27-q6",
                            type: "choice",
                            question: "Perfekt of 'sehen' (wir)?",
                            options: ["Wir haben gesehen.", "Wir sind gesehen."],
                            answer: "Wir haben gesehen.",
                            explanation: "sehen → gesehen."
                        },
                        {
                            id: "d27-q7",
                            type: "text",
                            question: "Perfekt: 'Ich schreibe einen Brief.'",
                            answer: "Ich habe einen Brief geschrieben.",
                            explanation: "schreiben → geschrieben."
                        },
                        {
                            id: "d27-q8",
                            type: "choice",
                            question: "Perfekt of 'essen' (sie - sg.)?",
                            options: ["Sie hat gegessen.", "Sie ist gegessen."],
                            answer: "Sie hat gegessen.",
                            explanation: "essen → gegessen."
                        },
                        {
                            id: "d27-q9",
                            type: "text",
                            question: "Perfekt: 'Du trinkst Wasser.'",
                            answer: "Du hast Wasser getrunken.",
                            explanation: "trinken → getrunken."
                        },
                        {
                            id: "d27-q10",
                            type: "text",
                            question: "Perfekt: 'Ich nehme den Bus.'",
                            answer: "Ich habe den Bus genommen.",
                            explanation: "nehmen → genommen."
                        },
                        {
                            id: "d27-q11",
                            type: "choice",
                            question: "Perfekt of 'geben' (er)?",
                            options: ["Er hat gegeben.", "Er ist gegeben."],
                            answer: "Er hat gegeben.",
                            explanation: "geben → gegeben."
                        },
                        {
                            id: "d27-q12",
                            type: "text",
                            question: "Perfekt: 'Sie (pl.) finden das Haus.'",
                            answer: "Sie haben das Haus gefunden.",
                            explanation: "finden → gefunden."
                        },
                        {
                            id: "d27-q13",
                            type: "text",
                            question: "Perfekt: 'Wir beginnen um 8 Uhr.'",
                            answer: "Wir haben um 8 Uhr begonnen.",
                            explanation: "beginnen → begonnen."
                        },
                        {
                            id: "d27-q14",
                            type: "choice",
                            question: "Perfekt of 'helfen' (ich)?",
                            options: ["Ich habe geholfen.", "Ich bin geholfen."],
                            answer: "Ich habe geholfen.",
                            explanation: "helfen → geholfen."
                        },
                        {
                            id: "d27-q15",
                            type: "text",
                            question: "Perfekt: 'Ihr versteht die Aufgabe.'",
                            answer: "Ihr habt die Aufgabe verstanden.",
                            explanation: "verstehen → verstanden."
                        },
                        {
                            id: "d27-q16",
                            type: "text",
                            question: "Perfekt: 'Er schreibt E-Mails.'",
                            answer: "Er hat E-Mails geschrieben.",
                            explanation: "schreiben → geschrieben."
                        },
                        {
                            id: "d27-q17",
                            type: "choice",
                            question: "Choose correct Perfekt: 'Ich (sprechen) mit ihm.'",
                            options: ["Ich habe mit ihm gesprochen.", "Ich bin mit ihm gesprochen."],
                            answer: "Ich habe mit ihm gesprochen.",
                            explanation: "sprechen → gesprochen."
                        },
                        {
                            id: "d27-q18",
                            type: "text",
                            question: "Perfekt: 'Sie (sg.) liest ein Buch.'",
                            answer: "Sie hat ein Buch gelesen.",
                            explanation: "lesen → gelesen."
                        },
                        {
                            id: "d27-q19",
                            type: "text",
                            question: "Perfekt: 'Wir treffen Freunde.'",
                            answer: "Wir haben Freunde getroffen.",
                            explanation: "treffen → getroffen."
                        },
                        {
                            id: "d27-q20",
                            type: "text",
                            question: "Perfekt: 'Ich vergesse den Namen.'",
                            answer: "Ich habe den Namen vergessen.",
                            explanation: "vergessen → vergessen (inseparable)."
                        }
                    ]
                }
            },
            {
                day: 28,
                title: "Perfect Tense 3: Verbs with 'sein'",
                focus: "Using 'sein' for movement and change of state",
                activities: ["Learn verbs that take 'sein'", "Practice distinguishing haben/sein"],
                homework: ["Write about a journey using 'sein' verbs"],
                details: {
                    sections: [
                        {
                            title: "1. When to Use 'sein' in the Perfect Tense",
                            content: "A smaller group of verbs use **sein** as the auxiliary verb. These verbs typically express:\n\n1.  **Movement from A to B:** A change of location (e.g., walking, driving, flying).\n2.  **Change of State:** A change in condition or status (e.g., waking up, dying).\n3.  **Specific Verbs:** `sein` (to be), `bleiben` (to stay), and `werden` (to become).",
                            examples: [
                                { german: "Ich bin ins Kino gegangen.", english: "I went to the cinema. (Movement)" },
                                { german: "Er ist schnell gewachsen.", english: "He grew quickly. (Change of State)" },
                                { german: "Wir sind zu Hause geblieben.", english: "We stayed at home. (Special Verb)" }
                            ]
                        },
                        {
                            title: "2. Common Verbs with 'sein'",
                            content: "Memorize this core list of verbs that form the perfect tense with 'sein':\n\n* **gehen -> gegangen** (to go)\n* **fahren -> gefahren** (to drive/travel)\n* **fliegen -> geflogen** (to fly)\n* **kommen -> gekommen** (to come)\n* **laufen -> gelaufen** (to run/walk)\n* **reisen -> gereist** (to travel)\n* **schwimmen -> geschwommen** (to swim)\n* **aufstehen -> aufgestanden** (to get up)\n* **wachsen -> gewachsen** (to grow)\n* **sterben -> gestorben** (to die)\n* **sein -> gewesen** (to be)\n* **bleiben -> geblieben** (to stay)\n* **werden -> geworden** (to become)",
                            examples: [
                                { german: "Gestern bin ich nach Hamburg gefahren.", english: "Yesterday I drove to Hamburg." },
                                { german: "Sie ist um 7 Uhr aufgestanden.", english: "She got up at 7 o'clock." },
                                { german: "Wir sind in Italien gewesen.", english: "We have been to Italy." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d28-q1",
                            type: "choice",
                            question: "Complete: 'Ich ___ nach Hause gegangen.'",
                            options: ["habe", "bin", "werde"],
                            answer: "bin",
                            explanation: "'gehen' is a verb of movement and takes 'sein'."
                        },
                        {
                            id: "d28-q2",
                            type: "text",
                            question: "What is the past participle of 'fliegen'?",
                            answer: "geflogen",
                            explanation: "fliegen -> geflogen."
                        },
                        {
                            id: "d28-q3",
                            type: "text",
                            question: "Translate: 'He came to Germany.'",
                            answer: "Er ist nach Deutschland gekommen.",
                            explanation: "'kommen' is a verb of movement and takes 'sein'."
                        },
                        {
                            id: "d28-q4",
                            type: "choice",
                            question: "Complete: 'Wir ___ im Hotel geblieben.'",
                            options: ["sind", "haben", "werden"],
                            answer: "sind",
                            explanation: "'bleiben' is a special verb that takes 'sein'."
                        },
                        {
                            id: "d28-q5",
                            type: "text",
                            question: "Translate: 'You (du) swam in the sea.'",
                            answer: "Du bist im Meer geschwommen.",
                            explanation: "'schwimmen' implies movement and takes 'sein'."
                        },
                        {
                            id: "d28-q6",
                            type: "text",
                            question: "Perfekt: 'Ich gehe nach Hause.'",
                            answer: "Ich bin nach Hause gegangen.",
                            explanation: "Movement → sein."
                        },
                        {
                            id: "d28-q7",
                            type: "choice",
                            question: "Perfekt of 'kommen' (wir)?",
                            options: ["Wir sind gekommen.", "Wir haben gekommen."],
                            answer: "Wir sind gekommen.",
                            explanation: "kommen → sein."
                        },
                        {
                            id: "d28-q8",
                            type: "text",
                            question: "Perfekt: 'Er fährt nach Berlin.'",
                            answer: "Er ist nach Berlin gefahren.",
                            explanation: "fahren → sein."
                        },
                        {
                            id: "d28-q9",
                            type: "choice",
                            question: "Perfekt of 'bleiben' (sie - sg.)?",
                            options: ["Sie ist geblieben.", "Sie hat geblieben."],
                            answer: "Sie ist geblieben.",
                            explanation: "bleiben → sein."
                        },
                        {
                            id: "d28-q10",
                            type: "text",
                            question: "Perfekt: 'Wir laufen im Park.'",
                            answer: "Wir sind im Park gelaufen.",
                            explanation: "laufen → sein (movement)."
                        },
                        {
                            id: "d28-q11",
                            type: "text",
                            question: "Perfekt: 'Er steht früh auf.'",
                            answer: "Er ist früh aufgestanden.",
                            explanation: "aufstehen → sein."
                        },
                        {
                            id: "d28-q12",
                            type: "choice",
                            question: "Perfekt of 'werden' (sie - pl.)?",
                            options: ["Sie sind geworden.", "Sie haben geworden."],
                            answer: "Sie sind geworden.",
                            explanation: "werden → sein."
                        },
                        {
                            id: "d28-q13",
                            type: "text",
                            question: "Perfekt: 'Ich reise nach Köln.'",
                            answer: "Ich bin nach Köln gereist.",
                            explanation: "reisen → sein."
                        },
                        {
                            id: "d28-q14",
                            type: "text",
                            question: "Perfekt: 'Ihr kommt spät.'",
                            answer: "Ihr seid spät gekommen.",
                            explanation: "kommen → sein."
                        },
                        {
                            id: "d28-q15",
                            type: "choice",
                            question: "Pick correct: 'schwimmen' Perfekt (er)",
                            options: ["Er ist geschwommen.", "Er hat geschwommen."],
                            answer: "Er ist geschwommen.",
                            explanation: "schwimmen → sein (movement)."
                        },
                        {
                            id: "d28-q16",
                            type: "text",
                            question: "Perfekt: 'Sie (sg.) fliegt nach München.'",
                            answer: "Sie ist nach München geflogen.",
                            explanation: "fliegen → sein (movement)."
                        },
                        {
                            id: "d28-q17",
                            type: "text",
                            question: "Perfekt: 'Ich bin zu Hause.'",
                            answer: "Ich bin zu Hause gewesen.",
                            explanation: "sein → sein + gewesen."
                        },
                        {
                            id: "d28-q18",
                            type: "choice",
                            question: "Perfekt of 'laufen' (du)?",
                            options: ["Du bist gelaufen.", "Du hast gelaufen."],
                            answer: "Du bist gelaufen.",
                            explanation: "laufen → sein."
                        },
                        {
                            id: "d28-q19",
                            type: "text",
                            question: "Perfekt: 'Wir fahren mit dem Zug.'",
                            answer: "Wir sind mit dem Zug gefahren.",
                            explanation: "fahren → sein."
                        },
                        {
                            id: "d28-q20",
                            type: "text",
                            question: "Perfekt: 'Die Kinder wachsen schnell.'",
                            answer: "Die Kinder sind schnell gewachsen.",
                            explanation: "wachsen → sein (change of state)."
                        }
                    ]
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
                    homework: [
                        { id: "d29-q1", type: "text", question: "Translate: 'I was at home.' (Präteritum of sein)", answer: "Ich war zu Hause.", explanation: "Sein generally uses Präteritum 'war'." },
                        { id: "d29-q2", type: "choice", question: "Perfekt: 'Ich (gehen) ins Kino.'", options: ["Ich bin ins Kino gegangen.", "Ich habe ins Kino gegangen."], answer: "Ich bin ins Kino gegangen.", explanation: "gehen → sein." },
                        { id: "d29-q3", type: "choice", question: "Perfekt: 'Wir (kaufen) Brot.'", options: ["Wir haben Brot gekauft.", "Wir sind Brot gekauft."], answer: "Wir haben Brot gekauft.", explanation: "kaufen → haben." },
                        { id: "d29-q4", type: "choice", question: "Perfekt: 'Er (kommen) früh.'", options: ["Er ist früh gekommen.", "Er hat früh gekommen."], answer: "Er ist früh gekommen.", explanation: "kommen → sein." },
                        { id: "d29-q5", type: "text", question: "Perfekt: 'Sie (pl.) lernen viel.'", answer: "Sie haben viel gelernt.", explanation: "lernen → haben." },
                        { id: "d29-q6", type: "text", question: "Perfekt: 'Ich (fahren) nach München.'", answer: "Ich bin nach München gefahren.", explanation: "fahren → sein." },
                        { id: "d29-q7", type: "choice", question: "Pick auxiliary: 'bleiben'", options: ["haben", "sein"], answer: "sein", explanation: "bleiben uses sein." },
                        { id: "d29-q8", type: "text", question: "Perfekt: 'Wir (sehen) den Film.'", answer: "Wir haben den Film gesehen.", explanation: "sehen → haben." },
                        { id: "d29-q9", type: "choice", question: "Perfekt: 'Sie (sg.) (laufen) schnell.'", options: ["Sie ist schnell gelaufen.", "Sie hat schnell gelaufen."], answer: "Sie ist schnell gelaufen.", explanation: "laufen → sein." },
                        { id: "d29-q10", type: "text", question: "Perfekt: 'Du (schreiben) eine E-Mail.'", answer: "Du hast eine E-Mail geschrieben.", explanation: "schreiben → haben." },
                        { id: "d29-q11", type: "choice", question: "Perfekt: 'Ich (aufstehen) um 7 Uhr.'", options: ["Ich bin um 7 Uhr aufgestanden.", "Ich habe um 7 Uhr aufgestanden."], answer: "Ich bin um 7 Uhr aufgestanden.", explanation: "aufstehen → sein." },
                        { id: "d29-q12", type: "text", question: "Perfekt: 'Er (arbeiten) gestern.'", answer: "Er hat gestern gearbeitet.", explanation: "arbeiten → haben." },
                        { id: "d29-q13", type: "text", question: "Perfekt: 'Wir (kommen) spät nach Hause.'", answer: "Wir sind spät nach Hause gekommen.", explanation: "kommen → sein." },
                        { id: "d29-q14", type: "choice", question: "Choose correct: 'reisen'", options: ["hat gereist", "ist gereist"], answer: "ist gereist", explanation: "reisen → sein." },
                        { id: "d29-q15", type: "text", question: "Perfekt: 'Ich (nehmen) den Zug.'", answer: "Ich habe den Zug genommen.", explanation: "nehmen → haben." },
                        { id: "d29-q16", type: "text", question: "Perfekt: 'Sie (pl.) (gehen) ins Büro.'", answer: "Sie sind ins Büro gegangen.", explanation: "gehen → sein." },
                        { id: "d29-q17", type: "choice", question: "Perfekt: 'Wir (essen) Pizza.'", options: ["Wir haben Pizza gegessen.", "Wir sind Pizza gegessen."], answer: "Wir haben Pizza gegessen.", explanation: "essen → haben." },
                        { id: "d29-q18", type: "text", question: "Perfekt: 'Er (werden) Arzt.'", answer: "Er ist Arzt geworden.", explanation: "werden → sein." },
                        { id: "d29-q19", type: "text", question: "Perfekt: 'Ich (trinken) Kaffee.'", answer: "Ich habe Kaffee getrunken.", explanation: "trinken → haben." },
                        { id: "d29-q20", type: "choice", question: "Perfekt: 'Sie (fliegen) nach Berlin.'", options: ["Sie ist nach Berlin geflogen.", "Sie hat nach Berlin geflogen."], answer: "Sie ist nach Berlin geflogen.", explanation: "fliegen → sein." }
                    ]
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
                    homework: [
                        { id: "d30-q1", type: "text", question: "Dative of 'die Kinder'?", answer: "den Kindern", explanation: "Plural Dative adds -n." },
                        { id: "d30-q2", type: "choice", question: "Complete: 'Ich danke ___ (der Lehrer).'", options: ["dem Lehrer", "den Lehrer"], answer: "dem Lehrer", explanation: "danken takes dative." },
                        { id: "d30-q3", type: "text", question: "Rewrite with inversion: 'Ich gehe heute ins Kino.'", answer: "Heute gehe ich ins Kino.", explanation: "Time expression + inversion." },
                        { id: "d30-q4", type: "text", question: "Perfekt: 'Sie (sg.) geht einkaufen.'", answer: "Sie ist einkaufen gegangen.", explanation: "gehen → sein." },
                        { id: "d30-q5", type: "choice", question: "Which verb takes dative?", options: ["helfen", "sehen"], answer: "helfen", explanation: "helfen requires dative object." },
                        { id: "d30-q6", type: "text", question: "Imperative (Sie): 'nehmen Sie die erste Straße'", answer: "Nehmen Sie die erste Straße!", explanation: "Formal imperative." },
                        { id: "d30-q7", type: "text", question: "Perfekt: 'Wir trinken Bier.'", answer: "Wir haben Bier getrunken.", explanation: "trinken → haben + getrunken." },
                        { id: "d30-q8", type: "choice", question: "Complete: 'Das Buch gehört ___ (ich).'", options: ["mir", "mich"], answer: "mir", explanation: "gehören takes dative." },
                        { id: "d30-q9", type: "text", question: "Translate: 'Turn left!' (formal)", answer: "Biegen Sie links ab!", explanation: "Formal imperative + direction." },
                        { id: "d30-q10", type: "text", question: "Perfekt: 'Er kommt zu spät.'", answer: "Er ist zu spät gekommen.", explanation: "kommen → sein." },
                        { id: "d30-q11", type: "choice", question: "Which preposition is dative-only?", options: ["für", "mit"], answer: "mit", explanation: "mit always takes dative." },
                        { id: "d30-q12", type: "text", question: "Complete inversion: '___ lernen wir Deutsch.' (On Monday)", answer: "Am Montag", explanation: "Time expression for inversion." },
                        { id: "d30-q13", type: "text", question: "Perfekt: 'Ich lese ein Buch.'", answer: "Ich habe ein Buch gelesen.", explanation: "lesen → haben + gelesen." },
                        { id: "d30-q14", type: "choice", question: "Dative pronoun for 'du'?", options: ["dir", "dich"], answer: "dir", explanation: "dir is dative, dich is accusative." },
                        { id: "d30-q15", type: "text", question: "Imperative (du): 'sein Sie nett'", answer: "Sei nett!", explanation: "du-form imperative of sein." },
                        { id: "d30-q16", type: "text", question: "Perfekt: 'Sie (pl.) fahren nach Hause.'", answer: "Sie sind nach Hause gefahren.", explanation: "fahren → sein." },
                        { id: "d30-q17", type: "choice", question: "Complete: 'Ich wohne ___ meinen Eltern.' (with)", options: ["bei", "für"], answer: "bei", explanation: "bei = with/at (dative)." },
                        { id: "d30-q18", type: "text", question: "Translate with inversion: 'In the evening I watch TV.'", answer: "Am Abend sehe ich fern.", explanation: "Time + inversion + separable verb." },
                        { id: "d30-q19", type: "text", question: "Perfekt: 'Du hilfst mir.'", answer: "Du hast mir geholfen.", explanation: "helfen → haben + geholfen." },
                        { id: "d30-q20", type: "choice", question: "Complete Phase 3 review: Which tense for completed actions?", options: ["Perfekt", "Präsens"], answer: "Perfekt", explanation: "Perfect tense for completed past actions." }
                    ]
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
                title: "Adjective Declension 1: Definite Articles",
                focus: "Adjective endings with der, die, das",
                activities: ["Learn endings for Nominative, Accusative, Dative", "Practice with all cases"],
                homework: ["Describe items with definite articles"],
                details: {
                    sections: [
                        {
                            title: "1. Adjective Declension with Definite Articles",
                            content: "When an adjective comes *before* a noun, it must be declined. The ending changes based on the noun's gender, case, and the article used. With definite articles (der, die, das), there are two main endings: **-e** or **-en**.",
                            examples: [
                                { german: "Der rote Apfel schmeckt gut.", english: "The red apple tastes good." },
                                { german: "Ich sehe den roten Apfel.", english: "I see the red apple." },
                                { german: "Ich gebe dem roten Apfel eine Note.", english: "I give the red apple a grade." }
                            ]
                        },
                        {
                            title: "2. Endings for Nominative & Accusative",
                            content: "In Nominative, most adjectives take **-e**. In Accusative, only the masculine form changes to **-en**. This is known as the 'plural and dativ always -en' rule, with accusative masculine as the main exception.",
                            examples: [
                                { german: "Nominativ: Der alte Mann, Die junge Frau, Das kleine Kind.", english: "Nominative: The old man, the young woman, the small child." },
                                { german: "Akkusativ: Ich sehe den alten Mann, die junge Frau, das kleine Kind.", english: "Accusative: I see the old man, the young woman, the small child." }
                            ]
                        },
                        {
                            title: "3. Endings for Dative and Plural",
                            content: "This is the easy part: In the Dative case and in all Plural forms (in any case), the adjective ending is **always -en**.",
                            examples: [
                                { german: "Dativ: Ich helfe dem alten Mann, der jungen Frau, dem kleinen Kind.", english: "Dative: I help the old man, the young woman, the small child." },
                                { german: "Plural: Die alten Männer, die jungen Frauen, die kleinen Kinder.", english: "Plural: The old men, the young women, the small children." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d35-q1",
                            type: "text",
                            question: "Complete: 'Der schnell__ Zug'",
                            answer: "schnelle",
                            explanation: "Nominative, masculine, definite article -> -e."
                        },
                        {
                            id: "d35-q2",
                            type: "text",
                            question: "Complete: 'Ich sehe den schnell__ Zug.'",
                            answer: "schnellen",
                            explanation: "Accusative, masculine, definite article -> -en."
                        },
                        {
                            id: "d35-q3",
                            type: "text",
                            question: "Complete: 'Ich fahre mit dem schnell__ Zug.'",
                            answer: "schnellen",
                            explanation: "Dative case (mit) -> always -en."
                        },
                        {
                            id: "d35-q4",
                            type: "text",
                            question: "Complete: 'Die schön__ Blumen.' (Plural)",
                            answer: "schönen",
                            explanation: "Plural adjectives with definite articles always take -en."
                        },
                        {
                            id: "d35-q5",
                            type: "text",
                            question: "Complete: 'Das neu__ Auto ist teuer.'",
                            answer: "neue",
                            explanation: "Nominative, neuter, definite article -> -e."
                        }
                    ]
                }
            },
            {
                day: 36,
                title: "Adjective Declension 2: Indefinite & Zero Articles",
                focus: "Endings with ein/eine, zero article, and all cases",
                activities: ["Master indefinite article endings", "Practice zero-article nouns", "Learn dative adjective endings"],
                homework: ["Comprehensive adjective declension practice"],
                details: {
                    sections: [
                        {
                            title: "1. Review: Three Types of Adjective Endings",
                            content: "German has three patterns for adjective endings, depending on what comes before the adjective:\n\n**Type 1: Weak Endings (after definite articles)**\n* After: der, die, das, dieser, jeder, welcher\n* Pattern: Mostly **-e** and **-en**\n* Example: der alt**e** Mann, die schön**e** Frau\n\n**Type 2: Strong Endings (after indefinite articles & possessives)**\n* After: ein, eine, mein, dein, sein, kein\n* Pattern: Adjective shows the gender (like the definite article)\n* Example: ein alt**er** Mann, eine schön**e** Frau\n\n**Type 3: Strong Endings (with zero article)**\n* No article before the adjective\n* Pattern: Same as Type 2 - adjective shows gender\n* Example: alt**er** Wein, schön**e** Musik\n\n**Why Different Patterns?**\nGerman needs ONE element to show the gender and case. If the article does it → weak ending. If not → strong ending.\n\n**Key Principle:**\nWhen there's NO clear gender marker before the adjective, the adjective must show it with a **strong ending**.",
                            examples: [
                                { german: "der alte Mann (weak - 'der' shows masculine)", english: "the old man" },
                                { german: "ein alter Mann (strong - 'ein' doesn't show masculine)", english: "an old man" },
                                { german: "alter Wein (strong - no article)", english: "old wine" }
                            ]
                        },
                        {
                            title: "2. Indefinite Article Declension (ein-words)",
                            content: "With indefinite articles (ein, eine, mein, dein, sein, ihr, unser, euer, kein), the adjective takes STRONG endings in some cases because these articles don't always show the gender clearly.\n\n**NOMINATIVE (Subject):**\n* Masculine: ein gut**er** Mann (shows -er like 'der')\n* Feminine: eine gut**e** Frau (shows -e like 'die')\n* Neuter: ein gut**es** Kind (shows -es like 'das')\n* Plural: keine gut**en** Kinder (-en ending)\n\n**ACCUSATIVE (Direct Object):**\n* Masculine: einen gut**en** Mann (weak -en)\n* Feminine: eine gut**e** Frau (strong -e)\n* Neuter: ein gut**es** Kind (strong -es)\n* Plural: keine gut**en** Kinder (-en ending)\n\n**DATIVE (Indirect Object):**\n* Masculine: einem gut**en** Mann (-en)\n* Feminine: einer gut**en** Frau (-en)\n* Neuter: einem gut**en** Kind (-en)\n* Plural: keinen gut**en** Kindern (-en)\n\n**Pattern Recognition:**\n* Nominative masculine: -**er** (strong)\n* Nominative/Accusative neuter: -**es** (strong)\n* Nominative/Accusative feminine: -**e** (strong)\n* Accusative masculine: -**en** (weak)\n* ALL dative: -**en** (weak)\n* ALL plural: -**en** (weak)",
                            examples: [
                                { german: "Das ist ein interessanter Film. (m, nom)", english: "That is an interesting film." },
                                { german: "Ich sehe einen interessanten Film. (m, acc)", english: "I see an interesting film." },
                                { german: "Ich spreche mit einem interessanten Mann. (m, dat)", english: "I speak with an interesting man." },
                                { german: "Sie hat eine neue Tasche. (f, acc)", english: "She has a new bag." },
                                { german: "Er kauft ein teures Auto. (n, acc)", english: "He buys an expensive car." },
                                { german: "Wir helfen keinen kleinen Kindern. (pl, dat)", english: "We don't help small children." }
                            ]
                        },
                        {
                            title: "3. Zero-Article Declension (No Article)",
                            content: "When there's NO article before the adjective (common with plural nouns, materials, abstractions, and professions), the adjective takes the SAME strong endings as with indefinite articles, showing the gender/case clearly.\n\n**When Zero Article is Used:**\n* **Plural nouns:** Gute Freunde sind wichtig.\n* **Materials:** Ich trinke kaltes Wasser.\n* **Abstract nouns:** Schlechtes Wetter nervt.\n* **Professions (predicative):** Er ist guter Arzt.\n* **Food/Drinks:** Ich esse gern frisches Obst.\n\n**NOMINATIVE (Zero Article):**\n* Masculine: gut**er** Wein (shows -er)\n* Feminine: gut**e** Milch (shows -e)\n* Neuter: gut**es** Bier (shows -es)\n* Plural: gut**e** Weine (shows -e)\n\n**ACCUSATIVE (Zero Article):**\n* Masculine: gut**en** Wein (-en)\n* Feminine: gut**e** Milch (-e)\n* Neuter: gut**es** Bier (-es)\n* Plural: gut**e** Weine (-e)\n\n**DATIVE (Zero Article):**\n* Masculine: mit gut**em** Wein (-em)\n* Feminine: mit gut**er** Milch (-er)\n* Neuter: mit gut**em** Bier (-em)\n* Plural: mit gut**en** Weinen (-en)\n\n**Key Pattern:**\nThe endings match the definite article's gender marker:\n* Masculine nom: -**er** (like d**er**)\n* Feminine nom/acc: -**e** (like di**e**)\n* Neuter nom/acc: -**es** (like da**s**)\n* Dative masc/neut: -**em** (like d**em**)\n* Dative fem: -**er** (like d**er**)\n* Plural: -**e** (nom/acc) or -**en** (dat)",
                            examples: [
                                { german: "Ich trinke gern kaltes Wasser. (n, acc)", english: "I like to drink cold water." },
                                { german: "Frisches Obst ist gesund. (n, nom)", english: "Fresh fruit is healthy." },
                                { german: "Sie isst gern roten Apfel. (m, acc)", english: "She likes eating red apple." },
                                { german: "Guter Kaffee kostet viel. (m, nom)", english: "Good coffee costs a lot." },
                                { german: "Mit frischer Milch schmeckt es besser. (f, dat)", english: "It tastes better with fresh milk." },
                                { german: "Kleine Kinder spielen gern. (pl, nom)", english: "Small children like to play." }
                            ]
                        },
                        {
                            title: "4. Complete Adjective Ending Charts",
                            content: "**STRONG ENDINGS (Indefinite & Zero Article):**\n\n|  | Masc | Fem | Neut | Plural |\n|---|---|---|---|---|\n| **Nom** | -er | -e | -es | -e |\n| **Acc** | -en | -e | -es | -e |\n| **Dat** | -em | -er | -em | -en |\n\n**Remember the Pattern:**\n* Nominative masculine: -**er** (unique)\n* Nominative/Accusative neuter: -**es** (same)\n* Nominative/Accusative feminine: -**e** (same)\n* Nominative/Accusative plural: -**e** (same)\n* Accusative masculine: -**en** (unique)\n* Dative singular: -**em** (m/n) / -**er** (f)\n* Dative plural: -**en**\n\n**Common Mistakes to Avoid:**\n* ❌ ein alter Mann → ✅ ein alt**er** Mann (not -e)\n* ❌ eine altes Frau → ✅ eine alt**e** Frau (not -es)\n* ❌ mit guten Wein → ✅ mit gut**em** Wein (not -en)\n* ❌ frische Wasser → ✅ frisch**es** Wasser (not -e)\n\n**Study Tips:**\n1. First identify: definite, indefinite, or zero article?\n2. Determine the case (nominative, accusative, dative)\n3. Check the gender (masculine, feminine, neuter, plural)\n4. Apply the corresponding ending from the chart",
                            examples: [
                                { german: "Das ist ein schöner Tag! (m, nom, indefinite)", english: "That's a beautiful day!" },
                                { german: "Ich habe keinen guten Plan. (m, acc, indefinite)", english: "I don't have a good plan." },
                                { german: "Sie trinkt kalte Milch. (f, acc, zero)", english: "She drinks cold milk." },
                                { german: "Mit gutem Wetter fahren wir. (n, dat, zero)", english: "With good weather we'll drive." }
                            ]
                        }
                    ],
                    homework: [
                        { id: "d36-q1", type: "text", question: "Complete: 'Das ist ein neu__ Auto.' (n, nom)",
                          answer: "neues", explanation: "Nominative neuter indefinite: -es (strong ending)" },
                        { id: "d36-q2", type: "text", question: "Complete: 'Ich habe einen alt__ Computer.' (m, acc)",
                          answer: "alten", explanation: "Accusative masculine indefinite: -en" },
                        { id: "d36-q3", type: "text", question: "Complete: 'Sie trinkt frisch__ Milch.' (f, acc, zero article)",
                          answer: "frische", explanation: "Accusative feminine zero article: -e (strong)" },
                        { id: "d36-q4", type: "text", question: "Complete: 'Gut__ Wein ist teuer.' (m, nom, zero)",
                          answer: "Guter", explanation: "Nominative masculine zero article: -er" },
                        { id: "d36-q5", type: "text", question: "Complete: 'Ich esse eine groß__ Pizza.' (f, acc)",
                          answer: "große", explanation: "Accusative feminine indefinite: -e" },
                        { id: "d36-q6", type: "choice", question: "Complete: 'Er ist ein gut__ Lehrer.' (m, nom)",
                          options: ["guter", "gute", "gutes"], answer: "guter",
                          explanation: "Nominative masculine indefinite: -er" },
                        { id: "d36-q7", type: "text", question: "Complete: 'Wir sehen ein schön__ Haus.' (n, acc)",
                          answer: "schönes", explanation: "Accusative neuter indefinite: -es" },
                        { id: "d36-q8", type: "text", question: "Complete: 'Ich trinke gern kalt__ Wasser.' (n, acc, zero)",
                          answer: "kaltes", explanation: "Accusative neuter zero: -es" },
                        { id: "d36-q9", type: "text", question: "Complete: 'Mit einem neu__ Auto fahre ich.' (n, dat)",
                          answer: "neuen", explanation: "Dative neuter indefinite: -en" },
                        { id: "d36-q10", type: "choice", question: "Complete: 'Ich spreche mit einer nett__ Frau.' (f, dat)",
                          options: ["nette", "netten", "netter"], answer: "netten",
                          explanation: "Dative feminine indefinite: -en" },
                        { id: "d36-q11", type: "text", question: "Complete: 'Klein__ Kinder spielen hier.' (pl, nom, zero)",
                          answer: "Kleine", explanation: "Nominative plural zero: -e" },
                        { id: "d36-q12", type: "text", question: "Complete: 'Das ist eine wichtig__ Frage.' (f, nom)",
                          answer: "wichtige", explanation: "Nominative feminine indefinite: -e" },
                        { id: "d36-q13", type: "text", question: "Complete: 'Ich mag frisch__ Obst.' (n, acc, zero)",
                          answer: "frisches", explanation: "Accusative neuter zero: -es" },
                        { id: "d36-q14", type: "choice", question: "Complete: 'Sie kauft einen neu__ Rock.' (m, acc)",
                          options: ["neuer", "neue", "neuen"], answer: "neuen",
                          explanation: "Accusative masculine indefinite: -en" },
                        { id: "d36-q15", type: "text", question: "Complete: 'Mit gut__ Wein schmeckt es besser.' (m, dat, zero)",
                          answer: "gutem", explanation: "Dative masculine zero: -em" },
                        { id: "d36-q16", type: "text", question: "Complete: 'Er hat keine gut__ Ideen.' (pl, acc)",
                          answer: "guten", explanation: "Accusative plural indefinite: -en" },
                        { id: "d36-q17", type: "text", question: "Complete: 'Rot__ Wein trinke ich gern.' (m, acc, zero)",
                          answer: "Roten", explanation: "Accusative masculine zero: -en" },
                        { id: "d36-q18", type: "choice", question: "Complete: 'Das ist kein schlecht__ Film.' (m, nom)",
                          options: ["schlechter", "schlechte", "schlechtes"], answer: "schlechter",
                          explanation: "Nominative masculine with kein: -er" },
                        { id: "d36-q19", type: "text", question: "Complete: 'Ich wohne in einer klein__ Wohnung.' (f, dat)",
                          answer: "kleinen", explanation: "Dative feminine indefinite: -en" },
                        { id: "d36-q20", type: "text", question: "Complete: 'Mit frisch__ Milch schmeckt der Kaffee gut.' (f, dat, zero)",
                          answer: "frischer", explanation: "Dative feminine zero: -er" },
                        { id: "d36-q21", type: "text", question: "What ending for nominative masculine with indefinite article?",
                          answer: "-er", explanation: "ein gut-er Mann (strong ending)" },
                        { id: "d36-q22", type: "choice", question: "Complete: 'Sie isst gern süß__ Äpfel.' (pl, acc, zero)",
                          options: ["süße", "süßen", "süßer"], answer: "süße",
                          explanation: "Accusative plural zero: -e" },
                        { id: "d36-q23", type: "text", question: "Complete: 'Er schreibt mit einem blau__ Stift.' (m, dat)",
                          answer: "blauen", explanation: "Dative masculine indefinite: -en" },
                        { id: "d36-q24", type: "text", question: "Complete: 'Schlecht__ Wetter nervt mich.' (n, nom, zero)",
                          answer: "Schlechtes", explanation: "Nominative neuter zero: -es" },
                        { id: "d36-q25", type: "text", question: "Create: Describe something using indefinite article + adjective + noun (any case)",
                          answer: "Ich habe einen großen Hund.",
                          explanation: "Example with indefinite article + adjective (correct ending based on case/gender)" }
                    ]
                }
            },
            {
                day: 36.5,
                title: "Adjective Declension 3: Mixed Practice",
                focus: "Consolidating all adjective endings",
                activities: ["Mixed exercises with definite, indefinite, and zero articles"],
                homework: ["Write a paragraph describing your room or a person"],
                details: {
                    sections: [
                        {
                            title: "1. Mixed Adjective Declension Practice",
                            content: "This lesson consolidates everything you've learned about adjective declension. The key is to first identify the article (definite, indefinite, or zero), then the case (Nominative, Accusative, Dative), and finally the gender to choose the correct ending.",
                            examples: [
                                { german: "Der alte Mann trinkt einen kalten Saft.", english: "The old man drinks a cold juice." },
                                { german: "Ich sehe die schöne Frau mit dem roten Auto.", english: "I see the beautiful woman with the red car." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d36.5-q1",
                            type: "text",
                            question: "Complete: 'Ich kaufe d__ neu__ Pullover (der).'",
                            answer: "den neuen",
                            explanation: "Accusative, masculine, definite article."
                        },
                        {
                            id: "d36.5-q2",
                            type: "text",
                            question: "Complete: 'Sie hat ein__ schön__ Kleid (das).'",
                            answer: "ein schönes",
                            explanation: "Accusative, neuter, indefinite article."
                        },
                        {
                            id: "d36.5-q3",
                            type: "text",
                            question: "Complete: 'Wir essen frisch__ Brot (das) mit gut__ Butter (die).'",
                            answer: "frisches Brot mit guter Butter",
                            explanation: "Zero article Accusative (frisches) and Dative (mit guter)."
                        },
                        {
                            id: "d36.5-q4",
                            type: "text",
                            question: "Complete: 'Er hilft ein__ alt__ Frau (die).'",
                            answer: "einer alten",
                            explanation: "Dative (helfen), feminine, indefinite article."
                        },
                        {
                            id: "d36.5-q5",
                            type: "text",
                            question: "Complete: 'D__ klein__ Kinder (plural) spielen mit d__ groß__ Bällen (plural).'",
                            answer: "Die kleinen Kinder spielen mit den großen Bällen",
                            explanation: "Nominative plural (die kleinen) and Dative plural (mit den großen)."
                        }
                    ]
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
                day: 38.5,
                title: "Subordinating Conjunctions: weil & dass",
                focus: "Verb-final word order, giving reasons",
                activities: ["Learn 'weil' for reasons", "Learn 'dass' for clauses", "Practice verb-to-end rule"],
                homework: ["Combine sentences using 'weil' and 'dass'"],
                details: {
                    sections: [
                        {
                            title: "1. Subordinating Conjunctions & Verb-Final Rule",
                            content: "Subordinating conjunctions connect a main clause to a dependent (subordinate) clause. The most important rule is: **the conjugated verb moves to the very end of the subordinate clause.**\n\n**Main Clause:** Ich kann nicht kommen.\n**Reason:** Ich muss arbeiten.\n\n**Combined with 'weil':**\nIch kann nicht kommen, **weil** ich arbeiten **muss**.\n\nThis verb-final word order is a fundamental concept in German.",
                            examples: [
                                { german: "Ich lerne Deutsch, weil ich in Deutschland leben möchte.", english: "I am learning German because I want to live in Germany." },
                                { german: "Er kommt nicht, weil er krank ist.", english: "He is not coming because he is sick." }
                            ]
                        },
                        {
                            title: "2. Using 'weil' (because)",
                            content: "'Weil' is used to give a reason or cause for the action in the main clause. It answers the question 'Warum?' (Why?).\n\n**Structure:**\n[Main Clause], **weil** [Subject] [...other info...] [Verb at End].",
                            examples: [
                                { german: "Ich trinke Kaffee, weil ich müde bin.", english: "I drink coffee because I am tired." },
                                { german: "Sie lernt Spanisch, weil ihre Mutter aus Spanien kommt.", english: "She learns Spanish because her mother comes from Spain." },
                                { german: "Wir gehen nicht spazieren, weil es regnet.", english: "We are not going for a walk because it is raining." }
                            ]
                        },
                        {
                            title: "3. Using 'dass' (that)",
                            content: "'Dass' is used to introduce a clause that is the object of the main verb, often for reporting speech, thoughts, or opinions.\n\n**Structure:**\n[Main Clause], **dass** [Subject] [...other info...] [Verb at End].\n\nCommon verbs used with 'dass' are: **denken** (to think), **sagen** (to say), **wissen** (to know), **glauben** (to believe), **hoffen** (to hope).",
                            examples: [
                                { german: "Ich denke, dass das Wetter schön ist.", english: "I think that the weather is nice." },
                                { german: "Er sagt, dass er morgen kommt.", english: "He says that he is coming tomorrow." },
                                { german: "Sie weiß, dass die Prüfung schwer ist.", english: "She knows that the exam is difficult." },
                                { german: "Wir hoffen, dass du Zeit hast.", english: "We hope that you have time." }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d38.5-q1",
                            type: "text",
                            question: "Combine with 'weil': 'Ich bleibe zu Hause. Es regnet.'",
                            answer: "Ich bleibe zu Hause, weil es regnet.",
                            explanation: "The verb 'regnet' moves to the end of the clause introduced by 'weil'."
                        },
                        {
                            id: "d38.5-q2",
                            type: "text",
                            question: "Combine with 'dass': 'Er denkt. Das Essen ist lecker.'",
                            answer: "Er denkt, dass das Essen lecker ist.",
                            explanation: "The verb 'ist' moves to the end of the 'dass' clause."
                        },
                        {
                            id: "d38.5-q3",
                            type: "choice",
                            question: "Correct sentence: 'Ich kann nicht, weil ...'",
                            options: ["ich habe keine Zeit.", "ich keine Zeit habe.", "habe ich keine Zeit."],
                            answer: "ich keine Zeit habe.",
                            explanation: "The conjugated verb 'habe' must go to the end of the 'weil' clause."
                        },
                        {
                            id: "d38.5-q4",
                            type: "text",
                            question: "Translate: 'I hope that you are coming.'",
                            answer: "Ich hoffe, dass du kommst.",
                            explanation: "'kommst' moves to the end of the subordinate clause."
                        },
                        {
                            id: "d38.5-q5",
                            type: "text",
                            question: "Why are you learning German? Answer with 'weil'.",
                            answer: "Ich lerne Deutsch, weil ich es interessant finde.",
                            explanation: "Example answer. The key is the verb 'finde' at the end."
                        }
                    ]
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
                day: 39.5,
                title: "Subordinating Conjunctions: wenn & ob",
                focus: "Conditional clauses and indirect questions",
                activities: ["Learn 'wenn' vs 'wann'", "Practice 'ob' for yes/no questions"],
                homework: ["Sentence transformations with 'wenn' and 'ob'"],
                details: {
                    sections: [
                        {
                            title: "1. Conditional & Temporal 'wenn' (if/when)",
                            content: "The conjunction 'wenn' is versatile and can mean 'if' (for conditional sentences) or 'when'/'whenever' (for temporal sentences). In both cases, it sends the conjugated verb to the end of the clause.\n\n**Conditional 'wenn'**: Used for 'if...then' scenarios.\n**Temporal 'wenn'**: Used for repeated actions in the present or past, or a single action in the future.",
                            examples: [
                                { german: "Wenn es regnet, bleibe ich zu Hause.", english: "If it rains, I stay at home. (Conditional)" },
                                { german: "Wenn ich Zeit habe, lese ich ein Buch.", english: "When(ever) I have time, I read a book. (Temporal)" },
                                { german: "Ruf mich an, wenn du ankommst.", english: "Call me when you arrive. (Future temporal)" }
                            ]
                        },
                        {
                            title: "2. 'wenn' vs. 'wann'",
                            content: "This is a common point of confusion. \n\n* **wann**: Is a question word ('When?'). It asks for a point in time. It is used in indirect questions.\n* **wenn**: Is a conjunction ('if'/'whenever'). It introduces a condition or a temporal clause.\n\n**Direct Question:** **Wann** kommst du?\n**Indirect Question:** Ich weiß nicht, **wann** er kommt.\n**Conditional:** **Wenn** er kommt, bin ich glücklich.",
                            examples: [
                                { german: "Wann beginnt der Film?", english: "When does the film start? (Question)" },
                                { german: "Ich frage mich, wann der Film beginnt.", english: "I wonder when the film starts. (Indirect Question)" },
                                { german: "Wenn der Film beginnt, müssen wir leise sein.", english: "When the film starts, we must be quiet. (Conjunction)" }
                            ]
                        },
                        {
                            title: "3. Indirect Questions with 'ob' (if/whether)",
                            content: "'Ob' is used to introduce a subordinate clause that represents a yes/no question. It translates to 'if' or 'whether'. The verb-final rule also applies.\n\n**Direct Yes/No Question:** Kommst du zur Party?\n**Indirect Question with 'ob':** Ich weiß nicht, **ob** du zur Party **kommst**.",
                            examples: [
                                { german: "Er fragt, ob du Zeit hast.", english: "He asks if you have time." },
                                { german: "Ich bin nicht sicher, ob das eine gute Idee ist.", english: "I am not sure if that is a good idea." },
                                { german: "Kannst du mir sagen, ob der Zug pünktlich ist?", english: "Can you tell me if the train is on time?" }
                            ]
                        }
                    ],
                    homework: [
                        {
                            id: "d39.5-q1",
                            type: "text",
                            question: "Combine with 'wenn': 'Das Wetter ist gut. Wir gehen spazieren.'",
                            answer: "Wenn das Wetter gut ist, gehen wir spazieren.",
                            explanation: "The verb 'ist' moves to the end of the 'wenn' clause."
                        },
                        {
                            id: "d39.5-q2",
                            type: "text",
                            question: "Turn into an indirect question with 'ob': 'Hat er Zeit?' (I don't know...)",
                            answer: "Ich weiß nicht, ob er Zeit hat.",
                            explanation: "The verb 'hat' moves to the end of the 'ob' clause."
                        },
                        {
                            id: "d39.5-q3",
                            type: "choice",
                            question: "Choose the correct word: 'Ich weiß nicht, ___ er kommt.' (I don't know WHEN he is coming.)",
                            options: ["wenn", "wann", "ob"],
                            answer: "wann",
                            explanation: "'Wann' is used for indirect questions about time."
                        },
                        {
                            id: "d39.5-q4",
                            type: "text",
                            question: "Translate: 'I don't know if he likes pizza.'",
                            answer: "Ich weiß nicht, ob er Pizza mag.",
                            explanation: "'mag' is the conjugated verb and moves to the end."
                        },
                        {
                            id: "d39.5-q5",
                            type: "text",
                            question: "Combine with 'wenn': 'Ich habe Geld. Ich kaufe ein Auto.'",
                            answer: "Wenn ich Geld habe, kaufe ich ein Auto.",
                            explanation: "Conditional sentence. Note the inversion in the main clause."
                        }
                    ]
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
