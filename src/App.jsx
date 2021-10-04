import './styles/styles.css';


function App() {
  return (
    <div classnameName="App">
<header>Aqui va el encabezado</header>
        <main>
          <h1>Administracíon de productos</h1>
          <form>
            <label for ="ID">Codigo </label>
            <input type="text" placeholder="ID del producto" id="ID"></input><br></br><br></br>
            <label for ="descripcion">Descripcion </label>
            <input type="text" placeholder="Descripcion del producto" id="descripcion"></input><br></br><br></br>
            <label for ="valor_unitario">Valor unitario </label>
            <input type="text" placeholder="Valor unitario" id="valor_unitario"></input><br></br><br></br>
            <label for="producto">Estado </label>
            <select name="producto" id="producto">
              <option value="volvo">Disponible</option>
              <option value="saab">No Disponible</option>
            </select><br></br><br></br>

            <input type="submit" value="Registrar"></input>
          </form>
        
        </main>
        
        <footer>este es el footer</footer>
    </div>
  );
}

export default App;
