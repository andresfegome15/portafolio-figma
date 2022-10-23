import React, { useEffect } from "react";
import "../style/static.css";
import { useDispatch, useSelector } from "react-redux";
import { getvisita, addvisita } from "../store/slices/funciones.slice";
import { getContact } from "../store/slices/contacto.slice";
import { getsugerencia } from "../store/slices/sugerencia.slice";

const Static = () => {
  const contactCounter = useSelector(state => state.setCounterSlice);
  const vistaCounter = useSelector(state => state.visita);
  const sugerenciaCounter = useSelector(state => state.sugerenciaSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addvisita(1));
    dispatch(getvisita());
    dispatch(getContact());
    dispatch(getsugerencia());
  }, [dispatch]);

  return (
    <div className='static-container'>
      <ul className='static-detail'>
        <li className='li-static-detail' data-name='Visitas'>
          <h1 className='img-figure'>{vistaCounter}</h1>
        </li>
        <li className='li-static-detail' data-name='Contactos'>
          <h1 className='img-figure'>{contactCounter}</h1>
        </li>
        <li className='li-static-detail' data-name='Sugerencias'>
          <h1 className='img-figure'>{sugerenciaCounter?.length}</h1>
        </li>
        <li className='li-static-detail' data-name='NO'>
          <h5 className='img-figure'>¿Estoy trabajando?</h5>
        </li>
      </ul>
    </div>
  );
};

export default Static;
