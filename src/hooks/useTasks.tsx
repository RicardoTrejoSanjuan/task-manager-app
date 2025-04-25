import { DragEvent, useState } from 'react';
import Swal from 'sweetalert2';
import type { TaskStatus } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { addTask, onTaskDrop } from '../store/slices';

type props = {
  status: TaskStatus;
};

export const useTasks = ({ status }: props) => {
  const dispatch: AppDispatch = useDispatch();
  const isDragging = useSelector((state: RootState) => !!state.task.draggingTaskId);

  const [onDragOver, setOnDragOver] = useState(false);

  const handleAddTask = async (): Promise<void> => {
    const { isConfirmed, value } = await Swal.fire({
      title: 'New Task',
      input: 'text',
      inputLabel: 'Name new task',
      inputPlaceholder: 'Introduce the name',
      showCancelButton: true,
      inputValidator(value) {
        if (!value) {
          return 'Name is required';
        }
      },
    });
    if (!isConfirmed) return;
    dispatch(
      addTask({
        title: value,
        status,
      })
    );
  };

  const handleOnDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setOnDragOver(true);
  };
  const handleOnDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setOnDragOver(false);
  };
  const handleOnDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setOnDragOver(false);
    dispatch(onTaskDrop(status));
  };

  return {
    isDragging,
    onDragOver,
    handleAddTask,
    handleOnDragOver,
    handleOnDragLeave,
    handleOnDrop,
  };
};
