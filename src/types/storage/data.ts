enum TaskState {
  'DONE',
  'SKIP',
  'REST',
}

interface TaskRecord {
  date: Date;
  state: TaskState;
  comment?: string;
}

interface StorageData {
  id: number;
  title: string;
  meta: TaskRecord[];
}

export type {TaskState, TaskRecord, StorageData};
