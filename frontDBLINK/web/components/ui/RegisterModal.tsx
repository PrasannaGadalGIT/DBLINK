"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UploadButton } from "@/utils/uploadthing";





interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {

  // Formik hook
  const formik = useFormik({
    initialValues: {
      title: '',
      genre: '',
      description: '',
      image : ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      genre: Yup.string().required('Genre is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/registerArtist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
    
        if (!response.ok) {
          throw new Error('Failed to register artist');
        }
    
        const responseData = await response.json();
        console.log('Artist registered successfully:', responseData);
    
        // Close the modal or show a success message
        onClose();
    
      } catch (error) {
        console.error('Error registering artist:', error);
      }
    },
    
  });


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 py-4 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Artist Registration</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          
          {/* Title Field */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-purple-700">Title</label>
            <input
              type="text"
              name="title"
              className={`text-white w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-500 ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
              placeholder="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title ? (
              <p className="text-red-500 text-xs">{formik.errors.title}</p>
            ) : null}
          </div>
          <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          formik.values.image = res[0].url
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
          {/* Genre Selection */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-purple-700">Genre</label>
            <select
              name="genre"
              className={`text-white w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-500 ${formik.touched.genre && formik.errors.genre ? 'border-red-500' : ''}`}
              value={formik.values.genre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled>Select your genre</option>
              <option value="music">Music</option>
              <option value="dance">Dance</option>
              <option value="art">Art</option>
              <option value="theater">Theater</option>
              <option value="literature">Literature</option>
            </select>
            {formik.touched.genre && formik.errors.genre ? (
              <p className="text-red-500 text-xs">{formik.errors.genre}</p>
            ) : null}
          </div>

          {/* Bio Field */}
          <div>
            <label className=" block text-sm font-semibold mb-1 text-purple-700">Bio</label>
            <textarea
              name="description"
              className={`text-white w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-500 ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
              placeholder="Tell us about yourself"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <p className="text-red-500 text-xs">{formik.errors.description}</p>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 font-bold transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>

        {/* Close Button */}
        <button
          className="mt-4 w-full text-red-600 hover:text-red-700 font-bold transition duration-300 ease-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
