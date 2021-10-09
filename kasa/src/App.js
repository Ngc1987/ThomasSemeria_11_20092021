import './App.scss';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Logement from './Pages/Logement/Logement';
import Error404 from './Pages/Error404/Error404';
import APropos from './Pages/APropos/APropos';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/logement" component={Logement}/>
            <Route path="/apropos" exact component={APropos}/>
            <Route path="/" component={Error404}/>

          </Switch>

        <Footer />
      </Router>
      {/* <APropos /> */}
      {/* <Home /> */}
      {/* <Logement /> */}
      {/* <Error404 /> */}
    </div>
  );
}

export default App;
