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
			}, 
			width: 0,
			height:0
		}

		// this.leftSlide = this.leftSlide.bind(this);
	}
	updateDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
		console.log(this.state.width, this.state.height)
	  };
	  componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	  }
	  componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
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
			<div className="logement__gallery">
			{this.props.dataSlider.map((obj, index) => {
				console.log(obj, index)
				return (
					<div 
					key={index}
					className={this.state.slideAnim.index === index +1 ? "slide active-anim" : "slide"}
					>
					<img src={this.props.dataSlider[index]} className="logement__gallery-activePic" alt="" />

						<BtnSlider size={window.innerWidth < 768 ? "small" : "large"} visibility={this.props.dataSlider.length > 1 ? "visible" : "hidden"} moveSlide={this.leftSlide.bind(this)} direction="left"/>
						<BtnSlider size={window.innerWidth < 768 ? "small" : "large"} visibility={this.props.dataSlider.length > 1 ? "visible" : "hidden"} moveSlide={this.rightSlide.bind(this)} direction="right"/>
					
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
