import { NextFunction, Request, Response } from "express";
import Queue from "../models/Queue";

var developQueue: Queue[] = [];

export default {
  async claim(req: Request, res: Response, next: NextFunction) {
    let payload = req.body;
    
    let item = new Queue();
    let instructions = payload.text.split(" ", 2);
    
    Object.assign(item, { 
      user_name: payload.user_name,
      pr_id: instructions[0]
    });
    
    if(instructions[1] === '--priority') { 
      developQueue.splice(0, 0, item);
    } else { 
      developQueue.push(item);
    }

    res.send(developQueue.map( item => item.user_name));
  },

  async show(req: Request, res: Response, next: NextFunction) {
    res.send(developQueue.map( item => item.user_name));
  },

  async done(req: Request, res: Response, next: NextFunction) {
    let payload = req.body
    let pr_number = payload.pr_id;
    let user_name = payload.user_name;
    
    if(pr_number != undefined) { 
      developQueue = developQueue.filter((u) => u.pr_number != pr_number);
    } else { 
      const index = developQueue.findIndex((u) => u.user_name != user_name);
      if(index >= 0) { 
        developQueue.splice(index, 1);
      }
    }
  
    res.send(developQueue.map( item => item.user_name));
  },
};
