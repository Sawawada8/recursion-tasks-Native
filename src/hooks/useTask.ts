import {useState, useEffect} from 'react';

import {AppStorageData, StorageData} from '../types/storage/data';
import storage, {storageKey} from '../storage/AppStorage';

export const useTask = (
  id: string,
  navigation: any,
): {
  task: StorageData | undefined;
  setTask: (e: any) => void;
} => {
  const [task, setTask] = useState<StorageData>();

  const fetchData = () => {
    storage
      .load({key: storageKey, id: id})
      .then(data => {
        setTask(data);
      })
      .catch(e => {
        if (e.name === 'NotFoundError') {
        } else if (e.name === 'ExpiredError') {
        }
      });
  };

  useEffect(() => {
    fetchData();

    const willFocusSubscription = navigation.addListener('focus', () => {
      fetchData();
    });
    return willFocusSubscription;
  }, []);

  return {
    task,
    setTask,
  };
};
