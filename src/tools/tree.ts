import { Note } from 'types';

export const getNoteUrl = (value: Note) => {
  return value.uri !== '' && value.uri ? value.uri : value.id;
};

export const readTemplate = (items: Note[]) => {
  return items.map((value => {
    return { key: getNoteUrl(value), label: value.title };
  }));
};
