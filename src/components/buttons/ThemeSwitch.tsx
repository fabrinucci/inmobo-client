'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/components/icons/navbar';

export const ThemeSwitch = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return (
      <img
        className='h-6 w-6'
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        alt='Loading Light/Dark Toggle'
        title='Loading Light/Dark Toggle'
      />
    );
  }

  return (
    <button
      className={resolvedTheme !== 'dark' ? 'text-sky-950' : 'text-blue-100'}
      onClick={() => setTheme(resolvedTheme !== 'dark' ? 'dark' : 'light')}
      data-testid='switch-theme'
      aria-label={resolvedTheme !== 'dark' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {resolvedTheme !== 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
