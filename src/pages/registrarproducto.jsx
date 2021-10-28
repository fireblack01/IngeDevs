import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { crearProducto } from 'utils/api';
import 'react-toastify/dist/ReactToastify.css';
const RegistrarProducto = () => {

    const submitForm =  (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        console.log(fd)
        const nuevoProducto = {};
        for (let [key, value] of fd.entries()) {
            nuevoProducto[key] = value;
        }
  
    crearProducto(
        {
          ID: nuevoProducto.ID,
          descripcion: nuevoProducto.descripcion,
          valor_unitario: nuevoProducto.valor_unitario,
          estado: nuevoProducto.estado
        },
        (response) => {
          console.log(response.data);
          toast.success('Producto agregado con éxito');
        },
        (error) => {
          console.error(error);
          toast.error('Error creando un producto');
        }
      );
    };
    
    return (
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-gray-800 py-4'>Crear nuevo producto</h2>
        <form onSubmit={submitForm} className='flex flex-col'>
          <label className='flex flex-col' htmlFor='ID'>
          Código del producto
            <input
              name='ID'
              type='text'
              placeholder='ID del producto'
              required
            />
          </label>
          <label className='flex flex-col' htmlFor='descripcion'>
          Descripción del producto
            <input
              name='descripcion'
              type='text'
              placeholder='Descripción del producto'
              required
            />
          </label>
          <label className='flex flex-col' htmlFor='valor_unitario'>
          Valor del producto
            <input
              name='valor_unitario'
              type='number'
              placeholder='Valor del producto'
              required
            />
          </label>
          <label className='flex flex-col' htmlFor='estado'>
            Estado del producto
            <select
              name='estado'
              required
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione una opción
              </option>
              <option>Disponible</option>
              <option>No disponible</option>
            </select>
          </label>
          <button
            type='submit'
            className='button'
          >
            Guardar producto
          </button>
        </form>
        <Link to="maestroProducto" className="button listar">Listar productos</Link>
        <ToastContainer position='bottom-center' autoClose={5000} />
      </div>
      
    );
    
    /*return(    
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
                
            </div>        
        </div>   
    );*/
}
export default RegistrarProducto;