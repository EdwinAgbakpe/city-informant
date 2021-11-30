/* eslint-disable camelcase */
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import getCities from '@services/Cities';
import createQuestions from '@services/Questions';
import { ICity } from '@interfaces/ICity';
import { IQAObject } from '@interfaces/IQAObject';
import { QuizView } from './QuizView';

export const QuizContainer = function () {
  const [cities, setCities] = useState<ICity[]>();
  const [QAList, setQAList] = useState<IQAObject[]>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const retrieveData = async () => {
      getCities().then(
        (res:any) => {
          setCities(res);
        },
      );
    };
    retrieveData();
  }, []);
  useDidMountEffect(() => {
    console.log('Cities updated', cities);
    setQAList(createQuestions(cities as ICity[]));
  }, [cities]);

  const handleAnswer = (isCorrect: boolean) => {
    if (QAList) {
      if (isCorrect) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < QAList.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }
  };

  const handlePlay = () => {
    navigate('/quiz');
  };

  const handleQuit = () => {
    navigate('/');
  };

  return (
    <div>
      {QAList && (
      <QuizView
        showScore={showScore}
        totalQuestions={QAList.length}
        questionNumber={currentQuestion + 1}
        score={score}
        QAObject={QAList[currentQuestion]}
        handleAnswer={handleAnswer}
        handlePlay={handlePlay}
        handleQuit={handleQuit}
      />
      )}
    </div>
  );
};

const useDidMountEffect = (func:any, deps:any) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};
