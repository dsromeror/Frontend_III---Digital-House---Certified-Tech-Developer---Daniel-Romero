import '../App.css';
import '../components/ClassComponent';
import ClassComponent from '../components/ClassComponent';
import '../components/FunctionComponent';
import FunctionComponent from '../components/FunctionComponent';

const personas = [
  {nombre : "Nicolas", estaEnLista : true, tarea : "papas fritas"},
  {nombre : "Ivan", estaEnLista : false, tarea : "pizzas"},
  {nombre : "Carolina", estaEnLista : true, tarea : "bebidas"}
]

function App() {
  return (

    <div className="App">

      <h3>Invitados:</h3>
      
      <ul>{personas.map((p,i) => <ClassComponent nombre={p.nombre} estaEnLista={p.estaEnLista} key={i}/>)}</ul>
      
      <h3>Tareas: </h3>
      
      <ul>{personas.map((p, i)=><FunctionComponent nombre={p.nombre} tarea = {p.tarea} key={i}/>)}</ul>

    </div>
  );
}

export default App;