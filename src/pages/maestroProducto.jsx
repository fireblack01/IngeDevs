import { Link } from 'react-router-dom';

const MaestroProducto = () => {
  return(
    <div>
            <div >
                
                <h2>Administración de productos</h2>
                <div className="PosButtonN">
                <Link to="registrarProducto"><button className="button" >Nuevo Producto</button></Link>
                </div>    
                
                <div className="posBuscar">
                  <label align="right" for="buscar">Buscar Por: </label>
                  <select className="inputProd"name="buscar" id="buscar">
                    <option value="Codigo">Código</option>
                    <option value="Descripcion">Descripción</option>
                  </select>
                  <input className="inputProd"type="text" placeholder="Digite el Valor..." id="buscar" name="buscar"/>
                  <button className="button" id="botonBuscar">Buscar</button>
                </div>
                
                
                <div className="PosButtonN"></div>
        <div>
          <table className="centrardiv" border="1px" id="transactionTable">
            <tr>
                <th>
                </th>
                <th>Código</th>
                <th>Descripción</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
            </tr>
            <tr>
              <td><input type="checkbox"  className="inputProd"></input></td>
              <td align="center">001</td>
              <td align="center">Tenis</td>
              <td align="center">12000</td>
              <td>
                <select className="inputProd" name="estado" id="estado">
                  <option value="Disponible">Disponible</option>
                  <option value="No disponible">No Disponible</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" className="inputProd"></input></td>
              <td align="center">002</td>
              <td align="center">Zapatillas</td>
              <td align="center">25000</td>
              <td>
                <select className="inputProd" name="estado" id="estado">
                  <option value="Disponible">Disponible</option>
                  <option value="No disponible">No Disponible</option>
                </select>
              </td>
            </tr>
          </table>
          <div className="PosButtonCrud"> 
          <button className="button" id="botonActualizar">Actualizar</button>
          <button className="button" id="botonBuscar">Eliminar</button>
          </div>
        </div>
      </div> 
    </div>
     
  );
}

export default MaestroProducto;