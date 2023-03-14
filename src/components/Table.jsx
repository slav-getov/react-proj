import React from "react";
import { tableData } from "../static data/data.table";
import styled from "styled-components";
const TableStyles = styled.table`
  table-layout: fixed;
  margin-top: 1rem;
  width: 50%;
  border-collapse: collapse;
  border: 3px solid purple;
  text-align: center;
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
        <tbody>
          {tableData.map((singleEntityOfData) => (
            <tr key={singleEntityOfData.fullName}>
              <th>{singleEntityOfData.fullName}</th>
              <td>{singleEntityOfData.area}</td>
              <td>{singleEntityOfData.email}</td>
              <td>{singleEntityOfData.phone}</td>
            </tr>
          ))}
        </tbody>
      </TableStyles>
    </div>
  );
};

export default Table;
