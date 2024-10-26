import { useRouter } from "next/router";
import Link from "next/link";

export default function Results() {
    const router = useRouter();
    const { score } = router.query;

    // Score from query or default to 0 in case it's missing
    const finalScore = score ? Number(score) : 0;

    // Customize message based on score
    const getResultsMessage = (score) => {
        if (score === 0) {
            return "Better luck next time!";
        } else if (score < 1) {
            return "Not bad! Keep practicing!";
        } else if (score < 2) {
            return "Great job! You're almost an expert!";
        } else {
            return "Amazing! You're a quiz master!";
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Quiz Results</h1>
            <p>Your final score is: <strong>{finalScore}</strong></p>
            <h2>{getResultsMessage(finalScore)}</h2>

            {/* Add a button to go back to home or retake the quiz */}
            <Link href="/">
                <button style={{ marginTop: '20px' }}>Go to Home</button>
            </Link>

            <Link href={`/quiz`}>
                <button style={{ marginTop: '20px', marginLeft: '10px' }}>Retake Quiz</button>
            </Link>
        </div>
    );
}
