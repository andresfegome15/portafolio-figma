import React, { useEffect } from "react";
import "../style/skill.css";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react-removebg-preview.png";
import redux from "../img/redux.png";
import boostrap from "../img/boostrap.png";
import node from "../img/node.png";
import sequelize from "../img/sequelize.png";
import express from "../img/express.png";
import postgres from "../img/postgres.png";
import { useSelector } from "react-redux";

const style = document.documentElement.style;

const Skill = () => {
  let mode = useSelector(state => state.thema);

  useEffect(() => {
    if (mode === "true") {
      style.setProperty("--colorFondoSkill", "#0b0d17d5");
      style.setProperty("--colorPurpureSkill", "#2EC5CE");
    } else if (mode === "false") {
      style.setProperty("--colorFondoSkill", "transparent");
      style.setProperty("--colorPurpureSkill", "#8c30f5c4");
    }
  }, [mode]);

  return (
    <div className='container-skill'>
      <h1>Lenguajes</h1>
      <div className='container-card'>
        <div className='card-items'>
          <img alt='img' src={html} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status html'></div>
          </div>
        </div>
        <div className='card-items'>
          <img alt='img' src={css} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status css'></div>
          </div>
        </div>
        <div className='card-items'>
          <img alt='img' src={js} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status js'></div>
          </div>
        </div>
        <div className='card-items'>
          <img alt='img' src={react} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status react'></div>
          </div>
        </div>
        <div className='card-items'>
          <img alt='img' src={redux} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status redux'></div>
          </div>
        </div>
        <div className='card-items'>
          <img alt='img' src={boostrap} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status boostrap'></div>
          </div>
        </div>
        <div className='card-items'>
          <img alt='img' src={node} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status node'></div>
          </div>
        </div>
        <div className='card-items'>
          <img alt='img' src={express} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status express'></div>
          </div>
        </div>
        <div className='card-items'>
          <img alt='img' src={postgres} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status postgres'></div>
          </div>
        </div>
        <div className='card-items'>
          <img alt='img' src={sequelize} className='img-figure' />
          <div className='bar-total'>
            <div className='bar-status sequelize'></div>
          </div>
        </div>
      </div>
      <div className='circulo-skill'></div>
    </div>
  );
};

export default Skill;
