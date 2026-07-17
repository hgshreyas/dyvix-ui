import React, { type FC, type ReactNode } from 'react';
import './dependencies/style/style.css';
import { ConstructClasses } from '../../utils/utils';

interface DyvixNavMenuProps {
  children: ReactNode;
  className?: string;
}

const DyvixNavMenu: FC<DyvixNavMenuProps> = ({ children, className }) => {
  return (
    <ul className={ConstructClasses('dyvix-nav-menu', className)}>
      {children}
    </ul>
  );
};

export default DyvixNavMenu;
