import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MenuItem from '../common/MenuItem'
import "./TopHeader.scss";


const TopHeader = () => {
	const [curPath, setCurPath] = useState(null)
	function getCurrantPath() {
		const curpath = window.location.pathname
		setCurPath(curpath)
	}

	useEffect(() => {
		getCurrantPath()
	}, [])

	const Logo = 'https://via.placeholder.com/150/5abd79/ffffff?Text=gatsbyjs'

	const JobsData = useStaticQuery(graphql`
		query {
		team {
			menus {
				id
				menuItem
				target
			  }
		  }
		}
	`)
	var topHeader = 'topHeader';
	return (
		<div className={`${topHeader} ${curPath === '/' ? 'homePage' : ''}`}>
			<div className='header'>
				<ul className='logo'>
					<li>
						<img alt="foodoclock" src={Logo} />
					</li>
				</ul>
				<ul className="headerList">
					{JobsData.team.menus.map(menuItem => (
						<MenuItem
							key={menuItem.id}
							index={1}
							label={menuItem.menuItem}
							target={`${menuItem.target}`}
							isActive={`${menuItem.target}` === curPath ? true : null}
						/>
					))}
				</ul>
				{/*<ul className='menuRight'>
					<MenuItem index={8} target="/Contact" label="Contact" />
					</ul>*/}
			</div>
		</div>
	)
}

export default TopHeader
