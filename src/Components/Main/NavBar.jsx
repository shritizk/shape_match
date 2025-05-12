import { motion } from "framer-motion";

function NavBar(Param) {
  function stop_game() {
    return Param.setGame(false);
  }

  function reset_game() {
    console.log("reset!!");
  }

  if (!Param) {
    return <div>Something went wrong</div>;
  }
  if (Param.game === false) {
    return (
      <div className="flex flex-col items-center gap-4 shadow-2xl p-4">
        <h1 className="text-2xl font-bold text-center">Shape Matcher Game</h1>
      </div>
    );
  } else {
    return (
      <div className="flex gap-4 justify-start shadow-2xl p-4">
        <motion.button
          onClick={stop_game}
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
          initial={{ x: 10000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Exit
        </motion.button>
        <motion.button
          onClick={reset_game}
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
          initial={{ x: 10000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Reset
        </motion.button>
      </div>
    );
  }
}

export default NavBar;
