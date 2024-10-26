import { useRouter } from "next/router";
import Link from "next/link";
import path from "path";
import fs from "fs";

export default function Results({ quizData }) {
    const router = useRouter();
    const { score, quizId } = router.query;

    // Score from query or default to 0 in case it's missing
    const finalScore = score ? Number(score) : 0;
    const totalQuestions = quizData?.quizQuestions.length || 0; // Get the total number of questions

    // Customize message based on score
    const getResultsMessage = (score) => {
        if (score === 0) {
            return "Better luck next time!";
        } else if (score <= totalQuestions / 2 + 1) {
            return "Not bad! Keep practicing!";
        } else {
            return "Amazing! You're a quiz master!";
        }
    };

    return (
        <div
            className={`grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20 gap-16 sm:p-20`}
        >
            <h1>Quiz Results for {quizData?.quizName}</h1> {/* Display the quiz name */}
            <p>
                You answered <strong>{finalScore}</strong> out of{" "}
                <strong>{totalQuestions}</strong> questions correctly.
            </p>
            <h2>{getResultsMessage(finalScore)}</h2>
            <div>
                {/* Add a button to go back to home or retake the quiz */}
                <Link href="/">
                    <button style={{ marginTop: '20px' }}>Go to Home</button>
                </Link>

                <Link href={`/quiz/${quizId}`}>
                    <button style={{ marginTop: '20px', marginLeft: '10px' }}>
                        Retake Quiz
                    </button>
                </Link>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { quizId } = context.params;

    // Load the quiz data from the JSON file
    const filePath = path.join(process.cwd(), 'public', 'quizzes.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const allQuizzes = JSON.parse(fileContent).quizzes;

    // Find the quiz matching the quizId
    const quizData = allQuizzes.find(quiz => quiz.quizId === quizId);

    if (!quizData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            quizData, // Pass the specific quiz data to the page
        },
    };
}