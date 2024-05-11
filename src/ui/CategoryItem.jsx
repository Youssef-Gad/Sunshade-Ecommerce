import { Link } from "react-router-dom";
import { useFilters } from "../context/FiltersContext";

function CategoryItem({ categoryName, imageUrl }) {
  const { setFilterCategory, filterCategory } = useFilters();

  function handleClick() {
    setFilterCategory([...filterCategory, categoryName]);
  }

  return (
    <Link
      to="/products"
      className="relative w-[70%] md:w-[100%] sm:w-[80%]"
      onClick={handleClick}
    >
      <img src={imageUrl} alt={categoryName} className="rounded-xl" />
      <div className="text-[1.8rem] md:text-[3.5rem] font-bold w-full bg-[#00000056] absolute bottom-0 h-full text-white flex justify-center items-center rounded-xl hover:bg-[#00000076] transition-colors duration-300">
        {categoryName}
      </div>
    </Link>
  );
}

export default CategoryItem;
