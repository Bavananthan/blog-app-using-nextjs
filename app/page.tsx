"use client"
// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <section className="relative w-full h-screen bg-gray-800 flex items-center justify-center text-center">
        {loading && <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>}

        <div className="relative z-20 px-4">
          <img
            src="/maindp.jpg"
            alt="My Image"
            className={`w-80 h-80 rounded-full mx-auto transition-transform duration-1000 ease-in-out transform ${loading ? 'scale-0' : 'scale-100'}`}
            onLoad={() => setLoading(false)}
          />
          <h1 className="text-5xl text-white font-bold mt-6">Hello, Im Armstrong Bavananthan</h1>
          <p className="text-lg text-white mt-4">A passionate Software Engineer and Developer</p>
        </div>
      </section>
    </div>
  );
}
