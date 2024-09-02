import { useLocation } from "react-router-dom";
import { CocktailDetails } from "./FetchCocktail";






export function Details() {
  const location = useLocation();
  const state = location.state as { details: CocktailDetails };

  return (
    <>
      <div className="detailContainer">
        <h2>Cocktail Details</h2>

        <img
          className="DetailsImage"
          style={{ width: "300px" }}
          src={state.details.Image}
        ></img>

        <h3>Name:</h3>
        <p>{state.details.Name || "None"}</p>
        <h3>Tags:</h3>
        <p>{state.details.Tags || "None"}</p>

        <h3>Category:</h3>
        <p>{state.details.Category}</p>

        <h3>Glass:</h3>
        <p>{state.details.Glass}</p>

        <h3>Ingredients and Measurements</h3>

        {state.details.IngredientsWithMeasurements ? (
          <ul>
            {Object.entries(state.details.IngredientsWithMeasurements).map(
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
      </div>
    </>
  );
}
