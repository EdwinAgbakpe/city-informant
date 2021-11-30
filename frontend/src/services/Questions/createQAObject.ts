/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { startCase } from 'lodash';
import { ICity } from '@interfaces/ICity';
import { IQAObject } from '@interfaces/IQAObject';
import {
  countryQuestion,
  populationQuestion,
  foundedQuestion,
  locationQuestion,
  nativeQuestion,
  landmarkQuestion,
} from './Constants';

export const createQAObject = function (data:ICity[]) {
  const categories = ['native', 'country', 'population', 'location', 'landmarks', 'founded'];
  const category = categories[Math.floor(Math.random() * categories.length)];
  let result = getRandomCity(data);
  const target = result.city;
  const QAObject: any = {};
  const answerList : {answerText:string | number, isCorrect: boolean}[] = [];

  switch (category) {
    case 'native': {
      QAObject.question = nativeQuestion(startCase(target.name));
      answerList.push({ answerText: startCase(target.name_native), isCorrect: true });
      for (let i = 0; i < 3; i++) {
        result = getRandomCity(result.cities);
        answerList.push(
          { answerText: startCase(result.city.name_native), isCorrect: false },
        );
      }
      break;
    }
    case 'country': {
      QAObject.question = countryQuestion(startCase(target.name));
      answerList.push({ answerText: `${startCase(target.country)}, ${startCase(target.continent)}`, isCorrect: true });
      for (let i = 0; i < 3; i++) {
        result = getRandomCity(result.cities);
        answerList.push({ answerText: `${startCase(result.city.country)}, ${startCase(result.city.continent)}`, isCorrect: false });
      }
      break;
    }
    case 'population': {
      QAObject.question = populationQuestion(startCase(target.name));
      answerList.push({ answerText: target.population, isCorrect: true });
      for (let i = 0; i < 3; i++) {
        result = getRandomCity(result.cities);
        answerList.push({ answerText: result.city.population, isCorrect: false });
      }
      break;
    }
    case 'location': {
      QAObject.question = locationQuestion(startCase(target.name));
      answerList.push({ answerText: `${target.latitude}, ${target.longitude}`, isCorrect: true });
      for (let i = 0; i < 3; i++) {
        result = getRandomCity(result.cities);
        answerList.push({ answerText: `${result.city.latitude}, ${result.city.longitude}`, isCorrect: false });
      }
      break;
    }
    case 'landmarks': {
      QAObject.question = landmarkQuestion(
        startCase(target.landmarks[Math.floor(Math.random() * target.landmarks.length)]),
      );
      answerList.push({ answerText: startCase(target.name), isCorrect: true });
      for (let i = 0; i < 3; i++) {
        result = getRandomCity(result.cities);
        answerList.push({ answerText: startCase(result.city.name), isCorrect: false });
      }
      break;
    }
    case 'founded': {
      QAObject.question = foundedQuestion(startCase(target.name));
      answerList.push({ answerText: target.founded, isCorrect: true });
      for (let i = 0; i < 3; i++) {
        result = getRandomCity(result.cities);
        answerList.push({ answerText: result.city.founded, isCorrect: false });
      }
      break;
    }
    default: {
      console.log(`error:Unknown category ${category}`);
      return null;
    }
  }

  QAObject.answerList = answerList.sort(() => Math.random() - 0.5);
  const res:IQAObject = { ...QAObject };
  return res;
};

const getRandomCity = function (cities: ICity[]) {
  const randIdx = Math.floor(Math.random() * cities.length);
  const city = cities[randIdx];
  cities.splice(randIdx, 1);
  return { city, cities };
};
