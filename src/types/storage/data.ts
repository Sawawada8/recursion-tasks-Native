enum TaskState {
  'DONE',
  'SKIP',
  'REST',
}

interface TaskRecord {
  date: Date;
  state: 'DONE' | 'SKIP' | 'REST';
  comment?: string;
}

interface StorageData {
  id: number;
  title: string;
  registedAt: Date;
  records: TaskRecord[];
}

interface AppStorage {
  key: string;
  data: {
    tasks: StorageData[];
  };
}

export type {TaskState, TaskRecord, StorageData, AppStorage};
