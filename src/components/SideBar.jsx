import React from "react";

const SideBar = ({ options }) => {
  return (
    <aside>
      {options.map((singleOption) => (
        <section key={singleOption.entityName}>
          {singleOption.entityName}
        </section>
      ))}
    </aside>
  );
};

export default SideBar;
