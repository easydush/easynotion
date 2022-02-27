import { Modal } from '../Modal';
import { Button } from '../Button';

type ConfirmProps = {
  isVisible: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  text?: string;
}


export const Confirm = ({ isVisible, title, onConfirm, onCancel, text }: ConfirmProps) => {
  return <Modal visible={isVisible} title={title} onClose={onCancel}>
    <div className='grid grid-cols-4'>
      <div>{text}</div>
      <div className='col-start-1 col-end-4'>
        <Button outlined secondary children={'Cancel'} onClick={onCancel} />
      </div>
      <div>
        <Button outlined children={'Submit'} onClick={onConfirm} />
      </div>
    </div>
  </Modal>;
};
