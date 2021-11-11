import { Note } from '../types';

export const readTemplate = (items: Note[], data: any = { name: 'root', children: [] }) => {

  for (let item of items) {
    data.children.add({
      children: [],
      name: item.title,
    });
  }
  return data;
};
