import "./Style.css";
import { AiFillStar } from "react-icons/ai";

export const ProductCart = ({ prop }) => {
  const item = prop;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <AiFillStar
        key={i}
        className="rating-star"
        style={{ color: i < item.star ? "#FFD700" : "#ccc" }}
      />
    );
  }

  return (
    <div className="productCart">
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price : {item.newPrice} $</p>
      <p>Rate: <span className="stars">{stars}</span></p>
      <button className="btns" >Add to Cart</button>
    </div>
  );
};