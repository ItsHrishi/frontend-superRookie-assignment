import { motion } from "framer-motion";
import { Users, Heart, Share2, TrendingUp } from "lucide-react";
import { ThemeProvider } from "./contexts/ThemeContext";
// import Sidebar from './components/Sidebar';
import StatCard from "./components/StatCard";
import EngagementChart from "./components/EngagementChart";
import TopPosts from "./components/TopPosts";
import ChatPortal from "./components/ChatBot/ChatPortal";
import PostAnalytics from "./components/analytics/PostAnalytics";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import TeamSection from "./components/team/TeamSection";
import AppDescription from "./components/AppDescription";
import DataTable from "./components/analytics/DataTable";

function App() {
  const stats = [
    { title: "Total Followers", value: "24.5K", change: 12, Icon: Users },
    { title: "Engagement Rate", value: "5.2%", change: -2.3, Icon: Heart },
    { title: "Total Shares", value: "1.2K", change: 8.1, Icon: Share2 },
    { title: "Reach Growth", value: "+15.3%", change: 4.5, Icon: TrendingUp },
  ];

  return (
    <ThemeProvider>
      <div className="flex flex-col bg-gray-50 dark:bg-dark-200 min-h-screen transition-colors duration-200">
        {/* <Sidebar /> */}
        <Header />
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* <header className="mb-8">
              <div className="flex items-center gap-4">
                <motion.h1
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  Analytics Dashboard
                </motion.h1>
              </div>

              <motion.p
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-500 dark:text-gray-400 mt-1"
              >
                Track your social media performance
              </motion.p>
            </header> */}
            <AppDescription />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <EngagementChart />
                </motion.div>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <TopPosts />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-8">
              <PostAnalytics />
              <DataTable />
            </div>
            <TeamSection />
          </motion.div>
        </main>
        <Footer />
        <ChatPortal />
      </div>
    </ThemeProvider>
  );
}

export default App;
