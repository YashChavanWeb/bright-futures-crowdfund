
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LeaderboardSection = () => {
  const topDonors = [
    { name: "Anonymous", amount: 15000, rank: 1 },
    { name: "Priya Sharma", amount: 12000, rank: 2 },
    { name: "Raj Patel", amount: 10000, rank: 3 },
    { name: "Meera Singh", amount: 8000, rank: 4 },
    { name: "Anonymous", amount: 7500, rank: 5 },
    { name: "Kavya Reddy", amount: 6000, rank: 6 },
    { name: "Arjun Kumar", amount: 5000, rank: 7 },
    { name: "Sneha Joshi", amount: 4500, rank: 8 }
  ];

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-100 text-yellow-800";
    if (rank === 2) return "bg-gray-100 text-gray-800";
    if (rank === 3) return "bg-orange-100 text-orange-800";
    return "bg-blue-100 text-blue-800";
  };

  return (
    <section id="leaderboard" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Amazing Supporters</h2>
          <p className="text-lg text-gray-600">
            Thank you to these incredible individuals who are making education possible for children
          </p>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-blue-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">
              🏆 Top Contributors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDonors.map((donor, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 hover:shadow-md ${
                    donor.rank <= 3 ? 'bg-gradient-to-r from-blue-50 to-green-50' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Badge className={`px-3 py-1 font-bold ${getRankColor(donor.rank)}`}>
                      {getRankBadge(donor.rank)}
                    </Badge>
                    <div>
                      <div className="font-semibold text-gray-800">{donor.name}</div>
                      <div className="text-sm text-gray-600">
                        Provided education for {Math.floor(donor.amount / 600)} children
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg text-green-600">
                      ₹{donor.amount.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center text-gray-600">
              <p>Join our community of supporters and help us reach our goal!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeaderboardSection;
