import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonutResponse from "../../models/DonutResponse";
import { getDonutByid } from "../../services/DonutsService";
import "./Donut.css";

const Donut = () => {
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
    </div>
  );
};

export default Donut;
