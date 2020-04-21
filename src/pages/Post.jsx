import React from 'react';
import { useParams } from 'react-router';

const Post = () => {
  const params = useParams();

  return <h1>Here is Post {params.id}</h1>;
};

export default Post;
