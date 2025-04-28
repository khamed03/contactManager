import React from 'react';
// import ContactItem from './ContactItem';
// import '../css/ContactList.css';

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        contacts.map((contact, index) => (
          <ContactItem
            key={contact.id}
            number={index + 1}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
}

export default ContactList;
