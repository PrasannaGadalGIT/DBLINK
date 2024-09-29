import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyDblink from "@/components/WhyDblink";
import TrustedSection from "@/components/TrustedSection";
import Review from '@/components/Review';

const reviews = [
  {
    review: "Affordable and we’ve been very impressed with the customization features! We saved around 50% compared to using Classy--more budget for our cause.",
    name: "Kerri Christenson",
    title: "HopeLine",
  },
  {
    review: "We exceeded our fundraising goals for the year by 200% since we’ve implemented Donately as our fundraising tool. We still can’t believe how much easier fundraising has been.",
    name: "Jessica Del Valle",
    title: "Ibero American Action League",
  },
  {
    review: "DBlink is one of the best platforms for nonprofits on a budget! Not only is the platform cost-effective and user-friendly, but most important to us, it’s incredibly donor friendly.",
    name: "Teresa Sanders",
    title: "American Osteopathic Foundation",
  },
];
export const metadata: Metadata = {
  title: "Donation Blink",
  description: "Donation Blink application",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden"> {children}</main>
        <WhyDblink/>
        <div className=" bg-gray-900 py-12 px-4 mb-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Real results from real partners</h1>
        <p className="text-lg text-gray-400 mt-4">See how DBlink has helped organizations overcome real challenges and achieve extraordinary fundraising success. Real partners, real results.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-5xl  mx-auto lg:text-xl font-bold text-lg">
        {reviews.map((review, index) => (
          <Review
            key={index}
            review={review.review}
            name={review.name}
            title={review.title}
          />
        ))}
      </div>
    </div>
        <TrustedSection/>
        <Footer/>
      </body>
   
    </html>
  );
}
