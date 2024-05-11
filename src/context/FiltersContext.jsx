import { createContext, useContext, useState } from "react";

const FiltersContext = createContext();

function FiltersProvider({ children }) {
  const [sortBy, setSortBy] = useState("Sort By Price");
  const [filterCategory, setFilterCategory] = useState([]);
  const [filterRating, setFilterRating] = useState("");

  return (
    <FiltersContext.Provider
      value={{
        sortBy,
        setSortBy,
        filterCategory,
        setFilterCategory,
        filterRating,
        setFilterRating,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

function useFilters() {
  const context = useContext(FiltersContext);
  if (context === undefined)
    throw new Error("FiltersContext was used outside of FiltersProvider");
  return context;
}

export { FiltersProvider, useFilters };
