import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/shared/footer/footer";
import Category from "../../components/categories/category";
import NavBar from "../../components/shared/navbar/navbar";

export const HomePage = () => {
    return (
      <div className="page-container">
        <NavBar/>
        <div className="hero-image-container">
          <div>
            <img
              src="../assets/banner.png"
              className="home-image"
              alt="all-berries"
            />
          </div>
  
          <div className="image-text">
            <p className="text-size-xxl ">Berries Fresh from Farm </p>
            <button className="btn explore-btn">
              <Link to="/" className="text-decoration-none primary-link-color">
                <p className="btn-text">Buy Now</p>
              </Link>
            </button>
          </div>
        </div>
        <div className="category-container">
          <h1 className="text-center text-size-l">Featured Categories</h1>
          <Category />
        </div>
        <Footer/>
      </div>
    );
  };
