import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export const translateToGerman = async (text: string): Promise<string> => {
    if (!text.trim()) return "";

    // 1. Try Gemini (Primary)
    if (genAI) {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const prompt = `Translate this into German. Provide ONLY the translation, nothing else. Text: "${text}"`;

            const result = await model.generateContent(prompt);
            const responseText = result.response.text().trim();
            if (responseText) return responseText;
        } catch (error) {
            console.error("Gemini Translation failed, trying fallback:", error);
        }
    }

    // 2. Try MyMemory API (Free Fallback)
    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|de`);
        const data = await response.json();

        if (data && data.responseData && data.responseData.translatedText) {
            // MyMemory sometimes returns matches. If they are good, use them.
            return data.responseData.translatedText;
        }
    } catch (fallbackError) {
        console.error("MyMemory Fallback failed:", fallbackError);
    }

    // 3. Last Resort (Local Dictionary for extremely common stuff)
    const mockMap: Record<string, string> = {
        'hello': 'Hallo',
        'hallo': 'Hallo',
        'goodbye': 'Auf Wiedersehen',
        'bye': 'Tschüss',
        'thank you': 'Danke',
        'thanks': 'Danke',
        'how are you': 'Wie geht es dir?',
        'good morning': 'Guten Morgen',
        'good night': 'Gute Nacht',
        'goodnight': 'Gute Nacht',
        'yes': 'Ja',
        'no': 'Nein',
        'please': 'Bitte',
        'sorry': 'Entschuldigung'
    };

    const lower = text.toLowerCase().trim();
    if (mockMap[lower]) return mockMap[lower];

    return "[Translation service busy. Try again in a minute]";
};
