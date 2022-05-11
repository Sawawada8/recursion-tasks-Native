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
const save = async () => {
  await storage.save(initialData);
};
save();
// storage.save(initialData);
export default storage;
