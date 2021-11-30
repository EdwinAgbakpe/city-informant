export interface IQAObject{
  question:string,
  answerList:{answerText: string | number, isCorrect: boolean}[]
}
