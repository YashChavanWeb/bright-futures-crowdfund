
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

const RewardsSection = () => {
  const rewards = [
    {
      amount: 600,
      title: "Custom Cap",
      description: "Get a beautifully designed cap with our campaign logo and a thank you message.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      popular: true
    },
    {
      amount: 3000,
      title: "Custom T-Shirt",
      description: "Receive a premium quality t-shirt with exclusive design celebrating your contribution.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop",
      popular: false
    }
  ];

  return (
    <section id="rewards" className="py-16 px-4 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You Rewards</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Show your support and receive these beautiful tokens of appreciation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rewards.map((reward, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${reward.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {reward.popular && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-0">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src={reward.image} 
                    alt={reward.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-blue-600" />
                  {reward.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">₹{reward.amount.toLocaleString()}</div>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full">
                    Donate & Claim
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
