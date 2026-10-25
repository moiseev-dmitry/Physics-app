import Link from 'next/link';
// Import tool that helps load new pages
import { lessons } from '@/data/physicsData';
// Import all "lessons" from src/app/data/physicsData

// Export function for next
export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
            {/* Statistic bar - can add smth like heart (ну типо как в дуолинго сверху сердечки и кристалики)*/}
            <div className="w-full max-w-md flex justify-between px-6 mb-10 font-bold text-gray-700">
                <span className="flex items-center gap-1 text-black-500">🎅 52</span>
                <span className="flex items-center gap-1 text-black-500">😎 67</span>
                <span className="flex items-center gap-1 text-black-500">💲 30</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold text-blue-600 mb-8">Physics Path</h1>

            {/* Path of Lessons */}
            <div className="flex flex-col items-center gap-6">
                {lessons.map((lesson, index) => {
                    // Create a zig-zag effect
                    const offset = index % 2 === 0 ? 'translate-x-8' : '-translate-x-8';

                    return (
                        // Dynamic url - generic automatically for every lesson
                        <Link href={`/lesson/${lesson.id}`} key={lesson.id}>
                            <div className={`relative flex flex-col items-center group cursor-pointer ${offset}`}>
                                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-4xl shadow-[0_8px_0_rgb(30,100,200)] group-hover:bg-blue-400 group-active:translate-y-2 group-active:shadow-none transition-all">
                                    {lesson.icon} {/* Emoji on lesson circle */}
                                </div>
                                <span className="mt-2 font-bold text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
                                    {lesson.title} {/* Lesson title */}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}