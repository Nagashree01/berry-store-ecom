import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fresh Berries",
    categoryImage:"assets/category-images/Blueberry1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Dried Berries",
    categoryImage:"assets/category-images/dried-berries.jpg",
    
  },
  {
    _id: uuid(),
    categoryName: "Berry Candies",
    categoryImage:"assets/category-images/all-candy.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Berries Mix",
    categoryImage:"assets/category-images/all-berry.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Berries Syrup",
    categoryImage:"assets/category-images/all-syrup.jpg",
  },
];
