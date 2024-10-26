import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Quiz() {
    const [quizData, setQuizData] = useState(null);
    const router = useRouter();
    const { quizId } = router.query;

    useEffect(() => {
        async function fetchQuiz() {
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

        if (quizId) fetchQuiz();
    }, [quizId]);

    if (!quizData) {
        return <div>Loading...</div>;
    }

    return (
      <div 
        className={`grid grid-rows-[40px_1fr_40px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20`}
      >
        <h1>{quizData.quizName}</h1>
        <div>
          <p>There will be {quizData.quizQuestions.length} questions, each with a single correct answer.</p>
          <p>Good luck!</p>
        </div>
        <Link href={`/quiz/${quizId}/question/0`}>
          <button>Test your knowledge</button>
        </Link>
        <Link href={`/quiz/${quizId}/add-question`}>
            <button>Add new question</button>
        </Link>
      </div>
    );
}
