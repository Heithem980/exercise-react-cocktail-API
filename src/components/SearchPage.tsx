import { ChangeEvent, FormEventHandler, useState } from "react";
import "../css/App.css";
import { GetCocktailByName } from "./FetchCocktail";
import { Link } from "react-router-dom";

export function SearchCocktail() {
  const [value, setValue] = useState<string>("");
  const [cocktails, setCocktails] = useState<any[]>([]);

  const Onsubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    let newValue = value.replace(/(?<=\S)\s+(?=\S)/g, "_");

    const fetchedCocktails = await GetCocktailByName(newValue);
    setCocktails(fetchedCocktails);
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
          Submit
        </button>
      </form>

      {cocktails.length > 0 ? (
        <ul className="cocktail-names-list">
          {cocktails.map((cocktail, index) => (
            <li className="cocktail-name"  key={index}>
              <Link className="cocktail-name-link" to="/info">{cocktail.strDrink}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cocktails found.</p>
      )}





    </>
  );
}


