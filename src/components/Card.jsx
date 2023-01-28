
import placer from "../images/Fill219.png";

export default function Card(props) {
  
    return (
    <div className="card-container">
      <img className="card-photo" src={props.item.img} />
      <div className="card-right-side">
        <div className="card-right-side-first-line">
          <img src={placer} />
          <p className="card-location">{props.item.location.toUpperCase()}</p>
          <p className="card-viewGoogleMap"><a href={props.item.googleMapUrl} target="_blank">View on Google Maps</a></p>
        </div>
        <h1 className="card-title">{props.item.name}</h1>
        <h5 className="card-date">{props.item.title[0].toUpperCase() + props.item.title.slice(1).toLowerCase()  }</h5>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}
