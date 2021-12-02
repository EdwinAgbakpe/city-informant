/* eslint-disable no-unused-vars */
import Layout from '@app/components/Layout';
import QACard from './components/QACard';
import { ScoreCard } from './components/ScoreCard';

interface IQuizView{
  showScore: boolean;
  totalQuestions: number,
  questionNumber: number,
  score: number,
  errors: any[],
  QAObject: {question:string, answerList:{answerText: string | number, isCorrect: boolean}[]},
  handleAnswer: (isCorrect: boolean) => void,
  handlePlay: () => void,
  handleQuit: () => void,
}

export const QuizView = function ({
  showScore,
  totalQuestions,
  questionNumber,
  score,
  errors,
  QAObject,
  handleAnswer,
  handlePlay,
  handleQuit,
}: IQuizView) {
  return (
    <Layout isAdmin={false} isProtected={false}>
      <div className="flex justify-center">
        <div className="space-y-2">
          {errors.map((err, index) => (
            <div className="text-red font-light text-center" key={index}>
              {err}
            </div>
          ))}
        </div>
        {showScore
          ? (
            <ScoreCard
              total={totalQuestions}
              correct={score}
              onPlay={handlePlay}
              onQuit={handleQuit}
            />
          ) : (
            <QACard
              questionNumber={questionNumber}
              totalQuestions={totalQuestions}
              question={QAObject.question}
              answerList={QAObject.answerList}
              handleAnswer={handleAnswer}
            />
          )}
      </div>
    </Layout>
  );
};
