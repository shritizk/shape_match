import { motion } from "motion/react"
import { option, select } from "motion/react-client";


function setRandomShape(){

   
    const shapes = {
        "cicrle": "rounded-full w-10 h-10",
        "square": "w-10 h-10",
        "rectangle": "w-16 h-10",
        "triangle": "w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-black"
      }
      return 
    }

function DragItem(){

    

    function setRandomShape(){

        function RadnomColor(){

        const colors = [
            "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
            "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500"
        ];
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];

        }

        const color = RadnomColor();
        const shapes = {
            "circle": "rounded-full w-10 h-10",
            "square": "w-10 h-10",
            "rectangle": "w-16 h-10",
            "triangle": "w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-black"
        };
        const options = ["circle", "square", "rectangle", "triangle"];
        const random = Math.floor(Math.random() * options.length);
        const selected = options[random];

        if (selected === "triangle") {
        const triangleColor = color.replace("bg-", "border-b-");
        return shapes["triangle"].replace("border-b-black", triangleColor);
        }

        return `${shapes[selected]} ${color}`;
}

    return <motion.div 
    drag
    className={setRandomShape()} 
    ></motion.div>
}


export default DragItem