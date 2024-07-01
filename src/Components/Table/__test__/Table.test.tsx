import React from "react";
import { render } from "@testing-library/react";
import Table from "../Table";
import { Headers, Rows } from "../Table.types";

describe("Table", () => {
  const headers: Headers[] = [
    { name: "Header 1", align: "left" },
    { name: "Header 2", align: "center" },
    { name: "Header 3", align: "right" },
  ];

  const rows: Rows = [
    [
      <span key="1-1">Row 1 Cell 1</span>,
      <span key="1-2">Row 1 Cell 2</span>,
      <span key="1-3">Row 1 Cell 3</span>,
    ],
    [
      <span key="2-1">Row 2 Cell 1</span>,
      <span key="2-2">Row 2 Cell 2</span>,
      <span key="2-3">Row 2 Cell 3</span>,
    ],
    [
      <span key="3-1">Row 3 Cell 1</span>,
      <span key="3-2">Row 3 Cell 2</span>,
      <span key="3-3">Row 3 Cell 3</span>,
    ],
  ];

  it("renders all headers correctly", () => {
    const { getAllByRole } = render(<Table headers={headers} rows={[]} />);
    const renderedHeaders = getAllByRole("columnheader");
    expect(renderedHeaders).toHaveLength(headers.length);
    renderedHeaders.forEach((header: any, index: number) => {
      expect(header.textContent).toBe(headers[index].name);
    });
  });

  it("renders all rows and cells correctly", () => {
    const { getAllByRole } = render(<Table headers={headers} rows={rows} />);
    const renderedRows = getAllByRole("row");
    expect(renderedRows).toHaveLength(rows.length + 1); // Plus header row

    renderedRows.forEach((row: HTMLElement, rowIndex: number) => {
      if (rowIndex > 0) {
        const cells = row.querySelectorAll("td");
        expect(cells).toHaveLength(rows[0].length);
        cells.forEach((cell, cellIndex) => {
          expect(cell.textContent).toBe(
            rows[rowIndex - 1][cellIndex].props.children,
          );
        });
      }
    });
  });
});
