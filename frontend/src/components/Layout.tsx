import React, { ReactChildren, ReactChild } from 'react';
import NavBar from '@components/NavBar';

interface LayoutProps {
  who: string,
  children: ReactChild | ReactChildren;
}

const Layout = function ({ children, who }: LayoutProps) {
  return (
    <div id="background" className="absolute overflow-auto inset-0 bg-paper">
      <NavBar type={who} />
      <div className="mx-8 md:mx-12 lg:mx-16 xl:mx-24 mt-20">
        {children}
      </div>
      <footer className="absolute bottom-0 w-full flex flex-row items-center justify-center text-gray-300 py-6 px-8 text-center text-xs">
        Copyright &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        All rights reserved.
      </footer>
    </div>

  );
};

export default Layout;
