import { ReactChild, ReactChildren } from 'react';

interface IForm {
  title: string,
  children: ReactChild | ReactChildren
}
export const Form = function ({ children, title }: IForm) {
  return (
    <div id={`${title}Form`} className="bg-white shadow-lg rounded-xl w-full md:w-4/5 lg:w-3/5 p-8 border border-silver flex flex-wrap flex-col space-y-6">
      <h1 className="text-green font-bold text-3xl text-center">{title}</h1>
      <div>
        {children}
      </div>
    </div>
  );
};
