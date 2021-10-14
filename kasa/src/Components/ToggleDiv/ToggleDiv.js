import React, { Component } from 'react'
import "./ToggleDiv.scss"
import arrowDown from "../../Assets/arrowDown.svg"


// const divTitle = document.querySelector(".toggleDiv__title")
// const divContent = document.querySelector(".toggleDiv__content")

// divTitle.addEventListener("click", openOrClosed)

// let isOpened = false
// function openOrClosed() {
// 	console.log(isOpened)
// 	isOpened = !isOpened
// }

// openOrClosed()

export default class ToggleDiv extends Component {

	// Composant ToggleDiv présent dans plusieurs autres composants. Son state initial est fermé (isOpened = false) Il contient des informations cachées, au clic il se déroule et affiche les informations qui lui ont été passées en props selon le besoin
	constructor(props) {
		super(props);

    	this.state = {
			isOpened: false
		};

		this.openOrClosed = this.openOrClosed.bind(this);
	}

	//Gestion du state au clic, ouvert ou fermé
	openOrClosed() {
		console.log(this.state.isOpened)

		if(this.state.isOpened) {
			this.setState({
				isOpened: false
			})
		}
		if(this.state.isOpened === false) {
			this.setState({
				isOpened: true
			})
		}
		// this.state.isOpened = !this.state.isOpened
	}

	render(props) {

		
		// console.log(typeof this.props.content)

		return (

			
			<div className={`toggleDiv ${this.props.className}`}>
				
				<div tabIndex="0" className="toggleDiv__title"
					onClick={() => this.openOrClosed()}
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
