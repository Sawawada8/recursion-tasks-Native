import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import {AppStorage} from '../types/storage/data';

//ストレージの作成
const storage: Storage = new Storage({
  // 最大容量
  size: 1000,
  // バックエンドにAsyncStorageを使う
  storageBackend: AsyncStorage,
  // キャッシュ期限(null=期限なし)
  defaultExpires: null,
  // メモリにキャッシュするかどうか
  enableCache: true,
});

// initial data
const initialData: AppStorage = {
  key: 'tasks',
  data: {
    tasks: [
      {
        id: 1,
        title: 'initial task',
        registedAt: new Date(),
        records: [],
      },
    ],
  },
};

export const storageKey = 'TASK001';

/*
storage.remove({key: storageKey});

const save = async () => {
  // await storage.save({
  //   key: storageKey,
  //   id: '12222222222',
  //   data: {
  //     id: '12222222222',
  //     name: 'dfkdjfd',
  //   },
  // });
  // await storage.save({
  //   key: storageKey,
  //   id: '2',
  //   data: {
  //     id: 2,
  //     name: 'dfkdjfd2',
  //   },
  // });
  // await storage.save({
  //   key: storageKey,
  //   data: {
  //     id: 23,
  //     name: 'id without dfkdjfd2',
  //   },
  // });

  // id一覧を取得 idのみ
  await storage.getIdsForKey(storageKey).then(ids => {
    console.log('ids', ids);
  });

  // 指定keyの全てのデータ取得 dataのみ
  await storage.getAllDataForKey(storageKey).then(data => {
    console.log('data', data);
  });

  const uuid = '43314ee7-6c90-4c2b-8485-2f136427c7b1';
  await storage.load({key: storageKey, id: uuid}).then(data => {
    console.log('id2 data uuid', data);
    console.log('id2 data uuid', data.title);
  });
};
save();
// storage.save(initialData);
// */

export default storage;
