import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'scenes';
import { NoteEdit, NoteView } from './scenes';


export const Dashboard: FC = () => {
  return <div>
    <Routes>
      <Route path='/note/:id' element={<NoteView />} />
      <Route path='*' element={<Home />} />
    </Routes>
    <NoteEdit />
  </div>;
};
