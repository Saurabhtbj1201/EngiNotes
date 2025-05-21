import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedNotes from '../components/home/FeaturedNotes';
import PopularCategories from '../components/home/PopularCategories';
import StudyStats from '../components/home/StudyStats';

const HomePage: React.FC = () => {
  // Update page title
  React.useEffect(() => {
    document.title = 'EngiNotes | Engineering Study Notes Platform';
  }, []);
  
  return (
    <div>
      <Hero />
      <FeaturedNotes />
      <StudyStats />
      <PopularCategories />
    </div>
  );
};

export default HomePage;