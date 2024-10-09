// app/api/registerArtist/route.ts

import dbConnect from '@/lib/mongoconnection';
import mongoose from 'mongoose'; 
interface ArtistData {
    title: string;
    genre: string;
    description: string;
    image : string;
  }
  
  // Define your artist schema
  const artistSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    description: { type: String, required: true },
    image : {type : String, required : true},
    createdAt: { type: Date, default: Date.now },
  });

  const Artist = mongoose.models.artists || mongoose.model('artists', artistSchema);
  
export async function POST(req: Request) {
  try {
     const body = await req.json(); // Get JSON body from the request
    console.log('Request body received:', body);
    const { title, genre, description, image }: ArtistData = body; // Use body instead of req.body
    
    await dbConnect(); // Ensure the database connection is established

    if (!title || !genre || !description ) {
      return Response.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Here you would typically insert the artist data into the database
    // For example:
    const result = await Artist.create({ title, genre, description, image});


    return Response.json({ message: "asdasd"}, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return Response.json({ message: 'Registration failed' }, { status: 500 });
  }
}


