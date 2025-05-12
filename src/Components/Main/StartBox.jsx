import { motion } from "motion/react"

function Start_box(Param){

    function start_game(){
        return Param.setGame(true)
    }

    if (!Param.game){
      return  <div className="flex justify-center items-center mt-10">
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
      return <div className="mt-20">started</div>
    }
  }
export default Start_box