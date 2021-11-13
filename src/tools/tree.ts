import { Note } from '../types';

export const readTemplate = (items: Note[]) => {
  return items.map((value => {
    return { key: value.id, label: value.title };
  }));
};
