'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Importa SmoothScroll dinamicamente
const SmoothScroll = dynamic(() => import('smooth-scroll'), { ssr: false });

export default function SmoothScrollWrapper() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
      });
    }
  }, []);

  return null; // Este componente não precisa renderizar nada
}
