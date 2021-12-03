import { IQAObject } from '@interfaces/IQAObject';
import { ICity } from '@interfaces/ICity';
import { createQAObject } from './createQAObject';

export const createQuestions = function (data: ICity[]) {
  const questions: IQAObject[] = [];
  for (let i = 0; i < 10; i++) {
    questions.push(createQAObject([...data]) as IQAObject);
  }
  return questions;
};
