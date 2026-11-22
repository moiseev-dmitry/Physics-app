import fs from 'fs/promises'; // Use fs/promises for async!
import path from 'path';

export async function getJsonFromFile(name: string) {
    const filePath = path.join(process.cwd(), 'src', 'data', 'theory', `${name}.json`);
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Failed to read theory file:", error);
        return { title: "Error", text: "Could not load theory." };
    }
}