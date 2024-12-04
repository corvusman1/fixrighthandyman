import { Shield, Clock, ThumbsUp, Award } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed professionals you can trust with your home",
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "We value your time and always arrive within the scheduled window",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee on all our services",
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Years of experience in professional handyman services",
    },
  ];

  return (
    <div className="py-24 bg-accent">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We take pride in delivering exceptional handyman services with professionalism and expertise
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};