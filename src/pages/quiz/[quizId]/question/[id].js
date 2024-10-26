import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Question() {
    const router = useRouter();
    const { quizId, id } = router.query;

    const [quizData, setQuizData] = useState(null);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);

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

    if (!quizId || !id) return <p>Loading...</p>;

    const questionId = Number(id);
    const currentQuestion = quizData?.quizQuestions[questionId];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        setIsAnswered(true);

        if (answer === currentQuestion.rightAnswer) {
            setScore((prevScore) => prevScore + 1);
            setFeedback("Correct!");
        } else {
            setFeedback(`Incorrect. The correct answer is ${currentQuestion.rightAnswer}.`);
        }
    };

    const handleNext = () => {
        setIsAnswered(false);
        setSelectedAnswer(null);
        setFeedback("");

        if (questionId < quizData.quizQuestions.length - 1) {
            router.push(`/quiz/${quizId}/question/${questionId + 1}`);
        } else {
            router.push(`/quiz/${quizId}/results?score=${score}`);
        }
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <h1>{quizData?.quizName}</h1>
            <h4>Question {questionId + 1} of {quizData?.quizQuestions.length}</h4>
            <h4>Current Score: {score}</h4>

            <h3>{currentQuestion?.question}</h3>

            <div>
                {currentQuestion?.answers.map((answer, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`answer${index}`}
                            name="answers"
                            value={answer}
                            onChange={() => handleAnswerSelection(answer)}
                            checked={selectedAnswer === answer}
                            disabled={isAnswered}
                        />
                        <label htmlFor={`answer${index}`}>{answer}</label><br />
                    </div>
                ))}
            </div>

            <button onClick={handleNext} disabled={!isAnswered}>
                {questionId < quizData?.quizQuestions.length - 1 ? "Next Question" : "Finish Test"}
            </button>

            {isAnswered && <p>{feedback}</p>}
        </div>
    );
}
