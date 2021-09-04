import React from 'react'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { Row, Col } from 'react-flexbox-grid'

import FooterWave from '../../assets/img/misc/footer_wave.png'
import { footerMenu } from '../api/footer'
//import styles from './Footer.module.scss'

const Footer = () => {
	const { legalText } = footerMenu.getFooterTexts()[0]
	const { rights } = footerMenu.getFooterTexts()[1]
	return (
		<footer
			className="footerWrapper"
			style={{
				backgroundImage: `url(${FooterWave})`,
			}}
		>
			<div className="content">
				<Row>
					<Col xs={12} lg={12}>
						<div className="socialContainer">
							<ul>
								<li>
									<a rel="noopener noreferrer" target="_blank" href="https://facebook.com">
										<FiFacebook size="2em" />
									</a>
								</li>
								<li>
									<a rel="noopener noreferrer" target="_blank" href="https://instagram.com">
										<FiInstagram size="2em" />
									</a>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={12} xs={12}>
						<div className="legalContainer">
							<p>
								{new Date().getFullYear()}, { rights }
							</p>
							<small>
								{
									legalText
								}
							</small>
							<p className="heart">
								<small>
									made  with <span aria-label="heart" role="img">❤️</span> in Helsinki, Finland
								</small>
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</footer>
	)
}


export default Footer
