import { useState } from "react";

/*
1. Move the color and setColor state inside ColorForm (increase performance)
   Compare console logs before and after.

2. Add a button on each color to remove it.
*/

function ColorsCircles() {
  const [colors, setColors] = useState([]);

  console.log("ColorsCircles render", new Date());

  return (
    <div>
      <ColorForm setColors={setColors} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm({ setColors }) {
  const [color, setColor] = useState("");

  console.log("ColorForm render", new Date());

  const onSubmit = () => {
    if (color.trim() === "") return;

    setColors((prevColors) => {
      const clonedColors = structuredClone(prevColors);
      clonedColors.push(color);
      return clonedColors;
    });

    setColor("");
  };

  return (
    <div>
      <label>Enter Color</label>

      <input value={color} onChange={(e) => setColor(e.target.value)} />

      <button onClick={onSubmit}>Save</button>
    </div>
  );
}

function ColorList({ colors, setColors }) {
  console.log("ColorList render", new Date());

  const removeColor = (indexToRemove) => {
    setColors((prevColors) => {
      const clonedColors = structuredClone(prevColors);

      clonedColors.splice(indexToRemove, 1);

      return clonedColors;
    });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "250px",
            height: "40px",
            backgroundColor: color,
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <span>{color}</span>

          <button onClick={() => removeColor(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ColorsCircles;
