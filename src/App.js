import "./App.css";
import { ImUser } from "react-icons/im";
import { MdDirectionsWalk } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import User from "./components/User";
import Steps from "./components/Steps";
import Workout from "./components/Workout";
import Nutrition from "./components/Nutrition";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-shark-500 min-h-screen flex items-center justify-center">
      <div className="bg-bunker-500 w-11/12 shadow-2xl p-4 shadow-bunker-500 rounded-3xl min-h-[80vh]">
        <div className="font-semibold justify-around gap-6 md:p-4 flex flex-row text-white cursor-pointer">
          <li className="flex items-center gap-2 text-sm md:text-xl">
            <ImUser className="text-lg md:text-3xl" />
            <Link to="/">User</Link>
          </li>
          <li className="flex items-center gap-2 text-sm md:text-xl">
            <MdDirectionsWalk className="text-lg md:text-3xl" />
            <Link to="/steps">Steps</Link>
          </li>
          <li className="flex items-center gap-2 text-sm md:text-xl">
            <FaDumbbell className="text-lg md:text-3xl" />
            <Link to="/workout">Workout</Link>
          </li>
          <li className="flex items-center gap-2 text-sm md:text-xl">
            <BiDish className="text-lg md:text-3xl" />
            <Link to="/nutrition">Nutrition</Link>
          </li>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/steps" element={<Steps />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/nutrition" element={<Nutrition />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
