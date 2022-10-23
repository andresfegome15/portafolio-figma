import { configureStore } from "@reduxjs/toolkit";
import loading from "./slices/loading.slice";
import visita from "./slices/funciones.slice";
import setCounterSlice from "./slices/contacto.slice";
import sugerenciaSlice from "./slices/sugerencia.slice";
import thema from "./slices/thema.slice";

export default configureStore({
  reducer: {
    loading,
    visita,
    setCounterSlice,
    sugerenciaSlice,
    thema,
  },
});
