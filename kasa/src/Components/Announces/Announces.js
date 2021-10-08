import React, { Component } from 'react'
import SampleLoc from '../SampleLoc/SampleLoc'
import "./Announces.scss"

export default class Announces extends Component {
	render() {
		return (
			<div className="announces">
				<SampleLoc />
				<SampleLoc />
				<SampleLoc />
				<SampleLoc />
				<SampleLoc />
				<SampleLoc />
			</div>
		)
	}
}
