import { renderHook } from '@testing-library/react-hooks';

import useFetchPosts from '@/hooks/useFetchPosts';

describe('useFetchPosts hook', () => {

    it('Loading should be true initially', () => {
      const { result } = renderHook(() => useFetchPosts());

      expect(result.current.loading).toBe(true)
    });

    it("Should fetch and set posts data", async () => {
      const { result, waitForNextUpdate } = renderHook(() => useFetchPosts());

      await waitForNextUpdate();

      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      expect(result.current.posts.length).toBeGreaterThan(0);
      expect(result.current.posts[0]).toHaveProperty('title');
    })

    it("Should fail and return error", async () => {
      const { result, waitFor } = renderHook(() => useFetchPosts(true));

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(result.current.error).not.toBeNull();
      });

      expect(result.current.error?.message).toBe('API request failed');
      expect(result.current.posts.length).toBe(0);
    })
    
    it('Should rerender and reset state values in cleanup function', async () => {
      const { result, rerender, waitForNextUpdate } = renderHook(
        ({ shouldFail }) => useFetchPosts(shouldFail),
        { initialProps: { shouldFail: false } }
      );

      expect(result.current.loading).toBe(true);
      expect(result.current.error).toBeNull();
      expect(result.current.posts.length).toBe(0);
  
      await waitForNextUpdate();
  
      // API Request Successful
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      expect(result.current.posts.length).toBeGreaterThan(0);
      expect(result.current.posts[0]).toHaveProperty('title');
      
  
      rerender({ shouldFail: true });
  
      expect(result.current.loading).toBe(true);
      expect(result.current.error).toBeNull();
      expect(result.current.posts.length).toBe(0);

      await waitForNextUpdate();

       // API Request failed
      expect(result.current.loading).toBe(false);
      expect(result.current.error).not.toBeNull();
      expect(result.current.posts.length).toBe(0);
      expect(result.current.error?.message).toBe('API request failed');

    });
  
  });