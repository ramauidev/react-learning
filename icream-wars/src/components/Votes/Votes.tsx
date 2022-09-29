import "./Votes.css";

const Votes = () => {
  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button type="button">Choclate</button>
        <button type="button">Vanila</button>
        <button type="button">Strawberry</button>
      </div>
      <div className="choclate">
        <div>
          <span>Choclate:</span>
          <span>2(33.3%)</span>
        </div>

        <div className="progress"></div>
      </div>
      <div className="vanila">
        <div>
          <span>Vanila:</span>
          <span>1(16.7%)</span>
        </div>

        <div className="progress"></div>
      </div>
      <div className="strawberry">
        <div>
          <span>Strawberry:</span>
          <span>3(50.0%)</span>
        </div>

        <div className="progress"></div>
      </div>
    </div>
  );
};

export default Votes;
