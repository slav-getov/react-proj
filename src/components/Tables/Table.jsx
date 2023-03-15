import React, { useReducer } from "react";
import { tableData } from "../../static data/data.table";

import { useForm } from "react-hook-form";
import { tableReducer } from "../../reducers/tableDataReducer";
import { TableStyles, StyledLabel, TableButtonStyles } from "./table.style.css";
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
            {Object.keys(objects[0]).map((singleObjectKey) => (
              <th key={singleObjectKey}>{singleObjectKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {objects.map((singleEntityOfData) => (
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
