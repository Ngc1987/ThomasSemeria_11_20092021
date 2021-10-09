import "./APropos.scss"
// import HomeBanner from "../../Components/HomeBanner/HomeBanner"
import AProposPagePic from "../../Components/AProposPagePic/AProposPagePic"
import ToggleDiv from "../../Components/ToggleDiv/ToggleDiv"

import React, { Component } from 'react'

export default class APropos extends Component {
	render() {
		return (
			<main className="APropos">
				<AProposPagePic/>
				<div className="aproposToggleDivs">
					<ToggleDiv title="Fiabilité"/>
					<ToggleDiv title="Rescpect"/>
					<ToggleDiv title="Service"/>
					<ToggleDiv title="Responsabilité"/>
				</div>
			</main>
		)
	}
}
