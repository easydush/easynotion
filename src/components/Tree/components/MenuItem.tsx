import { TreeItem } from 'types/tree';
import {  useLocation } from 'react-router-dom';
import { NoteLink } from '../../NoteLink';

type ItemProps = {
  item: TreeItem;
}

export const MenuItem = ({ item }: ItemProps) => {
  const location = useLocation();

  const isActive = location.pathname === item.path;
  console.log(location.pathname);
  return <div className={`my-4 ml-4 text-lg font-normal  ${item.isRoot && 'mb-8'}`}>
    <NoteLink note={item} isActive={isActive} />
    {item.nodes && item.nodes.map((child) => (<MenuItem item={child} />),
    )}
  </div>;
};