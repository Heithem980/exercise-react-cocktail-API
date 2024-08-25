import { useState, useEffect } from "react";
import "../css/CocktailCard.css";
import { Link } from "react-router-dom";

export function GetRandomCocktail() {
  const [CocktailImage, setCocktailImage] = useState(null);
  const [CocktailName, setCocktailName] = useState(null);
  const [triggerEffect, setTriggerEffect] = useState(0);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setCocktailImage(data.drinks[0].strDrinkThumb);
        setCocktailName(data.drinks[0].strDrink);
      });
  }, [triggerEffect]);

  const GetRandomCocktailOnClick = () => {
    setTriggerEffect((count) => count + 1);
  };

  return (
    <>
      <div className="cardContainer">
        <div className="card">
          {CocktailImage && <img className="image" src={CocktailImage}></img>}
          <p>{CocktailName}</p>
        </div>
      </div>
      <div className="buttondiv">
      <button onClick={GetRandomCocktailOnClick}>Randomize</button>
      
      </div>
      <Link to="/Details">Read more</Link>

      
    </>
  );
}
