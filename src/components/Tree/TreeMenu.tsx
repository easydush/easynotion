import TreeMenu, { defaultChildren } from 'react-simple-tree-menu';

import 'react-simple-tree-menu/dist/main.css';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export interface TreeProps {
  tree: any;
}

export const Menu = ({ tree }: TreeProps) => {
  const history = useHistory();
  const handleMenuItemClick = useCallback(
    ({ key }) => {
      history.push(`/note/${key}`);
    },
    [history],
  );
  return <TreeMenu data={tree}
                   onClickItem={handleMenuItemClick}>
    {({ search, items }) => (
      <div>
        {defaultChildren({ search, items })}
      </div>
    )}
  </TreeMenu>;
};
