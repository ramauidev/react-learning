import { useState } from "react";
import Contact from "../../models/Contact";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import "./Home.css";

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      fullName: "Mom",
      phoneNumber: 1231231234,
      isFavorite: true,
    },
    {
      fullName: "Dad",
      phoneNumber: 1231231235,
      isFavorite: true,
    },
    {
      fullName: "David",
      phoneNumber: 1231231236,
      isFavorite: false,
    },
    {
      fullName: "Nance",
      phoneNumber: 1231231237,
      isFavorite: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const deleteContact = (index: number): void => {
    setContacts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const addContact = (contact: Contact): void => {
    setContacts((prev) => [...prev.slice(0), contact]);
  };

  return (
    <div className="Home">
      <button onClick={() => setShowForm(true)}>Show Form</button>
      {showForm && (
        <ContactForm onSubmitForm={addContact} onClose={setShowForm} />
      )}
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default Home;
