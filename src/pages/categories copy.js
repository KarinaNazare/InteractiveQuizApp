import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Categories() {
    const [selectedScience, setSelectedScience] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const router = useRouter();

    const handleSubmit = () => {
        if (selectedScience && selectedDifficulty) {
            // Create the category ID based on the user selection
            const categoryId = `${selectedScience}_${selectedDifficulty}`;
            router.push(`/quiz/${categoryId}`);
        } else {
            alert("Please select both a science category and a difficulty level.");
        }
    };

    return (
        <div
        className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20`}
>
            <h1>Select Quiz Category</h1>
            
            {/* Science Category Selection */}
            <div className="half">
            <p>Choose a science category:</p>
            <div>
                <input 
                    type="radio" 
                    id="astronomy" 
                    name="science" 
                    value="ASTR" 
                    onChange={() => setSelectedScience("ASTR")} 
                />
                <label htmlFor="astronomy">Astronomy</label>
                <br />
                <input 
                    type="radio" 
                    id="botany" 
                    name="science" 
                    value="BOT" 
                    onChange={() => setSelectedScience("BOT")} 
                />
                <label htmlFor="botany">Botany</label>
                <br />
                <input 
                    type="radio" 
                    id="neuroscience" 
                    name="science" 
                    value="NEU" 
                    onChange={() => setSelectedScience("NEU")} 
                />
                <label htmlFor="neuroscience">Neuroscience</label>
            </div>
            </div>

            {/* Difficulty Level Selection */}
            <div className="half">
            <p>Choose difficulty:</p>
            <div>
                <input 
                    type="radio" 
                    id="easy" 
                    name="difficulty" 
                    value="E" 
                    onChange={() => setSelectedDifficulty("E")} 
                />
                <label htmlFor="easy">Easy</label>
                <br />
                <input 
                    type="radio" 
                    id="difficult" 
                    name="difficulty" 
                    value="D" 
                    onChange={() => setSelectedDifficulty("D")} 
                />
                <label htmlFor="difficult">Difficult</label>
            </div>
            </div>

            <button onClick={handleSubmit}>Start Quiz</button>
        </div>
    );
}
