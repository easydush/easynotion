import { Note } from 'types';

export const convert2SelectOption = (data: Note[])=>{
  return data.map((note => {
    return { value: note.id, label: note.title };
  }));
}

export const convertString2SelectOption = (data: string[])=>{
  return data.map((item => {
    return { value: item, label: String(item).toLowerCase() };
  }));
}
