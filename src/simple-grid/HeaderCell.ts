import { createElement } from "../common";
import { TableColumn } from "../types";

export default (column: TableColumn): HTMLElement => {
  return createElement({
    type: "th",
    value: column.headerText,
  });
};
