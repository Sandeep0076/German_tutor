export interface ExamMethodDay {
    day: number;
    skills: string[]; // e.g. ["Listening", "Reading"]
    focus: string; // Summary title
    tasks: {
        type: string; // "Listening", "Reading", "Writing", "Speaking"
        topic: string;
        description: string;
    }[];
}

export const examMethod: ExamMethodDay[] = [
    // Day 1: Listening + Reading
    {
        day: 1,
        skills: ["Listening", "Reading"],
        focus: "Understanding exam structure and basic contexts",
        tasks: [
            {
                type: "Listening",
                topic: "Dialogues - Supermarket, Doctor Appointment, Introduction",
                description: "Listen to short everyday conversations about shopping, appointments, and meeting people."
            },
            {
                type: "Reading",
                topic: "Email - Geburtstagsparty einladen (Lisa an Anna)",
                description: "Read an email invitation to a birthday party and Identify key details like time and location."
            },
            {
                type: "Reading",
                topic: "Email - Woche in München/Treffen (Michael an Thomas)",
                description: "Read a personal email about a travel schedule and a proposal to meet for coffee."
            }
        ]
    },
    // Day 2: Writing + Speaking
    {
        day: 2,
        skills: ["Writing", "Speaking"],
        focus: "Basic self-expression and personal information",
        tasks: [
            {
                type: "Writing",
                topic: "Formular - Deutschkurs Anmeldung",
                description: "Fill in a registration form with personal details (Name, Address, Phone)."
            },
            {
                type: "Writing",
                topic: "Email - Antwort auf Geburtstagseinladung (an Anna)",
                description: "Write a short email accepting an invitation and asking about the time."
            },
            {
                type: "Speaking",
                topic: "Sich vorstellen - Name, Alter, Land, Beruf",
                description: "Introduce yourself, spell your name, and give personal information (phone number, etc.)."
            }
        ]
    },
    // Day 3: Listening + Reading
    {
        day: 3,
        skills: ["Listening", "Reading"],
        focus: "Understanding announcements and simple information",
        tasks: [
            {
                type: "Listening",
                topic: "Announcements - Public Places (Station, Airport)",
                description: "Listen to public announcements and understand times, delays, and locations."
            },
            {
                type: "Reading",
                topic: "Anzeigen - Wohnungssuche (Studentin vs Arbeiter)",
                description: "Match housing advertisements to the specific needs of different people."
            },
            {
                type: "Reading",
                topic: "Anzeigen - Deutschkurs (Abend vs Intensiv)",
                description: "Find the right language course based on schedule and intensity."
            },
            {
                type: "Reading",
                topic: "Anzeigen - Fahrradverkauf (Kinder vs Erwachsene)",
                description: "Match bicycle advertisements to the specific needs of buyers."
            }
        ]
    },
    // Day 4: Writing + Speaking
    {
        day: 4,
        skills: ["Writing", "Speaking"],
        focus: "Simple communication and requests",
        tasks: [
            {
                type: "Writing",
                topic: "Email - Antwort auf Einladung (Max Geburtstag)",
                description: "Write an email accepting an invitation, explaining why, and mentioning what you bring."
            },
            {
                type: "Writing",
                topic: "Email - Anfrage Sprachschule (Deutschkurs)",
                description: "Write an enquiry about course start dates, costs, and location."
            },
            {
                type: "Writing",
                topic: "Email - Vorschlag Kino (an Lisa)",
                description: "Write an email suggesting a specific film and meeting time/place."
            },
            {
                type: "Writing",
                topic: "Email - Absage Party (an Freundin)",
                description: "Write an email declining a party invitation due to work and suggesting a new time."
            },
            {
                type: "Speaking",
                topic: "Theme Card - Hobbies",
                description: "Ask and answer W-questions about hobbies, sports, and weekend activities."
            },
            {
                type: "Speaking",
                topic: "Theme Card - Food & Drinks",
                description: "Ask and answer W-questions about food preferences, cooking, and meals."
            },
            {
                type: "Speaking",
                topic: "Theme Card - Daily Routine",
                description: "Ask and answer W-questions about daily schedules, waking up, and work."
            }
        ]
    },
    // Day 5: Listening + Reading
    {
        day: 5,
        skills: ["Listening", "Reading"],
        focus: "Telephone messages and information boards",
        tasks: [
            {
                type: "Listening",
                topic: "Telephone Messages & Voicemails",
                description: "Listen to messages about appointments, closures, and meetings."
            },
            {
                type: "Reading",
                topic: "Info - Stadtmuseum Berlin (Öffnungszeiten/Preise)",
                description: "Read a museum information board for hours, prices, and rules."
            },
            {
                type: "Reading",
                topic: "Info - Schwimmbad 'Aqua Fun'",
                description: "Read swimming pool details regarding opening times and prohibited items."
            },
            {
                type: "Reading",
                topic: "Info - Parkplatz Hauptstraße",
                description: "Understand parking fees, allowed times, and payment methods."
            },
            {
                type: "Reading",
                topic: "Info - Stadtbibliothek (Regeln)",
                description: "Read library rules about silence, food, and borrowing limits."
            }
        ]
    },
    // Day 6: Writing + Speaking
    {
        day: 6,
        skills: ["Writing", "Speaking"],
        focus: "Making requests and responding",
        tasks: [
            {
                type: "Writing",
                topic: "Email - Antwort auf Einladung (Max)",
                description: "Respond to a birthday invitation detailing attendance and contributions."
            },
            {
                type: "Writing",
                topic: "Email - Anfrage Tourist-Information",
                description: "Write to a tourist center asking about sights, opening times, and costs."
            },
            {
                type: "Writing",
                topic: "Email - Anfrage Hotel (Zimmer buchen)",
                description: "Write to a hotel inquiring about room availability, parking, and prices."
            },
            {
                type: "Speaking",
                topic: "Request - Borrowing Items (Pen, Book)",
                description: "Politely ask to borrow everyday objects from a partner."
            },
            {
                type: "Speaking",
                topic: "Request - Asking for Help",
                description: "Ask for assistance with heavy bags, directions, or finding items."
            },
            {
                type: "Speaking",
                topic: "Request - Making Purchases",
                description: "Simulate buying items in a bakery or cafe."
            },
            {
                type: "Speaking",
                topic: "Request - Services (Hotel/Station)",
                description: "Ask for hotel rooms, train information, or table reservations."
            },
            {
                type: "Speaking",
                topic: "Request - Directions",
                description: "Ask for directions to specific places like the station or post office."
            }
        ]
    },
    // Day 7: Full Practice Test Day
    {
        day: 7,
        skills: ["Listening", "Reading", "Writing", "Speaking"],
        focus: "Full Practice Test Day - Complete mock exam",
        tasks: [
            {
                type: "Listening",
                topic: "Dialogues & Announcements (Mock Exam)",
                description: "Complete listening comprehension with various dialogues and announcements."
            },
            {
                type: "Reading",
                topic: "Email - Besuch in Hamburg (Sophie an Julia)",
                description: "Read an email about travel plans and answering true/false questions."
            },
            {
                type: "Reading",
                topic: "Email - Absage Grillen (Martin an Paul)",
                description: "Read a decline message for a BBQ party and identifying reasons."
            },
            {
                type: "Reading",
                topic: "Matching - Wohnungssuche München",
                description: "Match apartment ads to specific requirements."
            },
            {
                type: "Reading",
                topic: "Info - Stadtbibliothek München",
                description: "Read library regulations and answering multiple choice questions."
            },
            {
                type: "Writing",
                topic: "Formular - Deutschkurs Anmeldung",
                description: "Complete a mock registration form with provided personal data."
            },
            {
                type: "Writing",
                topic: "Email - Antwort auf Konzerteinladung",
                description: "Write a response to a concert invitation asking for details."
            },
            {
                type: "Speaking",
                topic: "Mock Exam Speaking Parts 1-3",
                description: "Practice self-introduction, Q&A on themes, and making requests."
            }
        ]
    },
    // Day 8: Travel & Transportation
    {
        day: 8,
        skills: ["Listening", "Reading"],
        focus: "Travel and transportation",
        tasks: [
            {
                type: "Listening",
                topic: "Dialogues - Travel and Transportation",
                description: "Listen to conversations at train stations, bus stops, and travel agencies."
            },
            {
                type: "Reading",
                topic: "Message - Travel Plans to Hamburg",
                description: "Read a message about travel plans and meeting arrangements."
            },
            {
                type: "Reading",
                topic: "Comparison - Train Schedules (München-Berlin)",
                description: "Compare train connections and choose the right one."
            },
            {
                type: "Reading",
                topic: "Comparison - Flight Booking Websites",
                description: "Compare flight offers and booking conditions."
            },
            {
                type: "Reading",
                topic: "Timetable - Bus Schedule",
                description: "Read a bus timetable and understand departure times and prices."
            },
            {
                type: "Reading",
                topic: "Info - Train Station Services",
                description: "Read information about train station facilities and services."
            }
        ]
    },
    // Day 9: Describing People and Relations
    {
        day: 9,
        skills: ["Writing", "Speaking"],
        focus: "Describing people and relationships",
        tasks: [
            {
                type: "Writing",
                topic: "Form - Family Registration",
                description: "Fill in a registration form with family information."
            },
            {
                type: "Writing",
                topic: "Text - Meine Familie beschreiben",
                description: "Write a text introducing family members, their ages, and professions."
            },
            {
                type: "Writing",
                topic: "Email - Einladung Mutter's Geburtstag",
                description: "Write an email inviting a friend to a mother's birthday party."
            },
            {
                type: "Speaking",
                topic: "Introduce Family",
                description: "Verbally introduce family members and their key details."
            },
            {
                type: "Speaking",
                topic: "Describe People (Appearance/Character)",
                description: "Describe family members' looks (hair, eyes) and personality."
            }
        ]
    },
    // Day 10: Health & Body
    {
        day: 10,
        skills: ["Listening", "Reading"],
        focus: "Health and body",
        tasks: [
            {
                type: "Listening",
                topic: "Dialogues - Doctor's Office and Pharmacy",
                description: "Listen to conversations about health problems and medical appointments."
            },
            {
                type: "Reading",
                topic: "Message - Illness Notification",
                description: "Read a message about being sick and taking medication."
            },
            {
                type: "Reading",
                topic: "Comparison - Pharmacy Opening Hours",
                description: "Compare two pharmacies and choose the right one."
            },
            {
                type: "Reading",
                topic: "Comparison - Doctor's Office Services",
                description: "Compare medical practices and find the right doctor."
            },
            {
                type: "Reading",
                topic: "Info - Health Center Services",
                description: "Read information about health center facilities and departments."
            },
            {
                type: "Reading",
                topic: "Confirmation - Doctor Appointment",
                description: "Read an appointment confirmation with important details."
            }
        ]
    },
    // Day 11: Hobbies & Leisure Activities
    {
        day: 11,
        skills: ["Writing", "Speaking"],
        focus: "Hobbies and leisure activities",
        tasks: [
            {
                type: "Writing",
                topic: "Form - Sports Club Registration",
                description: "Fill in a sports club registration form with personal details."
            },
            {
                type: "Writing",
                topic: "Email - Inquiry about Hobby Course",
                description: "Write to a community center asking about a photography course."
            },
            {
                type: "Writing",
                topic: "Message - Weekend Activity Suggestion",
                description: "Suggest a weekend activity to a friend."
            },
            {
                type: "Writing",
                topic: "Text - Meine Hobbys",
                description: "Write about your hobbies and why you enjoy them."
            },
            {
                type: "Speaking",
                topic: "Talk about Hobbies",
                description: "Discuss your hobbies and free time activities."
            },
            {
                type: "Speaking",
                topic: "Sports and Physical Activities",
                description: "Talk about sports you do and how often."
            }
        ]
    },
    // Day 12: Shopping and Prices
    {
        day: 12,
        skills: ["Listening", "Reading"],
        focus: "Shopping and prices",
        tasks: [
            {
                type: "Listening",
                topic: "Dialogues - Shops & Sales",
                description: "Listen to conversations in stores and announcements about offers."
            },
            {
                type: "Reading",
                topic: "Comparison - Online Shops (Winterjacke)",
                description: "Compare two online shops to find a specific jacket deal."
            },
            {
                type: "Reading",
                topic: "Comparison - Öffnungszeiten (Schuhe)",
                description: "Find a shoe store that is open on Sundays."
            },
            {
                type: "Reading",
                topic: "Info - Kaufhaus Wegweiser",
                description: "Find the location of items in a department store directory."
            },
            {
                type: "Reading",
                topic: "Info - Schwarzes Brett (Verkauf/Suche)",
                description: "Read notice board notes about selling items or looking for help."
            }
        ]
    },
    // Day 13: Work & Office
    {
        day: 13,
        skills: ["Writing", "Speaking"],
        focus: "Work and office",
        tasks: [
            {
                type: "Writing",
                topic: "Form - Job Application",
                description: "Fill in a job application form with work experience and qualifications."
            },
            {
                type: "Writing",
                topic: "Email - Meeting Request to Colleague",
                description: "Write to a colleague to arrange a meeting about a project."
            },
            {
                type: "Writing",
                topic: "Email - Absence Notification",
                description: "Inform your boss about being sick and unable to come to work."
            },
            {
                type: "Writing",
                topic: "Email - Job Inquiry",
                description: "Write to a company asking about a job position."
            },
            {
                type: "Speaking",
                topic: "Talk about Your Job",
                description: "Discuss your work, workplace, and professional experience."
            },
            {
                type: "Speaking",
                topic: "Office Requests and Conversations",
                description: "Make polite requests and have typical office dialogues."
            }
        ]
    }
];
