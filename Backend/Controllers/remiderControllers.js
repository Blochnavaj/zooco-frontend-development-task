import Reminder from '../Model/addRemiderModel.js';

 const getReminders = async (req, res) => {
  const reminders = await Reminder.find();
  res.json(reminders);
}

 const createReminder = async (req, res) => {
  const newReminder = new Reminder(req.body);
  const savedReminder = await newReminder.save();
  res.status(201).json(savedReminder);  
}


 const updateReminder = async (req, res) => {
    const updated = await Reminder.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
 }




const deleteReminder = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Deleting reminder with id:", id);

    const deleted = await Reminder.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Reminder not found" });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

 export {getReminders, createReminder, updateReminder, deleteReminder};
