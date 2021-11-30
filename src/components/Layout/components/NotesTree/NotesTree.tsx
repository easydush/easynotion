import React from 'react';
import { Menu } from 'components/Tree';
import { useSelector } from 'react-redux';
import { Note, NoteState } from 'types';
import { readTemplate } from 'tools';


export const NotesTree = () => {
  const notes = useSelector<NoteState, Note[]>((state) => state.notes || []);
  const tree = readTemplate(notes);

  return <Menu tree={tree} />;
};


