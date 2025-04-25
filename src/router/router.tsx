import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../Root';
import { DashboardLayout } from '../layouts';
import { DashboardPage } from '../pages/dashboard/DashboardPage';
import { TaskPage } from '../pages/task/TaskPage';
import { AboutMePage } from '../pages/about_me/AboutMePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <DashboardPage />,
          },
          {
            path: 'task',
            element: <TaskPage />,
          },
          {
            path: 'about-me',
            element: <AboutMePage />,
          },
        ],
      },
    ],
  },
]);
