import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';

import "react-complex-tree/lib/style.css";

export interface TreeProps {
  tree: any;
  label: string;
}

export const TreeMenu = ({ tree, label }: TreeProps) => {
  return <UncontrolledTreeEnvironment
    dataProvider={new StaticTreeDataProvider(tree.items, (item, data) => ({ ...item, data }))}
    getItemTitle={item => item.data}
    viewState={{}}
  >
    <Tree treeId='tree-1' rootItem='root' treeLabel={label} />
  </UncontrolledTreeEnvironment>;
};
