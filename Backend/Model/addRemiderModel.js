import mongoose from 'mongoose'; 

const ReminderSchema = new mongoose.Schema({
  pet: String,
  category: String,
  title: String,
  notes: String,
  startDate: Date,
  frequency: String,
  completed: { type: Boolean, default: false }
});

 const Reminder  = mongoose.model('Reminder', ReminderSchema);
 export default Reminder;