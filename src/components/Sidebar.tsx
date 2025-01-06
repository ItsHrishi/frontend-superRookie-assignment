import React from 'react';
import { BarChart3, Users, MessageCircle, Share2, Home, Settings, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Audience' },
    { icon: MessageCircle, label: 'Engagement' },
    { icon: Share2, label: 'Share' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="bg-white dark:bg-dark-100 h-screen w-64 border-r border-gray-200 dark:border-dark-300 flex flex-col transition-colors duration-200">
      <div className="p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          SocialMetrics
        </h1>
        <ThemeToggle />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-dark-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors">
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-dark-300">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;