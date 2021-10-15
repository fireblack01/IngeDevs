import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*----GENERATE CODIGO DE INSOMNIA - DE POST----------*/
const options = {
    method: 'POST',
    url: 'http://localhost:5000/usuarios/nuevos',
    headers: {'Content-Type': 'application/json'},
    data: {id: 1001, nombre: 'Laura', rol: 'Administrador', estado: 'Pendiente'}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  /*---------------------------------------------------- */

const ActualizarUsuario = () => {
 const [id, setID] = useState();
 const [nombre, setNombre] = useState();
 const [rol, setRol] = useState();
 const [estado, setEstado] = useState();
 const enviarAlBackend = () => {
     console.log("id", id, "nombre", nombre, "rol", rol, "estado", estado);
     toast.success("Actualización de usuario completada");
 }

    /*useEffect = (() => {
     console.log("hola soy un use effect");
    } ,[]);*/

  return(
    <div className="content">
        <div className="container mw-60 pd-tb-30 flex-form">
            <h2>Sistema de actualizacion de usuarios</h2>
            <form>
                <label for="id">Escriba el ID del usuario a modificar o actualizar</label>
                <input type="number" name="id" placeholder="Ej: 1056" required 
                value={id} onChange={(e) => {
                    setID(e.target.value);
                    }}
                />

                <label for="nombre">Escriba el nuevo nombre</label>
                <input type="text" name="nombre" placeholder="Ej: Pepito Perez" required 
                value={nombre} onChange={(e) => {
                    setNombre(e.target.value);
                    }}
                />

                <label for="rol">Seleccione el nuevo rol</label>
                <select name="select" value={rol} onChange={(e) => {
                    setRol(e.target.value);
                }} > 
                    <option value="administrador">Administrador</option>
                    <option value="vendedor" selected>Vendedor</option>
                </select>
            

                <label for="estado">Seleccione un nuevo estado de usuario</label>
                <select name="select" value={estado} onChange={(e) => {
                    setEstado(e.target.value);
                }}>
                    <option value="autorizado">Autorizado</option>
                    <option value="no-autorizado" selected>No autorizado</option>
                    <option value="pendiente">Pendiente</option>
                </select>
                <Link type="submit" className="button">Registrar</Link>
            </form>

            <ToastContainer position="top-right" autoClose={5000}/>
        </div>
    </div>
    );
}

export default ActualizarUsuario;