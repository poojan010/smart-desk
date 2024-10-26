import { useState, useEffect } from 'react';

const useFetchPosts = (shouldFail?: boolean) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (shouldFail) {
          throw new Error('API request failed');
        }

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);

      } catch (err) {
        setError(err as Error); 
      } finally {
        setLoading(false);
      }
    };
  
    fetchPosts();

    return () => {
      setLoading(true)
      setPosts([])
      setError(null)
    }
  }, [shouldFail]);

  return { posts, loading, error };
};

export default useFetchPosts;
