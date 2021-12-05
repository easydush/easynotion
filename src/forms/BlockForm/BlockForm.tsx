import { useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MediaType, Note } from '../../types';
import { Switcher } from './components/Switcher';
import { create } from '../../store/actions/block';
import cuid from 'cuid';

type BlockForm = {
  type: MediaType;
  noteId: Note['id']
}
export const BlockForm = ({ type, noteId }: BlockForm) => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    // TODO: replace order
    dispatch(create({ id: cuid(), noteId: noteId, type: type, content: content, order: 0 }));
  }

  console.log(type);

  return <form onSubmit={handleFormSubmit}>
    <Switcher type={type} onChange={setContent} />
    <button type='submit'>Add</button>
  </form>;
};

