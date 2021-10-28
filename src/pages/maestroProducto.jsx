import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerProductos, editarProducto, eliminarProducto } from 'utils/api';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';

const MaestroProducto = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo Producto');
  const [colorBoton, setColorBoton] = useState('indigo');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      await obtenerProductos(
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          setProductos(response.data);
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
      fetchProductos();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de productos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear Nuevo Producto');
      setColorBoton('indigo');
    } else {
      setTextoBoton('Mostrar Todos los productos');
      setColorBoton('green');
    }
  }, [mostrarTabla]);
  return (
    <div className="content">
      <div className="container mw-60 pd-tb-30 flex-form">   
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
          <div className='flex flex-col w-full'>
            <h2 className='text-3xl font-extrabold text-gray-900 text-center py-4'>
              Página de administración de productos
            </h2>
          </div>
          <TablaProductos
            loading={loading}
            listaProductos={productos}
            setEjecutarConsulta={setEjecutarConsulta}
          />
          <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
      </div>
    </div>
  );
};

const TablaProductos = ({ loading, listaProductos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar producto'
        className='border-2 border-gray-700 px-3 py-4 self-center rounded-md focus:outline-none focus:border-gray-900'
      />
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los productos</h2>
      <div className='hidden md:flex w-full'>
        {loading ? (
          <ReactLoading type='cylon' color='#4f4f4f' height={667} width={375} />
        ) : (
          <table className='tabla'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Código del producto</th>
                <th>Descripción del producto</th>
                <th>Valor del producto</th>
                <th>Estado del producto</th>
                  <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.map((producto) => {
                return (
                  <FilaProducto
                    key={nanoid()}
                    producto={producto}
                    setEjecutarConsulta={setEjecutarConsulta}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className='flex flex-col w-full m-2 md:hidden'>
        {productosFiltrados.map((el) => {
          return (
            <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
              <span>{el.ID}</span>
              <span>{el.descripcion}</span>
              <span>{el.valor_unitario}</span>
              <span>{el.estado}</span>
            </div>
          );
        })}
      </div>
      <Link to="registrarProducto" className="button mt-6">Registrar un nuevo producto</Link>
    </div>
  );
};

const FilaProducto = ({ producto, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id: producto._id,
    ID: producto.ID,
    descripcion: producto.descripcion,
    valor_unitario: producto.valor_unitario,
    estado: producto.estado
  });

  const actualizarProducto = async () => {
    //enviar la info al backend

    await editarProducto(
      producto._id,
      {
        ID: infoNuevoProducto.ID,
        descripcion: infoNuevoProducto.descripcion,
        valor_unitario: infoNuevoProducto.valor_unitario,
        estado: infoNuevoProducto.estado
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error('Error modificando el producto');
        console.error(error);
      }
    );
  };

  const deleteVehicle = async () => {
    await eliminarProducto(
      producto._id,
      (response) => {
        console.log(response.data);
        toast.success('producto eliminado con éxito');
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error('Error eliminando el producto');
      }
    );

    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoProducto._id}</td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoProducto.ID}
              onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, ID: e.target.value })}
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoProducto.descripcion}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, brand: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoProducto.valor_unitario}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, valor_unitario: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoProducto.estado}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, estado: e.target.value })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{producto._id}</td>
          <td>{producto.ID}</td>
          <td>{producto.descripcion}</td>
          <td>{producto.valor_unitario}</td>
          <td>{producto.estado}</td>
        </>
      )}

      <td>
        <div className='flex w-full justify-around'>
          {edit ? (
            <>
              <Tooltip title='Confirmar Edición' arrow>
                <i
                  onClick={() => actualizarProducto()}
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
              <Tooltip title='Editar Producto' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-pencil-alt text-gray-400 hover:text-gray-700 cursor-pointer'
                />
              </Tooltip>
              <Tooltip title='Eliminar Producto' arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className='fas fa-trash text-gray-400 hover:text-gray-700 cursor-pointer'
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
            <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar el producto?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
              <button
                onClick={() => deleteVehicle()}
                className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
};



export default MaestroProducto;