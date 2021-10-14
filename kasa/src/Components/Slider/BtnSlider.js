import React, { Component } from 'react'
import leftArrow from "./icons/leftArrow.svg"
import rightArrow from "./icons/rightArrow.svg"
import leftSmallArrow from "./icons/leftSmallArrow.svg"
import rightSmallArrow from "./icons/rightSmallArrow.svg"

export default class BtnSlider extends Component {

	render() {

		const {moveSlide, direction, visibility, size} = this.props;

		return (

			<button 
				onClick={moveSlide} 
				className={direction === "left" && visibility === "visible" ? "logement__gallery-leftArrow"  
				: direction === "right" && visibility === "visible" ? "logement__gallery-rightArrow" 
				: "hidden" 
				}
				aria-label={direction === "left" ? "Image précédente" : "Image suivante"}
				>
			
				<img 
					src={direction === "left" && size === "small" ? leftSmallArrow : 
					direction === "right" && size === "small" ? rightSmallArrow : 
					direction === "left" && size === "large" ? leftArrow :
					rightArrow 
					} 
					alt="icone flèche" />
			</button>
		)
	}
}
