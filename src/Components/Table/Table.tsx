import React, { FC } from "react";
import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTHead,
  StyledTr,
} from "./Table.styled";
import { TableProps } from "./Table.types";

const Table: FC<TableProps> = (props) => {
  return (
    <StyledTable>
      <StyledTHead>
        <StyledTr>
          {props.headers.map((item, index) => (
            <StyledTh key={index} $align={item.align}>
              {item.name}
            </StyledTh>
          ))}
        </StyledTr>
      </StyledTHead>
      <tbody>
        {props.rows.map((items, index) => (
          <StyledTr key={index}>
            {items.map((item, index) => (
              <StyledTd key={index}>{item}</StyledTd>
            ))}
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
