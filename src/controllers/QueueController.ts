import { Request, Response } from "express";
var developQueue: any[] = [];

export default {
  async event(req: Request, res: Response) {
    developQueue.push(req.body.event);
    return res.json({ queue: developQueue, message: req.body.event });
  },
};
