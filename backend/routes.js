import express from "express";
import { Router } from "express";

const router = Router();

// GET //TODOS

router.get("/todos", (req, res) => {
  res.status(200).json({ message: "GET REQUEST TO /api/todos" });
});

// POST //TODOS
router.post("/todos", (req, res) => {
  res.status(201).json({ message: "POST REQUEST TO /api/todos" });
});

// PUT //TODOS
router.put("/todos/:id", (req, res) => {
  res.status(200).json({ message: `PUT REQUEST TO /api/todos/:id` });
});

// DELETE //TODOS/:ID
router.delete("/todos/:id", (req, res) => {
  res.status(200).json({ message: `DELETE REQUEST TO /api/todos/:id` });
});

export default router;
