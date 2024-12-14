import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

function CommentThread() {
  const [comments, setComments] = useState([]);

  const simulatedComments = [
    {
      id: 1,
      user: 'Mohammed Salih',
      avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
      text: 'nice app.',
      likes: 10,
      replies: [
        {
          id: 2,
          user: 'Amaljith',
          avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
          text: 'yeah  this app is good lol.',
          likes: 5,
          replies: [],
        },
      ],
    },
    {
      id: 3,
      user: 'Mueenudheen',
      avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid',
      text: 'wonderful.',
      likes: 15,
      replies: [],
    },
  ];

  useEffect(() => {
    setComments(simulatedComments);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentThread;
