import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

//import styles from './MenuItem.module.scss'
var menuItem = "menuItem";
const MenuItem = props => {
	const { index, isActive, label, target } = props
	const [hovered, setHovered] = useState(false)
	const toggleHover = () => setHovered(!hovered)

	return (
		<li
			key={index}
			className={`${menuItem} ${isActive ? 'isActive' : ''}`}
			onMouseEnter={() => toggleHover()}
			onMouseLeave={() => toggleHover()}
		>
			<Link to={target}>
				{label}
			</Link>
		</li>
	)
}

MenuItem.defaultProps = {
	isActive: false,
	target: '',
}

MenuItem.propTypes = {
	index: PropTypes.number.isRequired,
	isActive: PropTypes.bool,
	label: PropTypes.string.isRequired,
	target: PropTypes.string,
}

export default MenuItem
