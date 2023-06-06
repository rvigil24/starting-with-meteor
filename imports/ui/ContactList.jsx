import React from "react";
import { useTracker } from 'meteor/react-meteor-data';

import { ContactsCollection } from "../api/ContactsCollection";

export const ContactList = () => {
    const contacts = useTracker(() => ContactsCollection.find({}).fetch());

    return <ul>
        <h2>Contact List</h2>
        {
            contacts.map((contact, index) => {
                console.log(contact);
                return (
                    <li key={index}>
                        {contact.name} - {contact.email}
                    </li>
                )
            })
        }
    </ul>
}