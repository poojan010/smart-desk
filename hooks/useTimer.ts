import { useState, useEffect, useRef } from 'react';

const useTimer = (initialDuration: number) => {
  const [remainingTime, setRemainingTime] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Use NodeJS.Timeout for TypeScript

  const startTimer = () => {
    if (isRunning) return; // Prevent starting if already running
    setIsRunning(true);
    
    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          return 0; // Stop at zero
        }
        return prevTime - 1; // Decrement by 1 second
      });
    }, 1000); // Run every second
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current!);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current!);
    setRemainingTime(initialDuration);
    setIsRunning(false);
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current!); // Clear interval on unmount
    };
  }, []);

  return {
    remainingTime,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default useTimer;
