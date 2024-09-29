import StarRating from './StarRating';

interface ReviewProps {
  review: string;
  name: string;
  title: string;
}

const Review: React.FC<ReviewProps> = ({ review, name, title }) => {
  return (
    <div className="bg-purple-500 p-6 rounded-lg shadow-md">
      <StarRating />
      <p className="mt-4 text-white">{review}</p>
      <p className="mt-4 font-bold text-gray-800">{name}</p>
      <p className="text-gray-200">{title}</p>
    </div>
  );
};

export default Review;
