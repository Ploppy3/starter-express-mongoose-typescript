import mongoose = require('mongoose');

const schema_project = new mongoose.Schema({
  name: String,
});

export const Project = mongoose.model('Project', schema_project);