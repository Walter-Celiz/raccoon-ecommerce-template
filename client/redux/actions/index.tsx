import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { dataFetch } from "../slices/productSlice";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DataResponse {
  message: string;
  uid: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export const getDataFromAPI = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch: Dispatch) => {
    try {
      const dataPromise = await axios.get<DataResponse>(
        `http://localhost:3001`
      );
      const response = dataPromise.data;
      dispatch(dataFetch(response));
    } catch (error) {
      console.error(error);
    }
  };
};
