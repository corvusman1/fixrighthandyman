import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    location: "Los Angeles",
    rating: 5,
    text: "Excellent TV mounting service! They were professional, on time, and did a fantastic job. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    name: "Michael Chen",
    location: "Orange County",
    rating: 5,
    text: "Used their furniture assembly service for my entire apartment. Quick, efficient, and very reasonable prices.",
    date: "1 month ago",
  },
  {
    name: "Emily Rodriguez",
    location: "San Diego",
    rating: 5,
    text: "Great experience with their handyman service. Fixed multiple issues around my house in one visit. Will definitely use again!",
    date: "3 weeks ago",
  },
];

export const Reviews = () => {
  return (
    <div className="py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};