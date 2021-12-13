import { Note } from 'types';

export const getNoteUrl = (value: Note) => {
  return value.uri !== '' && value.uri ? value.uri : value.id;
};

export const readNotesWithChildrenTemplate = (items: Note[]) => {
  return items.map(parent => {
    return {
      key: getNoteUrl(parent),
      label: parent.title,
      isSection: true,
      nodes: [items.filter(note => note.parentId === parent.id).map((note) => {
        readNotesWithChildrenTemplate([note]);
      })],
    };
  });
};

export const readNotesTemplate = (items: Note[]) => {
  return items.map((value => {
    return { key: getNoteUrl(value), label: value.title };
  }));
};
