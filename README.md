# InteractiveQuizApp

Description

This project is a dynamic quiz application built with Next.js, where users can navigate through quizzes, answer questions, and add new ones. The app integrates data from a JSON API and localStorage, providing a customizable and interactive quiz experience.

Features
- Quiz Navigation: Users can start a quiz and progress through questions while tracking their score.
- Question Addition: New questions can be added to each quiz, with data stored in localStorage for a consistent experience.
- Score Display: After completing the quiz, users receive their total score, showcasing a simple and interactive feedback loop.

Tech Stack: Next.js, React, LocalStorage API, JSON API

Installation and Setup
1. Clone the Repository:
git clone <repository-url>
cd <repository-folder>
2. Install Dependencies:
npm install
3. Run the Application:
npm run dev
4. Access the app at http://localhost:3000.

Branch Structure
1. main: Contains the latest stable version of the project.
2. module-1: Includes changes for the first module, using static data.
3. module-2: Contains modifications for the second module, loading dynamic data from JSON.
4. module-3: Features enhancements for the third module, implementing dynamic question loading and the ability to add new questions.

Contributing
1. Fork the repository.
Create a new branch for your feature:
git checkout -b module-x
2. Commit your changes:
git commit -m "Add your feature"
3. Push to your fork and create a pull request.
git push origin module-x
