import React from 'react';
import { TreeItem } from 'types';
import { MenuItem } from './components';

export interface TreeProps {
  tree: TreeItem[];
  nodeRender: (node: TreeItem) => React.ReactElement;
}

export const Menu = ({ tree, nodeRender }: TreeProps) => {
  return <div>
    {tree.map((node: TreeItem) => (
      <MenuItem item={node} key={node.key} nodeRender={nodeRender} />
    ))}
  </div>;
};
