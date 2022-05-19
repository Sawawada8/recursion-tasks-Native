enum TaskState {
  'DONE',
  'SKIP',
  'REST',
}

interface TaskRecord {
  date: string;
  state: 'DONE' | 'SKIP' | 'REST';
  comment?: string;
}

interface StorageData {
  id: string;
  title: string;
  registedAt: string;
  records: TaskRecord[];
}

interface AppStorageData {
  tasks: StorageData[];
}
interface AppStorage {
  key: string;
  data: AppStorageData;
}

export type {TaskState, TaskRecord, StorageData, AppStorageData, AppStorage};
