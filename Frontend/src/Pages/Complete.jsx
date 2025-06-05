 import React, { useEffect, useState } from 'react';
import { getReminders, deleteReminder, updateReminder } from '../services/api';

const Complete = () => {
  const [reminders, setReminders] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({ title: '', pet: '', category: '', notes: '', startDate: '', frequency: '' });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getReminders();
        setReminders(data);
      } catch (err) {
        console.error('Failed to fetch reminders:', err);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!id) return alert("Invalid reminder ID");
    try {
      await deleteReminder(id);
      setReminders(reminders.filter(r => r._id !== id));
    } catch (error) {
      console.error("Failed to delete reminder:", error);
    }
  };

  const startEditing = (reminder) => {
    setEditingId(reminder._id);
    setEditFormData({
      title: reminder.title,
      pet: reminder.pet,
      category: reminder.category,
      notes: reminder.notes || '',
      startDate: reminder.startDate ? reminder.startDate.slice(0,16) : '', // for datetime-local input
      frequency: reminder.frequency
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const updatedReminder = await updateReminder(editingId, {
        ...editFormData,
        startDate: new Date(editFormData.startDate).toISOString()
      });
      setReminders(reminders.map(r => (r._id === editingId ? updatedReminder : r)));
      setEditingId(null);
    } catch (error) {
      console.error('Failed to update reminder:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-primary">All Reminders</h2>
      {reminders.length === 0 ? (
        <p>No reminders found.</p>
      ) : (
        <ul>
          {reminders.map((reminder) => (
            <li key={reminder._id} className="border p-3 mb-2 rounded">
              {editingId === reminder._id ? (
                <>
                  <input
                    type="text"
                    name="title"
                    value={editFormData.title}
                    onChange={handleEditChange}
                    className="border mb-1 p-1 w-full"
                  />
                  <input
                    type="text"
                    name="pet"
                    value={editFormData.pet}
                    onChange={handleEditChange}
                    className="border mb-1 p-1 w-full"
                  />
                  <input
                    type="text"
                    name="category"
                    value={editFormData.category}
                    onChange={handleEditChange}
                    className="border mb-1 p-1 w-full"
                  />
                  <textarea
                    name="notes"
                    value={editFormData.notes}
                    onChange={handleEditChange}
                    className="border mb-1 p-1 w-full"
                  />
                  <input
                    type="datetime-local"
                    name="startDate"
                    value={editFormData.startDate}
                    onChange={handleEditChange}
                    className="border mb-1 p-1 w-full"
                  />
                  <input
                    type="text"
                    name="frequency"
                    value={editFormData.frequency}
                    onChange={handleEditChange}
                    className="border mb-1 p-1 w-full"
                  />
                  <button
                    onClick={handleUpdate}
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h3 className="font-semibold">{reminder.title}</h3>
                  <p>Pet: {reminder.pet}</p>
                  <p>Category: {reminder.category}</p>
                  <p>Notes: {reminder.notes || 'No notes'}</p>
                  <p>Start Date: {new Date(reminder.startDate).toLocaleString()}</p>
                  <p>Frequency: {reminder.frequency}</p>
                  <button
                    onClick={() => handleDelete(reminder._id)}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => startEditing(reminder)}
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Complete;
