import React, { useState, useEffect } from 'react';
import { FilterIcon, Search, X } from 'lucide-react';
import { FilterOptions } from '../../types';
import { branches } from '../../data/categories';
import { getAllSemesters } from '../../data/categories';
import { subjects } from '../../data/categories';
import { getAllTags } from '../../data/notes';

interface NotesFilterProps {
  currentFilters: FilterOptions;
  onFilterChange: (options: FilterOptions) => void;
}

const NotesFilter: React.FC<NotesFilterProps> = ({ currentFilters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(currentFilters.searchQuery || '');
  const [selectedBranch, setSelectedBranch] = useState(currentFilters.branch || '');
  const [selectedSemester, setSelectedSemester] = useState<number | undefined>(currentFilters.semester);
  const [selectedSubject, setSelectedSubject] = useState(currentFilters.subject || '');
  const [selectedTags, setSelectedTags] = useState<string[]>(currentFilters.tags || []);
  
  const availableSemesters = getAllSemesters();
  const availableTags = getAllTags();
  const availableSubjects = subjects
    .filter(subject => !selectedBranch || subject.branchId === selectedBranch)
    .filter(subject => !selectedSemester || subject.semester === selectedSemester);
  
  // Apply filters immediately when search input changes
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchQuery !== currentFilters.searchQuery) {
        applyFilters();
      }
    }, 500);
    
    return () => clearTimeout(timerId);
  }, [searchQuery]);
  
  const applyFilters = () => {
    onFilterChange({
      branch: selectedBranch,
      semester: selectedSemester,
      subject: selectedSubject,
      searchQuery,
      tags: selectedTags.length > 0 ? selectedTags : undefined,
    });
  };
  
  const resetFilters = () => {
    setSelectedBranch('');
    setSelectedSemester(undefined);
    setSelectedSubject('');
    setSearchQuery('');
    setSelectedTags([]);
    
    onFilterChange({});
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  const hasActiveFilters = selectedBranch || selectedSemester || selectedSubject || selectedTags.length > 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center">
          <FilterIcon className="h-5 w-5 mr-2 text-primary-600" />
          Filter Notes
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-neutral-500 hover:text-primary-600"
        >
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title, keywords or description..."
            className="input pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
        </div>
      </form>
      
      {/* Extended Filters */}
      {isOpen && (
        <div className="mt-4 space-y-4 animate-slide-up">
          {/* Branch Filter */}
          <div>
            <label htmlFor="branch" className="label">
              Branch
            </label>
            <select
              id="branch"
              className="input"
              value={selectedBranch}
              onChange={(e) => {
                setSelectedBranch(e.target.value);
                if (e.target.value && selectedSubject) {
                  // Clear subject if it doesn't belong to the selected branch
                  const subjectBelongsToBranch = subjects.some(
                    s => s.id === selectedSubject && s.branchId === e.target.value
                  );
                  if (!subjectBelongsToBranch) {
                    setSelectedSubject('');
                  }
                }
              }}
            >
              <option value="">All Branches</option>
              {branches.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Semester Filter */}
          <div>
            <label htmlFor="semester" className="label">
              Semester
            </label>
            <select
              id="semester"
              className="input"
              value={selectedSemester || ''}
              onChange={(e) => setSelectedSemester(e.target.value ? parseInt(e.target.value) : undefined)}
            >
              <option value="">All Semesters</option>
              {availableSemesters.map((semester) => (
                <option key={semester} value={semester}>
                  Semester {semester}
                </option>
              ))}
            </select>
          </div>
          
          {/* Subject Filter */}
          <div>
            <label htmlFor="subject" className="label">
              Subject
            </label>
            <select
              id="subject"
              className="input"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              disabled={availableSubjects.length === 0}
            >
              <option value="">All Subjects</option>
              {availableSubjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Tags Filter */}
          <div>
            <label className="label">Tags</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`tag transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-primary-100 text-primary-800 border border-primary-300'
                      : 'bg-neutral-100 text-neutral-600 border border-transparent'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={applyFilters}
              className="btn-primary flex-1"
            >
              Apply Filters
            </button>
            
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="btn-outline flex items-center justify-center"
              >
                <X className="h-4 w-4 mr-1" />
                Reset
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {selectedBranch && (
              <span className="tag-primary flex items-center">
                {branches.find(b => b.id === selectedBranch)?.name}
                <button
                  onClick={() => {
                    setSelectedBranch('');
                    applyFilters();
                  }}
                  className="ml-1 p-0.5 rounded-full hover:bg-primary-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            
            {selectedSemester && (
              <span className="tag-secondary flex items-center">
                Semester {selectedSemester}
                <button
                  onClick={() => {
                    setSelectedSemester(undefined);
                    applyFilters();
                  }}
                  className="ml-1 p-0.5 rounded-full hover:bg-secondary-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            
            {selectedSubject && (
              <span className="tag bg-neutral-100 text-neutral-700 flex items-center">
                {subjects.find(s => s.id === selectedSubject)?.name}
                <button
                  onClick={() => {
                    setSelectedSubject('');
                    applyFilters();
                  }}
                  className="ml-1 p-0.5 rounded-full hover:bg-neutral-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            
            {selectedTags.map(tag => (
              <span key={tag} className="tag bg-neutral-100 text-neutral-700 flex items-center">
                {tag}
                <button
                  onClick={() => {
                    setSelectedTags(prev => prev.filter(t => t !== tag));
                    applyFilters();
                  }}
                  className="ml-1 p-0.5 rounded-full hover:bg-neutral-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesFilter;