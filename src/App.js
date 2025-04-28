import React, { useState } from 'react';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import './component/css/App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
