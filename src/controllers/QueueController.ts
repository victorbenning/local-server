import { Request, Response } from "express";
var developQueue: any[] = [];

export default {
  async event(req: Request, res: Response) {
    developQueue.push(req.body);
    return res.json({ queue: developQueue, message: req.body.event });
  },
};
