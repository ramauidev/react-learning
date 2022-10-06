import Contact from "../../models/Contact";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactList.css";

interface Props {
  contacts: Contact[];
  onDelete: (index: number) => void;
}

const ContactList = ({ contacts, onDelete }: Props) => {
  return (
    <div className="ContactList">
      <ul>
        {contacts.map((contact, index) => (
          <ContactCard
            key={contact.phoneNumber}
            contact={contact}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
