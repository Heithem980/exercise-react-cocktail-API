import { useState, useEffect } from "react";
import { Card } from "./Card";
import "../css/CocktailCard.css";
import { Link } from "react-router-dom";



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

export function GetCocktailDetails() {
    return(
        <>
            <p>{cocktailDetails?.Tags}</p>
        </>
    )
  }
