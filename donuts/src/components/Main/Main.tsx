import { useEffect, useState } from "react";
import DonutResponse from "../../models/DonutResponse";
import { getDonuts } from "../../services/DonutsService";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const [donuts, setDonuts] = useState<DonutResponse[]>([]);
  useEffect(() => {
    getDonuts().then((response) => {
      setDonuts(response.results);
    });
  }, []);
  return (
    <div className="Main">
      {donuts.map((donut) => (
        <Link className="link" to={`/donut/${donut.id}`} key={donut.id}>
          {donut.name}
        </Link>
      ))}
    </div>
  );
};

export default Main;
