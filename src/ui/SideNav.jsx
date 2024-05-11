import { useEffect, useState } from "react";
import GenderSortBtn from "./GenderSortBtn";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "react-router-dom";
import { useFilters } from "../context/FiltersContext";

function SideNav({ showSideNav, setShowSideNav }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [genderSort, setGenderSort] = useState("All");
  const { setFilterCategory, filterCategory, setFilterRating, filterRating } =
    useFilters();

  useEffect(
    function () {
      setGenderSort(searchParams.get("gender_sort"));
    },
    [searchParams]
  );

  function handleSortCategory(e) {
    if (e.target.checked)
      setFilterCategory([...filterCategory, e.target.value]);
    else
      setFilterCategory(
        filterCategory.filter(
          (filterCategory) => filterCategory !== e.target.value
        )
      );
  }

  function handleClearFilters() {
    searchParams.set("gender_sort", "All");
    setSearchParams(searchParams);
    setFilterCategory([]);
    setFilterRating("");
  }

  return (
    <aside
      className={`${showSideNav ? "left-0" : "left-[-300px]"} p-5 fixed w-[18rem] h-full bg-[#ffffffe6] top-0 overflow-auto backdrop-filter backdrop-blur-sm transition-all ease-in-out duration-300`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[1.8rem]">Filter Products</p>
        <FontAwesomeIcon
          icon={faXmark}
          className="w-7 h-7 cursor-pointer"
          onClick={() => setShowSideNav(false)}
        />
      </div>
      <button
        className="bg-[#00000033] px-5 py-1 rounded-md hover:bg-black hover:text-white"
        onClick={handleClearFilters}
      >
        Clear
      </button>
      <p className="text-[1.4rem] mt-7">Gender</p>
      <div className="flex gap-3 justify-around mb-3">
        <GenderSortBtn
          setGenderSort={setGenderSort}
          genderSort={genderSort}
          sortName="All"
        />
        <GenderSortBtn
          setGenderSort={setGenderSort}
          genderSort={genderSort}
          sortName="Men"
        />
      </div>
      <div className="flex gap-3 justify-around">
        <GenderSortBtn
          setGenderSort={setGenderSort}
          genderSort={genderSort}
          sortName="Women"
        />
        <GenderSortBtn
          setGenderSort={setGenderSort}
          genderSort={genderSort}
          sortName="Unisex"
        />
      </div>

      <p className="text-[1.4rem] mt-7">Categories</p>
      <div className="flex flex-col gap-2 mb-6">
        <div>
          <input
            id="vision"
            type="checkbox"
            className="mr-3 accent-black"
            value="Vision"
            checked={filterCategory.includes("Vision")}
            onChange={handleSortCategory}
          />
          <label htmlFor="vision">Vision</label>
        </div>
        <div>
          <input
            id="sunglasses"
            type="checkbox"
            className="mr-3 accent-black"
            value="Sunglasses"
            checked={filterCategory.includes("Sunglasses")}
            onChange={handleSortCategory}
          />
          <label htmlFor="sunglasses">Sunglasses</label>
        </div>
        <div>
          <input
            id="sports"
            type="checkbox"
            className="mr-3 accent-black"
            value="Sports"
            checked={filterCategory.includes("Sports")}
            onChange={handleSortCategory}
          />
          <label htmlFor="sports">Sports</label>
        </div>
      </div>

      <p className="text-[1.4rem] mt-7">Rating</p>
      <div>
        <div>
          <input
            id="1above"
            type="radio"
            className="mr-3 accent-black"
            name="rating"
            value={1}
            checked={filterRating === "1"}
            onChange={(e) => setFilterRating(e.target.value)}
          />
          <label htmlFor="1above">1 Stars & above</label>
        </div>
        <div>
          <input
            id="2above"
            type="radio"
            className="mr-3 accent-black"
            name="rating"
            value={2}
            checked={filterRating === "2"}
            onChange={(e) => setFilterRating(e.target.value)}
          />
          <label htmlFor="2above">2 Stars & above</label>
        </div>
        <div>
          <input
            id="3above"
            type="radio"
            className="mr-3 accent-black"
            name="rating"
            value={3}
            checked={filterRating === "3"}
            onChange={(e) => setFilterRating(e.target.value)}
          />
          <label htmlFor="3above">3 Stars & above</label>
        </div>
        <div>
          <input
            id="4above"
            type="radio"
            className="mr-3 accent-black"
            name="rating"
            value={4}
            checked={filterRating === "4"}
            onChange={(e) => setFilterRating(e.target.value)}
          />
          <label htmlFor="4above">4 Stars & above</label>
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
