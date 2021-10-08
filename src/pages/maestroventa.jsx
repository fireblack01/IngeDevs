import { Link } from 'react-router-dom';
const MaestroVenta = () => {
    return(
        <div className="content">

            <div>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha de Venta</th>
                        <th scope="col">Nombre Cliente</th>
                        <th scope="col">Documento Id</th>
                        <th scope="col">Identificación Producto</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Total</th>
                    </tr>
                    </thead>
                    <tbody id="mytable">
                    <tr>
                        <td>1</td>
                        <td>01/02/2021</td>
                        <td>Carlos Andres Diaz</td>
                        <td>811111111</td>
                        <td>vz0001</td>
                        <td>50000</td>
                        <td>5</td>
                        <td>250000</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>02/02/2021</td>
                        <td>Michael Tapia</td>
                        <td>9111011111</td>
                        <td>vz0002</td>
                        <td>50000</td>
                        <td>10</td>
                        <td>500000</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>03/02/2021</td>
                        <td>Anderson Landazuri</td>
                        <td>222345666</td>
                        <td>vz0003</td>
                        <td>50000</td>
                        <td>3</td>
                        <td>150000</td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>03/02/2021</td>
                        <td>laura Vera</td>
                        <td>222345666</td>
                        <td>vz0003</td>
                        <td>50000</td>
                        <td>2</td>
                        <td>100000</td>

                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="h">
                <Link to="/registrarventa" className="button"> Registrar Venta</Link>
            </div>
        </div>
    )
}
export default MaestroVenta;