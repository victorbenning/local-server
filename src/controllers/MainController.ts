import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    let fileName = req.query.name;
    const dataFolder = path.resolve(__dirname, "..", "data");
    const fullPath = dataFolder + `/${fileName === undefined ? "asos-product-list.json" : fileName}`;
    
    if (fs.existsSync(fullPath)) { 
      const data = fs.readFileSync(fullPath);
      const products = JSON.parse(data);
      res.status(200).send(products);
    } else { 
      res.status(500).json({ error: 'Could not find file'})
    }
  },
};
