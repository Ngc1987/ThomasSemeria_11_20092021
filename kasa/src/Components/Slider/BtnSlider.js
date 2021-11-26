import React, { Component } from 'react'
// import leftArrow from "./leftArrow.svg"
// import rightArrow from "./rightArrow.svg"
// import leftSmallArrow from "./leftSmallArrow.svg"
// import rightSmallArrow from "./rightSmallArrow.svg"

export default class BtnSlider extends Component {

	render(props) {

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
					src={direction === "left" && size === "small" ? process.env.PUBLIC_URL + "/Assets/leftSmallArrow.svg" : 
					direction === "right" && size === "small" ? process.env.PUBLIC_URL + "/Assets/rightSmallArrow.svg" : 
					direction === "left" && size === "large" ? process.env.PUBLIC_URL + "/Assets/leftArrow.svg" :
					process.env.PUBLIC_URL + "/Assets/rightArrow.svg" 
					} 
					alt="icone flèche" />
			</button>
		)
	}
}
