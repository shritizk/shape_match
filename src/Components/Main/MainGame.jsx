import { motion } from "motion/react";
import { useEffect } from "react";
import axios from "axios";

// urls ----------------------------- > 
import { randomClass } from "../../urls";

// 2 components
// grid 
// king shape
// random shape generate - 50 

function MainGame({setCycle, setPoint, king}) {

    // fial game logic 
    return (
        <div className="grid grid-cols-2 h-screen w-screen">
            <div className="flex justify-center items-center">
                <motion.div 
                drag
                id={king.id} 
                className={king.class} 
                style={king.style}
                key={Param.point}
                ></motion.div>
            </div>
            <div className="bg-green-400">
                
            </div>
        </div>
    );
}

export default MainGame;
