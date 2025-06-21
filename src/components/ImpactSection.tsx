
import { useState, useEffect } from 'react';
import { BookOpen, Users, Heart, Zap } from 'lucide-react';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('impact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const impacts = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Gamified education that adapts to each student's pace and learning style for maximum engagement",
      color: "from-purple-500 to-purple-600",
      stat: "95%",
      statLabel: "Engagement Rate"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect students globally through collaborative learning and peer-to-peer knowledge sharing",
      color: "from-blue-500 to-blue-600",
      stat: "50+",
      statLabel: "Countries Reached"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Real-time assessment and personalized recommendations help students learn more effectively",
      color: "from-green-500 to-green-600",
      stat: "3x",
      statLabel: "Faster Learning"
    },
    {
      icon: Heart,
      title: "Accessible Education",
      description: "Breaking down barriers to quality education, making learning opportunities available to all children",
      color: "from-orange-500 to-orange-600",
      stat: "Free",
      statLabel: "For All Students"
    }
  ];

  return (
    <section id="impact-section" className="py-20 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Support Creates Real Impact</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every contribution powers our mission to revolutionize education through technology, 
            creating lasting change in how children learn and grow around the world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className={`group text-center space-y-6 p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${impact.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <impact.icon className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {impact.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {impact.description}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className={`text-2xl font-bold bg-gradient-to-r ${impact.color} bg-clip-text text-transparent`}>
                  {impact.stat}
                </div>
                <div className="text-xs text-gray-500 font-medium">{impact.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-6">₹600 = Revolutionary Learning Experience</h3>
          <p className="text-xl opacity-90 leading-relaxed max-w-4xl mx-auto">
            Your donation of just ₹600 provides a child with access to cutting-edge educational technology, 
            personalized learning paths, interactive assessments, and a supportive learning community for an entire year. 
            That's transformative education for less than ₹2 per day.
          </p>
          <div className="flex justify-center items-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold">365</div>
              <div className="text-sm opacity-80">Days of Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Platform Access</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm opacity-80">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
