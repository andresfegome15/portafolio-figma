import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/Abautme.css";

const style = document.documentElement.style;

const Abautme = () => {
  let mode = useSelector(state => state.thema);

  useEffect(() => {
    if (mode === "true") {
      style.setProperty("--colorFondoMe", "#0b0d17d5");
      style.setProperty("--colorTextoMe", "white");
      style.setProperty("--colorPurpureMe", "#2EC5CE");
      style.setProperty("--colorFondoCardMe", "black");
    } else {
      style.setProperty("--colorFondoMe", "#D5FAFC");
      style.setProperty("--colorTextoMe", "black");
      style.setProperty("--colorPurpureMe", "#8c30f5c4");
      style.setProperty("--colorFondoCardMe", "white");
    }
  }, [mode]);

  return (
    <div className='abautme-container' id='abautme'>
      <div className='abautme-card'>
        <h1 className='title-card'>
          <span>"</span>¡Un poco de mí!
        </h1>
        <p>
          Soy Andrés González, Colombiano me encanta la tecnología, sigo
          aprendiendo del mundo de la programación, espero que este portafolio
          te agrade, cualquier sugerencia o interés en trabajar conmigo hazmelo
          saber en los formularios.
        </p>
      </div>
      <div className='abautme-card'>
        <i className='fa-sharp fa-solid fa-graduation-cap'></i>
        <h2 className='title-card'>Estudio</h2>
        <p>
          Soy técnico en sistemas y desarrollador fullstack el último lo obtuve
          hace poco tiempo, y quiero poner en practica todo lo aprendido
        </p>
      </div>
      <div className='abautme-card'>
        <i className='fa-solid fa-laptop-code'></i>
        <h2 className='title-card'>Lenguajes</h2>
        <p>
          Además de los lenguajes básicos de programación que son HTML, CSS y
          Javascript. Poseo conocimineto en el <spam>FRAMEWORK REACT</spam>, y
          librerías externa para diseñar backends con una facil interacción para
          los usuarios. <br />
          Para desrrollo de backends utiliso <spam>NODE.jS</spam> para contruir
          el servidor, con esto utilizo un entorno express, el OMR de zequelise
          y bases de datos SQL; Al igual que con react en node utilizo librerías
          externas para hacer diseños más completos y funcionales.
        </p>
      </div>
      <div className='abautme-card'>
        <i className='fa-solid fa-cloud'></i>
        <h2 className='title-card'>Skill</h2>
        <p>
          <i className='fa-solid fa-fire'></i> - Firebase <br />
          <br />
          <div className='img-azure'></div>- Azure <br />
          <br />
          <div className='img-heroku'></div>- Heroku <br />
          <br />
          <i className='fa-brands fa-github'></i> - Github <br />
          <br />
          <i className='fa-brands fa-bootstrap'></i> - Bootstrap
        </p>
      </div>
    </div>
  );
};

export default Abautme;
