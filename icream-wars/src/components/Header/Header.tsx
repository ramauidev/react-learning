import "./Header.css";

interface Props {
  user: string;
}

const Header = ({ user }: Props) => {
  return (
    <div className="Header">
      <h1>Ice Cream Wars</h1>
      <p> Welcome {user}</p>
    </div>
  );
};

export default Header;
