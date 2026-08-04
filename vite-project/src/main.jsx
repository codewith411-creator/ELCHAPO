import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Form from "./StateAndEvents/Form";
import Form2 from "./StateAndEvents/Form2.0";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form />
    <Form2 />
  </StrictMode>,
);
