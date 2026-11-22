import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Theory from '@/components/Theory';
import { getJsonFromFile } from "./LoadText";

interface intTheory {
    nameOfFile: string;
    router: AppRouterInstance;
}

export default async function TheoryOutput({ nameOfFile, router }: intTheory) {
    const data = await getJsonFromFile(nameOfFile);

    return <Theory router={router} title={data.title} theoryText={data.text} />
}