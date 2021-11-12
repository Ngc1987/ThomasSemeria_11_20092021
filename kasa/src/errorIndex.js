import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as HashRouter} from "react-router-dom"
import Header from "./Components/Header/Header"
import Error404 from "./Pages/Error404/Error404"
import Footer from "./Components/Footer/Footer.js"

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>

			<Header />
			<Error404 />
			<Footer />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('error')
);