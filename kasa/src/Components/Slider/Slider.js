import "./Slider.scss"

import BtnSlider from "./BtnSlider"
import React, { Component } from 'react'

export default class Slider extends Component {

	constructor(props) {
		super(props);
		this.state = {
			slideAnim: {
				index: 1,
				inProgress: false
			}
		}

		// this.leftSlide = this.leftSlide.bind(this);
	}

	leftSlide() {
		if(this.state.slideAnim.index !== 1) {
			this.setState({
				slideAnim: {
					index: this.state.slideAnim.index - 1,
					inProgress: true
				}
			})
			console.log('left')
			console.log(this.state)
		}
		else if(this.state.slideAnim.index === 1) {
			this.setState({
				slideAnim: {
					index: this.props.dataSlider.length,
					inProgress: true
				}
			})
		}
		console.log(this.state.slideAnim.index, this.props.dataSlider.length, this.props.dataSlider)
	}
	rightSlide() {
		if(this.state.slideAnim.index !== this.props.dataSlider.length) {
			this.setState({
				slideAnim: {
					index: this.state.slideAnim.index + 1,
					inProgress: true
				}
			})
			console.log('right')
			// console.log(this.state)
		}
		else if(this.state.slideAnim.index === (this.props.dataSlider.length) ) {
			this.setState({
				slideAnim: {
					index: 1,
					inProgress: true
				}
			})
		}

		console.log(this.state.slideAnim.index, this.props.dataSlider.length)
	}

	render() {
		return (
			<div className="logement__gallery" >
			{this.props.dataSlider.map((obj, index) => {
				
				return (
					<div 
					key={obj.index}
					className={this.state.slideAnim.index === index +1 ? "slide active-anim" : "slide"}
					>
					<img src={this.props.dataSlider[index]} className="logement__gallery-activePic" alt="" />

						<BtnSlider visibility={this.props.dataSlider.length > 1 ? "visible" : "hidden"} moveSlide={this.leftSlide.bind(this)} direction="left"/>
						<BtnSlider visibility={this.props.dataSlider.length > 1 ? "visible" : "hidden"} moveSlide={this.rightSlide.bind(this)} direction="right"/>
					
					</div>
				)
			})}

					{/* <button className="logement__gallery-leftArrow" >
						<img src={leftArrow}alt="" />
					</button>
					<button className="logement__gallery-rightArrow">
						<img src={rightArrow} alt="" />
					</button> */}
				 
			</div>
		)
	}
}
