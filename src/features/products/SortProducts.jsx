import { useFilters } from "../../context/FiltersContext";

function SortProducts() {
  const { sortBy, setSortBy } = useFilters();

  return (
    <select
      value={sortBy}
      className="p-2 rounded-md shadow-md text-sm sm:text-base"
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option disabled>Sort By Price</option>
      <option value="low_to_high">Low to High</option>
      <option value="high_to_low">High to Low</option>
    </select>
  );
}

export default SortProducts;
