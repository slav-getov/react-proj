import React, { useReducer, useState, useEffect } from "react";
import { tableData } from "../../static data/data.table";

import { useForm } from "react-hook-form";
import { tableReducer } from "../../reducers/tableDataReducer";
import {
  TableStyles,
  StyledLabel,
  TableButtonStyles,
  TableContainerStyles,
} from "./table.style.css";
import { ActionableButton } from "../../shared/ActionableButton";
const Table = () => {
  const [objects, dispatch] = useReducer(tableReducer, tableData);
  const [items, setItems] = useState(tableData);
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

  useEffect(() => {
    console.log(items);
  });
  return (
    <TableContainerStyles>
      <TableStyles>
        <thead>
          <tr>
            {Object.keys(tableData[0]).map((singleObjectKey) => (
              <th key={singleObjectKey}>{singleObjectKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((singleEntityOfData) => (
            <tr key={singleEntityOfData.fullName}>
              <th>{singleEntityOfData.fullName}</th>
              <td>{singleEntityOfData.area}</td>
              <td>{singleEntityOfData.email}</td>
              <td>{singleEntityOfData.phone}</td>
              <td>
                <ActionableButton
                  title="Remove"
                  onClick={(e) => {
                    const remainingItems = items.filter(
                      (item) => item.fullName != singleEntityOfData.fullName
                    );
                    setItems(remainingItems);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyles>
      <div>
        <TableButtonStyles
          title="Submit New Entry"
          onClick={() => handleSubmit(onSubmit)}
        />
      </div>
    </TableContainerStyles>
  );
};

export default Table;
