import React from 'react';
import { Portfolio } from './pages/Portfolio';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  return (
    <>
      <CustomCursor />
      <Portfolio />
    </>
  );
}