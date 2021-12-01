import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create, update } from 'store/actions/note';
import cuid from 'cuid';
import { Note } from '../../types';

type NoteFormProps = {
  initialData?: Note;
  sectionId?: string;
}
export const NoteForm = ({initialData, sectionId = 'default'}: NoteFormProps) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    // TODO: replace section id
    if (initialData?.id){
      dispatch(update({ title: text, id: initialData.id, sectionId: sectionId }));
    }
    dispatch(create({ title: text, id: cuid(), sectionId: sectionId }));
    e.target.userInput.value = '';
  }

  return <form onSubmit={handleFormSubmit}>
      <div>Title:</div>
      <input
        type='text'
        name='userInput'
        onChange={(e) => setText(e.target.value)}
      />
      <div>URI:</div>
      <input
        type='text'
        name='userInput'
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>;
};

