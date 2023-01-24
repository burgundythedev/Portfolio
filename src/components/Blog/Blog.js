import React from "react";
import "./Blog.scss";
import pic from "../../UI/Image/picID.png";
import pen from "../../UI/Image/pen.png";

const Blog = () => {
  return (
    <div id="blog" className="blog">
      <p className="blog__info">Stay up-to-date with my latest news</p>
      <div className="blog__post-container">
        <div className="blog__box">
          <div class="blog__post">
            <div class="blog__pic">
              <img className="blog__img" src={pic} alt="pic-id" />
            </div>
            <div class="blog__container">
              <h3 className="blog__text blog__text--1">15th January 2023</h3>
              <h1 className="blog__text blog__text--2">
                <img src={pen} className="blog__icon" alt="icon" />
                Adding a Watchlist to my MovieDB Projects
              </h1>
            </div>
          </div>
          <div class="blog__post">
            <div class="blog__pic">
              <img className="blog__img" src={pic} alt="pic-id" />
            </div>
            <div class="blog__container">
              <h3 className="blog__text blog__text--1">1st January 2023</h3>
              <h1 className="blog__text blog__text--2">
                <img src={pen} className="blog__icon" alt="icon" />
                Applying for Job Offers in Paris
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
