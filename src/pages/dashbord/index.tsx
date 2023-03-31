import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { NavigateFunction } from 'react-router-dom'

const Dashboard: React.FC = () => {
	const Nav: NavigateFunction = useNavigate()

	const [id, setId] = useState(0)

	const jump = () => {
		// setId(Math.floor(Math.random() * 18374365434))
		Nav(`/work-bench/${id}`)
	}

	useEffect(() => {
		setId(Math.floor(Math.random() * 18374365434))
	}, [id])

	return (
		<div className='login-page'>
			<div>dashboard</div>
			<Button onClick={jump} type='primary'>
				go to workbench
			</Button>
		</div>
	)
}

export default Dashboard
