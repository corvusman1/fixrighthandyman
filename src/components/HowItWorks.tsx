import { CheckCircle, Calendar, Home } from "lucide-react";

const steps = [
  {
    title: "Choose Your Service",
    description: "Select the service you need from our wide range of offerings",
    icon: CheckCircle,
  },
  {
    title: "Book Appointment",
    description: "Pick a date and time that works best for you",
    icon: Calendar,
  },
  {
    title: "Get It Done",
    description: "Our professional handyman will arrive and complete the job",
    icon: Home,
  },
];

export const HowItWorks = () => {
  return (
    <div className="py-24 bg-accent">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};