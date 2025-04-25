import { IoCloseCircleOutline, IoCheckmarkOutline } from 'react-icons/io5';
import type { Task } from '../../interfaces';
import { removeTask, removingDraggingTaskId, setDraggingTaskId } from '../../store/slices';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

type SingleTaskProps = {
  task: Task;
};

export const SingleTask = ({ task }: SingleTaskProps) => {
  const dispatch: AppDispatch = useDispatch();

  const isDraggable = task.status !== 'done';

  const handleDragStart = () => {
    if (isDraggable) {
      dispatch(setDraggingTaskId(task.id));
    }
  };

  const handleDragEnd = () => {
    if (isDraggable) {
      dispatch(removingDraggingTaskId());
    }
  };

  const handleDeleteTask = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <div
      draggable={isDraggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700  ${
        isDraggable ? 'cursor-grab active:cursor-grabbing hover:shadow-md' : 'cursor-not-allowed opacity-90'
      }`}>
      <div className='flex items-center justify-between gap-2'>
        <p className='text-base font-bold'>{task.title}</p>
        {isDraggable && (
          <button
            onClick={handleDeleteTask}
            className='h-12 w-12 text-red-500 hover:text-red-700 transition-colors cursor-pointer'>
            <IoCloseCircleOutline size={20} />
          </button>
        )}
        {!isDraggable && <IoCheckmarkOutline size={20} color='green' />}
      </div>
    </div>
  );
};
