import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from 'store/actions/note';
import cuid from 'cuid';
import { ImageInput, NoteLink, VideoInput, TextEditor, TableEditor } from 'components';

type NoteFormProps = {
  onCreate?: () => {}
}
export const NoteForm = ({}: NoteFormProps) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    // TODO: replace section id
    dispatch(create({ title: text, id: cuid(), sectionId: 'default' }));
    e.target.userInput.value = '';
  }

  return <form onSubmit={handleFormSubmit}>
    <div>Title:</div>
    <input
      type='text'
      name='userInput'
      onChange={(e) => setText(e.target.value)}
    />
    <button type='submit'>Add</button>
  </form>;
};

