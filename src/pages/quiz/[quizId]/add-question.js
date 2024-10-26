import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AddQuestion() {
    const router = useRouter();
    const { quizId } = router.query;

    const [quizName, setQuizName] = useState("");
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState(["", "", "", ""]);
    const [rightAnswer, setrightAnswer] = useState("");

    // Înlocuim fetch-ul cu setarea manuală a numelui pentru simplificare
    useEffect(() => {
        if (quizId) {
            // Poți seta numele quiz-ului manual sau să îl tragi dintr-o sursă inițială de date.
            setQuizName(`Quiz ${quizId}`);
        }
    }, [quizId]);

    const handleAddQuestion = () => {
        const newQuestion = {
            quizId,
            question,
            answers,
            rightAnswer,
        };

        // Salvăm întrebările în localStorage
        const savedQuestions = JSON.parse(localStorage.getItem("questions") || "[]");
        savedQuestions.push(newQuestion);
        localStorage.setItem("questions", JSON.stringify(savedQuestions));

        alert("Question added!");
        router.push(`/quiz/${quizId}`);
    };

    return (
        <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <h2>Add new question for {quizName}</h2>
            <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            {answers.map((answer, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder={`Answer ${index + 1}`}
                        value={answer}
                        onChange={(e) => {
                            const newAnswers = [...answers];
                            newAnswers[index] = e.target.value;
                            setAnswers(newAnswers);
                        }}
                    />
                </div>
            ))}
            <input
                type="text"
                placeholder="Correct answer"
                value={rightAnswer}
                onChange={(e) => setrightAnswer(e.target.value)}
            />

            <div>
                <Link href="/">
                    <button>Back to Home</button>
                </Link>
                <button style={{ marginLeft: '20px' }} onClick={handleAddQuestion}>Add question</button>
            </div>
        </div>
    );
}
