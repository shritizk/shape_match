import e from "express";

// this is to create components to be later passed to 
function GridItems(Prop){

    function RadnomColor(){

        const colors = [
            "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
            "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500"
        ];
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];

        }

    function RandomClass(){
        
        // getting 4 random colours 
        let Colors = []
        while(Colors.length() <= 4)
            let new_color = RadnomColor();    

            if(new_color in Colors){
                continue
            }else{
                Colors.push(new_color)
            }
        }
        

        // random shape pattern 
          
        const Name_list = ["square" , "triangle" , "circle" , "rectangle"];
        const random = Math.floor(Math.random() * Name_list.length);
        
        ele_list = [];

        while(ele_list.length() <=4){
            let color = Name_list[random];
            if ( color in ele_list) {
                continue
            }else{
                ele_list.push(color);
            }    
        };
        

        let ele_map = [];

        // creation of classes 
        for(let i of Colors){
            for(let k of ele_list){

                switch (Prop.main_shape){
        
                    case k:
                        ele_map.push(<div className={i} id="main" >{k}</div>)
                    default : 
                        ele_map.push(<div className={i} >{k}</div>)
        }                  
            };
        };           
    }
        
    let Generated_grid = RandomClass();

    return <>
        {RandomClass}
    </>

}


function GridItems(Prop){

    // create random Class 
    function RandomClass(){

        const colors = [
            "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
            "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500"
        ];
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];

    };

   
    
}


export default GridItems