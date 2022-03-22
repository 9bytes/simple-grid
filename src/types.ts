export type KeyValue = {
  [key: string]: any;
};
export type TableConfig = {
  target: string;
  columns: TableColumn[];
  data: KeyValue[];
};

export type TableHeader = {
  left?: HTMLElement;
  right?: HTMLElement;
};

export type TableColumn = {
  headerText: string;
  valueField: string;
  valueFunction: (dataItem: KeyValue, column: TableColumn) => string;
  valueType?: string;
  width?: number;
  sorting?: true;
};
