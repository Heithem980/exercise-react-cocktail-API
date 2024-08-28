import { ChangeEvent, FormEventHandler, useState } from "react";
import "../css/App.css";
import { GetCocktailByName } from "./FetchCocktail";

export function SearchCocktail() {
  const [value, setValue] = useState<string>("");

  const Onsubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    let newValue = value.replace(/(?<=\S)\s+(?=\S)/g, "_");
    console.log(newValue);

    GetCocktailByName(newValue);
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
    </>
  );
}
