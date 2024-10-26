import path from "path";
import fs from "fs/promises";

export default async function handler(req, res) {
    const filePath = path.join(process.cwd(), "public", "quizzes.json");

    try {
        const data = await fs.readFile(filePath, "utf-8");
        const quizzes = JSON.parse(data);

        res.status(200).json(quizzes);
    } catch (error) {
        console.error("Error reading quizzes:", error);
        res.status(500).json({ error: "Failed to load quizzes data" });
    }
}
