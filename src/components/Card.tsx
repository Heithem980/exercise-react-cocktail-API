import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface ICardProps {
  Name: string;
  Image: string;
}





export function Card(props: ICardProps): ReactElement {
  return (
    <>
      <div className="card">
        {props.Image && <img className="image" src={props.Image}></img>}
        <p>{props.Name}</p>
        <Link to="/Details">Read more</Link>
      </div>
    </>
  );
}
