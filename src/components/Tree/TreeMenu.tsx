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
    ({ key, label, ...props }) => {
      const { isSection, path } = props;

      if (isSection) history.push(`/section/${key}`);
      else history.push(`/note/${path}`);

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
