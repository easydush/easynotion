import { Note, Section } from 'types';

export const getNoteUrl = (value: Note) => {
  return value.uri !== '' && value.uri ? value.uri : value.id;
};

export const readSectionsTemplate = (sections: Section[], items: Note[]) => {
  return sections.map(section => {
    return {
      key: section.id,
      label: section.title,
      isSection: true,
      nodes: items.filter(note => note.sectionId === section.id).map((note) => {
        return { key: getNoteUrl(note), label: note.title, path:  getNoteUrl(note)};
      }),
    };
  });
};

export const readNotesTemplate = (items: Note[]) => {
  return items.map((value => {
    return { key: getNoteUrl(value), label: value.title };
  }));
};
