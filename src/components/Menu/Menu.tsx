import React, { FC } from 'react';
import { TreeItem } from 'types';
import { MenuItem } from './components';

export interface MenuProps {
  tree: TreeItem[];
  nodeRender: (node: TreeItem) => React.ReactElement;
}

export const Menu: FC<MenuProps> = ({ tree, nodeRender }: MenuProps) => {
  return <div className='border-r-2 border-dashed border-cyan-100'>
    {tree.map((node: TreeItem) => (
      <MenuItem item={node} key={node.key} nodeRender={nodeRender} />
    ))}
  </div>;
};
