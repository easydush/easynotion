import React from 'react';
import { TreeMenu } from '../../../Tree';
import { useSelector } from 'react-redux';
import { Note, NoteState } from '../../../../types';
import { readTemplate } from '../../../../tools';


export const NotesTree = () => {
  const notes = useSelector<NoteState, Note[]>((state) => state.notes || []);

  const tree = readTemplate(notes);


  return <TreeMenu tree={tree} label={'Menu'} />;
};


