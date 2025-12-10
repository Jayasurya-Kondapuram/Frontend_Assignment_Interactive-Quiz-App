import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/data/quizData";

interface QuestionScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
  onNext: () => void;
  selectedAnswer: number | null;
  showResult: boolean;
}

const QuestionScreen = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onNext,
  selectedAnswer,
  showResult,
}: QuestionScreenProps) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const getOptionClass = (index: number) => {
    let baseClass = "answer-option font-sans";
    
    if (showResult) {
      if (index === question.correctAnswer) {
        baseClass += " correct";
      } else if (index === selectedAnswer && index !== question.correctAnswer) {
        baseClass += " incorrect";
      }
    } else if (selectedAnswer === index) {
      baseClass += " selected";
    }
    
    return baseClass;
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="quiz-card"
    >
      <header className="mb-8">
        <h1 className="quiz-title">
          Test Your <span className="quiz-title-italic">Knowledge</span>
        </h1>
      </header>

      {/* Progress Section */}
      <div className="mb-6" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin={1} aria-valuemax={totalQuestions}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground font-sans">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm text-muted-foreground font-sans">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-lg md:text-xl font-medium mb-6 text-foreground font-sans">
        {question.question}
      </h2>

      {/* Answer Options */}
      <div className="space-y-3 mb-8" role="radiogroup" aria-label="Answer options">
        <AnimatePresence mode="wait">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => !showResult && onAnswer(index)}
              className={getOptionClass(index)}
              disabled={showResult}
              role="radio"
              aria-checked={selectedAnswer === index}
              aria-label={`Option ${optionLabels[index]}: ${option}`}
            >
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-medium">
                  {optionLabels[index]}
                </span>
                <span>{option}</span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: selectedAnswer !== null ? 1.02 : 1 }}
          whileTap={{ scale: selectedAnswer !== null ? 0.98 : 1 }}
          onClick={onNext}
          disabled={selectedAnswer === null}
          className="quiz-button font-sans"
          aria-label={currentIndex === totalQuestions - 1 ? "See results" : "Next question"}
        >
          {currentIndex === totalQuestions - 1 ? "See Results" : "Next"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QuestionScreen;
