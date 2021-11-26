import React, { Component } from 'react'
import SampleLoc from '../SampleLoc/SampleLoc'
import "./Announces.scss"
import { Link } from 'react-router-dom'
import Error404 from "../../Pages/Error404/Error404"
import Loader from '../../Pages/Loader/Loader'

export default class Announces extends Component {

	constructor() {
		super();
		this.state = {
		  error: null,
		  isLoaded: false,
		  appartments: []
		};

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	
	// Récupération des datas afin d'afficher une vignette pour chaque logement sur la page d'accueil
	componentDidMount() {
		fetch(process.env.PUBLIC_URL + "/data/logements.json")
		  	.then(res => res.json())
		  	.then(
			(result) => {
				// console.log(result)
			  this.setState({
				isLoaded: true,	
				appartments: result
			  });
			//   console.log(result)
			},
			// SI erreur nous allons afficher la page d'erreur avec une props, afin de changer le contenu à afficher à l'utilisateur si nous ne parvenons pas à récupérer les données
			(error) => {
			  this.setState({
				isLoaded: true,	
				error: true
			  });
			//   console.log(error)
			}
		  )
	  }



	render() {
		// console.log(window.location.origin + "/data/logements.json")
		const { appartments, isLoaded, error } = this.state;

		if(error) {return (<Error404 type="fetchError" />)}
		if(!isLoaded) {
			return(
				<Loader />
			)
		}
		
		return (
			// Boucle pour renvoyer un composant SampleLoc (vignette de présentation) pour chaque logement dans le composant
			<div className="announces">
				{appartments.map((appartment) => 
					<Link key={appartment.id}  to={`/logement?id=${appartment.id}`}>
						<SampleLoc appartInfos={appartment}/>	
					</Link>
				)}
			</div>
		)
	}
}
