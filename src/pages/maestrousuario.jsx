import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerUsuarios, editarUsuario} from 'utils/api';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';

const MaestroUsuario = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo Usuario');
  const [colorBoton, setColorBoton] = useState('indigo');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      await obtenerUsuarios(
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          setUsuarios(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error('Salio un error:', error);
          setLoading(false);
        }
      );
    };
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchUsuarios();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de usuarios desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear Nuevo Usuario');
      setColorBoton('indigo');
    } else {
      setTextoBoton('Mostrar Todos los usuarios');
      setColorBoton('green');
    }
  }, [mostrarTabla]);
  return (
    <div className="content">
      <div className="container mw-60 pd-tb-30 flex-form">   
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
          <div className='flex flex-col w-full'>
            <h2 className='text-3xl font-extrabold text-gray-900 text-center py-4'>
              Página de administración de usuarios
            </h2>
          </div>
          <TablaUsuarios
            loading={loading}
            listaUsuarios={usuarios}
            setEjecutarConsulta={setEjecutarConsulta}
          />
          <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
      </div>
    </div>
  );
};

const TablaUsuarios = ({ loading, listaUsuarios, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

  useEffect(() => {
    setUsuariosFiltrados(
      listaUsuarios.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaUsuarios]);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar usuario'
        className='border-2 border-gray-700 px-3 py-4 self-center rounded-md focus:outline-none focus:border-gray-900'
      />
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los usuarios</h2>
      <div className='hidden md:flex w-full'>
        {loading ? (
          <ReactLoading type='cylon' color='#4f4f4f' height={667} width={375} />
        ) : (
          <table className='tabla'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre del usuario</th>
                <th>Rol del usuario</th>
                <th>Estado del usuario</th>
                <th>Email del usuario</th>
                  <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuariosFiltrados.map((usuario) => {
                return (
                  <FilaUsuario
                    key={nanoid()}
                    usuario={usuario}
                    setEjecutarConsulta={setEjecutarConsulta}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className='flex flex-col w-full m-2 md:hidden'>
        {usuariosFiltrados.map((el) => {
          return (
            <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
              <span>{el.ID}</span>
              <span>{el.name}</span>
              <span>{el.rol}</span>
              <span>{el.estado}</span>
              <span>{el.email}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FilaUsuario = ({ usuario, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    _id: usuario._id,
    name: usuario.name,
    rol: usuario.rol,
    estado: usuario.estado,
    email: usuario.email
  });

  const actualizarUsuario = async () => {
    //enviar la info al backend

    await editarUsuario(
      usuario._id,
      {
        name: infoNuevoUsuario.name,
        rol: infoNuevoUsuario.rol,
        estado: infoNuevoUsuario.estado,
        email: infoNuevoUsuario.email
      },
      (response) => {
        console.log(response.data);
        toast.success('Usuario modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error('Error modificando el usuario');
        console.error(error);
      }
    );
  };



  return (
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoUsuario._id}</td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoUsuario.name}
              onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, name: e.target.value })}
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoUsuario.rol}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoUsuario.estado}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoUsuario.email}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, email: e.target.value })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{usuario._id}</td>
          <td>{usuario.name}</td>
          <td>{usuario.rol}</td>
          <td>{usuario.estado}</td>
          <td>{usuario.email}</td>
        </>
      )}

      <td>
        <div className='flex w-full justify-around'>
          {edit ? (
            <>
              <Tooltip title='Confirmar Edición' arrow>
                <i
                  onClick={() => actualizarUsuario()}
                  className='fas fa-check text-green-700 hover:text-green-500'
                />
              </Tooltip>
              <Tooltip title='Cancelar edición' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title='Editar Usuario' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-pencil-alt text-gray-400 hover:text-gray-700 cursor-pointer'
                />
              </Tooltip>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};



export default MaestroUsuario;