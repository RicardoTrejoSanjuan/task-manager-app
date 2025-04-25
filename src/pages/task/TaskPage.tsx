import { Card } from '../../components/card/Card';
import { ListItem } from '../../components/listItem/ListItem';

export const TaskPage = () => {
  return (
    <div className='flex-1 text-gray-800 dark:text-gray-200 p-4'>
      <div className='max-w-4xl mx-auto px-6 py-10'>
        {/* Header Section */}
        <header className='mb-12 text-center'>
          <h1 className='text-5xl font-bold mb-4'>
            React/Angular<span className='text-indigo-800 dark:text-indigo-600'> Development Task</span>
          </h1>
          <h2 className='text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300'>
            Task 1: React (with Redux & TypeScript)
          </h2>
          <p className='text-lg'>
            <strong>Task:</strong> Build a simple Task Manager App
          </p>
        </header>

        {/* Requirements Section */}
        <section className='mb-12'>
          <Card title='Requirements'>
            <ul className='list-none space-y-4'>
              {[
                'Users should be able to add, delete, and mark tasks as completed.',
                'Use Redux Toolkit for state management.',
                'Persist tasks in local storage or a mock API.',
                'Implement a responsive UI with CSS/HTML.',
                'Ensure TypeScript type safety.',
              ].map((requirement, index) => (
                <ListItem key={index} icon='✅' text={requirement} iconColor='text-green-500' />
              ))}
            </ul>
          </Card>
        </section>

        {/* Bonus Points Section */}
        <section className='mb-12'>
          <Card title='Bonus Points'>
            <ul className='list-none space-y-4'>
              {[
                'Implement drag-and-drop functionality (e.g., using react-beautiful-dnd).',
                'Add dark mode toggle with Context API.',
              ].map((bonus, index) => (
                <ListItem key={index} icon='✨' text={bonus} iconColor='text-yellow-500' />
              ))}
            </ul>
          </Card>
        </section>

        {/* Additional Features Section */}
        <section className='mb-12'>
          <Card title='Additional Features'>
            <ul className='list-none space-y-4'>
              {['Unit Tests with Jest and React Testing Library.', 'Documentation with JDocument.', 'Deploy the app.'].map(
                (feature, index) => (
                  <ListItem key={index} icon='🚀' text={feature} iconColor='text-blue-500' />
                )
              )}
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
};
