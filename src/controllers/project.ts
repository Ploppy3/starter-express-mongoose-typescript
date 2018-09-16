import { Controller } from "../controller";
import { Project } from "../models/project";

export class ControllerProject extends Controller {

  constructor() {
    super();
  }

  get() {
    Project.find({ _id: this.req.params.id }).then(project => {
      if (project !== null) {
        this.res.json(project);
      } else {
        this.res.status(404).json({ message: 'not found' });
      }
    }, err => {
      this.res.status(500).json(err);
    });
  }
}