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
			appartment: null,
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
					// Récupération de l'id du logement
					let idLocation = window.location.search.substr(4);
					// Récupération du logement dans les datas grâce à l'id du logement récupéré dans l'url
					let logement = result.filter((el) => el.id === idLocation)[0]
					// console.log(logement)


					// Boucle pour afficher 5 étoiles, et selon la note afficher étoiles rouges ou grises
					let etoiles = 5
					let etoilesArray = []

					for (let i = 0; i < etoiles; i++) {
						if (i < logement.rating && i < etoiles) {
							etoilesArray.push(<img key={i} src={starRed} alt="" />)
						}
						else if (i >= logement.rating && i < etoiles) {
							etoilesArray.push(<img key={i} src={starGrey} alt="" />)
						}
					}
					// Ajout du tableau d'étoiles au state pour afficher dans le composant
					// et ajout du logement à afficher au state
					this.setState({
						isLoaded: true,
						appartment: logement,
						etoilesDiv: etoilesArray
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

		const { appartment, etoilesDiv } = this.state;
		console.log(this.state.appartment)

		if (appartment === null) return null;
		// if(error) return <Error404 />

		return (

			<main className="logement">

				<div className="logement__">

					<Slider dataSlider={appartment.pictures} />

					<section className="logement__details">

						<section className="logement__details-descript">
							<p tabIndex="0">{appartment.title}</p>
						</section>

						<section className="logement__details-city">
							<p tabIndex="0">{appartment.location}</p>
						</section>

						<section className="logement__details-tags">
							{appartment.tags.map((tag, i) =>
								<div key={"00" + i} className="tag">
									<p>{tag}</p>
								</div>
							)}
						</section>

						<section className="logement__details__infos">

							<section tabIndex="0" aria-label="Note du logement" className="logement__details__infos-stars">
								{etoilesDiv}
							</section>

							<section className="logement__details__infos-name">

								<div tabIndex="0" className="names">
									<p>{appartment.host.name.split(" ")[0]}</p>
									<p>{appartment.host.name.split(" ")[1]}</p>
								</div>

								<div className="profilePic" tabIndex="0" aria-label={"Photo de profil de " + appartment.host.name} >
									<img src={appartment.host.picture} alt="" />
								</div>

							</section>
						</section>
					</section>

					<div className="toggleDivs">
						<ToggleDiv className="toggleDivs__logement smallFont" title="Description" content={appartment.description} />
						<ToggleDiv className="toggleDivs__logement smallFont" title="Équipements" content={appartment.equipments} />
					</div>

				</div>
			</main>
		)
	}
}
