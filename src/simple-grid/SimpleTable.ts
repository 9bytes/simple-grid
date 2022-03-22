import { TableConfig } from "../types";
import { DefaultData } from "./defaults";
import Table from "./Table";

export default (tableComfig: TableConfig = DefaultData): void =>
  Table(Object.assign({ ...DefaultData }, { ...tableComfig }));
