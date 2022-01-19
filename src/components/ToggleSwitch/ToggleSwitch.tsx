import { VoidFn } from 'types';

type SwitchProps = {
  value: boolean,
  onToggle: VoidFn,
}

export const ToggleSwitch = ({ value, onToggle }: SwitchProps) => {
  return <label className="toggle-switch">
    <input type="checkbox" checked={value} onChange={onToggle} />
    <span className="switch" />
  </label>
};
