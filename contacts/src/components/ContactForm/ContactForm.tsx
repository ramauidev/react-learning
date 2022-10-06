import { FormEvent, useState } from "react";
import Contact from "../../models/Contact";
import "./ContactForm.css";

interface Props {
  onSubmitForm: (contact: Contact) => void;
  onClose: (state: boolean) => void;
}

const ContactForm = ({ onSubmitForm, onClose }: Props) => {
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const submit = (e: FormEvent): void => {
    e.preventDefault();
    onSubmitForm({ fullName, phoneNumber: Number(number), isFavorite });
    onClose(false);
  };

  return (
    <form className="ContactForm" onSubmit={submit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input
          type="number"
          id="number"
          name="number"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isFavorite">Is Favorite?</label>
        <input
          type="checkbox"
          name="isFavorite"
          id="isFavorite"
          checked={isFavorite}
          onChange={(e) => setIsFavorite(e.target.checked)}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ContactForm;
