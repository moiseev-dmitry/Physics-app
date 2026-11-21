import Link from 'next/link'; // Import tool that helps load new pages
import { Lesson } from '../types/index'

interface Node {
    lesson: Lesson,
    offset: string
}

export default function LessonNode({ lesson, offset }: Node) {
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
}