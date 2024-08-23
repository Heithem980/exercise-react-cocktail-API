import { useState, useEffect } from "react";








export function GetRandomCocktail() {
  const [CocktailImage, setCocktailImage] = useState(null);
  const [CocktailName, setCocktailName] = useState(null);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setCocktailImage(data.drinks[0].strDrinkThumb);
      });
  }, []);

  return (
    <div className="card">
      {CocktailImage && <img src={CocktailImage}></img>}
    </div>
  );
}
