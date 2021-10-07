import { Link } from 'react-router-dom';
const RegistrarProducto = () => {
    return(    
        <div className="content">
            <div className="container mw-60 pd-tb-30">    
                <h2>Administración de productos</h2>
                <div className="PosButtonL"><Link to="maestroProducto"><button className="button">Listar productos</button></Link></div>
                <form id="transactionForm">
                    <table border="1px">
                        <tr>
                            <td><label for ="ID">Código </label></td>
                            <td><input type="text" placeholder="ID del producto" id="ID" name="ID"required/></td>
                        </tr>
                        <tr>  
                            <td><label for ="descripcion">Descripción </label></td>
                            <td><input type="text" placeholder="Descripcion del producto" id="descripcion" name="descripcion"required/></td>
                        </tr>
                        <tr>  
                            <td><label for ="valor_unitario">Valor Unitario </label></td>
                            <td><input type="number" placeholder="Valor Unitario" id="valor_unitario" name="valor_unitario"required/></td>
                        </tr>
                        <tr> 
                            <td><label for="estado">Estado </label></td>
                            <td>
                                <select name="estado" id="estado">
                                <option value="Disponible">Disponible</option>
                                <option value="No disponible">No Disponible</option>
                                </select>
                            </td>
                        </tr> 
                    </table>

                    

                </form>
                <button className="button" id="botonDeEnvio">Registrar</button>
                <br></br><br></br>

                    <table border="1px" id="transactionTable">
                        <tr>
                            <th>Código</th>
                            <th>Descripción</th>
                            <th>Valor Unitario</th>
                            <th>Estado</th>
                        </tr>
                        <tr>
                            <td align="center">001</td>
                            <td align="center">Tenis</td>
                            <td align="center">12000</td>
                            <td align="center">Disponible</td>
                        </tr>
                    </table>

            </div>        
        </div>   
    );
}
export default RegistrarProducto;