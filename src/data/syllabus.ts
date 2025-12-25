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
            { day: 2, title: "Introductions & Personal Pronouns", focus: "ich, du, er/sie/es", activities: ["Self-introduction", "Learn pronouns"], homework: ["Write a short bio (Name, Origin, Age)"] },
            { day: 3, title: "Numbers 0-20 & Verbs 'sein'/'haben'", focus: "Present tense basics", activities: ["Count 0-20", "Conjugate sein/haben"], homework: ["Math problems in German"] },
            { day: 4, title: "Numbers 21-100 & Colors", focus: "Basic Questions", activities: ["Count to 100", "Learn Colors", "Ask 'Wie alt bist du?'"], homework: ["Write 10 simple questions and answers"] },
            { day: 5, title: "Weekdays, Months, Seasons", focus: "Likes/Dislikes (Gern)", activities: ["Calendar vocab", "Expressing preferences"], homework: ["Write your weekly schedule"] },
            { day: 6, title: "Regular Verbs & Sentence Structure", focus: "Conjugation & Position 2", activities: ["Regular endings (-e, -st...)", "Verb placement"], homework: ["Conjugate 5 common verbs"] },
            { day: 7, title: "Nouns & Articles", focus: "Der, Die, Das (Nominative)", activities: ["Gender rules", "Plurals"], homework: ["Label 20 items in your room"] },
            { day: 8, title: "W-Questions", focus: "Wer, Was, Wo, Wann, Wie", activities: ["Question words drill"], homework: ["Create a dialogue asking for info"] },
            { day: 9, title: "Ja/Nein Questions & Negation", focus: "Nicht vs Kein", activities: ["Forming Yes/No questions", "Negating sentences"], homework: ["Examples of what you have/don't have"] },
            { day: 10, title: "Review & Mini-Test 1", focus: "Mock Conversation", activities: ["Review Days 1-9", "Roleplay: Intro"], homework: ["Self-reflection"] }
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
