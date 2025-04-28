import React from 'react';
import './css/ContactItem.css';

function ContactItem({ number, contact, deleteContact }) {
  return (
    <div className="contact-item">
      <span>{number}. {contact.name} - {contact.email}</span>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
}

export default ContactItem;
