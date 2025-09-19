import { ContactType } from "../../types";

type ContactProps = ContactType & {
  deleteContact: (id: string) => void;
};

function Contact({ name, number, id, deleteContact }: ContactProps) {
  return (
    <>
      <div>
        <span>
          <svg width="15" height="15">
            <use href="/icons.svg#icon-user" />
          </svg>
          {name}
        </span>
        <span>
          <svg width="15" height="15">
            <use href="/icons.svg#icon-phone" />
          </svg>
          {number}
        </span>
      </div>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </>
  );
}

export default Contact;
