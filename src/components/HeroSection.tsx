
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="campaign" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              🌟 Education Campaign
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Empowering Dreams Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Free Education</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every child deserves the opportunity to learn, grow, and reach their full potential. 
              Join us in breaking the cycle of poverty through education. Together, we can transform 
              lives, one child at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToDonate}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Donate Now
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-green-400 shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=600&fit=crop&crop=face"
                alt="Children learning"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Children Helped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
