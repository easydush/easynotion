import { useSelector } from 'react-redux';
import { Note, RootState, TreeItem } from 'types';
import { Menu, NoteLink } from 'components';
import { convertNotes2Tree } from 'tools';
import { noteSelectors } from 'store/selectors';
import React from 'react';


export const NotesTree = () => {
  const notes = useSelector<RootState, Note[]>(noteSelectors.all);
  const tree = convertNotes2Tree(notes, notes);
  const renderNode = (node: TreeItem) => <NoteLink note={node} isNode />;

  return <Menu tree={tree} nodeRender={renderNode} />;
};


