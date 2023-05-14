import React from "react";
import ContactListItem from "./ContactListItem";

const ContactList = () => {
  return (
    <div>
      <div className="min-h-[90vh] overflow-auto">
        {
          // проход по массиву и отображение списка
        }
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
      </div>
    </div>
  );
};

export default ContactList;
