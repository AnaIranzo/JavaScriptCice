
import './App.css';
import Cabecera from './components/Cabecera';
import Main from './components/Main';
import Footer from './components/Footer';

import videoclub from './videoclub';

function App() {
  return (
  <>
  
  <Cabecera/>
  <Main peliculas={videoclub.peliculas}/>
  <Footer/>
  </>
  );
}

export default App;
