import { Note } from 'types';

export const readTemplate = (items: Note[]) => {
  return items.map((value => {
    const url = value.uri !== '' && value.uri ? value.uri :value.id
    return { key: url, label: value.title };
  }));
};
