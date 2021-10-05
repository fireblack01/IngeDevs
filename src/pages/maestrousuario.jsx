import { Link } from 'react-router-dom';
import lupa from 'media/lupa.png';

const MaestroUsuario = () => {
    return(
        <div className="content">
            <div className="container mw-60 pd-tb-30">
                <div>
                    <label for="buscar">Bienvenido al buscador de usuarios por ID</label>
                    <img src={lupa} title="Lupa de busqueda " alt="Lupa" width="50px"/>
                    <input type="text" name="buscar" placeholder="Ingrese el id..." required />
                    <Link to="actualizarusuario" class="actualizar">Actualizar usuario</Link>
                </div>
                <div>
                    <table>
                        <tr>
                            <td><b>ID</b></td>
                            <td><b>Nombre</b></td>
                            <td><b>Rol</b></td>
                            <td><b>Estado</b></td>
                        </tr>
                        <tr>
                            <td>1001</td>
                            <td>Laura</td>
                            <td>Administrador</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <td>2001</td>
                            <td>Carlos</td>
                            <td>Vendedor</td>
                            <td>Autorizado</td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>Michael</td>
                            <td>Administrador</td>
                            <td>Autorizado</td>
                        </tr>
                        <tr>
                            <td>2002</td>
                            <td>Miguel</td>
                            <td>Vendedor</td>
                            <td>No autorizado</td>
                        </tr>
                        <tr>
                            <td>2003</td>
                            <td>Johanna</td>
                            <td>Vendedor</td>
                            <td>Pendiente</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default MaestroUsuario;