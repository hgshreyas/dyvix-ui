import type { ReactNode } from 'react';
import { GuardStatus, allowsNull } from '../../utils/DyvixGuard';
import { ValidatAndLoadJSON } from '../../utils/Smart Json Caching/SJCManager';

const component = 'Navigation';
const CacheMapping = {
  animation: {
    jsonpath: '../../components/animations.json',
    csspath: null
  }
};

export async function ValidateNavigation(
  animation: string,
  theme: string,
  children: ReactNode,
  callback: Function,
  instance: any
) {
  let normalizedAnimation = animation?.trim().toLowerCase();

  const isAnimation = await ValidatAndLoadJSON(
    CacheMapping,
    normalizedAnimation,
    callback,
    'animation',
    component
  );

  if (!(isAnimation as any).status && !allowsNull(normalizedAnimation)) {
    return {
      status: GuardStatus.Error,
      error: 'Please provide a valid animation.'
    };
  }
  return { status: GuardStatus.Success };
}
