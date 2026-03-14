"use client";

import { useState, useEffect } from 'react';

interface University {
  name: string;
  country: string;
}

interface ContentBoxProps {
  universities: University[];
}

export default function ContentBox({ universities: initialUniversities }: ContentBoxProps) {
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [universities, setUniversities] = useState<University[]>(initialUniversities);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search.trim()) {
      setUniversities(initialUniversities);
      return;
    }

    const fetchUniversities = async () => {
      setLoading(true);
      try {
        const queryParam = searchType === 'country' ? 'country' : 'name';
        const response = await fetch(`http://universities.hipolabs.com/search?${queryParam}=${encodeURIComponent(search)}`);
        const data = await response.json();
        setUniversities(data);
      } catch (error) {
        console.error("Failed to fetch universities", error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchUniversities, 500);
    return () => clearTimeout(debounceTimer);
  }, [search, searchType, initialUniversities]);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl px-4">
      <div className="flex w-full justify-center mb-6 space-x-4">
        <select
          className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="name">Search by Name</option>
          <option value="country">Search by Country</option>
        </select>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search by ${searchType}...`}
          className="border p-2 w-full max-w-md rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <div className="py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      ) : (
        <ul className="w-full bg-white rounded shadow-sm">
          {universities.map((university, index) => (
            <li key={index} className="border-b last:border-b-0 p-4 hover:bg-gray-50 flex flex-col sm:flex-row justify-between sm:items-center">
              <span className="font-semibold text-lg text-gray-800">{university.name}</span>
              <span className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0">{university.country}</span>
            </li>
          ))}
          {universities.length === 0 && (
            <li className="text-center text-gray-500 p-8">No universities found.</li>
          )}
        </ul>
      )}
    </div>
  );
}