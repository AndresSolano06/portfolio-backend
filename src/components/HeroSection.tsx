import React from 'react';

type HeroSectionProps = {
  name: string;
  subtitle: string;
  backgroundImage: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ name, subtitle, backgroundImage }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat font-grotesk"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Hola, soy {name}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSection;
