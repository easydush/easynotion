import { TreeItem } from 'types';
import { NoteLink } from 'components';

type ItemProps = {
  item: TreeItem;
}

export const MenuItem = ({ item }: ItemProps) => {
  return <div className={`my-4 ml-4 text-lg font-normal  ${item.isRoot && 'mb-8'}`}>
    <NoteLink note={item} isNode />
    {item.nodes && item.nodes.map((child) => (<MenuItem item={child} key={child.key} />),
    )}
  </div>;
};
