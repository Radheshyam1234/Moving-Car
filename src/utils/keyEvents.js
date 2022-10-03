export function handleKeyDown(code, setMovement) {
  console.log(code);
  switch (code) {
    case "ArrowUp":
      setMovement((movement) => ({
        ...movement,
        forward: true,
      }));
      break;
    case "ArrowDown":
      setMovement((movement) => ({
        ...movement,
        backward: true,
      }));
      break;
    case "ArrowLeft":
      setMovement((movement) => ({ ...movement, left: true }));
      break;
    case "ArrowRight":
      setMovement((movement) => ({ ...movement, right: true }));
      break;
    case "ShiftLeft":
      setMovement((movement) => ({ ...movement, shift: true }));
      break;
    default:
      break;
  }
}

export function handleKeyUp(code, setMovement) {
  switch (code) {
    case "ArrowUp":
      setMovement((movement) => ({
        ...movement,
        forward: false,
      }));
      break;
    case "ArrowDown":
      setMovement((movement) => ({
        ...movement,
        backward: false,
      }));
      break;
    case "ArrowLeft":
      setMovement((movement) => ({ ...movement, left: false }));
      break;
    case "ArrowRight":
      setMovement((movement) => ({ ...movement, right: false }));
      break;
    case "ShiftLeft":
      setMovement((movement) => ({ ...movement, shift: false }));
      break;
    default:
      break;
  }
}
