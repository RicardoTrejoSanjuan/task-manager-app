import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskStatus } from '../../interfaces';

interface TaskState {
  tasks: Record<string, Task>;
  draggingTaskId?: string;
}

const initialState: TaskState = {
  tasks: {
    'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
    'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'in-progress' },
    'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'open' },
    'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
  },
  draggingTaskId: undefined,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string; status: TaskStatus }>) => {
      const newTask: Task = {
        id: uuidv4(),
        title: action.payload.title,
        status: action.payload.status,
      };
      state.tasks[newTask.id] = newTask;
    },
    setDraggingTaskId: (state, action: PayloadAction<string>) => {
      state.draggingTaskId = action.payload;
    },
    removingDraggingTaskId: state => {
      state.draggingTaskId = undefined;
    },
    changeTaskStatus: (state, action: PayloadAction<{ taskId: string; status: TaskStatus }>) => {
      const task = state.tasks[action.payload.taskId];
      if (task) {
        task.status = action.payload.status;
      }
    },
    onTaskDrop: (state, action: PayloadAction<TaskStatus>) => {
      const taskId = state.draggingTaskId;
      if (taskId && state.tasks[taskId]) {
        state.tasks[taskId].status = action.payload;
        state.draggingTaskId = undefined;
      }
    },
    loadTasksFromStorage: (state, action: PayloadAction<Record<string, Task>>) => {
      state.tasks = action.payload;
    },
    removeTask: (state, action) => {
      const taskIdToRemove = action.payload;
      state.tasks = Object.fromEntries(Object.entries(state.tasks).filter(([_, task]) => task.id !== taskIdToRemove));
    },
  },
});

export const {
  addTask,
  setDraggingTaskId,
  removingDraggingTaskId,
  changeTaskStatus,
  onTaskDrop,
  loadTasksFromStorage,
  removeTask,
} = taskSlice.actions;
