import { useEffect, useState } from "react";

function LifeCycle() {
  const [n, setN] = useState(0);

  return (
    <div>
      <h2>Component Mounting & Unmounting</h2>

      <button onClick={() => setN(n - 1)}>-</button>

      <span style={{ margin: "0 20px", fontSize: "20px" }}>{n}</span>

      <button onClick={() => setN(n + 1)}>+</button>

      <hr />

      <EvenOrOdd n={n} />
    </div>
  );
}

function EvenOrOdd({ n }) {
  if (n % 2 === 0) {
    return <EvenComponent />;
  }

  return <OddComponent />;
}

function EvenComponent() {
  console.log("EvenComponent Render");

  useEffect(() => {
    console.log("EvenComponent Mounted");

    return () => {
      console.log("EvenComponent Unmounted");
    };
  }, []);

  return (
    <div style={{ color: "green" }}>
      <h1>Even Number</h1>
    </div>
  );
}

function OddComponent() {
  console.log("OddComponent Render");

  useEffect(() => {
    console.log("OddComponent Mounted");

    return () => {
      console.log("OddComponent Unmounted");
    };
  }, []);

  return (
    <div style={{ color: "red" }}>
      <h1>Odd Number</h1>
    </div>
  );
}

export default LifeCycle;
