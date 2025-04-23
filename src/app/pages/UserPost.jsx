import React from 'react';
import PropTypes from 'prop-types';
import { MdClose, MdFavoriteBorder, MdFavorite, MdChatBubbleOutline, MdShare } from 'react-icons/md';

const UserPost = ({ post, onClose, isOpen, userData }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(post?.likes || 0);
  const [comments, setComments] = React.useState(post?.comments || []);
  const [newComment, setNewComment] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${userData.username}'s post`,
          text: post.caption || 'Check out this post!',
          url: window.location.href
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (!isOpen) return null;

  const handleLike = async () => {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // In a real app, you would make an API call here
      // const response = await fetch('/api/posts/${post.id}/like', { method: 'POST' });
      
      setIsLiked(!isLiked);
      setLikes(prev => isLiked ? prev - 1 : prev + 1);
    } catch (error) {
      console.error('Error liking post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmitting) return;

    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In a real app, you would make an API call here
      // const response = await fetch('/api/posts/${post.id}/comment', {
      //   method: 'POST',
      //   body: JSON.stringify({ content: newComment })
      // });

      const newCommentObj = {
        id: Date.now(),
        content: newComment,
        user: userData,
        timestamp: 'Just now'
      };

      setComments(prev => [newCommentObj, ...prev]);
      setNewComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex">
      <div className="w-full h-full flex flex-col md:flex-row relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
          <button onClick={onClose} className="text-gray-700 hover:text-gray-900">
            <MdClose className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <img
              src={userData.profileImage}
              alt={userData.username}
              className="w-7 h-7 rounded-full object-cover border border-gray-200"
            />
            <span className="text-gray-900 text-sm font-medium">{userData.username}</span>
          </div>
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>
        {/* Desktop Close button */}
        <button 
          onClick={onClose}
          className="hidden md:block absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-900 bg-white p-2 rounded-full shadow-sm transition-all duration-200 hover:shadow-md"
        >
          <MdClose className="w-6 h-6" />
        </button>

        {/* Image section */}
        <div className="w-full md:w-[65%] bg-gray-50 flex items-center justify-center h-[60vh] md:h-full p-0 mt-[52px] md:mt-0">
          <img
            src={post.imageUrl}
            alt="Post"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content section */}
        <div className="w-full md:w-[35%] flex flex-col bg-white md:bg-white/90 md:border-l border-gray-100 backdrop-blur-md h-[40vh] md:h-full overflow-y-auto relative bottom-0 left-0 right-0">

          {/* Mobile Post Info */}
          <div className="md:hidden px-4 py-3 border-b border-gray-200 bg-white sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <button 
                  onClick={handleLike} 
                  className="hover:scale-110 transition-transform duration-200 p-1"
                >
                  {isLiked ? (
                    <MdFavorite className="w-7 h-7 text-rose-500" />
                  ) : (
                    <MdFavoriteBorder className="w-7 h-7 text-gray-800" />
                  )}
                </button>
                <button className="hover:scale-110 transition-transform duration-200 p-1">
                  <MdChatBubbleOutline className="w-7 h-7 text-gray-800" />
                </button>
                <button 
                  onClick={handleShare}
                  className="hover:scale-110 transition-transform duration-200 p-1"
                >
                  <MdShare className="w-7 h-7 text-gray-800" />
                </button>
              </div>
            </div>
            <p className="font-semibold text-sm mt-2">{likes.toLocaleString()} likes</p>
          </div>
          {/* Desktop Header */}
          <div className="hidden md:flex items-center gap-3 p-3 border-b">
            <img
              src={userData.profileImage}
              alt={userData.username}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">{userData.username}</p>
              <p className="text-xs text-gray-500">{userData.title}</p>
            </div>
          </div>

          {/* Comments section */}
          <div className="flex-1 px-4 py-3 overflow-y-auto" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d1d5db transparent'
          }}>
            <style>
              {`
                ::-webkit-scrollbar {
                  width: 6px;
                }
                ::-webkit-scrollbar-track {
                  background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                  background-color: #d1d5db;
                  border-radius: 3px;
                }
              `}
            </style>
            {/* Caption */}
            <div className="flex gap-3 mb-4">
              <img
                src={userData.profileImage}
                alt={userData.username}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">
                  <span className="font-semibold">{userData.username}</span>{' '}
                  {post.caption}
                </p>
                <p className="text-xs text-gray-500 mt-1">{post.timestamp}</p>
              </div>
            </div>

            {/* Comments */}
            {comments.map(comment => (
              <div key={comment.id} className="flex gap-3 mb-4">
                <img
                  src={comment.user.profileImage}
                  alt={comment.user.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">{comment.user.username}</span>{' '}
                    {comment.content}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{comment.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:block border-t p-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <button 
                  onClick={handleLike} 
                  className="hover:scale-110 transition-transform duration-200 p-1"
                >
                  {isLiked ? (
                    <MdFavorite className="w-7 h-7 text-rose-500" />
                  ) : (
                    <MdFavoriteBorder className="w-7 h-7 text-gray-800" />
                  )}
                </button>
                <button className="hover:scale-110 transition-transform duration-200 p-1">
                  <MdChatBubbleOutline className="w-7 h-7 text-gray-800" />
                </button>
                <button 
                  onClick={handleShare}
                  className="hover:scale-110 transition-transform duration-200 p-1"
                >
                  <MdShare className="w-7 h-7 text-gray-800" />
                </button>
              </div>
            </div>
            <p className="font-semibold text-sm mt-2">{likes.toLocaleString()} likes</p>
            <p className="text-xs text-gray-500 mt-1">Posted {post.timestamp}</p>
          </div>

          {/* Comment input */}
          <form onSubmit={handleComment} className="sticky bottom-0 border-t border-gray-200 px-4 py-2 flex gap-2 bg-white shadow-sm">
            <div className="relative flex-1">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full text-sm py-2 px-3 focus:outline-none bg-gray-50 rounded-full placeholder-gray-400 transition-all duration-200 focus:ring-1 focus:ring-gray-300"
              disabled={isSubmitting}
            />
            </div>
            <button
              type="submit"
              disabled={!newComment.trim() || isSubmitting}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${newComment.trim() && !isSubmitting
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            >
              {isSubmitting ? '...' : 'Post'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

UserPost.propTypes = {
  post: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    caption: PropTypes.string,
    timestamp: PropTypes.string,
    likes: PropTypes.number,
  }).isRequired,
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default UserPost;
