import {useState} from 'react';
import Cabecera from './componentes/Cabecera';
import Listado from './componentes/Listado';
import data from './componentes/data.json';

function App() {
    const [totalElementos, setTotalElementos] = useState(0);
    
    const incrementarTotal = () =>{
      setTotalElementos(totalElementos+1)
    }

    return (
      <div className="App">
        <Cabecera carrito={totalElementos}/>
        <Listado data={data} incrementarTotal={incrementarTotal}/>
      </div>
    );
  }
  
export default App;