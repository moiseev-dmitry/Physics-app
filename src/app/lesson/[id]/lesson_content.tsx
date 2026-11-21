"use client"; // Means that this is user's code, running not on server

import { useState } from 'react';   // Needs for get input request - buttons click, etc
import { useParams, useRouter } from 'next/navigation'; // Read dynamic part of URL; Redirect user to another page 
import { lessons } from '@/data/physicsData'; // Import all created lessons
import QustionCard from '@/components/QuestionCard'

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

    return <QustionCard key={lesson.id} router={router} progress={progress} currentQuestion={currentQuestion} isChecked={isChecked}
        selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} isCorrect={isChecked} NumberOfQuestions={lesson.questions.length}
        currentIndex={currentIndex} handleCheck={handleCheck} handleNext={handleNext} />
}