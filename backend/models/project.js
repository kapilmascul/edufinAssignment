const mongoose = require('mongoose');

// Define a task schema
const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    required: true
  }
});

// Define a main schema
const projectSchema = new mongoose.Schema({
  Id: { type: Number, required: true, unique: true },
  Name: { type: String, required: true },
  Tasks: [taskSchema]
});

// Create a Project model using the schema
const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = {
    ProjectModel
};