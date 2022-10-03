import { useEffect, useState } from "react";
import { handleKeyDown, handleKeyUp } from "../utils/keyEvents";

export default function useKeyboard() {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
  });

  useEffect(() => {
    document.addEventListener("keydown", (e) =>
      handleKeyDown(e.code, setMovement)
    );
    document.addEventListener("keyup", (e) => handleKeyUp(e.code, setMovement));
  }, []);

  return { ...movement };
}
