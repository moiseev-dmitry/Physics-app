import { Suspense } from 'react';             // Allow to wrap the child in Suspense
import LessonContent from './lesson_content'; // Import the child component

export default function LessonPage() {
    // <Suspense> ... -> Wrap in Suspense block that catch useParams hook
    // <LessonContent /> -> Run as react component
    return (
        <Suspense fallback={<div>Loading lesson...</div>}>
            <LessonContent />
        </Suspense>
    );
}