import { Note, RootState, Section } from 'types';
import { useSelector } from 'react-redux';
import { NoteLinkButton } from 'components/NoteLinkButton';
import React from 'react';

type SectionProps = {
  sectionId: Section['id'];
}

export const SectionView = ({ sectionId }: SectionProps)=>{
  const notes =  useSelector<RootState, Note[]>((state) => state.note.notes.filter((note) => note.sectionId === sectionId ));

  return <div>{notes.map(note => <NoteLinkButton noteId={note.id}/>)}</div>
}
