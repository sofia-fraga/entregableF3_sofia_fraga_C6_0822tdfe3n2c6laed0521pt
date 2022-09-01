// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

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
        <Cabecera carrito={totalElementos} />
        <Listado data={data} incrementarTotal={incrementarTotal}/>
      </div>
    );
  }
  
  export default App;