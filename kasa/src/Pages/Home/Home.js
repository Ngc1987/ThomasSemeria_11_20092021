import React, { Component } from 'react'
import Announces from '../../Components/Announces/Announces'
import Header from '../../Components/Header/Header'
import HeaderPagePic from '../../Components/HeaderPagePic/HeaderPagePic'

export default class Home extends Component {
	render() {
		return (
			<>
				
				<HeaderPagePic />

				<Announces />
			</>
		)
	}
}
