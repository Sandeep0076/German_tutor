import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { getSkillsForDay, getSkillIcon, formatDayTitle } from '../utils/examUtils';

const ExamFocus: React.FC = () => {
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error('ExamFocus must be used within AppProvider');
  }

  const { examFocusProgress } = context;

  // Calculate completion statistics
  const completedDays = examFocusProgress.days.filter(day => day.completed).length;
  const totalDays = 30;
  const completionPercentage = Math.round((completedDays / totalDays) * 100);

  // Check if a specific day is completed
  const isDayCompleted = (dayNumber: number): boolean => {
    const dayProgress = examFocusProgress.days.find(d => d.dayNumber === dayNumber);
    return dayProgress?.completed || false;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            30-Day Goethe A1 Exam Focus
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Master all four exam skills through a structured 30-day program. 
            Each day focuses on two complementary skills to build comprehensive exam readiness.
          </p>
          
          {/* Progress Indicator */}
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm font-semibold text-blue-600">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              {completedDays}/{totalDays} days completed
            </p>
          </div>
        </div>

        {/* Day Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: totalDays }, (_, index) => {
            const dayNumber = index + 1;
            const skills = getSkillsForDay(dayNumber);
            const completed = isDayCompleted(dayNumber);

            return (
              <Link
                key={dayNumber}
                to={`/exam-focus/day/${dayNumber}`}
                className={`
                  block rounded-lg p-6 border-2 transition-all duration-200 
                  ${completed 
                    ? 'border-green-500 bg-green-50 hover:bg-green-100 hover:shadow-lg' 
                    : 'border-gray-300 bg-white hover:border-blue-400 hover:shadow-lg hover:scale-105'
                  }
                `}
              >
                <div className="text-center">
                  {/* Day Number */}
                  <h3 className={`text-lg font-bold mb-3 ${completed ? 'text-green-700' : 'text-gray-800'}`}>
                    {formatDayTitle(dayNumber)}
                  </h3>

                  {/* Skill Icons */}
                  <div className="flex justify-center items-center space-x-2 mb-3">
                    {skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-3xl"
                        title={skill}
                      >
                        {getSkillIcon(skill)}
                      </span>
                    ))}
                  </div>

                  {/* Completion Status */}
                  {completed && (
                    <div className="flex items-center justify-center">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        ✓
                      </div>
                    </div>
                  )}

                  {/* Not Completed Indicator */}
                  {!completed && (
                    <div className="flex items-center justify-center">
                      <div className="text-gray-400 text-sm font-medium">
                        Start →
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Info Footer */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            📚 How It Works
          </h3>
          <ul className="text-sm text-blue-800 space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Odd days (1, 3, 5...):</strong> Practice Listening 🎧 and Reading 📖</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Even days (2, 4, 6...):</strong> Practice Writing ✍️ and Speaking 🗣️</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Complete each day to unlock the next and track your progress</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExamFocus;