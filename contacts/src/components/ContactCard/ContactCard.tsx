import Contact from "../../models/Contact";
import "./ContactCard.css";

interface Props {
  contact: Contact;
}

const ContactCard = ({ contact }: Props) => {
  return (
    <li className="ContactCard">
      <p>Full Name : {contact.fullName}</p>
      <p>Number : {contact.phoneNumber}</p>
      <p className={"" + (contact.isFavorite && "favorite")}>&hearts;</p>
    </li>
  );
};

export default ContactCard;
