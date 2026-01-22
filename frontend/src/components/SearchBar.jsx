import { useState, useEffect } from 'react';

export default function SearchBar({ onSearch }) {
  const [localSearch, setLocalSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(localSearch);
    }, 300);

    return () => clearTimeout(timer);
  }, [localSearch, onSearch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search employees..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="search-input"
      />
      {localSearch && (
        <button onClick={() => setLocalSearch('')} className="clear-btn">
          Clear
        </button>
      )}
    </div>
  );
}