import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask } from "../controller/task.controller";

const router = Router();
   
// CRUD
router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);



// Export the router
export default router;


