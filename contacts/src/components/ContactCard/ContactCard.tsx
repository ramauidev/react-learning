import Contact from "../../models/Contact";
import "./ContactCard.css";

interface Props {
  contact: Contact;
  onDelete: () => void;
}

const ContactCard = ({ contact, onDelete }: Props) => {
  return (
    <li className="ContactCard">
      <p>Full Name : {contact.fullName}</p>
      <p>Number : {contact.phoneNumber}</p>
      <p className={"" + (contact.isFavorite && "favorite")}>&hearts;</p>
      <button onClick={() => onDelete()}>Delete</button>
    </li>
  );
};

export default ContactCard;
