import { useState } from "react"
import NavBar from "./Components/Main/NavBar"
import Start_box from "./Components/Main/StartBox";

function App() {
  
  /** 
   * param = {
   * game = bool ,
   * reset = start state of game that i will create }
   */

  const [game,setGame] = useState(false);

  return (
   <div className="relative">
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
  <NavBar game={game} setGame={setGame} />
</div>
    <div className="pt-20 flex justify-center items-start min-h-screen mt-10">
    <Start_box game={game} setGame={setGame}></Start_box>
    </div>
   </div>
  )
}

export default App
