import { ReactChild, ReactChildren } from 'react';
import { LayoutView } from './LayoutView';

interface ILayoutContainer{
  isAdmin: boolean,
  isProtected: boolean,
  children: ReactChild | ReactChildren,
}
export const LayoutContainer = function ({ isAdmin, isProtected, children }: ILayoutContainer) {
  return (
    <LayoutView isAdmin={isAdmin} isProtected={isProtected}>
      {children}
    </LayoutView>
  );
};
