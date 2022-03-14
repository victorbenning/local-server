import { NextFunction, Request, Response } from "express";
import axios from "axios";

var developQueue: any[] = [];

export default {
  async claim(req: Request, res: Response, next: NextFunction) {
    
    developQueue.push(req.body.user_name);

    res.send(developQueue);
  },

  async show(req: Request, res: Response, next: NextFunction) {
    res.send(developQueue);
  },

  async done(req: Request, res: Response, next: NextFunction) {
    let payload = req.body;

    const user = payload.user_name;
    developQueue = developQueue.filter((u) => u != user);

    res.send(developQueue);
  },
};
