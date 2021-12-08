import { useDispatch } from 'react-redux';
import { Section, VoidFn } from 'types';
import { Modal } from 'components';
import { SectionForm } from 'forms/SectionForm';
import { create } from 'store/actions/section';

type SectionProps = {
  visible: boolean,
  onClose: VoidFn;
}

export const SectionCreate = ({ visible, onClose }: SectionProps) => {
  const dispatch = useDispatch();


  const handleFinish = (section: Section) => {
      dispatch(create(section));
      onClose();
  };

  return <Modal visible={visible} title={'Create new section'} onClose={onClose}>
    <SectionForm onFinish={handleFinish} />
  </Modal>;
};
