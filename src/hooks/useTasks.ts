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
      .catch(e => {
        if (e.name === 'NotFoundError') {
          // storage.save({
          //   key: storageKey,
          //   data: {
          //     tasks: [],
          //   },
          // });
        } else if (e.name === 'ExpiredError') {
          // console.log({
          //   customfookeerr: e,
          //   errorType: Object.keys(e),
          //   name: e.name,
          // });
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
