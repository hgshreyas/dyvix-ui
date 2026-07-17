import React, { type FC, type ReactNode } from 'react';
import './dependencies/style/style.css';
import { ConstructClasses } from '../../utils/utils';
import { EvaluateFailure, GuardStatus } from '../../utils/DyvixGuard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface DyvixNavProps {
  children?: ReactNode,
  className?: string,
  animation: 'fade'|'bubble'|'zoom'|'unfold'|'glitch'|'pulse'|'aurora'|'drop'|'flip'|'glide'|'drift'|'float'|'swing'
}

const DyvixNav: FC<DyvixNavProps> = ({ children,  className, animation="fade" }) => {
  return (
    <div className='dyvix-nav-wrapper'>
      <nav className={ConstructClasses('dyvix-nav', className)}>
        {children}
      </nav>
    </div>
  )
}

export default DyvixNav;