import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import contactsData from "./data/contacts.json";
import { ContactType } from "./types";

function App() {
  const [contacts, setContacts] = useState<ContactType[]>(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? (JSON.parse(saved) as ContactType[]) : contactsData;
  });

  const [filteredContacts, setFilteredContacts] =
    useState<ContactType[]>(contactsData);

  const [searchValue, setSearchValue] = useState("");

  const deleteContact = (id: string) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const addContact = (newContact: ContactType) => {
    setContacts((prev) => [...prev, newContact]);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const updatedContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredContacts(updatedContacts);
  }, [contacts, searchValue]);

  return (
    <div className="container">
      <h1 className="page-title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchValue} onChange={setSearchValue} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
