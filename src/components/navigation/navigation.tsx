import React, { type FC, type ReactNode } from 'react';
import './dependencies/style/style.css';
import { EvaluateFailure, GuardStatus } from '../../utils/DyvixGuard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Version from '../../../package.json';

interface DyvixNavProps {
  children?: ReactNode,
  className?: string,
  animation: 'fade'|'bubble'|'zoom'|'unfold'|'glitch'|'pulse'|'aurora'|'drop'|'flip'|'glide'|'drift'|'float'|'swing'
}

const DyvixNav: FC<DyvixNavProps> = ({ children,  className, animation="fade" }) => {
  return (
    <div className='dyvix-nav-wrapper'>
      <nav className='dyvix-nav'>
        {children}
      </nav>
    </div>
  )
}

export default DyvixNav;