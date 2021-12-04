import { Note } from 'types';
import {Modal} from 'components';
import { NoteForm } from '../../forms/NoteForm';

type NoteProps = {
  initialData?: Note;
  sectionId?: string;
}
export const NoteEdit = ({initialData, sectionId}: NoteProps) => {
  return <Modal visible={true} title={''}  onClose={()=>{}}>
    <NoteForm/>
  </Modal>
}
