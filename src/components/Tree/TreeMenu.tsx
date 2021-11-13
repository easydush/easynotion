import TreeMenu, { defaultChildren } from 'react-simple-tree-menu';

import 'react-simple-tree-menu/dist/main.css';

export interface TreeProps {
  tree: any;
  label: string;
}

export const Menu = ({ tree, label }: TreeProps) => {
  // TODO: nagivation
  return <TreeMenu data={tree}>
    {({ search, items, resetOpenNodes }) => (
      <div>
        <button onClick={()=>{}} />
        {defaultChildren({search, items})}
      </div>
    )}
  </TreeMenu>
};
