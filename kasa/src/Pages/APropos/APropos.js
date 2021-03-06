import "./APropos.scss"
import AProposBanner from "../../Components/AProposBanner/AProposBanner"
import ToggleDiv from "../../Components/ToggleDiv/ToggleDiv"

import React, { Component } from 'react'


const fiabilityText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."

const respectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

const serviceText = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."

const securityText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


// console.log(window.innerWidth)
export default class APropos extends Component {
	render() {
		return (
			<main className="APropos">
				<AProposBanner/>
				<div className="aproposToggleDivs">
					<ToggleDiv title="Fiabilité" content={fiabilityText} className="bigFont" />
					<ToggleDiv title="Respect" content={respectText} className="bigFont" />
					<ToggleDiv title="Service" content={serviceText} className="bigFont" />
					<ToggleDiv title="Responsabilité" content={securityText} className="bigFont" />
				</div>
			</main>
		)
	}
}
