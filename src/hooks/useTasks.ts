import {useState, useEffect} from 'react';

import {AppStorageData, StorageData} from '../types/storage/data';
import storage, {storageKey} from '../storage/AppStorage';

export const useTasks = (navigation: any) => {
  const [tasks, setTasks] = useState<StorageData[]>([]);

  const fetchData = () => {
    storage
      .getAllDataForKey(storageKey)
      .then(dataArray => {
        setTasks(dataArray);
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

  return {
    tasks,
    setTasks,
  };
};
