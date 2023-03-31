import { Button, ConfigProvider } from 'antd'
import React from 'react'
import 'antd/dist/reset.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import RoutesElement from './routes'
import WorkBench from '@pages/work-bench'
import Login from '@pages/login'
import Dashboard from '@pages/dashbord'
import NoFind from '@pages/no-find'
import List from '@pages/list'

const App: React.FC = () => (
	<ConfigProvider
		theme={{
			token: {
				colorPrimary: '#00b96b'
			}
		}}>
		<BrowserRouter>
			<Routes>
				<Route path='login' element={<Login />} />
				<Route path='not-found' element={<NoFind />} />
			</Routes>
			<Routes>
				{/* v6 的path 的 "/" 可以省略 */}
				<Route path='/work-bench/:id' element={<WorkBench />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/list' element={<List />} />
			</Routes>
			<Routes>
				<Route path='/' element={<WorkBench />} />
			</Routes>
		</BrowserRouter>
	</ConfigProvider>
)

export default App
