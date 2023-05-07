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
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis ligula a est tristique, a iaculis purus
        sodales. Proin in congue massa. Maecenas metus lacus, posuere sit amet luctus a, porttitor vitae ipsum. In in
        sagittis lacus, eget dignissim erat. Fusce vitae fermentum sapien. Suspendisse dictum tellus eu fringilla rhoncus.
        Nullam eleifend odio rutrum purus finibus, ac ultricies purus commodo. Sed efficitur massa vel libero lacinia
        ultrices.</h2>
      </div>

      <div className='footer centrado fuente'>
        <p>Página demo para Proyecto II</p>
      </div>
    </div>
    </>
  );
}

export default App;