import './App.css';
import { button } from './components/button';
import { useState } from "react";
import { button2 } from './components/button2';

function App({ texto }) {
  const [estado, setEstado] = useState("Verdadero")
  return <>
    <div>

      <h1>{estado}</h1>

      <div>
        <div>
        <button onClick={() => {
          alert("45678")
        }}>
          Alerta
        </button>

        </div>

        <button onClick={() => {
          if (estado == "Verdadero") {
            setEstado("Falso")
          } else {
            setEstado("Verdadero")
          }

        }}>
          cambiar estado
        </button>
      </div>
      <button texto={"texto"}></button>
      <button texto={"carrito"}></button>
      <button texto={"compras"}></button>
      <button texto={"ayuda"}></button>

    </div>
  </>;
}

export default App;
