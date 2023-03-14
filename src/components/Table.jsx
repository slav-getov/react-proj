import React, { useReducer } from "react";
import { tableData } from "../static data/data.table";
import { ActionableButton } from "../shared/ActionableButton";
import { useForm } from "react-hook-form";
import { tableReducer } from "../reducers/tableDataReducer";
import styled from "styled-components";
const TableStyles = styled.table`
  table-layout: fixed;
  margin-top: 1rem;
  width: 50%;
  border-collapse: collapse;
  border: 3px solid purple;
  text-align: center;
`;

const TableButtonStyles = styled(ActionableButton)`
  background-color: cornflowerblue;
  &:hover {
    background-color: darkblue;
  }
`;
const Table = () => {
  const [objects, dispatch] = useReducer(tableReducer, tableData);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch({ type: "add", data });
  };

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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("fullName")} />

          <input {...register("areaSqr")} />

          <input {...register("email")} />
          <input {...register("phone")} />

          <TableButtonStyles
            title="Submit Entry"
            onClick={() => handleSubmit(onSubmit)}
          />
        </form>
      </div>
    </div>
  );
};

export default Table;
