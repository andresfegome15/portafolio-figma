import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../store/slices/contacto.slice";
import "../style/navbar.css";
import melapto from "../img/andres.png";
import { setMode } from "../store/slices/thema.slice";

const style = document.documentElement.style;

const Navbar = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [statusbtn, setStatusbtn] = useState(false);
  const [btnthema, setBtnThema] = useState(false);
  dispatch(setMode(localStorage.getItem("thema")));

  const mode = useSelector(state => state.thema);

  useEffect(() => {
    if (mode === "false") {
      style.setProperty("--colorFondoNav", "transparent");
      style.setProperty("--colorTextoNav", "#000");
      style.setProperty("--colorFondoBoton", "#8c30f5c4");
    } else {
      style.setProperty("--colorFondoNav", "#0b0d17d5");
      style.setProperty("--colorTextoNav", "#fff");
      style.setProperty("--colorFondoBoton", "#2EC5CE");
    }
  }, [mode]);

  const thema = () => {
    setBtnThema(!btnthema);
    localStorage.setItem("thema", btnthema);
  };

  const submit = data => {
    dispatch(addContact(data));
  };
  return (
    <>
      <header className='header-navbar'>
        <nav className='nav-navbar'>
          <div className='img-me'></div>

          <button
            className={"switch " + mode}
            id='switch'
            onClick={() => thema()}
          >
            <span>
              <i className='fa-solid fa-sun'></i>
            </span>
            <span>
              <i className='fa-solid fa-moon'></i>
            </span>
          </button>
          <ul className='ul-navbar'>
            <li className='li-navbar'>
              <a href='/#/' className='a-navbar'>
                Home
              </a>
            </li>
            <li className='li-navbar'>
              <a href='#abautme' className='a-navbar'>
                Abautme
              </a>
            </li>
            <li className='li-navbar'>
              <a href='/#/perfil' className='a-navbar'>
                Perfil
              </a>
            </li>
            <li className='li-navbar'>
              <a href='/#/contact' className='a-navbar'>
                Contact
              </a>
            </li>
          </ul>
          <button
            className='btn-header-contactar'
            onClick={() => setStatusbtn(!statusbtn)}
          >
            Contactar
          </button>
          <a
            className='enlaces'
            href='https://www.linkedin.com/in/andr%C3%A9s-felipe-401a671ab/'
          >
            <i class='fa-brands fa-linkedin'></i>
          </a>
          <a className='enlaces' href='https://github.com/andresfegome15'>
            <i class='fa-brands fa-github'></i>
          </a>
        </nav>
      </header>
      {statusbtn ? (
        <div className='container-contacto'>
          <div className='modal'>
            <div className='container-img-header'>
              <img className='img-header-contact' src={melapto} alt='' />
            </div>

            <form className='form' action='' onSubmit={handleSubmit(submit)}>
              <div className='form-group'>
                <input
                  className='form-input'
                  id='txtname'
                  type='text'
                  required
                  placeholder=' '
                  {...register("name")}
                />
                <label htmlFor='txtname' className='form-label'>
                  Name:
                </label>
              </div>
              <div className='form-group'>
                <input
                  className='form-input'
                  id='txtemail'
                  type='text'
                  required
                  placeholder=' '
                  {...register("email")}
                />
                <label htmlFor='txtemail' className='form-label'>
                  Email:
                </label>
              </div>
              <div className='form-group'>
                <input
                  className='form-input'
                  id='txtmessage'
                  type=''
                  required
                  placeholder=' '
                  {...register("mensaje")}
                />
                <label htmlFor='txtmessage' className='form-label'>
                  Mensaje:
                </label>
              </div>
              <button type='submit'>Contactar</button>
            </form>
          </div>
          <div
            className='overlay'
            onClick={() => setStatusbtn(!statusbtn)}
          ></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
