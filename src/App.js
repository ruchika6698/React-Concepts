import React from 'react';
import Hero from './Component/Hero';
import ErrorBoundary from './Component/ErrorBoundary';
import './App.css';

export function App() {
  return (
    <div className="App">
    <ErrorBoundary>
      <Hero heroName="Batman" />
    </ErrorBoundary>

    <ErrorBoundary>
      <Hero heroName="Superman" />
    </ErrorBoundary>

    <ErrorBoundary>
      <Hero heroName="Joker" />
    </ErrorBoundary>
    </div>
  );
}

export default App;
