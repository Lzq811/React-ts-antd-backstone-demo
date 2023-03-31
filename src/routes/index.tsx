import type { RouteObject } from 'react-router-dom'
import { Outlet, Link, useRoutes, useParams } from 'react-router-dom'

import WorkBench from '@pages/work-bench'
import Login from '@pages/login'
import Dashboard from '@pages/dashbord'
import NoFind from '@pages/no-find'
import List from '@pages/list'

const routes: RouteObject[] = [
	{
		path: '/',
		element: <WorkBench />,
		children: [
			{
				index: true,
				element: <WorkBench />
			},
			{
				path: '/dashboard',
				element: <Dashboard />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/List',
				element: <List />
			},
			{
				path: '*',
				element: <NoFind />
			}
		]
	}
]

export default useRoutes(routes)
