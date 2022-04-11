import React from "react";
import "./details.css";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">abc</h2>
      <div className="drink">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcghhqDa3FSXr7LjMrczXDkX9_5Ut4Y6uWrA&usqp=CAU"
          alt="abc"
        ></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> abc
          </p>
          <p>
            <span className="drink-data">category :</span> def
          </p>
          <p>
            <span className="drink-data">info :</span> geh
          </p>
          <p>
            <span className="drink-data">glass :</span> ijk
          </p>
          <p>
            <span className="drink-data">instructons :</span> abc hef hjk
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {/* {ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null;
            })} */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
