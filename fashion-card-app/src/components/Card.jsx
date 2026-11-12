
import "./Card.css";

function Card(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />

      <div className="card-content">
        <p className="category">{props.category}</p>

        <h3>{props.name}</h3>

        <h4>{props.price}</h4>

        <button onClick={props.onAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
