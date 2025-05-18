export default function ShapeOrder(){
        
        const shapes = ["circle", "triangle", "square", "rectangle"];
        
        const shape = [];
        
        while (shape.length()<3){

            const start = Math.floor(Math.random() * 4); // pick random number on range of 0 to 3 .   

            if(shapes[start] in shape){
                continue
            }else{
                shape.push(shapes[start]);
            }

        }
        
        return shape  

    };