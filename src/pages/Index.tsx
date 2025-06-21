
import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProgressSection from '@/components/ProgressSection';
import ImpactSection from '@/components/ImpactSection';
import RewardsSection from '@/components/RewardsSection';
import LeaderboardSection from '@/components/LeaderboardSection';
import DonateSection from '@/components/DonateSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [totalRaised, setTotalRaised] = useState(145000);
  const [goal] = useState(500000);
  const [donorCount] = useState(243);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <main>
        <HeroSection />
        <ProgressSection 
          totalRaised={totalRaised} 
          goal={goal} 
          donorCount={donorCount} 
        />
        <ImpactSection />
        <RewardsSection />
        <LeaderboardSection />
        <DonateSection onDonate={setTotalRaised} currentAmount={totalRaised} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
