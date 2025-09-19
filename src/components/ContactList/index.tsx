import Contact from "./Contact";
import css from "./style.module.css";
import { ContactType } from "../../types";

type ContactsType = {
  contacts: ContactType[];
  onDelete: (value: string) => void;
};


function ContactList({ contacts, onDelete }: ContactsType) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li
          className={[css.contactItem, "block-bordered"].join(" ")}
          key={contact.id}
        >
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
