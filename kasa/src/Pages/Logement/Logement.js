import React, { Component } from 'react'
import ToggleDiv from '../../Components/ToggleDiv/ToggleDiv'
import logementPic from "../../Assets/logement.jpg"
import "./Logement.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import starRed from "../../Assets/starRed.svg"
import starGrey from "../../Assets/starGrey.svg"

export default class Logement extends Component {
	render() {
		return (
			<main className="logement">
				<div className="logement__pic" >
					<img src={logementPic} alt="" />
				</div>

				<section className="logement__details">
					<section className="logement__details-descript">
						<p>Paris center, on the romantic</p>
						<p>Canalp Saint Martinp</p>
					</section>
					<section className="logement__details-city">
						<p>Paris, île de France</p>
					</section>

					<section className="logement__details-tags">
						<div className="tag">
							<p>Cozy</p>
						</div>
						<div className="tag">
							<p>Canal</p>
						</div>
						<div className="tag">
							<p>Paris 10</p>
						</div>
					</section>
					<section className="logement__details__infos">
						<section className="logement__details__infos-stars">
						
							<img src={starRed} alt="" />
							<img src={starRed} alt="" />
							<img src={starRed} alt="" />
							<img src={starGrey} alt="" />
							<img src={starGrey} alt="" />
						</section>
						<section className="logement__details__infos-name">
							<div className="names">
								<p>Alexandre</p>
								{/* <br /> */}
								<p>Dumas</p>

							</div>
							<div className="profilePic"></div>
						</section>
					</section>

				</section>

				<div className="toggleDivs">
					<ToggleDiv className="toggleDivs__logement" title="Description" />
					<ToggleDiv className="toggleDivs__logement" title="Équipements" />
				</div>

			</main>
		)
	}
}
