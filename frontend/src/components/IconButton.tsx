/* eslint-disable react/require-default-props */
interface IIconButton{
  icon: any,
  onClick: any,
  isPrimary: boolean,
}

export const IconButton = function ({
  icon, onClick, isPrimary,
}: IIconButton) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}

      >
        <div className="h-8 w-8 text-center">
          <div
            className={`${isPrimary ? 'p-1 bg-blue rounded-full text-paper' : 'text-blue'}`}

          >
            {icon}
          </div>
        </div>
      </button>
    </div>
  );
};
