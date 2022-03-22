import { createElement } from "../common";
import { KeyValue, TableColumn } from "../types";
import DataCell from "./DataCell";

export default (dataItem: KeyValue, columns: TableColumn[]): HTMLElement => {
  return (columns !== null &&
    columns.reduce(
      (acc, column) => {
        acc.appendChild(DataCell(dataItem, column));
        return acc;
      },
      createElement({
        type: "tr",
      })
    )) as HTMLElement;
};
