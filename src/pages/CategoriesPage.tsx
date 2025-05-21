import React, { useEffect } from 'react';
import { branches, subjects } from '../data/categories';
import CategoryCard from '../components/categories/CategoryCard';

const CategoriesPage: React.FC = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Categories | EngiNotes';
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-neutral-900 mb-6">Browse Categories</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Engineering Branches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <CategoryCard key={branch.id} item={branch} type="branch" />
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Popular Subjects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.slice(0, 8).map((subject) => (
            <CategoryCard key={subject.id} item={subject} type="subject" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;