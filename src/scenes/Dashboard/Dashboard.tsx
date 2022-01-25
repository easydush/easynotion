import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Note, RootState } from 'types';
import { Home } from 'scenes';
import { FLOWS } from 'constants/flows';
import { noteSelectors } from 'store/selectors';
import { activateFlow } from 'store/actions';
import { NoteEdit, NoteView } from './scenes';


export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector<RootState, Note[]>(noteSelectors.all);
  
  if (notes.length === 0) dispatch(activateFlow(FLOWS.CREATE_NOTE));

  return <div>
    <Routes>
      <Route path='/note/:id' element={<NoteView />} />
      <Route path='*' element={<Home />} />
    </Routes>
    <NoteEdit />
  </div>;
};
