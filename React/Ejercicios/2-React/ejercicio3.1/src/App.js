
import './App.css';

import persona from './objeto';

function App() {
  return (
<>
<h1>{persona.nombre}</h1>
<p>{persona.edad}</p>
<p>{persona.nacimiento}</p>
<p>{persona.dirección.calle}, {persona.dirección.numero}, {persona.dirección.piso}</p>
<p>{persona.dirección.ciudad} , {persona.dirección.cp}</p>
<p>{persona.grupoSanguineo.grupo}, {persona.grupoSanguineo.rh}</p>
</>
  );
}

export default App;
