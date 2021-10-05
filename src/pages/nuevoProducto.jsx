function nuevoProducto() {
  return <div>
    <main>
          <h2>Administración de productos</h2>
          <button>Listar Productos</button>
          <form action="" method="POST">
              <table border="1px">
                <tr>
                  <td><label for ="ID">Código </label></td>
                  <td><input type="text" placeholder="ID del producto" id="ID"></input></td>
                </tr>
                <tr>  
                  <td><label for ="descripcion">Descripción </label></td>
                  <td><input type="text" placeholder="Descripcion del producto" id="descripcion"></input></td>
                </tr>
                <tr>  
                  <td><label for ="valor_unitario">Valor Unitario </label></td>
                  <td><input type="text" placeholder="Valor Unitario" id="valor_unitario"></input></td>
                </tr>
                <tr> 
                <td><label for="producto">Estado </label></td>
                  <td>
                    <select name="producto" id="producto">
                      <option value="disponible">Disponible</option>
                      <option value="nodisponible">No Disponible</option>
                    </select>
                  </td>
                </tr> 
                </table>
                <input type="submit" value="Registrar" onClick="console.log"></input>

          </form>
        
        </main>
  </div>;
}

export default nuevoProducto;
