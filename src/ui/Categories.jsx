import CategoryItem from "./CategoryItem";

function Categories() {
  return (
    <>
      <p id="category" className="text-center text-4xl font-semibold mb-3">
        Categories
      </p>
      <div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3">
        <CategoryItem
          categoryName="Vision"
          imageUrl="/categories/visionmod1.jpg"
        />
        <CategoryItem
          categoryName="Sports"
          imageUrl="/categories/sportsmod1.jpg"
        />
        <CategoryItem
          categoryName="Sunglasses"
          imageUrl="/categories/sunmod1.jpg"
        />
      </div>
    </>
  );
}

export default Categories;
