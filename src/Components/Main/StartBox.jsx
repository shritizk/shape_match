import { DragControls, motion, useDragControls } from "motion/react"
import { useRef, useState } from "react";


function Start_box(Param){

    // drag control 
    const controls = useDragControls();


    // ref to the container 
    const constraintRef = useRef(null);

    // state of drag  
    const [dragState, setDragState] = useState(false);  
    function start_game(){
        return Param.setGame(true)
    }

    

    if (!Param.game){
      return  <div className="flex justify-center items-center mt-10 pt-20">
        <motion.div
          className="rounded-full w-24 h-24 flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0.4 }}
          animate={{ scale: 1.1, opacity: 0.7 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 30px rgba(128, 128, 128, 0.5)", 
          }}
        >
          <button
            onClick={start_game}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
          >
            Start
          </button>
        </motion.div>
      </div>
    }else{
      return  <div className="h-screen w-screen relative flex" ref={constraintRef}>
        <div className="w-1/2  flex items-center justify-center "> 

          <motion.div 
          drag
          onDrag={(event , info)=>{
            console.log("x: " , info.point.x , "y: " , info.point.y);
          }}
          className="w-10 h-10 bg-red-100 rounded-md">
          </motion.div>
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