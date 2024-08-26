import { GetCocktailDetails } from "./GetRandomCocktail";






export function Details() {
  return (
    <>
      <div className="detailContainer">
        <h2>Cocktail Details</h2>

        <GetCocktailDetails />
      </div>
    </>
  );
}
