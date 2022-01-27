import React, { FC } from 'react';
import { TreeItem } from 'types';

type ItemProps = {
  item: TreeItem;
  nodeRender: (node: TreeItem) => React.ReactElement;
};

export const MenuItem: FC<ItemProps> = ({ item, nodeRender }: ItemProps) => {
  return (
    <div className={`my-4 ml-4 text-lg font-normal  ${item.isRoot && 'mb-8'}`}>
      {nodeRender(item)}
      {item.nodes &&
        item.nodes.map((childNode) => (
          <MenuItem
            item={childNode}
            key={childNode.key}
            nodeRender={nodeRender}
          />
        ))}
    </div>
  );
};
