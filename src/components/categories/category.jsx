import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Category() {
  const [category, setCategory] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategory(response.data.categories);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="sub-cards">
      {category.map(({ categoryName, categoryImage}) => (
        <div class="category-card">
          <Link to="/">
            <div className="image-container flex justify-content-center"><img src={categoryImage} alt={categoryName} class="category-img" /></div>
            
            <div class="category-name text-center text-size-normal font-wt-semibold">
              <div>{categoryName}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
