import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'components/Tree';
import { Note, RootState } from 'types';
import { readNotesWithChildrenTemplate } from 'tools';


export const NotesTree = () => {
  const notes = useSelector<RootState, Note[]>((state) => state.note.notes || []);
  const tree = readNotesWithChildrenTemplate(notes, notes);
  console.log(tree);
  return <Menu tree={tree} />;
};


