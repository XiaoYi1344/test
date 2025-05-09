import { useState, useEffect } from 'react';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Giả lập fetch API
    const fetchPosts = () =>
      Promise.resolve({ posts: ['Post 1', 'Post 2'] });

    fetchPosts().then((response) => {
      setPosts(response.posts); // Chỉ cập nhật posts
      setComments(response.comments); // Chỉ cập nhật comments
    });
  }, []);

  return (
    <div>
      <h1>Posts: {posts.join(', ')}</h1>
      <h2>Comments: {comments}</h2>
    </div>
  );
}

export default Blog;