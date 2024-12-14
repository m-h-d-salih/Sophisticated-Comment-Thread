import React, { useState } from 'react';

function CommentCard({ comment }) {
  const [isReplying, setIsReplying] = useState(false);
  const [likes, setLikes] = useState(comment.likes);
  const [replies, setReplies] = useState(comment.replies);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleReplyToggle = () => {
    setIsReplying(!isReplying);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4 border border-gray-200">
      <div className="flex items-center mb-2">
        <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full mr-3" />
        <strong className="text-lg">{comment.user}</strong>
      </div>
      <p className="text-gray-700 mb-2">{comment.text}</p>
      <div className="flex items-center space-x-4 mb-2">
        <button onClick={handleLike} className="text-blue-500 hover:text-blue-700">
          Like ({likes})
        </button>
        <button onClick={handleReplyToggle} className="text-blue-500 hover:text-blue-700">
          {isReplying ? 'Hide Replies' : 'Reply'}
        </button>
      </div>

      {isReplying && (
        <div className="pl-6 mt-2">
          <ReplyForm onSubmit={(replyText) => setReplies([...replies, { user: 'You', avatar: 'avatar3.jpg', text: replyText, likes: 0 }])} />
        </div>
      )}

      {replies.length > 0 && (
        <div className="mt-2">
          {replies.map((reply, index) => (
            <CommentCard key={index} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}

function ReplyForm({ onSubmit }) {
  const [replyText, setReplyText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyText) {
      onSubmit(replyText);
      setReplyText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="Write a reply..."
        className="border p-2 rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Reply
      </button>
    </form>
  );
}

export default CommentCard;
