export type TreeItem = {
  key: string,
  path: string,
  title: string,
  isRoot: boolean,
  nodes: TreeItem[],
}
