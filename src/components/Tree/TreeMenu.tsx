import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import TreeMenu, { defaultChildren } from 'react-simple-tree-menu';

import 'react-simple-tree-menu/dist/main.css';

export interface TreeProps {
  tree: any;
}

export const Menu = ({ tree }: TreeProps) => {
  const history = useHistory();

  const handleMenuItemClick = useCallback(
    ({ path }) => {
      history.push(path);
    },
    [history],
  );

  return <TreeMenu data={tree}
                   onClickItem={handleMenuItemClick} hasSearch={tree.length > 0}>
    {({ search, items }) => (
      <div>
        {defaultChildren({ search, items })}
      </div>
    )}
  </TreeMenu>;
};
