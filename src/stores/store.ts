import {StorageData} from '../types/storage/data';
import create from 'zustand';

interface Store {
  tasks: {array: StorageData[]};
  setTasks: (tasks: StorageData[]) => any;
}

const useStore = create((set: any, get: any): Store => {
  return {
    tasks: {array: []},
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
