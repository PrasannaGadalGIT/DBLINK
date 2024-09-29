import { Star } from 'lucide-react';

const StarRating = () => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="text-yellow-500 w-8 h-8" />
      ))}
    </div>
  );
};

export default StarRating;
