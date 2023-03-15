import React from "react";
import { Link } from "react-router-dom";

import SectionElement from "../../shared/SectionElement";
import { SidebarStyles } from "./sidebar.style.css";
const SideBar = ({ options }) => {
  return (
    <SidebarStyles>
      {options.map((singleOption) => (
        <Link
          key={singleOption.entityName}
          exact="true"
          to={"/" + singleOption.entityName.toLowerCase()}
          style={{ textDecoration: "none" }}
        >
          <SectionElement value={singleOption.entityName} />
        </Link>
      ))}
    </SidebarStyles>
  );
};

export default SideBar;
