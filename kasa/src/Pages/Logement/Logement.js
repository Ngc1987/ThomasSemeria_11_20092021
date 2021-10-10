import React, { Component } from 'react'
import ToggleDiv from '../../Components/ToggleDiv/ToggleDiv'
import logementPic from "../../Assets/logement.jpg"
import "./Logement.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
		  etoilesDiv: []
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
					appartments: logement
				})

				let etoiles = 5
				let etoilesArray = []

				for(let i = 0; i < etoiles; i++) {
					if(i < this.state.appartments[0].rating && i < etoiles) {
						etoilesArray.push(<img src={starRed} alt="" />)
							
					}
					else if(i >= this.state.appartments[0].rating && i < etoiles) {
						etoilesArray.push(<img src={starGrey} alt="" />)
					}
				}
				this.setState({
					etoilesDiv: etoilesArray
				})
				// console.log(etoilesArray)

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

			const {appartments, appartment, etoilesDiv } = this.state;
			
			console.log(this.state)


		return (
			<main className="logement">

				{appartments.map((appart) => 
					<div className="logement__" key={appart.id}>

						<div className="logement__pic" >
							<img src={appart.cover} alt="" />
						</div>

						<section className="logement__details">
							<section className="logement__details-descript">
								{/* <p>{appart.location}</p> */}
								<p>{appart.title}</p>
							</section>
							<section className="logement__details-city">
								<p>{appart.location}</p>
							</section>

							<section className="logement__details-tags">
								{appart.tags.map((tag) => 
									<div className="tag">
										<p>{tag}</p>
									</div>
								
								)}
								

							</section>
							<section className="logement__details__infos">
								<section className="logement__details__infos-stars">
									{etoilesDiv}
								</section>
								<section className="logement__details__infos-name">
									<div className="names">
										<p>{appart.host.name.split(" ")[0]}</p>
										{/* <br /> */}
										<p>{appart.host.name.split(" ")[1]}</p>

									</div>
									<div className="profilePic">
										<img src={appart.host.picture} alt="" />
									</div>
								</section>
							</section>

						</section>

						<div className="toggleDivs">
							<ToggleDiv className="toggleDivs__logement smallFont" title="Description" content={appart.description} />
							<ToggleDiv className="toggleDivs__logement smallFont" title="Équipements" content={appart.equipments} />
						</div>


					</div>


				)}
			</main>

		)
	}
}
