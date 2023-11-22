import React, { useEffect, useState } from "react";
import "./App.css";
import bg from "./bg.jpg";
import video from "./components/recipe-video.mp4";

import Recipe from "./components/Recipe";

function App() {
  const APP_ID = "a87be9a1";
  const API_KEY = "b3106ce187eb82ddc87824d0a08e9ebd	";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}
    `
    );

    const data = await res.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <>
      <body>
        <div className="App">
          <div className="container">
            {/* <img src={bg} alt="bg" className="bg" /> */}
            <video autoPlay muted loop id="video" className="bg">
              <source type="video/mp4" src={video} />
            </video>
          </div>
          <form className="search-form" onSubmit={getSearch}>
            <input
              className="search-bar"
              placeholder="Search Here For New Recipe ...."
              type="text"
              value={search}
              onChange={updateSearch}
              style={{}}
            />
            <button className="search-btn" type="submit" style={{}}>
              search
            </button>
          </form>
          <div className="recipes">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
