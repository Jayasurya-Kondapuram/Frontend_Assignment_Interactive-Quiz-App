import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { quizQuestions } from "@/data/quizData";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";

type QuizState = "start" | "quiz" | "result";

const Quiz = () => {
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const handleStart = useCallback(() => {
    setQuizState("quiz");
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
  }, []);

  const handleAnswer = useCallback((answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedAnswer === null) return;

    // Update score if answer is correct
    const isCorrect = selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Save answer
    setAnswers((prev) => [...prev, selectedAnswer]);

    // Move to next question or show results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizState("result");
    }
  }, [selectedAnswer, currentQuestionIndex]);

  const handleRestart = useCallback(() => {
    setQuizState("start");
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
  }, []);

  return (
    <main className="quiz-container" role="main">
      <AnimatePresence mode="wait">
        {quizState === "start" && (
          <StartScreen
            key="start"
            onStart={handleStart}
            totalQuestions={quizQuestions.length}
          />
        )}

        {quizState === "quiz" && (
          <QuestionScreen
            key={`question-${currentQuestionIndex}`}
            question={quizQuestions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
            onAnswer={handleAnswer}
            onNext={handleNext}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
          />
        )}

        {quizState === "result" && (
          <ResultScreen
            key="result"
            score={score}
            totalQuestions={quizQuestions.length}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Quiz;
