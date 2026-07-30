import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Navigation from "./Navigation";
import FilterList from "./FilterList";
import ItemCard from "./ItemCard";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <div className="content">
        <div className="side-bar">
          <FilterList />
          <FilterList />
          <FilterList />
        </div>

        <div className="products">
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </>
  </StrictMode>,
);
