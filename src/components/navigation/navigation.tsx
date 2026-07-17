import React, { type FC, type ReactNode } from 'react';
import './dependencies/style/style.css';
import { ConstructClasses } from '../../utils/utils';
import DyvixNavBrand from './DyvixNavBrand';
import DyvixNavLink from './DyvixNavLink';
import DyvixNavMenu from './DyvixNavMenu';
import { EvaluateFailure, GuardStatus } from '../../utils/DyvixGuard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface DyvixNavProps {
  children?: ReactNode;
  className?: string;
  animation:
    | 'fade'
    | 'bubble'
    | 'zoom'
    | 'unfold'
    | 'glitch'
    | 'pulse'
    | 'aurora'
    | 'drop'
    | 'flip'
    | 'glide'
    | 'drift'
    | 'float'
    | 'swing';
}

interface DyvixNavComponents extends FC<DyvixNavProps> {
  Menu: typeof DyvixNavMenu;
  Brand: typeof DyvixNavBrand;
  Link: typeof DyvixNavLink;
}

const DyvixNav: DyvixNavComponents = ({
  children,
  className,
  animation = 'fade'
}) => {
  return (
    <div className="dyvix-nav-wrapper">
      <nav className={ConstructClasses('dyvix-nav', className)}>{children}</nav>
    </div>
  );
};

DyvixNav.Menu = DyvixNavMenu;
DyvixNav.Brand = DyvixNavBrand;
DyvixNav.Link = DyvixNavLink;

export default DyvixNav;
