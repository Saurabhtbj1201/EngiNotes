import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { branches } from '../../data/categories';
import CategoryCard from '../categories/CategoryCard';

const PopularCategories: React.FC = () => {
  // Only show a subset of branches for the homepage
  const featuredBranches = branches.slice(0, 4);
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-neutral-900">Popular Branches</h2>
          <Link 
            to="/categories" 
            className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            View All
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBranches.map((branch) => (
            <CategoryCard key={branch.id} item={branch} type="branch" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;