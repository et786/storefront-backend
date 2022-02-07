import app from "../server";
import express from "express";

const router = express.Router();

// Root endpoint
router.get("/", (req: express.Request, res: express.Response): void => {
  res.send("/");
});

export default router;
