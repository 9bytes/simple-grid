import { createElement } from "../common";
import { KeyValue, TableColumn } from "../types";

export default (dataItem: KeyValue, column: TableColumn): HTMLElement => {
  const { valueFunction, valueField } = column;
  return createElement({
    type: "td",
    value: valueFunction
      ? valueFunction(dataItem, column)
      : dataItem[valueField as string],
  });
};
