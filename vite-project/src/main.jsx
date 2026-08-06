import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import LifeCycle from "./SideEffects/LifeCycle";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LifeCycle />
  </StrictMode>,
);
