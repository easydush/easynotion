import { useHistory } from 'react-router-dom';
import { EDIT_NOTE, Note, RootState, VoidFn } from 'types';
import { Modal } from 'components';
import { NoteForm } from 'forms/NoteForm';
import { getNoteUrl } from 'tools';
import { useDispatch, useSelector } from 'react-redux';
import { create, update } from '../../../../store/actions/note';
import { deactivateAll } from '../../../../store/actions/ui';

type SectionProps = {
  visible: boolean,
  onClose: VoidFn;
}

export const SectionCreate = ({ visible, onClose }: SectionProps) => {
  const isEditFlow = useSelector<RootState, string[]>((state) => state.ui.flows.filter((flow) => flow === EDIT_NOTE)).length > 0;


  const history = useHistory();

  const dispatch = useDispatch();


  const handleFinish = (section: Note) => {
      dispatch(create(section));
    dispatch(deactivateAll());
  };

  return <Modal visible={visible} title={'Create new note'} onClose={onClose}>
    <NoteForm initialData={ undefined} onFinish={handleFinish} />
  </Modal>;
};
