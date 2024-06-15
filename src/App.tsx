import { useState } from "react";
import "./App.css";
// Takt Op. Destiny
function App() {
  const [playAnimation, setPlayAnimation] = useState(false);

  const triggerAnimation = () => {
    setPlayAnimation((a) => !a);
  };

  const animationStyles = playAnimation ? "textAnimation" : "";
  return (
    <div className="wrapper">
      <div className="textParent">
        <div className="stripes"></div>
        <div
          className={"text " + animationStyles}
          onAnimationEnd={triggerAnimation}
        >
          Based on the
        </div>
      </div>

      <button className="btn" onClick={triggerAnimation}>
        begin
      </button>

      <p className={"text step1"}>Based on the 1</p>
      <p className={"text step2"}>Based on the 2</p>
      <p className={"text step3"}>Based on the 3</p>
      <p className={"text step4"}>Based on the 4</p>
      <p className={"text step5"}>Based on the 5</p>
    </div>
  );
}

export default App;
