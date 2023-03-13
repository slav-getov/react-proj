import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionElement from "../shared/SectionElement";
const SidebarStyles = styled.aside`
  padding: 1rem 2rem;
`;
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
