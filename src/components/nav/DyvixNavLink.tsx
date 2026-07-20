import React, { type FC, type HtmlHTMLAttributes, type ReactNode } from 'react';
import './dependencies/style/style.css';
import { ConstructClasses } from '../../utils/utils';

interface DyvixNavLinkProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: Function;
  style?: React.CSSProperties;
}

const DyvixNavLink = React.forwardRef<HTMLDivElement, DyvixNavLinkProps>(
  ({ children, className, href, onClick, style, ...rest }, ref) => {
    type propsType = object;
    const props: propsType = {
      className: ConstructClasses('dyvix-nav-link', className),
      ...(href && { href: href }),
      ...(onClick && { onClick: onClick }),
      ...(style && { style: style }),
      ...rest
    };

    return (
      <div className="dyvix-nav-link-wrapper" ref={ref}>
        <a {...props}>{children}</a>
      </div>
    );
  }
);

export default DyvixNavLink;
