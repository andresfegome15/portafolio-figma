import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./loading.slice";

export const sugerenciaSlice = createSlice({
  name: "sugerencia",
  initialState: [],
  reducers: {
    setSugerencia: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSugerencia } = sugerenciaSlice.actions;

export default sugerenciaSlice.reducer;

export const getsugerencia = () => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://portafolio-developer.herokuapp.com/api/v1/sugerencias")
    .then(res => dispatch(setSugerencia(res.data.sugerencia)))
    .catch(error => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addsugerencia = data => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .post("https://portafolio-developer.herokuapp.com/api/v1/sugerencias", data)
    .then(res => dispatch(getsugerencia()))
    .catch(error => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};
