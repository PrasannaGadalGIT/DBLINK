import { FC } from 'react';
import { Facebook, Twitter, Mail, Linkedin, Instagram ,MessageCircle} from 'lucide-react';
import { Volume2, UserCheck, DollarSign, Layout } from 'lucide-react';

import Image from 'next/image';
import featuredCampaign from "../public/featuredCampaign.jpg";
const services = [
  {
    icon: <Volume2 className="w-8 h-8 text-purple-600" />,
    title: 'Strategic campaign management',
  },
  {
    icon: <UserCheck className="w-8 h-8 text-purple-600" />,
    title: 'Comprehensive project onboarding',
  },
  {
    icon: <DollarSign className="w-8 h-8 text-purple-600" />,
    title: 'Holistic fundraising strategy',
  },
  {
    icon: <Layout className="w-8 h-8 text-purple-600" />,
    title: 'Creative execution',
  },
 
];

const Campaign: FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="bg-purple-700 shadow-lg">
        <div className="container mx-auto py-8 px-4 text-center">
          <h1 className="lg:text-5xl font-extrabold text-3xl">Campaign Page</h1>
          <p className="mt-4 text-xl text-gray-200">
            “Always give without remembering and always receive without forgetting.”
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-10 px-4 flex flex-col lg:flex-row items-center">
        <Image
          src={featuredCampaign}
          alt="Featured Image"
          className="w-1/2 h-auto rounded-full shadow-xl lg:mr-8 mb-3"
        />
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="lg:text-5xl font-bold mb-4 text-purple-500 text-3xl">About the Campaign</h2>
          <p className="text-xl text-gray-300 mb-6">
            This campaign aims to bring significant changes in the community by addressing urgent needs and providing sustainable solutions. We are committed to making a lasting impact through collaborative efforts and generous donations. Join us in making a difference and be a part of this transformative journey.
          </p>
          <p className="text-xl text-white font-semibold">
            Join us in making a difference by donating today!
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
{/*Fundraising Campaign*/}
      <section className="py-12 bg-gray-900 text-center">
      <div className="flex flex-col items-center mt-4 mb-8 px-4 sm:px-8 lg:px-12">
      <h2 className="lg:text-4xl font-bold text-center mb-4 text-3xl">
      Launch digital fundraising campaigns without growing your team or budgets.
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        Our comprehensive services include strategic campaign management, creative assets, and ongoing support, ensuring your fundraising efforts are effective and impactful.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center w-40 md:w-48 lg:w-56">
            {service.icon}
            <h3 className="mt-4 lg:text-xl text:lg font-medium">{service.title}</h3>
          </div>
        ))}
      </div>
      </div>
    </section>
      {/* Featured Campaigns */}
      <section className="container mx-auto py-4 px-4">
        <h2 className="lg:text-5xl font-bold mb-6 text-center text-purple-500 text-3xl ">Featured Campaigns</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-black rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 sm:max-w-sm mx-auto">
            <video
              src="/kidCamp.mp4"
              autoPlay
              loop
              muted
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-500">Children's Education Fund</h3>
              <p className="mt-2 text-gray-700">Supporting underprivileged children to access quality education.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white text-black rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 sm:max-w-sm mx-auto">
            <video
              src="/bloodCamp.mp4"
              autoPlay
              loop
              muted
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-500">Blood Donation Drive</h3>
              <p className="mt-2 text-gray-700">Join our efforts in saving lives through regular blood donations.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white text-black rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 sm:max-w-sm mx-auto">
            <video
              src="/clothCamp.mp4"
              autoPlay
              loop
              muted
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-500">Clothing for All</h3>
              <p className="mt-2 text-gray-700">Providing warm clothing to the homeless and those in need.</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white text-black rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 sm:max-w-sm mx-auto">
            <video
              src="/plantCamp.mp4"
              autoPlay
              loop
              muted
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-500">Tree Planting Initiative</h3>
              <p className="mt-2 text-gray-700">Help us combat climate change by planting trees in local communities.</p>
            </div>
          </div>
        </div>
      </section>

{/* FAQ Section */}
<section className="container mx-auto py-10 px-4 flex flex-col md:flex-row">
  {/* Left Side */}
  <div className="w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0">
    <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
    <div className="mt-6">
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex items-center space-x-4">
        <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg">
          <MessageCircle size={24} /> {/* Updated chat icon */}
        </div>
        <p className="text-gray-700 text-lg">We would like to chat with you.</p>
      </div>
    </div>
  </div>

  {/* Right Side */}
  <div className="w-full md:w-2/3">
    {/* Search Bar */}
    <div className="relative mb-10">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full px-4 py-2 border rounded-md text-lg"
      />
      <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
        🔍
      </span>
    </div>

    {/* FAQ Items */}
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h3 className="lg:text-2xl text-xl font-semibold mb-2">How can I support a campaign?</h3>
        <p className="lg:text-lg text-sm text-gray-500">
          You can support a campaign by making a donation through our website or sharing the campaign with your network to raise awareness.
        </p>
      </div>
      <div className="border-b pb-4">
        <h3 className="lg:text-2xl text-xl font-semibold mb-2">What types of campaigns do you run?</h3>
        <p className="lg:text-lg text-sm text-gray-500">
          We run various campaigns focused on community development, education, health care, and environmental conservation. Each campaign aims to address specific issues and create positive change.
        </p>
      </div>
      <div className="border-b pb-4">
        <h3 className="lg:text-2xl text-xl font-semibold mb-2">Can I create my own campaign?</h3>
        <p className="lg:text-lg text-sm text-gray-500">
          Yes! We encourage individuals and organizations to create their own campaigns. Please contact us for more information on how to get started.
        </p>
      </div>
      <div className="border-b pb-4">
        <h3 className="lg:text-2xl text-xl font-semibold mb-2">How do you ensure transparency in your campaigns?</h3>
        <p className="lg:text-lg text-sm text-gray-500">
          We are committed to transparency and provide regular updates on campaign progress, including financial reports and impact assessments. You can find this information on our website.
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Campaign;
