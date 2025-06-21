
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Bright Futures</h1>
              <p className="text-sm text-gray-600">Education for Every Child</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#campaign" className="text-gray-700 hover:text-blue-600 transition-colors">Campaign</a>
            <a href="#impact" className="text-gray-700 hover:text-blue-600 transition-colors">Impact</a>
            <a href="#rewards" className="text-gray-700 hover:text-blue-600 transition-colors">Rewards</a>
            <a href="#leaderboard" className="text-gray-700 hover:text-blue-600 transition-colors">Supporters</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
