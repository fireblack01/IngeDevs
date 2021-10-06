import redes from 'media/redes.png';

const Footer = () => {
    return (
        <footer className="pd-tb-30 pd-lr-40">
            <div className="container mw-80 pd-tb-30 flex flex-center">
                <div className="container">
                    <h2>Equipo de desarrollo web IngeDevs</h2>
                    <p>Todos los derechos reservados</p>
                    <h2>Contacto</h2>
                    <ul className="no-li-style no-pad">
                        <li>Correo: ingedevs@desarrolloweb.com </li>
                        <li>Direccion: Oficina en MinTIC 255</li>
                        <li>Telefono: 01800 12458 200</li>
                    </ul>
                </div>
                
                <div className="container">
                    <h2>Siganos en nuestras redes sociales</h2>
                    <ul className="no-li-style no-pad">
                        <img src={redes} className="mg-tb-10" alt="Redes" width="100px"/>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
