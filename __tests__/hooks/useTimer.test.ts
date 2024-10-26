import { act, renderHook } from '@testing-library/react-hooks';

import useTimer from '@/hooks/useTimer';

describe('useTimer hook', () => {

    it("Starts with Initial duration" , () => {
        const hook = renderHook(
            ({ initialDuration }) => useTimer(initialDuration),
            { initialProps: { initialDuration : 20 }}
        )

        expect(hook.result.current.remainingTime).toBe(20)
        expect(hook.result.current.isRunning).toBe(false);
    })

    it("Counts down to zero" , async () => {
        jest.useFakeTimers();

        const hook = renderHook(
            ({ initialDuration }) => useTimer(initialDuration),
            { initialProps: { initialDuration : 5 }}
        )

        act(() => {
            hook.result.current.startTimer()
        })

        // Fast-forward time by 5 seconds
        act(() => {
            jest.advanceTimersByTime(5000);
        });

        expect(hook.result.current.remainingTime).toBe(0)
        expect(hook.result.current.isRunning).toBe(false);

        jest.useRealTimers(); // Clean up timer mocks
    })

    it('Should stop the timer', () => {
        jest.useFakeTimers();
        const hook = renderHook(() => useTimer(10));
    
        act(() => {
          hook.result.current.startTimer();
        });
    
        act(() => {
          jest.advanceTimersByTime(3000);
        });
    
        expect(hook.result.current.remainingTime).toBe(7);
        act(() => {
          hook.result.current.stopTimer();
        });
    
        expect(hook.result.current.isRunning).toBe(false);
    
        // Fast-forward time, should not change remaining time after stopping
        act(() => {
          jest.advanceTimersByTime(3000);
        });
    
        expect(hook.result.current.remainingTime).toBe(7); 
        jest.useRealTimers();
    });

    it('Should reset the timer', () => {
        jest.useFakeTimers();
        const hook = renderHook(() => useTimer(30));
    
        act(() => {
          hook.result.current.startTimer();
        });
    
        act(() => {
          jest.advanceTimersByTime(10000);
        });
    
        expect(hook.result.current.remainingTime).toBe(20);
        act(() => {
          hook.result.current.resetTimer();
        });
    
        expect(hook.result.current.remainingTime).toBe(30);
        expect(hook.result.current.isRunning).toBe(false);
    
        jest.useRealTimers();
    });

    it('Should clear timer on unmount', () => {
      jest.useFakeTimers();
      const clearIntervalMock = jest.spyOn(global, 'clearInterval'); // Mock clearInterval

      const hook = renderHook(() => useTimer(30));

      act(() => {
        hook.result.current.startTimer();
      });

      hook.unmount()

      expect(clearIntervalMock).toHaveBeenCalled(); // Ensure the interval is cleared

      clearIntervalMock.mockRestore()
      
      jest.useRealTimers();
    })
})