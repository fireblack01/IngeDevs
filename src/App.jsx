import logo from './media/logo.png';
import './styles/styles.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';

function App() {
  return (
    <div classnameName="App">
      <header>
        <ul classname="navbar">
          <li>
            <img src={logo} alt="imagen" classname="logo" />
          </li>
          <li>
            <button classname="botonGenerico mainButton">Nuevo post</button>
          </li>
          <li>
            <div classname="buscar">
              <input placeholder="Buscar una raza" />
              <i classname="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
          </li>
            <li><button classname="botonGenerico secondaryButton">Login</button>
          </li>
          <li>
            <button classname="botonGenerico mainButton">Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul classname='breedCardContainer'>
            <li classname='breedCard'>
              <div classname='contenedorImagen'>
                <img src={borderCollie} alt='Border Collie' />
              </div>
              <span classname='breedTitle'>Border Collie </span>
            </li>
            <li classname="breedCard">
              <div classname="contenedorImagen">
                <img src={rhodesian} alt="Rhodesian" />
              </div>
              <span classname="breedTitle">Rhodesian</span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
