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
        <div className="glass-panel animate-in slide-in-from-top duration-500 rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* Input Area */}
                    <div className="relative flex-grow w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                            <Languages size={18} />
                        </div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleTranslate()}
                            placeholder="Type a word or sentence in English..."
                            className="block w-full pl-10 pr-3 py-3 bg-white/40 border border-white/40 rounded-xl leading-5 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/50 transition-all text-sm font-medium backdrop-blur-sm"
                        />
                    </div>

                    <button
                        onClick={handleTranslate}
                        disabled={isTranslating || !input.trim()}
                        className={`
                            h-11 px-6 rounded-xl font-bold flex items-center gap-2 transition-all shrink-0 border
                            ${isTranslating || !input.trim()
                                ? 'bg-white/20 text-slate-400 border-white/10 cursor-not-allowed'
                                : 'bg-indigo-600/90 text-white hover:bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95'}
                        `}
                    >
                        {isTranslating ? <Loader2 size={18} className="animate-spin" /> : <ArrowRightLeft size={18} />}
                        Translate
                    </button>

                    {/* Result Area */}
                    <div className="relative flex-grow w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-600">
                            <Sparkles size={18} />
                        </div>
                        <div className="flex items-center w-full pl-10 pr-3 py-3 bg-indigo-50/40 border border-indigo-100/50 rounded-xl min-h-[46px] backdrop-blur-sm">
                            <span className="flex-grow text-indigo-900 font-medium text-sm">
                                {translation || <span className="text-indigo-900/40 italic">German translation appears here...</span>}
                            </span>
                            {translation && !translation.includes("[") && (
                                <button
                                    onClick={() => speak(translation, 'de-DE')}
                                    className="p-1 text-indigo-500 hover:text-indigo-700 transition-colors hover:bg-white/20 rounded-lg"
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
