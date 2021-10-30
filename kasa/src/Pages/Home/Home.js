import React, { Component } from 'react'
import Announces from '../../Components/Announces/Announces'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'

export default class Home extends Component {
	render() {
		return (
			<>
				<HomeBanner />

				<Announces />
			</>
		)
	}
}
