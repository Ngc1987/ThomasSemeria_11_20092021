import "./SampleLoc.scss"

import React, { Component } from 'react'

export default class SampleLoc extends Component {
	render(props) {
		// console.log(this.props)
		return (
			<div className="sampleLoc">
				<p>{this.props.appartInfos.title}</p>
				<img src={this.props.appartInfos.cover} alt="" />
			</div>
		)
	}
}
