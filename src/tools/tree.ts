import { Note } from 'types';
import { TreeItem } from '../types/tree';

export const getNoteUrl = (value: Note) => {
  return value.uri !== '' && value.uri ? value.uri : value.id;
};

const findChildren = (parentId: Note['id'], items: Note[]): Note[] => {
  return items.filter(item => item.parentId === parentId);
};

export const readNotesWithChildrenTemplate = (all: Note[], items: Note[], isRoot: boolean = true): TreeItem[] => {
  let roots = items;
  if (isRoot) roots = roots.filter(item => !item.parentId);

  return roots.map(parent => {
    return {
      key: parent.parentId,
      path: `/note/${getNoteUrl(parent)}`,
      title: parent.title,
      isRoot: isRoot,
      nodes: readNotesWithChildrenTemplate(all, findChildren(parent.id, all), false),
    };
  });
};

export const readNotesTemplate = (items: Note[]) => {
  return items.map((value => {
    return { key: getNoteUrl(value), label: value.title };
  }));
};
