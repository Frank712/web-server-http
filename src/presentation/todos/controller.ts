import { Request, Response } from "express";

export class TodosController {
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    res.json([
      { id: 1, text: "Buy house", createdAt: new Date() },
      { id: 2, text: "Buy car", createdAt: null },
      { id: 3, text: "Buy bussine", createdAt: new Date() },
    ]);
  };
}
