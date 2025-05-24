import { motion } from "motion/react"
import {  useState } from "react";
import MainGame from "../Main/MainGame";

function Start_box(Param){


    // states
    const [point,setPoint] = useState();
    const [cycle , setCycle] = useState();
    const [val , setVal] = useState(); 
    const [king , setKing] = useState();

    // redo the 50 based on cycle
    useEffect(async()=>{

        let res = await axios.get(randomClass);
        const random_ll = res.data; 
        setKing(setVal(random_ll.value))
        
    },[Param.cycle])
    
    // change king based on points
    useEffect(()=>{

      if(val.next == null){
        setCycle(cycle+=1);
      }else{
        setVal(king.next);
        setKing(val.value); 
      };

    },[Param.point]);

    // set game 
    function gamestate(){
      setPoint(0);
      setCycle(1);
      return Param.setGame(true)
    };

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
      return  <MainGame setCycle setPoint king ></MainGame>
    }
  }
export default Start_box