import { IoAddCircleOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';

import type { Task, TaskStatus } from '../../interfaces';
import { SingleTask } from './SingleTask';
import { CustomIcon } from './CustomIcon';
import { useTasks } from '../../hooks/useTasks';
import classNames from 'classnames';

interface JiraTasksProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  icon: IconType;
}

export const JiraTasks = ({ title, status, tasks, icon }: JiraTasksProps) => {
  const { isDragging, onDragOver, handleAddTask, handleOnDragOver, handleOnDragLeave, handleOnDrop } = useTasks({ status });

  return (
    <div
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={handleOnDrop}
      className={classNames(
        'flex flex-col w-full min-h-[300px] rounded-2xl bg-white dark:bg-gray-900 shadow-md p-5 transition-colors duration-200',
        {
          'border-blue-500 border-dotted border-4': isDragging,
          'border-green-500 border-dotted border-4': isDragging && onDragOver,
        }
      )}>
      {/* Task Header */}
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-2'>
          <div className='p-2 bg-indigo-100 dark:bg-indigo-500 rounded-full'>
            <CustomIcon Icon={icon} size={24} color='indigo' />
          </div>
          <h2 className='text-lg font-semibold'>{title}</h2>
        </div>
        <button
          onClick={handleAddTask}
          className='text-indigo-500 hover:text-indigo-700 transition-transform hover:scale-110'
          title='Add Task'>
          {status !== 'done' && <IoAddCircleOutline size={24} />}
        </button>
      </div>

      {/* Task Items */}
      <div className='flex flex-col gap-3'>
        {tasks.map(task => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
