import { useEffect, useState } from "react";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h1 className="font-semibold">All Caterogy</h1>
      <div className="flex flex-col gap-2 my-5">
        {categories.map((category) => (
          <button className="btn " key={category.category_id}>{category.category_name}</button>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
