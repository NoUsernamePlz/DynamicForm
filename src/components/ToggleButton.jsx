import { useState } from "react";

function ToggleButton({ id }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prevIsLeft) => !prevIsLeft);
  }

  return (
    <div className="relative  inline-block w-10 align-middle select-none">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="hidden"
        onClick={handleClick}
      />
      <label
        onClick={handleClick}
        name={`${id}`}
        id={id}
        htmlFor={id}
        className={`flex  mx-4 items-center cursor-pointer w-6 h-3 ${
          clicked ? "bg-violet-600" : "bg-gray-400"
        } rounded-md transition-colors duration-200 ease-in-out`}
      >
        <span
          className={`block w-3 h-3 rounded-full transition-transform duration-200 ease-in-out transform ${
            clicked ? "translate-x-3" : "translate-x-0"
          } bg-white`}
        />
      </label>
    </div>
  );
}
export default ToggleButton;
