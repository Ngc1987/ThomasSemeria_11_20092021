import React, { Component } from 'react'
import leftArrow from "./icons/leftArrow.svg"
import rightArrow from "./icons/rightArrow.svg"

export default class BtnSlider extends Component {

	render() {

		const {moveSlide, direction, visibility} = this.props;

		return (

			<button 
				onClick={moveSlide} 
				className={direction === "left" && visibility === "visible" ? "logement__gallery-leftArrow"  
				: direction === "right" && visibility === "visible" ? "logement__gallery-rightArrow" 
				: "hidden" }>

				<img 
					src={direction === "left" ? leftArrow : rightArrow} 
					alt="icone flèche" />
			</button>
		)
	}
}
