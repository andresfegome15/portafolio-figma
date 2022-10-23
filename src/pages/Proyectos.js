import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/proyectos.css";

const style = document.documentElement.style;
const Proyectos = () => {
  let mode = useSelector(state => state.thema);

  useEffect(() => {
    if (mode === "true") {
      style.setProperty("--colorFondoProyecto", "#0b0d17d5");
      style.setProperty("--colorTextoProyecto", "white");
      style.setProperty("--colorPurpureProyecto", "#2EC5CE");
    } else if (mode === "false") {
      style.setProperty("--colorFondoProyecto", "rgba(156, 148, 148, 0.486)");
      style.setProperty("--colorTextoProyecto", "black");
      style.setProperty("--colorPurpureProyecto", "#8c30f5c4");
    }
  }, [mode]);

  return (
    <div className='container-proyectos'>
      <div className='card-proyecto'>
        <div className='card img-1'></div>
        <span>Ecommerce</span>
        <a href='/#/home'>Ver</a>
      </div>
      <div className='card-proyecto'>
        <div className='card img-2'></div>
        <span>Pokedex</span>
        <a href='/#/home'>Ver</a>
      </div>
      <div className='card-proyecto'>
        <div className='card img-3'></div>
        <span>Portafolio vanilla</span>
        <a href='/#/home'>Ver</a>
      </div>
      <div className='card-proyecto'>
        <div className='card img-4'></div>
        <span>ClimApp</span>
        <a href='/#/home'>Ver</a>
      </div>
      <div className='card-proyecto'>
        <div className='card img-5'></div>
        <span>Citas</span>
        <a href='/#/home'>Ver</a>
      </div>
    </div>
  );
};

export default Proyectos;
