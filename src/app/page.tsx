import { lessons } from '@/data/physicsData'; // Import all "lessons" from src/app/data/physicsData
import LessonNode from '../components/LessonNode'
import Header from '@/components/Header';
import Stats from '@/components/Stats';

// Export function for next
export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
            {/* Statistic bar - can add smth like heart (ну типо как в дуолинго сверху сердечки и кристалики)*/}
            <Stats />

            {/* Title */}
            <Header />

            {/* Path of Lessons */}
            <div className="flex flex-col items-center gap-6">
                {lessons.map((lesson, index) => {
                    // Create a zig-zag effect
                    const offset = index % 2 === 0 ? 'translate-x-8' : '-translate-x-8';

                    return <LessonNode key={lesson.id} lesson={lesson} offset={offset} />;
                })}
            </div>
        </main>
    );
}