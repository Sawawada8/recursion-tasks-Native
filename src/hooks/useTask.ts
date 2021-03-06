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
      .then((data: StorageData) => {
        setTask(data);
      })
      .catch(err => {
        switch (err.name) {
          case 'NotFoundError':
            // error
            break;
          case 'ExpiredError':
            break;
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

  useEffect(() => {
    if (task === undefined) {
      return;
    }

    storage.save({
      key: storageKey,
      id: id,
      data: task,
    });
  }, [task]);

  return {
    task,
    setTask,
  };
};
