import React from 'react'
import PropTypes from 'prop-types'
import "./Paragraph.scss";

const Paragraph = props => {
	const { text, className } = props
	return (
		<p className={className}>
			{text}
		</p>
	)
}

Paragraph.defaultProps = {
	className: "paragraph",
}

Paragraph.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}


export default Paragraph
