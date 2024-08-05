import React, { useState } from 'react';
import axios from 'axios';
import './ReminderForm.css';

const ReminderForm = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reminder = { name, mobile, amount, date, time };

        try {
            const response = await axios.post('http://localhost:3001/set-reminder', reminder);
            alert(response.data);
        } catch (error) {
            console.error('There was an error setting the reminder!', error);
        }
    };

    return (
        <div className="form-container">
            <h1>Set Debt Reminder</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="mobile">Enter Phone</label>
                    <input
                        id="mobile"
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="date">Set Time to Notify</label>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                        id="time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <button type="submit">Set Reminder</button>
            </form>
        </div>
    );
};

export default ReminderForm;
