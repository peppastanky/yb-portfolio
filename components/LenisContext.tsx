
import React, { createContext } from 'react';
import Lenis from '@studio-freight/lenis';

export const LenisContext = createContext<Lenis | null>(null);
