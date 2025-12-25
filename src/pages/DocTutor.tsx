import { useState } from 'react';
import { BrainCircuit, FileText, Send, Sparkles, Check, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { GoogleGenerativeAI } from "@google/generative-ai";

const DocTutor = () => {
    useAppContext();
    const [text, setText] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<any>(null);

    // Access the API key from environment variables
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

    const handleAnalyze = async () => {
        if (!text.trim()) return;
        setIsAnalyzing(true);

        try {
            if (genAI) {
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                const prompt = `
                    Analyze this German text at an A1 level.
                    Text: "${text}"
                    
                    Return response in JSON format ONLY:
                    {
                        "concepts": [{"title": "Concept Name", "description": "Short explanation"}],
                        "questions": [{"q": "German question?", "a": "German answer"}]
                    }
                    Limit to 3 concepts and 3 questions.
                `;

                const result = await model.generateContent(prompt);
                const responseText = result.response.text();
                // Extract JSON if AI includes markdown code blocks
                const jsonStr = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
                setResult(JSON.parse(jsonStr));
            } else {
                // FALLBACK
                setTimeout(() => {
                    setResult(mockAIResponse);
                    setIsAnalyzing(false);
                }, 1000);
                return; // Exit here to prevent double setIsAnalyzing(false)
            }
        } catch (error) {
            console.error("AI Error:", error);
            alert("Failed to analyze text. Please check your API key.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                        <BrainCircuit className="text-indigo-600" /> AI Document Tutor
                    </h1>
                    <p className="text-slate-500 mt-1">Paste German text to get instant analysis and practice questions.</p>
                </div>
                {API_KEY && (
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Sparkles size={12} /> AI Mode Active
                    </span>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Input Area */}
                <div className="space-y-4">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-1">
                        <textarea
                            className="w-full h-80 p-5 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-100 text-slate-700 leading-relaxed"
                            placeholder="Paste a German article, story, or dialogue here..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <div className="px-4 py-3 bg-slate-50 rounded-b-xl border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                            <span>{text.length} chars</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setText(sampleText)}
                                    className="hover:text-indigo-600 transition-colors"
                                >
                                    Insert Sample
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing || !text}
                        className={`
                            w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg shadow-lg transition-all
                            ${isAnalyzing || !text
                                ? 'bg-slate-100 text-slate-300 cursor-not-allowed shadow-none'
                                : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:scale-[1.02] hover:shadow-indigo-200'}
                        `}
                    >
                        {isAnalyzing ? (
                            <> <Sparkles className="animate-spin" /> Analyzing...</>
                        ) : (
                            <> <Send size={20} /> Analyze Text </>
                        )}
                    </button>

                    {!API_KEY && (
                        <p className="text-center text-xs text-slate-400">
                            Mode: Demo (Mocked). Provide <b>VITE_GEMINI_API_KEY</b> in <b>.env</b> for real AI.
                        </p>
                    )}
                </div>

                {/* Right: Results Area */}
                <div className="space-y-6">
                    {!result && !isAnalyzing && (
                        <div className="h-full flex flex-col items-center justify-center text-slate-300 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center">
                            <FileText size={48} className="mb-4 text-slate-200" />
                            <p className="text-lg font-medium">Ready to Analyze</p>
                            <p className="text-sm">Paste text and hit analyze to see the magic.</p>
                        </div>
                    )}

                    {result && (
                        <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-6">
                            {/* Analysis Card */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Sparkles size={18} className="text-amber-500" /> Core Concepts
                                </h3>
                                <div className="space-y-4">
                                    {result.concepts && result.concepts.map((concept: any, idx: number) => (
                                        <div key={idx} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                                            <div className="text-sm font-semibold text-slate-800">{concept.title}</div>
                                            <div className="text-sm text-slate-600 mt-1">{concept.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Generated Questions */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Generated Quiz</h3>
                                <div className="space-y-4">
                                    {result.questions && result.questions.map((q: any, idx: number) => (
                                        <QuizItem key={idx} question={q} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const QuizItem = ({ question }: { question: any }) => {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="border border-slate-200 rounded-lg p-4 hover:border-indigo-200 transition-colors">
            <p className="font-medium text-slate-800 mb-3">{question.q}</p>

            {revealed ? (
                <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg text-sm font-medium animate-in fade-in">
                    <Check size={16} className="inline mr-2" />
                    {question.a}
                </div>
            ) : (
                <button
                    onClick={() => setRevealed(true)}
                    className="text-sm text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-1"
                >
                    Reveal Answer <ChevronRight size={14} />
                </button>
            )}
        </div>
    );
};

// Data for Demo
const sampleText = `Hallo! Ich heiße Sarah und ich komme aus Deutschland. Ich wohne in Berlin. Ich bin 25 Jahre alt. Meine Hobbys sind Lesen und Kochen. Am Wochenende gehe ich gern ins Kino.`;

const mockAIResponse = {
    concepts: [
        { title: "Verb 'sein' (to be)", description: "Used in 'Ich bin 25 Jahre alt'. Vital for descriptions." },
        { title: "Word Order", description: "Standard S-V-O order in 'Ich wohne in Berlin'." },
        { title: "Direct Object", description: "'Hobbys' is the subject here, 'Lesen' and 'Kochen' are hobbies." }
    ],
    questions: [
        { q: "Wie alt ist Sarah?", a: "Sie ist 25 Jahre alt." },
        { q: "Woher kommt sie?", a: "Sie kommt aus Deutschland." },
        { q: "Was macht sie am Wochenende?", a: "Sie geht gern ins Kino." }
    ]
};

export default DocTutor;
