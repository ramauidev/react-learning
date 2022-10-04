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

  return (
    <div className="Home">
      <button onClick={() => setShowForm(!showForm)}>Show Form</button>
      {showForm && <ContactForm />}
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Home;
