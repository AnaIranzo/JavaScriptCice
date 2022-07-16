

import './App.css';

import datosCasas from './casas';
import Casa from './Main';

function App() {
  return (
  <>
    {datosCasas.map((casa,index)=>{
            return(
              <Casa key={index} datos={casa}/>
            )

        })}
  </>
  );
}

export default App;
