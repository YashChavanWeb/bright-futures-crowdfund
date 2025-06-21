
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Medal, Award, Calendar, Clock } from 'lucide-react';

const LeaderboardSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeFilter, setTimeFilter] = useState<'week' | 'month' | 'all'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('leaderboard-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const topDonors = {
    week: [
      { name: "Anonymous Hero", amount: 5000, rank: 1, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face", recent: true },
      { name: "Sarah Johnson", amount: 3000, rank: 2, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face", recent: true },
      { name: "Raj Patel", amount: 1200, rank: 3, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face", recent: false }
    ],
    month: [
      { name: "Dr. Priya Sharma", amount: 12000, rank: 1, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face", recent: false },
      { name: "Anonymous Hero", amount: 8000, rank: 2, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face", recent: true },
      { name: "Meera Singh", amount: 6000, rank: 3, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face", recent: false }
    ],
    all: [
      { name: "Anonymous Champion", amount: 25000, rank: 1, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face", recent: false },
      { name: "Priya Sharma", amount: 18000, rank: 2, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face", recent: false },
      { name: "Raj Patel", amount: 15000, rank: 3, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face", recent: false },
      { name: "Meera Singh", amount: 12000, rank: 4, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face", recent: false },
      { name: "Anonymous Hero", amount: 10000, rank: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face", recent: true }
    ]
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-orange-500" />;
    return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300";
    if (rank === 2) return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-300";
    if (rank === 3) return "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border-orange-300";
    return "bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 border-purple-200";
  };

  const getFilterIcon = (filter: string) => {
    switch (filter) {
      case 'week': return <Clock className="w-4 h-4" />;
      case 'month': return <Calendar className="w-4 h-4" />;
      default: return <Trophy className="w-4 h-4" />;
    }
  };

  const currentDonors = topDonors[timeFilter];

  return (
    <section id="leaderboard-section" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Amazing Supporters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the incredible individuals who are making Quizitt.com's educational revolution possible
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-purple-100">
            <div className="flex gap-2">
              {(['week', 'month', 'all'] as const).map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  variant={timeFilter === filter ? "default" : "ghost"}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    timeFilter === filter 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {getFilterIcon(filter)}
                  {filter === 'week' ? 'This Week' : filter === 'month' ? 'This Month' : 'All Time'}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <Card className={`bg-white/90 backdrop-blur-sm shadow-2xl border-0 rounded-3xl transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              Top Contributors
              <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1">
                {timeFilter === 'week' ? 'Weekly' : timeFilter === 'month' ? 'Monthly' : 'All Time'}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="space-y-6">
              {currentDonors.map((donor, index) => (
                <div 
                  key={`${donor.name}-${index}`}
                  className={`flex items-center justify-between p-6 rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                    donor.rank <= 3 
                      ? getRankColor(donor.rank)
                      : 'bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center justify-center w-16 h-16">
                      {getRankIcon(donor.rank)}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img 
                          src={donor.avatar} 
                          alt={donor.name}
                          className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-lg"
                        />
                        {donor.recent && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-800 flex items-center gap-2">
                          {donor.name}
                          {donor.recent && (
                            <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">Recent</Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          Empowered {Math.floor(donor.amount / 600)} children with education
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ₹{donor.amount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {donor.rank === 1 ? '🏆 Champion' : donor.rank === 2 ? '🥈 Hero' : donor.rank === 3 ? '🥉 Star' : 'Supporter'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">🌟 Join Our Community of Change-Makers!</h3>
              <p className="text-gray-600 mb-4">
                Every contribution, no matter the size, makes a real difference in a child's educational journey.
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-600">
                <span>💝 243 Total Supporters</span>
                <span>📚 1000+ Students Helped</span>
                <span>🌍 50+ Countries Reached</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeaderboardSection;
