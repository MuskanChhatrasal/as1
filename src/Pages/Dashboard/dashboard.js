import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <Navbar />
      <section className="sections search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">search your favorite book</label>
            <input type="text" name="name" id="name" />
            <button className="btn search-btn">Search</button>
          </div>
        </form>
      </section>

      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          <article className="cocktail">
            <div className="img-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcghhqDa3FSXr7LjMrczXDkX9_5Ut4Y6uWrA&usqp=CAU"
                alt="abc"
              />
            </div>
            <div className="cocktail-footer">
              <h3>abc</h3>
              <h4>def</h4>
              <p>qwertyuiopasdfg</p>
              <Link to="/details" className="btn btn-primary btn-details">
                details
              </Link>
            </div>
          </article>
          <article className="cocktail">
            <div className="img-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcghhqDa3FSXr7LjMrczXDkX9_5Ut4Y6uWrA&usqp=CAU"
                alt="abc"
              />
            </div>
            <div className="cocktail-footer">
              <h3>abc</h3>
              <h4>def</h4>
              <p>qwertyuiopasdfg</p>
              <Link to="/details" className="btn btn-primary btn-details">
                details
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
