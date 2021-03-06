import { nanoid } from 'nanoid';
import React, { useState, useEffect, useRef } from 'react';
import { crearVenta } from 'utils/api';
import { obtenerProductos } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';
import { ToastContainer, toast } from 'react-toastify';

const MaestroVenta = () => {
  const form = useRef(null);
  const [vendedores, setVendedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosTabla, setProductosTabla] = useState([]);

  useEffect(() => {
    const fetchVendores = async () => {
      await obtenerUsuarios(
        (response) => {
          setVendedores(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    const fetchProductos = async () => {
      await obtenerProductos(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    fetchVendores();
    fetchProductos();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    });

    console.log('form data', formData);

    const listaProductos = Object.keys(formData)
      .map((k) => {
        if (k.includes('producto')) {
          return productosTabla.filter((v) => v.ID === formData[k])[0];
        }
        return null;
      })
      .filter((v) => v);

    const datosVenta = {
      vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
      cantidad: formData.valor,
      productos: listaProductos,
    };

    await crearVenta(
      datosVenta,
      (response) => {
        console.log(response);
        toast.success('Venta creada con exito');
      },
      (error) => {
        toast.error('Error creando la venta');
        console.error(error);
      }
    );
  };

  return (
    <div className="content">
      <div className="container mw-60 pd-tb-30 flex-form">   
            <div className='flex h-full w-full items-center justify-center'>
            <form ref={form} onSubmit={submitForm} className='flex flex-col h-full'>
                <h1 className='text-3xl font-extrabold text-gray-900 my-3'>Crear una nueva venta</h1>
                <label className='flex flex-col' htmlFor='vendedor'>
                <span className='text-2xl font-gray-900'>Vendedor</span>
                <select name='vendedor' className='p-2' defaultValue='' required>
                    <option disabled value=''>
                    Seleccione un Vendedor
                    </option>
                    {vendedores.map((el) => {
                    return <option key={nanoid()} value={el._id}>{`${el.email}`}</option>;
                    })}
                </select>
                </label>

                <TablaProductos
                productos={productos}
                setProductos={setProductos}
                setProductosTabla={setProductosTabla}
                />

                <label className='flex flex-col'>
                <span className='text-2xl font-gray-900'>Valor Total Venta</span>
                <input
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='number'
                    name='valor'
                    required
                />
                </label>
                <button
                type='submit'
                className='button'
                >
                Crear Venta
                </button>
            </form>
            </div>
            <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
    </div>
  );
};

const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {
  const [productoAAgregar, setProductoAAgregar] = useState({});
  const [filasTabla, setFilasTabla] = useState([]);

  useEffect(() => {
    setProductosTabla(filasTabla);
  }, [filasTabla, setProductosTabla]);

  const agregarNuevoProducto = () => {
    setFilasTabla([...filasTabla, productoAAgregar]);
    setProductos(productos.filter((v) => v.ID !== productoAAgregar.ID));
    setProductoAAgregar({});
  };

  const eliminarProducto = (productoAEliminar) => {
    setFilasTabla(filasTabla.filter((v) => v.ID !== productoAEliminar.ID));
    setProductos([...productos, productoAEliminar]);
  };

  const modificarProducto = (producto, cantidad) => {
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft.ID === producto.ID) {
          ft.cantidad = cantidad;
          ft.total = producto.valor * cantidad;
        }
        return ft;
      })
    );
  };

  return (
    <div>
      <div className='flex flex-col'>
        <label className='flex flex-col' htmlFor='producto'>
          <select
            className='p-2'
            value={productoAAgregar.ID ?? ''}
            onChange={(e) =>
              setProductoAAgregar(productos.filter((v) => v.ID === e.target.value)[0])
            }
          >
            <option disabled value=''>
              Seleccione un Producto
            </option>
            {productos.map((el) => {
              return (
                <option
                  key={nanoid()}
                  value={el.ID}
                >{`${el.descripcion} ${el.valor_unitario} ${el.estado}`}</option>
              );
            })}
          </select>
        </label>
        <button
          type='button'
          onClick={() => agregarNuevoProducto()}
          className='button'
        >
          Agregar Producto
        </button>
      </div>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descripci??n del producto</th>
            <th>Valor Unitario</th>
            <th>Estado del producto</th>
            
            <th>Cantidad</th>
            
            <th>Total</th>
            <th>Eliminar</th>
            <th className='hidden'>Input</th>
          </tr>
        </thead>
        <tbody>
          {filasTabla.map((el, index) => {
            return (
              <FilaProducto
                key={el.ID}
                prod={el}
                index={index}
                eliminarProducto={eliminarProducto}
                modificarProducto={modificarProducto}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProducto = ({ prod, index, eliminarProducto, modificarProducto }) => {
  const [producto, setProducto] = useState(prod);
  useEffect(() => {
    console.log('prod', producto);
  }, [producto]);
  return (
    <tr>
      <td>{producto._id}</td>
      <td>{producto.descripcion}</td>
      <td>{producto.valor_unitario}</td>
      <td>{producto.estado}</td>
      <td>
        <label htmlFor={`valor_${index}`}>
          <input
            type='number'
            name={`cantidad_${index}`}
            value={producto.cantidad}
            onChange={(e) => {
              modificarProducto(producto, e.target.value === '' ? '0' : e.target.value);
              setProducto({
                ...producto,
                cantidad: e.target.value === '' ? '0' : e.target.value,
                total:
                  parseFloat(producto.valor_unitario) *
                  parseFloat(e.target.value === '' ? '0' : e.target.value),
              });
            }}
          />
        </label>
      </td>
      <td>{parseFloat(producto.total ?? 0)}</td>
      <td>
        <i
          onClick={() => eliminarProducto(producto)}
          className='fas fa-minus text-red-500 cursor-pointer'
        />
      </td>
      <td className='hidden'>
        <input hidden defaultValue={producto._id} name={`producto_${index}`} />
      </td>
    </tr>
  );
};

export default MaestroVenta;
