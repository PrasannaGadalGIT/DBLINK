// pages/artist-profile.tsx
import React, { useEffect, useState } from 'react';

const ArtistProfile = () => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtistProfile = async () => {
      const response = await fetch('/api/artist');
      const data = await response.json();
      setArtist(data);
    };

    fetchArtistProfile();
  }, []);

  if (!artist) return <div>Loading...</div>;

  return (
    <div className="flex">
      <aside className="w-1/4 p-4 bg-gray-200">
        <h2 className="text-xl font-bold">Sidebar</h2>
        <ul>
          <li>Upcoming Events</li>
          <li>Customize Profile</li>
          <li>Settings</li>
        </ul>
      </aside>
      <main className="w-3/4 p-4">
        <h1 className="text-2xl font-bold">{artist.name}'s Profile</h1>
        <p>Email: {artist.email}</p>
        <p>About: {artist.about}</p>
        {/* Add more artist details here */}
      </main>
    </div>
  );
};

export default ArtistProfile;
