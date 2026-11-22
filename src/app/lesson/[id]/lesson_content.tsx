"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QustionCard from '@/components/QuestionCard';
import Theory from '@/components/Theory'; // Import the UI component directly!

// Receive the props passed from page.tsx
export default function LessonContent({ lesson, theoryData }: { lesson: any, theoryData: any }) {
    const router = useRouter();

    // State...
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    if (!lesson) {
        return <div className="p-10 text-center">Lesson not found!</div>;
    }

    if (lesson.questions) {
        const currentQuestion = lesson.questions[currentIndex];
        const progress = (currentIndex / lesson.questions.length) * 100;

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
                router.push('/');
            }
        };

        return (
            <QustionCard
                key={lesson.id}
                router={router}
                progress={progress}
                currentQuestion={currentQuestion}
                isChecked={isChecked}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
                isCorrect={isCorrect} // <-- Fixed bug here! It was isChecked
                NumberOfQuestions={lesson.questions.length}
                currentIndex={currentIndex}
                handleCheck={handleCheck}
                handleNext={handleNext}
            />
        );
    }

    // If it's theory, just render the Theory component with the data from the server
    else if (lesson.theory && theoryData) {
        return <Theory router={router} title={theoryData.title} theoryText={theoryData.text} />;
    }

    return null;
}