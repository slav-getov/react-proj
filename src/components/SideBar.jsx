import React from "react";
import { Link } from "react-router-dom";
const SideBar = ({ options }) => {
  return (
    <aside>
      {options.map((singleOption) => (
        <Link
          key={singleOption.entityName}
          exact="true"
          to={"/" + singleOption.entityName.toLowerCase()}
        >
          <section>{singleOption.entityName}</section>
        </Link>
      ))}
    </aside>
  );
};

export default SideBar;
