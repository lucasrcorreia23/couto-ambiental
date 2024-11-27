'use client'

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function useScrollToHash() {
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath.includes('#')) {
      const id = asPath.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [asPath]);
}
