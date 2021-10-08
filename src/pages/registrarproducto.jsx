import { Link } from 'react-router-dom';
const RegistrarProducto = () => {
    return(    
        <div className="content">
            <div className="container mw-60 pd-tb-30 flex-form">    
                <h2>Administración de productos</h2>
                <form id="transactionForm">
                    <label for ="ID">Código </label>
                    <input type="text" placeholder="ID del producto" id="ID" name="ID"required/>
                    <label for ="descripcion">Descripción </label>
                    <input type="text" placeholder="Descripcion del producto" id="descripcion" name="descripcion"required/>
                    <label for ="valor_unitario">Valor Unitario </label>
                    <input type="number" placeholder="Valor Unitario" id="valor_unitario" name="valor_unitario"required/>
                    <label for="estado">Estado </label>
                    <select name="estado" id="estado">
                        <option value="Disponible">Disponible</option>
                        <option value="No disponible">No Disponible</option>
                    </select>
                    <Link type="submit" className="button">Registrar</Link>
                </form>
                <Link to="maestroProducto" className="button listar">Listar productos</Link>
            </div>        
        </div>   
    );
}
export default RegistrarProducto;