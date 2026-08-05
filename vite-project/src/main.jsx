import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ColorsCircles from "./StateAndEvents/ColorsAndCircles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorsCircles />
  </StrictMode>
);