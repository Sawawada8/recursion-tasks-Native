import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

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
storage.save({
  key: 'tasks',
  data: {
    name: 'study',
    meta: [{date: new Date(), state: 'DONE', comment: 'ok'}],
    tasks: [{id: 1, date: new Date(), state: 'DONE', comment: 'ok'}],
  },
});

export default storage;
