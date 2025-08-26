import  {Schema, model, Document} from 'mongoose';

// Define the Task interface
export interface Task extends Document {
  taskname: string;
}

// Define the Task schema tabla compass
const taskSchema = new Schema<Task>({
    taskname: { type: String, required:true },
});

//Interactuar con la base de datos
const TaskModel = model<Task>('Task', taskSchema);

export default TaskModel;