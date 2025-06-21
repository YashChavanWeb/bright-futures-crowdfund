
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donate');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors duration-300">Quizitt.com</h1>
              <p className="text-sm text-gray-600">Interactive Learning Platform</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('campaign')}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 relative group"
            >
              Campaign
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 relative group"
            >
              Impact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('rewards')}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 relative group"
            >
              Rewards
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('leaderboard')}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 relative group"
            >
              Supporters
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <Button
              onClick={handleDonateClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
