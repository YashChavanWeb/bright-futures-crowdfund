
import { Heart, Users, Book } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold">Bright Futures</h3>
            </div>
            <p className="text-gray-300">
              Empowering children through education and creating brighter futures for communities around the world.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#campaign" className="hover:text-white transition-colors">Campaign</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="#rewards" className="hover:text-white transition-colors">Rewards</a></li>
              <li><a href="#leaderboard" className="hover:text-white transition-colors">Supporters</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="text-gray-300 space-y-2">
              <p>📧 hello@brightfutures.org</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Mumbai, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex justify-center items-center space-x-8 mb-4">
            <div className="flex items-center space-x-2 text-blue-400">
              <Book className="w-5 h-5" />
              <span>500+ Children Educated</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Users className="w-5 h-5" />
              <span>243 Active Supporters</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Heart className="w-5 h-5" />
              <span>₹145,000 Raised</span>
            </div>
          </div>
          <p className="text-gray-400">
            © 2024 Bright Futures. Made with ❤️ for children's education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
