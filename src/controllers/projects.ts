import { Controller } from "../controller";
import { Project } from "../models/project";

export class ControllerProjects extends Controller {

  constructor() {
    super();
  }

  get() {
    Project.find({}, 'name').then(projects => {
      if (projects !== null) {
        this.res.json(projects);
      } else {
        this.res.status(404).json();
      }
    }, err => {
      this.res.status(500).json(err);
    });
  }

  post() {
    if (this.validateBodyFormData(['name'])) {
      const project = new Project({ name: this.req.body.name });
      project.save().then(() => {
        this.res.json(project);
      }).catch(this.next);
    }
  }

  delete() {
    Project.collection.drop();
    this.res.json('success');
  }
}