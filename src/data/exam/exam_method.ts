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
    // Day 1: Listening & Reading - Social Interaction
    {
        day: 1,
        skills: ["Listening", "Reading"],
        focus: "Social Interaction & Invitations",
        tasks: [
            {
                type: "Reading",
                topic: "Email - Geburtstagsparty einladen",
                description: "Understanding an invitation email for a birthday party. Identifying key details like time, location, and what to bring."
            },
            {
                type: "Reading",
                topic: "Email - Woche in München",
                description: "Reading a personal email about a week's schedule or travel plan in Munich. comprehending sequence of events."
            },
            {
                type: "Listening",
                topic: "General Conversations",
                description: "Listening to short informal dialogues about meetings or parties."
            }
        ]
    },
    // Day 2: Writing & Speaking - Introduction & Forms
    {
        day: 2,
        skills: ["Writing", "Speaking"],
        focus: "Registration & Self-Introduction",
        tasks: [
            {
                type: "Writing",
                topic: "Registration Form",
                description: "Filling out a registration form (Anmeldeformular) with personal details."
            },
            {
                type: "Writing",
                topic: "Email - Birthday Party",
                description: "Writing a short reply to a birthday invitation or an invitation yourself."
            },
            {
                type: "Speaking",
                topic: "Self-Introduction",
                description: "Introducing yourself (Sich vorstellen): Name, Age, Country, Profession, Hobbies."
            }
        ]
    },
    // Day 3: Listening & Reading - Appointments & Time
    {
        day: 3,
        skills: ["Listening", "Reading"],
        focus: "Daily Routine & Appointments",
        tasks: [
            {
                type: "Listening",
                topic: "Time & Dates",
                description: "Listening to announcements about opening hours or appointment times."
            },
            {
                type: "Reading",
                topic: "Appointment Emails",
                description: "Reading emails changing or confirming doctor's appointments."
            },
            {
                type: "Reading",
                topic: "Schedules",
                description: "Understanding train or bus schedules and time tables."
            }
        ]
    },
    // Day 4: Writing & Speaking - Work & Profession
    {
        day: 4,
        skills: ["Writing", "Speaking"],
        focus: "Workplace Communication",
        tasks: [
            {
                type: "Writing",
                topic: "Email - Apology/sick note",
                description: "Writing a short email to a boss or colleague excusing yourself for being late or sick."
            },
            {
                type: "Speaking",
                topic: "Talking about Work",
                description: "Describing your profession, workplace, and daily work routine."
            },
            {
                type: "Speaking",
                topic: "Requests at Work",
                description: "Making polite requests in an office setting (asking for a pen, help, etc.)."
            }
        ]
    },
    // Day 5: Reading & Listening - Housing & Living
    {
        day: 5,
        skills: ["Reading", "Listening"],
        focus: "Housing & Accommodation",
        tasks: [
            {
                type: "Reading",
                topic: "Housing Advertisements",
                description: "Understanding classified adds for apartments (rent, location, size)."
            },
            {
                type: "Listening",
                topic: "Describing an Apartment",
                description: "Listening to someone describe their home or room."
            },
            {
                type: "Reading",
                topic: "House Rules",
                description: "Reading simple house rules (Hausordnung) or notes from neighbors."
            }
        ]
    },
    // Day 6: Writing & Speaking - Food & Dining
    {
        day: 6,
        skills: ["Writing", "Speaking"],
        focus: "Food & Restaurants",
        tasks: [
            {
                type: "Writing",
                topic: "SMS - Dinner Plan",
                description: "Writing a short message arranging a dinner meeting."
            },
            {
                type: "Speaking",
                topic: "Ordering Food",
                description: "Dialogue in a restaurant: Ordering food and drinks, asking for the bill."
            },
            {
                type: "Speaking",
                topic: "Favorite Food",
                description: "Talking about what you like to eat and drink."
            }
        ]
    },
    // Day 7: Listening & Reading - Travel & Transport
    {
        day: 7,
        skills: ["Listening", "Reading"],
        focus: "Public Transport & Travel",
        tasks: [
            {
                type: "Listening",
                topic: "Station Announcements",
                description: "Understanding announcements at train stations or airports (delays, platforms)."
            },
            {
                type: "Reading",
                topic: "Travel Information",
                description: "Reading concise travel info, tickets, or travel signs."
            },
            {
                type: "Listening",
                topic: "Directions",
                description: "Following simple directions to a destination."
            }
        ]
    },
    // Day 8: Writing & Speaking - Services & Appointments
    {
        day: 8,
        skills: ["Writing", "Speaking"],
        focus: "Official & Medical Services",
        tasks: [
            {
                type: "Writing",
                topic: "Email - Appointment Request",
                description: "Writing an email to make an appointment at a government office or doctor."
            },
            {
                type: "Speaking",
                topic: "Making an Appointment",
                description: "Telephone simulation: Booking an appointment."
            },
            {
                type: "Speaking",
                topic: "At the Receipt/Counter",
                description: "Asking for information at a service counter."
            }
        ]
    },
    // Day 9: Reading & Listening - Hobbies & Leisure
    {
        day: 9,
        skills: ["Reading", "Listening"],
        focus: "Free Time & Vacation",
        tasks: [
            {
                type: "Reading",
                topic: "Course Descriptions",
                description: "Reading about leisure courses (e.g., language, sports) and their details."
            },
            {
                type: "Listening",
                topic: "Vacation Plans",
                description: "Listening to friends talking about their weekend or vacation plans."
            },
            {
                type: "Reading",
                topic: "Postcard/Letter",
                description: "Reading a postcard from a friend on holiday."
            }
        ]
    },
    // Day 10: Writing & Speaking - Communication
    {
        day: 10,
        skills: ["Writing", "Speaking"],
        focus: "Messages & Phone Calls",
        tasks: [
            {
                type: "Writing",
                topic: "Note to a Friend",
                description: "Leaving a note for a friend or family member (e.g. 'I am at the store')."
            },
            {
                type: "Speaking",
                topic: "Phone Conversation",
                description: "Starting and ending a phone call formally and informally."
            },
            {
                type: "Speaking",
                topic: "Answering Questions",
                description: "Responding to specific questions about personal preferences."
            }
        ]
    },
    // Day 11: Listening & Reading - Health & Instructions
    {
        day: 11,
        skills: ["Listening", "Reading"],
        focus: "Health & Instructions",
        tasks: [
            {
                type: "Listening",
                topic: "Doctor's Advice",
                description: "Understanding simple medical advice or instructions."
            },
            {
                type: "Reading",
                topic: "Medicine Instructions",
                description: "Reading simple instructions on medicine packages or health tips."
            },
            {
                type: "Listening",
                topic: "Weather Forecast",
                description: "Understanding the weather report."
            }
        ]
    },
    // Day 12: Listening & Reading - Shopping (Aligned with existing content)
    {
        day: 12,
        skills: ["Listening", "Reading"],
        focus: "Shopping & Prices",
        tasks: [
            {
                type: "Listening",
                topic: "Shop Dialogues",
                description: "Conversations in clothing stores, supermarkets, and shops."
            },
            {
                type: "Reading",
                topic: "Store Ads",
                description: "Reading store advertisements, sales offers, and product descriptions."
            },
            {
                type: "Listening",
                topic: "Price Announcements",
                description: "Understanding numbers and prices in sales announcements."
            }
        ]
    },
    // Day 13: Writing & Speaking - Shopping Transactions (Aligned with existing content)
    {
        day: 13,
        skills: ["Writing", "Speaking"],
        focus: "Shopping Transactions",
        tasks: [
            {
                type: "Writing",
                topic: "Shopping Experience",
                description: "Writing about a recent purchase or shopping trip."
            },
            {
                type: "Writing",
                topic: "Product Inquiry",
                description: "Writing an email asking about product availability or price."
            },
            {
                type: "Speaking",
                topic: "Buying Items",
                description: "Roleplay: Asking for sizes, colors, and paying in a shop."
            }
        ]
    }
];
