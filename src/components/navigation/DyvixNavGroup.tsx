import React, { type FC, type ReactNode } from 'react';
import './dependencies/style/style.css';
import { ConstructClasses } from '../../utils/utils';

interface DyvixNavGroupProps {
  children: ReactNode,
  className?: string
}

const DyvixNavGroup: FC <DyvixNavGroupProps> = ({ children, className }) => {
  return (
    <div className={ConstructClasses('dyvix-nav', className)}>
      {children}
    </div>
  )
}

export default DyvixNavGroup;