import { BarChart3 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-dark-100 border-b border-gray-200 dark:border-dark-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-primary dark:text-primary-light" />
            <span className="text-2xl font-bold text-primary dark:text-primary-light">
              SocialMetrics
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;