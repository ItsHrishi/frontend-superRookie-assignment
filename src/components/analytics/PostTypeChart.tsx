import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    type: 'Reels',
    likes: 2400,
    comments: 800,
    shares: 1200,
  },
  {
    type: 'Static',
    likes: 1800,
    comments: 500,
    shares: 900,
  },
  {
    type: 'Carousel',
    likes: 3200,
    comments: 1100,
    shares: 1600,
  },
];

const PostTypeChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="likes" fill="#EC4899" name="Likes" />
          <Bar dataKey="comments" fill="#6366F1" name="Comments" />
          <Bar dataKey="shares" fill="#10B981" name="Shares" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default PostTypeChart;