import { color, motion } from "motion/react";
import { useEffect, useState } from "react";
import generateRandomComponentClasses from "../../utils/ClassMaker";

// 2 components
// grid 
// king shape
// random shape generate - 50 

function MainGame() {

    // states 
    const [king, setKing] = useState({
        style : "", 
        id : "" , 
        class : ""
    });   // king shape object: { className, shape }
    const [point, setPoint] = useState(0);

    // -------------------> component logic ----------------------------->>>

    // --------------- king logic -------------
    useEffect(()=>{
        
        const colorNames = [
    'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald',
    'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple',
    'fuchsia', 'pink', 'rose'
  ];

  const colors = {
    red: "#ef4444",
    orange: "#f97316",
    amber: "#f59e0b",
    yellow: "#eab308",
    lime: "#84cc16",
    green: "#22c55e",
    emerald: "#10b981",
    teal: "#14b8a6",
    cyan: "#06b6d4",
    sky: "#0ea5e9",
    blue: "#3b82f6",
    indigo: "#6366f1",
    violet: "#8b5cf6",
    purple: "#a855f7",
    fuchsia: "#d946ef",
    pink: "#ec4899",
    rose: "#f43f5e"
  };

  const randomColorName = colorNames[Math.floor(Math.random() * colorNames.length)];


  const randomColorHex = colors[randomColorName];
        
        // hash with all potential shapes
        const shape_hash = {
            circle : "rounded-full w-16 h-16" ,
            square : "w-16 h-16" , 
            rectangle : "w-32 h-16"
        };

        const shapes = ["circle" , "triangle" , "square" , "rectangle"];

        let random_shape = shapes[Math.floor(Math.random()*shapes.length)];

        // final style
    const style = random_shape === "triangle"
  ? {
      width: 0,
      height: 0,
      borderLeft: "32px solid transparent",
      borderRight: "32px solid transparent",
      borderBottom: `48px solid ${randomColorHex}`
    }
  : { backgroundColor: randomColorHex };

        setKing({
            style  , 
            id : random_shape , 
            class : shape_hash[random_shape]
        });        

    },[point])


    
    // fial game logic 

    return (
        <div className="grid grid-cols-2 h-screen w-screen">
            <div className="flex justify-center items-center">
                <motion.div 
                drag
                id={king.id} 
                className={king.class} 
                style={king.style}
                key={point}
                ></motion.div>
                <br></br>
                 <button onClick={()=>{
                    setPoint(1)
                }} className="bg-red-600">fdsfsdf</button>
            </div>
            <div className="bg-green-400">
               
            </div>
        </div>
    );
}

export default MainGame;
