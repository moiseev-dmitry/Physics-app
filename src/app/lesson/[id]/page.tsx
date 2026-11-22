import LessonContent from './lesson_content';
import { getJsonFromFile } from '@/data/LoadText';
import { lessons } from '@/data/physicsData';

// Add this line to tell Next.js "It's okay that this is dynamic"
export const dynamic = 'force-dynamic';

// Notice this is an ASYNC Server Component
export default async function LessonPage({ params }: { params: { id: string } }) {
    const { id } = await params; // Await params just in case you are on Next.js 15

    // 1. Find the lesson
    const lesson = lessons.find((l) => l.id === id);

    // 2. If it has theory, read the file HERE on the server
    let theoryData = null;
    if (lesson?.theory?.nameOfFile) {
        theoryData = await getJsonFromFile(lesson.theory.nameOfFile);
    }

    // 3. Pass the data to the Client Component
    return (
        <LessonContent
            lesson={lesson}
            theoryData={theoryData}
        />
    );
}