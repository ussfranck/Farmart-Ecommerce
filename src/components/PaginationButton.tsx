import React from "react";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import "../css/app.css";

interface PaginationButtonProps {
  prevRef: any,
  nextRef: any,
  prevFunction: VoidFunction,
  nextFunction: VoidFunction
}

export const PaginationButton : React.FC<PaginationButtonProps> =
   ({prevRef, nextRef, prevFunction, nextFunction}) => {
  return (
    <div className={"pagination-btn-container"}>
      <div className={"pagination-btn-container__button left"} 
            ref={prevRef} onClick={() => prevFunction()}>
        <MdArrowBackIosNew/>
      </div>
      <div className={"pagination-btn-container__button right"} 
           ref={nextRef} onClick={() => nextFunction()}>
        <MdArrowForwardIos/>
      </div>
    </div>
  );
}