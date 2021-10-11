import { Link } from 'react-router-dom';
import lupa from 'media/lupa.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MaestroUsuario = () => {
    return(
        <div className="content">
            <div className="container mw-60 pd-tb-30 flex flex-center flex-justify-center flex-column">
                <div className="flex-form">
                    <form action="" className="flex flex-center">
                        <label for="buscar">Bienvenido al buscador de usuarios por ID</label>
                        <input type="text" name="buscar" placeholder="Ingrese el id..." required />
                        <Link to="#" type="submit" class="buscar"><img src={lupa} title="Lupa de busqueda " alt="Lupa" width="50px"/></Link>
                    </form>
                </div>
                <div className="flex flex-center table-container">
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
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        />
                        

                </div>
                <Link to="actualizarusuario" class="actualizar button">Actualizar usuario</Link>
            </div>
        </div>
    );
}
export default MaestroUsuario;