 import express from 'express';
 import { getReminders, createReminder, updateReminder, deleteReminder } from '../Controllers/remiderControllers.js';
const router = express.Router();

// Define routes for reminders
router.get('/', getReminders); // Get all reminders
router.post('/', createReminder); // Create a new reminder
router.put('/:id', updateReminder); // Update a reminder by ID  
router.delete('/:id', deleteReminder); // Delete a reminder by ID
export default router;
