import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { NavigateFunction } from 'react-router-dom'
import { Button } from 'antd'

const Login: React.FC = () => {
	const Nav: NavigateFunction = useNavigate()

	const jump = () => {
		Nav('/dashboard')
	}

	return (
		<div className='login-page'>
			login-page
			<br />
			<Button onClick={jump} type='primary'>
				go to dashboard
			</Button>
		</div>
	)
}

export default Login
