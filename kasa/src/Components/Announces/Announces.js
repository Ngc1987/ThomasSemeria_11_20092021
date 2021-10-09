import React, { Component } from 'react'
import SampleLoc from '../SampleLoc/SampleLoc'
import "./Announces.scss"
import { Link } from 'react-router-dom'

export default class Announces extends Component {


	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  appartments: []
		};
		// let get = props.location.search;
		// // const gett = this.extractParamsUrl(get)
		// console.log(get)

		this.componentDidMount = this.componentDidMount.bind(this);
		// this.extractParamsUrl = this.extractParamsUrl.bind(this);
	}

	//   extractParamsUrl(chaineGET) {
	// 	chaineGET = chaineGET.split('&');
	// 	var result = {};
	
	// 	chaineGET.forEach(function(el){
	// 		var param = el.split('=');
	// 		param[0] = param[0].replace('?', '');
	// 		result[param[0]] = param[1];
	// 	});
	
	// 	return result;
	// }
	
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
		const { error, isLoaded, appartments } = this.state;
		// console.log(appartments[0])
		return (
			<div className="announces">

				
				{appartments.map((appartment) => 
					<Link key={appartment.id}  to={"/logement?" + "id=" + appartment.id}>
						<SampleLoc appartInfos={appartment}/>	
					</Link>
				)}




			</div>
		)
	}
}
