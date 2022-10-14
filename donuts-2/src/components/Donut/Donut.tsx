import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import DonutResponse from "../../models/DonutResponse";
import { getDonutByid } from "../../services/DonutsService";
import "./Donut.css";

const Donut = () => {
  const { addToCart } = useContext(CartContext);
  const [donut, setDonut] = useState<DonutResponse>();
  const id = useParams().id;

  useEffect(() => {
    getDonutByid(parseInt(id!)).then((response) => setDonut(response));
  }, [id]);

  return (
    <div className="Donut">
      <h2>{donut?.name}</h2>
      {donut?.photo && <img src={donut?.photo} alt={donut?.name} />}
      {donut?.calories && (
        <p>
          Calories : <span>{donut?.calories}</span>
        </p>
      )}
      {donut?.extras?.length! > 0 && (
        <p>
          Extras :
          {donut?.extras?.map((extra, index) => (
            <span key={extra}> {extra + ", "}</span>
          ))}
        </p>
      )}
      <Link to="/">
        <button>Back</button>
      </Link>
      <button className="add-cart-button" onClick={() => addToCart(donut!)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Donut;
