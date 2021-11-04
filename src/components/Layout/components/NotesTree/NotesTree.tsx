import React from 'react';
import { readTemplate, StaticTreeDataProvider, Tree, UncontrolledTreeEnvironment } from '../../../Tree';


const longTree = readTemplate({
  root: {
    Fruit: {
      Apple: null,
      Orange: null,
      Lemon: null,
      Berries: {
        Strawberry: null,
        Blueberry: null,
      },
      Banana: null,
    },
    Meals: {
      America: {
        SmashBurger: null,
        Chowder: null,
        Ravioli: null,
        MacAndCheese: null,
        Brownies: null,
      },
      Europe: {
        Risotto: null,
        Spaghetti: null,
        Pizza: null,
        Weisswurst: null,
        Spargel: null,
      },
      Asia: {
        Curry: null,
        PadThai: null,
        Jiaozi: null,
        Sushi: null,
      },
      Australia: {
        PotatoWedges: null,
        PokeBowl: null,
        LemonCurd: null,
        KumaraFries: null,
      },
    },
    Desserts: {
      Cookies: null,
      IceCream: null,
    },
    Drinks: {
      PinaColada: null,
      Cola: null,
      Juice: null,
    },
  },
});

export const NotesTree = () => {
  return <UncontrolledTreeEnvironment<string>
    canDragAndDrop={true}
    canDropOnItemWithChildren={true}
    canReorderItems={true}
    dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}
    getItemTitle={item => item.data}
    viewState={{
      ['tree-1']: {},
    }}
  >
    <Tree treeId='tree-1' rootItem='root' treeLabel='Tree Example' />
  </UncontrolledTreeEnvironment>;
};


