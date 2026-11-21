"use client"; // Means that this is user's code, running not on server

import { useState } from 'react';   // Needs for get input request - buttons click, etc
import { useParams, useRouter } from 'next/navigation'; // Read dynamic part of URL; Redirect user to another page 
import { lessons } from '@/data/physicsData'; // Import all created lessons

// Main function of file
export default function LessonContent() {
    const params = useParams();
    const router = useRouter();

    // Find the current lesson based on URL
    const lesson = lessons.find((l) => l.id === params.id);

    // Current question tracker
    const [currentIndex, setCurrentIndex] = useState(0);
    // What user type/click tracker
    const [selectedAnswer, setSelectedAnswer] = useState('');
    // Tracker of user clicking the Check button
    const [isChecked, setIsChecked] = useState(false);
    // Correct answer check tracker
    const [isCorrect, setIsCorrect] = useState(false);

    // prevent user for typing smth except of number of lesson
    if (!lesson)
        return <div className="p-10 text-center">Lesson not found!</div>;


    const currentQuestion = lesson.questions[currentIndex];
    const progress = ((currentIndex) / lesson.questions.length) * 100;

    const handleCheck = () => {
        setIsChecked(true);
        if (selectedAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.trim().toLowerCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleNext = () => {
        if (currentIndex < lesson.questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer('');
            setIsChecked(false);
        } else {
            // End of lesson, go back to main page
            router.push('/');
        }
    };

    return (
        <div className="min-h-screen flex flex-col max-w-2xl mx-auto">
            {/* Header / Progress Bar */}
            <div className="p-4 flex items-center gap-4 border-b">
                <button onClick={() => router.push('/')} className="text-gray-400 hover:text-gray-600 font-bold text-2xl">✕</button>
                <div className="flex-1 bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div
                        className="bg-green-500 h-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Question Area */}
            <div className="flex-1 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">
                    {currentQuestion.question}
                </h2>

                {/* Multiple Choice Options */}
                {currentQuestion.type === 'multiple-choice' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentQuestion.options?.map((option) => (
                            <button
                                key={option}
                                onClick={() => !isChecked && setSelectedAnswer(option)}
                                className={`p-4 rounded-xl border-2 text-left font-semibold transition-all ${selectedAnswer === option
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input Type Question */}
                {currentQuestion.type === 'input' && (
                    <input
                        type="text"
                        value={selectedAnswer}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        disabled={isChecked}
                        placeholder="Type your answer..."
                        className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-blue-500"
                    />
                )}
            </div>

            {/* Footer(нижний колонтитул) */}
            <div className={`p-6 border-t ${isChecked ? (isCorrect ? 'bg-green-100' : 'bg-red-100') : 'bg-gray-50'}`}>
                {isChecked && (
                    <div className="mb-4">
                        <h3 className={`text-xl font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            {isCorrect ? 'Correct!' : 'Incorrect!'}
                        </h3>
                        <p className="text-gray-700 mt-2">{currentQuestion.explanation}</p>
                    </div>
                )}

                <div className="flex justify-end">
                    {!isChecked ? (
                        <button
                            onClick={handleCheck}
                            disabled={!selectedAnswer}
                            className="bg-green-500 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-[0_4px_0_rgb(20,150,20)] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:shadow-none transition-all"
                        >
                            CHECK
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="bg-blue-500 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-[0_4px_0_rgb(30,100,200)] active:translate-y-1 active:shadow-none transition-all"
                        >
                            {currentIndex < lesson.questions.length - 1 ? 'CONTINUE' : 'FINISH'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}