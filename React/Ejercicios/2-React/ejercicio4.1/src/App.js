
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Cabecera from './Cabecera';
import Meses from './Meses';
import Dias from './Dias';

function App() {
  return (
<BrowserRouter>
   <Cabecera/>
  <Routes>
    <Route path='/Meses' element={<Meses/>}/>
    <Route path='/Dias' element={<Dias/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
