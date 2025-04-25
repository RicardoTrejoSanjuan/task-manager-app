/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { MdPendingActions } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';
import { IoMdDoneAll } from 'react-icons/io';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { JiraTasks } from './JiraTasks';
import { Task, TaskStatus } from '../../interfaces';

export const Jira = () => {
  const { tasks } = useSelector((state: RootState) => state.task);

  const [pending, setPending] = useState<Task[]>([]);
  const [inProgress, setInProgress] = useState<Task[]>([]);
  const [done, setDone] = useState<Task[]>([]);

  const getTaskByStatus = (status: TaskStatus): Task[] => {
    return Object.values(tasks).filter(task => task.status === status);
  };

  useEffect(() => {
    setPending(getTaskByStatus('open'));
    setInProgress(getTaskByStatus('in-progress'));
    setDone(getTaskByStatus('done'));
  }, [tasks]);
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <JiraTasks title='Peding Task' status='open' tasks={pending} icon={MdPendingActions} />
        <JiraTasks title='In Progress Task' status='in-progress' tasks={inProgress} icon={GiProgression} />
        <JiraTasks title='Done Task' status='done' tasks={done} icon={IoMdDoneAll} />
      </div>
    </>
  );
};
