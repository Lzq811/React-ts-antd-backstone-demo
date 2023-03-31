import React from 'react'
import { Button } from 'antd'
import { useNavigate, useParams, Link } from 'react-router-dom'
import type { NavigateFunction } from 'react-router-dom'

const WorkBench: React.FC = () => {
	const Nav: NavigateFunction = useNavigate()
	const { id } = useParams()

	return (
		<div>
			<div>work-bench</div>
			<div>获取到的params: {id}</div>
			<Button type='primary'>
				<Link to='/login'>back to login</Link>
			</Button>
		</div>
	)
}

export default WorkBench
