import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { NavigateFunction } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd'

const Title = styled.div`
	font-size: 30px;
	text-align: center;
	color: #0ff;
	.h2-text {
		color: #ff0;
	}
`
const Title2 = styled.h1`
	font-size: 30px;
	text-align: center;
	color: #f0f;
	font-weight: 500;
`

const Login: React.FC = () => {
	const Nav: NavigateFunction = useNavigate()

	const jump = () => {
		Nav('/dashboard')
	}

	return (
		<div className='login-page'>
			<Title>
				login-page
				<h2 className='h2-text'>hello h2 text</h2>
				<Title2>Title2</Title2>
			</Title>
			<br />
			<Button onClick={jump} type='primary'>
				go to dashboard
			</Button>
		</div>
	)
}

export default Login
