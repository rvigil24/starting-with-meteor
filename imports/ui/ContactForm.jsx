import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { ErrorAlert } from "./components/ErrorAlert";
import { SuccessAlert } from "./components/SuccessAlert";

export const ContactForm = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        imageUrl: "",
    });
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");

    const showError = ({ message }) => {
        setError(message);
        setTimeout(() => {
            setError("");
        }, 5000);
    }

    const showSuccess = ({ message }) => {
        setSuccess(message);
        setTimeout(() => {
            setSuccess("");
        }, 5000);
    }

    const saveContact = (e) => {
        e.preventDefault();
        console.log("submitting");
        ContactsCollection.insert({ ...input }, (err, id) => {
            if (err) return console.error(err);
            setInput({
                name: "",
                email: "",
                imageUrl: ""
            });
            showSuccess("User has been added successfully!");
        });
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    return <form className="mt-6" onSubmit={saveContact}>
        {error && <ErrorAlert message={error} />}
        {success && <SuccessAlert message={success} />}
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={input.name}
                    onChange={onInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={onInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                    Image URL
                </label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={input.imageUrl}
                    onChange={onInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
        </div>
        <div className="px-2 py-3 text-right">
            <button
                type="submit"
                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
                Save Contact
            </button>
        </div>
    </form>
}