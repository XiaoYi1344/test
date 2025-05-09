import { useState, useEffect } from 'react';

function Blog() {
  // Khai báo state cho posts và comments
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  // useEffect để fetch dữ liệu cho posts và comments
  useEffect(() => {
    // Giả lập fetch API cho posts
    const fetchPosts = () =>
      Promise.resolve({ posts: ['Post 1', 'Post 2', 'Post 3'] });

    // Giả lập fetch API cho comments
    const fetchComments = () =>
      Promise.resolve({ comments: ['Nice post!', 'Great read!', 'Very helpful!'] });

    // Fetch dữ liệu cho posts và comments đồng thời
    fetchPosts().then((response) => {
      setPosts(response.posts); // Cập nhật posts
    });

    fetchComments().then((response) => {
      setComments(response.comments); // Cập nhật comments
    });
  }, []); // [] là dependencies array, effect chỉ chạy 1 lần khi component mount

  return (
    <div>
      <h1>Posts:</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>

      <h2>Comments:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
