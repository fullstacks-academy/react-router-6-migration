import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: '1', name: 'Post 1' },
  { id: '2', name: 'Post 2' },
  { id: '3', name: 'Post 3' },
];

const Posts = () => (
  <>
    <h1>Posts</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={post.id}>{post.name}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default Posts;
