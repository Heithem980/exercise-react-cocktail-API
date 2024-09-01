import { useState, useEffect } from "react";
import { Card } from "./Card";
import "../css/CocktailCard.css";

export interface CocktailDetails {
  Name: string;
  Category: string;
  Image: string;
  Tags: string;
  IngredientsWithMeasurements: Record<string, string>;
  Glass: string;
}

//let cocktailDetails: CocktailDetails;

export function GetRandomCocktail() {
  const [coctailDetails, setCocktailDetails] = useState<CocktailDetails>();

  const fetchRandomCocktail = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        const drink = data.drinks[0];

        const ingredientsWithMeasurements: Record<string, string> = {};
        for (let i = 1; i <= 15; i++) {
          const ingredient = drink[`strIngredient${i}`];
          const measurement = drink[`strMeasure${i}`];
          if (ingredient && measurement) {
            ingredientsWithMeasurements[ingredient] = measurement;
          }
        }

        const details: CocktailDetails = {
          Name: drink.strDrink,
          Category: drink.strCategory,
          Image: drink.strDrinkThumb,
          Tags: drink.strTags || "",
          IngredientsWithMeasurements: ingredientsWithMeasurements,
          Glass: drink.strGlass,
        };
        setCocktailDetails(details)
      });
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  const GetRandomCocktailOnClick = () => {
    fetchRandomCocktail(); 
  };

  return (
    <>
      <div className="cardContainer">
        {coctailDetails && <Card Name={coctailDetails.Name} Image={coctailDetails.Image} Details={coctailDetails} />}
        
      </div>
      <div className="buttondiv">
        <button onClick={GetRandomCocktailOnClick}>Randomize</button>
      </div>
    </>
  );
}

export async function GetCocktailByName(name: string) {
  try {
    const response = await fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await response.json();
    return data.drinks || [];
  } catch (error) {
    console.error("Error fetching cocktail by name:", error);
    return [];
  }
}
/*
export function ShowCocktailDetails() {
  return (
    <>
      <img
        className="DetailsImage"
        style={{ width: "300px" }}
        src={cocktailDetails?.Image}
      ></img>

      <h3>Tags:</h3>
      <p>{cocktailDetails?.Tags || "None"}</p>

      <h3>Category:</h3>
      <p>{cocktailDetails?.Category}</p>

      <h3>Glass:</h3>
      <p>{cocktailDetails?.Glass}</p>

      <h3>Ingredients and Measurements</h3>

      {cocktailDetails?.IngredientsWithMeasurements ? (
        <ul>
          {Object.entries(cocktailDetails.IngredientsWithMeasurements).map(
            ([ingredient, measurement]) => (
              <li key={ingredient}>
                {ingredient}: {measurement}
              </li>
            )
          )}
        </ul>
      ) : (
        <p>No ingredients available</p>
      )}
    </>
  );
}

*/