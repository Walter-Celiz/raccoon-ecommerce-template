"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../redux/actions/index";
import { RootState } from "../redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export default function Home() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(getDataFromAPI());
  }, [dispatch]);

  // console.log("home --> ", products[0].message);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello World</p>
      <p>esto es del servidor: {products[0]?products[0].message : ` loading `}</p>
    </main>
  );
}
