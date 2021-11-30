import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from 'store/actions/block';
import cuid from 'cuid';
import { ImageInput, NoteLink, VideoInput, TextEditor, TableEditor } from 'components';
import { MediaType, Note } from '../../types';

type BlockForm = {
  type: MediaType;
  noteId: Note['id']
}
export const BlockForm = ({ type, noteId }: BlockForm) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    // TODO: replace order
    dispatch(create({ id: cuid(), noteId: noteId, type: type, content: text, order: 0 }));
    e.target.userInput.value = '';
  }

  return <form onSubmit={handleFormSubmit}>
    <div>Add image link:</div>
    <ImageInput onLoad={() => {
    }} />
    <div>Add video link:</div>
    <VideoInput onLoad={() => {
    }} />
    <div>Add link:</div>
    <NoteLink />
    <div>Add text:</div>
    <TextEditor />
    <div>Add table:</div>
    <TableEditor />
    <button type='submit'>Add</button>
  </form>;
};

