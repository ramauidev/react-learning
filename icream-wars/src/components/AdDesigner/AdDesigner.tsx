import { useState } from "react";
import Ad from "../Ad/Ad";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [fontsize, setFontsize] = useState(30);
  const [flavor, setflavor] = useState("Choclate");
  const [darkTheme, setDarkTheme] = useState(false);

  function assignflavor(name: string) {
    setflavor(name);
  }

  function fontsizeUp() {
    setFontsize((prev) => prev + 1);
  }

  function fontsizeDown() {
    setFontsize((prev) => prev - 1);
  }

  let flavorFontsize = {
    fontSize: fontsize + "px",
  };

  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      {/* <section className={"Ad " + (darkTheme ? "dark" : "light")}>
        <h3>Vote For</h3>
        <p style={flavorFontsize}>{flavor}</p>
      </section> */}

      <Ad flavor={flavor} fontSize={fontsize} darkTheme={darkTheme} />

      <section>
        <h3>What to Support</h3>
        <div>
          <button
            type="button"
            onClick={() => assignflavor("Choclate")}
            disabled={flavor === "Choclate"}
          >
            Choclate
          </button>
          <button
            type="button"
            onClick={() => assignflavor("Vanila")}
            disabled={flavor === "Vanila"}
          >
            Vanila
          </button>
          <button
            type="button"
            onClick={() => assignflavor("Strawberry")}
            disabled={flavor === "Strawberry"}
          >
            Strawberry
          </button>
        </div>
      </section>

      <section>
        <h3>Color Theme</h3>
        <div>
          <button
            type="button"
            onClick={() => setDarkTheme(false)}
            disabled={!darkTheme}
          >
            Light
          </button>
          <button
            type="button"
            onClick={() => setDarkTheme(true)}
            disabled={darkTheme}
          >
            Dark
          </button>
        </div>
      </section>

      <section>
        <h3>Font Size</h3>
        <div>
          <button type="button" onClick={fontsizeDown}>
            Down
          </button>
          <span className="font-size-text">{fontsize}</span>
          <button type="button" onClick={fontsizeUp}>
            Up
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdDesigner;
