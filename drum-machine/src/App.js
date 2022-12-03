import "./App.css";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const Q = useRef(null);
  const W = useRef(null);
  const E = useRef(null);
  const A = useRef(null);
  const S = useRef(null);
  const D = useRef(null);
  const Z = useRef(null);
  const X = useRef(null);
  const C = useRef(null);

  const [text, setText] = useState("");

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Q" || e.key === "q") {
        Q.current.play();
        setText("Heater-1");
      } else if (e.key === "W" || e.key === "w") {
        W.current.play();
        setText("Heater-2");
      } else if (e.key === "E" || e.key === "e") {
        E.current.play();
        setText("Heater-3");
      } else if (e.key === "A" || e.key === "a") {
        A.current.play();
        setText("Heater-4");
      } else if (e.key === "S" || e.key === "s") {
        S.current.play();
        setText("Clap");
      } else if (e.key === "D" || e.key === "d") {
        D.current.play();
        setText("Open-HH");
      } else if (e.key === "Z" || e.key === "z") {
        Z.current.play();
        setText("Kick-n'-Hat");
      } else if (e.key === "X" || e.key === "x") {
        X.current.play();
        setText("Kick");
      } else if (e.key === "C" || e.key === "c") {
        C.current.play();
        setText("Closed-HH");
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="container" id="drum-machine">
      <h1>Drum Machine</h1>
      <div className="row">
        <div className="column">
          <div className="row1">
            <div
              id="Header-1"
              className="drum-pad"
              onClick={() => {
                Q.current.play();
                setText("Header-1");
              }}
            >
              <button>Q</button>
              <audio
                id="Q"
                className="clip"
                ref={Q}
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              />
            </div>
            <div
              id="Header-2"
              className="drum-pad"
              onClick={() => {
                W.current.play();
                setText("Header-2");
              }}
            >
              <button>W</button>
              <audio
                id="W"
                className="clip"
                ref={W}
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              />
            </div>
            <div
              id="Header-3"
              className="drum-pad"
              onClick={() => {
                E.current.play();
                setText("Header-3");
              }}
            >
              <button>E</button>
              <audio
                id="E"
                className="clip"
                ref={E}
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              />
            </div>
          </div>
          <div className="row2">
            <div
              id="Header-4"
              className="drum-pad"
              onClick={() => {
                A.current.play();
                setText("Header-4");
              }}
            >
              <button>A</button>
              <audio
                id="A"
                className="clip"
                ref={A}
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              />
            </div>
            <div
              id="Clap"
              className="drum-pad"
              onClick={() => {
                S.current.play();
                setText("Clap");
              }}
            >
              <button>S</button>
              <audio
                id="S"
                className="clip"
                ref={S}
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              />
            </div>
            <div
              id="Open-HH"
              className="drum-pad"
              onClick={() => {
                D.current.play();
                setText("Open-HH");
              }}
            >
              <button>D</button>
              <audio
                id="D"
                className="clip"
                ref={D}
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              />
            </div>
          </div>
          <div className="row3">
            <div
              id="Kick-n'-Hat"
              className="drum-pad"
              onClick={() => {
                Z.current.play();
                setText("Kick-n'-Hat");
              }}
            >
              <button>Z</button>
              <audio
                id="Z"
                className="clip"
                ref={Z}
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              />
            </div>
            <div
              id="Kick"
              className="drum-pad"
              onClick={() => {
                X.current.play();
                setText("Kick");
              }}
            >
              <button>X</button>
              <audio
                id="X"
                className="clip"
                ref={X}
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              />
            </div>
            <div
              id="Closed-HH"
              className="drum-pad"
              onClick={() => {
                C.current.play();
                setText("Closed-HH");
              }}
            >
              <button>C</button>
              <audio
                id="C"
                className="clip"
                ref={C}
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              />
            </div>
          </div>
        </div>
        <div class="column">
          <div id="display">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
