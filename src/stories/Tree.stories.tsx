import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  StaticTreeDataProvider,
  UncontrolledTreeEnvironment,
  Tree,
} from 'components';

export default {
  title: 'Example/Tree',
  component: Tree,
} as ComponentMeta<typeof Tree>;

const readTemplate = (template: any, data: any = { items: {} }) => {
  for (const [key, value] of Object.entries(template)) {
    data.items[key] = {
      index: key,
      canMove: true,
      hasChildren: value !== null,
      children: value !== null ? Object.keys(value as Record<string, unknown>) : undefined,
      data: key,
      canRename: true,
    };

    if (value !== null) {
      readTemplate(value, data);
    }
  }
  return data;
};


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

const Template: ComponentStory<typeof Tree> = (args) => {
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

export const Long = Template.bind({});
Long.args = {};

