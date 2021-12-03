/* eslint-disable no-unused-vars */
import { delay } from 'lodash';
import { useState } from 'react';
import { AnswerButtonView } from './AnswerButtonView';

interface IButtonContainer{
  text: string | number,
  isCorrect: boolean,
  onClick: (isCorrect: boolean) => void,
}

export const AnswerButtonContainer = function ({ text, isCorrect, onClick }: IButtonContainer) {
  const [isClicked, setIsClicked] = useState(false);
  const handleAnswer = (e:any) => {
    e.persist();
    setIsClicked(true);
    delay(() => {
      setIsClicked(false);
      delay(() => {
        onClick(isCorrect);
      }, 200);
    }, 300);
  };

  return (
    <AnswerButtonView
      onClick={handleAnswer}
      isCorrect={isCorrect}
      text={text}
      isClicked={isClicked}
    />
  );
};
