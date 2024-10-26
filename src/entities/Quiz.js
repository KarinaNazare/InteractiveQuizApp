import { astronomyEasyQuizData, botanyEasyQuizData, neuroscienceEasyQuizData, astronomyDifficultQuizData, botanyDifficultQuizData, neuroscienceDifficultQuizData } from "./Question.js";

class Quiz {
    constructor(quizId, quizName, quizQuestions){
        this.quizId = quizId;
        this.quizName = quizName;
        this.quizQuestions = quizQuestions;
    }
}

const eAstrQuiz = new Quiz("ASTR_E", "Easy Astronomy Quiz", astronomyEasyQuizData);
const eBotQuiz = new Quiz("BOT_E", "Easy Botany Quiz", botanyEasyQuizData);
const eNeuQuiz = new Quiz("NEU_E", "Easy Neuroscience Quiz", neuroscienceEasyQuizData);
const dAstrQuiz = new Quiz("ASTR_D", "Difficult Astronomy Quiz", astronomyDifficultQuizData);
const dBotQuiz = new Quiz("BOT_D", "Difficult Botany Quiz", botanyDifficultQuizData);
const dNeuQuiz = new Quiz("NEU_D", "Difficult Neuroscience Quiz", neuroscienceDifficultQuizData);

const quizzes = [eAstrQuiz, eBotQuiz, eNeuQuiz, dAstrQuiz, dBotQuiz, dNeuQuiz];
export {quizzes};
export default Quiz;
