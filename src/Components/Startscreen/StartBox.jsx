import {useDragControls , motion } from "motion/react"
import { useRef } from "react";

function Start_box(Param){

    // set game 
    function gamestate(){
      return Param.setGame(true)
    };

    // drag control 
    const controls = useDragControls();

    // ref to the container 
    const constraintRef = useRef(null);

    if(!Param){
      return <div>Something went wrong !!</div>
    }
    
    if (!Param.game){
      return  <div className="flex justify-center items-center mt-10 pt-20">
       <motion.button 
        onClick={gamestate}
        initial={{opacity: 0 , scale: 0} }
        animate={{opacity: 1 , scale: 1 }}
        className="rounded-full bg-amber-200 shadow-2xl w-50 h-50"
       >Start</motion.button>
      </div>
    }else{
      return  <MainGame></MainGame>
    }
  }
export default Start_box