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
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [uri, setUri] = useState(initialData?.uri);
  const dispatch = useDispatch();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    // TODO: replace section id
    if (initialData?.id){
      dispatch(update({ title, uri, id: initialData.id, sectionId: sectionId }));
    }
    dispatch(create({ title, uri, id: cuid(), sectionId: sectionId }));

  }

  return <form onSubmit={handleFormSubmit}>
      <div>Title:</div>
      <input
        type='text'
        name='title'
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>URI:</div>
      <input
        type='text'
        name='uri'
        onChange={(e) => setUri(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>;
};

