import React, { ReactChildren, ReactChild } from 'react';
import NavBar from '@components/NavBar';

interface ILayoutView {
  isAdmin: boolean,
  isProtected: boolean,
  children: ReactChild | ReactChildren,
}

export const LayoutView = function ({ children, isAdmin, isProtected }: ILayoutView) {
  return (
    <div id="background" className="absolute overflow-auto inset-0 bg-paper">
      <NavBar isAdmin={isAdmin} isProtected={isProtected} />
      <div className="mx-4 md:mx-8 lg:mx-12 xl:mx-16 mt-20">
        {children}
      </div>
      <footer className="relative bottom-0 w-full flex flex-row items-center justify-center text-gray-300 py-6 px-8 text-center text-xs">
        Copyright &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        All rights reserved.
      </footer>
    </div>

  );
};
