import React, { type FC, type ReactNode } from 'react';
import './dependencies/style/style.css';
import { ConstructClasses } from '../../utils/utils';

interface DyvixNavLinkProps {
  children: ReactNode,
  className?: string,
  href?: string,
  onClick?: Function 
}

const DyvixNavLink: FC <DyvixNavLinkProps> = ({ children, className, href, onClick }) => {

  type propsType = object
  const props: propsType = {
    ...(href && { href: href }),
    ...(className && {className: ConstructClasses('dyvix-nav-link', className)}),
    ...(onClick && {onClick: onClick})
  }


  return (
    <a {...props}>
      {children}
    </a>
  )
}

export default DyvixNavLink;