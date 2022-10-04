import Contact from "../../models/Contact";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactList.css";

interface Props {
  contacts: Contact[];
}

const ContactList = ({ contacts }: Props) => {
  return (
    <div className="ContactList">
      <ul>
        {contacts.map((contact) => (
          <ContactCard key={contact.phoneNumber} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
