import { Lesson } from '../types';

export const lessons: Lesson[] = [
    {
        id: '1',
        title: 'Basics of Motion',
        icon: '🍎',
        questions: [
            {
                id: 'q1',
                type: 'multiple-choice',
                question: 'What is the SI unit of force?',
                options: ['Joule', 'Newton', 'Watt', 'Pascal'],
                correctAnswer: 'Newton',
                explanation: 'Force is measured in Newtons (N).',
            },
            {
                id: 'q2',
                type: 'input',
                question: 'What is the formula for speed? (Use letters: d = distance, t = time)',
                correctAnswer: 'd/t',
                explanation: 'Speed = Distance / Time.',
            }
        ],
    },
    {
        id: '2',
        title: 'Gravity',
        icon: '🌍',
        questions: [
            {
                id: 'q3',
                type: 'multiple-choice',
                question: 'Who discovered the law of universal gravitation?',
                options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Nikola Tesla'],
                correctAnswer: 'Isaac Newton',
                explanation: 'Newton formulated the law of universal gravitation.',
            }
        ],
    },
];