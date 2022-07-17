
import './App.css';
import videoclub from './videoclub';
import Pelicula from './Tarjeta';

function App() {
  return (
<>
{videoclub.map((datos,index)=> { 
  return <Pelicula pelicula={datos} key={index}/>
})}
</>
  );
}

export default App;

