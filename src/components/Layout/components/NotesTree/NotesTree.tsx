import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'components/Tree';
import { Note, RootState, Section } from 'types';
import { readSectionsTemplate } from 'tools';


export const NotesTree = () => {
  const sections = useSelector<RootState, Section[]>((state) => state.section.sections || []);
  const notes = useSelector<RootState, Note[]>((state) => state.note.notes || []);
  const tree = readSectionsTemplate(sections, notes);

  return <Menu tree={tree} />;
};


