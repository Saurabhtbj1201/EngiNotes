import React from 'react';
import { BookOpen, Users, Download, Clock } from 'lucide-react';

const StudyStats: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Trusted by Engineering Students</h2>
          <p className="mt-4 text-secondary-100 max-w-2xl mx-auto">
            Join thousands of students using EngiNotes to enhance their learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <BookOpen className="h-10 w-10" />
            </div>
            <p className="mt-4 text-3xl font-bold">500+</p>
            <p className="mt-2 text-secondary-100">Study Notes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <Users className="h-10 w-10" />
            </div>
            <p className="mt-4 text-3xl font-bold">10,000+</p>
            <p className="mt-2 text-secondary-100">Students</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <Download className="h-10 w-10" />
            </div>
            <p className="mt-4 text-3xl font-bold">25,000+</p>
            <p className="mt-2 text-secondary-100">Downloads</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <Clock className="h-10 w-10" />
            </div>
            <p className="mt-4 text-3xl font-bold">15+</p>
            <p className="mt-2 text-secondary-100">Disciplines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyStats;