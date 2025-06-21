
import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProgressSection from '@/components/ProgressSection';
import ImpactSection from '@/components/ImpactSection';
import QuizittSection from '@/components/QuizittSection';
import RewardsSection from '@/components/RewardsSection';
import LeaderboardSection from '@/components/LeaderboardSection';
import DonateSection from '@/components/DonateSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  const [totalRaised, setTotalRaised] = useState(145000);
  const [goal] = useState(500000);
  const [donorCount] = useState(243);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Header />
      <main>
        <HeroSection />
        <ProgressSection 
          totalRaised={totalRaised} 
          goal={goal} 
          donorCount={donorCount} 
        />
        <ImpactSection />
        <QuizittSection />
        <RewardsSection />
        <LeaderboardSection />
        <TestimonialsSection />
        <DonateSection onDonate={setTotalRaised} currentAmount={totalRaised} />
        <FAQSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
