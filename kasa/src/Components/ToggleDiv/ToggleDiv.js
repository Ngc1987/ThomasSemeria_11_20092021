import React, { Component } from 'react'
import "./ToggleDiv.scss"
import arrowDown from "./arrowDown.svg"



export default class ToggleDiv extends Component {

	// Composant ToggleDiv présent dans plusieurs autres composants. Son state initial est fermé (isOpened = false) Il contient des informations 
	// cachées, au clic il se déroule et affiche les informations qui lui ont été passées en props selon le besoin
	constructor(props) {
		super(props);

    	this.state = {
			isOpened: false
		};

		this.openOrClosed = this.openOrClosed.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	//Gestion du state au clic, ouvert ou fermé
	openOrClosed() {

		if(this.state.isOpened) {
			this.setState({
				isOpened: false
			})
		}
		if(!this.state.isOpened) {
			this.setState({
				isOpened: true
			})
		}
	}

	handleKeyPress = (e) => {
		// console.log(e.keyCode)
		if(e.keyCode === 13){
		  this.openOrClosed()
		}
	}

	render(props) {

		return (
			
			<div className={`toggleDiv ${this.props.className}`}>
				
				<div tabIndex="0" className="toggleDiv__title"
					onClick={() => this.openOrClosed()}
					onKeyDown={this.handleKeyPress}
					>

					<p>{this.props.title}</p>
					<img className="toggleDiv__arrow openArrow" src={arrowDown} alt="" />

				</div>

				<div className={this.state.isOpened ? "toggleDiv__content open" : "toggleDiv__content closed"}>
					
					{typeof this.props.content === "object" ?
						this.props.content.map((el, index) =>
							 <p tabIndex={this.state.isOpened ? "0" : ""} key={index}>{el}</p>
						)
						:
						<p tabIndex={this.state.isOpened ? "0" : ""}>{this.props.content}</p>
					}

				</div>
			</div>
		)
	}
}
