// LoaderWithTransition.js
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './spinner.css';
import './transition.css';

const Spinner = () => {
  return <div className="spinner"></div>;
};

const NextComponent = () => {
  return (
    <div>
      <h1>Welcome to the Next Component!</h1>
    </div>
  );
};

const LoaderWithTransition = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 5-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="transition-container">
      <CSSTransition
        in={loading}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <Spinner />
      </CSSTransition>
      <CSSTransition
        in={!loading}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <NextComponent />
      </CSSTransition>
    </div>
  );
};

export default LoaderWithTransition;
