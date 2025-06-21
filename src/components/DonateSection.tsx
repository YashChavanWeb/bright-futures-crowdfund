
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface DonateSectionProps {
  onDonate: (newTotal: number) => void;
  currentAmount: number;
}

const DonateSection = ({ onDonate, currentAmount }: DonateSectionProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const { toast } = useToast();

  const presetAmounts = [600, 1200, 3000, 6000, 12000];

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || amount < 100) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount (minimum ₹100)",
        variant: "destructive"
      });
      return;
    }

    // Simulate Razorpay payment
    toast({
      title: "Redirecting to Payment",
      description: "You will be redirected to Razorpay for secure payment processing",
    });

    // Simulate successful payment after 2 seconds
    setTimeout(() => {
      onDonate(currentAmount + amount);
      toast({
        title: "Thank You! 🎉",
        description: `Your donation of ₹${amount.toLocaleString()} has been received successfully!`,
      });
      setSelectedAmount(null);
      setCustomAmount('');
    }, 2000);
  };

  const getChildrenCount = (amount: number) => Math.floor(amount / 600);

  return (
    <section id="donate" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Make Your Donation</h2>
          <p className="text-lg opacity-90">
            Choose your contribution amount and help us provide free education to children
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">
              Secure Donation via Razorpay
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? "default" : "outline"}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`h-20 flex flex-col space-y-1 ${
                    selectedAmount === amount 
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white' 
                      : 'hover:bg-blue-50'
                  }`}
                >
                  <span className="font-bold">₹{amount.toLocaleString()}</span>
                  <span className="text-xs opacity-70">
                    {getChildrenCount(amount)} child{getChildrenCount(amount) > 1 ? 'ren' : ''}
                  </span>
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-gray-700">Custom Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter custom amount"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="100"
                />
              </div>
              {(customAmount && parseInt(customAmount) >= 600) && (
                <Badge className="bg-green-100 text-green-800">
                  This will help {getChildrenCount(parseInt(customAmount))} children get education for a year!
                </Badge>
              )}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Your Impact:</h3>
              <p className="text-gray-600">
                With your donation of ₹{(selectedAmount || parseInt(customAmount) || 0).toLocaleString()}, 
                you'll be providing {getChildrenCount(selectedAmount || parseInt(customAmount) || 0)} 
                {getChildrenCount(selectedAmount || parseInt(customAmount) || 0) === 1 ? ' child' : ' children'} 
                with free education for an entire year.
              </p>
            </div>

            <Button 
              onClick={handleDonate}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              disabled={!selectedAmount && !customAmount}
            >
              Donate Securely with Razorpay
            </Button>

            <div className="text-center space-y-2 text-sm text-gray-600">
              <p>🔒 Your donation is secure and encrypted</p>
              <p>📧 You'll receive a receipt via email</p>
              <p>💝 Tax benefits available under 80G</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DonateSection;
