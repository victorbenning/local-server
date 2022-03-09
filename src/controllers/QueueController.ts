import { Request, Response } from "express";
var developQueue: any[] = [];

export default {
  async index(req: Request, res: Response) {
    return res.json({ queue: developQueue });
  },
};
