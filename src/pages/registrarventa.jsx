
const RegistrarVenta = () => {
    return(
        <div className="content flex-form" >
            <h2>Registro Ventas</h2>
            <form className="sale_form" action="#" id="sale_form">

                <span className="required_notification">* Datos requeridos</span>
                <label htmlFor="Identificador">Identificador:</label>
                <input type="text" placeholder="# Código SKU" required/>
                <label htmlFor="valorventa">Valor Venta:</label>
                <input type="number" name="valorventa" placeholder="250000" required/>
                <span className="form_hint"><strong>Formato correcto:</strong> "250000"</span>
                <label htmlFor="preciounitario">Precio Unitario Producto:</label>
                <input type="number" name="preciounitario" placeholder="50000" required/>
                <span className="form_hint"><strong>Formato correcto:</strong> "50000"</span>
                <label htmlFor="fechahora">Fecha de la Venta:</label>
                <input type="date" name="fechahora" placeholder="01/01/2021" required/>
                <span className="form_hint"><strong>Formato correcto:</strong> "01/01/2021"</span>
                <label htmlFor="documentoid">Documento Id:</label>
                <input type="number" name="documentoid" placeholder="51230987" required/>
                <span className="form_hint"><strong>Formato correcto:</strong> "51230987"</span>
                <label htmlFor="nombrecliente">Nombre del Cliente:</label>
                <input type="text" name="nombrecliente" placeholder="Carlos Pérez" required/>
                <span className="form_hint"><strong>Formato correcto:</strong> "Carlos Pérez"</span>
                <label htmlFor="vendedor">Vendedor:</label>
                <input type="text" name="Vendedor" placeholder="Carolina García" required/>
                <span className="form_hint"><strong>Formato correcto:</strong> "Carolina García"</span>
                <div className="centrado">
                    <button className="submit button" type="submit">Ingresar Venta</button>
                </div>
            </form>
        </div>
    )
}
export default RegistrarVenta;