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

    // Fetch quiz name
    useEffect(() => {
        if (quizId) {
            const fetchQuizName = async () => {
                try {
                    const response = await fetch(`/api/addQuestion?quizId=${quizId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setQuizName(data.quizName); // Setează numele quiz-ului
                    } else {
                        console.error("Quiz not found");
                    }
                } catch (error) {
                    console.error("Error fetching quiz name:", error);
                }
            };

            fetchQuizName();
        }
    }, [quizId]);

    const handleAddQuestion = async () => {
        try {
            const response = await fetch("/api/addQuestion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    quizId,
                    question,
                    answers,
                    rightAnswer,
                }),
            });

            if (response.ok) {
                alert("Question added!");
                router.push(`/quiz/${quizId}`);
            } else {
                alert("Error adding question.");
            }
        } catch (error) {
            console.error(error);
            alert("Error adding question.");
        }
    };

    return (
        <div 
        className={`grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20`}
>
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
                    <button >Back to Home</button>
                </Link>

            <button style={{ marginLeft: '20px' }} onClick={handleAddQuestion}>Add question</button>

            
                </div>
            
        </div>
    );
}
