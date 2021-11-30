import { Note } from '../../types';

export const convert2SelectOption = (data: Note[])=>{
  return data.map((note => {
    return { value: note.id, label: note.title };
  }));
}
