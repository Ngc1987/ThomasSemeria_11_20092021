import "./AProposPagePic.scss"
import mountains from "../../Assets/mountains.jpg"

import React, { Component } from 'react'

export default class AProposPagePic extends Component {
	render() {
		return (
			<div className="picDiv">
				<img className="picAnim" src={mountains} alt="" />
			</div>
		)
	}
}
