export const convertString2SelectOption = (data: string[]) => {
  return data.map((item) => {
    return { value: item, label: String(item).toLocaleLowerCase() };
  });
};
