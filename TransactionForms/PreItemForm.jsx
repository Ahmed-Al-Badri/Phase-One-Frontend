import React, { useState } from 'react';
import './ItemStyle.css';

function PreItemForm({ onSubmit }) {
    const [form, setForm] = useState({name: '', price: '', currency: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({name: '', price: '', currency: ''});
    };

    return (
        <form onSubmit={handleSubmit} className="item-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="currency">Currency:</label>
                <input
                    type="text"
                    id="currency"
                    name="currency"
                    value={form.currency}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
}
