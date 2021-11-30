/* eslint-disable no-unused-vars */
import { AnswerButton } from './AnswerButton';

interface iQACard{
  questionNumber: number,
  totalQuestions: number,
  question: string,
  answerList: {answerText: string | number, isCorrect: boolean}[],
  handleAnswer: (isCorrect: boolean) => void,
}

export const QACard = function ({
  question, answerList, handleAnswer, questionNumber, totalQuestions,
}: iQACard) {
  return (
    <div id="quizCard" className="w-2/3 bg-white rounded-xl shadow-lg p-8 grid grid-cols-2 gap-x-12">
      <div id="questionSection" className="flex flex-wrap flex-col space-y-8">
        <h3>
          <span className="text-7xl text-blue">
            <span className=" font-bold font-hand">
              Question
              {' '}
            </span>
            <span>
              {questionNumber}
            </span>
          </span>
          <span className="text-4xl text-green">
            /
            {totalQuestions}
          </span>
        </h3>
        <p className="text-3xl font-light">{question}</p>
      </div>
      <div id="answersSection" className="flex flex-wrap flex-col space-y-12">
        {answerList.map((answer, index) => (
          <AnswerButton
            key={index}
            text={answer.answerText}
            isCorrect={answer.isCorrect}
            onClick={handleAnswer}
          />
        ))}
      </div>
    </div>
  );
};
