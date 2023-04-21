import { useEffect, useState } from "react";

const Resume = () => {
  const [typedKeys, setTypedKeys] = useState([]);
  const name = "Murad Isayev";

  useEffect(() => {
    let timeout = 700;
    for (let i = 0; i < name.length; i++) {
      setTimeout(() => {
        setTypedKeys((prevState) => [...prevState, name.charAt(i).toLowerCase()]);
      }, timeout);
      timeout += 450;
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <kbd className={typedKeys.includes("q") ? "kbd testbutton" : "kbd"}>q</kbd>
        <kbd className={typedKeys.includes("w") ? "kbd testbutton" : "kbd"}>w</kbd>
        <kbd className={typedKeys.includes("e") ? "kbd testbutton" : "kbd"}>e</kbd>
        <kbd className={typedKeys.includes("r") ? "kbd testbutton" : "kbd"}>r</kbd>
        <kbd className={typedKeys.includes("t") ? "kbd testbutton" : "kbd"}>t</kbd>
        <kbd className={typedKeys.includes("y") ? "kbd testbutton" : "kbd"}>y</kbd>
        <kbd className={typedKeys.includes("u") ? "kbd testbutton" : "kbd"}>u</kbd>
        <kbd className={typedKeys.includes("i") ? "kbd testbutton" : "kbd"}>i</kbd>
        <kbd className={typedKeys.includes("o") ? "kbd testbutton" : "kbd"}>o</kbd>
        <kbd className={typedKeys.includes("p") ? "kbd testbutton" : "kbd"}>p</kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <kbd className={typedKeys.includes("a") ? "kbd testbutton" : "kbd"}>a</kbd>
        <kbd className={typedKeys.includes("s") ? "kbd testbutton" : "kbd"}>s</kbd>
        <kbd className={typedKeys.includes("d") ? "kbd testbutton" : "kbd"}>d</kbd>
        <kbd className={typedKeys.includes("f") ? "kbd testbutton" : "kbd"}>f</kbd>
        <kbd className={typedKeys.includes("g") ? "kbd testbutton" : "kbd"}>g</kbd>
        <kbd className={typedKeys.includes("h") ? "kbd testbutton" : "kbd"}>h</kbd>
        <kbd className={typedKeys.includes("j") ? "kbd testbutton" : "kbd"}>j</kbd>
        <kbd className={typedKeys.includes("k") ? "kbd testbutton" : "kbd"}>k</kbd>
        <kbd className={typedKeys.includes("l") ? "kbd testbutton" : "kbd"}>l</kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <kbd className={typedKeys.includes("z") ? "kbd testbutton" : "kbd"}>z</kbd>
        <kbd className={typedKeys.includes("x") ? "kbd testbutton" : "kbd"}>x</kbd>
        <kbd className={typedKeys.includes("c") ? "kbd testbutton" : "kbd"}>c</kbd>
        <kbd className={typedKeys.includes("v") ? "kbd testbutton" : "kbd"}>v</kbd>
        <kbd className={typedKeys.includes("b") ? "kbd testbutton" : "kbd"}>b</kbd>
        <kbd className={typedKeys.includes("n") ? "kbd testbutton" : "kbd"}>n</kbd>
        <kbd className={typedKeys.includes("m") ? "kbd testbutton" : "kbd"}>m</kbd>
      </div>
    </div>
  );
};

export default Resume;
