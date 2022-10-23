import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Static } from "../componentes/index";
import { Abautme, Proyectos, Skill, Contact } from "../pages/index";

const style = document.documentElement.style;

const Home = () => {
  let mode = useSelector(state => state.thema);

  useEffect(() => {
    if (mode === "true") {
      style.setProperty("--colorFondo", "black");
      style.setProperty("--colorTexto", "#fff");
      style.setProperty("--colorPurpure", "#2EC5CE");
      style.setProperty("--colorCian", "#8c30f5c4");
      style.setProperty("--sombra", "#fff");
    } else if (mode === "false") {
      style.setProperty("--colorFondo", "transparent");
      style.setProperty("--colorTexto", "#000");
      style.setProperty("--colorPurpure", "#8c30f5c4");
      style.setProperty("--colorCian", "#2EC5CE");
      style.setProperty("--sombra", "rgba(0, 0, 0, 0.6");
    }
  }, [mode]);

  return (
    <div>
      <section>
        <div className='section-bienvenida'>
          <div className='inicio-texto'>
            <h1>Andrés González</h1>
            <h2>Developer fullstack</h2>
            <p>Programador junior, Trabajemos </p>
            <a href='/#/contact'>Ver cv</a>
          </div>

          <div className='inicio-img'>
            <div className='circulo-purple'></div>
            <div className='bienvenida-img'></div>
          </div>
        </div>
        <Static />
        <Abautme />
        <Proyectos />
        <Skill />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
