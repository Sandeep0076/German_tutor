export interface QuestionContext {
    id: string;
    category: 'Speaking' | 'Reading' | 'Writing' | 'Grammar';
    type: 'flashcard' | 'multiple-choice';
    question: string;
    image?: string; // For speaking cards
    answer: string;
    tips?: string;
}

export const mockQuestions: QuestionContext[] = [
    {
        id: 's1',
        category: 'Speaking',
        type: 'flashcard',
        question: 'Thema: Essen & Trinken. [Card: Brot] -> Formulate a question.',
        answer: 'Essen Sie gern Brot? / Möchten Sie Brot?',
        tips: 'Use polite form "Sie" for the exam.'
    },
    {
        id: 's2',
        category: 'Speaking',
        type: 'flashcard',
        question: 'Thema: Einkaufen. [Card: Zeitung] -> Formulate a question.',
        answer: 'Wo kann ich eine Zeitung kaufen? / Haben Sie eine Zeitung?',
        tips: 'Ask for location (Wo) or availability (Haben Sie).'
    },
    {
        id: 'g1',
        category: 'Grammar',
        type: 'multiple-choice',
        question: 'Er ______ aus Deutschland. (Choose: kommt / komme / kommst)',
        answer: 'kommt',
        tips: '3rd person singular (er/sie/es) takes -t ending.'
    },
    {
        id: 'g2',
        category: 'Grammar',
        type: 'multiple-choice',
        question: 'Wir fahren ______ dem Bus. (Choose: mit / bei / von)',
        answer: 'mit',
        tips: '"Mit" always takes Dative case. Transport uses "mit".'
    },
    {
        id: 'w1',
        category: 'Writing',
        type: 'flashcard',
        question: 'Write a short email to your friend Peter. Invite him to your birthday party on Saturday at 18:00.',
        answer: 'Hallo Peter,\nwie geht es dir?\nIch habe am Samstag Geburtstag. Ich mache eine Party.\nDie Party ist um 18:00 Uhr. Kommst du?\n\nViele Grüsse,\n[Dein Name]',
        tips: 'Include: Greeting, Reason (Birthday), Time, Question (Coming?), Closing.'
    }
];
