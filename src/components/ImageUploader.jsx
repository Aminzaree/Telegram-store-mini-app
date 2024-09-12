import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa6";

function ImageUploader({ onImagesChange }) {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => {
      return {
        file,
        preview: URL.createObjectURL(file),
      };
    });
    setImages((prevImages) => {
      const updatedImages = [...prevImages, ...newImages];
      onImagesChange(updatedImages.map(img => img.file));
      return updatedImages;
    });
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, i) => i !== index);
      onImagesChange(updatedImages.map(img => img.file)); // به روز رسانی فایل‌ها
      return updatedImages;
    });
  };

  return (
    <div className='w-full mt-4'>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">آپلود تصویر محصول</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input 
            id="dropzone-file" 
            type="file" 
            className="hidden" 
            multiple 
            onChange={handleImageUpload} 
          />
        </label>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image.preview} alt={`Uploaded ${index}`} className="w-32 h-32 object-cover rounded-xl" />
            <button
              className="absolute top-2 right-1 bg-red-600 text-white rounded-full p-2 hover:bg-zinc-100 group transition-all duration-200 ease-in-out"
              onClick={() => handleRemoveImage(index)}
            >
              <FaTrash className='group-hover:text-red-500 transition-all duration-200 ease-in-out' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;
