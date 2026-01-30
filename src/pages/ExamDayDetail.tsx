import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getExamDay } from '../data/exam/examFocusData';
import { getSkillIcon, getDayStatus } from '../utils/examUtils';
import type { 
  ListeningPractice, 
  ReadingPractice, 
  WritingPractice, 
  SpeakingPractice,
  ExamQuestion 
} from '../data/exam/examTypes';

/**
 * ExamDayDetail Component
 * 
 * Displays practice exercises for a specific exam preparation day.
 * Shows exercises, tracks answers, and allows marking the day as complete.
 */
export default function ExamDayDetail() {
  const { dayNumber } = useParams<{ dayNumber: string }>();
  const navigate = useNavigate();
  const { examFocusProgress, completeExamDay } = useAppContext();

  // Parse day number
  const day = dayNumber ? parseInt(dayNumber, 10) : 0;

  // Get exam day data
  const examDay = getExamDay(day);

  // State for user answers: { questionId: selectedAnswer }
  const [userAnswers, setUserAnswers] = useState<Record<string, string | number>>({});
  
  // State for checked questions: { questionId: boolean }
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});

  // Get day status
  const dayStatus = examDay ? getDayStatus(day, examFocusProgress) : 'locked';
  const isCompleted = dayStatus === 'completed';

  // Handle invalid day
  if (!dayNumber || isNaN(day) || day < 1 || day > 30) {
    navigate('/exam-focus');
    return null;
  }

  // Handle day not found
  if (!examDay) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/exam-focus"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
          >
            ← Back to All Days
          </Link>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-6xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Day {day} Not Available Yet</h2>
            <p className="text-gray-600 mb-6">This day's exercises haven't been created yet.</p>
            <Link 
              to="/exam-focus"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Return to Overview
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get skill color classes
  const getSkillColor = (skill: string): { bg: string; text: string; border: string } => {
    switch (skill) {
      case 'Listening':
        return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' };
      case 'Reading':
        return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' };
      case 'Writing':
        return { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' };
      case 'Speaking':
        return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' };
    }
  };

  // Handle answer selection
  const handleAnswerChange = (questionId: string, answer: string | number) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  // Check answers for a practice section
  const handleCheckAnswers = (questions: ExamQuestion[]) => {
    const newChecked = { ...checkedQuestions };
    questions.forEach(q => {
      newChecked[q.id] = true;
    });
    setCheckedQuestions(newChecked);
  };

  // Check if answer is correct
  const isAnswerCorrect = (question: ExamQuestion): boolean | null => {
    if (!checkedQuestions[question.id]) return null;
    const userAnswer = userAnswers[question.id];
    if (userAnswer === undefined) return false;
    return userAnswer === question.correctAnswer;
  };

  // Mark day as complete
  const handleCompleteDay = () => {
    completeExamDay(day);
    navigate('/exam-focus');
  };

  // Type guards for practice types
  const isListeningPractice = (practice: any): practice is ListeningPractice => {
    return 'audioUrl' in practice || practice.questions?.[0]?.audioUrl !== undefined;
  };

  const isReadingPractice = (practice: any): practice is ReadingPractice => {
    return 'text' in practice && typeof practice.text === 'string';
  };

  const isWritingPractice = (practice: any): practice is WritingPractice => {
    return 'prompt' in practice;
  };

  const isSpeakingPractice = (practice: any): practice is SpeakingPractice => {
    return 'prompts' in practice && Array.isArray(practice.prompts);
  };

  // Render listening practice
  const renderListeningPractice = (practice: ListeningPractice, index: number) => {
    const colors = getSkillColor('Listening');
    const allChecked = practice.questions.every(q => checkedQuestions[q.id]);

    return (
      <div key={`listening-${index}`} className={`border-2 ${colors.border} rounded-lg p-6 mb-6`}>
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">{getSkillIcon('Listening')}</span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">{practice.title}</h3>
            <p className="text-gray-600 mt-1">{practice.description}</p>
          </div>
        </div>

        <div className={`${colors.bg} rounded-lg p-4 mb-4`}>
          <p className="text-sm font-medium text-gray-700">{practice.instructions}</p>
        </div>

        {practice.audioUrl && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-2xl">🎧</span>
              <span className="font-medium">Audio:</span>
              <span className="text-sm text-gray-600">{practice.audioUrl}</span>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {practice.questions.map((question, qIndex) => {
            const isCorrect = isAnswerCorrect(question);
            const isChecked = checkedQuestions[question.id];

            return (
              <div key={question.id} className="bg-white rounded-lg p-4 border border-gray-200">
                {question.audioUrl && question.audioUrl !== practice.audioUrl && (
                  <div className="mb-3 text-sm text-gray-600 flex items-center gap-2">
                    <span>🎧</span>
                    <span>{question.audioUrl}</span>
                  </div>
                )}

                <p className="font-medium text-gray-800 mb-3">
                  {qIndex + 1}. {question.question}
                </p>

                {question.options && (
                  <div className="space-y-2">
                    {question.options.map((option, optIndex) => (
                      <label 
                        key={optIndex}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          isChecked && userAnswers[question.id] === optIndex
                            ? isCorrect
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={optIndex}
                          checked={userAnswers[question.id] === optIndex}
                          onChange={() => handleAnswerChange(question.id, optIndex)}
                          disabled={isChecked}
                          className="w-4 h-4"
                        />
                        <span className="flex-1">{option}</span>
                        {isChecked && userAnswers[question.id] === optIndex && (
                          <span className="text-xl">
                            {isCorrect ? '✓' : '✗'}
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                )}

                {isChecked && question.explanation && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <span className="font-medium">Explanation:</span> {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!allChecked && (
          <button
            onClick={() => handleCheckAnswers(practice.questions)}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Check Answers
          </button>
        )}
      </div>
    );
  };

  // Render reading practice
  const renderReadingPractice = (practice: ReadingPractice, index: number) => {
    const colors = getSkillColor('Reading');
    const allChecked = practice.questions.every(q => checkedQuestions[q.id]);

    return (
      <div key={`reading-${index}`} className={`border-2 ${colors.border} rounded-lg p-6 mb-6`}>
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">{getSkillIcon('Reading')}</span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">{practice.title}</h3>
            <p className="text-gray-600 mt-1">{practice.description}</p>
          </div>
        </div>

        <div className={`${colors.bg} rounded-lg p-4 mb-4`}>
          <p className="text-sm font-medium text-gray-700">{practice.instructions}</p>
        </div>

        {/* Display main text if it exists (for Part 1 and Part 3 with shared text) */}
        {practice.text && (
          <div className="bg-gray-50 rounded-lg p-6 mb-6 border-2 border-gray-300">
            <div className="whitespace-pre-line text-gray-800 leading-relaxed">
              {practice.text}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {practice.questions.map((question, qIndex) => {
            const isCorrect = isAnswerCorrect(question);
            const isChecked = checkedQuestions[question.id];
            const isTrueFalse = question.type === 'true-false';

            return (
              <div key={question.id} className="bg-white rounded-lg p-4 border border-gray-200">
                {/* Display question-specific text if it exists (for Part 2 and Part 3) */}
                {question.text && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-300">
                    <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                      {question.text}
                    </div>
                  </div>
                )}

                <p className="font-medium text-gray-800 mb-3">
                  {qIndex + 1}. {question.question}
                </p>

                {isTrueFalse ? (
                  <div className="flex gap-4">
                    {['Richtig', 'Falsch'].map((option) => (
                      <label 
                        key={option}
                        className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                          isChecked && userAnswers[question.id] === option
                            ? isCorrect
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={userAnswers[question.id] === option}
                          onChange={() => handleAnswerChange(question.id, option)}
                          disabled={isChecked}
                          className="w-4 h-4"
                        />
                        <span>{option}</span>
                        {isChecked && userAnswers[question.id] === option && (
                          <span className="text-xl ml-2">
                            {isCorrect ? '✓' : '✗'}
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                ) : (
                  question.options && (
                    <div className="space-y-2">
                      {question.options.map((option, optIndex) => (
                        <label 
                          key={optIndex}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            isChecked && userAnswers[question.id] === optIndex
                              ? isCorrect
                                ? 'border-green-500 bg-green-50'
                                : 'border-red-500 bg-red-50'
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={optIndex}
                            checked={userAnswers[question.id] === optIndex}
                            onChange={() => handleAnswerChange(question.id, optIndex)}
                            disabled={isChecked}
                            className="w-4 h-4"
                          />
                          <span className="flex-1">{option}</span>
                          {isChecked && userAnswers[question.id] === optIndex && (
                            <span className="text-xl">
                              {isCorrect ? '✓' : '✗'}
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  )
                )}

                {isChecked && question.explanation && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <span className="font-medium">Explanation:</span> {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!allChecked && (
          <button
            onClick={() => handleCheckAnswers(practice.questions)}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Check Answers
          </button>
        )}
      </div>
    );
  };

  // Render writing practice (placeholder for future)
  const renderWritingPractice = (practice: WritingPractice, index: number) => {
    const colors = getSkillColor('Writing');

    return (
      <div key={`writing-${index}`} className={`border-2 ${colors.border} rounded-lg p-6 mb-6`}>
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">{getSkillIcon('Writing')}</span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">{practice.title}</h3>
            <p className="text-gray-600 mt-1">{practice.description}</p>
          </div>
        </div>

        <div className={`${colors.bg} rounded-lg p-4 mb-4`}>
          <p className="text-sm font-medium text-gray-700">{practice.instructions}</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-4">
          <p className="text-gray-800 whitespace-pre-line">{practice.prompt}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 italic">
            Writing exercises will be fully interactive in a future update.
          </p>
        </div>
      </div>
    );
  };

  // Render speaking practice (placeholder for future)
  const renderSpeakingPractice = (practice: SpeakingPractice, index: number) => {
    const colors = getSkillColor('Speaking');

    return (
      <div key={`speaking-${index}`} className={`border-2 ${colors.border} rounded-lg p-6 mb-6`}>
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">{getSkillIcon('Speaking')}</span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">{practice.title}</h3>
            <p className="text-gray-600 mt-1">{practice.description}</p>
          </div>
        </div>

        <div className={`${colors.bg} rounded-lg p-4 mb-4`}>
          <p className="text-sm font-medium text-gray-700">{practice.instructions}</p>
        </div>

        <div className="space-y-3">
          {practice.prompts.map((prompt, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-gray-800">{index + 1}. {prompt}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mt-4">
          <p className="text-sm text-gray-600 italic">
            Speaking exercises will be fully interactive in a future update.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/exam-focus"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6 font-medium"
        >
          ← Back to All Days
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Day {examDay.day}
              </h1>
              <p className="text-gray-600">{examDay.focus}</p>
            </div>
            {isCompleted && (
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium flex items-center gap-2">
                <span>✓</span>
                <span>Completed</span>
              </span>
            )}
          </div>

          {/* Skill Badges */}
          <div className="flex gap-3">
            {examDay.skills.map((skill) => {
              const colors = getSkillColor(skill);
              return (
                <div 
                  key={skill}
                  className={`${colors.bg} ${colors.text} px-4 py-2 rounded-lg font-medium flex items-center gap-2`}
                >
                  <span>{getSkillIcon(skill)}</span>
                  <span>{skill}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Practice Exercises</h2>
          {examDay.practices.map((practice, index) => {
            if (isListeningPractice(practice)) {
              return renderListeningPractice(practice, index);
            } else if (isReadingPractice(practice)) {
              return renderReadingPractice(practice, index);
            } else if (isWritingPractice(practice)) {
              return renderWritingPractice(practice, index);
            } else if (isSpeakingPractice(practice)) {
              return renderSpeakingPractice(practice, index);
            }
            return null;
          })}
        </div>

        {/* Vocabulary Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📚 Vocabulary: {examDay.vocabulary.theme}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examDay.vocabulary.items.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="font-bold text-gray-800 mb-1">{item.german}</div>
                <div className="text-gray-600 mb-2">{item.english}</div>
                {item.example && (
                  <div className="text-sm text-gray-500 italic">{item.example}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Complete Day Button */}
        {!isCompleted && (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600 mb-4">
              Finished all the exercises? Mark this day as complete!
            </p>
            <button
              onClick={handleCompleteDay}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg"
            >
              Mark Day {examDay.day} as Complete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}