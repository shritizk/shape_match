import { DragControls, motion, useDragControls } from "motion/react"
import { useRef, useState } from "react";
import MotionButton from "./Motion/MotioButton";
import DragItem from "./Motion/DragItem";


function Start_box(Param){

    // drag control 
    const controls = useDragControls();


    // ref to the container 
    const constraintRef = useRef(null);

    
    if (!Param.game){
      return  <div className="flex justify-center items-center mt-10 pt-20">
       <MotionButton setGame={Param.setGame}  ></MotionButton>
      </div>
    }else{
      return  <div className="h-screen w-screen relative flex" ref={constraintRef}>
        <div className="w-1/2  flex items-center justify-center "> 

          <DragItem></DragItem>
        </div>
        <div className="bg-amber-500  w-1/2 border-l h-screen grid grid-cols-2 grid-rows-2  ">
          <div className="bg-red-600"></div>
          <div className="bg--600"></div>
          <div className="bg-yellow-600"></div>
          <div className="bg-green-600"></div>
        </div>
      </div>
    }
  }
export default Start_box