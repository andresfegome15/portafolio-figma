import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./loading.slice";

export const contactoSlice = createSlice({
  name: "counterSlice",
  initialState: [],
  reducers: {
    setCounterSlice: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCounterSlice } = contactoSlice.actions;

export default contactoSlice.reducer;

export const getContact = () => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://portafolio-developer.herokuapp.com/api/v1/contactos")
    .then(res => dispatch(setCounterSlice(res.data.contactos.length)))
    .catch(error => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addContact = data => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .post("https://portafolio-developer.herokuapp.com/api/v1/contactos", data)
    .then(() => {
      dispatch(getContact());
      alert(
        `Hola, ${data.name} gracias por contactar, te llegara un mensaje al email ${data.email}`
      );
    })
    .finally(() => dispatch(setIsLoading(false)));
};
