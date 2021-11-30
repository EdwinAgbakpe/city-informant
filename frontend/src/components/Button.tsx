/* eslint-disable no-nested-ternary */
interface iButton{
  isPrimary: boolean;
  isCancel: boolean;
  text: string;
  onClick: () => void;
}

export const Button = function ({
  isPrimary, isCancel, text, onClick,
}: iButton) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`h-12 w-32 text-paper text-2xl font-bold rounded-xl ${ isPrimary && isCancel ? 'bg-red' : isPrimary ? 'bg-green' : 'border-red'}`}
      >
        {text}
      </button>
    </div>
  );
};
