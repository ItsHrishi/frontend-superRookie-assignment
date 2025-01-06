import React from 'react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

const TopPosts = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
      engagement: { likes: "2.4k", comments: "89", shares: "156" },
      platform: "Instagram"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80",
      engagement: { likes: "1.8k", comments: "67", shares: "123" },
      platform: "Facebook"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&q=80",
      engagement: { likes: "3.2k", comments: "145", shares: "234" },
      platform: "Instagram"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&q=80",
      engagement: { likes: "3.2k", comments: "145", shares: "234" },
      platform: "Instagram"
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 dark:border-dark-300 dark:bg-dark-100">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Top Performing Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center gap-4 p-3  rounded-lg transition-colors">
            <img
              src={post.image}
              alt="Post thumbnail"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-200">{post.platform}</span>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{post.engagement.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{post.engagement.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{post.engagement.shares}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;