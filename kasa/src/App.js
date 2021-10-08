import './App.scss';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Logement from './Pages/Logement/Logement';
import Error404 from './Pages/Error404/Error404';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Logement /> */}
      <Error404 />
      <Footer />
    </div>
  );
}

export default App;
