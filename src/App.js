import './App.css';
import background from "./Banner1.jpg";
import logo from "./LogoNayarit.png";


function App() {
  return (
    <>
    <div>
      <nav className='menu'>
        <div>
        <img class="naylogo" src="https://educacion.nayarit.gob.mx/wp-content/uploads/elementor/thumbs/Convivencia_Secretaria-de-Educacion_Logotipo_calidad_peso_bajo-q13exc5t08vqq0z4hrb5z584toqgr8xp61b8fcp4fk.png" alt=""/>
        </div>
        <div className='contenedor'>
          <a className='opciones fuente' href="#">Opcion2</a>
        </div>
        <div className='contenedor'>
          <a className='opciones fuente' href="#">Opcion3</a>
        </div>
        <div className='contenedor'>
          <a className='opciones fuente' href="#">Opcion4</a>
        </div>
        <div className='contenedor'>
          <a className='opciones fuente' href="#">Opcion5</a>
        </div>
        <div className='contenedor'>
          <a className='opciones fuente' href="#">Opcion6</a>
        </div>
      </nav>

      <div className='banner' style={{ backgroundImage: `url(${background})` }}>
      </div>

      <div className='centrado fuente'>
        <h1>Nombre de la institución</h1>
      </div>

      <div className='centrado fuente descripcion'>
        <h2>Conceptualización de Servicios en la Nube

Unidad 3. Desarrollo de aplicaciones web en los servicios de la nube, 3.2. Sitio Web sencillo<hr>
Ebalia Gudalupe Felix Lamas Código 209698922 E-mail. ebalia.felix@udgvirtual.udg.mx</h2>
      </div>

      <div className='footer centrado fuente'>
        <p>Página demo para Proyecto II</p>
      </div>
    </div>
    </>
  );
}

export default App;
