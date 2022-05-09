import {StorageData} from '../types/storage/data';
import create from 'zustand';

interface Store {
  tasks: StorageData[];
  setTasks: (tasks: StorageData[]) => any;
}

const useStore = create((set: any, get: any): any => {
  return {
    tasks: {data: []},
    setTasks: (newTasks: StorageData[]): any => {
      return set(() => {
        return {
          tasks: {data: [...newTasks]},
        };
      });
    },
  };
});

export default useStore;
