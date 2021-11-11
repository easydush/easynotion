import { useDispatch } from 'react-redux';
import { useState } from 'react';
import cuid from 'cuid';
import { create } from 'store/actions/note';


export const Dashboard = () => {
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
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  </div>;
};
