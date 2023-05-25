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
          <a className='opciones fuente' href="#">Información Academica</a>
        </div>
        <div className='contenedor'>
          <a className='opciones fuente' href="#">Realizar Pago</a>
        </div>
        <div className='contenedor'>
          <a className='opciones fuente' href="#">Servicios</a>
        </div>
        <div className='contenedor'>
          <a className='opciones fuente' href="#">Nosotros</a>
        </div>
      </nav>

      <div className='banner' style={{ backgroundImage: `url(${background})` }}>
      </div>

      <div className='centrado fuente'>
        <h1>Escuela primaria Gral. Juventino Espinoza</h1>
      </div>

      <div className='centrado fuente descripcion'>
      <h2>Ciclo escolar 2023-B</h2>
      <h2>Un nuevo ciclo comienza y con él se ven renovados los deseos de empezar estos caminos juntos con entusiasmo, con alegría, afrontando juntos el día a día.</h2>
        <h2>Decimos si al esfuerzo, a la dedicación, a la perseverancia. Decimos si a la familia, al compromiso, a los valores. Todos los que conformamos esta comunidad educativa estamos comprometidos en lograr que desde la escuela el niño asuma sus funciones con responsabilidad, que lo impulsen a gran medida que la vivencia de los valores lo llevaran ala construcción de un mundo más justo.</h2>
        <h2>Nos esforzaremos para el cumplimiento de dichos objetivos para lo cual necesitamos el trabajo mancomunado entre ustedes "familia" y nosotros "educadores".</h2>
        <h2>Que tengamos todos un excelente año escolar.</h2>
      </div>

      <div className='footer centrado fuente'>
        <p>Dirección: CALLE BRASIL , COL. LOS FRESNOS
CP 63190, TEPIC, NAYARIT   <br></br>La escuela General Juventino Espinosa es una escuela del sector público, de nivel educativo Primaria y de turno matutino.</p>
      </div>
    </div>
    </>
  );
}

export default App;