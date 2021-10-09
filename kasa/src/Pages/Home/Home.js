import React, { Component } from 'react'
import Announces from '../../Components/Announces/Announces'
import Header from '../../Components/Header/Header'
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
