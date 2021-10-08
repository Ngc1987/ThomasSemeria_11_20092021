import React, { Component } from 'react'
import "./HeaderPagePic.scss"
import headerPic from './headerPic.jpg'; // with import

export default class HeaderPagePic extends Component {
	render() {
		return (
			<div className="header__pic">
				<div className="header__pic-overlay"></div>
				<img src={headerPic} alt="" />
				<p>Chez vous,</p>
				<p>partout et ailleurs</p>
			</div>
		)
	}
}


