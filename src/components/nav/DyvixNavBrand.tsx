import React, { type FC, type ReactNode } from 'react';
import './dependencies/style/style.css';
import { ConstructClasses } from '../../utils/utils';

interface DyvixNavBrandProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: Function;
  style?: React.CSSProperties;
}

const DyvixNavBrand = React.forwardRef<HTMLDivElement, DyvixNavBrandProps>(
  ({ children, className, href, onClick, style, ...rest }, ref) => {
    type propsType = object;
    const props: propsType = {
      className: ConstructClasses('dyvix-nav-brand', className),
      ...(href && { href: href }),
      ...(onClick && { onClick: onClick }),
      ...(style && { style: style }),
      ...rest
    };

    return (
      <div className="dyvix-nav-brand-wrapper" ref={ref}>
        <a {...props}>{children}</a>
      </div>
    );
  }
);

export default DyvixNavBrand;
