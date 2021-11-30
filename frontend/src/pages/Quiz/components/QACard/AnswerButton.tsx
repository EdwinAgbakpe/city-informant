/* eslint-disable no-unused-vars */
interface iButton{
  text: string | number,
  isCorrect: boolean,
  onClick: (isCorrect: boolean) => void,
}
export const AnswerButton = function ({ text, isCorrect, onClick }: iButton) {
  return (
    <button
      type="button"
      onClick={() => onClick(isCorrect)}
      className="bg-blue text-center p-4 text-3xl rounded-xl text-paper shadow-md w-5/6"
    >
      {text}
    </button>
  );
};
