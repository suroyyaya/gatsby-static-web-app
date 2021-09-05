import React from 'react'
import PropTypes from 'prop-types'
import "./HeaderH2.scss";

const HeaderH2 = props => {
	const { text, className } = props
	return (
		<h2 className={className}>
			{text}
		</h2>
	)
}

HeaderH2.defaultProps = {
	className: "mainH2",
}

HeaderH2.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default HeaderH2
