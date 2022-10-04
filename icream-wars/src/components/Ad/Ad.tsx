import "./Ad.css";

interface Props {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

const Ad = ({ flavor, fontSize, darkTheme }: Props) => {
  return (
    <div className={"Ad " + (darkTheme ? "dark" : "")}>
      <h3>Vote For</h3>
      <p style={{ fontSize: `${fontSize}px` }}>{flavor}</p>
    </div>
  );
};

export default Ad;
