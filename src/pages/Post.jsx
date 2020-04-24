import React from 'react';
import { useParams, Navigate } from 'react-router';

const Post = () => {
  const params = useParams();

  if (!params.id.match(/\d+/)) {
    return <Navigate to="/404" />;
  }

  return <h1>Here is Post {params.id}</h1>;
};

export default Post;
