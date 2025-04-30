import background from './assets/Background.png';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <HeroSection
      name="Andrés Camilo"
      subtitle="Desarrollador Backend apasionado por .NET y Azure"
      backgroundImage={background}
    />
  );
}

export default App;
