import React from "react";
import "./Blog.scss";
import tools from "../../UI/Image/tools.png";
import picId from "../../UI/Image/picID.png";

const Blog = () => {
  return (
    <div id="blog" className="blog">
      <div className="blog__news-container">
        <div className="blog__icon-timeline">
          <hr className="blog__line"></hr>
          <h1 className="blog__info">
            <span className="blog__span">#</span>
            Blog
          </h1>
          <hr className="blog__line"></hr>
          <img className="blog__icon" src={tools} alt="social-icon" />
        </div>
        <div className="blog__post-container">
          <div className="blog__blog blog__blog--1">
            <div className="blog__body">
              <h4 className="blog__new">What's new in 2023</h4>
              <span className="blog__tag blog__tag--1">Job</span>
              <p className="blog__description">
                I'm applying for Job Offers in Paris
              </p>
            </div>
            <div className="blog__footer">
              <div className="blog__user">
                <img src={picId} alt="blog__image" className="blog__user-img" />
                <div className="user__info">
                  <h5 className="blog__name">O.Bourgogne</h5>
                  <h6 className="blog__date">2023</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__blog blog__blog--2">
            <div className="blog__body">
              <h4 className="blog__new">What's new in 2023</h4>
              <span className="blog__tag blog__tag--1">Work in progress</span>
              <p className="blog__description">
                I'm adding a Watchlist to my MovieDb Project
              </p>
            </div>
            <div className="blog__footer">
              <div className="blog__user">
                <img src={picId} alt="blog__image" className="blog__user-img" />
                <div className="user__info">
                  <h5 className="blog__name">O.Bourgogne</h5>
                  <h6 className="blog__date">2023</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__blog blog__blog--3">
            <div className="blog__body">
              <h4 className="blog__new">What's new in 2023</h4>
              <span className="blog__tag blog__tag--1">Technology</span>
              <p className="blog__description">
                I keep learning and created new Projects that I will update.
                Stay tuned!
              </p>
            </div>
            <div className="blog__footer">
              <div className="blog__user">
                <img src={picId} alt="blog__image" className="blog__user-img" />
                <div className="user__info">
                  <h5 className="blog__name">O.Bourgogne</h5>
                  <h6 className="blog__date">2023</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
