import { useState } from "react"
import NavBar from "./Components/NavBar/NavBar"
import Start_box from "./Components/Startscreen/StartBox";

function App() {
  
  /** 
   * param = {
   * game = bool ,
   * reset = start state of game that i will create }
   */

  const [game,setGame] = useState(false);

  return (
   <div className="relative">
    <div className="fixed top-0 left-0 w-350 z-50 bg-white shadow-md">
  <NavBar game={game} setGame={setGame} />
</div>
    <div className=" w-350 flex justify-center items-start min-h-screen ">
    <Start_box game={game} setGame={setGame}></Start_box>
    </div>
   </div>
  )
}

export default App
