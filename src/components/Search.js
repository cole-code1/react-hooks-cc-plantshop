import React, { useState } from "react";

function Search({ plants, setPlants }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setPlants(plants.filter(plant => plant.name.toLowerCase().includes(query)));
  };
  

  return (
    <div>
      <label>Search:</label>
      <input
        type="text"
        placeholder="Search for a plant..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;