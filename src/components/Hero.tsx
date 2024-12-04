import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-accent py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
          alt="Handyman Services"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Professional Handyman Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Expert TV mounting, furniture assembly, and more. Quality service guaranteed.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Book Now
            </Button>
            <Button variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};