import axios from 'axios';

const API_BASE_URL = 'https://zooco-frontend-development-task.onrender.com/api/reminders';

export const getReminders = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};

export const addReminder = async (data) => {
  const res = await axios.post(API_BASE_URL, data);
  return res.data;
};

export const updateReminder = async (id, data) => {
  const res = await axios.put(`${API_BASE_URL}/${id}`, data);
  return res.data;
};

export const deleteReminder = async (id) => {
  const res = await axios.delete(`${API_BASE_URL}/${id}`);
  return res.data;
};
