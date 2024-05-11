import { useSearchParams } from "react-router-dom";

function GenderSortBtn({ sortName, genderSort, setGenderSort }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    setGenderSort(sortName);
    searchParams.set("gender_sort", sortName);
    setSearchParams(searchParams);
  }

  return (
    <button
      className={`${genderSort === sortName ? "bg-black text-white" : "bg-[#00000033]"} w-[6.5rem] h-[2.5rem] border rounded-lg transition-colors duration-300 hover:bg-black hover:text-white`}
      onClick={handleClick}
    >
      {sortName}
    </button>
  );
}

export default GenderSortBtn;
