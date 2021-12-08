import { useHistory } from 'react-router-dom';
import { EDIT_NOTE, Note, RootState, Section, VoidFn } from 'types';
import { Modal } from 'components';
import { NoteForm } from 'forms/NoteForm';
import { useDispatch, useSelector } from 'react-redux';
import { deactivateAll } from 'store/actions/ui';
import { SectionForm } from 'forms/SectionForm';
import { create } from 'store/actions/section';

type SectionProps = {
  visible: boolean,
  onClose: VoidFn;
}

export const SectionCreate = ({ visible, onClose }: SectionProps) => {
  const history = useHistory();

  const dispatch = useDispatch();


  const handleFinish = (section: Section) => {
      dispatch(create(section));
      onClose();
  };

  return <Modal visible={visible} title={'Create new section'} onClose={onClose}>
    <SectionForm onFinish={handleFinish} />
  </Modal>;
};
