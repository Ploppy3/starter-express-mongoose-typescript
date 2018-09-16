import { Response, Request, NextFunction } from "express";

export class Controller {

  protected req: Request;
  protected res: Response;
  protected next: NextFunction;

  constructor() { }

  validateBodyFormData(keys: string[]) {
    const missingKeys = [];
    keys.forEach(key => {
      if (!(key in this.req.body)) {
        missingKeys.push(key);
      }
    });
    if (missingKeys.length > 0) {
      this.res.status(400).json('missing body params [' + missingKeys.join(', ') + ']');
      return false;
    }
    return true;
  }

  validateQueryParams(keys: string[]) {
    const missingKeys = [];
    keys.forEach(key => {
      if (!(key in this.req.query)) {
        missingKeys.push(key);
      }
    });
    if (missingKeys.length > 0) {
      this.res.status(400).json('missing body params [' + missingKeys.join(', ') + ']');
      return false;
    }
    return true;
  }

  get() {
    this.next();
  }

  post() {
    this.next();
  }

  put() {
    this.next();
  }

  delete() {
    this.next();
  }

  _setRes(res: Response) {
    this.res = res;
  }

  _setReq(req: Request) {
    this.req = req;
  }

  _setNext(next) {
    this.next = next;
  }

  _isReqBodyUndefined() {
    if (this.req.body === undefined) {
      this.res.status(400).json('bad request');
      return true;
    }
    return false;
  }

}