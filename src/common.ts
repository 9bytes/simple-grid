export const getDocumentElement = (id:string): HTMLElement => document.getElementById(id) as HTMLElement;

export const createElement = (args: {
  type: string;
  value?: string;
  id?: string;
  className?: string;
  dataAttr?: [{ [key: string]: string }];
}): HTMLElement => {
  const { type, value, id, className } = args;
  const ele = document.createElement(type);
  if (!ele)
    throw new Error(
      'SIMPLE_TABLE: coommon > createElement >> Cannot create element without type'
  );
  className && (ele.className = className);
  id && (ele.id = id);
  value && (ele.innerHTML = value);

  return ele;
};
