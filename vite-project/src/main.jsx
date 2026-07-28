import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// CREATE A COMPONENT
//
// Component returns a null
function NullComponent() {
  return null;
}
//
// Component returns an element
function MyComponent() {
  return (
    <div>
      <h1>this is single element</h1>
    </div>
  );
}
//
// Component returns multiple elements
function MultipleElements() {
  return (
    <>
      <h1>this is my list</h1>
      <ol>
        <li>mangoes</li>
        <li>bananas</li>
      </ol>
    </>
  );
}
//
// Component returns another component
function ParentComponent(params) {
  return (
    <>
      <MultipleElements />
      <MyComponent />
    </>
  );
}
//
// Render the components
createRoot(document.getElementById("root")).render(
  <>
    <MultipleElements />
    <MyComponent />
    <ParentComponent />
  </>,
);
