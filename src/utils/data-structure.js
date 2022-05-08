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
//   isBiggerThanRoot(i: number): boolean {
//     return this.root < i;
//   }
//   replaceRoot(i: number): void {
//     // this.root =
//   }
// }
// export
var initialData = {
  RootTasks: [
    {
      id: 1,
      name: 'task1',
      path: '1',
      child: [
        {
          id: 7,
          name: 'task2',
          path: '1/2',
          child: [
            {
              id: 11,
              name: 'task3',
              path: '1/2/3',
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
          ],
        },
      ],
    },
  ],
};
function roop(data) {
  for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var ob = data_1[_i];
    for (var _a = 0, _b = ob.child; _a < _b.length; _a++) {
      var obob = _b[_a];
    }
  }
  roop(data);
}
// console.log();
function ff(datas) {
  for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
    var ob = datas_1[_i];
    console.log(ob.child);
    console.log(ob.child.child);
    ff(ob.child);
  }
}
ff(initialData.RootTasks);
function fff(data) {
  ff(data.child);
}
