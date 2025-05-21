import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Branch, Subject } from '../../types';

interface CategoryCardProps {
  item: Branch | Subject;
  type: 'branch' | 'subject';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ item, type }) => {
  const IconComponent = item.iconName ? LucideIcons[item.iconName as keyof typeof LucideIcons] : LucideIcons.Folder;
  
  return (
    <Link
      to={`/categories/${item.id}`}
      className="card p-6 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
    >
      <div className={`h-16 w-16 rounded-full flex items-center justify-center ${
        type === 'branch' ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-500'
      }`}>
        <IconComponent className="h-8 w-8" />
      </div>
      
      <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
      
      <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{item.description}</p>
      
      {type === 'branch' && (
        <span className="mt-3 text-xs font-medium tag-primary">
          {(item as Branch).semesters.length} Semesters
        </span>
      )}
      
      {type === 'subject' && (
        <span className="mt-3 text-xs font-medium tag-secondary">
          Semester {(item as Subject).semester}
        </span>
      )}
    </Link>
  );
};

export default CategoryCard;