import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import cuid from 'cuid';
import { create } from 'store/actions/note';
import { Note } from '../../types';

interface NoteState {
  note: {
    notes: Note[]
  },
}
export const Dashboard = () => {
  const notes = useSelector<NoteState, Note[]>((state) => state.note.notes || []);
  console.log(useSelector(state => state));
  const noteItems = notes.map((note: Note) => {
    return <div>{note.title}</div>;
  });
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    dispatch(create({ title: text, id: cuid() }));
    e.target.userInput.value = '';
    console.log(text);
  }

  return <div>
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          name='userInput'
          onChange={(e) =>setText(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
    <div>{noteItems}</div>
  </div>;
};
