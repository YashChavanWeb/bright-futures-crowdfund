
import { Book, Users, Heart } from 'lucide-react';

const ImpactSection = () => {
  return (
    <section id="impact" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Impact Matters</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how your contribution directly transforms lives and creates lasting change in communities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <Book className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Quality Education</h3>
            <p className="text-gray-600">
              Each child receives comprehensive education including books, supplies, and dedicated teaching
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Community Impact</h3>
            <p className="text-gray-600">
              Your donation strengthens entire communities by educating the next generation of leaders
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Breaking Cycles</h3>
            <p className="text-gray-600">
              Education breaks the cycle of poverty, creating opportunities for children and their families
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">₹600 = One Year of Free Education</h3>
          <p className="text-lg opacity-90">
            For just ₹600, you can provide a child with a full year of education, including books, 
            supplies, and access to qualified teachers. That's less than ₹2 per day to change a life forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
