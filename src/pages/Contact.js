import { useForm } from "react-hook-form";
import "../style/contact.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../store/slices/contacto.slice";
import { addsugerencia } from "../store/slices/sugerencia.slice";
import { useEffect } from "react";

const style = document.documentElement.style;

const Contact = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const sugerencias = useSelector(state => state.sugerenciaSlice);

  const submit = data => {
    dispatch(addContact(data));
  };

  const submitSugerencia = data => {
    dispatch(addsugerencia(data));
  };

  let mode = useSelector(state => state.thema);

  useEffect(() => {
    if (mode === "true") {
      style.setProperty("--colorFondoContacto", "#0b0d17d5");
      style.setProperty("--colorTextoContacto", "#2EC5CE");
      style.setProperty("--colorFondoFormContacto", "#8c30f5c4");
      style.setProperty("--colorFondoTextAreaContacto", "#0b0d17d5");
    } else if (mode === "false") {
      style.setProperty("--colorFondoContacto", "transparent");
      style.setProperty("--colorTextoContacto", "black");
      style.setProperty("--colorFondoFormContacto", "#F1E4FF");
      style.setProperty("--colorFondoTextAreaContacto", "#F1E4FF");
    }
  }, [mode]);

  return (
    <div className='container-contact'>
      <div className='contact-left'>
        <div className='container-contactar'>
          <h3 style={{ padding: "1rem" }}>¿Trabajamos juntos?</h3>
          <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <i className='fa-brands fa-whatsapp'></i>
            <a href='https://www.whatsapp.com/?lang=es'> 3042827183</a>
          </div>
          <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <i className='fa-solid fa-envelope'></i>
            <a href='https://outlook.live.com/'> andresgon15.af@hotmail.com</a>
          </div>
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
      <div className='contact-rigth'>
        <div className='container-all-sugerencia'>
          <form action='' onSubmit={handleSubmit(submitSugerencia)}>
            <textarea
              className='form-input'
              maxLength={250}
              type=''
              name=''
              placeholder='Sugerencia'
              id='txtsugerencia'
              {...register("sugerencia")}
            />
            <label htmlFor='txtsugerencia'>Maximo 250 caracteres</label>
            <button className='btnsugerencia' type='submit'>
              sugerir
            </button>
          </form>
          <div className='container-all-items'>
            {sugerencias.length <= 0 ? (
              <h1 style={{ color: "#ccc", padding: "auto" }}>
                No hay Sugerencias
              </h1>
            ) : (
              sugerencias.map(sugerencia => (
                <div key={sugerencia.id} className='container-sugerencia'>
                  <h6>{String(sugerencia.createdAt).slice(0, 10)}</h6>
                  <p className='sugerencia'>{sugerencia.sugerencia}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className='circule-purpel'></div>
    </div>
  );
};

export default Contact;
