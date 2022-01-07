import { useSelector } from 'react-redux';
import { Note, RootState } from 'types';
import { Menu } from 'components';
import { readNotesWithChildrenTemplate } from 'tools';
import { noteSelectors } from 'store/selectors';


export const NotesTree = () => {
  const notes = useSelector<RootState, Note[]>(noteSelectors.all);
  const tree = readNotesWithChildrenTemplate(notes, notes);

  return <Menu tree={tree} />;
};


