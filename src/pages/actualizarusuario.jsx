const ActualizarUsuario = () => {
  return(
    <div className="content">
        <div className="container mw-60 pd-tb-30">
            <h2>Sistema de actualizacion de usuarios</h2>
            <form>
                <label for="id">Escriba el ID del usuario a modificar o actualizar</label>
                <input type="number" name="id" placeholder="Ej: 1056" required />

                <label for="nombre">Escriba el nuevo nombre</label>
                <input type="text" name="nombre" placeholder="Ej: Pepito Perez" required />

                <label for="rol">Seleccione el nuevo rol</label>
                <select name="select" >
                    <option value="administrador">Administrador</option>
                    <option value="vendedor" selected>Vendedor</option>
                </select>
            

                <label for="estado">Seleccione un nuevo estado de usuario</label>
                <select name="select">
                    <option value="autorizado">Autorizado</option>
                    <option value="no-autorizado" selected>No autorizado</option>
                    <option value="pendiente">Pendiente</option>
                </select>
                
            </form>
        </div>
    </div>
    );
}

export default ActualizarUsuario;