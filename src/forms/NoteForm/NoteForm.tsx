import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../../store/actions/note';
import cuid from 'cuid';

type NoteFormProps = {
}
export const NoteForm = ({}: NoteFormProps) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    dispatch(create({ title: text, id: cuid() }));
    e.target.userInput.value = '';
    console.log(text);
  }
  return <form onSubmit={handleFormSubmit}>
    <input
      type='text'
      name='userInput'
      onChange={(e) => setText(e.target.value)}
    />
    <button type='submit'>Add</button>
  </form>;
};

