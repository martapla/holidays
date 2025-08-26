import { Router } from "express";
import { getTasks, createTask } from "../controller/task.controller";

const router = Router();
   
// Define the route for getting all users
router.get("/", getTasks);
// Define the route for creating a new user
router.post('/', createTask);



// Export the router
export default router;


