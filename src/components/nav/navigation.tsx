import React, { type FC, type ReactNode } from 'react';
import './dependencies/style/style.css';
import { ConstructClasses } from '../../utils/utils';
import DyvixNavBrand from './DyvixNavBrand';
import DyvixNavLink from './DyvixNavLink';
import DyvixNavMenu from './DyvixNavMenu';
import { EvaluateFailure, GuardStatus } from '../../utils/DyvixGuard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ValidateNavigation } from './validation';
import Version from '../../../package.json';

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
    | 'swing'
    | null;
  theme?:
    'Singularity' | null
}

interface DyvixNavComponents extends FC<DyvixNavProps> {
  Menu: typeof DyvixNavMenu;
  Brand: typeof DyvixNavBrand;
  Link: typeof DyvixNavLink;
}

const DyvixNav: DyvixNavComponents = ({
  children,
  className,
  animation = 'fade',
  theme
}) => {
  const instanceId = React.useId();
  const [configs, SetConfig] = React.useState({});
  const navigationRef = React.useRef(null);
  const currentAnimation = animation ? (configs as any)['animation'] : null;
  const currentTheme = theme ? (configs as any)['theme'] : null;

  React.useEffect(() => {
    async function validate() {
      const validator = await ValidateNavigation(
        animation,
        theme,
        children,
        SetConfig,
        instanceId
      );

      if (validator.status === GuardStatus.Error) {
        return EvaluateFailure(validator.error, validator.status);
      }
    }

    validate();
    return () => {
      const key = `DYVIX_${Version['version']}_Nav_theme_${instanceId}`;
      const ele = document.getElementById(key);
      if (ele) ele.remove();
    };
  }, [animation, theme]);
  useGSAP(() => {
    if (!navigationRef.current || !currentAnimation) return;

    gsap.fromTo(navigationRef.current, currentAnimation.from, {
      ...currentAnimation.to,
      duration: currentAnimation['default-duration'],
      ease: currentAnimation.ease
    });
  }, [currentAnimation]);

  return (
    <div className="dyvix-nav-wrapper" ref={navigationRef}>
      <nav className={ConstructClasses('dyvix-nav', className, currentTheme?.class)}>{children}</nav>
    </div>
  );
};

DyvixNav.Menu = DyvixNavMenu;
DyvixNav.Brand = DyvixNavBrand;
DyvixNav.Link = DyvixNavLink;

export default DyvixNav;
