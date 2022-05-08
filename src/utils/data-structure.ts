// export class DataStructure {
//   public data: any;
//   public root: any;
//   public end: any;
//   constructor(ary: any) {
//     for (const val of ary) {
//       if (this.root == null) {
//         this.root = val;
//       }
//     }
//   }

import {DrawerContentScrollView} from '@react-navigation/drawer';

//   isBiggerThanRoot(i: number): boolean {
//     return this.root < i;
//   }
//   replaceRoot(i: number): void {
//     // this.root =
//   }
// }

export const initialData: any = {
  RootTasks: [
    {
      id: 1,
      name: 'task1',
      path: '1',
      child: [
        {
          id: 7,
          name: 'task2',
          path: '1/7',
          child: [
            {
              id: 11,
              name: 'task3',
              path: '1/7/11',
              child: [],
            },
            {
              id: 11,
              name: 'task3',
              path: '1/7/11',
              child: [],
            },
            {
              id: 11,
              name: 'task3',
              path: '1/7/11',
              child: [],
            },
            {
              id: 11,
              name: 'task3',
              path: '1/7/11',
              child: [],
            },
          ],
        },
        {
          id: 2,
          name: 'task2',
          path: '1/2',
          child: [
            {
              id: 3,
              name: 'task3',
              path: '1/2/3',
              child: [],
            },
          ],
        },
        {
          id: 4,
          path: '1/4',
          name: 'task2',
          child: [
            {
              id: 5,
              name: 'task3',
              path: '1/4/5',
              child: [],
            },
            {
              id: 5,
              name: 'task3',
              path: '1/4/5',
              child: [],
            },
            {
              id: 5,
              name: 'task3',
              path: '1/4/5',
              child: [],
            },
          ],
        },
      ],
    },
  ],
};

function roop(data: any) {
  for (const ob of data) {
    for (const obob of ob.child) {
    }
  }
  roop(data);
}
// console.log();

function ff(datas: any[], currentStructure: string) {
  for (const ob of datas) {
    if (ob.child.length !== 0) {
      console.log(ob.child);
      currentStructure = ` |${ob.id}|${ob.name}| `;
      currentStructure = `${currentStructure} >> ${ff(
        ob.child,
        currentStructure,
      )}`;
    }
  }
  console.log({forend: currentStructure});
  return currentStructure;
}

const currentStructure = '';
console.log({fdfd: ff(initialData.RootTasks, currentStructure)});

// function fff(data: any[]) {
//   ff(data.child);
// }

function fan(str: string, i: number): any {
  str = str + i + '|||';
  i++;
  if (i === 100) return str;
  return fan(str, i);
}
console.log(fan('aa', 3));
