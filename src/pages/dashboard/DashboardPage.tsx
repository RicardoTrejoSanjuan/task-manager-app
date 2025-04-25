import { Jira } from '../../components/jira/Jira';

export const DashboardPage = () => {
  return (
    <main className='flex-1'>
      <section className='container mx-auto px-6'>
        <div className='p-8 text-center'>
          <h1 className='text-5xl font-bold mb-4'>
            Welcome to <span className='text-indigo-800 dark:text-indigo-600'>Task Manager</span>
          </h1>
          <p className='text-lg mb-8 text-gray-700 dark:text-gray-400'>
            A collaborative task board for organizing, tracking, and managing your tasks in real-time.
          </p>
          <Jira />
        </div>
      </section>
    </main>
  );
};
