import { useDispatch } from 'react-redux';
import { Block } from 'types';
import { Button } from 'components';
import { remove } from 'store/actions/block';

import styles from './BlockView.module.scss'

type BlockProps = {
    block: Block;
}

export const BlockView = ({block}: BlockProps) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remove(block.id))
  }

  return <div className={styles.block}>
    <div>
      {block.content}
    </div>
    <div>
      <Button label={'Delete'} onClick={handleDelete} />
    </div>
  </div>
};
