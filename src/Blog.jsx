import { useState, useEffect } from 'react';

function Blog() {
  const [state, setState] = useState({
    posts: [],
    comments: [],
  });

  useEffect(() => {
    // Giả lập fetch API
    const fetchPosts = () =>
      Promise.resolve({ posts: ['Post 1', 'Post 2'] });

    fetchPosts().then((response) => {
      setState((prevState) => ({
        ...prevState, // Giữ nguyên comments
        posts: response.posts, // Cập nhật posts
      }));
    });
  }, []);

  return (
    <div>
      <h1>Posts: {state.posts.join(', ')}</h1>
      <h2>Comments: {state.comments.join(', ')}</h2>
    </div>
  );
}

export default Blog;