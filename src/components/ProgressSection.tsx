
import { Progress } from '@/components/ui/progress';

interface ProgressSectionProps {
  totalRaised: number;
  goal: number;
  donorCount: number;
}

const ProgressSection = ({ totalRaised, goal, donorCount }: ProgressSectionProps) => {
  const percentage = (totalRaised / goal) * 100;
  const childrenHelped = Math.floor(totalRaised / 600);

  return (
    <section className="py-12 px-4 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Campaign Progress</h2>
            <p className="text-gray-600">Every donation brings us closer to our goal</p>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <Progress 
                value={percentage} 
                className="h-6 bg-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" 
                   style={{ width: `${Math.min(percentage, 100)}%` }}>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">₹{totalRaised.toLocaleString()}</div>
                <div className="text-gray-600">Raised</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">₹{goal.toLocaleString()}</div>
                <div className="text-gray-600">Goal</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">{donorCount}</div>
                <div className="text-gray-600">Supporters</div>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
              <div className="text-2xl font-bold text-gray-800 mb-2">{childrenHelped} Children</div>
              <div className="text-gray-600">already receiving free education thanks to your support!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
