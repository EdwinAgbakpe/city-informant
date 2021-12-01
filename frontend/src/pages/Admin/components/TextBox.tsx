/* eslint-disable no-unused-vars */
interface ITextBox{
  label: string,
  type: string,
  placeholder: string,
  value: string,
  name: string,
  onChange: (e:any) => void,
}

export const TextBox = function ({
  type,
  placeholder,
  value,
  onChange,
  label,
  name,
}: ITextBox) {
  return (
    <div className="flex flex-wrap flex-col space-y">
      <h3 className="font-bold text-green text-2xl">
        {label}
      </h3>
      <input
        type={type}
        name={name}
        className="px-4 py-2 w-full rounded-xl shadow-inner bg-white shadow-inner border border-silver"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
