import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/loading.slice";

export const funcion = createSlice({
  name: "visita",
  initialState: [],
  reducers: {
    setvisita: (state, action) => {
      return action.payload;
    },
  },
});

export const { setvisita } = funcion.actions;

export default funcion.reducer;

export const getvisita = () => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://portafolio-developer.herokuapp.com/api/v1/visitas")
    .then(res => dispatch(setvisita(res.data.visita.length)))
    .catch(error => dispatch(console.log(error.response)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addvisita = data => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .post("https://portafolio-developer.herokuapp.com/api/v1/visitas", data)
    .then(() => dispatch(getvisita()))
    .finally(() => dispatch(setIsLoading(false)));
};
