import Card from "../Card/Card";
import { useState } from "react";
import { SearchBar, List, Results, Input } from "./CardList.styled";

export default function CardList({ medications, toggleBookmark, isDarkMode }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredMedications = medications.filter(
    (medication) =>
      medication.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medication.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
      <List>
        {filteredMedications.length > 0 ? (
          <>
            {searchQuery && (
              <Results>{filteredMedications.length} results found</Results>
            )}
            {filteredMedications.map((medication) => (
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
