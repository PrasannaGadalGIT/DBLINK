"use client";
import React, { useState } from 'react';

interface Review {
    name: string;
    email: string;
    review: string;
    profilePicture: string; // Store the image URL after upload
}

const Review: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>(() => {
        const storedReviews = localStorage.getItem('reviews');
        return storedReviews ? JSON.parse(storedReviews) : [];
    });
    const [name] = useState<string>('John Doe'); // Hard-coded name for example
    const [email] = useState<string>('john.doe@gmail.com'); // Changed email to gmail.com
    const [review, setReview] = useState<string>('');
    const [profilePicture, setProfilePicture] = useState<File | null>(null); // State for the file input

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (review && (profilePicture || profilePicture === null)) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newReview: Review = {
                    name,
                    email,
                    review,
                    profilePicture: reader.result as string, // Convert file to data URL
                };
                const updatedReviews = [...reviews, newReview];
                setReviews(updatedReviews);

                // Save reviews to local storage
                localStorage.setItem('reviews', JSON.stringify(updatedReviews));

                // Reset fields
                setReview('');
                setProfilePicture(null);
            };
            if (profilePicture) {
                reader.readAsDataURL(profilePicture); // Convert image file to base64
            } else {
                // Handle case where no new profile picture is uploaded
                const newReview: Review = {
                    name,
                    email,
                    review,
                    profilePicture: 'default-profile-pic-url', // Set a default profile picture URL if needed
                };
                const updatedReviews = [...reviews, newReview];
                setReviews(updatedReviews);
                localStorage.setItem('reviews', JSON.stringify(updatedReviews));
                setReview('');
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 text-white">
            {/* Review Form */}
            <div className="w-full max-w-6xl h-auto p-4 mb-6">
                <h1 className="text-4xl font-extrabold text-center mb-4 text-black">Customer Reviews</h1>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Share Your Feedback</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="file"
                            accept="image/*" // Only accept image files
                            className="w-full p-2 border border-purple-500 rounded mb-4 bg-gray-900 text-white"
                            onChange={(e) => setProfilePicture(e.target.files?.[0] || null)} // Handle file input
                        />
                        <textarea
                            placeholder="Write your review here..."
                            className="w-full p-2 border border-purple-500 rounded mb-4 bg-gray-900 text-white"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition duration-200"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="w-80% p-2">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">What Our Donors Say</h2>
                    <div>
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <div key={index} className="border-b border-purple-500 py-2 flex items-start">
                                    {review.profilePicture && (
                                        <img
                                            src={review.profilePicture}
                                            alt={`${review.name}'s profile`}
                                            style={{ width: '40px', height: '40px' }} // Use inline styles
                                            className="rounded-full mr-4"
                                        />
                                    )}
                                    <div>
                                        <p className="font-semibold">{review.name} ({review.email})</p>
                                        <p>{review.review}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet. Be the first to share your feedback!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
