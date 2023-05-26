import Card from "../Card/Card";
import { useState } from "react";
import {
  SearchBar,
  List,
  Results,
  Input,
  FilterContainer,
  FilterSelect,
} from "./CardList.styled";

export default function CardList({ medications, toggleBookmark, isDarkMode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleFilterChange = (event) => {
    setSortOrder(event.target.value);
  };
  const filteredMedications = medications.filter(
    (medication) =>
      medication.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medication.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedMedications = filteredMedications.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "desc") {
      return b.name.localeCompare(a.name);
    } else if (sortOrder === "bookmarked") {
      return b.isBookmarked - a.isBookmarked; // Bookmarked medications first
    } else {
      return 0; // No sorting
    }
  });
  return (
    <>
      <SearchBar>
        <Input
          htmlfor="search"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
        />
      </SearchBar>
      <FilterContainer>
        <FilterSelect value={sortOrder} onChange={handleFilterChange}>
          <option value="">Filter</option>
          <option value="asc">Sort A to Z</option>
          <option value="desc">Sort Z to A</option>
          <option value="bookmarked">Bookmarked First</option>
        </FilterSelect>
      </FilterContainer>
      <List>
        {sortedMedications.length > 0 ? (
          <>
            {searchQuery && (
              <Results>{sortedMedications.length} results found</Results>
            )}
            {sortedMedications.map((medication) => (
              <li key={medication.id}>
                <Card
                  medication={medication}
                  toggleBookmark={toggleBookmark}
                  isDarkMode={isDarkMode}
                />
              </li>
            ))}
          </>
        ) : (
          <Results>No results found</Results>
        )}
      </List>
    </>
  );
}
