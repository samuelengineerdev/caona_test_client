import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import generate from "../../utils/generate";

function CustomDraggable(props) {
  const { children, axis, handle, defaultPosition, className, onClicked, grid, scale, onStart, onDrag, onStop } = props;
  const dragglabeRef = useRef(null);
  const [layoutDimensions, setLayoutDimensions] = useState({ x: 0, y: 0 });
  const [isStateSet, setIsStateSet] = useState(false);

  useEffect(() => {
    const mainLayout = document.getElementById("MainMainLayout");
    if (mainLayout) {
        const x = (mainLayout.clientWidth - 1000) / 2;
        const randomNumber = generate.randomNumber(0, 20);
        if (randomNumber <= 5) {
            setLayoutDimensions({ x: x - randomNumber, y: 100 - randomNumber });
        } else if (randomNumber <= 10) {
            setLayoutDimensions({ x: x + randomNumber, y: 100 - randomNumber });
        } else if (randomNumber <= 15) {
            setLayoutDimensions({ x: x - randomNumber, y: 100 - randomNumber });
        } else {
            setLayoutDimensions({ x: x - randomNumber, y: 100 + randomNumber });
        }
    }
    setIsStateSet(true);
  }, []);
  

  return (
    <>
      {isStateSet && (
        <Draggable
          nodeRef={dragglabeRef}
          axis={axis || "both"}
          handle={handle || ".handle"}
          defaultPosition={defaultPosition || layoutDimensions}
          // position={null}
          grid={grid}
          scale={scale}
          onStart={onStart}
          onDrag={onDrag}
          onStop={onStop}
        >
          <div className={className} onClick={onClicked} ref={dragglabeRef}>{children}</div>
        </Draggable>
      )}
    </>
  );
}

export default CustomDraggable;
