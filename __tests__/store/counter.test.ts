// store.test.ts
import { act } from '@testing-library/react';
import useCounterStore from '../../store/counter';

describe('useCounterStore', () => {
  beforeEach(() => {
    const counterState = useCounterStore.getState();

    act(() => {
      counterState.reset();
    });
  });

  it('Should be initialized with 0', () => {
    const counterState = useCounterStore.getState();

    expect(counterState.count).toBe(0);
  });

  it('Should be incrementing the counter', () => {
    act(() => {
      useCounterStore.getState().increment();
      useCounterStore.getState().increment();
    });

    const counterState = useCounterStore.getState();
    expect(counterState.count).toBe(2);
  });

  it('Should be decrementing the counter', () => {
    act(() => {
      useCounterStore.getState().increment();
      useCounterStore.getState().increment();
      useCounterStore.getState().increment();
      useCounterStore.getState().increment();
      useCounterStore.getState().decrement();
    });

    const counterState = useCounterStore.getState();
    expect(counterState.count).toBe(3);
  });

  it('Should be resetting the counter', () => {
    act(() => {
      useCounterStore.getState().increment();
      useCounterStore.getState().increment();
      useCounterStore.getState().increment();
    });

    expect(useCounterStore.getState().count).toBe(3);

    act(() => {
      useCounterStore.getState().reset();
    });

    const counterState = useCounterStore.getState();
    expect(counterState.count).toBe(0);
  });
});
