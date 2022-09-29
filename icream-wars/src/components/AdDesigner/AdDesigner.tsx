import "./AdDesigner.css";

const AdDesigner = () => {
  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <section className="add dark">
        <h3>Vote For</h3>
        <p>Choclate</p>
      </section>

      <section>
        <h3>What to Support</h3>
        <div>
          <button type="button">Choclate</button>
          <button type="button">Vanila</button>
          <button type="button">Strawberry</button>
        </div>
      </section>

      <section>
        <h3>Color Theme</h3>
        <div>
          <button type="button">Light</button>
          <button type="button">Dark</button>
        </div>
      </section>

      <section>
        <h3>Font Size</h3>
        <div>
          <button type="button">Down</button>
          <p>56</p>
          <button type="button">Up</button>
        </div>
      </section>
    </div>
  );
};

export default AdDesigner;
