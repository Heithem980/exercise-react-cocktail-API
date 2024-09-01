import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { CocktailDetails } from "./FetchCocktail";

interface ICardProps {
  Name: string;
  Image: string;
  Details: CocktailDetails;
}



export function Card(props: ICardProps): ReactElement {


  


  return (
    <>
      <div className="card">
      <img className="image" src={props.Image}></img>
        <p>{props.Name}</p>
        <Link to="/info" state={{ details: props.Details }}>Read more</Link>
      </div>
    </>
  );
}
