 import React, { useState } from 'react';
import { addReminder } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [form, setForm] = useState({
    pet: '',
    category: 'General',
    title: '',
    notes: '',
    startDate: '',
    frequency: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
const navigate = useNavigate(); // get navigate function
 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReminder(form);
      setSuccess(true);
      setError('');
      setForm({
        pet: '',
        category: 'General',
        title: '',
        notes: '',
        startDate: '',
        frequency: ''
      });
      // Navigate to /completed and pass the new reminder in state
      navigate('/complete');
    } catch (err) {
      setError('Something went wrong!');
      setSuccess(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-primary">Add a New Reminder 🐾</h2>
      {success && <p className="text-green-600 mb-3">Reminder added successfully!</p>}
      {error && <p className="text-red-500 mb-3">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="pet"
          placeholder="Pet Name"
          value={form.pet}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option>General</option>
          <option>Lifestyle</option>
          <option>Health</option>
        </select>

        <input
          type="text"
          name="title"
          placeholder="Reminder Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          name="notes"
          placeholder="Optional Notes"
          value={form.notes}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="datetime-local"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          name="frequency"
          placeholder="e.g., Daily, Weekly"
          value={form.frequency}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Reminder
        </button>
      </form>
    </div>
  );
};

export default Add;
