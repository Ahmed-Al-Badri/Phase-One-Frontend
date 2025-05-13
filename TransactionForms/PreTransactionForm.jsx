/*type Pre_Transaction = {
  From: string;
  Date: string;
  items: Item[];
};*/

import React, { useState } from 'react';
import './ItemStyle.css';

function PreTransactionForm({ onSubmit }) {
    const [form, setForm] = useState({
        From: '',
        Date: '',
        items: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const newItems = [...form.items];
        newItems[index] = {
            ...newItems[index],
            [name]: value,
        };
        setForm((prevForm) => ({
            ...prevForm,
            items: newItems,
        }));
    };
    const handleAddItem = () => {
        setForm((prevForm) => ({
            ...prevForm,
            items: [...prevForm.items, { name: '', price: '', currency: '' }],
        }));
    };
    const handleRemoveItem = (index) => {
        const newItems = [...form.items];
        newItems.splice(index, 1);
        setForm((prevForm) => ({
            ...prevForm,
            items: newItems,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            From: '',
            Date: '',
            items: [],
        });
    };

    return (
        <form onSubmit={handleSubmit} className="item-form">
            <div>
                <label htmlFor="From">From:</label>
                <input
                    type="text"
                    id="From"
                    name="From"
                    value={form.From}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="Date">Date:</label>
                <input
                    type="date"
                    id="Date"
                    name="Date"
                    value={form.Date}
                    onChange={handleChange}
                    required
                />
            </div>
            {form.items.map((item, index) => (
                <div key={index} className="item">
                    <h3>Item {index + 1}</h3>
                    <div>
                        <label htmlFor={`name-${index}`}>Name:</label>
                        <input
                            type="text"
                            id={`name-${index}`}
                            name="name"
                            value={item.name}
                            onChange={(e) => handleItemChange(index, e)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor={`price-${index}`}>Price:</label>
                        <input
                            type="number"
                            id={`price-${index}`}
                            name="price"
                            value={item.price}
                            onChange={(e) => handleItemChange(index, e)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor={`currency-${index}`}>Currency:</label>
                        <input
                            type="text"
                            id={`currency-${index}`}
                            name="currency"
                            value={item.currency}
                            onChange={(e) => handleItemChange(index, e)}
                            required
                        />
                    </div>
                    <button type="button" onClick={() => handleRemoveItem(index)}>Remove Item</button>
                </div>
            ))}
            <button type="button" onClick={handleAddItem}>Add Item</button>
            <button type="submit">Add Transaction</button>
        </form>
    );
}
