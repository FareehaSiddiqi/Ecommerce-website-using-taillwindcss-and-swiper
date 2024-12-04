import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/img/l1.jpg)', // Path to image in the public folder
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg mb-6">Find the best deals on the latest products.</p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
