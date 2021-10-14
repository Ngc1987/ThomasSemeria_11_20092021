import React, { Component } from 'react'
import ToggleDiv from '../../Components/ToggleDiv/ToggleDiv'
import "./Logement.scss"
import starRed from "../../Assets/starRed.svg"
import starGrey from "../../Assets/starGrey.svg"
import Slider from "../../Components/Slider/Slider"
// import Error404 from "../Error404/Error404"

export default class Logement extends Component {


	constructor(props) {

		// Gestion du state (idLocation = id du logement récupéré dans l'url, appartments = objet contenant les datas du logement, etoilesDiv = tableau récupérant les étoiles de notation du logement
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  appartments: [],
		  idLocation: "",
		  etoilesDiv: []
		};

		this.componentDidMount = this.componentDidMount.bind(this);

	}

	// Récupération des données
	componentDidMount() {

		fetch("http://localhost:3000/data/logements.json")
		  	.then(res => res.json())
		  	.then(
			(result) => {
				this.setState({
					isLoaded: true,
					appartments: result
				});
				
				// Récupération de l'id du logement
				let idLocation = window.location.search.substr(4);
				// Récupération du logement dans les datas grâce à l'id du logement récupéré dans l'url
				let logement = this.state.appartments.filter((el) => el.id === idLocation)
				// console.log(logement)

					this.setState({
						appartments: logement
					})

				// Boucle pour afficher 5 étoiles, et selon la note afficher étoiles rouges ou grises
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
				// Ajout du tableau d'étoiles au state pour afficher dans le composant
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

			const {appartments, etoilesDiv } = this.state;
			// const tagss = () => {
			// 	return(
					
			// 	)
			// }
			// console.log(this.state)


		return (

			// {error ? <Error404 />
			// :
			



			<main className="logement">

				{appartments.map((appart) => 
					<div className="logement__" key={appart.id}>

						{/* <div className="logement__pic" > */}
							{/* <img src={appart.cover} alt="" /> */}
							<Slider dataSlider={appart.pictures}/>
						{/* </div> */}

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
									<div key={tag} className="tag">
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
			// }

		)
	}
}
