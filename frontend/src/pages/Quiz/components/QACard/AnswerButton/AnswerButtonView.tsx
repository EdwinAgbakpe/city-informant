/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
interface IButtonView{
  text: string | number,
  isCorrect: boolean,
  isClicked: boolean,
  onClick: (e:any) => void,
}

export const AnswerButtonView = function ({
  text, isCorrect, onClick, isClicked,
}: IButtonView) {
  console.log('clicked', isCorrect, isClicked);
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-center p-4 text-3xl
        rounded-xl transition transform 
        ease-in-out hover:scale-105 text-paper shadow-md w-5/6
        ${isClicked && isCorrect && 'bg-green duration-200'}
        ${isClicked && !isCorrect && 'bg-red duration-200'}
        ${!isClicked && 'bg-blue duration-500'}`}
    >
      {text}
    </button>
  );
};
