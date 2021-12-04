import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'components/Tree';
import { Note, NoteState } from 'types';
import { readTemplate } from 'tools';


export const NotesTree = () => {
  const notes = useSelector<NoteState, Note[]>((state) => state.notes || []);
  const tree = readTemplate(notes);

  return <Menu tree={tree} />;
};


