import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TareasList from "./components/TareasList"
import ActualizarTarea from "./components/ActualizarTarea"
import CrearTarea from "./components/CrearTarea"

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar fixed-top">
          <Link to="/" className="navbar-brand">Tareas</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/actualizar" className="nav-link">Modificar tarea</Link>
              </li>
              <li className="navbar-item">
                <Link to="/crear" className="nav-link">Altas/Bajas tareas</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route exact path="/" component={TareasList} />
        <Route exact path="/actualizar" component={ActualizarTarea} />
        <Route exact path="/crear" component={CrearTarea} />
      </div>
    </Router>
  );
}

export default App;
