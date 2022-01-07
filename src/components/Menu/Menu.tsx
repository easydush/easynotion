import { TreeItem } from 'types';
import { MenuItem } from './components';

export interface TreeProps {
  tree: TreeItem[];
}

export const Menu = ({ tree }: TreeProps) => {
  return <div>
    {tree.map((node: TreeItem) => (
      <MenuItem item={node} key={node.key} />
    ))}
  </div>;
};
