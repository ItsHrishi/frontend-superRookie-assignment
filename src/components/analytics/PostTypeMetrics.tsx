import React from 'react';
import { motion } from 'framer-motion';
import { Film, Image, Images, Heart, MessageCircle, Share } from 'lucide-react';

interface MetricCardProps {
  type: string;
  icon: React.ReactNode;
  metrics: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const MetricCard = ({ type, icon, metrics }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-white p-4 rounded-lg shadow-sm  dark:bg-dark-300 "
  >
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="font-medium dark:text-white">{type}</h3>
    </div>
    <div className="space-y-2 dark:text-gray-300">
      <div className="flex items-center justify-between text-sm ">
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4 text-pink-500" />
          <span>Likes</span>
        </div>
        <span className="font-medium">{metrics.likes.toLocaleString()}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4 text-indigo-500" />
          <span>Comments</span>
        </div>
        <span className="font-medium">{metrics.comments.toLocaleString()}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <Share className="w-4 h-4 text-emerald-500" />
          <span>Shares</span>
        </div>
        <span className="font-medium">{metrics.shares.toLocaleString()}</span>
      </div>
    </div>
  </motion.div>
);

const PostTypeMetrics = () => {
  const metrics = [
    {
      type: 'Reels',
      icon: <Film className="w-5 h-5 text-red-500" />,
      metrics: { likes: 2400, comments: 800, shares: 1200 },
    },
    {
      type: 'Static',
      icon: <Image className="w-5 h-5 text-purple-500" />,
      metrics: { likes: 1800, comments: 500, shares: 900 },
    },
    {
      type: 'Carousel',
      icon: <Images className="w-5 h-5 text-yellow-500" />,
      metrics: { likes: 3200, comments: 1100, shares: 1600 },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((item, index) => (
        <MetricCard
          key={item.type}
          {...item}
        />
      ))}
    </div>
  );
};

export default PostTypeMetrics;