import React from "react";
import { tableData } from "../static data/data.table";
import styled from "styled-components";
const TableStyles = styled.table`
  table-layout: fixed;
  width: 50%;
  border-collapse: collapse;
  border: 3px solid purple;
`;
const Table = () => {
  return (
    <div>
      <TableStyles>
        <thead>
          <tr>
            {Object.keys(tableData[0]).map((singleObjectKey) => (
              <th key={singleObjectKey}>{singleObjectKey}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </TableStyles>
    </div>
  );
};

export default Table;
