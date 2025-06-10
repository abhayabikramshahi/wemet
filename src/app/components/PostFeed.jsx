import React, { useState, useCallback, useMemo, useRef } from 'react';
import { FaRegHeart, FaHeart, FaRegCommentDots, FaShare } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useVirtualizer } from '@tanstack/react-virtual';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import debounce from 'lodash/debounce';
import ShareModal from './ShareModal';
import PostCreator from './PostCreator';

// Images model
import Couples from '../post user images/couples.png';
import Elon from '../post user images/elon.png';
import Mark from '../post user images/mark.png';
import Nature from '../post user images/nature.png';
import Laptop from '../post user images/laptop.png';
import Mark2 from '../post user images/mark(2).png';

// Default avatar for fallback
const DEFAULT_AVATAR = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMTAwIDEyMEM4NS4xNDcyIDEyMCA3Mi41OTk5IDEwNy40NTMgNzIuNTk5OSA5Mi42MDAxQzczLjU5OTkgNzcuNzQ3MyA4NS4xNDcyIDY1LjIwMDEgMTAwIDY1LjIwMDFDMTE0Ljg1MyA2NS4yMDAxIDEyNy40IDc3Ljc0NzMgMTI3LjQgOTIuNjAwMUMxMjcuNCAxMDcuNDUzIDExNC44NTMgMTIwIDEwMCAxMjBaIiBmaWxsPSIjOTRBM0IzIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDAgMjAwQzQ0Ljc3MTUgMjAwIDAgMTU1LjIyOCAwIDEwMEMwIDQ0Ljc3MTUgNDQuNzcxNSAwIDEwMCAwQzE1NS4yMjggMCAyMDAgNDQuNzcxNSAyMDAgMTAwQzIwMCAxNTUuMjI4IDE1NS4yMjggMjAwIDEwMCAyMDBaTTEwMCAxODBDMTQ0LjE4MyAxODAgMTgwIDE0NC4xODMgMTgwIDEwMEMxODAgNTUuODE3MiAxNDQuMTgzIDIwIDEwMCAyMEM1NS44MTcyIDIwIDIwIDU1LjgxNzIgMjAgMTAwQzIwIDE0NC4xODMgNTUuODE3MiAxODAgMTAwIDE4MFoiIGZpbGw9IiOSD0iIzk0QTNCMyIvPjwvc3ZnPg==';

const dummyPosts = [
  {
    id: 1,
    username: 'Ajay Gautam',
    handle: '@ajaygautam',
    avatar: DEFAULT_AVATAR,
    content: 'Just got back from an amazing hike in Raskot! 🌄',
    image: Nature,
    likes: 12,
    liked: false,
    comments: [
      {
        id: 1,
        username: 'Mark Zuckerberg',
        avatar: Mark2,
        content: 'Looks amazing! Which trail did you take?',
        likes: 2,
        liked: false,
        replies: [
          {
            id: 1,
            username: 'Ajay Gautam',
            avatar: DEFAULT_AVATAR,
            content: 'Took the eastern trail, it was breathtaking!',
            likes: 1,
            liked: false,
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
    image: null,
    likes: 8,
    liked: false,
    comments: [],
  },
  {
    id: 3,
    username: 'Mark Zuckerberg',
    handle: '@zuck',
    avatar: Mark,
    content: "Just finished coding a new AI feature. Can't wait to ship it 🚀",
    image: Laptop,
    likes: 25,
    liked: false,
    comments: [],
  },
  {
    id: 4,
    username: 'Elon Musk',
    handle: '@elonmusk',
    avatar: Elon,
    content: 'Mars is looking closer than ever. Starship test successful! 🔴🪐',
    image: null,
    likes: 150,
    liked: false,
    comments: [],
  },
  {
    id: 5,
    username: 'Alex & Priya',
    handle: '@alexandpriya',
    avatar: Couples,
    content: 'Celebrating 3 years of love in Goa 🌊❤️ #CoupleGoals',
    image: Couples,
    likes: 30,
    liked: false,
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
                e.target.src = DEFAULT_AVATAR;
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
          <span>{post.comments?.lengh || 0}</span>
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
        <div className="p-4 border-t space-y-4 overflow-y-auto">
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
  const [showComments, setShowComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [showReplies, setShowReplies] = useState({});
  const [newReply, setNewReply] = useState({});
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);
  const parentRef = useRef(null);

  const handleNewPost = (postContent, media) => {
    const newPost = {
      id: posts.length + 1,
      username: 'John Doe',
      handle: '@johndoe',
      avatar: DEFAULT_AVATAR,
      content: postContent,
      image: media ? URL.createObjectURL(media) : null,
      likes: 0,
      liked: false,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  // Virtual list implementation
  const rowVirtualizer = useVirtualizer({
    count: posts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 450,
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
    setShareModalOpen(true);
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
              liked: false,
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
      debouncedCommentChange('');
    },
    [newComment, debouncedCommentChange]
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
                    liked: false,
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
      setShowReplies((prev) => ({ ...prev, [commentId]: false }));
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
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Post Creator Component */}
      <div className="mb-6 sticky top-0 z-10 bg-white py-4">
        <PostCreator onPostCreated={handleNewPost} />
      </div>

      <div
        ref={parentRef}
        className="h-[calc(100vh-180px)] overflow-auto"
        style={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
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
                className="absolute top-0 left-0 w-full mb-4"
                style={{
                  height: virtualRow.size,
                  minHeight: 0, // Explicitly ensure no min-height
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
                  <div className="p-4 bg-white rounded-b-lg border-t space-y-4 mb-6">
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
      </div>

      {shareModalOpen && (
        <ShareModal
          isOpen={shareModalOpen}
          post={selectedPost}
          onClose={() => setShareModalOpen(false)}
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