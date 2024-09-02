import { ChangeEvent, FormEventHandler, useState } from "react";
import "../css/App.css";
import { CocktailDetails, GetCocktailByName } from "./FetchCocktail";
import { Link } from "react-router-dom";



export function SearchCocktail() {
  const [value, setValue] = useState<string>("");
  const [cocktails, setCocktails] = useState<any[]>([]);
  //const [coctailDetails, setCocktailDetails] = useState<CocktailDetails>();

  const Onsubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    let newValue = value.replace(/(?<=\S)\s+(?=\S)/g, "_");

    const fetchedCocktails = await GetCocktailByName(newValue);
    setCocktails(fetchedCocktails);

    //cocktails.map((cocktail,index) => ())

    const mappedCocktails: CocktailDetails[] = fetchedCocktails.map((cocktail: any) => ({
      Name: cocktail.strDrink,
      Category: cocktail.strCategory,
      Image: cocktail.strDrinkThumb,
      Tags: cocktail.strTags || "No Tags",
      IngredientsWithMeasurements: Object.fromEntries(
        Object.keys(cocktail)
          .filter((key) => key.startsWith("strIngredient") && cocktail[key])
          .map((key) => [
            cocktail[key],
            cocktail[`strMeasure${key.match(/\d+/)}`] || "",
          ])
      ),
      Glass: cocktail.strGlass,
    }));

    setCocktails(mappedCocktails);


  };


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    //console.log(value)
  };

  return (
    <>
      <form className="search-form" onSubmit={Onsubmit}>
        <label>Search Cocktail: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={value}
          onChange={handleChange}
        />

        <button className="btn-submit" type="submit">
          Search 
        </button>
      </form>

      {cocktails.length > 0 ? (
        <ul className="cocktail-names-list">
          {cocktails.map((cocktail, index) => (
            <li className="cocktail-name"  key={index}>
              <Link className="cocktail-name-link" state={{details: cocktail}} to="/info">{cocktail.Name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cocktails found.</p>
      )}





    </>
  );
}


