import { Application } from "express";
import { Controller } from "./controller";

export class RestRouter {

  private app: Application
  private upload: any;

  constructor(app: Application, upload) {
    this.app = app;
    this.upload = upload;
  }

  bind(path: string, controller: Controller) {

    this.app.all(path, this.upload.array(), function (req, res, next) {

      controller._setReq(req);
      controller._setRes(res);
      controller._setNext(next);

      switch (req.method) {
        case 'GET':
          controller.get();
          break;
        case 'POST':
          controller.post();
          break;
        case 'PUT':
          controller.put();
          break;
        case 'DELETE':
          controller.delete();
          break;

        default:
          break;
      }
    });

  }
}