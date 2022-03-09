import { NextFunction, Request, Response } from "express";
var developQueue: any[] = [];

export default {
  async event(req: Request, res: Response, next: NextFunction) {
    let payload = req.body;
    res.sendStatus(200);

    developQueue.push(req.body);
    return res.json({ queue: developQueue, payload});
  },
};
