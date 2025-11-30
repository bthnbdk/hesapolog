'use client';

import React from 'react';

export const ShareButtons: React.FC<{ title: string }> = ({ title }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const text = encodeURIComponent(`Hesapolog: ${title} aracı ile hesaplama yaptım.`);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex gap-2 my-6">
      <a 
        href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        X (Twitter)
      </a>
      <a 
        href={`https://wa.me/?text=${text}%20${encodedUrl}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700 transition-colors"
      >
        WhatsApp
      </a>
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Facebook
      </a>
    </div>
  );
};