import express = require('express');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');
import multer = require('multer');
import { RestRouter } from './router-rest';
import { ControllerProjects } from './controllers/projects';
import { ControllerProject } from './controllers/project';
// ------------------------------------------------------------
const app = express();
// ------------------------------------------------------------
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Successfully connected to MongoDb');
});
// ------------------------------------------------------------
const upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ------------------------------------------------------------
const router = new RestRouter(app, upload);
router.listen('/projects/:id', new ControllerProject());
router.listen('/projects', new ControllerProjects());
// ------------------------------------------------------------
app.all('*', function (req, res) {
  res.status(404).json('not found');
});
// ------------------------------------------------------------
app.listen(3000, () => console.log('Example app listening on port 3000!'));
