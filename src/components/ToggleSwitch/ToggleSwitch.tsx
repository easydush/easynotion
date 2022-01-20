import { VoidFn } from 'types';
import styles from './ToggleSwitch.module.scss';

type SwitchProps = {
  value: boolean,
  onToggle: VoidFn,
}

export const ToggleSwitch = ({ value, onToggle }: SwitchProps) => {
  return (
    <label className={styles.toggleSwitch}>
      <input type='checkbox' checked={value} onChange={onToggle} />
      <span className={styles.switch} />
    </label>
  );
};
