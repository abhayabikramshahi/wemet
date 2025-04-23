import React, { useState, useCallback, useMemo, useRef } from 'react';
import { FaRegHeart, FaHeart, FaRegCommentDots, FaShare } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useVirtualizer } from '@tanstack/react-virtual';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import debounce from 'lodash/debounce';
import ShareModal from './ShareModal';

// Images model
import Couples from '../post user images/couples.png';
import Elon from '../post user images/elon.png';
import Mark from '../post user images/mark.png';
import Nature from '../post user images/nature.png';
import Laptop from '../post user images/laptop.png';
import Mark2 from '../post user images/mark(2).png';

// Default avatar for fallback
const DEFAULT_AVATAR = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIH cytok="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#E5E7EB"/><path d="M100 120C85.1472 120 72.5999 107.453 72.5999 92.6001C72.5999 77.7473 85.1472 65.2001 100 65.2001C114.853 65.2001 127.4 77.7473 127.4 92.6001C127.4 107.453 114.853 120 100 120Z" fill="#94A3B3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200ZM100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" fill="#94A3B3"/></svg>';

const dummyPosts = [
  {
    id: 1,
    username: 'Ajay Gautam',
    handle: '@ajaygautam',
    avatar: DEFAULT_AVATAR, // Could use a custom avatar if available
    content: 'Just got back from an amazing hike in Raskot! 🌄',
    image: Nature, // Using Nature image for the hike post
    likes: 12,
    comments: [
      {
        id: 1,
        username: 'Mark Zuckerberg',
        avatar: Mark2, // Using Mark2 for comment avatar
        content: 'Looks amazing! Which trail did you take?',
        likes: 2,
        replies: [
          {
            id: 1,
            username: 'Ajay Gautam',
            avatar: DEFAULT_AVATAR,
            content: 'Took the eastern trail, it was breathtaking!',
            likes: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    username: 'Sita Kumari',
    handle: '@sitakumari',
    avatar: DEFAULT_AVATAR,
    content: 'Trying out a new food recipe 🍜 Anyone else love cooking?',
    image: null, // No image for this post
    likes: 8,
    comments: [],
  },
  {
    id: 3,
    username: 'Mark Zuckerberg',
    handle: '@zuck',
    avatar: Mark, // Using Mark for post avatar
    content: "Just finished coding a new AI feature. Can't wait to ship it 🚀",
    image: Laptop, // Using Laptop image for coding post
    likes: 25,
    comments: [],
  },
  {
    id: 4,
    username: 'Elon Musk',
    handle: '@elonmusk',
    avatar: Elon, // Using Elon image for avatar
    content: 'Mars is looking closer than ever. Starship test successful! 🔴🪐',
    image: null, // No image for this post
    likes: 150,
    comments: [],
  },
  {
    id: 5,
    username: 'Alex & Priya',
    handle: '@alexandpriya',
    avatar: Couples, // Using Couples image for avatar
    content: 'Celebrating 3 years of love in Goa 🌊❤️ #CoupleGoals',
    image: Couples, // Using Couples image for post
    likes: 30,
    comments: [],
  },
];

// Memoized Comment component
const Comment = React.memo(
  ({
    comment,
    onLike,
    onReplyToggle,
    showReplyForm,
    onAddReply,
    newReply,
    onReplyChange,
  }) => (
    <div className="flex items-start gap-3">
      <LazyLoadImage
        src={comment.avatar}
        alt={comment.username}
        effect="blur"
        className="w-8 h-8 rounded-full object-cover"
        placeholder={<div className="w-8 h-8 rounded-full bg-gray-200" />}
        onError={(e) => {
          e.target.src = DEFAULT_AVATAR;
        }}
      />
      <div className="flex-1">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <h5 className="font-medium text-sm">{comment.username}</h5>
          <p className="text-sm text-gray-600">{comment.content}</p>
        </div>
        <div className="flex items-center gap-4 mt-1 ml-2">
          <button
            className="text-xs text-gray-500 hover:text-blue-500 transition duration-200"
            onClick={() => onLike(comment.id)}
          >
            {comment.likes} likes
          </button>
          <button
            className="text-xs text-gray-500 hover:text-blue-500 transition duration-200"
            onClick={() => onReplyToggle(comment.id)}
          >
            Reply
          </button>
        </div>

        {showReplyForm && (
          <form onSubmit={onAddReply} className="mt-2">
            <input
              type="text"
              value={newReply}
              onChange={(e) => onReplyChange(e.target.value)}
              placeholder="Write a reply..."
              className="w-full px-3 py-1 text-sm rounded-full border focus:outline-none focus:border-blue-500"
            />
          </form>
        )}
      </div>
    </div>
  )
);

// Memoized Post component
const Post = React.memo(
  ({
    post,
    onLike,
    onComment,
    onShare,
    showComments,
    onExpandImage,
    onCommentLike,
    onReplyToggle,
    showReplies,
    onAddReply,
    newReply,
    onReplyChange,
  }) => (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <LazyLoadImage
            src={post.avatar}
            alt={post.username}
            effect="blur"
            className="w-10 h-10 rounded-full object-cover"
            placeholder={<div className="w-10 h-10 rounded-full bg-gray-200" />}
            onError={(e) => {
              e.target.src = DEFAULT_AVATAR;
            }}
          />
          <div>
            <h4 className="font-semibold">{post.username}</h4>
            <p className="text-sm text-gray-500">{post.handle}</p>
          </div>
        </div>
        <p className="mt-3 text-gray-800">{post.content}</p>
      </div>

      {post.image && (
        <div className="relative">
          <div
            className="aspect-square w-full cursor-pointer overflow-hidden"
            onClick={() => onExpandImage(post.image)}
          >
            <LazyLoadImage
              src={post.image}
              alt="Post content"
              effect="blur"
              className="w-full h-full object-cover"
              threshold={100}
              placeholder={<div className="w-full h-full bg-gray-100" />}
              onError={(e) => {
                e.target.src = DEFAULT_AVATAR; // Fallback to default image
              }}
            />
          </div>
        </div>
      )}

      <div className="p-4 flex items-center justify-between border-t">
        <button
          onClick={() => onLike(post.id)}
          className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition duration-200"
        >
          {post.liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          <span>{post.likes || 0}</span>
        </button>
        <button
          onClick={() => onComment(post.id)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition duration-200"
        >
          <FaRegCommentDots />
          <span>{post.comments?.length || 0}</span>
        </button>
        <button
          onClick={() => onShare(post)}
          className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition duration-200"
        >
          <FaShare />
          <span>Share</span>
        </button>
      </div>

      {showComments && (
        <div className="p-4 border-t space-y-4">
          {post.comments?.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onLike={onCommentLike}
              onReplyToggle={onReplyToggle}
              showReplyForm={showReplies[comment.id]}
              onAddReply={(e) => onAddReply(post.id, comment.id, e)}
              newReply={newReply[comment.id] || ''}
              onReplyChange={(value) => onReplyChange(comment.id, value)}
            />
          ))}
        </div>
      )}
    </article>
  )
);

const PostFeed = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showComments, setShowComments] = useState({});
  const [showReplies, setShowReplies] = useState({});
  const [expandedImage, setExpandedImage] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState({});

  const parentRef = useRef(null);

  // Virtual list implementation
  const rowVirtualizer = useVirtualizer({
    count: posts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 400, // Estimated height of each post
    overscan: 5,
  });

  // Memoized handlers
  const handleLike = useCallback((postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const newLikes = post.liked ? post.likes - 1 : (post.likes || 0) + 1;
          return { ...post, liked: !post.liked, likes: newLikes };
        }
        return post;
      })
    );
  }, []);

  const handleCommentLike = useCallback((commentId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => ({
        ...post,
        comments: post.comments?.map((comment) => {
          if (comment.id === commentId) {
            const newLikes = comment.liked
              ? comment.likes - 1
              : (comment.likes || 0) + 1;
            return { ...comment, liked: !comment.liked, likes: newLikes };
          }
          return comment;
        }),
      }))
    );
  }, []);

  const handleComment = useCallback((postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  }, []);

  const handleShare = useCallback((post) => {
    setSelectedPost(post);
    setShowShareModal(true);
  }, []);

  // Debounced comment handler
  const debouncedCommentChange = useMemo(
    () => debounce((value) => setNewComment(value), 300),
    []
  );

  const handleAddComment = useCallback(
    (postId, event) => {
      event.preventDefault();
      if (!newComment.trim()) return;

      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            const comment = {
              id: Date.now(),
              username: 'Current User',
              avatar: DEFAULT_AVATAR,
              content: newComment,
              likes: 0,
              replies: [],
            };
            return {
              ...post,
              comments: [...(post.comments || []), comment],
            };
          }
          return post;
        })
      );

      setNewComment('');
    },
    [newComment]
  );

  const handleAddReply = useCallback(
    (postId, commentId, event) => {
      event.preventDefault();
      if (!newReply[commentId]?.trim()) return;

      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments.map((comment) => {
                if (comment.id === commentId) {
                  const reply = {
                    id: Date.now(),
                    username: 'Current User',
                    avatar: DEFAULT_AVATAR,
                    content: newReply[commentId],
                    likes: 0,
                  };
                  return {
                    ...comment,
                    replies: [...(comment.replies || []), reply],
                  };
                }
                return comment;
              }),
            };
          }
          return post;
        })
      );

      setNewReply((prev) => ({ ...prev, [commentId]: '' }));
    },
    [newReply]
  );

  const handleReplyChange = useCallback((commentId, value) => {
    setNewReply((prev) => ({ ...prev, [commentId]: value }));
  }, []);

  const handleReplyToggle = useCallback((commentId) => {
    setShowReplies((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  }, []);

  return (
    <div
      ref={parentRef}
      className="max-w-2xl mx-auto p-4 h-screen overflow-auto"
    >
      <div
        className="relative"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const post = posts[virtualRow.index];
          return (
            <div
              key={post.id}
              className="absolute top-0 left-0 w-full"
              style={{
                height: virtualRow.size,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <Post
                post={post}
                onLike={handleLike}
                onComment={handleComment}
                onShare={handleShare}
                showComments={showComments[post.id]}
                onExpandImage={setExpandedImage}
                onCommentLike={handleCommentLike}
                onReplyToggle={handleReplyToggle}
                showReplies={showReplies}
                onAddReply={handleAddReply}
                newReply={newReply}
                onReplyChange={handleReplyChange}
              />
              {showComments[post.id] && (
                <div className="p-4 border-t space-y-4">
                  <form
                    onSubmit={(e) => handleAddComment(post.id, e)}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => debouncedCommentChange(e.target.value)}
                      placeholder="Write a comment..."
                      className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
                    >
                      Post
                    </button>
                  </form>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showShareModal && (
        <ShareModal
          post={selectedPost}
          onClose={() => setShowShareModal(false)}
        />
      )}

      {expandedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            onClick={() => setExpandedImage(null)}
          >
            <IoMdClose />
          </button>
          <LazyLoadImage
            src={expandedImage}
            alt="Expanded post"
            effect="blur"
            className="max-w-full max-h-[90vh] object-contain"
            style={{ aspectRatio: '1200/630' }}
          />
        </div>
      )}
    </div>
  );
};

export default PostFeed;