import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
// import { Link } from "react-router-dom";
import { BsMicrosoft } from "react-icons/bs";
import One from "./assets/one.jpeg";
import Two from "./assets/two.jpeg";
import Three from "./assets/three.jpeg";
import Four from "./assets/four.jpeg";
import Five from "./assets/five.jpeg";
import { Link } from "react-router";

export default function App() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVote = () => {
    if (selected) {
      setIsModalOpen(true);
    } else {
      alert("Please select a chef to vote.");
    }
  };

  const chefs = [
    { id: "opt-1", name: "nigellalawson", image: One, percent: "36%" },
    { id: "opt-2", name: "juliaostro", image: Two, percent: "31%" },
    { id: "opt-3", name: "maggie_beer", image: Three, percent: "14%" },
    { id: "opt-4", name: "recipe_tin", image: Four, percent: "19%" },
    { id: "opt-5", name: "gordonramsay", image: Five, percent: "59%" },
  ];

  return (
    <main className="flex items-center justify-center w-screen min-h-screen flex-col bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-6">
        <header className="mb-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/927/927295.png"
            alt="Vote"
            className="mx-auto w-16"
          />
          <h1 className="text-xl font-semibold mt-2">Vote Your Favourite Chef!</h1>
        </header>

        <form className="space-y-4">
          {chefs.map((chef) => (
            <label
              key={chef.id}
              htmlFor={chef.id}
              className={`block border rounded-lg p-4 flex items-center justify-between cursor-pointer transition ${
                selected === chef.id ? "border-blue-600 bg-blue-50" : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="poll"
                  id={chef.id}
                  className="hidden"
                  checked={selected === chef.id}
                  onChange={() => setSelected(chef.id)}
                />
                <img src={chef.image} alt={chef.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="capitalize font-medium">{chef.name}</p>
                  <span className="text-sm text-gray-500">{chef.percent} votes</span>
                </div>
              </div>
              <span
                className={`w-5 h-5 rounded-full border-2 ${
                  selected === chef.id ? "border-blue-600 bg-blue-600" : "border-gray-400"
                }`}
              ></span>
            </label>
          ))}

          <div className="pt-4">
            <button
              type="button"
              onClick={handleVote}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Vote Me
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          <LiaTimesSolid size={20} />
        </button>
        <h3 className="text-center text-lg font-semibold mt-4">
          Vote with Preferred Platform
        </h3>
        <div className="mt-8 flex flex-col gap-4">
          <Link
            to="/instagram"
            className="flex items-center justify-center gap-2 bg-pink-600 text-white py-3 rounded-lg"
          >
            <FaInstagram /> Instagram
          </Link>
          <Link
            to="/microsoft"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg"
          >
            <BsMicrosoft /> Microsoft
          </Link>
        </div>
      </div>
    </div>
  );
};
