import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { title } from "process";

interface theoryType {
    router: AppRouterInstance
    title: string
    theoryText: string
}

export default function Theory({ router, title, theoryText }: theoryType) {
    return (
        <div className="min-h-screen flex flex-col max-w-2xl mx-auto">
            {/* Header */}
            <div className="p-4 flex items-center gap-4 border-b">
                <button onClick={() => router.push('/')} className="text-gray-400 hover:text-gray-600 font-bold text-2xl">✕</button>
                <p className="text-black-400 font-bold text-3xl text-center w-full">{title}</p>
            </div>
            {/* Text */}
            <div className="p-4 flex items-center gap-4 border-b">
                <p className="text-lg text-gray-900 leading-relaxed">{theoryText}</p>
            </div>
        </div>
    );
}