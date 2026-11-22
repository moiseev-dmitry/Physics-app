// Enum for question type
export type QuestionType = 'multiple-choice' | 'input';

// Question type
export interface Question {
    id: string;
    type: QuestionType;
    question: string;
    options?: string[]; // Only for multiple choice
    correctAnswer: string;
    explanation: string;
}

// Theory type
export interface Theory {
    data: string;
}

// Lesson type
export interface Lesson {
    id: string;
    title: string;
    icon: string; // Emoji for the node - in future picture
    questions?: Question[];
    theory?: Theory;
}

