import { ArrowRight } from 'lucide-react';

const WhyDBlink = () => {
  return (
    <div className="p-8 bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-[85%] w-full">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4 text-purple-500">Why DBlink?</h1>
          <p className="text-lg mb-8">
            We know the unique challenges faced by nonprofits with small teams. Our customized services ensure that you get the support you need to elevate your fundraising efforts. By choosing DBlink Engage, you're partnering with a team dedicated to your mission and success.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex items-start gap-2">
            <ArrowRight className="text-purple-500 mt-1 w-12 h-12 font-extrabold" />
            <div>
              <strong>Proven success:</strong> Our clients, like Tumo and Plaid Dog Recording, have seen significant growth and engagement through our tailored strategies.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="text-purple-500 mt-1 w-12 h-12 font-extrabold" />
            <div>
              <strong>Expert guidance:</strong> Benefit from our extensive experience and innovative solutions that are customized to fit your unique fundraising needs.
            </div>
          </div>
          <div className="flex items-start gap-2 ">
            <ArrowRight className="text-purple-500 mt-1 w-12 h-12 font-extrabold" />
            <div>
              <strong>Continuous support:</strong> We are with you every step of the way, from that initial strategy consultation to post-campaign analysis.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-600 text-white p-8 rounded-lg text-left w-full max-w-[85%] mt-8">
        <h2 className="lg:text-4xl text-3xl font-bold mb-4">Make your mission our priority</h2>
        <p className="mb-8 lg:text-xl text-lg">
          Get in touch now to find out how we can help you achieve your goals. Whether you need support for a single campaign or ongoing management, <strong>DBlink Engage</strong> is here to make a difference.
        </p>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-sm">Contact us</button>
      </div>
    </div>
  );
};

export default WhyDBlink;
