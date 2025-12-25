import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Volume2 } from 'lucide-react';
import { type DayPlan } from '../data/syllabus';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { speak } from '../utils/speech';
import { translateToGerman } from '../utils/translator';

interface Message {
    id: string;
    sender: 'user' | 'bot';
    text: string;
}

interface LessonChatbotProps {
    day: DayPlan;
}

// Access the API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const LessonChatbot: React.FC<LessonChatbotProps> = ({ day }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 'init', sender: 'bot', text: `Hallo! I'm your assistant for Day ${day.day}: ${day.title}. Ask me anything! I have the context of today's lesson.` }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
        setMessages((prev: Message[]) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            let botResponse = "";

            if (genAI) {
                try {
                    // Use REAL AI
                    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

                    // Construct a system-like prompt with lesson context
                    const prompt = `
                        You are a helpful German Language Tutor. 
                        Context: The student is currently studying Day ${day.day} of an A1 course.
                        Day Title: ${day.title}
                        Focus: ${day.focus}
                        Lesson Content: ${JSON.stringify(day.details?.sections || [])}
                        
                        User asked: "${input}"
                        
                        Instructions:
                        1. Answer accurately. 
                        2. If the user asks about something on the current page, prioritize that.
                        3. If the user asks anything else (general German or even unrelated), answer politely but try to relate it back to learning if possible.
                        4. Keep answers beginner-friendly (A1 level).
                        5. Use a mix of German and English where helpful.
                    `;

                    const result = await model.generateContent(prompt);
                    botResponse = result.response.text();
                } catch (apiError) {
                    console.error("Gemini API Error, falling back to mock:", apiError);
                    // Fallback to mock if API fails
                    botResponse = await generateMockResponse(input, day);
                }
            } else {
                // FALLBACK to Mock AI if no key
                botResponse = await generateMockResponse(input, day);
            }

            setMessages((prev: Message[]) => [...prev, { id: (Date.now() + 1).toString(), sender: 'bot', text: botResponse }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages((prev: Message[]) => [...prev, { id: 'err', sender: 'bot', text: "Entschuldigung, I'm having trouble connecting to my brain right now. I'll try to use my basic mode instead." }]);
            // Optional: still try mock as a last resort
            const fallbackMsg = await generateMockResponse(input, day);
            setMessages((prev: Message[]) => [...prev, { id: 'fallback', sender: 'bot', text: fallbackMsg }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-80 sm:w-96 mb-4 overflow-hidden flex flex-col h-[500px] animate-in fade-in slide-in-from-bottom-4 transition-all">

                    {/* Header */}
                    <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1.5 rounded-lg">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">German Tutor AI</h3>
                                <p className="text-xs text-indigo-200">{API_KEY ? "AI Powered" : "Basic Mode"} • Day {day.day}</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors text-white">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
                        {messages.map((msg: Message) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`group relative max-w-[80%] rounded-2xl p-3 text-sm ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'}`}>
                                    {msg.text}
                                    <button
                                        onClick={() => speak(msg.text, msg.sender === 'user' ? 'en-US' : 'de-DE')}
                                        className={`absolute ${msg.sender === 'user' ? '-left-8' : '-right-8'} top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-indigo-600`}
                                        title="Listen"
                                    >
                                        <Volume2 size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 shadow-sm flex gap-1">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        )}
                        {!API_KEY && messages.length > 2 && (
                            <div className="text-[10px] text-center text-slate-400 mt-2">
                                Tip: Add VITE_GEMINI_API_KEY to your .env for better answers!
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-slate-100 flex gap-2 items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask me anything..."
                            className="flex-grow bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                        />
                        <button
                            onClick={() => speak(input, 'de-DE')}
                            disabled={!input.trim()}
                            className="p-2 text-slate-400 hover:text-indigo-600 disabled:opacity-30 transition-colors"
                            title="Speak in German"
                        >
                            <Volume2 size={18} />
                        </button>
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || isTyping}
                            className="bg-indigo-600 text-white rounded-lg p-2 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`shadow-lg transition-all duration-300 flex items-center justify-center
          ${isOpen ? 'w-12 h-12 bg-slate-200 text-slate-600 rounded-full hover:bg-slate-300' : 'w-14 h-14 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 hover:scale-105 active:scale-95'}
        `}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

// --- Mock AI Logic (Keep as fallback) ---
const generateMockResponse = async (input: string, day: DayPlan): Promise<string> => {
    const lowerInput = input.toLowerCase();

    // Check if it's a translation request
    if (lowerInput.includes("how to say") || lowerInput.includes("translate") || lowerInput.includes("german for")) {
        const cleanInput = input.replace(/how to say|translate|german for/gi, "").trim();
        if (cleanInput) {
            const translation = await translateToGerman(cleanInput);
            if (!translation.includes("[")) {
                return `In German, "${cleanInput}" is "${translation}".`;
            }
        }
    }

    // Greeting & Translation Helper
    const translationMap: Record<string, string> = {
        'good night': 'Gute Nacht',
        'goodnight': 'Gute Nacht',
        'good morning': 'Guten Morgen',
        'good afternoon': 'Guten Tag',
        'good day': 'Guten Tag',
        'good evening': 'Guten Abend',
        'hello': 'Hallo',
        'bye': 'Tschüss',
        'goodbye': 'Auf Wiedersehen',
        'how are you': 'Wie geht es dir? (informal) or Wie geht es Ihnen? (formal)',
        'thank you': 'Danke',
        'please': 'Bitte',
        'yes': 'Ja',
        'no': 'Nein'
    };

    // Check for "how to say" or "german for" or direct greeting query
    for (const [key, value] of Object.entries(translationMap)) {
        if (lowerInput.includes(key)) {
            return `In German, "${key}" is "${value}".`;
        }
    }

    // Day 1 Specifics
    if (day.day === 1) {
        if (lowerInput.includes('pronounc') || lowerInput.includes('sound')) {
            if (lowerInput.includes('ü') || lowerInput.includes('u-umlaut')) return "To pronounce 'Ü', shape your lips like you're whistling (a tight 'O' shape) but try to say the letter 'E' (as in 'see'). It creates that unique German mix!";
            if (lowerInput.includes('ö') || lowerInput.includes('o-umlaut')) return "For 'Ö', make an 'O' shape with your lips but say 'A' (as in 'day'). It's similar to the 'i' in 'bird' but rounder.";
            if (lowerInput.includes('r')) return "The German 'R' is usually produced in the back of the throat (uvular), almost like gargling water but softer. In some regions, it's rolled.";
            if (lowerInput.includes('w')) return "In German, 'W' sounds like the English 'V'. So 'Wasser' sounds like 'Vasser'.";
            if (lowerInput.includes('v')) return "Usually, 'V' sounds like 'F'. So 'Vater' sounds like 'Fater'. In loanwords like 'Vase' it sounds like 'V'.";
            return "Pronunciation is key! German vowels are pure, and consonants like W (V sound) and V (F sound) are tricky. Which letter specifically?";
        }
        if (lowerInput.includes('alphabet')) return "The alphabet has 26 letters + Ä, Ö, Ü, and ß. 'Y' (Ypsilon) and 'J' (Jot) have special names.";
    }

    // Generic Responses
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) return "Hallo! How can I help you today?";
    if (lowerInput.includes('detail') || lowerInput.includes('show')) return "I can explain any part of today's lesson. Just ask!";

    // Fallback for context-aware but unmapped queries
    if (lowerInput.includes('how')) return `That's a good question about ${day.title}. For specific translations, you can ask things like "How do I say Good Night?".`;

    return "I'm here to help with your A1 German! For complex questions, try providing a Gemini API key in the .env file to enable full AI mode.";
};

export default LessonChatbot;
