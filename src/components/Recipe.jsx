import React from "react";
import "./Recipe.css";
import video from "./recipe-video.mp4";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <>
      <div className="card" style={{ width: "23rem" }}>
        <h2>{title}</h2>
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{
            width: "15rem",
            height: "15rem",
            borderRadius: "25px",
            margin: "auto",
            transition: "ease-in-out 2s",
          }}
        />
        <div class="card-body">
          <ol>
            {ingredients.map((ingredient) => (
              <li
                style={{
                  fontSize: "15px",
                  display: "flex",
                  flexDirection: "row",
                  justifyItems: "justify",
                  alignItems: "justify",
                }}
              >
                {ingredient.text}
              </li>
            ))}
          </ol>
          <p class="card-text">Calories:{calories}</p>
        </div>
      </div>
    </>
  );
};

export default Recipe;
