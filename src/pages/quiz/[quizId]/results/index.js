import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Results() {
    const router = useRouter();
    const { score, quizId } = router.query;

    const [quizData, setQuizData] = useState(null);

    // Scorul final primit din query sau 0 în caz că lipsește
    const finalScore = score ? Number(score) : 0;
    const totalQuestions = quizData?.quizQuestions.length || 0; // Numărul total de întrebări

    // Mesajul personalizat în funcție de scor
    const getResultsMessage = (score) => {
        if (score === 0) {
            return "Better luck next time!";
        } else if (score <= totalQuestions / 2 + 1) {
            return "Not bad! Keep practicing!";
        } else {
            return "Amazing! You're a quiz master!";
        }
    };

    useEffect(() => {
        if (!quizId) return;

        async function fetchQuizData() {
            try {
                const response = await fetch("/api/questions"); // încărcăm întrebările din JSON
                const data = await response.json();
                const quiz = data.quizzes.find((q) => q.quizId === quizId);

                // Încărcăm întrebările noi din localStorage și le adăugăm la cele existente
                const savedQuestions = JSON.parse(localStorage.getItem("questions") || "[]");
                const localQuizQuestions = savedQuestions.filter((q) => q.quizId === quizId);
                
                setQuizData({
                    ...quiz,
                    quizQuestions: [...quiz.quizQuestions, ...localQuizQuestions],
                });
            } catch (error) {
                console.error("Failed to load quiz data:", error);
            }
        }
        
        fetchQuizData();
    }, [quizId]);

    if (!quizData) return <p>Loading...</p>;

    return (
        <div 
        className={`grid grid-rows-[40px_2fr_40px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20`}
>
            <h1>Quiz Results for {quizData.quizName}</h1>
            <p>
                You answered <strong>{finalScore}</strong> out of{" "}
                <strong>{totalQuestions}</strong> questions correctly.
            </p>
            <h2>{getResultsMessage(finalScore)}</h2>
            <div>
                <Link href="/">
                    <button >Go to Home</button>
                </Link>

                <Link href={`/quiz/${quizId}`}>
                    <button style={{marginLeft: '10px' }}>
                        Retake Quiz
                    </button>
                </Link>

                <Link href={`/quiz/${quizId}/add-question`}>
                <button style={{marginLeft: '10px' }}>Add new question</button>
                </Link>
            </div>
        </div>
    );
}
