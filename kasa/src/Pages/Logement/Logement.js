import React, { Component } from 'react'
import ToggleDiv from '../../Components/ToggleDiv/ToggleDiv'
import logementPic from "../../Assets/logement.jpg"
import "./Logement.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import starRed from "../../Assets/starRed.svg"
import starGrey from "../../Assets/starGrey.svg"



export default class Logement extends Component {


	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  appartments: [],
		  idLocation: "",
		  appartment: {	}
		};

		
		

		this.componentDidMount = this.componentDidMount.bind(this);
		// this.idLocOnState = this.idLocOnState.bind(this);
	}

	
	
			// idLocOnState()

	
	componentDidMount() {

		fetch("http://localhost:3000/data/logements.json")
		  	.then(res => res.json())
		  	.then(
			(result) => {
			  this.setState({
				isLoaded: true,
				appartments: result
			  });
			  console.log(result)

			  let idLocation = window.location.search.substr(4);
			  let logement = this.state.appartments.filter((el) => el.id === idLocation)

			  this.setState({
				  appartment: logement
			  })

			},
			// Remarque : il est important de traiter les erreurs ici
			// au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
			// des exceptions provenant de réels bugs du composant.
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			  console.log(error)
			}
			)


	}
	

	  
		  
		  
		  
		  render() {


		console.log(this.state)


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
