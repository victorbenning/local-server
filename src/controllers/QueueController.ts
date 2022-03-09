import { NextFunction, Request, Response } from "express";
import axios from "axios";

var developQueue: any[] = [];

export default {
  async event(req: Request, res: Response, next: NextFunction) {
    let payload = req.body;

    if (payload.command == '/claim') { 
      developQueue.push(req.body.user_name);
    }
    else if (payload.command == '/done') { 
      const user = payload.user_name;
      developQueue = developQueue.filter(u => u != user);
    }

    
    console.log({ queue: developQueue, payload});
    res.send(developQueue);
  },
};
