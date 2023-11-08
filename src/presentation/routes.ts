import { Router } from "express";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.get("/api/todos", (req, res) => {
      res.json([
        { id: 1, text: "Buy house", createdAt: new Date() },
        { id: 2, text: "Buy car", createdAt: null },
        { id: 3, text: "Buy bussine", createdAt: new Date() },
      ]);
    });

    return router;
  }
}
