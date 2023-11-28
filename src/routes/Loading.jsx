import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Await, redirect} from "react-router-dom";
function Loading() {
  return (
    <>
      <div className="grid place-content-center min-h-screen min-w-screen">
        <h3 className="">Loading...</h3>
      </div>
    </>
  );
}

export default Loading;
