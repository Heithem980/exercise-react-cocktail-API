import { useState, useEffect } from "react";
import { Card } from "./Card";
import "../css/CocktailCard.css";

interface CocktailDetails {
  Category: string;
  Image: string;
  Tags: string;
  IngredientsWithMeasurements: Record<string, string>;
  Glass: string;
}

let cocktailDetails: CocktailDetails;

export function GetRandomCocktail() {
  const [cocktailImage, setCocktailImage] = useState("");
  const [cocktailName, setCocktailName] = useState("");
  const [triggerEffect, setTriggerEffect] = useState<number>(0);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        const drink = data.drinks[0];

        setCocktailImage(drink.strDrinkThumb);
        setCocktailName(drink.strDrink);

        const ingredientsWithMeasurements: Record<string, string> = {};
        for (let i = 1; i <= 15; i++) {
          const ingredient = drink[`strIngredient${i}`];
          const measurement = drink[`strMeasure${i}`];
          if (ingredient && measurement) {
            ingredientsWithMeasurements[ingredient] = measurement;
          }
        }

        cocktailDetails = {
          Category: drink.strCategory,
          Image: drink.strDrinkThumb,
          Tags: drink.strTags || "",
          IngredientsWithMeasurements: ingredientsWithMeasurements,
          Glass: drink.strGlass,
        };
      });
  }, [triggerEffect]);

  const GetRandomCocktailOnClick = () => {
    setTriggerEffect((count) => count + 1);
  };

  return (
    <>
      <div className="cardContainer">
        <Card Name={cocktailName} Image={cocktailImage} />
      </div>
      <div className="buttondiv">
        <button onClick={GetRandomCocktailOnClick}>Randomize</button>
      </div>
    </>
  );
}


export function GetCocktailByName(name:string) {
const [searchDrinks, setSearchDrinks] = useState([])

  console.log(name);

  
   fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks )
      setSearchDrinks(data.drinks)

    })
    .catch((error) => {
      console.error('Error fetching cocktail by name:', error);
      return null;
    });
}


export function GetCocktailDetails() {
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
