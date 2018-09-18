import express = require('express');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');
import multer = require('multer');
import { RestRouter } from './router-rest';
import { ControllerProjects } from './controllers/projects';
import { ControllerProject } from './controllers/project';
import { logger } from './logger';
// ------------------------------------------------------------
const app = express();
// ------------------------------------------------------------
logger.init();
// ------------------------------------------------------------
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', () => {
  logger.warn('Could not connect to the database');
});
db.once('open', () => {
  logger.log('Successfully connected to MongoDb');
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
app.listen(3000, () => logger.log('Listening on port 3000'));
