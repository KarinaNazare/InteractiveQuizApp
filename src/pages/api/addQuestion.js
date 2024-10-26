import path from "path";
import fs from "fs";

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), "public", "quizzes.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const allQuizzes = JSON.parse(fileContent).quizzes;

    if (req.method === "POST") {
        // Logica pentru adăugarea întrebării
        const { quizId, question, answers, rightAnswer } = req.body;

        const quizIndex = allQuizzes.findIndex((quiz) => quiz.quizId === quizId);
        if (quizIndex === -1) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        // Adaugă întrebarea la quiz-ul specificat
        allQuizzes[quizIndex].quizQuestions.push({ question, answers, rightAnswer });

        // Salvează fișierul JSON actualizat
        fs.writeFileSync(filePath, JSON.stringify({ quizzes: allQuizzes }, null, 2));

        return res.status(200).json({ message: "Question added successfully" });
    } else if (req.method === "GET") {
        // Preia numele quiz-ului pe baza ID-ului
        const { quizId } = req.query;
        const quizData = allQuizzes.find((quiz) => quiz.quizId === quizId);

        if (!quizData) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        return res.status(200).json({ quizName: quizData.quizName });
    } else {
        res.setHeader("Allow", ["POST", "GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
