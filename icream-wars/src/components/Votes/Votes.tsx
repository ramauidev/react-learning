import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [totalVotes, setTotalVotes] = useState(0);
  const [choclateCount, setChoclateCount] = useState(0);
  const [vanilaCount, setVanilaCount] = useState(0);
  const [strawberryCount, setStrawberryCount] = useState(0);

  function updateVote(flavorType: string) {
    setTotalVotes((vote) => vote + 1);
    switch (flavorType) {
      case "Choclate":
        setChoclateCount((vote) => vote + 1);
        break;
      case "Vanila":
        setVanilaCount((vote) => vote + 1);
        break;
      case "Strawberry":
        setStrawberryCount((vote) => vote + 1);
        break;
    }
  }

  let flavorPercentage = (flavor: number): string => {
    if (flavor) {
      return ((flavor / totalVotes) * 100).toFixed(2) + "%";
    } else {
      return 0 + "%";
    }
  };

  let flavorWidth = (flavor: number) => {
    return {
      width: flavorPercentage(flavor),
    };
  };

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button type="button" onClick={() => updateVote("Choclate")}>
          Choclate
        </button>
        <button type="button" onClick={() => updateVote("Vanila")}>
          Vanila
        </button>
        <button type="button" onClick={() => updateVote("Strawberry")}>
          Strawberry
        </button>
      </div>

      {totalVotes === 0 ? (
        <p>No votes yet.</p>
      ) : (
        <div>
          {choclateCount === 0 ? (
            ""
          ) : (
            <div className="flavors choclate">
              <div>
                <span>Choclate: </span>
                <span className="vote-count">
                  {choclateCount} ({flavorPercentage(choclateCount)})
                </span>
              </div>

              <div
                className="progress"
                style={flavorWidth(choclateCount)}
              ></div>
            </div>
          )}

          {vanilaCount === 0 ? (
            ""
          ) : (
            <div className="flavors vanila">
              <div>
                <span>Vanila: </span>
                <span className="vote-count">
                  {vanilaCount} ({flavorPercentage(vanilaCount)})
                </span>
              </div>

              <div className="progress" style={flavorWidth(vanilaCount)}></div>
            </div>
          )}

          {strawberryCount === 0 ? (
            ""
          ) : (
            <div className="flavors strawberry">
              <div>
                <span>Strawberry: </span>
                <span className="vote-count">
                  {strawberryCount} ({flavorPercentage(strawberryCount)})
                </span>
              </div>

              <div
                className="progress"
                style={flavorWidth(strawberryCount)}
              ></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Votes;
