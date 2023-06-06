import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";

export const ContactForm = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        imageUrl: "",
    });

    const saveContact = (e) => {
        e.preventDefault();
        ContactsCollection.insert({ ...input }, (err, id) => {
            if (err) return console.error(err);
            setInput({
                name: "",
                email: "",
                imageUrl: ""
            });
        });
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    return <form onSubmit={saveContact}>
        {/* name */}
        <div>
            <label htmlFor="name">
                Name{" "}
            </label>
            <input
                onChange={onInputChange}
                type="text"
                name="name"
                value={input["name"]}
                id="name" />
        </div>
        {/* email */}
        <div>
            <label htmlFor="email">
                Email{" "}
            </label>
            <input
                onChange={onInputChange}
                type="email"
                name="email"
                value={input["email"]}
                id="email" />
        </div>
        {/* image url */}
        <div>
            <label htmlFor="imageUrl">
                Image URL{" "}
            </label>
            <input
                onChange={onInputChange}
                type="text"
                name="imageUrl"
                value={input["imageUrl"]}
                id="imageUrl" />
        </div>
        {/* save contact */}
        <button>Save contact</button>
    </form>
}