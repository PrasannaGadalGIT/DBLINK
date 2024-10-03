

import Image from 'next/image';

const ExploreEvent :React.FC= () => {
  const events = [
    {
      id: 1,
      image: '/cameragirl.jpg',
      title: 'Fandom',
      description: 'Capture the momentt of your favourite artist.',
    },
    {
      id: 2,
      image: '/concertMan.jpg',
      title: 'Concert',
      description: 'Experience live music and vibrant performances.',
    },
    {
      id: 3,
      image: '/standingWoman.jpg',
      title: 'Lady Singer',
      description: 'Empowerment events celebrating women in our community.',
    },
    {
      id: 4,
      image: '/guitarman.jpg',
      title: 'Guitar Man',
      description: 'Enjoy acoustic sessions and soulful tunes .Having a blissful night is what we want to provide',
    },
  ];

  return (
    <div className="bg-black min-h-screen text-yellow-300 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-center">Explore Event</h1>
      <p className="text-lg mb-2 text-center lg:w-5/6">
      The Explore Event is a vibrant celebration of culture, music, and creativity that brings people together from all walks of life. This unique gathering features a variety of activities,
       including live performances, art exhibitions, and interactive workshops that engage attendees. 
      </p>
      <p className='lg:text-2xl text-xl text-yellow-500 mb-6'> Discover a variety of events that celebrate culture, music, and art. Join us for unforgettable experiences!</p>
      <button className='bg-yellow-500 py-2 px-4 rounded text-black font-semibold mb-14 transition-transform duration-300 hover:scale-105'>Get Started</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map(event => (
          <div
            key={event.id}
            className="bg-gray-900 text-yellow rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 max-w-xs mx-auto"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={300}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold underline">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreEvent;
