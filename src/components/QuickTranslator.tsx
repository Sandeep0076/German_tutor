import { useState } from 'react';
import { Languages, Volume2, ArrowRightLeft, Sparkles, Loader2 } from 'lucide-react';
import { speak } from '../utils/speech';
import { translateToGerman } from '../utils/translator';

const QuickTranslator = () => {
    const [input, setInput] = useState('');
    const [translation, setTranslation] = useState('');
    const [isTranslating, setIsTranslating] = useState(false);

    const handleTranslate = async () => {
        if (!input.trim()) return;
        setIsTranslating(true);

        const result = await translateToGerman(input);
        setTranslation(result);
        setIsTranslating(false);
    };

    return (
        <div className="bg-white border-b border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-top duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* Input Area */}
                    <div className="relative flex-grow w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Languages size={18} />
                        </div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleTranslate()}
                            placeholder="Type a word or sentence in English..."
                            className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl leading-5 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm"
                        />
                    </div>

                    <button
                        onClick={handleTranslate}
                        disabled={isTranslating || !input.trim()}
                        className={`
                            h-10 px-6 rounded-xl font-bold flex items-center gap-2 transition-all shrink-0
                            ${isTranslating || !input.trim()
                                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-100'}
                        `}
                    >
                        {isTranslating ? <Loader2 size={18} className="animate-spin" /> : <ArrowRightLeft size={18} />}
                        Translate
                    </button>

                    {/* Result Area */}
                    <div className="relative flex-grow w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500">
                            <Sparkles size={18} />
                        </div>
                        <div className="flex items-center w-full pl-10 pr-3 py-2.5 bg-indigo-50 border border-indigo-100 rounded-xl min-h-[44px]">
                            <span className="flex-grow text-indigo-900 font-medium text-sm">
                                {translation || <span className="text-indigo-300 italic">German translation appears here...</span>}
                            </span>
                            {translation && !translation.includes("[") && (
                                <button
                                    onClick={() => speak(translation, 'de-DE')}
                                    className="p-1 text-indigo-400 hover:text-indigo-600 transition-colors"
                                    title="Listen in German"
                                >
                                    <Volume2 size={20} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickTranslator;
